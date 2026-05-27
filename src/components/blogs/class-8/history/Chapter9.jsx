import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #0c0806;
    --ink2:       #1a1210;
    --muted:      #786058;
    --paper:      #faf6f2;
    --paper2:     #f2ebe4;
    --paper3:     #e8ddd4;
    --rose:       #8b2a3a;
    --rose2:      #6b1828;
    --rose-lt:    #fce8ec;
    --terra:      #a0441a;
    --terra2:     #7a3010;
    --gold:       #b8860b;
    --gold2:      #8b6508;
    --teal:       #0a5c50;
    --teal2:      #064038;
    --indigo:     #2a1a6e;
    --sage:       #3a5c2a;
    --rule:       #d8ccc4;
    --sand:       #f4ede0;
    --sand2:      #e8dcc8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .wcr-root {
    font-family: 'Inter', sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ─── HERO ─── */
  .wcr-hero {
    background: linear-gradient(158deg, #0c0608 0%, #1a0c10 48%, #100808 100%);
    min-height: 88vh;
    display: flex; align-items: flex-end;
    position: relative; overflow: hidden;
    padding: 0 0 64px;
  }
  .wcr-hero-bg-num {
    position: absolute; bottom: -40px; right: -20px;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(240px, 38vw, 520px); font-weight: 900; line-height: 1;
    color: rgba(255,255,255,0.022); letter-spacing: -0.04em;
    user-select: none; pointer-events: none;
  }
  .wcr-hero::before {
    content: ''; position: absolute;
    top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #6b1828, #8b2a3a, #b8860b, #8b2a3a, #6b1828);
  }
  .wcr-ring {
    position: absolute; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.018);
    pointer-events: none;
  }
  .wcr-hero-inner {
    max-width: 900px; width: 100%;
    margin: 0 auto; padding: 0 32px;
    position: relative; z-index: 1;
  }
  .wcr-overline {
    font-family: 'Poppins', sans-serif;
    font-size: 11px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: #d4899a; margin-bottom: 24px;
    display: flex; align-items: center; gap: 14px;
  }
  .wcr-overline::before, .wcr-overline::after {
    content: ''; flex: 0 0 40px; height: 1px; background: #d4899a;
  }
  .wcr-hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(42px, 7.5vw, 84px); font-weight: 900;
    color: #fff; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px;
  }
  .wcr-hero-title em       { font-style: normal; color: #d4899a; }
  .wcr-hero-title .gold-em { color: #e8c040; }
  .wcr-hero-title .teal-em { color: #4ecdc4; }
  .wcr-hero-bar {
    display: flex; flex-wrap: wrap; gap: 0;
    border-top: 1px solid rgba(255,255,255,0.12);
    padding-top: 24px; margin-top: 8px;
  }
  .wcr-hero-bar-item {
    flex: 1 1 150px; padding: 0 24px 0 0;
    border-right: 1px solid rgba(255,255,255,0.1); margin-right: 24px;
  }
  .wcr-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .wcr-bar-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(255,255,255,0.35); margin-bottom: 5px;
  }
  .wcr-bar-value {
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
    color: rgba(255,255,255,0.75);
  }

  /* ─── BODY ─── */
  .wcr-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }

  /* LEAD */
  .wcr-lead {
    border-left: 5px solid var(--rose);
    padding: 28px 36px; margin-bottom: 64px; background: var(--paper2);
  }
  .wcr-lead p {
    font-family: 'Poppins', sans-serif; font-size: 19px; font-weight: 500;
    color: var(--ink2); line-height: 1.78; margin: 0 0 14px;
  }
  .wcr-lead p:last-child { margin: 0; }
  .wcr-lead strong { color: var(--rose); }

  /* SECTION HEADER */
  .wcr-sec-head {
    display: flex; align-items: flex-start; gap: 20px;
    margin-bottom: 28px; border-bottom: 2px solid var(--rule); padding-bottom: 18px;
  }
  .wcr-sec-num {
    font-family: 'Montserrat', sans-serif; font-size: 56px; font-weight: 900;
    color: var(--rule); line-height: 1; flex-shrink: 0; margin-top: 4px;
  }
  .wcr-sec-title-wrap { display: flex; flex-direction: column; justify-content: flex-end; }
  .wcr-sec-kicker {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase; color: var(--rose); margin-bottom: 4px;
  }
  .wcr-sec-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(22px, 3.5vw, 32px); font-weight: 900;
    color: var(--ink); line-height: 1.15; letter-spacing: -0.01em;
  }
  .wcr-sec-title span       { color: var(--rose); }
  .wcr-sec-title .gold      { color: var(--gold); }
  .wcr-sec-title .teal      { color: var(--teal); }
  .wcr-sec-title .terra     { color: var(--terra); }
  .wcr-sec-title .sage      { color: var(--sage); }
  .wcr-sec-title .indigo    { color: var(--indigo); }

  /* BODY TEXT */
  .wcr-body-text {
    font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 400;
    color: var(--ink2); line-height: 1.82; margin-bottom: 24px;
  }
  .wcr-body-text strong { color: var(--ink); font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* SECTION DIVIDER */
  .wcr-divider {
    display: flex; align-items: center; gap: 16px;
    margin: 56px 0;
  }
  .wcr-divider::before, .wcr-divider::after {
    content: ''; flex: 1; height: 1px; background: var(--rule);
  }
  .wcr-divider-mark {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--rose); flex-shrink: 0;
  }

  /* LIST */
  .wcr-list {
    list-style: none; padding: 0; margin: 0 0 28px;
  }
  .wcr-list li {
    font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2);
    line-height: 1.75; padding: 10px 0 10px 28px; border-bottom: 1px solid var(--paper3);
    position: relative;
  }
  .wcr-list li::before {
    content: ''; position: absolute; left: 0; top: 20px;
    width: 8px; height: 8px; border-radius: 50%; background: var(--rose);
  }
  .wcr-list li strong { color: var(--ink); font-weight: 700; font-family: 'Poppins', sans-serif; }

  /* ── REFORMER CARDS (timeline-style) ── */
  .wcr-timeline { margin: 0 0 40px; position: relative; }
  .wcr-timeline::before {
    content: ''; position: absolute;
    left: 56px; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, var(--rose), var(--terra), var(--gold));
  }
  .wcr-tl-item {
    display: flex; gap: 28px; margin-bottom: 32px; position: relative;
  }
  .wcr-tl-badge {
    flex-shrink: 0; width: 56px; height: 56px; border-radius: 50%;
    background: var(--rose); display: flex; align-items: center; justify-content: center;
    font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 900;
    color: #fff; z-index: 1; border: 3px solid var(--paper);
    box-shadow: 0 0 0 2px var(--rose);
    text-align: center; line-height: 1.2;
  }
  .wcr-tl-badge.terra { background: var(--terra); box-shadow: 0 0 0 2px var(--terra); }
  .wcr-tl-badge.gold  { background: var(--gold);  box-shadow: 0 0 0 2px var(--gold); }
  .wcr-tl-badge.teal  { background: var(--teal);  box-shadow: 0 0 0 2px var(--teal); }
  .wcr-tl-content {
    flex: 1; background: var(--paper2); padding: 20px 24px;
    border-left: 4px solid var(--rose);
  }
  .wcr-tl-content.terra { border-left-color: var(--terra); }
  .wcr-tl-content.gold  { border-left-color: var(--gold); }
  .wcr-tl-content.teal  { border-left-color: var(--teal); }
  .wcr-tl-year {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--rose); margin-bottom: 4px;
  }
  .wcr-tl-content.terra .wcr-tl-year { color: var(--terra); }
  .wcr-tl-content.gold  .wcr-tl-year { color: var(--gold); }
  .wcr-tl-content.teal  .wcr-tl-year { color: var(--teal); }
  .wcr-tl-name {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: var(--ink); margin-bottom: 8px;
  }
  .wcr-tl-desc {
    font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.7;
  }

  /* ── CONTRAST BLOCK ── */
  .wcr-contrast {
    display: grid; grid-template-columns: 1fr 1fr;
    margin: 32px 0 40px; overflow: hidden;
    border: 1px solid var(--rule);
  }
  .wcr-contrast-col {
    padding: 28px 28px 32px;
    background: var(--paper2);
  }
  .wcr-contrast-col.dark {
    background: #1a0c10; color: #e8d0d4;
    border-left: 1px solid #3a2028;
  }
  .wcr-contrast-label {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 18px;
    color: var(--rose);
  }
  .wcr-contrast-col.dark .wcr-contrast-label { color: #ff9ab0; }
  .wcr-contrast-col ul { list-style: none; padding: 0; }
  .wcr-contrast-col ul li {
    font-family: 'Inter', sans-serif; font-size: 15px;
    line-height: 1.7; padding: 10px 0; border-bottom: 1px solid rgba(0,0,0,0.08);
  }
  .wcr-contrast-col.dark ul li { border-bottom-color: rgba(255,255,255,0.08); }
  .wcr-contrast-col ul li:last-child { border-bottom: none; }
  .wcr-contrast-col ul li strong { font-family: 'Poppins', sans-serif; font-weight: 700; }
  .wcr-contrast-col.dark ul li strong { color: #ffcccc; }

  /* ── WOMEN WRITERS GRID ── */
  .wcr-writers-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; margin: 28px 0 40px;
  }
  .wcr-writer-card {
    background: var(--paper2); padding: 24px 24px 20px;
    border-top: 4px solid var(--rose);
  }
  .wcr-writer-card.terra { border-top-color: var(--terra); }
  .wcr-writer-card.teal  { border-top-color: var(--teal); }
  .wcr-writer-card.gold  { border-top-color: var(--gold); }
  .wcr-writer-card.indigo { border-top-color: var(--indigo); }
  .wcr-writer-icon {
    font-size: 28px; margin-bottom: 12px;
  }
  .wcr-writer-name {
    font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 900;
    color: var(--ink); margin-bottom: 6px;
  }
  .wcr-writer-role {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase; color: var(--rose); margin-bottom: 10px;
  }
  .wcr-writer-card.terra .wcr-writer-role { color: var(--terra); }
  .wcr-writer-card.teal  .wcr-writer-role { color: var(--teal); }
  .wcr-writer-card.gold  .wcr-writer-role { color: var(--gold); }
  .wcr-writer-card.indigo .wcr-writer-role { color: var(--indigo); }
  .wcr-writer-desc {
    font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink2); line-height: 1.7;
  }

  /* ── CASTE HIERARCHY BLOCK ── */
  .wcr-caste-pyramid {
    margin: 28px 0 40px; background: var(--paper2);
    border: 1px solid var(--rule); padding: 32px;
  }
  .wcr-caste-tag {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted);
    margin-bottom: 20px;
  }
  .wcr-caste-row {
    display: flex; align-items: center; gap: 16px; margin-bottom: 10px;
  }
  .wcr-caste-bar-wrap { flex: 1; }
  .wcr-caste-bar {
    height: 36px; display: flex; align-items: center; padding: 0 16px;
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: #fff;
  }
  .wcr-caste-label {
    font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted);
    width: 130px; flex-shrink: 0; text-align: right;
  }

  /* ── DARK QUOTE BLOCK ── */
  .wcr-quote-block {
    background: #1a0c10; padding: 36px 40px; margin: 32px 0 40px;
    border-left: 6px solid var(--rose);
    position: relative;
  }
  .wcr-quote-mark {
    font-family: 'Montserrat', sans-serif; font-size: 80px; font-weight: 900;
    color: rgba(212,137,154,0.15); line-height: 0.8;
    position: absolute; top: 20px; left: 24px;
  }
  .wcr-quote-text {
    font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 600;
    color: #f0d0d8; line-height: 1.65; position: relative; z-index: 1;
    margin-bottom: 14px;
  }
  .wcr-quote-attr {
    font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45);
    font-style: italic;
  }

  /* ── MOVEMENT CARDS ── */
  .wcr-movement-grid {
    display: grid; grid-template-columns: 1fr 1fr 1fr;
    gap: 16px; margin: 28px 0 40px;
  }
  .wcr-movement-card {
    background: var(--paper2); padding: 22px 20px;
    border-bottom: 4px solid var(--rose);
    text-align: center;
  }
  .wcr-movement-card.terra { border-bottom-color: var(--terra); }
  .wcr-movement-card.teal  { border-bottom-color: var(--teal); }
  .wcr-movement-card.gold  { border-bottom-color: var(--gold); }
  .wcr-movement-card.indigo { border-bottom-color: var(--indigo); }
  .wcr-movement-card.sage  { border-bottom-color: var(--sage); }
  .wcr-movement-icon { font-size: 30px; margin-bottom: 10px; }
  .wcr-movement-name {
    font-family: 'Montserrat', sans-serif; font-size: 15px; font-weight: 900;
    color: var(--ink); margin-bottom: 6px; line-height: 1.25;
  }
  .wcr-movement-founder {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.10em; text-transform: uppercase; color: var(--rose); margin-bottom: 8px;
  }
  .wcr-movement-card.terra .wcr-movement-founder { color: var(--terra); }
  .wcr-movement-card.teal  .wcr-movement-founder { color: var(--teal); }
  .wcr-movement-card.gold  .wcr-movement-founder { color: var(--gold); }
  .wcr-movement-card.indigo .wcr-movement-founder { color: var(--indigo); }
  .wcr-movement-card.sage  .wcr-movement-founder { color: var(--sage); }
  .wcr-movement-desc {
    font-family: 'Inter', sans-serif; font-size: 13px; color: var(--ink2); line-height: 1.65;
  }

  /* ── AMBEDKAR PROFILE ── */
  .wcr-profile-block {
    background: #10060a; margin: 32px 0 40px; padding: 36px 40px;
    display: grid; grid-template-columns: auto 1fr; gap: 36px;
    align-items: start;
  }
  .wcr-profile-initials {
    width: 80px; height: 80px; border-radius: 50%;
    background: linear-gradient(135deg, var(--rose), var(--terra));
    display: flex; align-items: center; justify-content: center;
    font-family: 'Montserrat', sans-serif; font-size: 26px; font-weight: 900;
    color: #fff; flex-shrink: 0;
  }
  .wcr-profile-name {
    font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900;
    color: #fff; margin-bottom: 4px;
  }
  .wcr-profile-title {
    font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: #d4899a; margin-bottom: 14px;
  }
  .wcr-profile-points {
    list-style: none; padding: 0;
  }
  .wcr-profile-points li {
    font-family: 'Inter', sans-serif; font-size: 15px; color: rgba(255,255,255,0.7);
    padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); line-height: 1.65;
  }
  .wcr-profile-points li:last-child { border-bottom: none; }
  .wcr-profile-points li strong { color: #ffd0d8; font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* ── FACTOR ROW ── */
  .wcr-factor-row {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 16px; margin: 28px 0 40px;
  }
  .wcr-factor-card {
    padding: 22px 24px; background: var(--paper2);
    border-left: 4px solid var(--rule);
  }
  .wcr-factor-card.active { border-left-color: var(--rose); }
  .wcr-factor-card.terra  { border-left-color: var(--terra); }
  .wcr-factor-card.gold   { border-left-color: var(--gold); }
  .wcr-factor-card.teal   { border-left-color: var(--teal); }
  .wcr-factor-head {
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700;
    color: var(--ink); margin-bottom: 8px;
  }
  .wcr-factor-body {
    font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink2); line-height: 1.7;
  }

  /* ── FAQ ── */
  .wcr-faq-header {
    display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
  }
  .wcr-faq-kicker {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.20em; text-transform: uppercase; color: var(--rose);
    padding: 5px 14px; background: var(--rose-lt); display: inline-block;
  }
  .wcr-faq-title {
    font-family: 'Montserrat', sans-serif; font-size: clamp(22px, 3.5vw, 30px);
    font-weight: 900; color: var(--ink); margin-bottom: 28px; line-height: 1.15;
  }
  .wcr-faq-item {
    border-bottom: 1px solid var(--rule); overflow: hidden;
  }
  .wcr-faq-q {
    width: 100%; background: none; border: none; cursor: pointer;
    display: flex; justify-content: space-between; align-items: flex-start;
    padding: 20px 4px; gap: 16px; text-align: left;
  }
  .wcr-faq-q-text {
    font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600;
    color: var(--ink); line-height: 1.5; flex: 1;
  }
  .wcr-faq-icon {
    font-family: 'Inter', sans-serif; font-size: 18px; color: var(--rose);
    flex-shrink: 0; margin-top: 2px;
  }
  .wcr-faq-ans {
    display: none;
    font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2);
    line-height: 1.80; padding: 0 4px 20px; border-top: 1px solid var(--paper3);
    margin-top: 0;
  }
  .wcr-faq-ans.visible { display: block; }
  .wcr-faq-item.open .wcr-faq-q-text { color: var(--rose); }

  /* ===========================================
     RESPONSIVE — TABLET  (max-width: 768px)
  =========================================== */
  @media (max-width: 768px) {

    .wcr-hero { min-height: 70vh; padding: 0 0 48px; }
    .wcr-hero-inner { padding: 0 20px; }
    .wcr-overline { font-size: 10px; letter-spacing: 0.16em; gap: 10px; margin-bottom: 18px; }
    .wcr-overline::before, .wcr-overline::after { flex: 0 0 24px; }
    .wcr-hero-title { font-size: clamp(36px, 9vw, 58px); margin-bottom: 24px; }
    .wcr-hero-bar { padding-top: 18px; }
    .wcr-hero-bar-item { flex: 1 1 120px; padding: 0 14px 0 0; margin-right: 14px; }
    .wcr-bar-label { font-size: 9px; }
    .wcr-bar-value { font-size: 12px; }

    .wcr-body { padding: 48px 20px 72px; }
    .wcr-lead { padding: 20px 22px; margin-bottom: 44px; }
    .wcr-lead p { font-size: 16px; }

    .wcr-sec-num { font-size: 40px; }
    .wcr-sec-title { font-size: clamp(20px, 5vw, 26px); }
    .wcr-body-text { font-size: 15px; }
    .wcr-list li { font-size: 15px; }

    .wcr-timeline::before { left: 28px; }
    .wcr-tl-badge { width: 40px; height: 40px; font-size: 11px; }
    .wcr-tl-item { gap: 16px; }
    .wcr-tl-content { padding: 16px 18px; }
    .wcr-tl-name { font-size: 16px; }
    .wcr-tl-desc { font-size: 14px; }

    .wcr-contrast { grid-template-columns: 1fr; }
    .wcr-contrast-col.dark { border-left: none; border-top: 1px solid #3a2028; }
    .wcr-contrast-col { padding: 22px 20px; }
    .wcr-contrast-col ul li { font-size: 14px; }

    .wcr-writers-grid { grid-template-columns: 1fr; gap: 14px; }

    .wcr-caste-pyramid { padding: 20px 16px; }
    .wcr-caste-label { width: 90px; font-size: 11px; }
    .wcr-caste-bar { font-size: 12px; padding: 0 10px; height: 32px; }

    .wcr-quote-block { padding: 28px 24px 28px 28px; }
    .wcr-quote-text { font-size: 16px; }

    .wcr-movement-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .wcr-movement-name { font-size: 13px; }
    .wcr-movement-desc { font-size: 12px; }

    .wcr-profile-block { grid-template-columns: 1fr; gap: 20px; padding: 28px 24px; }
    .wcr-profile-initials { width: 64px; height: 64px; font-size: 20px; }
    .wcr-profile-name { font-size: 18px; }
    .wcr-profile-points li { font-size: 14px; }

    .wcr-factor-row { grid-template-columns: 1fr; gap: 12px; }

    .wcr-faq-q-text { font-size: 14px; }
    .wcr-faq-ans { font-size: 14px; }
    .wcr-divider { margin: 40px 0; }
  }

  /* ===========================================
     RESPONSIVE — MOBILE  (max-width: 480px)
  =========================================== */
  @media (max-width: 480px) {

    .wcr-hero { min-height: 60vh; padding: 0 0 36px; }
    .wcr-hero-inner { padding: 0 16px; }
    .wcr-overline { font-size: 9px; gap: 8px; margin-bottom: 14px; }
    .wcr-overline::before, .wcr-overline::after { flex: 0 0 16px; }
    .wcr-hero-title { font-size: clamp(32px, 11vw, 48px); margin-bottom: 20px; letter-spacing: -0.02em; }
    .wcr-hero-bar { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding-top: 16px; }
    .wcr-hero-bar-item { border-right: none; margin-right: 0; padding-right: 0; }

    .wcr-body { padding: 36px 16px 60px; }
    .wcr-lead { padding: 18px 18px; margin-bottom: 36px; border-left-width: 4px; }
    .wcr-lead p { font-size: 15px; line-height: 1.7; }

    .wcr-sec-head { gap: 12px; margin-bottom: 20px; }
    .wcr-sec-num { font-size: 34px; }
    .wcr-sec-kicker { font-size: 10px; }
    .wcr-sec-title { font-size: clamp(18px, 5.5vw, 24px); }

    .wcr-body-text { font-size: 14px; line-height: 1.75; }
    .wcr-list li { font-size: 14px; padding: 9px 0 9px 22px; }
    .wcr-list li::before { top: 18px; width: 7px; height: 7px; }

    .wcr-timeline::before { left: 22px; }
    .wcr-tl-badge { width: 36px; height: 36px; font-size: 10px; border-width: 2px; }
    .wcr-tl-item { gap: 12px; margin-bottom: 20px; }
    .wcr-tl-content { padding: 14px 14px; }
    .wcr-tl-year { font-size: 10px; }
    .wcr-tl-name { font-size: 15px; margin-bottom: 6px; }
    .wcr-tl-desc { font-size: 13px; }

    .wcr-contrast-col { padding: 18px 16px; }
    .wcr-contrast-label { font-size: 10px; margin-bottom: 12px; }
    .wcr-contrast-col ul li { font-size: 13px; padding: 8px 0; }

    .wcr-writers-grid { grid-template-columns: 1fr; }
    .wcr-writer-card { padding: 18px 18px; }
    .wcr-writer-name { font-size: 15px; }
    .wcr-writer-desc { font-size: 13px; }

    .wcr-caste-pyramid { padding: 16px 12px; }
    .wcr-caste-row { gap: 8px; margin-bottom: 8px; }
    .wcr-caste-label { width: 70px; font-size: 10px; }
    .wcr-caste-bar { font-size: 11px; padding: 0 8px; height: 28px; }

    .wcr-quote-block { padding: 24px 18px 24px 22px; }
    .wcr-quote-mark { font-size: 56px; top: 14px; left: 14px; }
    .wcr-quote-text { font-size: 14px; }
    .wcr-quote-attr { font-size: 12px; }

    .wcr-movement-grid { grid-template-columns: 1fr; gap: 10px; }
    .wcr-movement-card { padding: 16px 16px; text-align: left; }
    .wcr-movement-icon { font-size: 24px; margin-bottom: 8px; }
    .wcr-movement-name { font-size: 14px; }
    .wcr-movement-founder { font-size: 10px; }
    .wcr-movement-desc { font-size: 13px; }

    .wcr-profile-block { padding: 22px 18px; gap: 16px; }
    .wcr-profile-initials { width: 56px; height: 56px; font-size: 18px; }
    .wcr-profile-name { font-size: 16px; }
    .wcr-profile-title { font-size: 10px; }
    .wcr-profile-points li { font-size: 13px; }

    .wcr-factor-row { grid-template-columns: 1fr; gap: 10px; }
    .wcr-factor-card { padding: 16px 18px; }
    .wcr-factor-head { font-size: 13px; }
    .wcr-factor-body { font-size: 13px; }

    .wcr-faq-title { font-size: clamp(18px, 5vw, 24px); }
    .wcr-faq-q { padding: 16px 4px; }
    .wcr-faq-q-text { font-size: 13px; }
    .wcr-faq-icon { font-size: 16px; }
    .wcr-faq-ans { font-size: 13px; line-height: 1.72; }
    .wcr-divider { margin: 32px 0; }
  }

`;

const faqs = [
  {
    q: "What was the condition of women in India two hundred years ago?",
    a: "Two hundred years ago, women's lives were drastically constrained. They faced severe social restrictions — they could not own property, receive education, or participate in public life. The most horrific practice was 'sati', where widows were expected (and often forced) to burn themselves alive on their husbands' funeral pyres. Those who did so were called 'satis', meaning 'virtuous women', glorifying their deaths as acts of devotion. Child marriage was widespread, and women were largely confined to domestic roles. Widows faced lifelong social stigma, could not remarry, and were often treated as burdens by their families. The lives of women from lower castes were even more difficult, as they faced both gender and caste discrimination simultaneously."
  },
  {
    q: "Who was Raja Ram Mohan Roy and what were his contributions to women's reform?",
    a: "Raja Ram Mohan Roy (1772–1833) was one of the greatest social reformers of 19th-century India, often called the 'Father of the Bengal Renaissance.' He founded the Brahmo Samaj in Calcutta in 1828. His most celebrated contribution was his campaign against the practice of sati. He argued, using Hindu scriptures themselves, that sati had no genuine religious basis and was simply a cruel tradition. With the support of the British Governor-General Lord William Bentinck, sati was legally banned in 1829 — a historic victory. Roy also strongly supported women's education, spoke out against child marriage, and advocated for widow remarriage. In religion, he opposed idol worship and meaningless rituals, promoting a rational, ethical form of faith. His work marked the beginning of a systematic effort to reform Indian society through reason, law, and education."
  },
  {
    q: "What role did Ishwarchandra Vidyasagar play in the reform movement?",
    a: "Ishwarchandra Vidyasagar (1820–1891) was a towering reformer and Sanskrit scholar. His most historic contribution was his campaign for widow remarriage. Using his deep knowledge of Sanskrit texts, he argued that the ancient scriptures themselves did not prohibit widows from remarrying — the practice was a later social imposition. He campaigned so effectively that the British government passed the Widow Remarriage Act in 1856, making widow remarriage legal for the first time. He also set up schools for girls in Calcutta, believing education was fundamental to improving women's lives. Vidyasagar was known for his fierce moral courage — he resigned from prestigious positions when asked to compromise his principles, and spent his own money to establish educational institutions. He remains one of the most admired figures of 19th-century Bengal."
  },
  {
    q: "Why were people afraid of girls going to school?",
    a: "When the first schools for girls began opening in the mid-19th century, many people — including parents and religious conservatives — were deeply afraid and opposed. Their fears were both practical and ideological. First, they worried that education would take girls away from the home and prevent them from performing what they saw as women's 'natural' duty — cooking, caring for children, and serving the family. Second, they believed that if girls went outside and mixed with others in a public school, they would be exposed to 'corrupting influences' — meaning they might think independently, question customs, or adopt 'improper' behaviour. Some feared that educated women would challenge male authority. In aristocratic Muslim families in North India, women learnt at home (reading the Quran in Arabic, taught by women tutors) — this was seen as acceptable, while public schooling was not. These attitudes gradually changed as reformers persistently argued for girls' education."
  },
  {
    q: "Who were the pioneering women reformers and writers who fought for change?",
    a: "Several extraordinary women led the fight for reform from within. Tarabai Shinde, educated at home in Poona, wrote a remarkable book called Stripurushtulna (A Comparison between Women and Men), one of the first feminist texts in Indian history, sharply criticising the social double standards between men and women. Pandita Ramabai was a great Sanskrit scholar who wrote a book exposing the miserable lives of upper-caste Hindu women, and founded a widows' home in Poona to give shelter to widows mistreated by their in-laws. Begum Rokeya Sakhawat Hossain was a pioneering Muslim woman who started schools for girls in Patna and Calcutta. The Begums of Bhopal promoted women's education and founded a primary school for girls at Aligarh. By the 1880s, Indian women were entering universities, training as doctors and teachers, writing books and magazines, founding schools and women's associations, and forming pressure groups to demand female suffrage."
  },
  {
    q: "What was the Brahmo Samaj and what did it stand for?",
    a: "The Brahmo Samaj was a religious and social reform organisation founded by Raja Ram Mohan Roy in Calcutta in 1828. It was one of the most influential reform movements in 19th-century India. The Brahmo Samaj rejected idol worship, meaningless rituals, caste discrimination, and untouchability. It believed in the unity of God, the equality of all human beings before God, and the power of reason to guide religious and social life. It actively campaigned against sati, supported widow remarriage, promoted women's education, and worked to remove caste prejudices. The Samaj attracted educated middle-class Bengalis and its influence spread across India. Leaders like Debendranath Tagore and Keshab Chandra Sen later built on Roy's foundations. The Brahmo Samaj's work helped spark a broader cultural and intellectual awakening across India known as the Bengal Renaissance."
  },
  {
    q: "What was the caste system in India and how did it affect people?",
    a: "The caste system was a hierarchical social order that divided Hindu society into hereditary groups with fixed occupations and unequal rights. At the top were Brahmins (priests and scholars), followed by Kshatriyas (warriors and rulers), then Vaishyas (traders and merchants), and at the bottom Shudras (peasants, artisans, weavers, and potters). Below all these were people considered 'untouchables' — those assigned the most degrading tasks. Untouchables faced extreme discrimination: they were not allowed to enter temples, draw water from common wells, sit in the same classroom as upper-caste children, or walk on certain roads. The caste system justified inequality as divinely ordained. It denied lower-caste people education, economic opportunity, and basic dignity. Lower-caste women faced a double burden — both gender and caste-based oppression. The system was so entrenched that it shaped every aspect of social, economic, and religious life in India."
  },
  {
    q: "Who was Jyotirao Phule and what was 'Gulamgiri'?",
    a: "Jyotirao Phule (1827–1890) was one of the most radical and powerful voices against caste oppression in 19th-century India. Born into a low-caste Mali (gardener) family in Maharashtra, he challenged Brahmanical superiority from a young age. He argued that the Brahman claim of being Aryans and therefore superior was false — and that the true indigenous people of India were those now called lower castes, who had been conquered and oppressed. In 1873, he wrote his most famous work, Gulamgiri (meaning 'Slavery'), in which he drew a direct parallel between the oppression of lower-caste people in India and the enslavement of Black people in America — dedicating the book to the American anti-slavery movement. He founded the Satyashodhak Samaj (Truth-Seeking Society) to propagate caste equality and worked to educate women and lower-caste children. Along with his wife Savitribai Phule, he opened one of the first schools for girls in India."
  },
  {
    q: "Who was Dr. B.R. Ambedkar and what was his temple entry movement?",
    a: "Dr. Bhimrao Ramji Ambedkar (1891–1956) was the most important leader of the anti-caste movement in the 20th century. Born into a Mahar family (considered untouchable), he experienced severe caste discrimination from childhood — forced to sit outside his classroom on the ground, denied water from upper-caste taps. Despite these obstacles, he became one of the most educated men of his time, earning doctorates from Columbia University and the London School of Economics. In 1927, he launched the historic temple entry movement, where he led lower-caste people to demand the right to enter Hindu temples from which they had been excluded — not primarily to pray, but to make society confront the reality of caste prejudice publicly. He founded journals, led protest marches, and ultimately converted to Buddhism in 1956, rejecting Hinduism as inherently unequal. As independent India's first Law Minister, he was the principal drafter of the Indian Constitution, which banned caste discrimination."
  },
  {
    q: "Who was Periyar and what was the Self Respect Movement?",
    a: "E.V. Ramaswamy Naicker (1879–1973), known as Periyar ('The Great One'), was a radical social reformer from Tamil Nadu. Born into a middle-class family, he initially joined the Indian National Congress but left it after witnessing caste discrimination within the movement. In 1925, he founded the Self Respect Movement, which called for the liberation of lower-caste and untouchable people from Brahmanical dominance, religious superstition, and caste-based hierarchy. Periyar was an outspoken critic of Hindu scriptures, arguing they were written to justify the oppression of lower castes and women. He encouraged untouchables and lower castes to reject all religion in order to achieve true social equality. He supported inter-caste marriages, women's rights, and rationalism. His forceful speeches, writings, and mass movements forced upper-caste nationalist leaders to confront and question their own prejudices, creating a major shift in the politics of Tamil Nadu and influencing the broader anti-caste movement across India."
  },
  {
    q: "What was the Non-Brahman Movement?",
    a: "The Non-Brahman Movement emerged in the early 20th century, primarily in Maharashtra and later in South India. It was led by non-Brahman castes who had gained some access to education, wealth, and political influence but found themselves still excluded from social and political power dominated by Brahmins. These leaders challenged the Brahmanical claim to intellectual and social superiority. In South India, the movement was particularly powerful under Periyar's leadership. The movement argued that caste hierarchy was not divinely ordained but was a system deliberately maintained by Brahmanical elites to preserve their privilege. The Non-Brahman Movement connected with broader anti-colonial politics, arguing that social liberation and political freedom must go together. Its legacy is visible today in the reservation policies and anti-caste political parties that continue to shape Indian democracy."
  },
  {
    q: "What were the Satnami, Matua, and other lower-caste reform movements?",
    a: "In the second half of the 19th century, reform movements arose from within lower-caste communities themselves — not led by upper-caste reformers, but by people who had experienced oppression directly. The Satnami movement in Central India was founded by Ghasidas, who came from a low caste. It organised people to improve their social status and reject caste humiliation. In eastern Bengal, Haridas Thakur's Matua sect worked among low-caste Chandala cultivators. Haridas questioned the authority of Brahmanical texts that justified the caste system, arguing that devotion to God required no caste hierarchy. In Kerala, Shri Narayan Guru, from the Ezhava caste, gave a powerful summary of his philosophy: 'One caste, one religion, one God for humankind.' These movements were significant because they showed that the oppressed were not passive victims — they had their own intellectual traditions, their own voices, and their own organised resistance."
  }
];

export default function Chapter9() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="wcr-root">

        {/* ── HERO ── */}
        <div className="wcr-hero">
          <div className="wcr-hero-bg-num">09</div>

          {/* decorative rings */}
          <div className="wcr-ring" style={{width:600,height:600,top:-200,left:-200}} />
          <div className="wcr-ring" style={{width:300,height:300,top:80,right:120}} />
          <div className="wcr-ring" style={{width:180,height:180,bottom:120,right:280}} />

          <div className="wcr-hero-inner">
            <div className="wcr-overline">Class VIII · History · Chapter 9</div>
            <h1 className="wcr-hero-title">
              Women,<br />
              <em>Caste</em> &<br />
              <span className="gold-em">Reform</span>
            </h1>
            <div className="wcr-hero-bar">
              <div className="wcr-hero-bar-item">
                <div className="wcr-bar-label">Chapter</div>
                <div className="wcr-bar-value">09</div>
              </div>
              <div className="wcr-hero-bar-item">
                <div className="wcr-bar-label">Subject</div>
                <div className="wcr-bar-value">History</div>
              </div>
              <div className="wcr-hero-bar-item">
                <div className="wcr-bar-label">Focus</div>
                <div className="wcr-bar-value">Social Reform</div>
              </div>
              <div className="wcr-hero-bar-item">
                <div className="wcr-bar-label">Board</div>
                <div className="wcr-bar-value">CBSE / NCERT</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="wcr-body">

          {/* LEAD */}
          <div className="wcr-lead">
            <p>
              Two hundred years ago, Indian society was shaped by <strong>deep inequalities</strong> — women were confined to domestic life, widows were glorified for burning themselves on funeral pyres, and an entire class of people were denied dignity because of the caste they were born into.
            </p>
            <p>
              The 19th and early 20th centuries saw a powerful wave of reform — from <strong>Brahmo Samaj to Satyashodhak Samaj</strong>, from Vidyasagar's widow remarriage campaign to Ambedkar's temple entry movement. This chapter traces how reformers, both upper and lower caste, both men and women, fought to transform Indian society.
            </p>
          </div>

          {/* ── 1. The World Before Reform ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">1</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">Context</div>
              <h2 className="wcr-sec-title">The World <span>Before</span> Reform</h2>
            </div>
          </div>

          <p className="wcr-body-text">
            Before the reform movements began, Indian society was rigidly hierarchical. Women had almost no rights, and caste determined every aspect of a person's life — their occupation, their diet, their right to education, even their right to walk on certain roads.
          </p>

          <div className="wcr-caste-pyramid">
            <div className="wcr-caste-tag">The Traditional Caste Hierarchy</div>
            <div className="wcr-caste-row">
              <div className="wcr-caste-label">Highest status</div>
              <div className="wcr-caste-bar-wrap">
                <div className="wcr-caste-bar" style={{background:'#2a1a6e', width:'40%'}}>Brahmins — Priests &amp; Scholars</div>
              </div>
            </div>
            <div className="wcr-caste-row">
              <div className="wcr-caste-label"></div>
              <div className="wcr-caste-bar-wrap">
                <div className="wcr-caste-bar" style={{background:'#8b2a3a', width:'58%'}}>Kshatriyas — Warriors &amp; Rulers</div>
              </div>
            </div>
            <div className="wcr-caste-row">
              <div className="wcr-caste-label"></div>
              <div className="wcr-caste-bar-wrap">
                <div className="wcr-caste-bar" style={{background:'#a0441a', width:'75%'}}>Vaishyas — Traders &amp; Moneylenders</div>
              </div>
            </div>
            <div className="wcr-caste-row">
              <div className="wcr-caste-label"></div>
              <div className="wcr-caste-bar-wrap">
                <div className="wcr-caste-bar" style={{background:'#b8860b', width:'90%'}}>Shudras — Peasants, Artisans, Weavers</div>
              </div>
            </div>
            <div className="wcr-caste-row">
              <div className="wcr-caste-label">Excluded entirely</div>
              <div className="wcr-caste-bar-wrap">
                <div className="wcr-caste-bar" style={{background:'#4a4a4a', width:'100%'}}>Untouchables — Assigned most degrading work</div>
              </div>
            </div>
          </div>

          <p className="wcr-body-text">
            Women across all castes faced severe restrictions. The most horrifying practice was <strong>sati</strong> — widows burning themselves on their husband's funeral pyre. Society called women who did this 'satis' (virtuous), glorifying death as devotion. The attitude towards these customs began changing in the early 19th century, driven by reformers, new communication, Western education, and growing debate.
          </p>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 2. Working Towards Change ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">2</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">The Reform Movement Begins</div>
              <h2 className="wcr-sec-title">Working Towards <span className="gold">Change</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            The reform movement of the 19th century emerged because several forces aligned: the spread of Western education and print media, growing contact with European ideas of reason and rights, and crucially, Indian thinkers who were willing to question their own traditions.
          </p>

          <div className="wcr-factor-row">
            <div className="wcr-factor-card active">
              <div className="wcr-factor-head">New Forms of Communication</div>
              <div className="wcr-factor-body">The printing press and newspapers created a public sphere where reformers could debate, publish their arguments, and reach educated audiences across India.</div>
            </div>
            <div className="wcr-factor-card terra">
              <div className="wcr-factor-head">Western Education</div>
              <div className="wcr-factor-body">Exposure to European Enlightenment ideas — reason, equality, individual rights — gave reformers new intellectual tools to challenge old orthodoxies.</div>
            </div>
            <div className="wcr-factor-card gold">
              <div className="wcr-factor-head">British Legal System</div>
              <div className="wcr-factor-body">Reformers like Roy strategically used British officials and laws to push through changes — the ban on sati (1829) and the Widow Remarriage Act (1856) were both passed by the colonial government.</div>
            </div>
            <div className="wcr-factor-card teal">
              <div className="wcr-factor-head">Reform Organisations</div>
              <div className="wcr-factor-body">Institutions like the Brahmo Samaj, Arya Samaj, Prarthana Samaj, and Satyashodhak Samaj organised reform efforts, creating communities of like-minded people.</div>
            </div>
          </div>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 3. Changing the Lives of Widows ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">3</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">Key Reformers</div>
              <h2 className="wcr-sec-title">Changing the Lives <span className="terra">of Widows</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            The campaign against sati and for widow remarriage was one of the central battles of the 19th-century reform movement. Three figures stand out as champions of this cause.
          </p>

          <div className="wcr-timeline">
            <div className="wcr-tl-item">
              <div className="wcr-tl-badge">RRR</div>
              <div className="wcr-tl-content">
                <div className="wcr-tl-year">Founded Brahmo Samaj · 1828 · Sati Banned 1829</div>
                <div className="wcr-tl-name">Raja Ram Mohan Roy</div>
                <div className="wcr-tl-desc">Founded the Brahmo Samaj in Calcutta. Led the campaign against sati using both religious arguments and political pressure. With British support, sati was banned in 1829. Also supported women's education and opposed idol worship and meaningless rituals.</div>
              </div>
            </div>
            <div className="wcr-tl-item">
              <div className="wcr-tl-badge terra">IV</div>
              <div className="wcr-tl-content terra">
                <div className="wcr-tl-year">Widow Remarriage Act · 1856</div>
                <div className="wcr-tl-name">Ishwarchandra Vidyasagar</div>
                <div className="wcr-tl-desc">Used ancient Sanskrit texts to prove that widow remarriage was permissible. His persistent campaign led to the Widow Remarriage Act of 1856, making widow remarriage legal for the first time. Also set up schools for girls in Calcutta.</div>
              </div>
            </div>
            <div className="wcr-tl-item">
              <div className="wcr-tl-badge gold">SDS</div>
              <div className="wcr-tl-content gold">
                <div className="wcr-tl-year">Founded Arya Samaj · 1875</div>
                <div className="wcr-tl-name">Swami Dayanand Saraswati</div>
                <div className="wcr-tl-desc">Founded the Arya Samaj in 1875. Like Roy and Vidyasagar, he opposed child marriage and supported widow remarriage. The Arya Samaj became a major vehicle for social and religious reform across North India.</div>
              </div>
            </div>
          </div>

          <div className="wcr-quote-block">
            <div className="wcr-quote-mark">"</div>
            <div className="wcr-quote-text">
              Raja Ram Mohan Roy set up the Brahmo Samaj to fight social evils. He began a campaign against sati. In 1829, sati was banned — the first major legal victory for women's rights in modern India.
            </div>
            <div className="wcr-quote-attr">— From Chapter 9, Our Pasts III</div>
          </div>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 4. Girls Begin Going to School ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">4</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">Education for Girls</div>
              <h2 className="wcr-sec-title">Girls Begin Going <span className="teal">to School</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            Reformers across India recognised that education was the foundation of women's liberation. Schools for girls began opening in the mid-19th century — but not without fierce opposition.
          </p>

          <div className="wcr-contrast">
            <div className="wcr-contrast-col">
              <div className="wcr-contrast-label">✓ The Reformers' Vision</div>
              <ul>
                <li><strong>Education as liberation:</strong> Reformers argued that educated women could think for themselves, support themselves economically, and challenge social injustice</li>
                <li><strong>Schools in Bombay &amp; Calcutta:</strong> Reformers in Bombay and Vidyasagar in Calcutta set up the first girls' schools, facing enormous social resistance</li>
                <li><strong>Muslim women's education:</strong> Begums of Bhopal and Begum Rokeya Sakhawat Hossain worked specifically to promote education among Muslim women and girls</li>
                <li><strong>University entry by 1880s:</strong> By the 1880s, Indian women were entering universities, training as doctors and teachers</li>
              </ul>
            </div>
            <div className="wcr-contrast-col dark">
              <div className="wcr-contrast-label">✗ The Opposition's Fears</div>
              <ul>
                <li><strong>Neglect of domestic duties:</strong> Many feared education would take girls away from household responsibilities — cooking, childcare, caring for elders</li>
                <li><strong>Corrupting influence:</strong> People believed public schools would expose girls to 'immoral' outside influences, making them unsuitable wives and daughters</li>
                <li><strong>Challenging male authority:</strong> An educated woman who could think critically was seen as a threat to the patriarchal family structure</li>
                <li><strong>Orthodox resistance:</strong> Orthodox Hindu and Muslim traditionalists feared women adopting Western culture, which they said would erode family values</li>
              </ul>
            </div>
          </div>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 5. Women Write About Women ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">5</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">Women's Own Voices</div>
              <h2 className="wcr-sec-title">Women Write <span>About Women</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            Perhaps the most significant development of the late 19th and early 20th century was that women stopped being merely the subjects of reform — they became its agents. They wrote books, founded schools, set up associations, and demanded legal rights.
          </p>

          <div className="wcr-writers-grid">
            <div className="wcr-writer-card">
              <div className="wcr-writer-icon">✍️</div>
              <div className="wcr-writer-name">Tarabai Shinde</div>
              <div className="wcr-writer-role">Author · Feminist Thinker · Poona</div>
              <div className="wcr-writer-desc">Educated at home in Poona. Wrote Stripurushtulna (A Comparison between Women and Men) — one of India's earliest feminist texts, sharply criticising the double standards society imposed on women versus men.</div>
            </div>
            <div className="wcr-writer-card terra">
              <div className="wcr-writer-icon">📚</div>
              <div className="wcr-writer-name">Pandita Ramabai</div>
              <div className="wcr-writer-role">Sanskrit Scholar · Founder · Poona</div>
              <div className="wcr-writer-desc">A remarkable Sanskrit scholar who wrote a book exposing the miserable lives of upper-caste Hindu women. Founded a widows' home in Poona to shelter widows mistreated by their in-laws.</div>
            </div>
            <div className="wcr-writer-card teal">
              <div className="wcr-writer-icon">🏫</div>
              <div className="wcr-writer-name">Begum Rokeya Sakhawat Hossain</div>
              <div className="wcr-writer-role">Educator · Reformer · Patna &amp; Calcutta</div>
              <div className="wcr-writer-desc">Started schools for Muslim girls in Patna and Calcutta. A pioneering voice for Muslim women's education and social equality in colonial India.</div>
            </div>
            <div className="wcr-writer-card gold">
              <div className="wcr-writer-icon">👑</div>
              <div className="wcr-writer-name">Begums of Bhopal</div>
              <div className="wcr-writer-role">Royal Patrons of Women's Education</div>
              <div className="wcr-writer-desc">The ruling Begums of Bhopal were champions of women's education. They founded a primary school for girls at Aligarh and promoted female literacy among Muslim women across North India.</div>
            </div>
          </div>

          <ul className="wcr-list">
            <li><strong>Economic independence:</strong> Women were gradually trained to support themselves economically — a radical idea at the time that went beyond mere education</li>
            <li><strong>Political pressure groups:</strong> Women formed organisations to push for legal changes, including female suffrage — the right to vote</li>
            <li><strong>Political support:</strong> Leaders like Jawaharlal Nehru and Subhash Chandra Bose explicitly supported demands for greater equality and freedom for women</li>
            <li><strong>Books and magazines:</strong> Women wrote and published prolifically — books, magazines, and journals became vehicles for spreading reform ideas</li>
          </ul>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 6. Caste and Social Reform ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">6</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">The Other Battle</div>
              <h2 className="wcr-sec-title">Caste and <span className="terra">Social Reform</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            Alongside the campaign for women's rights, 19th-century reformers took on another deep injustice: the caste system. Organisations were formed, laws were invoked, and new opportunities in cities and the army gave lower-caste people some escape from the daily humiliation imposed by upper-caste landlords.
          </p>

          <div className="wcr-movement-grid">
            <div className="wcr-movement-card">
              <div className="wcr-movement-icon">🙏</div>
              <div className="wcr-movement-name">Paramhans Mandali</div>
              <div className="wcr-movement-founder">Founded 1840, Bombay</div>
              <div className="wcr-movement-desc">Worked for the abolition of caste. Members broke caste rules secretly at first, then more openly as the movement grew.</div>
            </div>
            <div className="wcr-movement-card terra">
              <div className="wcr-movement-icon">✨</div>
              <div className="wcr-movement-name">Prarthana Samaj</div>
              <div className="wcr-movement-founder">Bhakti Tradition · Bombay</div>
              <div className="wcr-movement-desc">Adhered to the Bhakti tradition that believed in the spiritual equality of all castes — that devotion to God required no caste hierarchy.</div>
            </div>
            <div className="wcr-movement-card teal">
              <div className="wcr-movement-icon">⚖️</div>
              <div className="wcr-movement-name">Satyashodhak Samaj</div>
              <div className="wcr-movement-founder">Jyotirao Phule, 1873</div>
              <div className="wcr-movement-desc">Founded by Phule to propagate caste equality. Organised Shudras and Ati-Shudras to challenge Brahmanical dominance.</div>
            </div>
            <div className="wcr-movement-card gold">
              <div className="wcr-movement-icon">🏛️</div>
              <div className="wcr-movement-name">City Jobs &amp; Army</div>
              <div className="wcr-movement-founder">New Opportunities</div>
              <div className="wcr-movement-desc">Factory jobs and the army (e.g. Mahar Regiment) gave lower-caste people a chance to escape the daily control and humiliation of upper-caste landlords.</div>
            </div>
            <div className="wcr-movement-card indigo">
              <div className="wcr-movement-icon">✝️</div>
              <div className="wcr-movement-name">Missionary Schools</div>
              <div className="wcr-movement-founder">Christian Missionaries</div>
              <div className="wcr-movement-desc">Set up schools for tribal groups and lower-caste children, providing education to those denied it by the caste system.</div>
            </div>
            <div className="wcr-movement-card sage">
              <div className="wcr-movement-icon">📖</div>
              <div className="wcr-movement-name">Lower-Caste Movements</div>
              <div className="wcr-movement-founder">From Within</div>
              <div className="wcr-movement-desc">By the second half of the 19th century, people from lower castes themselves began organising for social equality and justice — not waiting for upper-caste reformers.</div>
            </div>
          </div>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 7. Demands for Equality – Phule & Gulamgiri ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">7</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">Jyotirao Phule</div>
              <h2 className="wcr-sec-title">Gulamgiri — <span className="gold">Slavery</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            The most radical challenge to the caste system in the 19th century came from Jyotirao Phule — not a Brahman reformer arguing for adjustment within the system, but a lower-caste thinker demanding its complete dismantling.
          </p>

          <ul className="wcr-list">
            <li><strong>Born 1827, low-caste Mali family:</strong> Phule experienced caste discrimination firsthand. He became one of the most powerful voices of the 19th century precisely because he spoke from lived experience, not theory.</li>
            <li><strong>Attacked Brahmanical claims:</strong> Phule rejected the Brahmin claim that they were superior Aryans. He argued this was a mythology of conquest — the Brahmans were descendants of invaders who had subjugated the indigenous people of India.</li>
            <li><strong>Land belongs to indigenous people:</strong> According to Phule, upper castes had no legitimate right to their land and power — these belonged to the indigenous people now called lower castes.</li>
            <li><strong>Shudras and Ati-Shudras must unite:</strong> Phule called on Shudras and Ati-Shudras (untouchables) to organise together to challenge caste discrimination — a radical call for lower-caste solidarity.</li>
            <li><strong>Founded Satyashodhak Samaj (1873):</strong> The Truth-Seeking Society worked to propagate caste equality, ran schools for girls, and organised lower-caste communities.</li>
            <li><strong>Wrote Gulamgiri (1873):</strong> In this landmark book (meaning 'Slavery'), Phule drew a powerful parallel between the oppression of lower castes in India and the enslavement of Black people in America — dedicating it to the American anti-slavery movement.</li>
            <li><strong>20th-century heirs:</strong> The movement Phule began was continued by Dr. B.R. Ambedkar and E.V. Ramaswamy Naicker (Periyar) in the 20th century.</li>
          </ul>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 8. Ambedkar & Non-Brahman Movement ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">8</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">20th Century Leaders</div>
              <h2 className="wcr-sec-title">Ambedkar &amp; <span className="indigo">Periyar</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            In the 20th century, the anti-caste movement gained two of its most formidable leaders — Dr. B.R. Ambedkar and E.V. Ramaswamy Naicker (Periyar). Between them, they transformed the political landscape of India.
          </p>

          <div className="wcr-profile-block">
            <div className="wcr-profile-initials">BRA</div>
            <div>
              <div className="wcr-profile-name">Dr. B.R. Ambedkar</div>
              <div className="wcr-profile-title">Jurist · Constitutional Architect · Anti-Caste Leader</div>
              <ul className="wcr-profile-points">
                <li><strong>Mahar family:</strong> Born into an untouchable family — as a child, forced to sit outside his classroom on the ground, denied water from upper-caste taps</li>
                <li><strong>Highest education:</strong> Earned doctorates from Columbia University and London School of Economics — one of the most educated men of his time</li>
                <li><strong>1919:</strong> On returning from the USA, he wrote powerfully about upper-caste power in contemporary Indian society</li>
                <li><strong>1927 — Temple Entry Movement:</strong> Led marches to demand lower-caste people's right to enter Hindu temples — forcing society to confront caste prejudice publicly</li>
                <li><strong>Principal drafter of the Indian Constitution:</strong> As independent India's first Law Minister, he ensured the Constitution banned caste discrimination</li>
                <li><strong>Converted to Buddhism (1956):</strong> Rejected Hinduism as inherently unequal, leading hundreds of thousands of followers in mass conversion</li>
              </ul>
            </div>
          </div>

          <p className="wcr-body-text">
            E.V. Ramaswamy Naicker, known as <strong>Periyar</strong>, led the Non-Brahman Movement and founded the Self Respect Movement in 1925. He was an outspoken critic of Hindu scriptures, which he argued were written to justify caste and gender oppression. He inspired untouchables to free themselves from all religion to achieve social equality — a radical position in a deeply religious society. His forceful speeches and writings led even upper-caste nationalist leaders to rethink their own prejudices.
          </p>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── 9. Lower-Caste Movements ── */}
          <div className="wcr-sec-head">
            <div className="wcr-sec-num">9</div>
            <div className="wcr-sec-title-wrap">
              <div className="wcr-sec-kicker">Grassroots Resistance</div>
              <h2 className="wcr-sec-title">Voices From <span className="sage">Below</span></h2>
            </div>
          </div>

          <p className="wcr-body-text">
            Not all reform came from the top. Some of the most powerful challenges to the caste system arose from within lower-caste communities themselves — movements led by people who had suffered oppression and organised their own liberation.
          </p>

          <div className="wcr-timeline">
            <div className="wcr-tl-item">
              <div className="wcr-tl-badge" style={{background:'var(--sage)', boxShadow:'0 0 0 2px var(--sage)'}}>GH</div>
              <div className="wcr-tl-content" style={{borderLeftColor:'var(--sage)'}}>
                <div className="wcr-tl-year" style={{color:'var(--sage)'}}>Central India — Satnami Movement</div>
                <div className="wcr-tl-name">Ghasidas &amp; the Satnami Movement</div>
                <div className="wcr-tl-desc">Ghasidas came from a low caste in Central India. He founded the Satnami movement, organising his people to assert their dignity and improve their social status against upper-caste discrimination.</div>
              </div>
            </div>
            <div className="wcr-tl-item">
              <div className="wcr-tl-badge terra">HT</div>
              <div className="wcr-tl-content terra">
                <div className="wcr-tl-year">Eastern Bengal — Matua Sect</div>
                <div className="wcr-tl-name">Haridas Thakur &amp; the Matua Sect</div>
                <div className="wcr-tl-desc">Haridas worked among low-caste Chandala cultivators in eastern Bengal. He questioned Brahmanical texts that were used to justify the caste system — a direct intellectual challenge to the religious foundation of caste.</div>
              </div>
            </div>
            <div className="wcr-tl-item">
              <div className="wcr-tl-badge teal">SNG</div>
              <div className="wcr-tl-content teal">
                <div className="wcr-tl-year">Kerala — Ezhava Community</div>
                <div className="wcr-tl-name">Shri Narayan Guru</div>
                <div className="wcr-tl-desc">From the Ezhava caste in Kerala, Shri Narayan Guru gave a profound summary of his vision: "One caste, one religion, one God for humankind." His philosophy of universal human dignity inspired generations.</div>
              </div>
            </div>
          </div>

          <div className="wcr-divider"><div className="wcr-divider-mark" /></div>

          {/* ── FAQ ── */}
          <div className="wcr-faq-header">
            <span className="wcr-faq-kicker">Exam Preparation</span>
          </div>
          <h2 className="wcr-faq-title">Frequently Asked Questions</h2>

          {faqs.map((faq, i) => (
            <div className={`wcr-faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button className="wcr-faq-q" onClick={() => toggle(i)}>
                <span className="wcr-faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="wcr-faq-icon">{openIndex === i ? "▴" : "▾"}</span>
              </button>
              <div className={`wcr-faq-ans${openIndex === i ? " visible" : ""}`}>{faq.a}</div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
