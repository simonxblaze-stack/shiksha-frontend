import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --tic-saffron:     #b45309;
    --tic-saffron2:    #92400e;
    --tic-saffron-lt:  #fef3c7;
    --tic-blue:        #1e3a8a;
    --tic-blue2:       #1d4ed8;
    --tic-blue-lt:     #dbeafe;
    --tic-green:       #166534;
    --tic-green2:      #15803d;
    --tic-green-lt:    #dcfce7;
    --tic-red:         #b91c1c;
    --tic-red-lt:      #fee2e2;
    --tic-ink:         #0e1a2e;
    --tic-ink2:        #1e2d44;
    --tic-muted:       #5a6a82;
    --tic-rule:        #cdd8e8;
    --tic-off:         #f5f7fc;
    --tic-light:       #e8eef7;
    --tic-white:       #ffffff;
    --tic-black:       #060c18;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .tic-root {
    font-family: 'Inter', sans-serif;
    background: var(--tic-off);
    color: var(--tic-ink);
    min-height: 100vh;
  }

  /* ══════════════════════════════════════
     HERO — full-bleed editorial magazine
  ══════════════════════════════════════ */
  .tic-hero {
    background: var(--tic-black);
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .tic-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      -52deg,
      transparent, transparent 44px,
      rgba(255,255,255,0.013) 44px,
      rgba(255,255,255,0.013) 45px
    );
    pointer-events: none;
  }

  .tic-hero-glow {
    position: absolute; top: -80px; right: -80px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(180,83,9,0.18) 0%, transparent 68%);
    pointer-events: none;
  }

  /* Nav */
  .tic-hero-nav {
    display: flex; align-items: center; justify-content: flex-end;
    padding: 28px 52px 0;
    position: relative; z-index: 2;
  }
  .tic-hero-nav-tag {
    font-family: 'Poppins', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #fbbf24; border: 1px solid #fbbf24;
    padding: 4px 12px;
  }

  /* Center */
  .tic-hero-center {
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 52px;
    position: relative; z-index: 2;
    min-width: 0;
  }
  .tic-hero-eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: #fbbf24; margin-bottom: 28px;
  }
  .tic-hero-h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 7.5vw, 108px);
    font-weight: 900; line-height: 0.88;
    letter-spacing: -0.04em; color: #fff;
    margin-bottom: 40px;
  }
  .tic-hero-h1 .sa { color: #fbbf24; }
  .tic-hero-h1 .gr { color: #86efac; }
  .tic-hero-h1 .bl { color: #93c5fd; }

  .tic-hero-deck {
    max-width: 580px;
    font-family: 'Inter', sans-serif;
    font-size: 18px; font-weight: 400;
    line-height: 1.72; color: rgba(255,255,255,0.50);
    border-left: 3px solid #fbbf24;
    padding-left: 20px; margin-bottom: 52px;
  }
  .tic-hero-deck strong { color: rgba(255,255,255,0.80); font-weight: 500; }

  /* Stat strip */
  .tic-hero-stats {
    display: flex; gap: 0;
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .tic-hero-stat {
    flex: 1; padding: 22px 28px;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .tic-hero-stat:last-child { border-right: none; }
  .tic-hero-stat-val {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px; font-weight: 900; color: #fff;
    letter-spacing: -0.03em; line-height: 1; margin-bottom: 6px;
  }
  .tic-hero-stat-val span { color: #fbbf24; }
  .tic-hero-stat-label {
    font-family: 'Poppins', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.28);
  }

  /* Bottom bar */
  .tic-hero-bottom {
    padding: 22px 52px;
    display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
    border-top: 1px solid rgba(255,255,255,0.06);
    position: relative; z-index: 2;
  }
  .tic-hero-bottom-item {
    font-family: 'Poppins', sans-serif;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    display: flex; align-items: center; gap: 8px;
  }
  .tic-hero-bottom-item::before {
    content: ''; width: 4px; height: 4px;
    border-radius: 50%; background: #fbbf24; flex-shrink: 0;
  }

  /* ══════════════════════════════════════
     BODY
  ══════════════════════════════════════ */
  .tic-body { max-width: 920px; margin: 0 auto; padding: 80px 32px 100px; }

  /* ── RUNNING SECTION LABEL ── */
  .tic-run-label {
    display: flex; align-items: center; gap: 0;
    margin-bottom: 44px;
    border-top: 3px solid var(--tic-ink);
    padding-top: 14px;
  }
  .tic-run-num {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 900; letter-spacing: 0.18em;
    color: var(--tic-white); background: var(--tic-ink);
    padding: 4px 10px; margin-right: 16px;
  }
  .tic-run-title {
    font-family: 'Poppins', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--tic-muted); flex: 1;
  }
  .tic-run-topic {
    font-family: 'Poppins', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--tic-saffron);
  }

  /* ── SECTION H2 ── */
  .tic-sec-h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(28px, 4.5vw, 48px);
    font-weight: 900; line-height: 1.0;
    letter-spacing: -0.03em; color: var(--tic-ink);
    margin-bottom: 24px;
  }
  .tic-sec-h2 em  { font-style: normal; color: var(--tic-saffron); }
  .tic-sec-h2 .b  { color: var(--tic-blue2); }
  .tic-sec-h2 .g  { color: var(--tic-green2); }
  .tic-sec-h2 .r  { color: var(--tic-red); }

  /* ── BODY PROSE ── */
  .tic-prose {
    font-family: 'Inter', sans-serif;
    font-size: 17px; color: var(--tic-ink2);
    line-height: 1.82; margin-bottom: 28px;
  }
  .tic-prose strong {
    font-family: 'Poppins', sans-serif; font-weight: 700;
    color: var(--tic-ink);
  }

  /* ── SECTION BREAK ── */
  .tic-break {
    display: flex; align-items: center; gap: 0;
    margin: 60px 0;
  }
  .tic-break-line { flex: 1; height: 1px; background: var(--tic-rule); }
  .tic-break-pill {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--tic-muted); background: var(--tic-light);
    padding: 5px 16px; margin: 0 16px;
  }

  /* ── EDITORIAL PULLOUT ── */
  .tic-editorial {
    padding: 48px 0; margin-bottom: 52px;
    border-top: 3px solid var(--tic-ink);
    border-bottom: 1px solid var(--tic-rule);
  }
  .tic-editorial-q {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 900; line-height: 1.22;
    letter-spacing: -0.02em; color: var(--tic-ink);
    margin-bottom: 18px;
  }
  .tic-editorial-q em { font-style: normal; color: var(--tic-saffron); }
  .tic-editorial-attr {
    font-family: 'Inter', sans-serif; font-size: 13px;
    color: var(--tic-muted); letter-spacing: 0.02em;
  }

  /* ── WHY CONSTITUTION NEED ── */
  .tic-need-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: var(--tic-rule); margin-bottom: 52px;
  }
  @media (max-width: 600px) { .tic-need-grid { grid-template-columns: 1fr; } }
  .tic-need-card {
    background: var(--tic-white); padding: 28px 28px;
    position: relative; overflow: hidden;
  }
  .tic-need-card::before {
    content: attr(data-n);
    position: absolute; bottom: -10px; right: -2px;
    font-family: 'Montserrat', sans-serif;
    font-size: 88px; font-weight: 900;
    color: rgba(0,0,0,0.035); line-height: 1;
    pointer-events: none; user-select: none;
  }
  .tic-need-card:nth-child(1) { background: var(--tic-blue); }
  .tic-need-card:nth-child(2) { background: var(--tic-saffron2); }
  .tic-need-icon { font-size: 26px; margin-bottom: 14px; }
  .tic-need-head {
    font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 900;
    margin-bottom: 10px; letter-spacing: -0.01em; line-height: 1.2;
  }
  .tic-need-card:nth-child(1) .tic-need-head,
  .tic-need-card:nth-child(2) .tic-need-head { color: #fff; }
  .tic-need-card:not(:nth-child(1)):not(:nth-child(2)) .tic-need-head { color: var(--tic-ink); }
  .tic-need-body {
    font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.70;
  }
  .tic-need-card:nth-child(1) .tic-need-body,
  .tic-need-card:nth-child(2) .tic-need-body { color: rgba(255,255,255,0.65); }
  .tic-need-card:not(:nth-child(1)):not(:nth-child(2)) .tic-need-body { color: var(--tic-muted); }

  /* ── AMBEDKAR PROFILE CARD ── */
  .tic-ambedkar {
    background: var(--tic-blue);
    padding: 40px 44px; margin-bottom: 52px;
    display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: start;
    position: relative; overflow: hidden;
  }
  .tic-ambedkar::after {
    content: '⚖️';
    position: absolute; right: 28px; top: 16px;
    font-size: 100px; opacity: 0.06; line-height: 1;
  }
  .tic-ambedkar-badge {
    width: 72px; height: 72px; border-radius: 50%;
    background: rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    font-size: 36px; flex-shrink: 0;
  }
  .tic-ambedkar-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: #93c5fd; margin-bottom: 8px;
  }
  .tic-ambedkar-name {
    font-family: 'Montserrat', sans-serif; font-size: clamp(20px,3vw,32px);
    font-weight: 900; color: #fff; letter-spacing: -0.02em; line-height: 1.1;
    margin-bottom: 12px;
  }
  .tic-ambedkar-name span { color: #fbbf24; }
  .tic-ambedkar-desc {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.75;
    color: rgba(255,255,255,0.58); position: relative; z-index: 1;
  }
  .tic-ambedkar-desc strong { color: rgba(255,255,255,0.85); font-family: 'Poppins', sans-serif; font-weight: 600; }
  @media (max-width: 560px) {
    .tic-ambedkar { grid-template-columns: 1fr; padding: 28px 24px; }
  }

  /* ── CONTEXT TIMELINE — dark header + rows ── */
  .tic-timeline-block { margin-bottom: 52px; }
  .tic-tl-header {
    padding: 26px 32px;
    display: flex; align-items: flex-start; justify-content: space-between; gap: 20px;
  }
  .tic-tl-header.saf-bg   { background: var(--tic-saffron2); }
  .tic-tl-header.blue-bg  { background: var(--tic-blue); }
  .tic-tl-header-text { flex: 1; }
  .tic-tl-header-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(255,255,255,0.45); margin-bottom: 6px;
  }
  .tic-tl-header-title {
    font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900;
    color: #fff; letter-spacing: -0.02em; line-height: 1.15;
  }
  .tic-tl-header-sub {
    margin-top: 6px; font-family: 'Inter', sans-serif;
    font-size: 14px; color: rgba(255,255,255,0.48); line-height: 1.5;
  }
  .tic-tl-header-icon { font-size: 44px; line-height: 1; flex-shrink: 0; }
  .tic-tl-body {
    border: 1px solid var(--tic-rule); border-top: none; background: var(--tic-white);
  }
  .tic-tl-row {
    display: grid; grid-template-columns: 100px 1fr;
    border-bottom: 1px solid var(--tic-light);
  }
  .tic-tl-row:last-child { border-bottom: none; }
  .tic-tl-year {
    background: var(--tic-off); padding: 18px 10px;
    font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 900;
    display: flex; align-items: flex-start; justify-content: center;
    line-height: 1.2; text-align: center; padding-top: 20px;
  }
  .tic-tl-header.saf-bg ~ .tic-tl-body .tic-tl-year  { color: var(--tic-saffron); }
  .tic-tl-header.blue-bg ~ .tic-tl-body .tic-tl-year { color: var(--tic-blue2); }
  .tic-tl-content { padding: 18px 24px; }
  .tic-tl-content-head {
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
    color: var(--tic-ink); margin-bottom: 5px;
  }
  .tic-tl-content-body {
    font-family: 'Inter', sans-serif; font-size: 14px;
    color: var(--tic-muted); line-height: 1.65;
  }
  .tic-tl-content-body strong { color: var(--tic-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── KEY FEATURES NUMBERED CARDS ── */
  .tic-features { margin-bottom: 52px; }
  .tic-feat-card {
    border: 1px solid var(--tic-rule); background: var(--tic-white);
    border-top: none; display: grid; grid-template-columns: 72px 1fr;
  }
  .tic-feat-card:first-child { border-top: 1px solid var(--tic-rule); }
  .tic-feat-num-col {
    display: flex; align-items: flex-start; justify-content: center;
    padding: 26px 10px; border-right: 1px solid var(--tic-rule);
  }
  .tic-feat-num {
    font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 900;
    letter-spacing: -0.03em; line-height: 1;
  }
  .tic-feat-card:nth-child(1) .tic-feat-num { color: var(--tic-saffron); }
  .tic-feat-card:nth-child(2) .tic-feat-num { color: var(--tic-blue2); }
  .tic-feat-card:nth-child(3) .tic-feat-num { color: var(--tic-green2); }
  .tic-feat-card:nth-child(4) .tic-feat-num { color: var(--tic-red); }
  .tic-feat-card:nth-child(5) .tic-feat-num { color: var(--tic-saffron); }
  .tic-feat-body-col { padding: 26px 28px; }
  .tic-feat-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    margin-bottom: 8px;
  }
  .tic-feat-card:nth-child(1) .tic-feat-tag { color: var(--tic-saffron); }
  .tic-feat-card:nth-child(2) .tic-feat-tag { color: var(--tic-blue2); }
  .tic-feat-card:nth-child(3) .tic-feat-tag { color: var(--tic-green2); }
  .tic-feat-card:nth-child(4) .tic-feat-tag { color: var(--tic-red); }
  .tic-feat-card:nth-child(5) .tic-feat-tag { color: var(--tic-saffron); }
  .tic-feat-title {
    font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 900;
    letter-spacing: -0.02em; color: var(--tic-ink); margin-bottom: 12px; line-height: 1.15;
  }
  .tic-feat-desc {
    font-family: 'Inter', sans-serif; font-size: 15px;
    color: var(--tic-ink2); line-height: 1.75; margin-bottom: 12px;
  }
  .tic-feat-desc strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--tic-ink); }
  .tic-feat-note {
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600;
    color: var(--tic-muted); font-style: italic; line-height: 1.5;
    border-left: 3px solid var(--tic-rule); padding-left: 12px; margin-top: 14px;
  }

  /* ── SEPARATION OF POWERS — 3-column ── */
  .tic-powers {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: var(--tic-rule); margin-bottom: 52px;
  }
  @media (max-width: 600px) { .tic-powers { grid-template-columns: 1fr; } }
  .tic-power-col { background: var(--tic-white); padding: 28px 24px; }
  .tic-power-col:nth-child(1) { background: var(--tic-blue); }
  .tic-power-col:nth-child(2) { background: var(--tic-saffron2); }
  .tic-power-col:nth-child(3) { background: var(--tic-green2); }
  .tic-power-icon { font-size: 32px; margin-bottom: 12px; }
  .tic-power-head {
    font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 900;
    color: #fff; margin-bottom: 8px; letter-spacing: -0.01em;
  }
  .tic-power-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: rgba(255,255,255,0.45); margin-bottom: 14px;
  }
  .tic-power-body {
    font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.72;
    color: rgba(255,255,255,0.60);
  }
  .tic-power-body strong { color: rgba(255,255,255,0.90); font-family: 'Poppins', sans-serif; font-weight: 600; }
  .tic-power-check {
    margin-top: 16px; padding-top: 14px;
    border-top: 1px solid rgba(255,255,255,0.15);
    font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700;
    color: rgba(255,255,255,0.55); letter-spacing: 0.04em;
  }

  /* ── 6 FUNDAMENTAL RIGHTS TABLE ── */
  .tic-rights-table {
    background: var(--tic-white);
    border: 1px solid var(--tic-rule);
    margin-bottom: 20px; overflow: hidden;
  }
  .tic-rights-head {
    background: var(--tic-blue); color: #fff;
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
    padding: 14px 24px; letter-spacing: 0.04em;
    display: flex; align-items: center; gap: 10px;
  }
  .tic-right-row {
    display: grid; grid-template-columns: 52px 1fr;
    border-bottom: 1px solid var(--tic-light);
  }
  .tic-right-row:last-child { border-bottom: none; }
  .tic-right-num {
    padding: 18px 12px; background: var(--tic-off);
    border-right: 1px solid var(--tic-rule);
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: var(--tic-blue2);
    display: flex; align-items: center; justify-content: center;
  }
  .tic-right-content { padding: 16px 22px; }
  .tic-right-name {
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700;
    color: var(--tic-ink); margin-bottom: 4px;
  }
  .tic-right-desc {
    font-family: 'Inter', sans-serif; font-size: 13px;
    color: var(--tic-muted); line-height: 1.6;
  }
  .tic-right-desc strong { color: var(--tic-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── DPSP CALLOUT ── */
  .tic-dpsp {
    background: var(--tic-off);
    border: 1px solid var(--tic-rule);
    border-left: 5px solid var(--tic-green2);
    padding: 26px 28px; margin-bottom: 52px;
  }
  .tic-dpsp-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--tic-green2); margin-bottom: 8px;
  }
  .tic-dpsp-title {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: var(--tic-ink); margin-bottom: 10px; letter-spacing: -0.01em;
  }
  .tic-dpsp-body {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.75;
    color: var(--tic-ink2);
  }
  .tic-dpsp-body strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--tic-ink); }

  /* ── SECULARISM CALLOUT ── */
  .tic-secular {
    background: var(--tic-white);
    border: 1px solid var(--tic-rule);
    padding: 0; margin-bottom: 52px; overflow: hidden;
    display: grid; grid-template-columns: 8px 1fr;
  }
  .tic-secular-slab {
    background: linear-gradient(to bottom, var(--tic-saffron), #fff 50%, var(--tic-green2));
  }
  .tic-secular-body { padding: 28px 30px; }
  .tic-secular-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--tic-saffron); margin-bottom: 8px;
  }
  .tic-secular-title {
    font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 900;
    color: var(--tic-ink); margin-bottom: 10px; letter-spacing: -0.01em;
  }
  .tic-secular-desc {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.75; color: var(--tic-ink2);
  }
  .tic-secular-desc strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--tic-ink); }

  /* ── NEPAL CONTEXT BOX ── */
  .tic-nepal-box {
    background: var(--tic-white);
    border: 1px solid var(--tic-rule); margin-bottom: 52px;
  }
  .tic-nepal-head {
    background: var(--tic-ink); padding: 20px 26px;
    display: flex; align-items: center; gap: 14px;
  }
  .tic-nepal-head-icon { font-size: 28px; }
  .tic-nepal-head-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(255,255,255,0.4); margin-bottom: 3px;
  }
  .tic-nepal-head-title {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: #fff; letter-spacing: -0.015em;
  }
  .tic-nepal-body { padding: 24px 26px; }
  .tic-nepal-row {
    display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px;
  }
  .tic-nepal-row:last-child { margin: 0; }
  .tic-nepal-key {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    padding: 3px 10px; background: var(--tic-off);
    border: 1px solid var(--tic-rule); color: var(--tic-muted);
    white-space: nowrap; flex-shrink: 0;
  }
  .tic-nepal-val {
    font-family: 'Inter', sans-serif; font-size: 14px;
    color: var(--tic-ink2); line-height: 1.65;
  }
  .tic-nepal-val strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--tic-ink); }

  /* ── CONSTITUTION FACTS ROW ── */
  .tic-facts-strip {
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 1px; background: var(--tic-rule); margin-bottom: 52px;
  }
  @media (max-width: 580px) { .tic-facts-strip { grid-template-columns: repeat(2,1fr); } }
  .tic-fact-box {
    background: var(--tic-white); padding: 24px 20px; text-align: center;
  }
  .tic-fact-box:nth-child(1) { background: var(--tic-blue); }
  .tic-fact-num {
    font-family: 'Montserrat', sans-serif; font-size: 30px; font-weight: 900;
    letter-spacing: -0.03em; margin-bottom: 6px; line-height: 1;
  }
  .tic-fact-box:nth-child(1) .tic-fact-num { color: #fbbf24; }
  .tic-fact-box:not(:nth-child(1)) .tic-fact-num { color: var(--tic-blue2); }
  .tic-fact-label {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .tic-fact-box:nth-child(1) .tic-fact-label { color: rgba(255,255,255,0.5); }
  .tic-fact-box:not(:nth-child(1)) .tic-fact-label { color: var(--tic-muted); }

  /* ── COMPARE TWO-COL ── */
  .tic-compare {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; border: 1px solid var(--tic-rule);
    background: var(--tic-white); margin-bottom: 52px;
  }
  @media (max-width: 600px) { .tic-compare { grid-template-columns: 1fr; } }
  .tic-cmp-col { padding: 30px 28px; }
  .tic-cmp-col:last-child { border-left: 1px solid var(--tic-rule); }
  @media (max-width: 600px) { .tic-cmp-col:last-child { border-left: none; border-top: 1px solid var(--tic-rule); } }
  .tic-cmp-badge {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 4px 12px; margin-bottom: 14px; display: inline-block;
  }
  .tic-cmp-col:first-child .tic-cmp-badge { background: var(--tic-blue-lt); color: var(--tic-blue); }
  .tic-cmp-col:last-child  .tic-cmp-badge { background: var(--tic-saffron-lt); color: var(--tic-saffron); }
  .tic-cmp-head {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: var(--tic-ink); margin-bottom: 18px; letter-spacing: -0.01em; line-height: 1.2;
  }
  .tic-cmp-col ul { list-style: none; padding: 0; margin: 0; }
  .tic-cmp-col ul li {
    font-family: 'Inter', sans-serif; font-size: 14px;
    color: var(--tic-ink2); line-height: 1.65;
    padding: 9px 0 9px 20px; position: relative;
    border-bottom: 1px solid var(--tic-light);
  }
  .tic-cmp-col ul li:last-child { border-bottom: none; }
  .tic-cmp-col ul li::before {
    content: ''; position: absolute; left: 0; top: 18px;
    width: 7px; height: 7px; border-radius: 50%;
  }
  .tic-cmp-col:first-child ul li::before { background: var(--tic-blue2); }
  .tic-cmp-col:last-child  ul li::before { background: var(--tic-saffron); }
  .tic-cmp-col ul li strong { font-family: 'Poppins', sans-serif; font-weight: 700; }
  .tic-cmp-col:first-child ul li strong { color: var(--tic-blue2); }
  .tic-cmp-col:last-child  ul li strong { color: var(--tic-saffron); }

  /* ── FAQ ── */
  .tic-faq-intro {
    display: flex; align-items: center; gap: 16px; margin-bottom: 12px;
  }
  .tic-faq-intro-line { flex: 1; height: 1px; background: var(--tic-rule); }
  .tic-faq-intro-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--tic-saffron); background: var(--tic-saffron-lt);
    padding: 5px 14px;
  }
  .tic-faq-h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 34px; font-weight: 900;
    color: var(--tic-ink); letter-spacing: -0.025em; margin-bottom: 30px;
  }
  .tic-faq-item { border-bottom: 1px solid var(--tic-rule); }
  .tic-faq-item:first-of-type { border-top: 1px solid var(--tic-rule); }
  .tic-faq-q {
    width: 100%; display: flex; justify-content: space-between;
    align-items: flex-start; gap: 20px;
    padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left;
  }
  .tic-faq-q-text {
    font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600;
    color: var(--tic-ink2); line-height: 1.45; flex: 1;
  }
  .tic-faq-item.open .tic-faq-q-text { color: var(--tic-saffron); }
  .tic-faq-icon { font-size: 18px; color: var(--tic-saffron); flex-shrink: 0; margin-top: 2px; }
  .tic-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.32s ease; }
  .tic-faq-ans.open { max-height: 1200px; }
  .tic-faq-ans-inner {
    padding-bottom: 22px;
    font-family: 'Inter', sans-serif; font-size: 15px;
    color: var(--tic-muted); line-height: 1.78;
  }
  .tic-faq-ans-inner strong { color: var(--tic-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }
  .tic-faq-ans-inner ul { padding-left: 20px; margin: 10px 0; }
  .tic-faq-ans-inner ul li { margin-bottom: 8px; line-height: 1.65; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .tic-hero-nav    { padding: 22px 28px 0; }
    .tic-hero-center { padding: 36px 28px 0; }
    .tic-hero-bottom { padding: 18px 28px; gap: 18px; }
    .tic-hero-stat   { padding: 18px 20px; }
  }
  @media (max-width: 680px) {
    .tic-hero { min-height: auto; }
    .tic-hero-nav { padding: 16px 18px 0; justify-content: flex-start; }
    .tic-hero-center { padding: 28px 18px 0; }
    .tic-hero-h1 { font-size: clamp(36px,11vw,62px); letter-spacing:-0.03em; margin-bottom:20px; }
    .tic-hero-deck { font-size:14px; line-height:1.62; margin-bottom:28px; max-width:100%; }
    .tic-hero-stats { flex-wrap: wrap; }
    .tic-hero-stat { flex: 1 1 calc(50% - 1px); padding: 14px 14px; }
    .tic-hero-stat:nth-child(2n) { border-right: none; }
    .tic-hero-stat:nth-child(n+3) { border-top: 1px solid rgba(255,255,255,0.06); }
    .tic-hero-stat-val { font-size: 22px; }
    .tic-hero-bottom { padding: 12px 18px; gap: 8px; }
    .tic-body { padding: 52px 18px 72px; }
    .tic-feat-card { grid-template-columns: 52px 1fr; }
    .tic-tl-row { grid-template-columns: 72px 1fr; }
    .tic-tl-header { padding: 20px 20px; }
    .tic-tl-header-icon { font-size: 32px; }
  }
  @media (max-width: 400px) {
    .tic-hero-h1 { font-size: clamp(30px, 10vw, 48px); }
    .tic-hero-stat { flex: 1 1 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
  }
`;

const faqs = [
  {
    q: "What is the Indian Constitution? Why is it significant?",
    a: <>The <strong>Indian Constitution</strong> is the supreme law of India — the longest written constitution in the world. It is a set of rules by which the government governs the country. It came into effect on <strong>26th January 1950</strong>. It is based on the principles of <strong>democracy, socialism, and secularism</strong>. Dr. B.R. Ambedkar is known as the <strong>'Father of the Indian Constitution'</strong> for his pivotal role in drafting it. The Constitution defines the nature of our society, the type of government, and the rights and duties of citizens.</>
  },
  {
    q: "Why does a country need a Constitution? Give at least five reasons.",
    a: <><ul>
      <li>It lays out certain <strong>ideals and aspirations</strong> that citizens want their country to represent</li>
      <li>It tells us the <strong>fundamental nature of our society</strong> and political system</li>
      <li>It provides a set of <strong>rules and principles</strong> that all citizens agree to as the basis of governance</li>
      <li>In a democracy, it <strong>guards against misuse of authority</strong> by political leaders</li>
      <li>It <strong>prevents tyranny and domination</strong> — ensures the majority cannot oppress the minority</li>
      <li>It <strong>guarantees the Right to Equality</strong> — no discrimination on religion, caste, gender, or race</li>
      <li>The Nepal example shows that when a country transitions from monarchy to democracy, it <strong>needs a new constitution</strong> to reflect the changed reality</li>
    </ul></>
  },
  {
    q: "What is Federalism? How does it work in India?",
    a: <><strong>Federalism</strong> refers to the existence of <strong>more than one level of government</strong> in a country. In India, this means governance at two levels: <strong>the Central (Union) Government</strong> and the <strong>State Governments</strong>. Citizens are governed by laws and policies made by each of these levels. Federalism ensures that power is not concentrated entirely at the centre — states have their own powers in areas like education, health, and agriculture. The Constitution clearly defines which subjects fall under central, state, or concurrent jurisdiction.</>
  },
  {
    q: "What is the Parliamentary Form of Government? What is universal adult suffrage?",
    a: <>In India's <strong>Parliamentary Form of Government</strong>, the Constitution guarantees <strong>universal adult suffrage</strong> — every citizen of India, irrespective of their social background, religion, caste, gender, or wealth, has the right to vote and directly elect their representatives. <strong>Elected representatives are accountable to the people</strong> — they can be voted out if they fail to perform. The Parliament is the supreme legislative body and the executive (Cabinet) must enjoy the confidence of the Parliament. This makes the government truly representative and responsible.</>
  },
  {
    q: "Explain the Separation of Powers. Name the three organs of the State.",
    a: <>The doctrine of <strong>Separation of Powers</strong> means that the power of the State is divided among three independent organs, each acting as a check on the others:
      <ul>
        <li><strong>Legislature</strong> — Elected representatives who <strong>make laws</strong> (Parliament: Lok Sabha + Rajya Sabha)</li>
        <li><strong>Executive</strong> — A smaller group responsible for <strong>implementing laws and running the government</strong> (Cabinet, Civil Services)</li>
        <li><strong>Judiciary</strong> — The system of courts that <strong>settles disputes and ensures laws are obeyed</strong> (Supreme Court, High Courts)</li>
      </ul>
      Each organ acts as a <strong>check and balance</strong> on the others — ensuring no single organ becomes too powerful. The judiciary can strike down laws that violate the Constitution.</>
  },
  {
    q: "What are Fundamental Rights? Name all six. Why are they called the 'conscience' of the Constitution?",
    a: <>Fundamental Rights are called the <strong>'conscience' of the Indian Constitution</strong> because they protect every citizen against arbitrary and absolute exercise of power by the State. The Constitution guarantees rights not just against the State but also against other individuals. The <strong>six Fundamental Rights</strong> are:
      <ul>
        <li><strong>Right to Equality</strong> — no discrimination on religion, caste, gender, race, or place of birth</li>
        <li><strong>Right to Freedom</strong> — freedom of speech, expression, assembly, movement, profession</li>
        <li><strong>Right against Exploitation</strong> — prohibition of forced labour, child labour, human trafficking</li>
        <li><strong>Right to Freedom of Religion</strong> — freedom to practise, profess, and propagate any religion</li>
        <li><strong>Cultural and Educational Rights</strong> — minorities can preserve culture and run educational institutions</li>
        <li><strong>Right to Constitutional Remedies</strong> — the right to approach courts if rights are violated (called the 'heart of the Constitution' by Ambedkar)</li>
      </ul></>
  },
  {
    q: "What are the Directive Principles of State Policy (DPSP)?",
    a: <>In addition to Fundamental Rights, the Constitution contains <strong>Directive Principles of State Policy (DPSP)</strong> — guidelines for the government to follow while making laws and policies. Key points:
      <ul>
        <li>DPSPs are <strong>not enforceable by courts</strong> (unlike Fundamental Rights) but are fundamental in governance</li>
        <li>They aim to ensure <strong>greater social and economic equality</strong> in India</li>
        <li>They serve as a <strong>guide for independent India</strong> to institute laws that reduce poverty and establish a welfare state</li>
        <li>Examples include: equal pay for equal work, free legal aid, living wage for workers, separation of judiciary from executive</li>
      </ul>
      Together, Fundamental Rights and DPSPs create the framework for a <strong>just, equal, and democratic India</strong>.</>
  },
  {
    q: "What is Secularism? How does the Indian Constitution reflect it?",
    a: <>A <strong>secular state</strong> is one in which the state does <strong>not officially promote any one religion</strong> as the state religion. India is explicitly secular — the Constitution treats all religions equally. Key aspects:
      <ul>
        <li>The state <strong>does not favour or discriminate</strong> against any religion</li>
        <li>Citizens have <strong>Freedom of Religion</strong> as a Fundamental Right</li>
        <li>No religious instruction is compulsory in government schools</li>
        <li>The state can intervene in religious matters <strong>to remove social evils</strong> (like untouchability)</li>
      </ul>
      Secularism was especially important given India's enormous religious diversity and the trauma of Partition. It ensures that the Indian state remains above all religions, protecting all faiths equally.</>
  },
  {
    q: "What was the historical context in which the Indian Constitution was written?",
    a: <>The Indian Constitution was written in an extraordinary and turbulent time:
      <ul>
        <li>The <strong>Indian National Movement</strong> had struggled for independence from British rule for decades — nationalists had imagined what a free India would look like</li>
        <li>When the Constitution was being written, India was going through the <strong>trauma of Partition</strong> — violent division into India and Pakistan with massive displacement and communal violence</li>
        <li>The nation was made up of vastly diverse peoples, languages, religions, and castes — <strong>maintaining unity while respecting diversity</strong> was a key challenge</li>
        <li>The final Constitution reflects a commitment to <strong>national unity, diversity, eradication of poverty, and socio-economic reforms</strong></li>
      </ul></>
  },
  {
    q: "How can the Indian Constitution be changed? Why is it important that constitutions can be amended?",
    a: <>The Indian Constitution <strong>has been changed (amended) over the years</strong> to reflect new concerns of the polity. Key points:
      <ul>
        <li>The Constitution has a formal <strong>amendment procedure</strong> in Article 368 — some changes require a simple majority, others require a special two-thirds majority in Parliament, and some need ratification by state legislatures</li>
        <li>Constitutions must be amendable because <strong>societies change over time</strong> — what was relevant in 1950 may need updating today</li>
        <li>However, the <strong>basic structure of the Constitution</strong> (democracy, secularism, federalism, Fundamental Rights) cannot be altered — the Supreme Court established this in the Kesavananda Bharati case (1973)</li>
        <li>Amendments allow a constitution to remain <strong>a living document</strong> that responds to new social, economic, and political realities without losing its foundational values</li>
      </ul></>
  },
];

export default function TheIndianConstitution() {
  const [openIdx, setOpenIdx] = useState(null);
  const tog = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="tic-root">

        {/* ══ HERO ══ */}
        <div className="tic-hero">

          <div className="tic-hero-glow" />

          <div className="tic-hero-nav">
            <div className="tic-hero-nav-tag">Political Science · Class 9</div>
          </div>

          <div className="tic-hero-center">
            <div className="tic-hero-eyebrow">Chapter 01 · Democratic Politics</div>
            <h1 className="tic-hero-h1">
              The <span className="sa">Indian</span><br />
              Consti<span className="bl">tution</span>
            </h1>
            <div className="tic-hero-deck">
              The <strong>longest written constitution in the world</strong> — born from the fire of Partition, shaped by decades of nationalist thought, and designed to hold together the world's most diverse democracy. This is the document that made India possible.
            </div>
            <div className="tic-hero-stats">
              <div className="tic-hero-stat">
                <div className="tic-hero-stat-val"><span>26</span> Jan</div>
                <div className="tic-hero-stat-label">In Effect Since 1950</div>
              </div>
              <div className="tic-hero-stat">
                <div className="tic-hero-stat-val"><span>6</span></div>
                <div className="tic-hero-stat-label">Fundamental Rights</div>
              </div>
              <div className="tic-hero-stat">
                <div className="tic-hero-stat-val"><span>5</span></div>
                <div className="tic-hero-stat-label">Key Features</div>
              </div>
              <div className="tic-hero-stat">
                <div className="tic-hero-stat-val"><span>3</span></div>
                <div className="tic-hero-stat-label">Organs of State</div>
              </div>
            </div>
          </div>

          <div className="tic-hero-bottom">
            <div className="tic-hero-bottom-item">Longest Written Constitution</div>
            <div className="tic-hero-bottom-item">Supreme Law of the Land</div>
            <div className="tic-hero-bottom-item">Democracy · Socialism · Secularism</div>
            <div className="tic-hero-bottom-item">Dr. B.R. Ambedkar — Father of the Constitution</div>
          </div>
        </div>

        {/* ══ BODY ══ */}
        <div className="tic-body">

          {/* ══ SECTION 1: What is the Constitution ══ */}
          <div className="tic-run-label">
            <div className="tic-run-num">01</div>
            <div className="tic-run-title">Foundation</div>
            <div className="tic-run-topic">What Is the Constitution?</div>
          </div>

          <h2 className="tic-sec-h2">The <em>Supreme Law</em><br />of the Land</h2>
          <p className="tic-prose">
            The Constitution of India is the <strong>longest written constitution in the world</strong>. It is a set of rules by which the government governs the country. It is the <strong>supreme law of the land</strong> — all other laws must conform to it, and anything that contradicts the Constitution is void. It came into effect on <strong>26th January 1950</strong> — celebrated as Republic Day.
          </p>
          <p className="tic-prose">
            Our Constitution is built on three foundational principles: <strong>Democracy</strong> (the people are sovereign), <strong>Socialism</strong> (economic justice and reducing inequality), and <strong>Secularism</strong> (the state has no official religion and treats all faiths equally). Together, these form the ideological spine of the Indian republic.
          </p>

          {/* Constitution facts strip */}
          <div className="tic-facts-strip">
            <div className="tic-fact-box">
              <div className="tic-fact-num">26 Jan</div>
              <div className="tic-fact-label">Effective since 1950</div>
            </div>
            <div className="tic-fact-box">
              <div className="tic-fact-num">Longest</div>
              <div className="tic-fact-label">Written Constitution in world</div>
            </div>
            <div className="tic-fact-box">
              <div className="tic-fact-num">3</div>
              <div className="tic-fact-label">Core Principles: Democracy, Socialism, Secularism</div>
            </div>
            <div className="tic-fact-box">
              <div className="tic-fact-num">B.R.A.</div>
              <div className="tic-fact-label">Father of the Constitution</div>
            </div>
          </div>

          {/* Ambedkar Profile */}
          <div className="tic-ambedkar">
            <div className="tic-ambedkar-badge">⚖️</div>
            <div>
              <div className="tic-ambedkar-label">Father of the Indian Constitution</div>
              <div className="tic-ambedkar-name">Dr. Bhim Rao <span>Ambedkar</span></div>
              <div className="tic-ambedkar-desc">
                Dr. B.R. Ambedkar was the chairman of the <strong>Drafting Committee</strong> of the Constituent Assembly. A brilliant jurist, economist, and social reformer who had himself faced the worst of caste discrimination, Ambedkar brought both <strong>intellectual rigour and moral urgency</strong> to the task of drafting India's founding document. He championed the Fundamental Rights chapter — especially the Right to Constitutional Remedies — calling it the <strong>heart and soul of the Constitution</strong>. The Constitution he helped craft was not just a legal document but a <strong>transformative vision for a just, equal India</strong>.
              </div>
            </div>
          </div>

          {/* ══ SECTION 2: Historical Context ══ */}
          <div className="tic-break">
            <div className="tic-break-line" />
            <div className="tic-break-pill">Historical Context</div>
            <div className="tic-break-line" />
          </div>

          <div className="tic-run-label">
            <div className="tic-run-num">02</div>
            <div className="tic-run-title">Historical Background</div>
            <div className="tic-run-topic">Independence · Partition · Constitution</div>
          </div>

          <h2 className="tic-sec-h2">Born in <em>Fire</em> — The Making of the Constitution</h2>
          <p className="tic-prose">
            The Indian Constitution was not written in calm, comfortable conditions. It was shaped in the fires of one of the most traumatic moments in Indian history — the <strong>Partition of 1947</strong>. As India gained independence from British rule, it was simultaneously torn apart, with millions displaced and hundreds of thousands killed in communal violence.
          </p>
          <p className="tic-prose">
            The nationalists who wrote the Constitution had spent <strong>decades imagining and planning</strong> what a free India would look like. They drew on ideas from across the world — the French Revolution's liberty, equality, and fraternity; the American Bill of Rights; the Irish Constitution; the British parliamentary model — and wove them into something uniquely suited to India's vast diversity.
          </p>

          <div className="tic-timeline-block">
            <div className="tic-tl-header saf-bg">
              <div className="tic-tl-header-text">
                <div className="tic-tl-header-label">Timeline · Road to the Constitution</div>
                <div className="tic-tl-header-title">From Independence to Republic</div>
                <div className="tic-tl-header-sub">How India's founding document came to be — amid independence and partition</div>
              </div>
              <div className="tic-tl-header-icon">🇮🇳</div>
            </div>
            <div className="tic-tl-body">
              {[
                ["Decades Before", "Nationalist leaders imagined a free India", "Indian National Movement leaders spent decades planning what an independent India should look like — its government structure, rights for citizens, and its relationship with diverse communities."],
                ["Aug 1947", "Independence — and Partition", "India gained independence from Britain, but simultaneously underwent the violent Partition into India and Pakistan. The Constitution would need to heal a nation torn apart by religious division."],
                ["Dec 1946", "Constituent Assembly formed", "The Constituent Assembly was formed to draft the Constitution. It had 299 members — representing all regions, religions, and communities of India. Dr. B.R. Ambedkar chaired the Drafting Committee."],
                ["Nov 1949", "Constitution adopted", "After nearly three years of deliberations, debates, and drafting, the Constituent Assembly adopted the final Constitution on 26th November 1949."],
                ["26 Jan 1950", "Constitution comes into effect", "The Constitution of India officially came into force, replacing the Government of India Act (1935). India became a Republic — the world's largest democracy was born."],
              ].map(([y, head, body]) => (
                <div className="tic-tl-row" key={y}>
                  <div className="tic-tl-year">{y}</div>
                  <div className="tic-tl-content">
                    <div className="tic-tl-content-head">{head}</div>
                    <div className="tic-tl-content-body">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ SECTION 3: Why We Need a Constitution ══ */}
          <div className="tic-break">
            <div className="tic-break-line" />
            <div className="tic-break-pill">Purpose of a Constitution</div>
            <div className="tic-break-line" />
          </div>

          <div className="tic-run-label">
            <div className="tic-run-num">03</div>
            <div className="tic-run-title">The Need</div>
            <div className="tic-run-topic">Why Every Country Needs a Constitution</div>
          </div>

          <h2 className="tic-sec-h2">Why Does a Country<br /><em>Need</em> a Constitution?</h2>
          <p className="tic-prose">
            A constitution is not just a legal document — it is the social contract of a nation. It answers the most fundamental questions: Who holds power? How is it exercised? What can it never do? And what does it owe every citizen? Without a constitution, power has no limits — and history shows what unlimited power does.
          </p>

          <div className="tic-need-grid">
            {[
              { n:"I",   icon:"🌟", head:"Lays Out National Ideals",        body:"A Constitution lays out certain ideals that form the basis of the kind of country that citizens aspire to live in — justice, liberty, equality, and fraternity." },
              { n:"II",  icon:"🏛️", head:"Defines Society's Nature",        body:"It tells us the fundamental nature of our society — its diversity, its commitments, and what it aspires to become." },
              { n:"III", icon:"📜", head:"Rules Everyone Agrees On",        body:"It provides a set of rules and principles that all persons in a country agree upon as the basis of governance — above any party, individual, or majority." },
              { n:"IV",  icon:"⚖️", head:"Prevents Misuse of Authority",    body:"In a democracy, it guards against the misuse of authority by political leaders — setting limits on what government can and cannot do." },
              { n:"V",   icon:"🛡️", head:"Protects Minorities from Tyranny", body:"A Constitution ensures that a dominant group cannot use its power against any person, group, or organisation. It prevents the tyranny of the majority over minorities." },
              { n:"VI",  icon:"🤝", head:"Guarantees Equality",             body:"The Indian Constitution guarantees the Right to Equality to all citizens — no citizen can be discriminated against on the basis of religion, caste, gender, or race." },
            ].map((c) => (
              <div className="tic-need-card" data-n={c.n} key={c.n}>
                <div className="tic-need-icon">{c.icon}</div>
                <div className="tic-need-head">{c.head}</div>
                <div className="tic-need-body">{c.body}</div>
              </div>
            ))}
          </div>

          {/* Nepal example */}
          <div className="tic-nepal-box">
            <div className="tic-nepal-head">
              <div className="tic-nepal-head-icon">🇳🇵</div>
              <div>
                <div className="tic-nepal-head-label">Case Study — Constitution in Practice</div>
                <div className="tic-nepal-head-title">Nepal: From Monarchy to Democracy</div>
              </div>
            </div>
            <div className="tic-nepal-body">
              {[
                ["System Before", "Nepal was a monarchy — the king held final authority. The constitution at the time reflected and legitimised the king's absolute power."],
                ["The Transition", "Nepal went through a political revolution — the monarchy was abolished and Nepal transitioned to a democratic republic after years of struggle by the people."],
                ["New Constitution Needed", "When Nepal became a democracy, it needed to write an entirely new constitution — because a document designed for a monarchy cannot govern a democracy."],
                ["The Lesson", "This shows that a constitution must reflect the actual political system of a country. When the fundamental nature of the state changes, the constitution must change with it."],
              ].map(([key, val]) => (
                <div className="tic-nepal-row" key={key}>
                  <div className="tic-nepal-key">{key}</div>
                  <div className="tic-nepal-val">{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ SECTION 4: Key Features ══ */}
          <div className="tic-break">
            <div className="tic-break-line" />
            <div className="tic-break-pill">Key Features</div>
            <div className="tic-break-line" />
          </div>

          <div className="tic-run-label">
            <div className="tic-run-num">04</div>
            <div className="tic-run-title">Architecture</div>
            <div className="tic-run-topic">The Five Key Features</div>
          </div>

          <h2 className="tic-sec-h2">Five Pillars of the<br /><em>Indian Constitution</em></h2>
          <p className="tic-prose">
            The Indian Constitution has five defining architectural features that shape how the country is governed. Each feature emerged from the specific challenges India faced — as a diverse, newly independent nation recovering from colonial rule and communal violence.
          </p>

          <div className="tic-features">

            {/* Feature 1: Federalism */}
            <div className="tic-feat-card">
              <div className="tic-feat-num-col"><div className="tic-feat-num">1</div></div>
              <div className="tic-feat-body-col">
                <div className="tic-feat-tag">Feature One</div>
                <div className="tic-feat-title">Federalism</div>
                <div className="tic-feat-desc">
                  Federalism refers to the existence of <strong>more than one level of government</strong> in India — at the Central (Union) and State levels. Citizens are governed by laws and policies made by both levels. This structure was crucial for a country as large and diverse as India — different states have their own governments, own laws, and own powers.
                </div>
                <div className="tic-feat-desc">
                  The Constitution clearly divides powers between the Centre and States using three lists: the <strong>Union List</strong> (subjects exclusively for the Centre, like defence and foreign affairs), the <strong>State List</strong> (subjects for states, like police and agriculture), and the <strong>Concurrent List</strong> (shared subjects, like education and forests).
                </div>
                <div className="tic-feat-note">Federalism allows India's diversity to flourish — different states can make laws suited to their unique needs, while the Central government handles matters of national importance.</div>
              </div>
            </div>

            {/* Feature 2: Parliamentary Form */}
            <div className="tic-feat-card">
              <div className="tic-feat-num-col"><div className="tic-feat-num">2</div></div>
              <div className="tic-feat-body-col">
                <div className="tic-feat-tag">Feature Two</div>
                <div className="tic-feat-title">Parliamentary Form of Government</div>
                <div className="tic-feat-desc">
                  The Constitution guarantees <strong>universal adult suffrage</strong> for all citizens — every citizen, irrespective of social background, religion, caste, or gender, has the right to vote and elect their representatives. This is one of India's most radical and defining commitments. When India became independent in 1947, <strong>most countries in the world had not yet extended voting rights to all adults</strong>.
                </div>
                <div className="tic-feat-desc">
                  In a parliamentary form of government, <strong>representatives are accountable to the people</strong>. The executive (Prime Minister and Cabinet) must retain the confidence of the elected Parliament. If they lose that confidence, they must resign. This ensures that real power rests with elected representatives — not an unelected president or king.
                </div>
                <div className="tic-feat-note">Universal adult suffrage meant that even the poorest, most marginalised Indian had an equal vote with the richest — a profound statement of human equality.</div>
              </div>
            </div>

            {/* Feature 3: Separation of Powers */}
            <div className="tic-feat-card">
              <div className="tic-feat-num-col"><div className="tic-feat-num">3</div></div>
              <div className="tic-feat-body-col">
                <div className="tic-feat-tag">Feature Three</div>
                <div className="tic-feat-title">Separation of Powers</div>
                <div className="tic-feat-desc">
                  The Constitution divides the powers of the State among <strong>three independent organs</strong> — the Legislature, the Executive, and the Judiciary. Each organ acts as a <strong>check and balance</strong> on the others, preventing the concentration of power in any one place.
                </div>
              </div>
            </div>

            {/* Feature 4: Fundamental Rights */}
            <div className="tic-feat-card">
              <div className="tic-feat-num-col"><div className="tic-feat-num">4</div></div>
              <div className="tic-feat-body-col">
                <div className="tic-feat-tag">Feature Four</div>
                <div className="tic-feat-title">Fundamental Rights</div>
                <div className="tic-feat-desc">
                  Fundamental Rights are referred to as the <strong>'conscience' of the Indian Constitution</strong>. They protect citizens against the arbitrary and absolute exercise of power by the State. The Constitution guarantees rights not just against the State, but also against <strong>other individuals</strong>.
                </div>
                <div className="tic-feat-desc">
                  In addition to Fundamental Rights, the Constitution has <strong>Directive Principles of State Policy (DPSP)</strong> — guidelines for the government to follow while making laws. DPSPs ensure greater social and economic reforms and serve as a guide for the state to reduce poverty and inequality.
                </div>
                <div className="tic-feat-note">Ambedkar called the Right to Constitutional Remedies (the right to approach courts if rights are violated) the "heart and soul" of the Constitution.</div>
              </div>
            </div>

            {/* Feature 5: Secularism */}
            <div className="tic-feat-card">
              <div className="tic-feat-num-col"><div className="tic-feat-num">5</div></div>
              <div className="tic-feat-body-col">
                <div className="tic-feat-tag">Feature Five</div>
                <div className="tic-feat-title">Secularism</div>
                <div className="tic-feat-desc">
                  A <strong>secular state</strong> is one in which the state does not officially promote any one religion as the state religion. India's secularism means the government is neutral between all religions — it neither promotes nor discriminates against any faith. Every citizen has the freedom to follow their own religion.
                </div>
                <div className="tic-feat-desc">
                  The Constitution plays a crucial role in laying out the ideals that all citizens — including elected representatives — should adhere to. It can also be <strong>amended over time</strong> to reflect new concerns of the polity, involving changes in the fundamental nature of the country.
                </div>
                <div className="tic-feat-note">Given India's enormous religious diversity and the trauma of Partition, Secularism was not just a principle but a survival strategy for the nation.</div>
              </div>
            </div>

          </div>

          {/* ══ SECTION 5: Separation of Powers Deep Dive ══ */}
          <div className="tic-break">
            <div className="tic-break-line" />
            <div className="tic-break-pill">Separation of Powers</div>
            <div className="tic-break-line" />
          </div>

          <div className="tic-run-label">
            <div className="tic-run-num">05</div>
            <div className="tic-run-title">Three Organs</div>
            <div className="tic-run-topic">Legislature · Executive · Judiciary</div>
          </div>

          <h2 className="tic-sec-h2">Checks &amp; <em>Balances</em> — The Three Organs</h2>
          <p className="tic-prose">
            The doctrine of Separation of Powers ensures that no single person, party, or institution can become all-powerful. Each of the three organs of the state has distinct roles — and each can check the power of the others. This is a safeguard against tyranny built into the very design of government.
          </p>

          <div className="tic-powers">
            <div className="tic-power-col">
              <div className="tic-power-icon">🏛️</div>
              <div className="tic-power-head">The Legislature</div>
              <div className="tic-power-tag">Parliament · Law Makers</div>
              <div className="tic-power-body">Our <strong>elected representatives</strong> — those who make laws. In India, this is Parliament (Lok Sabha + Rajya Sabha) at the Centre, and State Legislatures in each state. The Legislature is the source of all law and exercises the sovereign will of the people.</div>
              <div className="tic-power-check">✓ Controls the Executive through no-confidence motions</div>
            </div>
            <div className="tic-power-col">
              <div className="tic-power-icon">⚙️</div>
              <div className="tic-power-head">The Executive</div>
              <div className="tic-power-tag">Cabinet · Government · Implementors</div>
              <div className="tic-power-body">A smaller group responsible for <strong>implementing laws and running the government</strong>. This includes the Prime Minister, Cabinet Ministers, and the Civil Services (IAS, IPS, etc.). The executive translates the Legislature's laws into action — running departments, maintaining order, conducting foreign policy.</div>
              <div className="tic-power-check">✓ Must maintain Legislature's confidence to govern</div>
            </div>
            <div className="tic-power-col">
              <div className="tic-power-icon">⚖️</div>
              <div className="tic-power-head">The Judiciary</div>
              <div className="tic-power-tag">Courts · Dispute Settlers · Constitution Guardians</div>
              <div className="tic-power-body">The system of courts — <strong>settling disputes and ensuring laws are obeyed</strong>. The Supreme Court is the highest court and guardian of the Constitution. It can strike down any law — passed by Parliament itself — if it violates the Constitution. The judiciary is independent of both Legislature and Executive.</div>
              <div className="tic-power-check">✓ Can declare Executive or Legislative action unconstitutional</div>
            </div>
          </div>

          {/* ══ SECTION 6: Fundamental Rights ══ */}
          <div className="tic-break">
            <div className="tic-break-line" />
            <div className="tic-break-pill">Fundamental Rights</div>
            <div className="tic-break-line" />
          </div>

          <div className="tic-run-label">
            <div className="tic-run-num">06</div>
            <div className="tic-run-title">Rights of Citizens</div>
            <div className="tic-run-topic">The Conscience of the Constitution</div>
          </div>

          <h2 className="tic-sec-h2">Six <em>Fundamental Rights</em> — The Conscience of India</h2>
          <p className="tic-prose">
            Fundamental Rights protect every Indian citizen from the arbitrary exercise of power — by the State, by majorities, and by other individuals. They are <strong>justiciable</strong> — meaning you can go to court if they are violated. Without Fundamental Rights, democracy is just elections; with them, it becomes genuine liberty.
          </p>

          <div className="tic-rights-table">
            <div className="tic-rights-head">⚖️ The Six Fundamental Rights of India</div>
            {[
              { n:"1", name:"Right to Equality",             desc:"No citizen can be discriminated against on the basis of religion, caste, gender, race, or place of birth. The state shall not deny any person equality before law. Abolishes untouchability." },
              { n:"2", name:"Right to Freedom",              desc:"Includes freedom of speech and expression, peaceful assembly, forming associations, free movement across India, choice of profession, and the right to life and personal liberty." },
              { n:"3", name:"Right against Exploitation",    desc:"Prohibits forced labour (begar), child labour in hazardous industries, and human trafficking. Protects vulnerable sections — especially children and workers — from exploitation." },
              { n:"4", name:"Right to Freedom of Religion",  desc:"Every citizen has the right to freely profess, practise, and propagate their religion. The state shall not interfere in religious matters, and no religious instruction is compulsory in state schools." },
              { n:"5", name:"Cultural and Educational Rights", desc:"Minorities have the right to conserve their language, script, and culture. They can establish and administer their own educational institutions. Protects India's extraordinary cultural diversity." },
              { n:"6", name:"Right to Constitutional Remedies", desc:"Called the 'heart and soul' of the Constitution by Ambedkar. Guarantees the right to approach the Supreme Court or High Courts to enforce Fundamental Rights. Without this right, all other rights would be hollow." },
            ].map((r) => (
              <div className="tic-right-row" key={r.n}>
                <div className="tic-right-num">{r.n}</div>
                <div className="tic-right-content">
                  <div className="tic-right-name">{r.name}</div>
                  <div className="tic-right-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* DPSP */}
          <div className="tic-dpsp">
            <div className="tic-dpsp-label">In Addition to Fundamental Rights</div>
            <div className="tic-dpsp-title">Directive Principles of State Policy (DPSP)</div>
            <div className="tic-dpsp-body">
              The Constitution also contains <strong>Directive Principles of State Policy (DPSP)</strong> — guidelines for the government to follow while making laws and policies. Unlike Fundamental Rights, DPSPs are <strong>not enforceable by courts</strong>, but they are fundamental in governance. They aim to ensure <strong>greater social and economic equality</strong> — directing the state to provide free legal aid, equal pay for equal work, and education for all children. They serve as a guide for the state to reduce poverty and build a welfare state. Together, Fundamental Rights and DPSPs represent India's twin commitment to <strong>political freedom and social justice</strong>.
            </div>
          </div>

          {/* ══ SECTION 7: Secularism ══ */}
          <div className="tic-break">
            <div className="tic-break-line" />
            <div className="tic-break-pill">Secularism</div>
            <div className="tic-break-line" />
          </div>

          <div className="tic-run-label">
            <div className="tic-run-num">07</div>
            <div className="tic-run-title">No State Religion</div>
            <div className="tic-run-topic">The Secular Character of India</div>
          </div>

          <h2 className="tic-sec-h2">India's <em>Secular</em> Commitment</h2>
          <p className="tic-prose">
            Secularism is not merely a legal principle in India — it is a survival necessity. India is home to Hindus, Muslims, Sikhs, Christians, Jains, Buddhists, Parsis, and dozens of other religious communities. In the aftermath of Partition's horrific communal violence, ensuring that the state would never take sides in religious matters was not just an ideal — it was essential for the country's survival.
          </p>

          <div className="tic-secular">
            <div className="tic-secular-slab" />
            <div className="tic-secular-body">
              <div className="tic-secular-label">Constitutional Principle · Secularism</div>
              <div className="tic-secular-title">What Does a Secular State Mean?</div>
              <div className="tic-secular-desc">
                A <strong>secular state</strong> is one in which the state does <strong>not officially promote any one religion as the state religion</strong>. India's secularism differs from Western secularism — rather than strict separation, India takes a position of <strong>equal respect for all religions</strong>. The state does not favour any faith, does not impose any religion on citizens, and can intervene in religious practices that violate human rights (like untouchability). Citizens have <strong>complete freedom to follow, practise, and propagate their religion</strong> — but no one can use religion to discriminate or harm others. The Constitution has been amended over time to reflect evolving concerns, but its <strong>secular character is part of its basic structure</strong> — it cannot be removed.
              </div>
            </div>
          </div>

          <div className="tic-compare">
            <div className="tic-cmp-col">
              <div className="tic-cmp-badge">Rights it Protects</div>
              <div className="tic-cmp-head">What Secularism Guarantees</div>
              <ul>
                <li>Every citizen has <strong>freedom to practise</strong> their own religion</li>
                <li>State shall not impose any <strong>religion on citizens</strong></li>
                <li>No <strong>religious instruction</strong> compulsory in state-funded schools</li>
                <li><strong>Minorities</strong> can establish their own religious institutions</li>
                <li>State can intervene to <strong>remove social evils</strong> linked to religion</li>
              </ul>
            </div>
            <div className="tic-cmp-col">
              <div className="tic-cmp-badge">What It Prevents</div>
              <div className="tic-cmp-head">The Limits of Religious Power</div>
              <ul>
                <li>No religion can become the <strong>official state religion</strong></li>
                <li>No law can be based <strong>solely on one religion's texts</strong></li>
                <li>No citizen can be <strong>discriminated against</strong> for their religion</li>
                <li>Religious practice cannot <strong>violate others' rights</strong></li>
                <li>Public funds cannot be used to <strong>promote any particular faith</strong></li>
              </ul>
            </div>
          </div>

          {/* Editorial pullout */}
          <div className="tic-editorial">
            <div className="tic-editorial-q">
              "The Constitution has been changed over the years to reflect new concerns of the polity — but its <em>fundamental values endure</em>."
            </div>
            <div className="tic-editorial-attr">— The Indian Constitution, after 100+ amendments, remains the foundation of the world's largest democracy</div>
          </div>

          {/* ══ FAQ ══ */}
          <div className="tic-break">
            <div className="tic-break-line" />
            <div className="tic-break-pill">Exam Prep</div>
            <div className="tic-break-line" />
          </div>

          <div className="tic-faq-intro">
            <div className="tic-faq-intro-line" />
            <div className="tic-faq-intro-tag">Frequently Asked Questions</div>
            <div className="tic-faq-intro-line" />
          </div>
          <h2 className="tic-faq-h2">All You Need to Know</h2>

          {faqs.map((faq, i) => (
            <div className={`tic-faq-item${openIdx === i ? " open" : ""}`} key={i}>
              <button className="tic-faq-q" onClick={() => tog(i)}>
                <span className="tic-faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="tic-faq-icon">{openIdx === i ? "▴" : "▾"}</span>
              </button>
              <div className={`tic-faq-ans${openIdx === i ? " open" : ""}`}>
                <div className="tic-faq-ans-inner">{faq.a}</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
