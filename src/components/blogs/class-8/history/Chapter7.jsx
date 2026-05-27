import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:     #0a0806;
    --ink2:    #1a1410;
    --muted:   #706050;
    --paper:   #faf7f2;
    --paper2:  #f0ebe0;
    --amber:   #c47a10;
    --amber2:  #9a5e08;
    --steel:   #2a3a50;
    --steel2:  #1a2838;
    --rust:    #8b3a1a;
    --rust2:   #6b2810;
    --gold:    #b8860b;
    --gold2:   #8b6508;
    --teal:    #0a6060;
    --sage:    #2a5a3a;
    --rule:    #d8cfc0;
    --cream:   #f4ede0;
    --cream2:  #e8ddc8;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .wif-root {
    font-family: 'Inter', sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ─── HERO ─── */
  .wif-hero {
    background: linear-gradient(158deg, #080604 0%, #180e06 48%, #0c0a08 100%);
    min-height: 88vh;
    display: flex; align-items: flex-end;
    position: relative; overflow: hidden;
    padding: 0 0 64px;
  }
  .wif-hero-bg-num {
    position: absolute; bottom: -40px; right: -20px;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(240px, 38vw, 520px); font-weight: 900; line-height: 1;
    color: rgba(255,255,255,0.022); letter-spacing: -0.04em;
    user-select: none; pointer-events: none;
  }
  .wif-hero::before {
    content: ''; position: absolute;
    top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #6b2810, #c47a10, #b8860b, #c47a10, #6b2810);
  }
  .wif-ring {
    position: absolute; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.018); pointer-events: none;
  }
  .wif-hero-inner {
    max-width: 900px; width: 100%;
    margin: 0 auto; padding: 0 32px;
    position: relative; z-index: 1;
  }
  .wif-overline {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: #e0a060; margin-bottom: 24px;
    display: flex; align-items: center; gap: 14px;
  }
  .wif-overline::before, .wif-overline::after {
    content: ''; flex: 0 0 40px; height: 1px; background: #e0a060;
  }
  .wif-hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(38px, 7vw, 80px); font-weight: 900;
    color: #fff; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px;
  }
  .wif-hero-title em        { font-style: normal; color: #e0a060; }
  .wif-hero-title .gold-em  { color: #e8c040; }
  .wif-hero-title .steel-em { color: #90b0d0; }
  .wif-hero-bar {
    display: flex; flex-wrap: wrap; gap: 0;
    border-top: 1px solid rgba(255,255,255,0.12);
    padding-top: 24px; margin-top: 8px;
  }
  .wif-hero-bar-item {
    flex: 1 1 150px; padding: 0 24px 0 0;
    border-right: 1px solid rgba(255,255,255,0.1); margin-right: 24px;
  }
  .wif-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .wif-bar-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: rgba(255,255,255,0.35); margin-bottom: 5px;
  }
  .wif-bar-value {
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600;
    color: rgba(255,255,255,0.75);
  }

  /* ─── BODY ─── */
  .wif-body { max-width: 900px; margin: 0 auto; padding: 0 32px 96px; }

  /* ══════════════════════════════════════
     OPENING STATEMENT — full-bleed number + text
  ══════════════════════════════════════ */
  .wif-opener {
    padding: 64px 0 56px;
    border-bottom: 2px solid var(--rule);
    margin-bottom: 64px;
  }
  .wif-opener-num {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(80px, 16vw, 160px); font-weight: 900;
    line-height: 0.85; letter-spacing: -0.04em;
    color: var(--cream2); margin-bottom: 16px;
    user-select: none;
  }
  .wif-opener-text {
    font-family: 'Poppins', sans-serif; font-size: clamp(17px, 2.4vw, 22px); font-weight: 500;
    color: var(--ink2); line-height: 1.72; max-width: 680px;
  }
  .wif-opener-text strong { color: var(--amber); font-weight: 700; }

  /* ══════════════════════════════════════
     MARQUEE WORD ROW — textile names
  ══════════════════════════════════════ */
  .wif-word-row {
    display: flex; flex-wrap: wrap; gap: 0;
    border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
    margin-bottom: 56px; overflow: hidden;
  }
  .wif-word-item {
    padding: 14px 22px; border-right: 1px solid var(--rule);
    display: flex; flex-direction: column; gap: 3px;
  }
  .wif-word-item:last-child { border-right: none; }
  .wif-word-hindi {
    font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 900;
    color: var(--amber2); letter-spacing: -0.01em;
  }
  .wif-word-english {
    font-family: 'Inter', sans-serif; font-size: 12px; color: var(--muted);
    letter-spacing: 0.04em;
  }
  .wif-word-place {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: var(--rule);
  }

  /* ══════════════════════════════════════
     SECTION TITLE — left number, right heading, horizontal
  ══════════════════════════════════════ */
  .wif-sec {
    display: flex; align-items: flex-start; gap: 28px;
    margin-bottom: 28px;
  }
  .wif-sec-n {
    font-family: 'Montserrat', sans-serif; font-size: 72px; font-weight: 900;
    line-height: 1; color: var(--cream2); flex-shrink: 0;
    letter-spacing: -0.04em; margin-top: -6px;
  }
  .wif-sec-right {}
  .wif-sec-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.2em;
    color: var(--amber); margin-bottom: 6px;
  }
  .wif-sec-title {
    font-family: 'Montserrat', sans-serif; font-size: clamp(22px, 3.5vw, 32px); font-weight: 900;
    color: var(--ink); line-height: 1.1; letter-spacing: -0.02em;
  }
  .wif-sec-title .hl  { color: var(--amber); }
  .wif-sec-title .hl2 { color: var(--steel); }
  .wif-sec-title .hl3 { color: var(--rust); }
  .wif-sec-title .hl4 { color: var(--gold); }

  /* ══════════════════════════════════════
     BODY PARAGRAPH
  ══════════════════════════════════════ */
  .wif-p {
    font-family: 'Inter', sans-serif; font-size: 17px;
    color: var(--ink2); line-height: 1.84; margin-bottom: 24px;
  }
  .wif-p strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--ink); }

  /* ══════════════════════════════════════
     COMMUNITY PILL ROW — who were the weavers
  ══════════════════════════════════════ */
  .wif-pills {
    display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 40px;
  }
  .wif-pill {
    padding: 10px 20px; border: 1.5px solid var(--rule);
    background: var(--cream);
  }
  .wif-pill-name {
    font-family: 'Montserrat', sans-serif; font-size: 15px; font-weight: 900;
    color: var(--ink); margin-bottom: 2px;
  }
  .wif-pill-region {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.14em; color: var(--amber);
  }

  /* ══════════════════════════════════════
     FULL-WIDTH DARK PULL — key fact
  ══════════════════════════════════════ */
  .wif-dark-pull {
    background: var(--ink); padding: 36px 40px;
    margin: 40px 0; position: relative; overflow: hidden;
  }
  .wif-dark-pull::after {
    content: attr(data-year);
    position: absolute; right: -10px; top: -16px;
    font-family: 'Montserrat', sans-serif; font-size: 130px; font-weight: 900;
    color: rgba(255,255,255,0.04); line-height: 1; pointer-events: none;
  }
  .wif-dark-pull-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.2em;
    color: rgba(255,255,255,0.35); margin-bottom: 10px;
  }
  .wif-dark-pull-text {
    font-family: 'Montserrat', sans-serif; font-size: clamp(17px, 2.6vw, 24px); font-weight: 800;
    color: #fff; line-height: 1.4; letter-spacing: -0.01em;
    position: relative; z-index: 1;
  }
  .wif-dark-pull-text span { color: #e0a060; }

  /* ══════════════════════════════════════
     HORIZONTAL FACT FENCE
     each fact = left number badge + right text
  ══════════════════════════════════════ */
  .wif-fence { margin-bottom: 48px; }
  .wif-fence-row {
    display: flex; gap: 0; border-bottom: 1px solid var(--rule);
  }
  .wif-fence-row:first-child { border-top: 1px solid var(--rule); }
  .wif-fence-num {
    flex: 0 0 56px; padding: 16px 12px;
    font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900;
    color: var(--cream2); border-right: 2px solid var(--amber);
    display: flex; align-items: flex-start; justify-content: flex-end;
    line-height: 1.3;
  }
  .wif-fence-text {
    padding: 16px 20px; flex: 1;
    font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.76;
  }
  .wif-fence-text strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--amber2); }

  /* ══════════════════════════════════════
     INVENTION CARDS — machines that killed Indian textiles
  ══════════════════════════════════════ */
  .wif-inventions {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 3px; background: var(--rule); margin-bottom: 48px;
  }
  .wif-inv-card { background: var(--steel2); padding: 28px 26px; position: relative; overflow: hidden; }
  .wif-inv-card::before {
    content: attr(data-year);
    position: absolute; right: 10px; bottom: -8px;
    font-family: 'Montserrat', sans-serif; font-size: 64px; font-weight: 900;
    color: rgba(255,255,255,0.06); line-height: 1; pointer-events: none;
  }
  .wif-inv-icon { font-size: 32px; margin-bottom: 14px; }
  .wif-inv-name {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: #fff; margin-bottom: 4px; letter-spacing: -0.01em;
  }
  .wif-inv-by {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.14em; color: rgba(255,255,255,0.35);
    margin-bottom: 14px;
  }
  .wif-inv-desc {
    font-family: 'Inter', sans-serif; font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.72;
  }
  .wif-inv-desc strong { color: #e0a060; font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* ══════════════════════════════════════
     WEAVING CENTRES — horizontal tag strip
  ══════════════════════════════════════ */
  .wif-centres {
    display: flex; flex-wrap: wrap; gap: 0;
    border: 1.5px solid var(--rule); margin-bottom: 48px;
  }
  .wif-centre {
    flex: 1 1 160px; padding: 18px 20px;
    border-right: 1.5px solid var(--rule);
    position: relative;
  }
  .wif-centre:last-child { border-right: none; }
  .wif-centre::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--amber);
  }
  .wif-centre-name {
    font-family: 'Montserrat', sans-serif; font-size: 15px; font-weight: 900;
    color: var(--ink); margin-bottom: 4px;
  }
  .wif-centre-product {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
    color: var(--amber2); letter-spacing: 0.04em;
  }

  /* ══════════════════════════════════════
     FALL TIMELINE — split left/right
  ══════════════════════════════════════ */
  .wif-fall { margin-bottom: 56px; }
  .wif-fall-event {
    display: grid; grid-template-columns: 100px 1fr;
    gap: 0; margin-bottom: 0;
    border-bottom: 1px solid var(--rule);
  }
  .wif-fall-event:first-child { border-top: 1px solid var(--rule); }
  .wif-fall-year-col {
    padding: 20px 16px 20px 0;
    border-right: 3px solid var(--rust);
    display: flex; align-items: flex-start; justify-content: flex-end;
  }
  .wif-fall-year {
    font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 900;
    color: var(--rust); text-align: right; line-height: 1.4;
  }
  .wif-fall-body { padding: 20px 0 20px 22px; }
  .wif-fall-head {
    font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700;
    color: var(--ink); margin-bottom: 5px;
  }
  .wif-fall-desc {
    font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.72;
  }
  .wif-fall-desc strong { color: var(--rust); font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* ══════════════════════════════════════
     KHADI — full bleed amber block
  ══════════════════════════════════════ */
  .wif-khadi {
    background: var(--amber); padding: 32px 36px;
    margin-bottom: 56px; position: relative; overflow: hidden;
  }
  .wif-khadi::before {
    content: '✦'; position: absolute; right: 20px; top: 8px;
    font-size: 110px; color: rgba(255,255,255,0.1); line-height: 1;
    pointer-events: none;
  }
  .wif-khadi-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.2em;
    color: rgba(255,255,255,0.55); margin-bottom: 8px; position: relative; z-index: 1;
  }
  .wif-khadi-head {
    font-family: 'Montserrat', sans-serif; font-size: clamp(18px, 2.8vw, 26px); font-weight: 900;
    color: #fff; margin-bottom: 12px; position: relative; z-index: 1;
  }
  .wif-khadi-body {
    font-family: 'Inter', sans-serif; font-size: 16px;
    color: rgba(255,255,255,0.85); line-height: 1.78; position: relative; z-index: 1;
  }
  .wif-khadi-body strong { color: #fff; font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* ══════════════════════════════════════
     WOOTZ STEEL — dark teal accent block
  ══════════════════════════════════════ */
  .wif-wootz {
    display: grid; grid-template-columns: 64px 1fr;
    gap: 0; margin-bottom: 48px;
    border-left: 6px solid var(--steel);
    background: #f0f4f8;
  }
  .wif-wootz-left {
    background: var(--steel); display: flex; align-items: center; justify-content: center;
    writing-mode: vertical-rl; text-orientation: mixed;
    font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 900;
    color: rgba(255,255,255,0.5); letter-spacing: 0.2em; text-transform: uppercase;
    padding: 20px 0;
  }
  .wif-wootz-right { padding: 28px 28px; }
  .wif-wootz-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.2em; color: var(--steel); margin-bottom: 8px;
  }
  .wif-wootz-head {
    font-family: 'Montserrat', sans-serif; font-size: clamp(18px, 2.6vw, 24px); font-weight: 900;
    color: var(--steel2); margin-bottom: 14px; letter-spacing: -0.01em;
  }
  .wif-wootz-right ul { padding-left: 18px; }
  .wif-wootz-right ul li {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.74;
    color: var(--ink2); margin-bottom: 8px;
  }
  .wif-wootz-right ul li strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--steel); }

  /* ══════════════════════════════════════
     TISCO — person + milestone row
  ══════════════════════════════════════ */
  .wif-tisco-block {
    background: var(--ink2); padding: 36px;
    margin-bottom: 48px; position: relative; overflow: hidden;
  }
  .wif-tisco-block::before {
    content: 'TISCO'; position: absolute; right: -10px; bottom: -12px;
    font-family: 'Montserrat', sans-serif; font-size: 80px; font-weight: 900;
    color: rgba(255,255,255,0.04); line-height: 1; pointer-events: none;
  }
  .wif-tisco-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.35);
    margin-bottom: 8px; position: relative; z-index: 1;
  }
  .wif-tisco-head {
    font-family: 'Montserrat', sans-serif; font-size: clamp(20px, 3vw, 28px); font-weight: 900;
    color: #fff; margin-bottom: 20px; position: relative; z-index: 1;
  }
  .wif-tisco-head span { color: #90b0d0; }
  .wif-tisco-people {
    display: flex; flex-wrap: wrap; gap: 14px;
    margin-bottom: 24px; position: relative; z-index: 1;
  }
  .wif-tisco-person {
    background: rgba(255,255,255,0.07); padding: 14px 18px;
    border-left: 3px solid #90b0d0; flex: 1 1 200px;
  }
  .wif-tisco-person-name {
    font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700;
    color: #fff; margin-bottom: 3px;
  }
  .wif-tisco-person-role {
    font-family: 'Inter', sans-serif; font-size: 12px; color: rgba(255,255,255,0.5);
  }
  /* milestone steps */
  .wif-milestones {
    display: flex; flex-wrap: wrap; gap: 3px;
    position: relative; z-index: 1;
  }
  .wif-ms {
    flex: 1 1 140px; background: rgba(255,255,255,0.06);
    padding: 14px 16px; border-top: 2px solid #90b0d0;
  }
  .wif-ms-year {
    font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 900;
    color: #90b0d0; line-height: 1; margin-bottom: 4px;
  }
  .wif-ms-text {
    font-family: 'Inter', sans-serif; font-size: 13px;
    color: rgba(255,255,255,0.6); line-height: 1.6;
  }
  .wif-ms-text strong { color: rgba(255,255,255,0.85); font-family: 'Poppins', sans-serif; font-weight: 700; }

  /* ══════════════════════════════════════
     SECTION RULE
  ══════════════════════════════════════ */
  .wif-rule {
    width: 100%; height: 1px; background: var(--rule);
    margin: 56px 0;
  }

  /* ══════════════════════════════════════
     FAQ
  ══════════════════════════════════════ */
  .wif-faq-header {
    border-bottom: 3px solid var(--ink); padding-bottom: 14px; margin-bottom: 0;
    display: flex; align-items: baseline; gap: 16px;
  }
  .wif-faq-kicker {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase; color: var(--amber);
  }
  .wif-faq-title {
    font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 4vw, 34px); font-weight: 900;
    color: var(--ink); letter-spacing: -0.01em; margin: 20px 0 32px;
  }
  .wif-faq-item { border-bottom: 1px solid var(--rule); overflow: hidden; }
  .wif-faq-item.open { background: var(--cream); }
  .wif-faq-q {
    width: 100%; text-align: left; background: none; border: none; cursor: pointer;
    padding: 20px 0; display: grid; grid-template-columns: 1fr 32px;
    gap: 16px; align-items: start;
  }
  .wif-faq-q-text {
    font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600;
    color: var(--ink); line-height: 1.5; text-align: left; padding-left: 4px;
  }
  .wif-faq-item.open .wif-faq-q-text { color: var(--amber2); }
  .wif-faq-icon {
    width: 28px; height: 28px; border: 1.5px solid var(--rule);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; color: var(--amber); flex-shrink: 0; margin-top: 2px;
  }
  .wif-faq-item.open .wif-faq-icon { background: var(--ink); border-color: var(--ink); color: #e0a060; }
  .wif-faq-ans {
    display: none; padding: 0 4px 22px;
    font-size: 16px; line-height: 1.82; color: #374151;
  }
  .wif-faq-ans.visible { display: block; }
  .wif-faq-ans ul { padding-left: 20px; margin: 8px 0; }
  .wif-faq-ans ul li { margin-bottom: 7px; }
  .wif-faq-ans strong { color: var(--ink); font-family: 'Poppins', sans-serif; font-weight: 700; }
  .wif-faq-ans p { margin: 0 0 10px; }
  .wif-faq-ans p:last-child { margin: 0; }

  @media (max-width: 620px) {
    .wif-hero        { min-height: auto; padding: 80px 0 48px; }
    .wif-inventions  { grid-template-columns: 1fr; }
    .wif-centres     { flex-direction: column; }
    .wif-centre      { border-right: none; border-bottom: 1px solid var(--rule); padding: 12px 16px; }
    .wif-centre:last-child { border-bottom: none; }
    .wif-centre-name { font-size: 14px; }
    .wif-centre-product { font-size: 11px; }
    .wif-wootz       { grid-template-columns: 48px 1fr; }
    .wif-wootz-left  { font-size: 9px; }
    .wif-fall-event  { grid-template-columns: 72px 1fr; }
    .wif-milestones  { flex-direction: column; }
    .wif-tisco-people{ flex-direction: column; }
    .wif-tisco-person { flex: none; padding: 10px 14px; }
    .wif-tisco-person-name { font-size: 13px; }
    .wif-tisco-person-role { font-size: 11px; }
    .wif-word-row    { flex-direction: column; }
    .wif-word-item   { border-right: none; border-bottom: 1px solid var(--rule); }
  }
`;

const faqs = [
  {
    q: "Why was India known as the 'Workshop of the World' before colonialism? How did Britain take over that title?",
    a: (<>
      <p>Before British colonialism, India was one of the most advanced manufacturing nations in the world — particularly in textiles:</p>
      <ul>
        <li><strong>India's pre-colonial position:</strong> In the 18th century, India was a leading nation in craft and trade. Around 1750, India was the world's largest producer of cotton textiles — renowned for both fine quality and exquisite craftsmanship</li>
        <li><strong>Global trade network:</strong> From the 16th century, European traders came to India specifically to buy Indian textiles for resale in Europe. Indian muslin, calico, chintz, and silk commanded premium prices in European markets</li>
        <li><strong>Britain's Industrial Revolution:</strong> The Industrial Revolution — powered by inventions like the Spinning Jenny (1764) and the steam engine applied to weaving (1786) — allowed Britain to produce textiles mechanically, at far lower costs and in far greater quantities than hand-loom weavers could</li>
        <li><strong>Colonial advantage:</strong> The combination of industrial machinery, colonial control of India, and British trade policies (like the Calico Act, 1720, which banned Indian textiles in Britain) allowed British manufacturers to flood Indian and global markets with cheap machine-made cloth</li>
        <li><strong>The reversal:</strong> By the early 19th century, British cotton textiles had pushed Indian goods out of their traditional markets in Africa, America, and Europe. The "Workshop of the World" title passed from India to Britain — not through competition, but through colonial suppression of Indian industry</li>
      </ul>
    </>),
  },
  {
    q: "What was the Calico Act of 1720? How did it affect Indian textile trade?",
    a: (<>
      <p>The Calico Act of 1720 was a piece of British protectionist legislation that had significant implications for Indian textile exports:</p>
      <ul>
        <li><strong>What it was:</strong> In 1720, the British government passed the Calico Act, banning the use of printed cotton textiles — specifically chintz — in England. This was done to protect Britain's own wool and silk industries from the popularity of cheaper, more attractive Indian cotton</li>
        <li><strong>Immediate impact on India:</strong> Indian weavers lost access to the English market — one of their most profitable export destinations. The ban specifically targeted the brightly printed chintz that Indian weavers had produced for decades</li>
        <li><strong>British response — imitation:</strong> Rather than importing Indian fabric, British manufacturers began imitating Indian designs — printing Indian patterns on plain white muslin or unbleached Indian cloth imported cheaply</li>
        <li><strong>The irony:</strong> Indian fabrics were popular enough that the British government had to legally ban them — but instead of benefiting Indian weavers, this led to British manufacturers copying Indian designs and profiting from them instead</li>
        <li><strong>Long-term consequence:</strong> The Act accelerated British investment in textile technology — since they couldn't import Indian cloth legally, they needed their own manufacturing capability. This investment contributed to the development of Britain's cotton industry</li>
      </ul>
    </>),
  },
  {
    q: "How did words like 'muslin', 'calico', 'chintz', and 'bandanna' preserve the history of Indian textiles?",
    a: (<>
      <p>The names of Indian textiles that entered European languages carry the history of the trade in their very syllables:</p>
      <ul>
        <li><strong>Muslin:</strong> The finest cotton textile in the world, woven in Bengal and Dhaka. The name derives from Mosul (a city in Iraq through which it was traded) — but the fabric itself came from the looms of Bengal. Dhaka muslin was so fine it was called "woven air" or "running water"</li>
        <li><strong>Calico:</strong> Derived from Calicut (present-day Kozhikode in Kerala) — the port from which this cotton cloth was exported. The entire fabric category in English takes its name from an Indian city</li>
        <li><strong>Chintz:</strong> Derived from the Hindi word chhint — meaning printed or spotted cloth. Brightly printed cotton textiles produced in Masulipatnam, Andhra Pradesh, were ordered in bulk by European traders</li>
        <li><strong>Bandanna:</strong> Derived from the Hindi/Sanskrit word bandhna or bandhani — meaning to tie. This tie-and-dye fabric was produced in Gujarat and Rajasthan. The technique is still practised today</li>
        <li><strong>Why this matters:</strong> These words reveal that Indian textiles were not just exported — they defined entire categories of fabric in European consciousness. When European languages had to name new types of cloth, they reached for Indian place names and Indian words — proof of how central India's textile industry was to global trade</li>
      </ul>
    </>),
  },
  {
    q: "Who were the weavers of India? Which communities specialised in weaving?",
    a: (<>
      <p>Weaving in India was not an individual craft — it was a community identity, passed down through generations in specific caste groups and regional traditions:</p>
      <ul>
        <li><strong>Tanti (Bengal):</strong> The Tanti community were the famous cotton weavers of Bengal — producers of the legendary Dhaka muslin and fine jamdani weave. Their skill in producing ultra-fine cotton cloth was unmatched anywhere in the world</li>
        <li><strong>Julakas / Momin (North India):</strong> Muslim weavers in northern India, particularly in centres like Varanasi and Lucknow, who produced silk and mixed-fabric weaves including the famous Banarasi silk</li>
        <li><strong>Kaikollars (South India):</strong> A weaving community of Tamil Nadu known for producing cotton and silk textiles in the Coromandel region</li>
        <li><strong>Devangs (South India):</strong> Another major weaving community of southern India, particularly in Andhra Pradesh and Karnataka</li>
        <li><strong>Economic significance:</strong> Handloom weaving and the occupations associated with it — cotton spinning, dyeing, finishing, trading — provided livelihoods for millions of Indians. Entire village economies were organised around the textile trade</li>
        <li><strong>The scale of decline:</strong> When British machine-made cloth flooded Indian markets in the 1830s, it was not just individual weavers who were affected — entire community livelihoods, regional economies, and centuries-old craft traditions collapsed simultaneously</li>
      </ul>
    </>),
  },
  {
    q: "How did the decline of Indian textiles affect weavers? What was the role of Khadi?",
    a: (<>
      <p>The decline of the Indian textile industry under colonial rule was one of the most devastating economic changes in Indian history:</p>
      <ul>
        <li><strong>Loss of export markets:</strong> By the early 19th century, British-made cotton textiles pushed Indian goods out of their traditional markets in Africa, America, and Europe — markets Indian weavers had served for centuries</li>
        <li><strong>Domestic market flooded:</strong> By the 1830s, cheap British cotton cloth was flooding Indian markets. Indian weavers could not compete with machine-made cloth that was cheaper, more consistent, and backed by the full force of colonial trade policy</li>
        <li><strong>Women spinners devastated:</strong> Thousands of rural women who earned their livelihoods by spinning cotton thread were rendered jobless — the destruction of the cotton spinning trade was a direct economic blow to India's rural women</li>
        <li><strong>Weavers forced to change:</strong> Weavers started working as agricultural labourers and mill workers, or migrated to cities as wage earners — losing their skilled craft identity and becoming unskilled labourers</li>
        <li><strong>Khadi as resistance:</strong> During the National Movement, Mahatma Gandhi used the spinning wheel (charkha) as a political weapon. He urged people to boycott imported textiles and use hand-spun, hand-woven khadi instead. <strong>Khadi became a symbol of nationalism</strong> — every thread spun was an act of economic resistance against British manufacturing dominance</li>
        <li><strong>The deeper meaning:</strong> Gandhi understood that the destruction of Indian textiles was not just economic — it had destroyed the dignity and self-reliance of millions of Indians. Khadi was about restoring both</li>
      </ul>
    </>),
  },
  {
    q: "What was Wootz steel? Why was it famous? How did it decline?",
    a: (<>
      <p>Wootz steel was one of the greatest metallurgical achievements in human history — and its story is a powerful example of what colonialism destroyed:</p>
      <ul>
        <li><strong>What it was:</strong> Wootz was a special type of high-carbon steel produced across South India using a highly specialised smelting technique. It had distinctive properties — extraordinary hardness, a characteristic wavy pattern on the blade surface, and an ability to hold a sharp edge far superior to European steel</li>
        <li><strong>Its fame:</strong> Tipu Sultan's legendary sword was made of Wootz steel — its quality fascinated European scientists and metallurgists who couldn't replicate the technique for decades. Indian swords and armour made from Wootz were sought after across Asia and the Middle East</li>
        <li><strong>The process lost:</strong> The Wootz steel-making process, which was widely known in South India, was completely lost by the mid-19th century — within decades of British conquest</li>
        <li><strong>Why it declined:</strong>
          <ul>
            <li>The British conquest of India destroyed the market for Indian swords and armour — there were no longer Indian kingdoms to equip their armies with Indian-made weapons</li>
            <li>British imports of iron and steel from England displaced the craft-produced iron and steel of Indian artisans</li>
            <li>Forest protection laws imposed by the British made the recovery of iron ore expensive — iron smelters could no longer access the forest fuel and ore they needed</li>
            <li>By the late 19th century, iron smelting as a craft was in terminal decline</li>
          </ul>
        </li>
        <li><strong>The tragedy:</strong> A metallurgical tradition that had fascinated European scientists and produced some of the finest steel in the world was wiped out within a generation — not by technological inferiority, but by colonial conquest and policy</li>
      </ul>
    </>),
  },
  {
    q: "How was TISCO established? What role did it play in Indian industrialisation?",
    a: (<>
      <p>The Tata Iron and Steel Company (TISCO) represents one of the most important chapters in India's industrial history — a story of Indian entrepreneurial vision fighting against colonial economic policy:</p>
      <ul>
        <li><strong>The founding vision:</strong> Jamsetji Tata, the great Indian industrialist, dreamed of building a modern steel plant in India. His eldest son <strong>Dorabji Tata</strong> carried this vision forward after Jamsetji's death</li>
        <li><strong>Finding the ore — the Agarias:</strong> In 1904, Dorabji Tata and <strong>Charles Weld</strong>, an American geologist, set out to find suitable iron ore deposits. It was the <em>Agarias</em> — traditional iron smelters from Chhattisgarh — who used their centuries-old knowledge of local geology to guide them to the iron ore deposits at <strong>Rajhara Hills, Chhattisgarh</strong>. Indigenous knowledge made modern industry possible</li>
        <li><strong>TISCO established:</strong> The Tata Iron and Steel Company officially came up in <strong>1912</strong> at Jamshedpur, Bihar (now Jharkhand)</li>
        <li><strong>World War I as the turning point:</strong> Just two years after TISCO was established, in 1914, World War I broke out. British steel imports to India declined sharply — and the Indian Railways, which needed rails urgently, turned to TISCO for supply. This war-time demand gave TISCO the scale and revenue it needed to grow</li>
        <li><strong>Colonial obstacles:</strong> The British colonial government consistently refused to help TISCO by not imposing import duty on British steel. Despite this deliberate obstruction, TISCO grew to become <strong>the biggest steel company within the entire British Empire</strong> — a remarkable achievement against colonial economic policy</li>
      </ul>
    </>),
  },
];

export default function WeaversIronSmelters() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <FontLink />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="wif-root">

        {/* ── HERO ── */}
        <div className="wif-hero">
          <div className="wif-hero-bg-num">07</div>
          <div className="wif-ring" style={{ width: 500, height: 500, top: -180, left: -120 }} />
          <div className="wif-ring" style={{ width: 320, height: 320, top: 60, right: 80 }} />
          <div className="wif-hero-inner">
            <div className="wif-overline">Class 8 · History · Our Pasts – III</div>
            <h1 className="wif-hero-title">
              Weavers,<br />
              <em>Iron Smelters</em><br />
              &amp; <span className="gold-em">Factory Owners</span>
            </h1>
            <div className="wif-hero-bar">
              <div className="wif-hero-bar-item">
                <div className="wif-bar-label">Chapter</div>
                <div className="wif-bar-value">07</div>
              </div>
              <div className="wif-hero-bar-item">
                <div className="wif-bar-label">Subject</div>
                <div className="wif-bar-value">History</div>
              </div>
              <div className="wif-hero-bar-item">
                <div className="wif-bar-label">Focus</div>
                <div className="wif-bar-value">Industry &amp; Crafts</div>
              </div>
              <div className="wif-hero-bar-item">
                <div className="wif-bar-label">Board</div>
                <div className="wif-bar-value">CBSE / NCERT</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="wif-body">

          {/* OPENING STATEMENT */}
          <div className="wif-opener">
            <div className="wif-opener-num">1750</div>
            <div className="wif-opener-text">
              In 1750, India was the <strong>world's largest producer of cotton textiles</strong> — its weavers clothed Europe, its iron smelters forged legendary steel, and its craftsmen were unmatched. Within a century of British conquest, most of that world was gone. This is the story of what was destroyed — and how Indians eventually fought back.
            </div>
          </div>

          {/* ── SECTION 1: TEXTILE NAMES ── */}
          <div className="wif-sec">
            <div className="wif-sec-n">01</div>
            <div className="wif-sec-right">
              <div className="wif-sec-tag">Words Tell Histories</div>
              <h2 className="wif-sec-title">Indian Words the <span className="hl">World Still Uses</span></h2>
            </div>
          </div>

          <p className="wif-p">
            The depth of India's textile dominance is preserved in language itself. When European traders needed words for the fabrics they were importing, they borrowed Indian words and Indian place names — and those words are still in use today.
          </p>

          <div className="wif-word-row">
            {[
              { hindi: "Muslin", english: "From 'Mosul' — fine cotton", place: "Bengal / Dhaka" },
              { hindi: "Calico", english: "From 'Calicut'", place: "Kerala coast" },
              { hindi: "Chintz", english: "From 'Chhint' (spotted)", place: "Masulipatnam, AP" },
              { hindi: "Bandanna", english: "From 'Bandhna' (to tie)", place: "Gujarat / Rajasthan" },
              { hindi: "Patola", english: "Double ikat weave", place: "Surat / Ahmedabad" },
              { hindi: "Jamdani", english: "Figured muslin weave", place: "Bengal" },
            ].map(w => (
              <div className="wif-word-item" key={w.hindi}>
                <div className="wif-word-hindi">{w.hindi}</div>
                <div className="wif-word-english">{w.english}</div>
                <div className="wif-word-place">{w.place}</div>
              </div>
            ))}
          </div>

          {/* ── SECTION 2: WEAVERS ── */}
          <div className="wif-sec">
            <div className="wif-sec-n">02</div>
            <div className="wif-sec-right">
              <div className="wif-sec-tag">The Craft Communities</div>
              <h2 className="wif-sec-title">Who Were <span className="hl">the Weavers</span></h2>
            </div>
          </div>

          <p className="wif-p">
            Weaving was not an individual occupation — it was a community identity. Specific caste groups across India had specialised in weaving for generations, developing distinctive skills, patterns, and techniques that were passed down within families.
          </p>

          <div className="wif-pills">
            {[
              { name: "Tanti", region: "Bengal — Fine cotton & muslin" },
              { name: "Julakas / Momin", region: "North India — Silk & mixed weaves" },
              { name: "Kaikollars", region: "South India — Cotton textiles" },
              { name: "Devangs", region: "South India — AP & Karnataka" },
            ].map(p => (
              <div className="wif-pill" key={p.name}>
                <div className="wif-pill-name">{p.name}</div>
                <div className="wif-pill-region">{p.region}</div>
              </div>
            ))}
          </div>

          {/* Famous weaving centres */}
          <div className="wif-centres">
            {[
              { name: "Bengal", product: "Muslin · Jamdani" },
              { name: "Gujarat", product: "Patola · Bandhani" },
              { name: "Andhra Pradesh", product: "Chintz · Kalamkari" },
              { name: "Calicut (Kerala)", product: "Calico · Fine cotton" },
              { name: "Surat", product: "Patola · Silk weaves" },
            ].map(c => (
              <div className="wif-centre" key={c.name}>
                <div className="wif-centre-name">{c.name}</div>
                <div className="wif-centre-product">{c.product}</div>
              </div>
            ))}
          </div>

          <div className="wif-dark-pull" data-year="1720">
            <div className="wif-dark-pull-tag">Calico Act — 1720</div>
            <div className="wif-dark-pull-text">
              Indian cotton was so popular in Britain that the government had to <span>legally ban it</span> to protect British wool and silk industries. Indian textiles were not beaten by competition — they were beaten by legislation.
            </div>
          </div>

          {/* ── SECTION 3: THE MACHINES THAT KILLED HANDLOOM ── */}
          <div className="wif-sec">
            <div className="wif-sec-n">03</div>
            <div className="wif-sec-right">
              <div className="wif-sec-tag">The Industrial Revolution</div>
              <h2 className="wif-sec-title">The Machines That <span className="hl3">Changed Everything</span></h2>
            </div>
          </div>

          <p className="wif-p">
            Two inventions — one for spinning, one for weaving — put millions of Indian hand-loom weavers out of work. They made British cloth so cheap that no hand-made textile could compete.
          </p>

          <div className="wif-inventions">
            <div className="wif-inv-card" data-year="1764">
              <div className="wif-inv-icon">🧵</div>
              <div className="wif-inv-name">The Spinning Jenny</div>
              <div className="wif-inv-by">John Kay — 1764</div>
              <div className="wif-inv-desc">
                A single machine that could spin <strong>multiple threads simultaneously</strong> — replacing dozens of hand-spinners. Overnight, the cost of producing cotton yarn collapsed. The thousands of Indian women who earned their livelihoods by spinning cotton thread were <strong>rendered jobless</strong> almost immediately.
              </div>
            </div>
            <div className="wif-inv-card" data-year="1786">
              <div className="wif-inv-icon">⚙️</div>
              <div className="wif-inv-name">Steam Power for Weaving</div>
              <div className="wif-inv-by">Richard Arkwright — 1786</div>
              <div className="wif-inv-desc">
                The application of the <strong>steam engine to cotton textile production</strong> by Arkwright revolutionised weaving. Mechanical looms powered by steam could produce cloth at a scale and speed that no human weaver could match — and at a fraction of the cost.
              </div>
            </div>
          </div>

          {/* ── SECTION 4: DECLINE TIMELINE ── */}
          <div className="wif-sec">
            <div className="wif-sec-n">04</div>
            <div className="wif-sec-right">
              <div className="wif-sec-tag">The Long Collapse</div>
              <h2 className="wif-sec-title">The Decline of <span className="hl3">Indian Textiles</span></h2>
            </div>
          </div>

          <div className="wif-fall">
            {[
              { year: "Early 19th C", head: "Ousted from World Markets", desc: "English-made cotton textiles successfully pushed Indian goods out of their traditional markets in Africa, America, and Europe. English and European companies stopped buying Indian goods entirely." },
              { year: "1830s", head: "British Cloth Floods India", desc: "By the 1830s, cheap British cotton cloth was flooding Indian domestic markets — the last refuge of Indian weavers. Thousands of rural women who spun cotton thread were rendered jobless." },
              { year: "1854", head: "First Cotton Mill — Bombay", desc: "The first cotton mill in India was set up as a spinning mill in Bombay. By 1900, over 84 mills operated in Bombay — but the colonial government refused to impose import duties on British goods, deliberately strangling Indian mill growth." },
              { year: "WWI 1914", head: "War Creates Opportunity", desc: "When the First World War broke out, British textile imports to India declined and Indian factories were called upon to produce cloth for military supplies. War — not policy — gave Indian textile factories their first real chance to grow." },
            ].map((e, i) => (
              <div className="wif-fall-event" key={i}>
                <div className="wif-fall-year-col"><div className="wif-fall-year">{e.year}</div></div>
                <div className="wif-fall-body">
                  <div className="wif-fall-head">{e.head}</div>
                  <div className="wif-fall-desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* KHADI BLOCK */}
          <div className="wif-khadi">
            <div className="wif-khadi-tag">The National Movement · Mahatma Gandhi</div>
            <div className="wif-khadi-head">Khadi — Thread by Thread, a Nation Resists</div>
            <div className="wif-khadi-body">
              During the independence movement, Gandhi turned the spinning wheel into a political weapon. He urged people to <strong>boycott imported British textiles</strong> and wear only hand-spun, hand-woven <strong>khadi</strong>. Every revolution of the charkha was an act of economic defiance — withdrawing Indian money from British mills and returning dignity to Indian weavers. <strong>Khadi became the cloth of Indian nationalism.</strong>
            </div>
          </div>

          <div className="wif-rule" />

          {/* ── SECTION 5: WOOTZ STEEL ── */}
          <div className="wif-sec">
            <div className="wif-sec-n">05</div>
            <div className="wif-sec-right">
              <div className="wif-sec-tag">A Lost Metallurgical Genius</div>
              <h2 className="wif-sec-title">Wootz Steel — <span className="hl2">The Secret That Was Erased</span></h2>
            </div>
          </div>

          <p className="wif-p">
            If Indian textiles represent one great colonial destruction, Wootz steel represents another. It was one of humanity's greatest metallurgical achievements — a steel so fine it fascinated European scientists — and it was completely wiped out within a generation of British conquest.
          </p>

          <div className="wif-wootz">
            <div className="wif-wootz-left">WOOTZ</div>
            <div className="wif-wootz-right">
              <div className="wif-wootz-label">Key Facts — Wootz Steel</div>
              <div className="wif-wootz-head">High-Carbon Steel, Produced Across South India</div>
              <ul>
                <li><strong>What it was:</strong> A highly specialised technique of refining iron to produce high-carbon steel with extraordinary hardness and a distinctive wavy surface pattern. Tipu Sultan's legendary sword was made of Wootz</li>
                <li><strong>World fascination:</strong> Indian Wootz steel-making fascinated European scientists, who could not replicate the process for decades. European metallurgists studied Indian blades trying to understand their superior quality</li>
                <li><strong>How it was destroyed:</strong> The British conquest eliminated the market for Indian swords and armour. British steel imports displaced craft-produced Indian iron and steel. Forest protection laws made iron ore recovery expensive, destroying the supply chain for smelters</li>
                <li><strong>Completely lost:</strong> The Wootz steel-making process — <strong>widely known across South India</strong> — was completely lost by the mid-19th century. Villages that had contained furnaces for centuries fell silent</li>
                <li><strong>The Agarias:</strong> Iron smelters known as Agarias preserved knowledge of local iron ore deposits. When TISCO was later set up, it was Agaria knowledge that guided geologists to iron ore at Rajhara Hills, Chhattisgarh — indigenous knowledge serving modern industry</li>
              </ul>
            </div>
          </div>

          {/* ── SECTION 6: FENCE FACTS — abandoned furnaces ── */}
          <div className="wif-sec">
            <div className="wif-sec-n">06</div>
            <div className="wif-sec-right">
              <div className="wif-sec-tag">Why the Furnaces Went Cold</div>
              <h2 className="wif-sec-title">Abandoned <span className="hl3">Furnaces</span> in Villages</h2>
            </div>
          </div>

          <div className="wif-fence">
            {[
              { text: <><strong>Forest laws:</strong> The British imposed forest protection laws that made the recovery of iron ore extremely costly. Iron smelters had always relied on forest access for both ore and fuel — when forests were closed off, their entire production system collapsed.</> },
              { text: <><strong>British steel imports:</strong> Cheap iron and steel from English factories flooded Indian markets, undercutting craft-produced iron on price. Indian iron smelters could not compete with industrially produced metal sold at colonial trade prices.</> },
              { text: <><strong>Loss of markets:</strong> The conquest of India by the British destroyed the market for Indian swords, armour, and military equipment — the highest-value products of Indian iron craft. With no royal courts left to buy weapons, the industry's most profitable segment vanished.</> },
              { text: <><strong>Craft abandonment:</strong> Many iron smelters gave up their ancient craft and looked for other livelihoods. By the early 20th century, artisans who had inherited iron-working knowledge from hundreds of generations faced extinction.</> },
            ].map((r, i) => (
              <div className="wif-fence-row" key={i}>
                <div className="wif-fence-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="wif-fence-text">{r.text}</div>
              </div>
            ))}
          </div>

          {/* ── SECTION 7: TISCO ── */}
          <div className="wif-sec">
            <div className="wif-sec-n">07</div>
            <div className="wif-sec-right">
              <div className="wif-sec-tag">Indian Industrialisation Fights Back</div>
              <h2 className="wif-sec-title">TISCO — India's <span className="hl2">Steel Giant</span> Is Born</h2>
            </div>
          </div>

          <p className="wif-p">
            Even as colonial policy destroyed traditional Indian crafts, a new generation of Indian entrepreneurs was building modern industry — against the active resistance of the colonial government.
          </p>

          <div className="wif-tisco-block">
            <div className="wif-tisco-tag">Tata Iron &amp; Steel Company</div>
            <div className="wif-tisco-head">From an Agaria's Knowledge to the <span>Empire's Biggest Steel Mill</span></div>
            <div className="wif-tisco-people">
              <div className="wif-tisco-person">
                <div className="wif-tisco-person-name">Dorabji Tata</div>
                <div className="wif-tisco-person-role">Eldest son of Jamsetji Tata · Founding visionary</div>
              </div>
              <div className="wif-tisco-person">
                <div className="wif-tisco-person-name">Charles Weld</div>
                <div className="wif-tisco-person-role">American geologist · Found iron ore deposits (1904)</div>
              </div>
              <div className="wif-tisco-person">
                <div className="wif-tisco-person-name">The Agarias</div>
                <div className="wif-tisco-person-role">Traditional iron smelters · Led them to Rajhara Hills, Chhattisgarh</div>
              </div>
            </div>
            <div className="wif-milestones">
              {[
                { year: "1904", text: <><strong>Ore found</strong> at Rajhara Hills — guided by Agaria iron smelters</> },
                { year: "1912", text: <><strong>TISCO established</strong> at Jamshedpur — begins producing steel</> },
                { year: "1914", text: <><strong>WWI breaks out</strong> — British steel imports decline sharply</> },
                { year: "1914+", text: <><strong>Indian Railways</strong> turns to TISCO for rails — transformative demand</> },
                { year: "Later", text: <><strong>TISCO grows</strong> into the biggest steel company in the British Empire</> },
              ].map(m => (
                <div className="wif-ms" key={m.year}>
                  <div className="wif-ms-year">{m.year}</div>
                  <div className="wif-ms-text">{m.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="wif-rule" />

          {/* ── FAQ ── */}
          <div className="wif-faq-header">
            <span className="wif-faq-kicker">Exam Preparation</span>
          </div>
          <h2 className="wif-faq-title">Frequently Asked Questions</h2>

          {faqs.map((faq, i) => (
            <div className={`wif-faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button className="wif-faq-q" onClick={() => toggle(i)}>
                <span className="wif-faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="wif-faq-icon">{openIndex === i ? "▴" : "▾"}</span>
              </button>
              <div className={`wif-faq-ans${openIndex === i ? " visible" : ""}`}>{faq.a}</div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
