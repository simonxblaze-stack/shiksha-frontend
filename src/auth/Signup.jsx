import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  AuthShell, Field, PasswordField, Option, StatusChip, FooterLink,
} from "./AuthKit";

/* ════════════════════════════════════════════════════════════════
   Signup — mirrors the design's sign-up branch:
     details -> role
       student  -> add learner profiles -> submit
       teacher  -> pick track (guest / faculty) -> submit
   Wired to the real backend signup(payload):
     { email, username, password, role:"STUDENT"|"TEACHER",
       profiles:[{display_name, relationship}]  |  teacher_type:"GUEST"|"FACULTY" }
   On success -> /verify-email (matches the design's "check your inbox").
════════════════════════════════════════════════════════════════ */

const STEP_DETAILS  = "details";
const STEP_ROLE     = "role";
const STEP_PROFILES = "profiles";
const STEP_TRACK    = "track";

const PAL = { student: "#138A6B", faculty: "#2F6BD8", guest: "#D85F45" };

function readErr(err, fallback) {
  const raw = err?.message ?? err;
  return raw instanceof Error ? raw.message
    : typeof raw === "string" ? raw
    : fallback;
}

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [step, setStep]   = useState(STEP_DETAILS);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  /* details */
  const [email, setEmail]               = useState("");
  const [username, setUsername]         = useState("");
  const [password, setPassword]         = useState("");
  const [confirm, setConfirm]           = useState("");
  const [showPw, setShowPw]             = useState(false);
  const [showConfirm, setShowConfirm]   = useState(false);

  /* role / track */
  const [role, setRole]               = useState("");   // STUDENT | TEACHER
  const [teacherType, setTeacherType] = useState("");   // GUEST | FACULTY

  /* learner profiles */
  const [profiles, setProfiles] = useState([{ display_name: "", relationship: "SELF" }]);
  const updateProfile = (i, patch) =>
    setProfiles((l) => l.map((p, idx) => (idx === i ? { ...p, ...patch } : p)));
  const addProfile = () =>
    setProfiles((l) => [...l, { display_name: "", relationship: "DEPENDENT" }]);
  const removeProfile = (i) =>
    setProfiles((l) => l.filter((_, idx) => idx !== i));

  /* accent follows the active branch */
  const accent =
    step === STEP_DETAILS ? "neutral" :
    step === STEP_ROLE ? "decision" :
    role === "TEACHER"
      ? (teacherType === "GUEST" ? "guest" : "faculty")
      : "student";

  const flowLabel =
    step === STEP_DETAILS ? "Sign up" :
    step === STEP_ROLE ? "Sign up" :
    role === "TEACHER"
      ? `Sign up · ${teacherType === "GUEST" ? "Guest expert" : "Faculty"}`
      : "Sign up · Student";

  /* ── details -> role ── */
  const nextFromDetails = (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (password.length < 8)  { setError("Password must be at least 8 characters."); return; }
    setStep(STEP_ROLE);
  };

  /* ── role pick ── */
  const pickRole = (r) => {
    setError("");
    setRole(r);
    if (r === "STUDENT") setStep(STEP_PROFILES);
    else setStep(STEP_TRACK);
  };

  /* ── submit ── */
  const doSubmit = async (extra) => {
    const payload = { email, username, password, role, ...extra };
    setSubmitting(true);
    try {
      await signup(payload);
      navigate("/verify-email", { replace: true, state: { email } });
    } catch (err) {
      setError(readErr(err, "Signup failed. Please try again."));
      setSubmitting(false);
    }
  };

  const submitStudent = async (e) => {
    e.preventDefault();
    setError("");
    const cleaned = profiles
      .map((p) => ({ ...p, display_name: p.display_name.trim() }))
      .filter((p) => p.display_name);
    if (cleaned.length === 0) { setError("Add at least one profile name."); return; }
    await doSubmit({ profiles: cleaned });
  };

  const submitTeacher = async () => {
    setError("");
    if (!teacherType) { setError("Choose Guest expert or Faculty."); return; }
    await doSubmit({ teacher_type: teacherType });
  };

  const back = () => {
    setError("");
    if (step === STEP_ROLE)     setStep(STEP_DETAILS);
    if (step === STEP_PROFILES) setStep(STEP_ROLE);
    if (step === STEP_TRACK)    setStep(STEP_ROLE);
  };

  return (
    <AuthShell role={accent} flowLabel={flowLabel}>

      <div className="af-toprow">
        {step !== STEP_DETAILS
          ? <button className="af-iconbtn" onClick={back} aria-label="Back">‹</button>
          : <span />}
      </div>

      {/* ─────────── details ─────────── */}
      {step === STEP_DETAILS && (
        <>
          <h1 className="af-heading">Create your account</h1>
          <p className="af-sub">Enter your basic details to get started.</p>

          <form onSubmit={nextFromDetails} style={{ display: "contents" }}>
            <Field id="su-email" label="Email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
              required autoFocus autoComplete="email" />

            <Field id="su-username" label="Username" value={username}
              onChange={(e) => setUsername(e.target.value)} placeholder="your_username"
              required autoComplete="username" />

            <PasswordField id="su-password" label="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 characters"
              required autoComplete="new-password"
              show={showPw} onToggle={() => setShowPw((p) => !p)} />

            <PasswordField id="su-confirm" label="Confirm password" value={confirm}
              onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat password"
              required autoComplete="new-password"
              show={showConfirm} onToggle={() => setShowConfirm((p) => !p)} />

            {error && <div className="af-error">{error}</div>}

            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block">Continue</button>
            </div>
          </form>

          <FooterLink>
            Already have an account? <Link to="/login">Sign in</Link>
          </FooterLink>
        </>
      )}

      {/* ─────────── role ─────────── */}
      {step === STEP_ROLE && (
        <>
          <h1 className="af-heading">How will you use ShikshaCom?</h1>
          <p className="af-sub">You can switch roles later from one account.</p>

          <div className="af-options">
            <Option label="I want to learn" sub="Browse and enroll in courses"
              dot={PAL.student} onClick={() => pickRole("STUDENT")} />
            <Option label="I want to teach" sub="Apply as a tutor or faculty"
              dot={PAL.faculty} onClick={() => pickRole("TEACHER")} />
          </div>

          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
        </>
      )}

      {/* ─────────── student: profiles ─────────── */}
      {step === STEP_PROFILES && (
        <>
          <h1 className="af-heading">Add learner profiles</h1>
          <p className="af-sub">
            One profile per person — yourself and any children sharing this account.
            Each profile keeps its own progress and an optional PIN.
          </p>

          <form onSubmit={submitStudent} style={{ display: "contents" }}>
            <div>
              {profiles.map((p, i) => (
                <div key={i} className="af-profile-row">
                  <input
                    placeholder={i === 0 ? "Your name" : "Child / learner name"}
                    value={p.display_name}
                    onChange={(e) => updateProfile(i, { display_name: e.target.value })}
                    autoFocus={i === profiles.length - 1 && i > 0}
                  />
                  <select
                    value={p.relationship}
                    onChange={(e) => updateProfile(i, { relationship: e.target.value })}
                    aria-label="Relationship"
                  >
                    <option value="SELF">This is me</option>
                    <option value="DEPENDENT">A child</option>
                  </select>
                  {profiles.length > 1 && (
                    <button type="button" className="af-profile-row__remove"
                      onClick={() => removeProfile(i)} aria-label="Remove profile">×</button>
                  )}
                </div>
              ))}
            </div>

            <button type="button" className="af-add-row" onClick={addProfile}>
              + Add another profile
            </button>

            {error && <div className="af-error">{error}</div>}

            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Creating account…</> : "Create account"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* ─────────── teacher: track ─────────── */}
      {step === STEP_TRACK && (
        <>
          <StatusChip icon="spark" role={teacherType === "GUEST" ? "guest" : teacherType === "FACULTY" ? "faculty" : "decision"} />
          <h1 className="af-heading">What kind of teacher?</h1>
          <p className="af-sub">Choose the track that fits you.</p>

          <div className="af-options">
            <Option label="Guest expert" sub="Share a skill — short screened application"
              dot={PAL.guest} active={teacherType === "GUEST"}
              onClick={() => setTeacherType("GUEST")} />
            <Option label="Faculty" sub="Qualified teacher — full application & review"
              dot={PAL.faculty} active={teacherType === "FACULTY"}
              onClick={() => setTeacherType("FACULTY")} />
          </div>

          {error && <div className="af-error">{error}</div>}

          <div className="af-spacer" />
          <div className="af-actions">
            <button type="button" className="af-btn af-btn--block"
              onClick={submitTeacher} disabled={submitting || !teacherType}>
              {submitting ? <><span className="af-spin" />Creating account…</> : "Create account"}
            </button>
          </div>
        </>
      )}

    </AuthShell>
  );
}
