import { createContext, useContext, useEffect, useState, useCallback } from "react";
import api from "../api/apiClient";
import extractError from "../utils/extractError";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  /**
   * Refresh access token using refresh cookie
   */
  const refreshToken = async () => {
    try {
      await api.post("/accounts/refresh/");
      return true;
    } catch {
      return false;
    }
  };

  /**
   * Bootstrap user session
   */
  const bootstrap = useCallback(async () => {
    try {
      const res = await api.get("/accounts/me/");
      setUser(res.data);
      return res.data;
    } catch (err) {
      // 🔥 Try refresh once
      const refreshed = await refreshToken();

      if (refreshed) {
        try {
          const res = await api.get("/accounts/me/");
          setUser(res.data);
          return res.data;
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }

      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Initial bootstrap
   */
  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  /**
   * Login. `identifier` is a username OR an email.
   *
   * Returns { me, redirect } on success, where:
   *   - me        = the /me/ payload (also stored as `user`)
   *   - redirect  = { role, dashboard_url } from the backend, or null
   *
   * On the shared-email case the backend returns HTTP 409 with
   * { code: "ambiguous_email" }. We reject with that `code` so the login
   * form can reveal a username field and ask the user to retry by username.
   */
  const login = async (identifier, password) => {
    try {
      const res = await api.post("/accounts/login/", { identifier, password });

      setLoading(true);
      const me = await bootstrap();
      return { me, redirect: res.data?.redirect ?? null };
    } catch (err) {
      setLoading(false);

      const code = err?.response?.data?.code ?? null;
      const cleanError = extractError(err);

      return Promise.reject({
        message: cleanError,
        code,
        raw: err,
      });
    }
  };

  /**
   * Signup
   */
  const signup = async (payload) => {
    try {
      await api.post("/accounts/signup/", payload);
    } catch (err) {
      return Promise.reject({
        message: extractError(err),
        raw: err,
      });
    }
  };

  /**
   * Logout
   */
  const logout = async () => {
    try {
      await api.post("/accounts/logout/");
    } catch {
      // ignore
    }

    setUser(null);
  };

  /**
   * Role checker. Accounts are single-role; `user.roles` is an array of
   * role-name strings (e.g. ["STUDENT"]). Comparison is case-insensitive.
   */
  const hasRole = (role) => {
    if (!user || !Array.isArray(user.roles)) return false;
    const target = String(role).toLowerCase();
    return user.roles.some((r) => String(r).toLowerCase() === target);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        signup,
        logout,
        hasRole,
        bootstrap,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
