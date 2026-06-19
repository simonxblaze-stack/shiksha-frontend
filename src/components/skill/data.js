/* data.js — sample/seed data for the Skill Development feature.
   ────────────────────────────────────────────────────────────────
   This is mock data so the UI runs before the backend exists. When
   your API is ready, replace these with calls in ../../api/skillApi.js
   (the screens already read through that seam where it matters).

   Photos are imported so Vite fingerprints them. Teachers use
   teacher1–9; the ADMIN interview panel deliberately uses different
   photos (teacher10/11) so applicants and reviewers are never the
   same faces. */

import teacher1 from "../../assets/teachers/teacher1.jpeg";
import teacher2 from "../../assets/teachers/teacher2.jpeg";
import teacher3 from "../../assets/teachers/teacher3.jpeg";
import teacher4 from "../../assets/teachers/teacher4.jpeg";
import teacher5 from "../../assets/teachers/teacher5.jpeg";
import teacher6 from "../../assets/teachers/teacher6.jpeg";
import teacher7 from "../../assets/teachers/teacher7.jpeg";
import teacher8 from "../../assets/teachers/teacher8.jpeg";
import teacher9 from "../../assets/teachers/teacher9.jpeg";
import admin1 from "../../assets/teachers/teacher10.jpeg";
import admin2 from "../../assets/teachers/teacher11.jpeg";

export const SKILL_CATEGORIES = [
  { id: "coding",   label: "Coding & Web",       icon: "▣", color: "#1b9c85" },
  { id: "design",   label: "Design & Art",       icon: "✦", color: "#a78bfa" },
  { id: "music",    label: "Music & Audio",      icon: "♪", color: "#ff8f01" },
  { id: "lang",     label: "Languages",          icon: "ᴬ", color: "#60a5fa" },
  { id: "business", label: "Business & Finance", icon: "₹", color: "#f87171" },
  { id: "exam",     label: "Exam Prep",          icon: "✎", color: "#125027" },
  { id: "crafts",   label: "Crafts & Handmade",  icon: "✄", color: "#d97757" },
  { id: "spoken",   label: "Public Speaking",    icon: "❝", color: "#1dcaab" },
];

export const TEACHERS = [
  { id: 1, name: "Hrangthantlinga", title: "Web Developer · ex-Infosys", skills: ["React", "Node.js", "Python"], cat: "coding",
    rating: 4.9, sessions: 142, rate: 450, img: teacher1,
    bio: "Twelve years of building production web apps. I teach the version of programming I wish I'd had — fewer tutorials, more shipping. Sessions are project-first.",
    badges: ["Verified", "Quick replies"], availability: "Mon–Sat · evenings" },
  { id: 2, name: "Mimi Lalramthari", title: "English & IELTS coach", skills: ["IELTS", "Spoken English", "Essay"], cat: "lang",
    rating: 4.8, sessions: 211, rate: 350, img: teacher2,
    bio: "Spent 6 years preparing students for IELTS and university interviews. I focus on the speaking patterns examiners actually score.",
    badges: ["Verified"], availability: "Daily · mornings" },
  { id: 3, name: "Eric Lalsiamliana", title: "UI/UX Designer", skills: ["Figma", "UX Research", "Branding"], cat: "design",
    rating: 4.9, sessions: 88, rate: 550, img: teacher3,
    bio: "Designer at a Bangalore studio. I run portfolio reviews and walk through real client briefs end-to-end.",
    badges: ["Verified", "Top-rated"], availability: "Weekends" },
  { id: 4, name: "Zothanpuia", title: "Civil Services mentor", skills: ["UPSC GS", "Essay", "Interview"], cat: "exam",
    rating: 4.7, sessions: 167, rate: 400, img: teacher4,
    bio: "Cleared Mains twice. I help aspirants build an answer-writing rhythm and stay sane during the long prep.",
    badges: ["Verified"], availability: "Mon–Fri" },
  { id: 5, name: "V. Lalrindika", title: "Guitarist & vocal coach", skills: ["Acoustic Guitar", "Vocals", "Songwriting"], cat: "music",
    rating: 4.9, sessions: 96, rate: 500, img: teacher5,
    bio: "Performing musician with a soft spot for first-time learners. We'll have you playing a song you actually like by week two.",
    badges: ["Top-rated"], availability: "Tue–Sun · afternoons" },
  { id: 6, name: "Janet Lalhmangaihzuali", title: "Watercolour artist", skills: ["Watercolour", "Sketching", "Composition"], cat: "crafts",
    rating: 4.8, sessions: 54, rate: 380, img: teacher6,
    bio: "Self-taught artist who teaches the way I learned — by making lots of small finished things.",
    badges: ["Verified"], availability: "Weekends" },
  { id: 7, name: "Vanlalhluzuali", title: "Public speaking coach", skills: ["Debate", "Presentation", "Voice"], cat: "spoken",
    rating: 4.8, sessions: 73, rate: 420, img: teacher7,
    bio: "Toastmasters DTM. I work mainly with students prepping for interviews and competitions.",
    badges: ["Verified"], availability: "Evenings" },
  { id: 8, name: "Dinah Lalremhlui", title: "Chartered Accountant", skills: ["Accounting", "GST", "Personal Finance"], cat: "business",
    rating: 4.9, sessions: 119, rate: 600, img: teacher8,
    bio: "Practising CA. I demystify books and taxes for students starting their own thing.",
    badges: ["Verified", "Top-rated"], availability: "Sat–Sun" },
  { id: 9, name: "Lalmuanawma", title: "Python & Data Science", skills: ["Python", "Pandas", "ML basics"], cat: "coding",
    rating: 4.7, sessions: 64, rate: 480, img: teacher9,
    bio: "Data scientist who teaches Python the boring-but-correct way. Bring a dataset.",
    badges: ["Verified"], availability: "Mon–Thu · nights" },
];

