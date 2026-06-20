import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  AuthShell, Field, PasswordField, TileChoice, Option, StatusChip, FooterLink, Icon,
} from "./AuthKit";

/* ════════════════════════════════════════════════════════════════
   Signup — steps:
     su-role    → role tiles: Student | Teacher
     su-basic   → email, username, password, confirm
                  ↓ email check on submit ↓
     su-exist   → (new) email already exists: confirm identity + explain what's being added
     Student:
       su-profile → create one profile at a time (name input)
       su-add     → "Add another?" chip list, yes/no
       → submit → /verify-email (new account) or /login (add-to-existing)
     Teacher:
       su-ttype   → Guest expert | Faculty tiles
       Guest:
         su-g-form    → skill, method, bio
         su-g-listed  → "You're an Expert teacher" info
         su-g-course  → optional course setup
         su-g-live    → "You're live!" → /verify-email or /login
       Faculty:
         su-f-form    → qualifications, subjects, experience
         su-f-waiting → "Application submitted" waiting screen

   Email/account enforcement rules:
     NEW email + Student              → create new account
     NEW email + Teacher              → create new account
     EXISTING (teacher only) + Student → add learner profiles to container
     EXISTING (student only) + Teacher → add teacher identity to container
     EXISTING (has student) + Student  → BLOCK: "already has learner profiles"
     EXISTING (has teacher) + Teacher  → BLOCK: "already has teacher account"
════════════════════════════════════════════════════════════════ */

const STEP_ROLE            = "role";
const STEP_BASIC           = "basic";
const STEP_EXISTING_CONFIRM = "existing_confirm"; // NEW: add-to-existing gate
const STEP_PROFILE         = "profile";
const STEP_ADD_MORE        = "add_more";
const STEP_TEACHER_TYPE    = "ttype";
const STEP_GUEST_FORM      = "g_form";
const STEP_GUEST_LISTED    = "g_listed";
const STEP_GUEST_COURSE    = "g_course";
const STEP_GUEST_LIVE      = "g_live";
const STEP_FAC_FORM        = "f_form";
const STEP_FAC_WAITING     = "f_waiting";

const PAL = { student: "#13899b", faculty: "#425f7f", guest: "#2f9d42" };

function readErr(err, fallback) {
  const raw = err?.message ?? err;
  return raw instanceof Error ? raw.message
    : typeof raw === "string" ? raw : fallback;
}

