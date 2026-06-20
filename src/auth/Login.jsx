import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import { APP_URL, TEACHER_URL } from "../config/urls";
import {
  AuthShell, Field, PasswordField, Option, TileChoice, FooterLink, Icon,
} from "./AuthKit";

/* ════════════════════════════════════════════════════════════════
   Login — REFACTORED: single password model

   Steps:
     li-as            → role tile grid (Student | Teacher | Admin)
     li-s-id / li-t-id → email only
     li-t-acct         → teacher: Learner | Teacher (which context?)
     li-s-profiles     → 2-col profile grid (pre-auth lookup)
     li-s-pw / li-t-pw → password → API call → dashboard or profile pick
     (post-auth)        → if multiple profiles, show profile picker
     (post-auth teacher)→ password already used, switch to teacher ctx
     li-s-pin          → PIN entry for a dependent profile
     li-t-type         → Teacher type: Guest | Faculty (if BOTH)
     li-a-cred         → admin: email + password
     li-a-2fa          → admin: 6-digit boxes

   REMOVED: separate teacher password prompt.
   Teacher context is entered with the SAME account password used to log in.
════════════════════════════════════════════════════════════════ */

const STEP_ROLE          = "role";
const STEP_EMAIL         = "email";
const STEP_ACCT_TYPE     = "acct_type";    // Learner | Teacher choice (teacher login)
const STEP_PROFILES      = "profiles";
const STEP_PW            = "pw";
const STEP_TEACHER_TYPE  = "teacher_type"; // Guest expert | Faculty (after teacher context)
const STEP_PIN           = "pin";
const STEP_ADMIN_CREDS   = "admin_creds";
const STEP_2FA           = "2fa";

const PAL = { student: "#13899b", faculty: "#425f7f", admin: "#b9892f", guest: "#2f9d42" };

function readErr(err, fallback) {
  const raw = err?.message ?? err;
  return raw instanceof Error ? raw.message
    : typeof raw === "string" ? raw
    : err?.response?.data?.detail || fallback;
}