/* The interview panel is ALWAYS Shiksha admin staff — never directory teachers. */
export const PANEL = [
  { name: "Lalengmawii Ralte", role: "Admin · Screening Lead", img: admin1 },
  { name: "Vanlalruatkima", role: "Admin · Faculty Reviewer", img: admin2 },
];

export const STAGES = [
  { key: "application", label: "Application", desc: "Profile & skills submitted" },
  { key: "eligibility", label: "Eligibility", desc: "Docs & ID checked" },
  { key: "interview",   label: "Interview",   desc: "Live screening + demo" },
  { key: "decision",    label: "Decision",    desc: "Result & onboarding" },
];

export const RUBRIC = [
  { key: "subject", label: "Subject knowledge",       hint: "Depth & accuracy in their skill" },
  { key: "comm",    label: "Communication & clarity", hint: "Explains simply, good pace" },
  { key: "method",  label: "Teaching method / demo",  hint: "Quality of the demo segment" },
  { key: "engage",  label: "Student engagement",      hint: "Energy, checks for understanding" },
  { key: "prof",    label: "Professionalism",         hint: "Punctual, prepared, courteous" },
];

export const AGENDA = [
  { key: "intro", label: "Intro & background", mins: "0–5 min" },
  { key: "qa",    label: "Subject Q&A",        mins: "5–15 min" },
  { key: "demo",  label: "Demo teaching",      mins: "15–25 min" },
  { key: "wrap",  label: "Candidate questions & wrap", mins: "25–30 min" },
];

export const TIERS = [
  { key: "standard", label: "Standard", range: "₹350–450", note: "New to the platform" },
  { key: "senior",   label: "Senior",   range: "₹450–600", note: "Strong, experienced" },
  { key: "expert",   label: "Expert",   range: "₹600+",    note: "Exceptional / specialist" },
];

export const CANDIDATES = [
  { id: "c1", name: "Lalrinpuia Sailo", skill: "Python & Data Science", cat: "Coding",
    img: teacher9, time: "Today · 4:30 PM", status: "ready", exp: "3–5 yrs" },
  { id: "c2", name: "Ruth Vanlalhriati", skill: "Spoken English", cat: "Languages",
    img: teacher2, time: "Today · 5:15 PM", status: "scheduled", exp: "5–10 yrs" },
  { id: "c3", name: "Malsawmtluanga", skill: "Acoustic Guitar", cat: "Music",
    img: teacher5, time: "Tomorrow · 11:00 AM", status: "scheduled", exp: "1–3 yrs" },
  { id: "c4", name: "Esther Lalruatfeli", skill: "Watercolour", cat: "Crafts",
    img: teacher6, time: "Reviewed · yesterday", status: "approved", exp: "3–5 yrs" },
  { id: "c5", name: "Vanlalruata", skill: "UPSC GS", cat: "Exam prep",
    img: teacher4, time: "Reviewed · 2 days ago", status: "hold", exp: "1–3 yrs" },
];

export const DEFAULT_APPLICANT = {
  name: "Lalrinpuia Sailo",
  skill: "Python & Data Science",
  category: "coding",
  headline: "Data analyst · ex-Wipro · 4 yrs",
  experience: "3–5 years",
  img: teacher9,
};
