import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import { APP_URL, TEACHER_URL } from "../config/urls";
import {
  AuthShell, Field, PasswordField, Option, FooterLink,
} from "./AuthKit";

/* ════════════════════════════════════════════════════════════════
   Login — mirrors the design's login branch:
     login_as (role) -> credentials -> [teacher: learner|teacher] ->
     [student / learner: choose profile] -> [pin?] -> dashboard
   Wired to the real two-step backend:
     1. login(email, password)              -> { profiles, teacher }
     2. selectProfile(id, pin?)  OR  enterTeacherMode()
   Email + password are collected together (backend requires both),
   then we branch exactly as the design's profile/account-type screens.
════════════════════════════════════════════════════════════════ */

const STEP_ROLE      = "role";
const STEP_CREDS     = "creds";
const STEP_ACCT_TYPE = "acct_type";  // teacher with dual identity: Learner | Teacher
const STEP_PROFILES  = "profiles";
const STEP_PIN       = "pin";

const PAL = { student: "#138A6B", faculty: "#2F6BD8", admin: "#C2841C" };

function readErr(err, fallback) {
  const raw = err?.message ?? err;
  return raw instanceof Error ? raw.message
    : typeof raw === "string" ? raw
    : err?.response?.data?.detail || fallback;
}

export default function Login() {
  const { login, selectProfile, enterTeacherMode } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();

  const [step, setStep]   = useState(STEP_ROLE);
  const [role, setRole]   = useState("");
  const [error, setError] = useState("");
  const [statusMsg, setStatusMsg]       = useState("");
  const [submitting, setSubmitting]     = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);

  const [profiles, setProfiles] = useState([]);
  const [teacher, setTeacher]   = useState(null);

  const [pendingProfile, setPendingProfile] = useState(null);
  const [pin, setPin] = useState("");

  const accent = role === "teacher" ? "faculty" : role === "admin" ? "admin" : "student";

  useEffect(() => {
    if (location.state?.message) setStatusMsg(location.state.message);
  }, [location.state]);

  const finishAndRedirect = (target = APP_URL) => {
    setIsRedirecting(true);
    setStatusMsg("Login successful! Redirecting…");
    setTimeout(() => { window.location.href = target; }, 1100);
  };

  const pickRole = (r) => { setRole(r); setError(""); setStep(STEP_CREDS); };

  const submitCreds = async (e) => {
    e.preventDefault();
    setError(""); setStatusMsg(""); setSubmitting(true);
    try {
      setStatusMsg("Checking your account…");
      const data = await login(email, password);
      const list = Array.isArray(data?.profiles) ? data.profiles : [];
      const hasTeacher = !!data?.teacher;
      setProfiles(list);
      setTeacher(data?.teacher || null);
      setStatusMsg("");

      // ── Admin: skip profile picker, go straight to the app ──
      if (role === "admin") {
        // Auto-select the first learner profile so the JWT has a context.
        // Admins reach admin-specific features inside the app.
        if (list.length > 0) {
          await selectProfile(list[0].id);
        }
        showToast({ message: "Welcome back!", duration: 2000 });
        finishAndRedirect(APP_URL);
        return;
      }

      // ── Teacher with an approved teacher identity ──
      if (role === "teacher" && hasTeacher) {
        if (list.length === 0) {
          // No learner profiles — go straight to teaching dashboard.
          await enterTeacherMode();
          showToast({ message: "Welcome back!", duration: 2000 });
          finishAndRedirect(TEACHER_URL);
          return;
        }
        // Has BOTH learner profiles and a teacher identity →
        // show the account-type chooser (Learner | Teacher).
        setStep(STEP_ACCT_TYPE);
        setSubmitting(false);
        return;
      }

      // ── Student / teacher without an approved teacher identity ──
      // Auto-advance if there's exactly one open profile.
      const onlyOpen =
        list.length === 1 && !list[0].requires_pin ? list[0] : null;
      if (onlyOpen) {
        await selectProfile(onlyOpen.id);
        showToast({ message: "Welcome back!", duration: 2000 });
        finishAndRedirect(APP_URL);
        return;
      }

      setStep(STEP_PROFILES);
      setSubmitting(false);
    } catch (err) {
      setError(readErr(err, "Login failed"));
      setStatusMsg("");
      setSubmitting(false);
    }
  };

  const chooseProfile = async (p) => {
    setError("");
    if (p.requires_pin) { setPendingProfile(p); setPin(""); setStep(STEP_PIN); return; }
    setSubmitting(true);
    try {
      await selectProfile(p.id);
      showToast({ message: "Welcome back!", duration: 2000 });
      finishAndRedirect(APP_URL);
    } catch (err) {
      setError(readErr(err, "Could not open that profile."));
      setSubmitting(false);
    }
  };

  const enterTeaching = async () => {
    setError(""); setSubmitting(true);
    try {
      await enterTeacherMode();
      showToast({ message: "Welcome back!", duration: 2000 });
      finishAndRedirect(TEACHER_URL);
    } catch (err) {
      setError(readErr(err, "Could not switch to teaching."));
      setSubmitting(false);
    }
  };

  const submitPin = async (e) => {
    e.preventDefault();
    setError(""); setSubmitting(true);
    try {
      await selectProfile(pendingProfile.id, pin);
      showToast({ message: "Welcome back!", duration: 2000 });
      finishAndRedirect(APP_URL);
    } catch (err) {
      setError(readErr(err, "Incorrect PIN."));
      setSubmitting(false);
    }
  };

  const back = () => {
    setError("");
    if (step === STEP_CREDS)     { setStep(STEP_ROLE); }
    if (step === STEP_ACCT_TYPE) { setStep(STEP_CREDS); }
    // If teacher chose "Learner" from the account-type screen, back returns there.
    if (step === STEP_PROFILES)  { setStep(teacher ? STEP_ACCT_TYPE : STEP_CREDS); }
    if (step === STEP_PIN)       { setStep(STEP_PROFILES); }
  };

  const flowLabel =
    step === STEP_ROLE      ? "Log in" :
    step === STEP_ACCT_TYPE ? "Log in · Teacher" :
    role === "teacher"      ? "Log in · Teacher" :
    role === "admin"        ? "Log in · Admin" : "Log in · Student";

  // "decision" for branching screens; role-specific accent otherwise.
  const shellRole =
    step === STEP_ROLE || step === STEP_ACCT_TYPE ? "decision" : accent;

  return (
    <AuthShell role={shellRole} flowLabel={flowLabel}>

      {isRedirecting && (
        <div className="af-overlay">
          <div className="af-overlay__card">
            <div className="af-overlay__spin" />
            <h3>Please wait</h3>
            <p>{statusMsg}</p>
          </div>
        </div>
      )}

      <div className="af-toprow">
        {step !== STEP_ROLE
          ? <button className="af-iconbtn" onClick={back} aria-label="Back">‹</button>
          : <span />}
      </div>

      {/* Log in as */}
      {step === STEP_ROLE && (
        <>
          <h1 className="af-heading">Log in as</h1>
          <p className="af-sub">Choose your account type.</p>
          <div className="af-options">
            <Option label="Student" sub="Learner profiles"
              dot={PAL.student} onClick={() => pickRole("student")} />
            <Option label="Teacher" sub="Guest expert or faculty"
              dot={PAL.faculty} onClick={() => pickRole("teacher")} />
            <Option label="Admin" sub="Staff access"
              dot={PAL.admin} onClick={() => pickRole("admin")} />
          </div>
          <div className="af-spacer" />
          <FooterLink>
            Don't have an account? <Link to="/signup">Create one</Link>
          </FooterLink>
        </>
      )}

      {/* Credentials */}
      {step === STEP_CREDS && (
        <>
          <h1 className="af-heading">Welcome back</h1>
          <p className="af-sub">Enter your email and password to continue.</p>

          <form onSubmit={submitCreds} style={{ display: "contents" }}>
            <Field id="lf-email" label="Email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
              required autoFocus autoComplete="email" />

            <PasswordField id="lf-password" label="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
              required autoComplete="current-password"
              show={showPw} onToggle={() => setShowPw((p) => !p)} />

            <Link to="/forgot-password" className="af-note">Forgot password?</Link>

            {error && <div className="af-error">{error}</div>}

            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Signing in…</> : "Log in"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* Choose: Learner or Teacher */}
      {step === STEP_ACCT_TYPE && (
        <>
          <h1 className="af-heading">Which account?</h1>
          <p className="af-sub">This email has both a learner and a teaching identity. Where to?</p>

          <div className="af-options">
            <Option
              label="Learner"
              sub="Browse and continue my courses"
              dot={PAL.student}
              onClick={() => { setError(""); setStep(STEP_PROFILES); }}
            />
            <Option
              label="Teacher"
              sub="Open my teaching dashboard"
              dot={PAL.faculty}
              onClick={enterTeaching}
            />
          </div>

          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
        </>
      )}

      {/* Choose a profile */}
      {step === STEP_PROFILES && (
        <>
          <h1 className="af-heading">Choose a profile</h1>
          <p className="af-sub">All profiles under this account.</p>

          <div className="af-options">
            {profiles.map((p) => (
              <Option
                key={p.id}
                label={p.display_name || p.name || "Profile"}
                sub={p.requires_pin ? "PIN protected" : (p.relationship === "SELF" ? "You" : "Learner")}
                dot={PAL.student}
                onClick={() => chooseProfile(p)}
              />
            ))}

            {teacher && (
              <Option
                label="Teaching"
                sub="Open your teaching dashboard"
                dot={PAL.faculty}
                onClick={enterTeaching}
              />
            )}
          </div>

          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
        </>
      )}

      {/* PIN */}
      {step === STEP_PIN && (
        <>
          <h1 className="af-heading">Enter PIN</h1>
          <p className="af-sub">
            {pendingProfile?.display_name
              ? <>Enter the PIN for <strong>{pendingProfile.display_name}</strong>.</>
              : "Enter your profile PIN."}
          </p>

          <form onSubmit={submitPin} style={{ display: "contents" }}>
            <div className="af-field">
              <label htmlFor="lf-pin">PIN</label>
              <input
                id="lf-pin" inputMode="numeric" autoComplete="off"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                placeholder="••••" maxLength={6} required autoFocus
                style={{ letterSpacing: ".5em", textAlign: "center", fontSize: 18 }}
              />
            </div>

            {error && <div className="af-error">{error}</div>}

            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting || pin.length < 4}>
                {submitting ? <><span className="af-spin" />Unlocking…</> : "Open profile"}
              </button>
            </div>
          </form>
        </>
      )}

    </AuthShell>
  );
}
