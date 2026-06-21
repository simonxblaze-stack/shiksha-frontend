import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { HOME_URL, LOGIN_URL, APP_DASHBOARD_URL, TEACHER_DASHBOARD_URL } from "../config/urls";
import "./ProfilePicker.css";

const Avatar = ({ profile }) => {
  if (profile.avatar_type === "image" && profile.avatar) {
    return <img className="pp-avatar" src={profile.avatar} alt="" />;
  }
  const initial = (profile.display_name || "?").trim().charAt(0).toUpperCase();
  return (
    <div className="pp-avatar pp-avatar-fallback">
      {profile.avatar_type === "emoji" && profile.avatar ? profile.avatar : initial}
    </div>
  );
};

const ProfilePicker = () => {
  const {
    profiles, teacherInfo, context, isAuthenticated, loading,
    selectProfile, enterTeacherMode,
  } = useAuth();
  const navigate = useNavigate();

  const [pinFor, setPinFor]   = useState(null); // profile id awaiting a PIN
  const [pin, setPin]         = useState("");
  const [busy, setBusy]       = useState(false);
  const [error, setError]     = useState("");

  // ── FIX: teacher-mode password prompt ──
  const [teachPwVisible, setTeachPwVisible] = useState(false);
  const [teachPw, setTeachPw]               = useState("");

  // Bounce out if there's no account session, or a context is already chosen.
  useEffect(() => {
    if (loading) return;
    if (!isAuthenticated) {
      window.location.href = LOGIN_URL;
    } else if (context === "learner") {
      window.location.href = APP_DASHBOARD_URL;
    } else if (context === "teacher") {
      window.location.href = TEACHER_DASHBOARD_URL;
    }
  }, [loading, isAuthenticated, context]);

  // Route to the correct dashboard by context (was hardcoded to HOME_URL,
  // which is why entering teacher mode never reached the teacher dashboard).
  const goLearner = () => { window.location.href = APP_DASHBOARD_URL; };
  const goTeacher = () => { window.location.href = TEACHER_DASHBOARD_URL; };

  const choose = async (profile) => {
    setError("");
    if (profile.requires_pin && pinFor !== profile.id) {
      setPinFor(profile.id);
      setPin("");
      return;
    }
    setBusy(true);
    try {
      await selectProfile(profile.id, profile.requires_pin ? pin : undefined);
      goLearner();
    } catch (err) {
      setError(err?.message || "Could not open that profile.");
      setBusy(false);
    }
  };

  // ── FIX: first click reveals the password field; second click submits ──
  const teach = async () => {
    setError("");
    if (!teachPwVisible) {
      setTeachPwVisible(true);
      setTeachPw("");
      return;
    }
    setBusy(true);
    try {
      const result = await enterTeacherMode(teachPw); // ← FIX: pass password
      if (result?.needsSignup) {
        setError("No teacher identity found on this account.");
        setBusy(false);
        return;
      }
      if (result?.notApproved) {
        setError("Your teacher account is awaiting approval.");
        setBusy(false);
        return;
      }
      goTeacher();
    } catch (err) {
      setError(err?.message || "Incorrect password.");
      setTeachPw("");
      setBusy(false);
    }
  };

  return (
    <div className="pp-container">
      <div className="pp-inner">
        <h1 className="pp-title">Who's learning?</h1>

        {error && <p className="pp-error">{error}</p>}

        <div className="pp-grid">
          {profiles.map((p) => (
            <div key={p.id} className="pp-card">
              <button
                type="button"
                className="pp-card-btn"
                disabled={busy}
                onClick={() => choose(p)}
              >
                <Avatar profile={p} />
                <span className="pp-name">{p.display_name}</span>
                {p.relationship === "DEPENDENT" && <span className="pp-tag">Child</span>}
                {p.requires_pin && <span className="pp-lock">🔒</span>}
              </button>

              {pinFor === p.id && p.requires_pin && (
                <div className="pp-pin-row">
                  <input
                    className="pp-pin"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="PIN"
                    value={pin}
                    autoFocus
                    onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                    onKeyDown={(e) => e.key === "Enter" && choose(p)}
                    disabled={busy}
                  />
                  <button className="pp-pin-go" disabled={busy || pin.length < 4} onClick={() => choose(p)}>
                    Go
                  </button>
                </div>
              )}
            </div>
          ))}

          {teacherInfo && (
            <div className="pp-card">
              <button
                type="button"
                className="pp-card-btn pp-teach"
                disabled={busy}
                onClick={teach}
              >
                <div className="pp-avatar pp-avatar-fallback pp-teach-avatar">T</div>
                <span className="pp-name">Teaching</span>
                <span className="pp-tag">
                  {teacherInfo.type === "GUEST" ? "Guest expert"
                    : teacherInfo.type === "FACULTY" ? "Faculty"
                    : "Teacher"}
                </span>
              </button>

              {/* ── FIX: inline password prompt (appears on first click) ── */}
              {teachPwVisible && (
                <div className="pp-pin-row">
                  <input
                    className="pp-pin"
                    type="password"
                    placeholder="Password"
                    value={teachPw}
                    autoFocus
                    onChange={(e) => setTeachPw(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && teach()}
                    disabled={busy}
                  />
                  <button
                    className="pp-pin-go"
                    disabled={busy || teachPw.length < 1}
                    onClick={teach}
                  >
                    Go
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePicker;
