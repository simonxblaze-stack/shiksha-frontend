/* skillApi.js — live API seam for the Skill Development feature.
   ────────────────────────────────────────────────────────────────
   USE_MOCK is now false: every screen talks to the Django backend
   mounted at /api/skill/ (see skills/urls.py). The component-facing
   function signatures are unchanged; the mapping from each screen's
   payload to the backend's expected fields lives here so the screens
   stay (mostly) untouched.

   Auth is cookie-based via the shared apiClient (withCredentials +
   401-refresh), so calls that need a logged-in account / active learner
   profile are already authorised by the session.

   NOTE on registration (see comments on registerStudent / registerTeacher):
   account creation now goes through the unified accounts signup. The skill
   StudentSignup screen should redirect new users to /signup; the skill
   TeacherSignup screen becomes the APPLICATION form for a logged-in teacher. */
import api from "./apiClient";

const USE_MOCK = false;

/* ── Teacher directory ────────────────────────────────────── */
export async function fetchTeachers(params = {}) {
  // params may include { cat, search }
  const { data } = await api.get("/skill/teachers/", { params });
  return data;
}

export async function fetchTeacher(id) {
  const { data } = await api.get(`/skill/teachers/${id}/`);
  return data;
}

export async function fetchCategories() {
  const { data } = await api.get("/skill/categories/");
  return data;
}

/* ── Registration ─────────────────────────────────────────── */

/* Guest student signup.
   RECOMMENDED: retire this screen and send new learners to the main
   /signup (accounts). Kept working here by mapping onto the unified
   signup so a brand-new learner account + one profile is created. */
export async function registerStudent(data) {
  const username =
    (data.email || "").split("@")[0] +
    "-" + Math.random().toString(36).slice(2, 6);
  const payload = {
    email: data.email,
    username,
    password: data.password,
    role: "STUDENT",
    profiles: [{ display_name: data.fullName, relationship: "SELF" }],
  };
  const { data: res } = await api.post("/accounts/signup/", payload);
  return { ok: true, ...res };
}

/* Guest-expert application.
   Assumes the teacher is already a logged-in account (signed up via
   accounts with teacher_type=GUEST). Maps the rich form `data` onto the
   TeacherApplication fields. Returns { applicationId } — thread this into
   the scheduler instead of a locally-built id. */
export async function registerTeacher(data) {
  const primarySkill =
    (data.customSkills && data.customSkills[0]) ||
    (data.categories && data.categories[0]) ||
    data.skill_name ||
    "Skill";

  const payload = {
    track: "GUEST",
    category: (data.categories && data.categories[0]) || null, // category slug
    skill_name: primarySkill,
    headline: data.headline || "",
    experience: data.experience || "",
    method_note: data.bio || "",
    skill_tags: [...(data.customSkills || []), ...(data.categories || [])],
  };
  const { data: res } = await api.post("/skill/teacher-applications/", payload);
  return { ok: true, applicationId: res.applicationId, status: res.status };
}

/* ── Interview screening ──────────────────────────────────── */
export async function fetchInterviewSlots() {
  const { data } = await api.get("/skill/interview-slots/");
  return data;
}

export async function scheduleInterview({ applicationId, slot }) {
  // `slot` may be a slot id or a raw datetime; backend accepts either.
  const body = typeof slot === "object" && slot?.id ? { slot: slot.id } : { slot };
  const { data } = await api.post(
    `/skill/teacher-applications/${applicationId}/schedule/`, body
  );
  return data;
}

export async function fetchReviewQueue() {
  const { data } = await api.get("/skill/admin/interview-queue/");
  return data;
}

export async function submitEvaluation({ candidateId, decision, tier, scores, feedback }) {
  // candidateId is the application id returned by the review queue.
  const { data } = await api.post(
    `/skill/admin/interviews/${candidateId}/evaluation/`,
    { decision, tier, scores: scores || {}, feedback: feedback || "" }
  );
  return data;
}

/* ── Sessions & payments ──────────────────────────────────── */

/* Learner requests a session/contact. Needs an active learner profile in
   the session (selected via the profile picker); the backend reads it from
   the JWT. */
export async function requestSession(payload = {}) {
  const body = {
    expert: payload.expert || payload.teacherId,
    contact_mode: payload.mode || payload.contact_mode || "session",
    note: payload.draft || payload.note || "",
    scheduled_for: payload.scheduled_for || null,
  };
  const { data } = await api.post("/skill/sessions/", body);
  return { ok: true, sessionId: data.sessionId };
}

export async function payForSession({ teacherId, draft, method, amount }) {
  // Creates a pending-payment session + (stub) order. Wire Razorpay checkout
  // on the client against the returned order, then verify server-side.
  const { data } = await api.post("/skill/payments/create-order/", {
    teacherId, draft, method, amount,
  });
  return { ok: true, bookingId: data.bookingId, sessionId: data.sessionId };
}

export default {
  fetchTeachers, fetchTeacher, fetchCategories,
  registerStudent, registerTeacher,
  fetchInterviewSlots, scheduleInterview, fetchReviewQueue, submitEvaluation,
  requestSession, payForSession,
};
