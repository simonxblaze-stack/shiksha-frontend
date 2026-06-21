/**
 * src/config/urls.js — single source of truth for all three apps
 *
 * Copy to:
 *   landing_page/src/config/urls.js       (replace existing)
 *   student_dashboard/src/config/urls.js   (create)
 *   teacher_dashboard/src/config/urls.js   (create)
 *
 * The backend serves all routes under /api/ (e.g. /api/accounts/me/).
 * API_URL therefore includes /api. If VITE_API_URL is set on the droplet
 * it MUST already include /api (e.g. https://api.dev.shikshacom.com/api).
 *
 * Dev auto-detection covers: dev.shikshacom.com, *.dev.shikshacom.com,
 * localhost, 127.0.0.1, 192.168.x.x, 10.x.x.x.
 * No VITE_* vars needed on the dev droplet — detection handles it.
 */

const host  = typeof window !== "undefined" ? window.location.hostname : "";
const isDev =
  host === "dev.shikshacom.com"         ||
  host.endsWith(".dev.shikshacom.com")  ||
  host === "localhost"                   ||
  host === "127.0.0.1"                  ||
  /^192\.168\.\d+\.\d+$/.test(host)    ||
  /^10\.\d+\.\d+\.\d+$/.test(host);

const PROD = {
  HOME:    "https://www.shikshacom.com",
  APP:     "https://app.shikshacom.com",
  TEACHER: "https://teacher.shikshacom.com",
  API:     "https://api.shikshacom.com/api",   // includes /api
  WS:      "api.shikshacom.com",
};

const DEV = {
  HOME:    "https://dev.shikshacom.com",
  APP:     "https://app.dev.shikshacom.com",
  TEACHER: "https://teacher.dev.shikshacom.com",
  API:     "https://api.dev.shikshacom.com/api", // includes /api
  WS:      "api.dev.shikshacom.com",
};

const ENV = isDev ? DEV : PROD;

// Strip trailing slashes so appending paths never produces double-slashes
const clean = (s) => s.replace(/\/$/, "");

export const HOME_URL    = clean(import.meta.env.VITE_HOME_URL    || ENV.HOME);
export const APP_URL     = clean(import.meta.env.VITE_APP_URL     || ENV.APP);
export const TEACHER_URL = clean(import.meta.env.VITE_TEACHER_URL || ENV.TEACHER);
export const WS_HOST     =       import.meta.env.VITE_WS_HOST     || ENV.WS;

// API_URL: if the env var is set it must already include /api.
// If not set, the fallback already has /api baked in.
export const API_URL = clean(import.meta.env.VITE_API_URL || ENV.API);

// Composite URLs
export const LOGIN_URL             = HOME_URL    + "/login";
export const SIGNUP_URL            = HOME_URL    + "/signup";
export const PICK_PROFILE_URL      = HOME_URL    + "/pick-profile";
export const FORM_FILLUP_URL       = HOME_URL    + "/form-fillup";
export const APP_DASHBOARD_URL     = APP_URL;
export const TEACHER_DASHBOARD_URL = TEACHER_URL + "/teacher/dashboard";
