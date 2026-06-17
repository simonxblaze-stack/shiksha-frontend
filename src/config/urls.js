// Single source of truth for cross-app URLs.
//
// Priority: an explicit VITE_*_URL env var (set per-droplet in .env) ALWAYS wins.
// Fallback: when a var is missing, we auto-detect dev vs prod from the current
// hostname — so a missing / misnamed (.env.development) / incomplete .env on the
// dev droplet can no longer leak dev traffic to production.
const host = typeof window !== "undefined" ? window.location.hostname : "";
const isDev = host === "dev.shikshacom.com" || host.endsWith(".dev.shikshacom.com");

const PROD = {
  HOME: "https://www.shikshacom.com",
  APP: "https://app.shikshacom.com/",
  TEACHER: "https://teacher.shikshacom.com/teacher/dashboard",
  API: "https://api.shikshacom.com",
};

const DEV = {
  HOME: "https://dev.shikshacom.com",
  APP: "https://app.dev.shikshacom.com/",
  TEACHER: "https://teacher.dev.shikshacom.com/teacher/dashboard",
  API: "https://api.dev.shikshacom.com",
};

const FALLBACK = isDev ? DEV : PROD;

export const HOME_URL = import.meta.env.VITE_HOME_URL || FALLBACK.HOME;
export const APP_URL = import.meta.env.VITE_APP_URL || FALLBACK.APP;
export const TEACHER_URL = import.meta.env.VITE_TEACHER_URL || FALLBACK.TEACHER;
export const API_URL = import.meta.env.VITE_API_URL || FALLBACK.API;

export const LOGIN_URL = `${HOME_URL.replace(/\/$/, "")}/login`;
