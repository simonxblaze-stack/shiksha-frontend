import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { HOME_URL, LOGIN_URL, TEACHER_URL } from "../config/urls";
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

  const [pinFor, setPinFor]       = useState(null);
  const [pin, setPin]             = useState("");
  const [teachPwOpen, setTeachPwOpen] = useState(false);
  const [teachPw, setTeachPw]     = useState("");
  const [busy, setBusy]           = useState(false);
  const [error, setError]         = useState("");

  useEffect(() => {
    if (loading) return;
    if (!isAuthenticated) {
      window.location.href = LOGIN_URL;
      return;
    }
    // Already in teacher context → go straight to teacher dashboard.
    if (context === "teacher") {
      window.location.href = TEACHER_URL;
    }
    // learner context is fine here — they may still want to switch to teacher mode.
  }, [loading, isAuthenticated, context]);

  const goHome = () => { window.location.href = HOME_URL; };

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
      goHome();
    } catch (err) {
      setError(err?.message || "Could not open that profile.");
      setBusy(false);
    }
  };

  const teach = async () => {
    setError("");
    setBusy(true);
    try {
      await enterTeacherMode(teachPw);
      window.location.href = TEACHER_URL;
    } catch (err) {
      const code = err?.raw?.response?.data?.code;
      if (code === "bad_password") {
        setError("Incorrect teacher password.");
      } else if (code === "not_approved") {
        setError("Your teacher account is awaiting approval.");
      } else {
        setError(err?.message || "Could not switch to teaching.");
      }
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
                  <button
                    className="pp-pin-go"
                    disabled={busy || pin.length < 4}
                    onClick={() => choose(p)}
                  >
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
                onClick={() => { setTeachPwOpen(true); setError(""); }}
              >
                <div className="pp-avatar pp-avatar-fallback pp-teach-avatar">T</div>
                <span className="pp-name">Teaching</span>
                <span className="pp-tag">
                  {teacherInfo.type === "GUEST" ? "Guest expert"
                    : teacherInfo.type === "FACULTY" ? "Faculty"
                    : "Teacher"}
                </span>
              </button>

              {teachPwOpen && (
                <div className="pp-pin-row">
                  <input
                    className="pp-pin"
                    type="password"
                    placeholder="Teacher password"
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