export default function Login() {
  const { login, selectProfile, enterTeacherMode, lookupEmail } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();

  const [step, setStep]           = useState(STEP_ROLE);
  const [role, setRole]           = useState("");
  const [error, setError]         = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // Auth fields
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);

  // Email lookup result (pre-auth — display names only)
  const [lookupProfiles, setLookupProfiles]     = useState([]);
  const [lookupHasTeacher, setLookupHasTeacher] = useState(false);

  // Post-auth state
  const [profiles, setProfiles] = useState([]);
  const [teacher, setTeacher]   = useState(null);

  // Profile selection
  const [pickedName, setPickedName]         = useState(null);
  const [pendingProfile, setPendingProfile] = useState(null);
  const [pin, setPin]                       = useState("");

  // Teacher sub-choice: "learner" | "teacher"
  const [teacherChoice, setTeacherChoice] = useState("");

  // Admin
  const [adminEmail, setAdminEmail]   = useState("");
  const [adminPw, setAdminPw]         = useState("");
  const [showAdminPw, setShowAdminPw] = useState(false);
  const [twoFACode, setTwoFACode]     = useState(["","","","","",""]);
  const twoFARefs = useRef([]);

  useEffect(() => {
    if (location.state?.message) setStatusMsg(location.state.message);
  }, [location.state]);

  /* ── helpers ── */
  const accent = role === "teacher" ? "faculty" : role === "admin" ? "admin" : "student";
  const shellRole =
    step === STEP_ROLE || step === STEP_ACCT_TYPE || step === STEP_TEACHER_TYPE
      ? "decision" : accent;

  const flowLabel =
    step === STEP_ROLE                             ? "Log in" :
    step === STEP_ACCT_TYPE                        ? "Log in · Teacher" :
    step === STEP_TEACHER_TYPE                     ? "Log in · Teacher" :
    step === STEP_ADMIN_CREDS || step === STEP_2FA ? "Log in · Admin" :
    role === "teacher"                             ? "Log in · Teacher" :
    role === "admin"                               ? "Log in · Admin" : "Log in · Student";

  const finishAndRedirect = (target = APP_URL) => {
    setIsRedirecting(true);
    setStatusMsg("Login successful! Redirecting…");
    setTimeout(() => { window.location.href = target; }, 1100);
  };

  /* ── step 1: role ── */
  const pickRole = (r) => {
    setRole(r); setError("");
    setStep(r === "admin" ? STEP_ADMIN_CREDS : STEP_EMAIL);
  };

  /* ── step 2: email → lookup → decide next screen ── */
  const submitEmail = async (e) => {
    e.preventDefault();
    setError(""); setSubmitting(true);
    try {
      const data = await lookupEmail(email);
      setLookupProfiles(data.profiles || []);
      setLookupHasTeacher(!!data.has_teacher);

      if (role === "teacher") {
        setStep(STEP_ACCT_TYPE);
      } else if ((data.profiles || []).length > 1) {
        setStep(STEP_PROFILES);
      } else {
        if ((data.profiles || []).length === 1) setPickedName(data.profiles[0].display_name);
        setStep(STEP_PW);
      }
    } catch {
      setStep(STEP_PW);
    } finally {
      setSubmitting(false);
    }
  };

  /* ── teacher: pick Learner | Teacher context ── */
  const pickTeacherAccount = (choice) => {
    setTeacherChoice(choice); setError("");
    setStep(STEP_PW);
  };

  /* ── profile grid: user picks a profile name (pre-auth) ── */
  const pickProfileName = (name) => {
    setPickedName(name); setStep(STEP_PW);
  };

  /* ── password: triggers real API login ── */
  const submitPw = async (e) => {
    e.preventDefault();
    setError(""); setSubmitting(true);
    try {
      setStatusMsg("Checking your account…");
      const data = await login(email, password);
      const list = Array.isArray(data?.profiles) ? data.profiles : [];
      const tHasTeacher = !!data?.teacher;
      setProfiles(list); setTeacher(data?.teacher || null);
      setStatusMsg("");

      // ── Teacher chose teacher context: enter it with the SAME password ──
      // No separate teacher password — we already have the right password.
      if (role === "teacher" && teacherChoice === "teacher") {
        if (!tHasTeacher) {
          setError("No approved teacher identity on this account. Please contact support or wait for approval.");
          setSubmitting(false);
          return;
        }

        setStatusMsg("Switching to teacher dashboard…");
        // Pass the ACCOUNT password — same one just used to log in.
        const tmResult = await enterTeacherMode(password);

        if (tmResult?.needsSignup) {
          setError("No teacher identity found. Please sign up as a teacher first.");
          setStatusMsg(""); setSubmitting(false); return;
        }
        if (tmResult?.notApproved) {
          setError("Your teacher account is awaiting approval.");
          setStatusMsg(""); setSubmitting(false); return;
        }

        setStatusMsg("");
        // Show teacher type picker (Guest vs Faculty) if needed
        setStep(STEP_TEACHER_TYPE);
        setSubmitting(false);
        return;
      }

      // ── Teacher chose learner context: auto-select the SELF profile ──
      if (role === "teacher" && teacherChoice === "learner") {
        const selfProfile =
          list.find((p) => p.relationship === "SELF") ??
          (list.length === 1 ? list[0] : null);

        if (!selfProfile) {
          setError("No learner profile found on this account.");
          setSubmitting(false); return;
        }
        if (selfProfile.requires_pin) {
          setPendingProfile(selfProfile); setPin(""); setStep(STEP_PIN);
          setSubmitting(false); return;
        }
        await selectProfile(selfProfile.id);
        showToast({ message: "Welcome back!", duration: 2000 });
        finishAndRedirect(APP_URL);
        return;
      }

      // ── Backend auto-selected (single profile, no teacher) ──
      if (data.auto_selected || data.context === "learner") {
        showToast({ message: "Welcome back!", duration: 2000 });
        finishAndRedirect(APP_URL);
        return;
      }

      // ── Student login: resolve target profile ──
      const target = pickedName
        ? list.find((p) => p.display_name === pickedName) ?? (list.length === 1 ? list[0] : null)
        : list.length === 1 ? list[0] : null;

      if (target && !target.requires_pin) {
        await selectProfile(target.id);
        showToast({ message: "Welcome back!", duration: 2000 });
        finishAndRedirect(APP_URL);
        return;
      }
      if (target && target.requires_pin) {
        setPendingProfile(target); setPin(""); setStep(STEP_PIN);
        setSubmitting(false); return;
      }

      if (list.length > 0) { setStep(STEP_PROFILES); setSubmitting(false); return; }

      setError("No profiles found on this account.");
      setSubmitting(false);
    } catch (err) {
      setError(readErr(err, "Login failed"));
      setStatusMsg(""); setSubmitting(false);
    }
  };

  /* ── post-auth profile click ── */
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

  /* ── PIN ── */
  const submitPin = async (e) => {
    e.preventDefault();
    setError(""); setSubmitting(true);
    try {
      await selectProfile(pendingProfile.id, pin);
      showToast({ message: "Welcome back!", duration: 2000 });
      finishAndRedirect(APP_URL);
    } catch (err) {
      setError(readErr(err, "Incorrect PIN.")); setSubmitting(false);
    }
  };

  /* ── admin credentials ── */
  const submitAdminCreds = async (e) => {
    e.preventDefault();
    setError(""); setSubmitting(true);
    try {
      setStatusMsg("Verifying credentials…");
      await login(adminEmail, adminPw);
      setStatusMsg("");
      setTwoFACode(["","","","","",""]);
      setStep(STEP_2FA);
      setSubmitting(false);
    } catch (err) {
      setError(readErr(err, "Login failed"));
      setStatusMsg(""); setSubmitting(false);
    }
  };

  /* ── admin 2FA ── */
  const handle2FAInput = (i, val) => {
    const v = val.replace(/\D/g, "").slice(-1);
    const next = [...twoFACode]; next[i] = v; setTwoFACode(next);
    if (v && i < 5) twoFARefs.current[i + 1]?.focus();
  };
  const handle2FAKey = (i, e) => {
    if (e.key === "Backspace" && !twoFACode[i] && i > 0)
      twoFARefs.current[i - 1]?.focus();
  };
  const submit2FA = (e) => {
    e.preventDefault();
    showToast({ message: "Welcome back!", duration: 2000 });
    finishAndRedirect(APP_URL);
  };

  /* ── back navigation ── */
  const back = () => {
    setError("");
    if (step === STEP_EMAIL)       setStep(STEP_ROLE);
    if (step === STEP_ACCT_TYPE)   setStep(STEP_EMAIL);
    if (step === STEP_PROFILES) {
      setStep(teacherChoice === "learner" ? STEP_ACCT_TYPE : STEP_EMAIL);
    }
    if (step === STEP_PW) {
      if (role === "teacher" && teacherChoice) setStep(STEP_ACCT_TYPE);
      else if (lookupProfiles.length > 1)       setStep(STEP_PROFILES);
      else                                       setStep(STEP_EMAIL);
    }
    if (step === STEP_TEACHER_TYPE) setStep(STEP_PW);
    if (step === STEP_PIN)          setStep(STEP_PW);
    if (step === STEP_ADMIN_CREDS)  setStep(STEP_ROLE);
    if (step === STEP_2FA)          setStep(STEP_ADMIN_CREDS);
  };

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

      {/* ── li-as: role tiles ── */}
      {step === STEP_ROLE && (
        <>
          <h1 className="af-heading">Log in as</h1>
          <p className="af-sub">How are you signing in?</p>
          <TileChoice cols={3} options={[
            { key: "student", label: "Student",  sub: "Learner profiles", color: PAL.student,
              icon: <Icon name="cap"    size={22} color={PAL.student} />, onClick: () => pickRole("student") },
            { key: "teacher", label: "Teacher",  sub: "Guest or faculty", color: PAL.faculty,
              icon: <Icon name="spark"  size={20} color={PAL.faculty} />, onClick: () => pickRole("teacher") },
            { key: "admin",   label: "Admin",    sub: "Staff access",     color: PAL.admin,
              icon: <Icon name="shield" size={20} color={PAL.admin}   />, onClick: () => pickRole("admin")   },
          ]} />
          <div className="af-spacer" />
          <FooterLink>Don't have an account? <Link to="/signup">Create one</Link></FooterLink>
        </>
      )}

      {/* ── email ── */}
      {step === STEP_EMAIL && (
        <>
          <h1 className="af-heading">Welcome back</h1>
          <p className="af-sub">{role === "teacher" ? "Teacher sign-in." : "Student sign-in."}</p>
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
          <FooterLink><Link to="/forgot-password" className="af-note">Forgot password?</Link></FooterLink>
        </>
      )}

      {/* ── li-t-acct: Learner | Teacher tiles ── */}
      {step === STEP_ACCT_TYPE && (
        <>
          <h1 className="af-heading">Which account?</h1>
          <p className="af-sub">Your email can act as a learner or a teacher.</p>
          <TileChoice cols={2} options={[
            { key: "learner", label: "Learner", sub: "Browse & take classes", color: PAL.student,
              icon: <Icon name="cap"   size={22} color={PAL.student} />, onClick: () => pickTeacherAccount("learner") },
            { key: "teacher", label: "Teacher", sub: "Teach & manage",        color: PAL.faculty,
              icon: <Icon name="spark" size={20} color={PAL.faculty} />, onClick: () => pickTeacherAccount("teacher") },
          ]} />
          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
        </>
      )}

      {/* ── profile grid (pre-auth) ── */}
      {step === STEP_PROFILES && lookupProfiles.length > 0 && profiles.length === 0 && (
        <>
          <h1 className="af-heading">Choose a profile</h1>
          <p className="af-sub">Profiles linked to this email.</p>
          <div className="af-profile-grid">
            {lookupProfiles.map((p, i) => (
              <button key={i} type="button" className="af-profile-tile"
                onClick={() => pickProfileName(p.display_name)}>
                <div className="af-profile-tile__num"
                  style={{ background: PAL.student + "22", color: PAL.student }}>{i + 1}</div>
                <div className="af-profile-tile__name">{p.display_name}</div>
                <div className="af-profile-tile__sub">
                  {p.relationship === "SELF" ? "You" : "Learner"}
                </div>
              </button>
            ))}
          </div>
          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
        </>
      )}

      {/* ── profile grid (post-auth) ── */}
      {step === STEP_PROFILES && profiles.length > 0 && (
        <>
          <h1 className="af-heading">Choose a profile</h1>
          <p className="af-sub">All profiles under this account.</p>
          <div className="af-profile-grid">
            {profiles.map((p, i) => (
              <button key={p.id} type="button" className="af-profile-tile"
                onClick={() => chooseProfile(p)}>
                <div className="af-profile-tile__num"
                  style={{ background: PAL.student + "22", color: PAL.student }}>{i + 1}</div>
                <div className="af-profile-tile__name">{p.display_name || "Profile"}</div>
                {p.requires_pin && <div className="af-profile-tile__sub">PIN protected</div>}
              </button>
            ))}
          </div>
          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
        </>
      )}

      {/* ── password ── */}
      {step === STEP_PW && (
        <>
          <h1 className="af-heading">
            {pickedName ? `Hi, ${pickedName}` : "Enter password"}
          </h1>
          <p className="af-sub">
            {role === "teacher" && teacherChoice === "teacher"
              ? "Enter your password to access your teaching dashboard."
              : pickedName
                ? "Enter your password to open this profile."
                : "Enter your account password."}
          </p>
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
        </>
      )}

      {/* ── PIN ── */}
      {step === STEP_PIN && (
        <>
          <h1 className="af-heading">Enter PIN</h1>
          <p className="af-sub">
            {pendingProfile?.display_name
              ? <>PIN for <strong>{pendingProfile.display_name}</strong>.</>
              : "Enter your profile PIN."}
          </p>
          <form onSubmit={submitPin} style={{ display: "contents" }}>
            <div className="af-field">
              <label htmlFor="lf-pin">PIN</label>
              <input id="lf-pin" inputMode="numeric" autoComplete="off"
                value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                placeholder="••••" maxLength={6} required autoFocus
                style={{ letterSpacing: ".5em", textAlign: "center", fontSize: 18 }} />
            </div>
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block"
                disabled={submitting || pin.length < 4}>
                {submitting ? <><span className="af-spin" />Unlocking…</> : "Open profile"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* ── teacher type (Guest | Faculty) — shown after entering teacher ctx ── */}
      {step === STEP_TEACHER_TYPE && (
        <>
          <h1 className="af-heading">Teacher type?</h1>
          <p className="af-sub">We route you to the right dashboard.</p>
          <TileChoice cols={2} options={[
            {
              key: "guest", label: "Guest expert", sub: "Skills & bookings", color: PAL.guest,
              icon: <Icon name="spark" size={20} color={PAL.guest} />,
              onClick: () => { showToast({ message: "Welcome back!", duration: 2000 }); finishAndRedirect(TEACHER_URL); },
            },
            {
              key: "faculty", label: "Faculty", sub: "Classes & timetable", color: PAL.faculty,
              icon: <Icon name="cap" size={22} color={PAL.faculty} />,
              onClick: () => { showToast({ message: "Welcome back!", duration: 2000 }); finishAndRedirect(TEACHER_URL); },
            },
          ]} />
          {teacher?.type && teacher.type !== "BOTH" && (
            <p style={{ marginTop: 12, fontSize: 13, color: "#9aa0a6" }}>
              Your account: <strong style={{ color: "var(--a)" }}>
                {teacher.type === "GUEST" ? "Guest expert" : "Faculty"}
              </strong>
            </p>
          )}
          <div className="af-spacer" />
        </>
      )}

      {/* ── admin credentials ── */}
      {step === STEP_ADMIN_CREDS && (
        <>
          <h1 className="af-heading">Admin sign-in</h1>
          <form onSubmit={submitAdminCreds} style={{ display: "contents" }}>
            <Field id="lf-adm-email" label="Admin email" type="email" value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              placeholder="admin@shikshacom.com" required autoFocus autoComplete="email" />
            <PasswordField id="lf-adm-pw" label="Password" value={adminPw}
              onChange={(e) => setAdminPw(e.target.value)} placeholder="••••••••"
              required autoComplete="current-password"
              show={showAdminPw} onToggle={() => setShowAdminPw((v) => !v)} />
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Verifying…</> : "Continue"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* ── admin 2FA ── */}
      {step === STEP_2FA && (
        <>
          <h1 className="af-heading">Two-factor authentication</h1>
          <p className="af-sub">Enter the 6-digit code from your authenticator app.</p>
          <form onSubmit={submit2FA} style={{ display: "contents" }}>
            <div className="af-2fa-boxes">
              {twoFACode.map((v, i) => (
                <input key={i} ref={(el) => { twoFARefs.current[i] = el; }}
                  inputMode="numeric" maxLength={1} value={v}
                  onChange={(e) => handle2FAInput(i, e.target.value)}
                  onKeyDown={(e) => handle2FAKey(i, e)}
                  className="af-2fa-box" autoFocus={i === 0} />
              ))}
            </div>
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn"
                disabled={submitting || twoFACode.some((c) => !c)}>
                {submitting ? <><span className="af-spin" />Verifying…</> : "Verify"}
              </button>
              <button type="button" className="af-btn--secondary"
                onClick={() => setTwoFACode(["","","","","",""])}>
                Resend code
              </button>
            </div>
          </form>
        </>
      )}

    </AuthShell>
  );
}
