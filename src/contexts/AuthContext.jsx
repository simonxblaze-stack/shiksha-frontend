import { createContext, useContext, useEffect, useState, useCallback } from "react";
import api from "../api/apiClient";
import extractError from "../utils/extractError";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);          // /me/ payload (account + active context)
  const [profiles, setProfiles] = useState([]);    // learner profiles under the account
  const [teacherInfo, setTeacherInfo] = useState(null);
  const [context, setContext] = useState(null);    // "account" | "learner" | "teacher"
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;
  // Authenticated at the account level but no profile/teacher context chosen yet.
  const needsProfileSelection = isAuthenticated && context === "account";
  const activeProfile = user?.active_profile || null;

  const refreshToken = async () => {
    try {
      await api.post("/accounts/refresh/");
      return true;
    } catch {
      return false;
    }
  };

  /** Load /me/ — reflects the active context from the JWT (reload-safe). */
  const bootstrap = useCallback(async () => {
    const apply = (data) => {
      setUser(data);
      setContext(data.context || "account");
      setProfiles(Array.isArray(data.profiles) ? data.profiles : []);
      setTeacherInfo(data.teacher || null);
      return data;
    };
    try {
      const res = await api.get("/accounts/me/");
      return apply(res.data);
    } catch {
      const refreshed = await refreshToken();
      if (refreshed) {
        try {
          const res = await api.get("/accounts/me/");
          return apply(res.data);
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

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  /** Step 1 — authenticate the account. Returns { profiles, teacher }. */
  const login = async (email, password) => {
    try {
      const res = await api.post("/accounts/login/", { email, password });
      setProfiles(res.data.profiles || []);
      setTeacherInfo(res.data.teacher || null);
      setContext("account");
      return res.data; // { context, profiles, teacher }
    } catch (err) {
      return Promise.reject({ message: extractError(err), raw: err });
    }
  };

  /** Step 2 — pick / switch a learner profile (PIN-gated). */
  const selectProfile = async (profileId, pin) => {
    try {
      await api.post("/accounts/profiles/select/", { profile_id: profileId, pin });
      setLoading(true);
      return await bootstrap();
    } catch (err) {
      return Promise.reject({ message: extractError(err), raw: err });
    }
  };

  const switchProfile = selectProfile;

  /** Enter teacher mode (no re-login). */
  const enterTeacherMode = async () => {
    try {
      await api.post("/accounts/context/teacher/");
      setLoading(true);
      return await bootstrap();
    } catch (err) {
      return Promise.reject({ message: extractError(err), raw: err });
    }
  };

  const signup = async (payload) => {
    try {
      await api.post("/accounts/signup/", payload);
    } catch (err) {
      return Promise.reject({ message: extractError(err), raw: err });
    }
  };

  const logout = async () => {
    try {
      await api.post("/accounts/logout/");
    } catch { /* ignore */ }
    setUser(null);
    setProfiles([]);
    setTeacherInfo(null);
    setContext(null);
  };

  const hasRole = (role) => {
    if (!user) return false;
    const target = String(role).toLowerCase();
    if (Array.isArray(user.roles)) {
      return user.roles.some((r) => String(r).toLowerCase() === target);
    }
    return false;
  };

  const isTeacherContext = context === "teacher";

  return (
    <AuthContext.Provider
      value={{
        user,
        profiles,
        teacherInfo,
        context,
        activeProfile,
        isAuthenticated,
        needsProfileSelection,
        isTeacherContext,
        loading,
        login,
        selectProfile,
        switchProfile,
        enterTeacherMode,
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
