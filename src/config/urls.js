// src/config/urls.js — single source of truth for all three apps
//
// Priority: VITE_* env var → runtime hostname detection → production fallback
//
// Dev detection: dev.shikshacom.com, *.dev.shikshacom.com, localhost, LAN IPs
// No env vars needed on the dev droplet — auto-detection handles it.
// Only set VITE_* vars if you have a staging environment with a non-standard domain.

const host  = typeof window !== "undefined" ? window.location.hostname : "";
const isDev =
  host === "dev.shikshacom.com" ||
  host.endsWith(".dev.shikshacom.com") ||
  host === "localhost" ||
  host === "127.0.0.1" ||
  /^192\.168\.\d+\.\d+$/.test(host) ||
  /^10\.\d+\.\d+\.\d+$/.test(host);

const PROD = {
  HOME:    "https://www.shikshacom.com",
  APP:     "https://app.shikshacom.com",       // no trailing slash
  TEACHER: "https://teacher.shikshacom.com",
  API:     "https://api.shikshacom.com",
  WS:      "api.shikshacom.com",
};

const DEV = {
  HOME:    "https://dev.shikshacom.com",
  APP:     "https://app.dev.shikshacom.com",   // no trailing slash
  TEACHER: "https://teacher.dev.shikshacom.com",
  API:     "https://api.dev.shikshacom.com",
  WS:      "api.dev.shikshacom.com",
};

const ENV = isDev ? DEV : PROD;

// Base URLs (no trailing slash — safe to append paths)
export const HOME_URL    = (import.meta.env.VITE_HOME_URL    || ENV.HOME).replace(/\/$/, "");
export const APP_URL     = (import.meta.env.VITE_APP_URL     || ENV.APP).replace(/\/$/, "");
export const TEACHER_URL = (import.meta.env.VITE_TEACHER_URL || ENV.TEACHER).replace(/\/$/, "");
export const API_URL     = (import.meta.env.VITE_API_URL     || ENV.API + "/api");
export const WS_HOST     =  import.meta.env.VITE_WS_HOST     || ENV.WS;

// Composite URLs used throughout the apps
export const LOGIN_URL            = HOME_URL    + "/login";
export const SIGNUP_URL           = HOME_URL    + "/signup";
export const PICK_PROFILE_URL     = HOME_URL    + "/pick-profile";
export const FORM_FILLUP_URL      = HOME_URL    + "/form-fillup";
export const APP_DASHBOARD_URL    = APP_URL;                              // student dashboard root
export const TEACHER_DASHBOARD_URL = TEACHER_URL + "/teacher/dashboard";  // teacher dashboard entry
