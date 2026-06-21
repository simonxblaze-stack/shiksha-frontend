import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import { APP_URL } from "../config/urls";
import { AuthShell, Field, PasswordField, FooterLink } from "./AuthKit";

/* ════════════════════════════════════════════════════════════════
   Login — CLEAN single-account model (Netflix flow)

   You log in ONCE. Then the picker decides who you are.

   Step 1  email      → optional pre-auth lookup for a friendly greeting
   Step 2  password   → POST /accounts/login/
                          · context "learner" (backend auto-selected a single
                            PIN-free profile, no teacher) → student dashboard
                          · context "account" (multiple profiles, a PIN, or a
                            teacher identity exists) → /pick-profile

   REMOVED vs. the old flow (this was the source of the confusion):
     - "Log in as Student / Teacher / Admin" role grid    → gone
     - Teacher "Learner | Teacher" sub-choice             → gone (picker does it)
     - Pre-auth profile GRID on the login screen          → gone (picker does it)
     - Teacher-type (Guest | Faculty) picker              → gone (routed by backend)
     - Admin 2FA stub screen                              → gone (admins log in
       with the same email + password and are routed by role; see ADMIN note)

   The ProfilePicker (/pick-profile) is the single switchboard for
   "who am I right now": learner tiles (people) + one Teaching tile (a mode).
════════════════════════════════════════════════════════════════ */

const STEP_EMAIL = "email";
const STEP_PW     = "pw";

function readErr(err, fallback) {
  const raw = err?.message ?? err;
  return raw instanceof Error ? raw.message
    : typeof raw === "string" ? raw
    : err?.response?.data?.detail || fallback;
}

export default function Login() {
  const { login, lookupEmail, hasRole } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  const [step, setStep]             = useState(STEP_EMAIL);
  const [email, setEmail]           = useState("");
  const [password, setPassword]     = useState("");
  const [showPw, setShowPw]         = useState(false);
  const [greetName, setGreetName]   = useState("");
  const [error, setError]           = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [statusMsg, setStatusMsg]   = useState("");

  // Carry messages forwarded from signup / "identity added" flows.
  useEffect(() => {
    if (location.state?.message) setStatusMsg(location.state.message);
  }, [location.state]);

  const finishAndRedirect = (target) => {
    setIsRedirecting(true);
    setStatusMsg("Login successful! Redirecting…");
    setTimeout(() => { window.location.href = target; }, 1000);
  };

  /* ── Step 1: email → friendly greeting, then password ── */
  const submitEmail = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) { setError("Please enter your email."); return; }
    setSubmitting(true);
    try {
      // Pre-auth lookup returns display names only (no secrets). Used purely
      // to greet the user; failure is non-blocking and never reveals whether
      // the email exists beyond what the picker already shows.
      const data = await lookupEmail(email);
      const first = (data?.profiles || [])[0];
      setGreetName(first?.display_name || "");
    } catch {
      setGreetName("");
    } finally {
      setSubmitting(false);
      setStep(STEP_PW);
    }
  };

  /* ── Step 2: password → real login → route by context ── */
  const submitPw = async (e) => {
    e.preventDefault();
    setError(""); setSubmitting(true);
    try {
      setStatusMsg("Checking your account…");
      const data = await login(email, password);
      setStatusMsg("");

      // ── ADMIN (routed by role, no separate UI) ──
      // Admins log in with the same email + password. When you have an admin
      // destination, set VITE_ADMIN_URL and route here:
      //   if (hasRole("ADMIN")) return finishAndRedirect(ADMIN_URL);
      // (Left out by request — there is no admin dashboard in scope yet.)

      // ── Backend auto-selected a single PIN-free learner, no teacher ──
      if (data?.context === "learner" || data?.auto_selected) {
        showToast({ message: "Welcome back!", duration: 2000 });
        finishAndRedirect(APP_URL);
        return;
      }

      // ── Everything else → the picker decides (multiple profiles, a PIN,
      //    or a teacher identity exists). Smooth SPA navigation — no reload,
      //    the AuthProvider state set by login() carries straight into it. ──
      navigate("/pick-profile");
    } catch (err) {
      setError(readErr(err, "Login failed."));
      setStatusMsg(""); setSubmitting(false);
    }
  };

  const back = () => {
    setError(""); setStatusMsg("");
    setStep(STEP_EMAIL);
  };

  return (
    <AuthShell role="student" flowLabel="Log in">

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
        {step !== STEP_EMAIL
          ? <button className="af-iconbtn" onClick={back} aria-label="Back">‹</button>
          : <span />}
      </div>

      {/* ── Step 1: email ── */}
      {step === STEP_EMAIL && (
        <>
          <h1 className="af-heading">Welcome back</h1>
          <p className="af-sub">Log in with your email to continue.</p>
          {statusMsg && !error && <div className="af-status">{statusMsg}</div>}
          <form onSubmit={submitEmail} style={{ display: "contents" }}>
            <Field id="lf-email" label="Email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
              required autoFocus autoComplete="email" />
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Checking…</> : "Continue"}
              </button>
            </div>
          </form>
          <FooterLink>Don't have an account? <Link to="/signup">Create one</Link></FooterLink>
        </>
      )}

      {/* ── Step 2: password ── */}
      {step === STEP_PW && (
        <>
          <h1 className="af-heading">{greetName ? `Hi, ${greetName}` : "Enter your password"}</h1>
          <p className="af-sub">Enter the password for <strong>{email}</strong>.</p>
          <form onSubmit={submitPw} style={{ display: "contents" }}>
            <PasswordField id="lf-password" label="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
              required autoFocus autoComplete="current-password"
              show={showPw} onToggle={() => setShowPw((v) => !v)} />
            <Link to="/forgot-password" className="af-note">Forgot password?</Link>
            {error && <div className="af-error">{error}</div>}
            {statusMsg && !error && <div className="af-status">{statusMsg}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Signing in…</> : "Log in"}
              </button>
            </div>
          </form>
          <FooterLink>Don't have an account? <Link to="/signup">Create one</Link></FooterLink>
        </>
      )}

    </AuthShell>
  );
}
