import { createContext, useContext, useEffect, useState, useCallback } from "react";
import api from "../api/apiClient";
import extractError from "../utils/extractError";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser]             = useState(null);
  const [profiles, setProfiles]     = useState([]);
  const [teacherInfo, setTeacherInfo] = useState(null);
  const [context, setContext]       = useState(null); // "account" | "learner" | "teacher"
  const [loading, setLoading]       = useState(true);

  const isAuthenticated       = !!user;
  const needsProfileSelection = isAuthenticated && context === "account";
  const activeProfile         = user?.active_profile || null;
  const isTeacherContext      = context === "teacher";
  const isLearnerContext      = context === "learner";   // ← added

  const refreshToken = async () => {
    try   { await api.post("/accounts/refresh/"); return true; }
    catch  { return false; }
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
        try   { return apply((await api.get("/accounts/me/")).data); }
        catch  { setUser(null); }
      } else {
        setUser(null);
      }
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { bootstrap(); }, [bootstrap]);

  /** Step 1 — authenticate the account. Returns { profiles, teacher }. */
  const login = async (email, password) => {
    try {
      const res = await api.post("/accounts/login/", { email, password });
      setProfiles(res.data.profiles || []);
      setTeacherInfo(res.data.teacher || null);
      setContext("account");
      return res.data;
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

  /**
   * Enter teacher mode — requires the teacher-context password.
   * If the teacher never set a separate teacher password, the account
   * password (the one just used to log in) is accepted as fallback.
   *
   * Returns:
   *   { ok: true }           → switched successfully
   *   { needsSignup: true }  → no teacher identity on this account
   *   { notApproved: true }  → pending admin approval
   *   throws { message }     → wrong password or other error
   */
  const enterTeacherMode = async (password) => {        // ← fixed: accepts password
    try {
      await api.post("/accounts/context/teacher/", { password });  // ← fixed: sends it
      setLoading(true);
      await bootstrap();
      return { ok: true };
    } catch (err) {
      const code = err?.response?.data?.code;
      if (code === "no_teacher")    return { needsSignup: true };
      if (code === "not_approved")  return { notApproved: true };
      return Promise.reject({ message: extractError(err), raw: err });
    }
  };

  /**
   * Set or change the separate teacher-context password.
   * Pass the current account/teacher password as currentPassword.
   */
  const setTeacherPassword = async (currentPassword, newPassword) => {  // ← added
    try {
      await api.post("/accounts/context/teacher/password/", {
        current_password: currentPassword,
        new_password: newPassword,
      });
      return { ok: true };
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

  /**
   * Email-first profile lookup — returns { profiles, has_teacher } without
   * requiring a password. Safe to call on any email.
   */
  const lookupEmail = async (email) => {
    try {
      const res = await api.post("/accounts/profiles/lookup/", {
        email: email.trim().toLowerCase(),
      });
      return res.data;
    } catch {
      return { profiles: [], has_teacher: false };
    }
  };

  /**
   * Email state check for signup gate.
   * Returns { exists, has_student, has_teacher, is_verified }.
   */
  const checkEmail = async (email) => {
    try {
      const res = await api.post("/accounts/email/check/", {
        email: email.trim().toLowerCase(),
      });
      return res.data;
    } catch {
      return { exists: false, has_student: false, has_teacher: false, is_verified: false };
    }
  };

  const logout = async () => {
    try { await api.post("/accounts/logout/"); } catch { /* ignore */ }
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
        isLearnerContext,       // ← added
        loading,
        login,
        selectProfile,
        switchProfile,
        enterTeacherMode,
        setTeacherPassword,     // ← added
        signup,
        lookupEmail,
        checkEmail,
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
