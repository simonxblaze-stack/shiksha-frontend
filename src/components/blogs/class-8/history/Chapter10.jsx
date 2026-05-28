import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #060a0c;
    --ink2:       #101820;
    --muted:      #587080;
    --paper:      #f2f6f8;
    --paper2:     #e4ecf0;
    --paper3:     #d4e0e8;
    --ocean:      #0a4a6e;
    --ocean2:     #063250;
    --ocean-lt:   #e0eef8;
    --saffron:    #c46010;
    --saffron2:   #9a4808;
    --green:      #1a6a2a;
    --green2:     #104818;
    --gold:       #b8860b;
    --gold2:      #8b6408;
    --crimson:    #8b1a2a;
    --slate:      #2a3a50;
    --rule:       #c0ccd8;
    --sand:       #f4ede0;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .mnm-root {
    font-family: 'Inter', sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ─── HERO ─── */
  .mnm-hero {
    background: linear-gradient(158deg, #020608 0%, #060e18 48%, #04080e 100%);
    min-height: 88vh;
    display: flex; align-items: flex-end;
    position: relative; overflow: hidden;
    padding: 0 0 64px;
  }
  .mnm-hero-bg-num {
    position: absolute; bottom: -40px; right: -20px;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(240px, 38vw, 520px); font-weight: 900; line-height: 1;
    color: rgba(255,255,255,0.022); letter-spacing: -0.04em;
    user-select: none; pointer-events: none;
  }
  .mnm-hero::before {
    content: ''; position: absolute;
    top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #063250, #0a4a6e, #c46010, #1a6a2a, #0a4a6e, #063250);
  }
  .mnm-ring {
    position: absolute; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.018);
    pointer-events: none;
  }
  .mnm-hero-inner {
    max-width: 900px; width: 100%;
    margin: 0 auto; padding: 0 32px;
    position: relative; z-index: 1;
  }
  .mnm-overline {
    font-family: 'Poppins', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: #6aaccc; margin-bottom: 24px;
    display: flex; align-items: center; gap: 14px;
  }
  .mnm-overline::before, .mnm-overline::after {
    content: ''; flex: 0 0 40px; height: 1px; background: #6aaccc;
  }
  .mnm-hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(38px, 7vw, 80px); font-weight: 900;
    color: #fff; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px;
  }
  .mnm-hero-title em        { font-style: normal; color: #6aaccc; }
  .mnm-hero-title .saf-em   { color: #f09040; }
  .mnm-hero-title .green-em { color: #60c060; }
  .mnm-hero-bar {
    display: flex; flex-wrap: wrap; gap: 0;
    border-top: 1px solid rgba(255,255,255,0.12);
    padding-top: 24px; margin-top: 8px;
  }
  .mnm-hero-bar-item {
    flex: 1 1 150px; padding: 0 24px 0 0;
    border-right: 1px solid rgba(255,255,255,0.1); margin-right: 24px;
  }
  .mnm-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .mnm-bar-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(255,255,255,0.35); margin-bottom: 5px;
  }
  .mnm-bar-value {
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
    color: rgba(255,255,255,0.75);
  }

  /* ─── BODY ─── */
  .mnm-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }

  /* LEAD */
  .mnm-lead {
    border-left: 5px solid var(--ocean);
    padding: 28px 36px; margin-bottom: 64px; background: var(--paper2);
  }
  .mnm-lead p {
    font-family: 'Poppins', sans-serif; font-size: 19px; font-weight: 500;
    color: var(--ink2); line-height: 1.78; margin: 0 0 14px;
  }
  .mnm-lead p:last-child { margin: 0; }
  .mnm-lead strong { color: var(--ocean); }

  /* SECTION HEADER */
  .mnm-sec-head {
    display: flex; align-items: flex-start; gap: 20px;
    margin-bottom: 28px; border-bottom: 2px solid var(--rule); padding-bottom: 18px;
  }
  .mnm-sec-num {
    font-family: 'Montserrat', sans-serif; font-size: 56px; font-weight: 900;
    color: var(--rule); line-height: 1; flex-shrink: 0; margin-top: 4px;
  }
  .mnm-sec-title-wrap { display: flex; flex-direction: column; justify-content: flex-end; }
  .mnm-sec-kicker {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase; color: var(--ocean); margin-bottom: 4px;
  }
  .mnm-sec-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(22px, 3.5vw, 32px); font-weight: 900;
    color: var(--ink); line-height: 1.15; letter-spacing: -0.01em;
  }
  .mnm-sec-title span        { color: var(--ocean); }
  .mnm-sec-title .saf        { color: var(--saffron); }
  .mnm-sec-title .green      { color: var(--green); }
  .mnm-sec-title .gold       { color: var(--gold); }
  .mnm-sec-title .crimson    { color: var(--crimson); }
  .mnm-sec-title .slate      { color: var(--slate); }

  /* BODY TEXT */
  .mnm-body-text {
    font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 400;
    color: var(--ink2); line-height: 1.82; margin-bottom: 24px;
  }
  .mnm-body-text strong { color: var(--ink); font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* DIVIDER */
  .mnm-divider {
    display: flex; align-items: center; gap: 16px; margin: 56px 0;
  }
  .mnm-divider::before, .mnm-divider::after {
    content: ''; flex: 1; height: 1px; background: var(--rule);
  }
  .mnm-divider-mark {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--ocean); flex-shrink: 0;
  }

  /* LIST */
  .mnm-list { list-style: none; padding: 0; margin: 0 0 28px; }
  .mnm-list li {
    font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2);
    line-height: 1.75; padding: 10px 0 10px 28px; border-bottom: 1px solid var(--paper3);
    position: relative;
  }
  .mnm-list li::before {
    content: ''; position: absolute; left: 0; top: 20px;
    width: 8px; height: 8px; border-radius: 50%; background: var(--ocean);
  }
  .mnm-list li strong { color: var(--ink); font-weight: 700; font-family: 'Poppins', sans-serif; }

  /* ── INC FOUNDING CARD ── */
  .mnm-founding {
    background: var(--ink2); margin: 28px 0 40px;
    padding: 36px 40px; display: grid;
    grid-template-columns: auto 1fr; gap: 32px; align-items: start;
  }
  .mnm-founding-year {
    font-family: 'Montserrat', sans-serif; font-size: 64px; font-weight: 900;
    color: #6aaccc; line-height: 1; flex-shrink: 0;
  }
  .mnm-founding-label {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase; color: #6aaccc; margin-bottom: 8px;
  }
  .mnm-founding-name {
    font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900;
    color: #fff; margin-bottom: 12px;
  }
  .mnm-founding-founders {
    display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;
  }
  .mnm-founder-pill {
    font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 600;
    color: rgba(255,255,255,0.8); background: rgba(106,172,204,0.15);
    padding: 4px 12px; border: 1px solid rgba(106,172,204,0.25);
  }
  .mnm-founding-note {
    font-family: 'Inter', sans-serif; font-size: 14px;
    color: rgba(255,255,255,0.5); line-height: 1.65;
  }

  /* ── MODERATES vs RADICALS CONTRAST ── */
  .mnm-contrast {
    display: grid; grid-template-columns: 1fr 1fr;
    margin: 28px 0 40px; border: 1px solid var(--rule); overflow: hidden;
  }
  .mnm-contrast-col { padding: 28px 28px 32px; background: var(--paper2); }
  .mnm-contrast-col.dark {
    background: #06101a; color: #c8dce8;
    border-left: 1px solid #1a2e40;
  }
  .mnm-contrast-hd {
    font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 900;
    color: var(--ocean); margin-bottom: 6px;
  }
  .mnm-contrast-col.dark .mnm-contrast-hd { color: #6aaccc; }
  .mnm-contrast-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 16px;
  }
  .mnm-contrast-col ul { list-style: none; padding: 0; }
  .mnm-contrast-col ul li {
    font-family: 'Inter', sans-serif; font-size: 15px;
    line-height: 1.7; padding: 9px 0; border-bottom: 1px solid rgba(0,0,0,0.07);
  }
  .mnm-contrast-col.dark ul li { border-bottom-color: rgba(255,255,255,0.07); }
  .mnm-contrast-col ul li:last-child { border-bottom: none; }
  .mnm-contrast-col ul li strong { font-family: 'Poppins', sans-serif; font-weight: 700; }
  .mnm-contrast-col.dark ul li strong { color: #acd8f0; }

  /* ── LAWS GRID (acts passed) ── */
  .mnm-laws-grid {
    display: grid; grid-template-columns: 1fr 1fr 1fr;
    gap: 16px; margin: 28px 0 40px;
  }
  .mnm-law-card {
    padding: 22px 20px; background: var(--paper2);
    border-top: 4px solid var(--ocean); text-align: center;
  }
  .mnm-law-card.saf   { border-top-color: var(--saffron); }
  .mnm-law-card.green { border-top-color: var(--green); }
  .mnm-law-year {
    font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 900;
    color: var(--ocean); margin-bottom: 6px;
  }
  .mnm-law-card.saf   .mnm-law-year { color: var(--saffron); }
  .mnm-law-card.green .mnm-law-year { color: var(--green); }
  .mnm-law-name {
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
    color: var(--ink); margin-bottom: 8px; line-height: 1.3;
  }
  .mnm-law-desc {
    font-family: 'Inter', sans-serif; font-size: 13px; color: var(--ink2); line-height: 1.65;
  }

  /* ── GANDHI PROFILE ── */
  .mnm-gandhi-block {
    background: #040c14; margin: 28px 0 40px; padding: 36px 40px;
    display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: start;
  }
  .mnm-gandhi-badge {
    width: 80px; height: 80px; border-radius: 50%;
    background: linear-gradient(135deg, #0a4a6e, #c46010);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Montserrat', sans-serif; font-size: 24px; font-weight: 900;
    color: #fff; flex-shrink: 0;
  }
  .mnm-gandhi-name {
    font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900;
    color: #fff; margin-bottom: 4px;
  }
  .mnm-gandhi-title {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: #6aaccc; margin-bottom: 14px;
  }
  .mnm-gandhi-pts { list-style: none; padding: 0; }
  .mnm-gandhi-pts li {
    font-family: 'Inter', sans-serif; font-size: 15px; color: rgba(255,255,255,0.68);
    padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); line-height: 1.65;
  }
  .mnm-gandhi-pts li:last-child { border-bottom: none; }
  .mnm-gandhi-pts li strong { color: #acd8f0; font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* ── QUOTE BLOCK ── */
  .mnm-quote {
    background: #040c14; padding: 36px 40px; margin: 32px 0 40px;
    border-left: 6px solid var(--saffron); position: relative;
  }
  .mnm-quote-mark {
    font-family: 'Montserrat', sans-serif; font-size: 80px; font-weight: 900;
    color: rgba(196,96,16,0.15); line-height: 0.8;
    position: absolute; top: 20px; left: 24px;
  }
  .mnm-quote-text {
    font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700;
    color: #f8e8d0; line-height: 1.6; position: relative; z-index: 1; margin-bottom: 14px;
  }
  .mnm-quote-attr {
    font-family: 'Inter', sans-serif; font-size: 13px;
    color: rgba(255,255,255,0.4); font-style: italic;
  }

  /* ── MASSACRE BLOCK ── */
  .mnm-massacre {
    background: #100408; border: 1px solid #3a1020;
    padding: 32px 36px; margin: 28px 0 40px;
  }
  .mnm-massacre-tag {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #e06080; margin-bottom: 12px;
  }
  .mnm-massacre-title {
    font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900;
    color: #fff; margin-bottom: 16px;
  }
  .mnm-massacre-date {
    display: inline-block; font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.12em; background: rgba(139,26,42,0.4);
    color: #ff9ab0; padding: 4px 14px; margin-bottom: 18px;
  }
  .mnm-massacre-pts { list-style: none; padding: 0; }
  .mnm-massacre-pts li {
    font-family: 'Inter', sans-serif; font-size: 15px;
    color: rgba(255,255,255,0.65); padding: 8px 0 8px 22px;
    border-bottom: 1px solid rgba(255,255,255,0.05); position: relative; line-height: 1.65;
  }
  .mnm-massacre-pts li:last-child { border-bottom: none; }
  .mnm-massacre-pts li::before {
    content: ''; position: absolute; left: 0; top: 18px;
    width: 8px; height: 8px; border-radius: 50%; background: #e06080;
  }
  .mnm-massacre-pts li strong { color: #ffaabb; font-family: 'Poppins', sans-serif; }

  /* ── MOVEMENT TIMELINE ── */
  .mnm-mv-timeline { margin: 0 0 40px; position: relative; }
  .mnm-mv-timeline::before {
    content: ''; position: absolute;
    left: 48px; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, var(--ocean), var(--saffron), var(--green), var(--crimson));
  }
  .mnm-mv-item {
    display: flex; gap: 24px; margin-bottom: 28px; position: relative;
  }
  .mnm-mv-dot {
    flex-shrink: 0; width: 48px; height: 48px; border-radius: 50%;
    background: var(--ocean); display: flex; align-items: center; justify-content: center;
    font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 900;
    color: #fff; z-index: 1; border: 3px solid var(--paper); box-shadow: 0 0 0 2px var(--ocean);
  }
  .mnm-mv-dot.saf    { background: var(--saffron); box-shadow: 0 0 0 2px var(--saffron); }
  .mnm-mv-dot.green  { background: var(--green);   box-shadow: 0 0 0 2px var(--green); }
  .mnm-mv-dot.crim   { background: var(--crimson); box-shadow: 0 0 0 2px var(--crimson); }
  .mnm-mv-dot.gold   { background: var(--gold);    box-shadow: 0 0 0 2px var(--gold); }
  .mnm-mv-content {
    flex: 1; background: var(--paper2); padding: 18px 22px;
    border-left: 4px solid var(--ocean);
  }
  .mnm-mv-content.saf   { border-left-color: var(--saffron); }
  .mnm-mv-content.green { border-left-color: var(--green); }
  .mnm-mv-content.crim  { border-left-color: var(--crimson); }
  .mnm-mv-content.gold  { border-left-color: var(--gold); }
  .mnm-mv-year {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--ocean); margin-bottom: 4px;
  }
  .mnm-mv-content.saf   .mnm-mv-year { color: var(--saffron); }
  .mnm-mv-content.green .mnm-mv-year { color: var(--green); }
  .mnm-mv-content.crim  .mnm-mv-year { color: var(--crimson); }
  .mnm-mv-content.gold  .mnm-mv-year { color: var(--gold); }
  .mnm-mv-title {
    font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 900;
    color: var(--ink); margin-bottom: 7px;
  }
  .mnm-mv-desc {
    font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink2); line-height: 1.7;
  }

  /* ── PEOPLE'S INITIATIVES GRID ── */
  .mnm-init-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 16px; margin: 28px 0 40px;
  }
  .mnm-init-card {
    padding: 20px 22px; background: var(--paper2);
    border-left: 4px solid var(--ocean);
  }
  .mnm-init-card.saf   { border-left-color: var(--saffron); }
  .mnm-init-card.green { border-left-color: var(--green); }
  .mnm-init-card.gold  { border-left-color: var(--gold); }
  .mnm-init-region {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--ocean); margin-bottom: 5px;
  }
  .mnm-init-card.saf   .mnm-init-region { color: var(--saffron); }
  .mnm-init-card.green .mnm-init-region { color: var(--green); }
  .mnm-init-card.gold  .mnm-init-region { color: var(--gold); }
  .mnm-init-head {
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700;
    color: var(--ink); margin-bottom: 8px;
  }
  .mnm-init-desc {
    font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink2); line-height: 1.7;
  }

  /* ── PARTITION BLOCK ── */
  .mnm-partition {
    background: var(--ink2); padding: 36px 40px; margin: 28px 0 40px;
  }
  .mnm-partition-tag {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase; color: #6aaccc; margin-bottom: 14px;
  }
  .mnm-partition-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 28px;
  }
  .mnm-partition-col-hd {
    font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 900;
    color: #fff; margin-bottom: 12px; padding-bottom: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .mnm-partition-pts { list-style: none; padding: 0; }
  .mnm-partition-pts li {
    font-family: 'Inter', sans-serif; font-size: 14px;
    color: rgba(255,255,255,0.62); padding: 7px 0 7px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.05); position: relative; line-height: 1.65;
  }
  .mnm-partition-pts li:last-child { border-bottom: none; }
  .mnm-partition-pts li::before {
    content: ''; position: absolute; left: 0; top: 16px;
    width: 7px; height: 7px; border-radius: 50%; background: #6aaccc;
  }
  .mnm-partition-pts li strong { color: #acd8f0; font-family: 'Poppins', sans-serif; }

  /* ── FAQ ── */
  .mnm-faq-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .mnm-faq-kicker {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.20em; text-transform: uppercase; color: var(--ocean);
    padding: 5px 14px; background: var(--ocean-lt); display: inline-block;
  }
  .mnm-faq-title {
    font-family: 'Montserrat', sans-serif; font-size: clamp(22px, 3.5vw, 30px);
    font-weight: 900; color: var(--ink); margin-bottom: 28px; line-height: 1.15;
  }
  .mnm-faq-item { border-bottom: 1px solid var(--rule); overflow: hidden; }
  .mnm-faq-q {
    width: 100%; background: none; border: none; cursor: pointer;
    display: flex; justify-content: space-between; align-items: flex-start;
    padding: 20px 4px; gap: 16px; text-align: left;
  }
  .mnm-faq-q-text {
    font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600;
    color: var(--ink); line-height: 1.5; flex: 1;
  }
  .mnm-faq-icon {
    font-family: 'Inter', sans-serif; font-size: 18px; color: var(--ocean);
    flex-shrink: 0; margin-top: 2px;
  }
  .mnm-faq-ans {
    display: none; font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2);
    line-height: 1.80; padding: 0 4px 20px; border-top: 1px solid var(--paper3);
  }
  .mnm-faq-ans.visible { display: block; }
  .mnm-faq-item.open .mnm-faq-q-text { color: var(--ocean); }

  /* ═══════════════════════════════════
     RESPONSIVE — TABLET  (max 768px)
  ═══════════════════════════════════ */
  @media (max-width: 768px) {
    .mnm-hero { min-height: 70vh; padding: 0 0 48px; }
    .mnm-hero-inner { padding: 0 20px; }
    .mnm-overline { font-size: 10px; gap: 10px; margin-bottom: 18px; }
    .mnm-overline::before, .mnm-overline::after { flex: 0 0 24px; }
    .mnm-hero-title { font-size: clamp(34px, 8.5vw, 56px); margin-bottom: 24px; }
    .mnm-hero-bar-item { flex: 1 1 120px; padding: 0 14px 0 0; margin-right: 14px; }
    .mnm-bar-label { font-size: 9px; }
    .mnm-bar-value { font-size: 12px; }

    .mnm-body { padding: 48px 20px 72px; }
    .mnm-lead { padding: 20px 22px; margin-bottom: 44px; }
    .mnm-lead p { font-size: 16px; }
    .mnm-sec-num { font-size: 40px; }
    .mnm-sec-title { font-size: clamp(20px, 5vw, 26px); }
    .mnm-body-text { font-size: 15px; }
    .mnm-list li { font-size: 15px; }

    .mnm-founding { grid-template-columns: 1fr; gap: 12px; padding: 28px 24px; }
    .mnm-founding-year { font-size: 48px; }

    .mnm-contrast { grid-template-columns: 1fr; }
    .mnm-contrast-col.dark { border-left: none; border-top: 1px solid #1a2e40; }
    .mnm-contrast-col { padding: 22px 20px; }

    .mnm-laws-grid { grid-template-columns: 1fr 1fr; }

    .mnm-gandhi-block { grid-template-columns: 1fr; gap: 16px; padding: 28px 24px; }
    .mnm-gandhi-badge { width: 64px; height: 64px; font-size: 20px; }

    .mnm-quote { padding: 28px 24px 28px 28px; }
    .mnm-quote-text { font-size: 17px; }

    .mnm-mv-timeline::before { left: 28px; }
    .mnm-mv-dot { width: 40px; height: 40px; font-size: 11px; }
    .mnm-mv-item { gap: 16px; }
    .mnm-mv-content { padding: 14px 16px; }

    .mnm-init-grid { grid-template-columns: 1fr; }

    .mnm-partition { padding: 28px 24px; }
    .mnm-partition-grid { grid-template-columns: 1fr; gap: 20px; }

    .mnm-faq-q-text { font-size: 14px; }
    .mnm-faq-ans { font-size: 14px; }
    .mnm-divider { margin: 40px 0; }
  }

  /* ═══════════════════════════════════
     RESPONSIVE — MOBILE  (max 480px)
  ═══════════════════════════════════ */
  @media (max-width: 480px) {
    .mnm-hero { min-height: 60vh; padding: 0 0 36px; }
    .mnm-hero-inner { padding: 0 16px; }
    .mnm-overline { font-size: 9px; gap: 8px; margin-bottom: 14px; }
    .mnm-overline::before, .mnm-overline::after { flex: 0 0 16px; }
    .mnm-hero-title { font-size: clamp(28px, 10vw, 44px); margin-bottom: 20px; letter-spacing: -0.02em; }
    .mnm-hero-bar { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding-top: 16px; }
    .mnm-hero-bar-item { border-right: none; margin-right: 0; padding-right: 0; }

    .mnm-body { padding: 36px 16px 60px; }
    .mnm-lead { padding: 16px 18px; margin-bottom: 36px; border-left-width: 4px; }
    .mnm-lead p { font-size: 15px; line-height: 1.7; }

    .mnm-sec-head { gap: 12px; margin-bottom: 20px; }
    .mnm-sec-num { font-size: 32px; }
    .mnm-sec-kicker { font-size: 10px; }
    .mnm-sec-title { font-size: clamp(17px, 5.5vw, 22px); }
    .mnm-body-text { font-size: 14px; line-height: 1.75; }
    .mnm-list li { font-size: 14px; padding: 9px 0 9px 22px; }
    .mnm-list li::before { top: 18px; width: 7px; height: 7px; }

    .mnm-founding { padding: 20px 18px; gap: 10px; }
    .mnm-founding-year { font-size: 40px; }
    .mnm-founding-name { font-size: 18px; }
    .mnm-founder-pill { font-size: 11px; }
    .mnm-founding-note { font-size: 13px; }

    .mnm-contrast-col { padding: 18px 16px; }
    .mnm-contrast-hd { font-size: 15px; }
    .mnm-contrast-col ul li { font-size: 13px; padding: 8px 0; }

    .mnm-laws-grid { grid-template-columns: 1fr; }
    .mnm-law-year { font-size: 24px; }
    .mnm-law-name { font-size: 12px; }
    .mnm-law-desc { font-size: 12px; }

    .mnm-gandhi-block { padding: 20px 18px; gap: 14px; }
    .mnm-gandhi-badge { width: 56px; height: 56px; font-size: 18px; }
    .mnm-gandhi-name { font-size: 18px; }
    .mnm-gandhi-pts li { font-size: 13px; }

    .mnm-quote { padding: 22px 16px 22px 20px; }
    .mnm-quote-mark { font-size: 56px; top: 14px; left: 14px; }
    .mnm-quote-text { font-size: 15px; }
    .mnm-quote-attr { font-size: 12px; }

    .mnm-massacre { padding: 22px 20px; }
    .mnm-massacre-title { font-size: 18px; }
    .mnm-massacre-pts li { font-size: 13px; }

    .mnm-mv-timeline::before { left: 22px; }
    .mnm-mv-dot { width: 36px; height: 36px; font-size: 10px; border-width: 2px; }
    .mnm-mv-item { gap: 12px; margin-bottom: 20px; }
    .mnm-mv-content { padding: 12px 14px; }
    .mnm-mv-year { font-size: 10px; }
    .mnm-mv-title { font-size: 15px; }
    .mnm-mv-desc { font-size: 13px; }

    .mnm-init-grid { grid-template-columns: 1fr; gap: 10px; }
    .mnm-init-card { padding: 16px 18px; }
    .mnm-init-head { font-size: 13px; }
    .mnm-init-desc { font-size: 13px; }

    .mnm-partition { padding: 22px 18px; }
    .mnm-partition-pts li { font-size: 13px; }

    .mnm-faq-title { font-size: clamp(18px, 5vw, 24px); }
    .mnm-faq-q { padding: 16px 4px; }
    .mnm-faq-q-text { font-size: 13px; }
    .mnm-faq-icon { font-size: 16px; }
    .mnm-faq-ans { font-size: 13px; line-height: 1.72; }
    .mnm-divider { margin: 32px 0; }
  }
`;

const faqs = [
  {
    q: "What was the Ilbert Bill controversy and why was it significant?",
    a: "In 1883, Lord Ripon's Law Member Sir Courtenay Ilbert introduced a bill that would have allowed Indian judges to try British or European persons in courts — establishing legal equality between British and Indian judges. This caused an enormous backlash among the White population in India, who strongly opposed the idea of being tried by Indian judges. They agitated fiercely and forced the government to withdraw the bill. The controversy was a turning point: it showed Indians that the British were not willing to treat them as equals under the law, even after decades of colonial rule. It galvanised Indian political opinion and accelerated the movement towards formal political organisation, contributing directly to the formation of the Indian National Congress in 1885."
  },
  {
    q: "What were the Arms Act and Vernacular Press Act of 1878?",
    a: "The Arms Act of 1878 disallowed Indians from possessing arms — a discriminatory law that applied to Indians but not to British residents in India. It was seen as a measure to disarm and suppress any potential Indian resistance. The Vernacular Press Act of 1878 gave the colonial government the power to confiscate the assets of newspapers, including their printing presses, if they published anything the government deemed 'objectionable.' This was a direct attack on the freedom of the Indian press and was aimed at silencing political criticism. Both acts were deeply resented by Indians and became rallying points for early nationalist politics. The repeal of the Arms Act was one of the key demands of the early Indian National Congress."
  },
  {
    q: "What were the differences between the Moderates and the Radicals in the Indian National Congress?",
    a: "The Indian National Congress was divided into two major factions. The Moderates believed in working within the constitutional framework — petitioning and pleading with the British government to bring about gradual reforms. They trusted in the British sense of justice and hoped that reasoned argument would win concessions. They demanded greater Indian representation in governance, separation of judiciary from the executive, and freedom of speech. The Radicals (also called the Extremists), led by figures like Bal Gangadhar Tilak, Bipin Chandra Pal, and Lala Lajpat Rai (Lal-Bal-Pal), rejected this passive approach. They called for immediate Swaraj (self-rule) and were willing to use mass agitation, strikes, and boycotts to oppose British rule. Tilak's famous declaration — 'Freedom is my birthright and I shall have it' — captured the spirit of the Radical wing."
  },
  {
    q: "What caused the partition of Bengal in 1905 and what was the Swadeshi Movement?",
    a: "In 1905, Viceroy Curzon announced the partition of Bengal, which was then the largest province of British India, including Bihar and parts of Odisha. The official reason given was administrative convenience, but many Indians believed the real purpose was to divide the Bengali-speaking population along religious lines — with a Muslim-majority eastern Bengal and a Hindu-dominated western Bengal — thereby weakening nationalist politics. The partition caused outrage across India. Both Moderates and Radicals protested. People organised large public meetings and demonstrations. In a remarkable show of solidarity, people tied 'rakhi' on each other's wrists on Raksha Bandhan to symbolise Hindu-Muslim unity against British divide-and-rule. This popular resistance gave birth to the Swadeshi Movement — people boycotted British goods and promoted Indian-made products. The partition was eventually annulled in 1911 due to the sustained pressure."
  },
  {
    q: "Who was Mahatma Gandhi and what was Satyagraha?",
    a: "Mahatma Gandhi (born 2 October 1869 in Porbandar, Gujarat) studied law in England and then spent 20 years in South Africa, where he led non-violent campaigns against racial discrimination, earning national and international respect. When he returned to India, he spent time travelling the country, understanding the needs of ordinary people. He launched successful local movements in Champaran (against indigo planters), Kheda (against high land revenue), and Ahmedabad (in support of mill workers). Gandhi's philosophy of political action was called Satyagraha — meaning 'truth-force' or 'soul-force.' It was based on the twin principles of truth and non-violence. Unlike earlier nationalists who had relied on petitions and speeches, Gandhi mobilised the masses — peasants, women, tribals, workers — making the freedom struggle truly a people's movement. He transformed the Indian National Congress from an elite debating society into a mass organisation."
  },
  {
    q: "What was the Rowlatt Act and the Jallianwala Bagh Massacre?",
    a: "In 1919, the British government passed the Rowlatt Act, which empowered provincial governments to search any place and arrest any person without a warrant — effectively suspending basic civil liberties. Gandhi and Mohammad Ali Jinnah both condemned it as 'devilish' and tyrannical. Gandhi called for a nationwide Satyagraha. In April 1919, a national hartal (strike) was launched. On 13 April 1919, the day of Baisakhi, a large crowd — including families celebrating the festival — gathered at Jallianwala Bagh in Amritsar. General Dyer marched his troops in, blocked all exits, and ordered continuous firing on the unarmed crowd. Thousands were killed or wounded. The massacre shocked the entire nation and the world, deepening the determination of Indians to end British rule. It marked a turning point after which faith in the British sense of justice was largely destroyed."
  },
  {
    q: "What was the Non-Cooperation Movement and why was it called off?",
    a: "The Non-Cooperation Movement of 1920-22 was the first truly mass movement in Indian history. It combined the Khilafat agitation (Muslims protesting British treatment of the Turkish Sultan) with the broader nationalist demand for Swaraj, united under Gandhi's leadership. Thousands of students left British-run schools and colleges. Prominent lawyers like Motilal Nehru, C.R. Das, C. Rajagopalachari, and Asaf Ali gave up their legal practices. British titles were surrendered, legislatures boycotted, and public bonfires of foreign cloth were lit. However, in February 1922, a violent incident at Chauri Chaura in UP, where a crowd of peasants set fire to a police station killing policemen, led Gandhi to abruptly call off the entire movement. He believed non-violence was non-negotiable — even a partial outbreak of violence invalidated the whole movement. This decision was controversial and disappointed many nationalists."
  },
  {
    q: "What was the Dandi March and the Civil Disobedience Movement?",
    a: "After the Congress resolved to fight for Purna Swaraj (Complete Independence) at Lahore in 1929 under Jawaharlal Nehru's presidentship, 26 January 1930 was observed as Independence Day across the country. In 1930, Gandhi launched the Civil Disobedience Movement, choosing salt as its symbol. Under British law, the state had a monopoly on the manufacture and sale of salt, and Indians were taxed on it. In March 1930, Gandhi and 78 followers marched from Sabarmati Ashram in Ahmedabad to the coastal town of Dandi in Surat — a journey of 240 miles. At Dandi, they broke the Salt Law by collecting natural salt from the seashore. This simple act of defiance inspired millions across India to break colonial laws and launched a massive Civil Disobedience Movement. The march was covered by international press and drew worldwide attention to India's freedom struggle."
  },
  {
    q: "What was the Quit India Movement?",
    a: "In August 1942, in the middle of the Second World War, Mahatma Gandhi launched the Quit India Movement with the call 'Do or Die.' He demanded that the British immediately leave India. The British response was swift and severe — Gandhi and all major Congress leaders were arrested within hours. Despite this, the movement spread across the country in leaderless rebellions. By the end of 1943, over 90,000 people had been arrested and around 1,000 killed in police firing. Though the movement was eventually suppressed, it sent a clear signal that Indians were no longer willing to cooperate with British rule under any circumstances. The movement played a crucial role in convincing the British that holding India indefinitely was no longer possible, accelerating the negotiations for independence that concluded in 1947."
  },
  {
    q: "How did India's independence come linked with partition?",
    a: "In 1940, the Muslim League, led by Mohammad Ali Jinnah, passed the Lahore Resolution demanding separate independent states for Muslims in the north-western and eastern areas of India. The League believed that in a democratic India, the Muslim minority would always be politically marginalised. The Congress's refusal to form a joint government with the League in United Provinces in 1937 had also deepened the rift. After World War II, the British opened three-way negotiations between themselves, the Congress, and the League for Indian independence. When these talks failed — partly because the League's demand for Pakistan was accelerating — communal violence erupted. The League declared 16 August 1946 as 'Direct Action Day,' which triggered massive communal riots. On 3 June 1947, the Partition Plan was announced. Pakistan came into existence on 14 August and India became independent on 15 August 1947 — but independence came soaked in the violence and tragedy of Partition, in which over a million people died and millions more were displaced."
  },
  {
    q: "Who were Lal-Bal-Pal and what was their contribution?",
    a: "Lal-Bal-Pal was the popular nickname for three radical nationalist leaders: Lala Lajpat Rai (Lal) from Punjab, Bal Gangadhar Tilak (Bal) from Maharashtra, and Bipin Chandra Pal (Pal) from Bengal. They represented the Radical or Extremist wing of the Indian National Congress in the early 20th century and were the most vocal critics of British colonial policies. Unlike the Moderates who sought reform through petitions, Lal-Bal-Pal demanded Swaraj — complete self-rule — and were willing to use mass agitation, boycotts, and civil disobedience. Tilak's famous declaration, 'Freedom is my birthright and I shall have it,' became the rallying cry of the independence movement. Their aggressive nationalism inspired a generation of younger Indians to take a more confrontational stance against British rule and laid the groundwork for the mass movements that followed under Gandhi."
  },
  {
    q: "What was the Khilafat Movement and why was it important for Hindu-Muslim unity?",
    a: "The Khilafat Movement arose in 1920 when Muslims across India protested the harsh treatment of the Turkish Sultan (the Khalifa — the spiritual head of Sunni Muslims worldwide) by the British after World War I. The British had imposed a humiliating treaty on Turkey and stripped the Sultan of his political powers. Mohammad Ali and Shaukat Ali launched the Khilafat agitation and allied with Gandhi and the Indian National Congress to launch a combined Non-Cooperation Movement against the British. This alliance was historically significant because it represented one of the most successful examples of Hindu-Muslim political unity in the freedom struggle. In Bengal, the Khilafat-Non-Cooperation alliance gave enormous strength to the national movement. However, the unity proved fragile — the collapse of the movement in 1922 and subsequent communal tensions gradually eroded this unity, with tragic consequences in the run-up to independence."
  }
];

export default function Chapter10() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="mnm-root">

        {/* ── HERO ── */}
        <div className="mnm-hero">
          <div className="mnm-hero-bg-num">10</div>
          <div className="mnm-ring" style={{width:600,height:600,top:-200,left:-200}} />
          <div className="mnm-ring" style={{width:320,height:320,top:60,right:100}} />
          <div className="mnm-ring" style={{width:160,height:160,bottom:140,right:300}} />

          <div className="mnm-hero-inner">
            <div className="mnm-overline">Class VIII · History · Chapter 10</div>
            <h1 className="mnm-hero-title">
              The Making of the<br />
              <em>National</em><br />
              <span className="saf-em">Movement</span>
            </h1>
            <div className="mnm-hero-bar">
              <div className="mnm-hero-bar-item">
                <div className="mnm-bar-label">Chapter</div>
                <div className="mnm-bar-value">10</div>
              </div>
              <div className="mnm-hero-bar-item">
                <div className="mnm-bar-label">Subject</div>
                <div className="mnm-bar-value">History</div>
              </div>
              <div className="mnm-hero-bar-item">
                <div className="mnm-bar-label">Focus</div>
                <div className="mnm-bar-value">1870s – 1947</div>
              </div>
              <div className="mnm-hero-bar-item">
                <div className="mnm-bar-label">Board</div>
                <div className="mnm-bar-value">CBSE / NCERT</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="mnm-body">

          {/* LEAD */}
          <div className="mnm-lead">
            <p>
              From the first political associations of the 1870s to <strong>Independence and Partition in 1947</strong>, India's national movement was one of the most remarkable struggles in human history — spanning moderate petitions, radical agitations, mass non-cooperation, and finally freedom.
            </p>
            <p>
              This chapter traces the rise of the <strong>Indian National Congress</strong>, the arrival of Mahatma Gandhi, the great mass movements — Non-Cooperation, Civil Disobedience, Quit India — and the painful path to independence that was inseparable from the tragedy of partition.
            </p>
          </div>

          {/* ── 1. Emergence of Nationalism ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">1</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">1870s – 1885</div>
              <h2 className="mnm-sec-title">The Emergence of <span>Nationalism</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            The idea of India as a nation — of all its people, regardless of class, caste, creed, language or gender — began taking shape in the 1870s. As Indians became aware that British rule served British interests, political associations emerged to voice their demands.
          </p>

          <div className="mnm-laws-grid">
            <div className="mnm-law-card">
              <div className="mnm-law-year">1878</div>
              <div className="mnm-law-name">Arms Act</div>
              <div className="mnm-law-desc">Disallowed Indians from possessing arms. Did not apply to the British. Seen as a measure to disarm and suppress Indian resistance.</div>
            </div>
            <div className="mnm-law-card saf">
              <div className="mnm-law-year">1878</div>
              <div className="mnm-law-name">Vernacular Press Act</div>
              <div className="mnm-law-desc">Government could confiscate printing presses of newspapers that published anything deemed 'objectionable.' A direct attack on press freedom.</div>
            </div>
            <div className="mnm-law-card green">
              <div className="mnm-law-year">1883</div>
              <div className="mnm-law-name">Ilbert Bill</div>
              <div className="mnm-law-desc">Sought equality between British and Indian judges. Ferocious White opposition forced its withdrawal — exposing British racial double standards.</div>
            </div>
          </div>

          <p className="mnm-body-text">
            Political associations like the <strong>Poona Sarvajanik Sabha</strong> emerged, functioning across regions but claiming to speak for all of India. They worked with the idea that <strong>the people should be sovereign</strong> — a modern, nationalist consciousness.
          </p>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── 2. Indian National Congress Founded ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">2</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">A Nation in the Making</div>
              <h2 className="mnm-sec-title">The Indian <span className="saf">National Congress</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            The most important political development of the 19th century was the founding of the Indian National Congress — an organisation that would eventually lead India to independence.
          </p>

          <div className="mnm-founding">
            <div className="mnm-founding-year">1885</div>
            <div>
              <div className="mnm-founding-label">Founded</div>
              <div className="mnm-founding-name">Indian National Congress</div>
              <div className="mnm-founding-founders">
                {["A.O. Hume (Founder)","Dadabhai Naoroji","W.C. Bannerji","Surendranath Bannerji","Romesh Chandra Dutt","S. Subramania Iyer","Pherozeshah Mehta","Badruddin Tyabji"].map(f => (
                  <span className="mnm-founder-pill" key={f}>{f}</span>
                ))}
              </div>
              <div className="mnm-founding-note">Founded by British civil servant Allan Octavian Hume with 72 delegates from across India. It became the central vehicle of India's freedom struggle — growing from a moderate debating society into a mass movement under Gandhi.</div>
            </div>
          </div>

          <p className="mnm-body-text">
            The early Congress raised economic demands: British rule had caused <strong>poverty and famines</strong>, rising land revenue had impoverished peasants and zamindars, and food shortages were caused by grain exports to Europe. It demanded a greater voice for Indians in government, separation of the judiciary from the executive, repeal of the Arms Act, and freedom of speech.
          </p>

          {/* Moderates vs Radicals */}
          <div className="mnm-contrast">
            <div className="mnm-contrast-col">
              <div className="mnm-contrast-hd">The Moderates</div>
              <div className="mnm-contrast-tag">Constitutional Approach</div>
              <ul>
                <li>Believed in petitioning and pleading with the British government to bring about reforms</li>
                <li><strong>Method:</strong> Reasoned argument, petitions, press campaigns, legal pressure</li>
                <li><strong>Goal:</strong> Gradual reform within the constitutional framework, greater Indian representation</li>
                <li><strong>Leaders:</strong> Dadabhai Naoroji, Gopal Krishna Gokhale, Pherozeshah Mehta</li>
                <li>Trusted British sense of justice and fair play — believed education and argument would win rights</li>
              </ul>
            </div>
            <div className="mnm-contrast-col dark">
              <div className="mnm-contrast-hd">The Radicals</div>
              <div className="mnm-contrast-tag">Confrontational Approach</div>
              <ul>
                <li>Wanted to oppose the British strongly — in favour of strikes, boycotts, and mass agitation</li>
                <li><strong>Method:</strong> Mass mobilisation, boycott of British goods, civil disobedience</li>
                <li><strong>Goal:</strong> Immediate Swaraj (self-rule) — not reform of British rule but its end</li>
                <li><strong>Leaders:</strong> Bal Gangadhar Tilak, Bipin Chandra Pal, Lala Lajpat Rai (Lal-Bal-Pal)</li>
                <li>Tilak declared: <strong>"Freedom is my birthright and I shall have it"</strong></li>
              </ul>
            </div>
          </div>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── 3. Partition of Bengal & Swadeshi ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">3</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">1905 — The Turning Point</div>
              <h2 className="mnm-sec-title">Partition of Bengal &amp; the <span className="green">Swadeshi Movement</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            In 1905, Viceroy Curzon announced the partition of Bengal — the biggest province of British India — ostensibly for administrative reasons, but widely understood as a deliberate divide-and-rule strategy to split Hindu and Muslim Bengalis.
          </p>

          <div className="mnm-quote">
            <div className="mnm-quote-mark">"</div>
            <div className="mnm-quote-text">Freedom is my birthright and I shall have it.</div>
            <div className="mnm-quote-attr">— Bal Gangadhar Tilak, rallying the nation against colonial rule</div>
          </div>

          <ul className="mnm-list">
            <li><strong>Outrage across India:</strong> Both Moderates and Radicals protested the partition — one of the rare moments of unified Congress opposition</li>
            <li><strong>Raksha Bandhan as protest:</strong> People tied rakhi on each other's wrists to symbolise Hindu-Muslim unity, turning a religious tradition into a political act</li>
            <li><strong>Birth of Swadeshi Movement:</strong> People boycotted British goods and promoted Indian-made products — one of the first mass economic boycotts in history</li>
            <li><strong>Partition annulled 1911:</strong> Sustained pressure finally forced the British to annul the partition, showing that organised mass resistance could win concessions</li>
          </ul>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── 4. Advent of Gandhi ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">4</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">The People's Leader</div>
              <h2 className="mnm-sec-title">The Advent of <span className="saf">Mahatma Gandhi</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            After 1919, the struggle against British rule gradually became a mass movement, involving peasants, tribals, students, women, and factory workers. World War I had worsened India's economic situation — military expenditure soared, prices rose sharply, and Indian villages were forced to send soldiers for a war that was not theirs.
          </p>

          <div className="mnm-gandhi-block">
            <div className="mnm-gandhi-badge">MKG</div>
            <div>
              <div className="mnm-gandhi-name">Mohandas Karamchand Gandhi</div>
              <div className="mnm-gandhi-title">Mahatma · Father of the Nation · Born 2 Oct 1869, Porbandar</div>
              <ul className="mnm-gandhi-pts">
                <li><strong>England:</strong> Studied law at the Inner Temple, London</li>
                <li><strong>South Africa (20 years):</strong> Led non-violent campaigns against racial discrimination; earned national and international respect</li>
                <li><strong>Return to India:</strong> Travelled across India first, understanding the lives of ordinary people before entering politics</li>
                <li><strong>Champaran (1917):</strong> Led indigo farmers' movement — first Satyagraha in India</li>
                <li><strong>Kheda (1918):</strong> Led peasants' campaign against excessive land revenue</li>
                <li><strong>Ahmedabad (1918):</strong> Led mill workers' strike for better wages</li>
                <li><strong>Satyagraha:</strong> His method of struggle — truth-force and non-violence — transformed Indian politics from elite petitions to mass resistance</li>
              </ul>
            </div>
          </div>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── 5. Rowlatt Act & Jallianwala Bagh ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">5</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">April 1919</div>
              <h2 className="mnm-sec-title">Rowlatt Act &amp; <span className="crimson">Jallianwala Bagh</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            In 1919 the British passed the Rowlatt Act, allowing arrest without warrant and trial without jury. Gandhi and Jinnah both condemned it as tyrannical. A nationwide hartal was called — and the British responded with unprecedented brutality.
          </p>

          <div className="mnm-massacre">
            <div className="mnm-massacre-tag">13 April 1919 · Amritsar · Punjab</div>
            <div className="mnm-massacre-title">The Jallianwala Bagh Massacre</div>
            <div className="mnm-massacre-date">Baisakhi Day — April 13, 1919</div>
            <ul className="mnm-massacre-pts">
              <li>Thousands of unarmed civilians — including families celebrating Baisakhi — had gathered at Jallianwala Bagh, a walled garden in Amritsar</li>
              <li><strong>General Dyer</strong> marched British troops in and ordered all exits to be locked, trapping the crowd inside with no means of escape</li>
              <li>He ordered his troops to open continuous fire on the crowd without warning and without any order to disperse</li>
              <li><strong>Thousands were killed or wounded</strong> — official British figures massively undercounted; Indian estimates placed deaths in the thousands</li>
              <li>The entire nation was shocked. All national leaders protested. Rabindranath Tagore returned his knighthood in protest</li>
              <li>The massacre destroyed whatever faith remained in British justice and hardened the determination for complete independence</li>
            </ul>
          </div>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── 6. Mass Movements Timeline ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">6</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">1920 – 1942</div>
              <h2 className="mnm-sec-title">The Great <span className="green">Mass Movements</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            Over two decades, Gandhi led three great mass movements that each brought India closer to independence — and each taught lessons about the power and limits of non-violent resistance.
          </p>

          <div className="mnm-mv-timeline">
            <div className="mnm-mv-item">
              <div className="mnm-mv-dot">NCM</div>
              <div className="mnm-mv-content">
                <div className="mnm-mv-year">1920–1922 · Non-Cooperation Movement</div>
                <div className="mnm-mv-title">Khilafat &amp; Non-Cooperation Movement</div>
                <div className="mnm-mv-desc">Combining Muslim Khilafat grievances with the demand for Swaraj, Gandhi launched the first true mass movement. Students left schools, lawyers gave up practices, British titles were surrendered, and bonfires of foreign cloth were lit. Called off after the Chauri Chaura violence (February 1922).</div>
              </div>
            </div>
            <div className="mnm-mv-item">
              <div className="mnm-mv-dot saf">PS</div>
              <div className="mnm-mv-content saf">
                <div className="mnm-mv-year">1929 · Lahore Congress</div>
                <div className="mnm-mv-title">Purna Swaraj — Complete Independence</div>
                <div className="mnm-mv-desc">Under Jawaharlal Nehru's presidentship, Congress resolved to fight for Purna Swaraj (complete independence). 26 January 1930 was observed as Independence Day all over India — the origin of our Republic Day.</div>
              </div>
            </div>
            <div className="mnm-mv-item">
              <div className="mnm-mv-dot green">DM</div>
              <div className="mnm-mv-content green">
                <div className="mnm-mv-year">March–April 1930 · Dandi March</div>
                <div className="mnm-mv-title">Civil Disobedience &amp; the Salt March</div>
                <div className="mnm-mv-desc">Gandhi marched 240 miles from Sabarmati Ashram to coastal Dandi to break the Salt Law. The march inspired millions to defy colonial laws. The Government of India Act 1935 subsequently granted provincial autonomy — a partial concession.</div>
              </div>
            </div>
            <div className="mnm-mv-item">
              <div className="mnm-mv-dot crim">QI</div>
              <div className="mnm-mv-content crim">
                <div className="mnm-mv-year">August 1942 · Quit India</div>
                <div className="mnm-mv-title">Quit India Movement — Do or Die</div>
                <div className="mnm-mv-desc">Gandhi's final mass movement, launched mid-World War II. All leaders arrested immediately. By end of 1943, over 90,000 people had been arrested and around 1,000 killed. The movement convinced the British that India could no longer be held.</div>
              </div>
            </div>
          </div>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── 7. People's Initiatives ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">7</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">Grassroots Resistance</div>
              <h2 className="mnm-sec-title">People's <span className="gold">Initiatives</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            The national movement was not just Gandhi and the Congress leadership. Across every region, ordinary Indians organised their own forms of resistance — often targeting the specific form of British exploitation that affected them most.
          </p>

          <div className="mnm-init-grid">
            <div className="mnm-init-card">
              <div className="mnm-init-region">Kheda, Gujarat</div>
              <div className="mnm-init-head">Patidar Peasants' Campaign</div>
              <div className="mnm-init-desc">Patidar peasants organised non-violent campaigns against the high revenue demands of the British — one of Gandhi's early successful local movements.</div>
            </div>
            <div className="mnm-init-card saf">
              <div className="mnm-init-region">Coastal Andhra &amp; Tamil Nadu</div>
              <div className="mnm-init-head">Liquor Shop Picketing</div>
              <div className="mnm-init-desc">Women and men picketed liquor shops, targeting both colonial revenue and the social harm caused by drinking — combining nationalism with social reform.</div>
            </div>
            <div className="mnm-init-card green">
              <div className="mnm-init-region">Bengal</div>
              <div className="mnm-init-head">Khilafat-Non-Cooperation Alliance</div>
              <div className="mnm-init-desc">The alliance between Khilafat and Non-Cooperation gave enormous Hindu-Muslim communal unity and strength to the national movement in Bengal.</div>
            </div>
            <div className="mnm-init-card gold">
              <div className="mnm-init-region">Punjab</div>
              <div className="mnm-init-head">Akali Agitation</div>
              <div className="mnm-init-desc">The Akali agitation of the Sikhs sought to remove corrupt mahants — supported by the British — from control of their gurudwaras, merging religious and nationalist grievances.</div>
            </div>
          </div>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── 8. Towards Partition ── */}
          <div className="mnm-sec-head">
            <div className="mnm-sec-num">8</div>
            <div className="mnm-sec-title-wrap">
              <div className="mnm-sec-kicker">1940 – 1947</div>
              <h2 className="mnm-sec-title">Towards Independence <span className="crimson">&amp; Partition</span></h2>
            </div>
          </div>

          <p className="mnm-body-text">
            The final years of the freedom struggle were shadowed by the question of what kind of independent India would emerge — and whether it would remain united. The answer, when it came, brought both liberation and heartbreak.
          </p>

          <div className="mnm-partition">
            <div className="mnm-partition-tag">The Road to 15 August 1947</div>
            <div className="mnm-partition-grid">
              <div>
                <div className="mnm-partition-col-hd">Congress &amp; the League</div>
                <ul className="mnm-partition-pts">
                  <li>In <strong>1940</strong>, the Muslim League passed the Lahore Resolution demanding independent states for Muslims in the north-western and eastern areas</li>
                  <li>The 1937 provincial elections convinced the League that Muslims would always be a minority in a democratic India</li>
                  <li>Congress's refusal to form a joint government with the League in United Provinces in 1937 deepened the rift</li>
                  <li>In <strong>1945</strong>, three-way independence talks failed as the League's demand for Pakistan intensified</li>
                  <li>In <strong>March 1946</strong>, a British Cabinet Mission came to Delhi; the League declared 16 August 1946 as 'Direct Action Day'</li>
                </ul>
              </div>
              <div>
                <div className="mnm-partition-col-hd">Independence &amp; Its Cost</div>
                <ul className="mnm-partition-pts">
                  <li>On <strong>3 June 1947</strong>, the Partition Plan was announced — India would be divided into two nations</li>
                  <li>Pakistan came into existence on <strong>14 August 1947</strong>; India became independent on <strong>15 August 1947</strong></li>
                  <li>The joy of independence was inseparable from the pain and violence of Partition</li>
                  <li>Over <strong>one million people were killed</strong> in communal violence; over 10 million were displaced in the largest human migration in history</li>
                  <li>Jawaharlal Nehru made his famous <strong>'Tryst with Destiny'</strong> speech as India awoke to freedom at midnight</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mnm-divider"><div className="mnm-divider-mark" /></div>

          {/* ── FAQ ── */}
          <div className="mnm-faq-header">
            <span className="mnm-faq-kicker">Exam Preparation</span>
          </div>
          <h2 className="mnm-faq-title">Frequently Asked Questions</h2>

          {faqs.map((faq, i) => (
            <div className={`mnm-faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button className="mnm-faq-q" onClick={() => toggle(i)}>
                <span className="mnm-faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="mnm-faq-icon">{openIndex === i ? "▴" : "▾"}</span>
              </button>
              <div className={`mnm-faq-ans${openIndex === i ? " visible" : ""}`}>{faq.a}</div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