export default function Signup() {
  const { signup, checkEmail } = useAuth();
  const navigate = useNavigate();

  const [step, setStep]         = useState(STEP_ROLE);
  const [error, setError]       = useState("");
  const [submitting, setSubmitting] = useState(false);

  /* role */
  const [role, setRole]               = useState("");  // "STUDENT" | "TEACHER"
  const [teacherType, setTeacherType] = useState(""); // "GUEST" | "FACULTY"

  /* basic details (new account) */
  const [email, setEmail]       = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [showCf, setShowCf]     = useState(false);

  /* add-to-existing state */
  const [isAddingToExisting, setIsAddingToExisting]   = useState(false);
  const [existingAccountType, setExistingAccountType] = useState(""); // "has_teacher" | "has_student"
  const [existingPassword, setExistingPassword]       = useState("");
  const [showExistingPw, setShowExistingPw]           = useState(false);

  /* student profiles — built one at a time */
  const [profiles, setProfiles]       = useState([]);
  const [profileName, setProfileName] = useState("");
  const [profileRel, setProfileRel]   = useState("SELF");

  /* guest teacher form */
  const [skill, setSkill]   = useState("");
  const [method, setMethod] = useState("");
  const [bio, setBio]       = useState("");

  /* guest course (optional) */
  const [courseTitle, setCourseTitle] = useState("");
  const [courseSkill, setCourseSkill] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseDesc, setCourseDesc]   = useState("");

  /* faculty form */
  const [qual, setQual] = useState("");
  const [subj, setSubj] = useState("");
  const [exp, setExp]   = useState("");

  /* ── derived accent / label ── */
  const accent =
    step === STEP_ROLE         ? "neutral"  :
    step === STEP_BASIC        ? "neutral"  :
    step === STEP_TEACHER_TYPE ? "decision" :
    role === "TEACHER"
      ? (teacherType === "GUEST" ? "guest" : "faculty")
      : "student";

  const flowLabel =
    step === STEP_ROLE || step === STEP_BASIC ? "Sign up" :
    role === "TEACHER"
      ? `Sign up · ${teacherType === "GUEST" ? "Guest expert" : "Faculty"}`
      : "Sign up · Student";

  /* ── helpers ── */
  const go = (s) => { setError(""); setStep(s); };

  /* ── API call: submit signup ─────────────────────────────────────────── */
  const doSignup = async (extra) => {
    const payload = {
      email,
      // Username not needed for add-to-existing (account already has one).
      ...(isAddingToExisting ? {} : { username }),
      // For add-to-existing, password is the existing account password (for server-side verification).
      password: isAddingToExisting ? existingPassword : password,
      role,
      ...extra,
    };
    setSubmitting(true);
    try {
      await signup(payload);
      if (isAddingToExisting) {
        // Verified account — no email verification needed, go straight to login.
        navigate("/login", {
          replace: true,
          state: { message: "Identity added! Please log in." },
        });
      } else {
        navigate("/verify-email", { replace: true, state: { email } });
      }
    } catch (err) {
      setError(readErr(err, "Signup failed. Please try again."));
      setSubmitting(false);
    }
  };

  /* ── back ────────────────────────────────────────────────────────────── */
  const back = () => {
    setError("");
    if (step === STEP_BASIC) {
      go(STEP_ROLE);
    }
    if (step === STEP_EXISTING_CONFIRM) {
      // Reset add-to-existing state when going back to STEP_BASIC.
      setIsAddingToExisting(false);
      setExistingAccountType("");
      setExistingPassword("");
      go(STEP_BASIC);
    }
    if (step === STEP_PROFILE) {
      if (profiles.length > 0) go(STEP_ADD_MORE);
      else go(isAddingToExisting ? STEP_EXISTING_CONFIRM : STEP_BASIC);
    }
    if (step === STEP_ADD_MORE)     go(STEP_PROFILE);
    if (step === STEP_TEACHER_TYPE) go(isAddingToExisting ? STEP_EXISTING_CONFIRM : STEP_BASIC);
    if (step === STEP_GUEST_FORM)   go(STEP_TEACHER_TYPE);
    if (step === STEP_GUEST_LISTED) go(STEP_GUEST_FORM);
    if (step === STEP_GUEST_COURSE) go(STEP_GUEST_LISTED);
    if (step === STEP_FAC_FORM)     go(STEP_TEACHER_TYPE);
  };

  /* ════════ STEP HANDLERS ════════════════════════════════════════════════ */

  /* su-basic: email check on submit, then branch */
  const nextFromBasic = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const state = await checkEmail(email);

      if (!state.exists) {
        /* ── Brand new email: validate fields for new account ── */
        if (password !== confirm) { setError("Passwords do not match."); return; }
        if (password.length < 8)  { setError("Password must be at least 8 characters."); return; }
        if (!username.trim())      { setError("Username is required."); return; }
        if (role === "STUDENT") go(STEP_PROFILE);
        else go(STEP_TEACHER_TYPE);
        return;
      }

      /* ── Email exists: enforce rules ── */
      const { has_student, has_teacher } = state;

      if (role === "STUDENT") {
        if (has_student) {
          setError("This email already has learner profiles. Log in to manage them.");
          return;
        }
        // has_teacher only → offer to add learner profiles to this container
        setIsAddingToExisting(true);
        setExistingAccountType("has_teacher");
        go(STEP_EXISTING_CONFIRM);
        return;
      }

      if (role === "TEACHER") {
        if (has_teacher) {
          setError("This email already has a teacher account. Log in instead.");
          return;
        }
        // has_student only → offer to add teacher identity to this container
        setIsAddingToExisting(true);
        setExistingAccountType("has_student");
        go(STEP_EXISTING_CONFIRM);
        return;
      }

    } catch {
      /* checkEmail unreachable — fail open, treat as new account */
      if (password !== confirm) { setError("Passwords do not match."); return; }
      if (password.length < 8)  { setError("Password must be at least 8 characters."); return; }
      if (!username.trim())      { setError("Username is required."); return; }
      if (role === "STUDENT") go(STEP_PROFILE);
      else go(STEP_TEACHER_TYPE);
    } finally {
      setSubmitting(false);
    }
  };

  /* su-exist: existing account confirmed → proceed to identity-specific steps */
  const nextFromExistingConfirm = (e) => {
    e.preventDefault();
    setError("");
    if (!existingPassword) { setError("Please enter your account password."); return; }
    if (role === "STUDENT") go(STEP_PROFILE);
    else go(STEP_TEACHER_TYPE);
  };

  /* su-profile: save one profile name then go to su-add */
  const saveProfile = (e) => {
    e.preventDefault(); setError("");
    if (!profileName.trim()) { setError("Enter a profile name."); return; }
    const isFirst = profiles.length === 0;
    setProfiles((l) => [
      ...l,
      { display_name: profileName.trim(), relationship: isFirst ? "SELF" : profileRel },
    ]);
    setProfileName("");
    setProfileRel("DEPENDENT");
    go(STEP_ADD_MORE);
  };

  /* su-add "No, continue" → submit */
  const finishProfiles = () => {
    setError("");
    doSubmitStudent();
  };
  const doSubmitStudent = () => {
    const cleaned = profiles.filter((p) => p.display_name);
    if (cleaned.length === 0) { setError("Add at least one profile."); return; }
    doSignup({ profiles: cleaned });
  };

  /* guest: submit at su-g-form then show listed */
  const submitGuestForm = async (e) => {
    e.preventDefault(); setError("");
    if (!skill.trim()) { setError("Enter the skill you teach."); return; }
    setSubmitting(true);
    try {
      await signup({
        email,
        ...(isAddingToExisting ? {} : { username }),
        password: isAddingToExisting ? existingPassword : password,
        role,
        teacher_type: "GUEST",
      });
      setSubmitting(false);
      go(STEP_GUEST_LISTED);
    } catch (err) {
      setError(readErr(err, "Signup failed. Please try again."));
      setSubmitting(false);
    }
  };

  /* faculty: submit at su-f-form then show waiting */
  const submitFacultyForm = async (e) => {
    e.preventDefault(); setError("");
    if (!qual.trim()) { setError("Enter your highest qualification."); return; }
    setSubmitting(true);
    try {
      await signup({
        email,
        ...(isAddingToExisting ? {} : { username }),
        password: isAddingToExisting ? existingPassword : password,
        role,
        teacher_type: "FACULTY",
      });
      setSubmitting(false);
      go(STEP_FAC_WAITING);
    } catch (err) {
      setError(readErr(err, "Signup failed. Please try again."));
      setSubmitting(false);
    }
  };

  /* guest live: after course or skip → verify email (or login for add-to-existing) */
  const finishGuestLive = () => {
    if (isAddingToExisting) {
      navigate("/login", {
        replace: true,
        state: { message: "Teacher identity added! Please log in." },
      });
    } else {
      navigate("/verify-email", { replace: true, state: { email } });
    }
  };

  /* ════════ RENDER ════════════════════════════════════════════════════════ */
  return (
    <AuthShell role={accent} flowLabel={flowLabel}>
      <div className="af-toprow">
        {step !== STEP_ROLE
          ? <button className="af-iconbtn" onClick={back} aria-label="Back">‹</button>
          : <span />}
      </div>

      {/* ── su-role: Student | Teacher tiles ── */}
      {step === STEP_ROLE && (
        <>
          <h1 className="af-heading">Sign Up</h1>
          <p className="af-sub">First, what brings you to ShikshaCom?</p>
          <TileChoice cols={2} options={[
            { key: "STUDENT", label: "Student", sub: "Learn from experts",
              color: PAL.student, icon: <Icon name="cap" size={22} color={PAL.student} />,
              onClick: () => { setRole("STUDENT"); setError(""); go(STEP_BASIC); } },
            { key: "TEACHER", label: "Teacher", sub: "Teach your skills",
              color: PAL.faculty, icon: <Icon name="spark" size={20} color={PAL.faculty} />,
              onClick: () => { setRole("TEACHER"); setError(""); go(STEP_BASIC); } },
          ]} />
          <div className="af-spacer" />
          <FooterLink>Already have an account? <Link to="/login">Sign in</Link></FooterLink>
        </>
      )}

      {/* ── su-basic: email, username, password ── */}
      {step === STEP_BASIC && (
        <>
          <h1 className="af-heading">
            {role === "TEACHER" ? "Teacher sign-up" : "Student sign-up"}
          </h1>
          <p className="af-sub">Create your ShikshaCom account.</p>
          <form onSubmit={nextFromBasic} style={{ display: "contents" }}>
            <Field id="su-email" label="Email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
              required autoFocus autoComplete="email" />
            <Field id="su-username" label="Username" value={username}
              onChange={(e) => setUsername(e.target.value)} placeholder="your_username"
              autoComplete="username" />
            <PasswordField id="su-pw" label="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 characters"
              required autoComplete="new-password"
              show={showPw} onToggle={() => setShowPw((v) => !v)} />
            <PasswordField id="su-cf" label="Confirm password" value={confirm}
              onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat password"
              required autoComplete="new-password"
              show={showCf} onToggle={() => setShowCf((v) => !v)} />
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Checking…</> : "Continue"}
              </button>
            </div>
          </form>
          <FooterLink>Already have an account? <Link to="/login">Sign in</Link></FooterLink>
        </>
      )}

      {/* ── su-exist: add identity to existing account ── */}
      {step === STEP_EXISTING_CONFIRM && (
        <>
          <h1 className="af-heading">
            {existingAccountType === "has_teacher"
              ? "Add learner profiles"
              : "Add teacher identity"}
          </h1>
          <p className="af-sub">
            {existingAccountType === "has_teacher"
              ? "This email already has a teacher account."
              : "This email already has learner profiles."}
          </p>

          <div className="af-banner-info">
            <div className="af-banner-info__icon"
              style={{
                background: (existingAccountType === "has_teacher" ? PAL.student : PAL.faculty) + "22",
                color: existingAccountType === "has_teacher" ? PAL.student : PAL.faculty,
              }}>
              <Icon
                name={existingAccountType === "has_teacher" ? "cap" : "spark"}
                size={19}
                color={existingAccountType === "has_teacher" ? PAL.student : PAL.faculty}
              />
            </div>
            <div className="af-banner-info__text">
              {existingAccountType === "has_teacher"
                ? <>Your new <strong>learner profiles</strong> will be added to this email's container alongside the existing teacher account.</>
                : <>A new <strong>teacher identity</strong> will be added to this email's container alongside the existing learner profiles.</>}
            </div>
          </div>

          <form onSubmit={nextFromExistingConfirm} style={{ display: "contents" }}>
            <PasswordField
              id="su-existing-pw"
              label="Confirm with your account password"
              value={existingPassword}
              onChange={(e) => setExistingPassword(e.target.value)}
              placeholder="••••••••"
              required autoFocus autoComplete="current-password"
              show={showExistingPw} onToggle={() => setShowExistingPw((v) => !v)}
            />
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block"
                disabled={!existingPassword || submitting}>
                Continue
              </button>
            </div>
          </form>
        </>
      )}

      {/* ── su-ttype: teacher type tiles ── */}
      {step === STEP_TEACHER_TYPE && (
        <>
          <h1 className="af-heading">What kind of teacher?</h1>
          <p className="af-sub">Guest experts teach short skill sessions. Faculty are assigned, vetted instructors.</p>
          <TileChoice cols={2} options={[
            { key: "GUEST", label: "Guest expert", sub: "Short skill sessions",
              color: PAL.guest, icon: <Icon name="spark" size={20} color={PAL.guest} />,
              onClick: () => { setTeacherType("GUEST"); go(STEP_GUEST_FORM); } },
            { key: "FACULTY", label: "Faculty", sub: "Assigned instructor",
              color: PAL.faculty, icon: <Icon name="cap" size={22} color={PAL.faculty} />,
              onClick: () => { setTeacherType("FACULTY"); go(STEP_FAC_FORM); } },
          ]} />
          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
        </>
      )}

      {/* ── su-profile: create one profile at a time ── */}
      {step === STEP_PROFILE && (
        <>
          <h1 className="af-heading">Create a profile</h1>
          <p className="af-sub">
            {isAddingToExisting && existingAccountType === "has_teacher"
              ? "Your teacher account already has a learner profile for yourself. Add profiles for family members below."
              : "One email can hold several learner profiles. " + (profiles.length === 0 ? "Name this one." : "Add another name below.")}
          </p>
          <form onSubmit={saveProfile} style={{ display: "contents" }}>
            <Field id="su-pname" label="Profile name"
              value={profileName} onChange={(e) => setProfileName(e.target.value)}
              placeholder={
                isAddingToExisting && existingAccountType === "has_teacher"
                  ? "e.g. Child's name"
                  : profiles.length === 0 ? "e.g. Your own name" : "e.g. Child's name"
              }
              required autoFocus />
            {(profiles.length > 0 || (isAddingToExisting && existingAccountType === "has_teacher")) && (
              <div className="af-field">
                <label htmlFor="su-prel">Relationship</label>
                <select id="su-prel" value={profileRel}
                  onChange={(e) => setProfileRel(e.target.value)}>
                  {/* Only allow SELF if no SELF profile exists yet on this account */}
                  {!(isAddingToExisting && existingAccountType === "has_teacher") && profiles.length === 0 && (
                    <option value="SELF">This is me</option>
                  )}
                  <option value="DEPENDENT">A child / dependent</option>
                  {/* Allow SELF for student-only accounts that don't have a profile yet */}
                  {isAddingToExisting && existingAccountType !== "has_teacher" && profiles.length === 0 && (
                    <option value="SELF">This is me</option>
                  )}
                </select>
              </div>
            )}

            {profiles.length > 0 && (
              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#83848c",
                  textTransform: "uppercase", letterSpacing: ".4px", marginBottom: 8 }}>
                  Profiles on this email
                </div>
                <div className="af-chips">
                  {profiles.map((p, i) => (
                    <span key={i} className="af-chip">{p.display_name}</span>
                  ))}
                </div>
              </div>
            )}

            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block">Save profile</button>
            </div>
          </form>
        </>
      )}

      {/* ── su-add: add another? ── */}
      {step === STEP_ADD_MORE && (
        <>
          <h1 className="af-heading">Add another profile?</h1>
          <p className="af-sub">Same email, separate profile — each gets its own progress and optional PIN.</p>

          <div className="af-chips" style={{ marginTop: 20 }}>
            {profiles.map((p, i) => (
              <span key={i} className="af-chip">{p.display_name}</span>
            ))}
          </div>

          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
          <div className="af-actions">
            <button type="button" className="af-btn" onClick={() => go(STEP_PROFILE)}>
              Yes, add another
            </button>
            <button type="button" className="af-btn--secondary" onClick={finishProfiles}
              disabled={submitting}>
              {submitting ? <><span className="af-spin" />Creating…</> : "No, continue"}
            </button>
          </div>
        </>
      )}

      {/* ── su-g-form: guest expert details ── */}
      {step === STEP_GUEST_FORM && (
        <>
          <h1 className="af-heading">Guest expert — your details</h1>
          <p className="af-sub">Tell us what you teach. No screening — you're listed as an expert right away.</p>
          <form onSubmit={submitGuestForm} style={{ display: "contents" }}>
            <Field id="su-skill" label="Skill you teach" value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="e.g. Python & Data Science" required autoFocus />
            <Field id="su-method" label="Teaching method" value={method}
              onChange={(e) => setMethod(e.target.value)}
              placeholder="e.g. Project-first, 1-on-1…" />
            <div className="af-field">
              <label htmlFor="su-bio">Short bio</label>
              <textarea id="su-bio" className="af-field" rows={3}
                value={bio} onChange={(e) => setBio(e.target.value)}
                placeholder="Your background and teaching style."
                style={{ width: "100%", height: "auto", resize: "vertical",
                  border: "1.5px solid #E7E7E4", borderRadius: 14,
                  padding: "12px 16px", fontFamily: "inherit",
                  fontSize: 15, color: "#26272e", background: "#FAFAF9" }} />
            </div>
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Creating account…</> : "Continue"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* ── su-g-listed: you're now an expert ── */}
      {step === STEP_GUEST_LISTED && (
        <>
          <StatusChip icon="spark" role="guest" />
          <h1 className="af-heading">You're now an Expert teacher</h1>
          <p className="af-sub">
            Your profile is listed in the academy's expert directory. Set up your first course now — or do it later from your dashboard.
          </p>
          <div className="af-banner-info">
            <div className="af-banner-info__icon"
              style={{ background: PAL.guest + "22", color: PAL.guest }}>
              <Icon name="spark" size={19} color={PAL.guest} />
            </div>
            <div className="af-banner-info__text">
              Listed as <strong>Guest expert</strong>. Setting up a course helps learners find and book you faster.
            </div>
          </div>
          <div className="af-spacer" />
          <div className="af-actions">
            <button type="button" className="af-btn" onClick={() => go(STEP_GUEST_COURSE)}>
              Set up a course now
            </button>
            <button type="button" className="af-btn--secondary" onClick={() => go(STEP_GUEST_LIVE)}>
              Maybe later
            </button>
          </div>
        </>
      )}

      {/* ── su-g-course: optional course setup ── */}
      {step === STEP_GUEST_COURSE && (
        <>
          <h1 className="af-heading">Set up your course</h1>
          <p className="af-sub">Publish a course so learners can enroll and reach you.</p>
          <Field id="su-ctitle" label="Course title" value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="e.g. Python & Data Science — from scratch" autoFocus />
          <Field id="su-cskill" label="Skill / category" value={courseSkill}
            onChange={(e) => setCourseSkill(e.target.value)}
            placeholder="e.g. Coding & Web" />
          <Field id="su-cprice" label="Price per hour" value={coursePrice}
            onChange={(e) => setCoursePrice(e.target.value)}
            placeholder="₹ 450" />
          <div className="af-field">
            <label htmlFor="su-cdesc">What learners will get</label>
            <textarea id="su-cdesc" rows={3} value={courseDesc}
              onChange={(e) => setCourseDesc(e.target.value)}
              placeholder="Outline the sessions, level, and outcomes."
              style={{ width: "100%", border: "1.5px solid #E7E7E4", borderRadius: 14,
                padding: "12px 16px", fontFamily: "inherit", fontSize: 15,
                color: "#26272e", background: "#FAFAF9", resize: "vertical" }} />
          </div>
          {error && <div className="af-error">{error}</div>}
          <div className="af-spacer" />
          <div className="af-actions">
            <button type="button" className="af-btn" onClick={() => go(STEP_GUEST_LIVE)}>
              Publish course
            </button>
            <button type="button" className="af-btn--secondary" onClick={() => go(STEP_GUEST_LIVE)}>
              Skip — set up later
            </button>
          </div>
        </>
      )}

      {/* ── su-g-live: you're live! ── */}
      {step === STEP_GUEST_LIVE && (
        <>
          <StatusChip icon="check" role="success" />
          <h1 className="af-heading">You're live!</h1>
          <div className="af-banner-success">
            <div className="af-banner-success__icon">
              <Icon name="check" size={24} color="#fff" />
            </div>
            <div style={{ fontWeight: 800, fontSize: 17, color: "#1e7a32" }}>
              Learners can now reach you
            </div>
            <div style={{ fontSize: 13, color: "#5b6470", marginTop: 6, lineHeight: 1.5 }}>
              Your expert profile is active in the directory. Students can view you and start a conversation.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 18, maxWidth: 520 }}>
            {["Listed in the expert directory", "Open to learner messages & bookings",
              "Manage courses any time from your dashboard"].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 10,
                fontSize: 12.5, color: "#15502a" }}>
                <span style={{ color: "#2f9d42" }}><Icon name="check" size={14} color="#2f9d42" /></span>
                {s}
              </div>
            ))}
          </div>
          <div className="af-spacer" />
          <div className="af-actions">
            <button type="button" className="af-btn af-btn--block" onClick={finishGuestLive}>
              {isAddingToExisting ? "Go to login" : "Verify email to continue"}
            </button>
          </div>
        </>
      )}

      {/* ── su-f-form: faculty application ── */}
      {step === STEP_FAC_FORM && (
        <>
          <h1 className="af-heading">Faculty — application</h1>
          <p className="af-sub">Faculty applications are reviewed thoroughly by our admin team.</p>
          <form onSubmit={submitFacultyForm} style={{ display: "contents" }}>
            <Field id="su-qual" label="Highest qualification" value={qual}
              onChange={(e) => setQual(e.target.value)}
              placeholder="e.g. M.Sc Mathematics" required autoFocus />
            <Field id="su-subj" label="Subjects you'll teach" value={subj}
              onChange={(e) => setSubj(e.target.value)}
              placeholder="e.g. Algebra, Calculus" />
            <Field id="su-exp" label="Years of experience" value={exp}
              onChange={(e) => setExp(e.target.value)}
              placeholder="e.g. 6 years" />
            {error && <div className="af-error">{error}</div>}
            <div className="af-spacer" />
            <div className="af-actions">
              <button type="submit" className="af-btn af-btn--block" disabled={submitting}>
                {submitting ? <><span className="af-spin" />Submitting…</> : "Submit application"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* ── su-f-waiting: application submitted ── */}
      {step === STEP_FAC_WAITING && (
        <>
          <StatusChip icon="clock" role="faculty" />
          <h1 className="af-heading">Application submitted</h1>
          <p className="af-sub">Your application is now with the academy's admin team for review.</p>

          <div className="af-wait-row" style={{ marginTop: 18 }}>
            <div className="af-wait-spin" />
            <div style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
              You're in the review queue
            </div>
          </div>

          <p style={{ fontSize: 13.5, color: "#5b6470", lineHeight: 1.6, margin: "12px 0 0",
            maxWidth: 460 }}>
            We'll notify you by email whether you're qualified to teach within{" "}
            <strong style={{ color: "#15502a" }}>3–5 working days</strong>.
          </p>

          <div className="af-banner-warn">
            <Icon name="shield" size={16} color="#b9760f" />
            <div>
              <strong>Heads up:</strong> once approved, log in within{" "}
              <strong>3 days</strong>. If you don't, your approval expires and
              you'll need to re-apply.
            </div>
          </div>

          <div className="af-checklist">
            {[
              { label: "Application received", done: true },
              { label: "Admin review (3–5 days)", done: false },
              { label: "Decision emailed to you", done: false },
            ].map(({ label, done }) => (
              <div key={label} className="af-checklist__item"
                style={{ color: done ? "#15502a" : "#8b9090" }}>
                <div className="af-checklist__dot"
                  style={{ background: done ? "#2f9d42" : "#e3e8e4" }}>
                  {done && <Icon name="check" size={11} color="#fff" />}
                </div>
                {label}
              </div>
            ))}
          </div>

          <div className="af-spacer" />
          <div className="af-actions">
            <Link to="/login" className="af-btn--secondary" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              height: 52, padding: "0 24px", borderRadius: 14,
              border: "1.5px solid #E7E7E4", background: "#fff",
              color: "#3c3d44", fontSize: 14.5, fontWeight: 600,
              textDecoration: "none" }}>
              Back to login
            </Link>
          </div>
        </>
      )}

    </AuthShell>
  );
}
