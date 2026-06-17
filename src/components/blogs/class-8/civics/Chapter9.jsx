import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --pf-cyan:      #0e7490;
    --pf-cyan2:     #0891b2;
    --pf-cyan-lt:   #cffafe;
    --pf-navy:      #1e3a8a;
    --pf-navy2:     #1d4ed8;
    --pf-navy-lt:   #dbeafe;
    --pf-amber:     #92400e;
    --pf-amber2:    #b45309;
    --pf-amber-lt:  #fef3c7;
    --pf-red:       #b91c1c;
    --pf-red-lt:    #fee2e2;
    --pf-green:     #166534;
    --pf-green2:    #15803d;
    --pf-green-lt:  #dcfce7;
    --pf-ink:       #0e1a2e;
    --pf-ink2:      #1e2d44;
    --pf-muted:     #5a6a82;
    --pf-rule:      #cdd8e8;
    --pf-off:       #f4f7fc;
    --pf-light:     #e8eef7;
    --pf-white:     #ffffff;
    --pf-black:     #060c18;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .pf-root {
    font-family: 'Inter', sans-serif;
    background: var(--pf-off);
    color: var(--pf-ink);
    min-height: 100vh;
  }

  /* ══ HERO ══ */
  .pf-hero {
    background: var(--pf-black);
    min-height: 100vh;
    display: grid; grid-template-rows: auto 1fr auto;
    position: relative; overflow: hidden; width: 100%;
  }
  .pf-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      -52deg, transparent, transparent 44px,
      rgba(255,255,255,0.013) 44px, rgba(255,255,255,0.013) 45px
    );
    pointer-events: none;
  }
  .pf-hero-glow {
    position: absolute; top: -80px; right: -80px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(8,145,178,0.24) 0%, transparent 68%);
    pointer-events: none;
  }
  .pf-hero-glow2 {
    position: absolute; bottom: -60px; left: -60px;
    width: 320px; height: 320px; border-radius: 50%;
    background: radial-gradient(circle, rgba(30,58,138,0.16) 0%, transparent 68%);
    pointer-events: none;
  }
  .pf-hero-nav {
    display: flex; align-items: center; justify-content: flex-end;
    padding: 28px 52px 0; position: relative; z-index: 2;
  }
  .pf-hero-nav-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #67e8f9; border: 1px solid #67e8f9; padding: 4px 12px;
  }
  .pf-hero-center {
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 52px; position: relative; z-index: 2; min-width: 0;
  }
  .pf-hero-eyebrow {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: #67e8f9; margin-bottom: 28px;
  }
  .pf-hero-h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 7.5vw, 108px);
    font-weight: 900; line-height: 0.88;
    letter-spacing: -0.04em; color: #fff;
    margin-bottom: 40px;
  }
  .pf-hero-h1 .cy { color: #67e8f9; }
  .pf-hero-h1 .go { color: #fbbf24; }
  .pf-hero-h1 .wh { color: rgba(255,255,255,0.5); }
  .pf-hero-deck {
    max-width: 580px;
    font-family: 'Inter', sans-serif;
    font-size: 18px; font-weight: 400;
    line-height: 1.72; color: rgba(255,255,255,0.50);
    border-left: 3px solid #67e8f9;
    padding-left: 20px; margin-bottom: 52px;
  }
  .pf-hero-deck strong { color: rgba(255,255,255,0.80); font-weight: 500; }
  .pf-hero-stats {
    display: flex; gap: 0;
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .pf-hero-stat {
    flex: 1; padding: 22px 28px;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .pf-hero-stat:last-child { border-right: none; }
  .pf-hero-stat-val {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px; font-weight: 900; color: #fff;
    letter-spacing: -0.03em; line-height: 1; margin-bottom: 6px;
  }
  .pf-hero-stat-val span { color: #67e8f9; }
  .pf-hero-stat-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.28);
  }
  .pf-hero-bottom {
    padding: 22px 52px;
    display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
    border-top: 1px solid rgba(255,255,255,0.06);
    position: relative; z-index: 2;
  }
  .pf-hero-bottom-item {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    display: flex; align-items: center; gap: 8px;
  }
  .pf-hero-bottom-item::before {
    content: ''; width: 4px; height: 4px;
    border-radius: 50%; background: #67e8f9; flex-shrink: 0;
  }

  /* ══ BODY ══ */
  .pf-body { max-width: 920px; margin: 0 auto; padding: 80px 32px 100px; }

  .pf-run-label {
    display: flex; align-items: center; gap: 0;
    margin-bottom: 44px;
    border-top: 3px solid var(--pf-ink); padding-top: 14px;
  }
  .pf-run-num {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 900; letter-spacing: 0.18em;
    color: var(--pf-white); background: var(--pf-ink);
    padding: 4px 10px; margin-right: 16px;
  }
  .pf-run-title {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--pf-muted); flex: 1;
  }
  .pf-run-topic {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--pf-cyan2);
  }
  .pf-sec-h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(28px, 4.5vw, 48px);
    font-weight: 900; line-height: 1.0;
    letter-spacing: -0.03em; color: var(--pf-ink);
    margin-bottom: 24px;
  }
  .pf-sec-h2 em  { font-style: normal; color: var(--pf-cyan2); }
  .pf-sec-h2 .go { color: var(--pf-amber2); }
  .pf-sec-h2 .gr { color: var(--pf-green2); }
  .pf-sec-h2 .rd { color: var(--pf-red); }
  .pf-prose {
    font-family: 'Inter', sans-serif;
    font-size: 17px; color: var(--pf-ink2);
    line-height: 1.82; margin-bottom: 28px;
  }
  .pf-prose strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--pf-ink); }
  .pf-break {
    display: flex; align-items: center; gap: 0; margin: 60px 0;
  }
  .pf-break-line { flex: 1; height: 1px; background: var(--pf-rule); }
  .pf-break-pill {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--pf-muted); background: var(--pf-light);
    padding: 5px 16px; margin: 0 16px;
  }

  /* ── LEAD CARD ── */
  .pf-lead {
    background: var(--pf-cyan); padding: 40px 44px; margin-bottom: 52px;
    display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: start;
    position: relative; overflow: hidden;
  }
  .pf-lead::after {
    content: '🏙️';
    position: absolute; right: 28px; top: 12px;
    font-size: 110px; opacity: 0.07; line-height: 1; pointer-events: none;
  }
  .pf-lead-badge {
    width: 72px; height: 72px; border-radius: 50%;
    background: rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    font-size: 36px; flex-shrink: 0;
  }
  .pf-lead-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: #a5f3fc; margin-bottom: 8px;
  }
  .pf-lead-title {
    font-family: 'Montserrat', sans-serif; font-size: clamp(18px,3vw,28px);
    font-weight: 900; color: #fff; letter-spacing: -0.02em; line-height: 1.1;
    margin-bottom: 14px;
  }
  .pf-lead-title span { color: #fbbf24; }
  .pf-lead-body {
    font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.80;
    color: rgba(255,255,255,0.60); position: relative; z-index: 1;
  }
  .pf-lead-body strong { color: rgba(255,255,255,0.88); font-family: 'Poppins', sans-serif; font-weight: 600; }
  @media (max-width: 560px) { .pf-lead { grid-template-columns: 1fr; padding: 28px 24px; } }

  /* ── CHENNAI 3 STORIES — contrast block ── */
  .pf-stories {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: var(--pf-rule); margin-bottom: 52px;
  }
  @media (max-width: 620px) { .pf-stories { grid-template-columns: 1fr; } }
  .pf-story { background: var(--pf-white); padding: 26px 22px; position: relative; overflow: hidden; }
  .pf-story:nth-child(1) { background: var(--pf-navy); }
  .pf-story:nth-child(2) { background: var(--pf-amber); }
  .pf-story:nth-child(3) { background: var(--pf-green); }
  .pf-story-icon { font-size: 26px; margin-bottom: 10px; }
  .pf-story-name {
    font-family: 'Montserrat', sans-serif; font-size: 15px; font-weight: 900;
    color: #fff; margin-bottom: 4px; letter-spacing: -0.01em;
  }
  .pf-story-area {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.15em; text-transform: uppercase;
    color: rgba(255,255,255,0.38); margin-bottom: 12px;
  }
  .pf-story-body {
    font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.70;
    color: rgba(255,255,255,0.60);
  }
  .pf-story-body strong { color: rgba(255,255,255,0.88); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── WATER STAT STRIP ── */
  .pf-stats-strip {
    display: flex; gap: 1px; background: var(--pf-rule); margin-bottom: 52px;
  }
  @media (max-width: 600px) { .pf-stats-strip { flex-wrap: wrap; } }
  .pf-stat-box {
    flex: 1; background: var(--pf-white); padding: 22px 20px; min-width: 0;
  }
  @media (max-width: 600px) { .pf-stat-box { flex: 1 1 calc(50% - 1px); } }
  .pf-stat-num {
    font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 900;
    color: var(--pf-cyan2); letter-spacing: -0.02em; line-height: 1; margin-bottom: 6px;
  }
  .pf-stat-label {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
    color: var(--pf-muted); line-height: 1.4;
  }

  /* ── PUBLIC FACILITIES LIST — numbered ── */
  .pf-facilities { margin-bottom: 52px; }
  .pf-facility-row {
    display: grid; grid-template-columns: 48px 1fr;
    border-bottom: 1px solid var(--pf-light); align-items: stretch;
  }
  .pf-facility-row:first-child { border-top: 1px solid var(--pf-rule); }
  .pf-facility-num {
    background: var(--pf-cyan-lt);
    display: flex; align-items: center; justify-content: center;
    border-right: 2px solid var(--pf-cyan2);
    font-size: 18px; padding: 14px 0;
  }
  .pf-facility-content { padding: 16px 22px; }
  .pf-facility-head {
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
    color: var(--pf-ink); margin-bottom: 4px;
  }
  .pf-facility-body {
    font-family: 'Inter', sans-serif; font-size: 14px;
    color: var(--pf-muted); line-height: 1.62;
  }
  .pf-facility-body strong { color: var(--pf-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── GOVERNMENT ROLE — dark block ── */
  .pf-gov {
    background: var(--pf-navy); padding: 40px 44px; margin-bottom: 52px;
    position: relative; overflow: hidden;
  }
  .pf-gov::after {
    content: '🏛️';
    position: absolute; right: 28px; top: 12px;
    font-size: 100px; opacity: 0.06; line-height: 1; pointer-events: none;
  }
  .pf-gov-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: rgba(147,197,253,0.7); margin-bottom: 8px;
  }
  .pf-gov-title {
    font-family: 'Montserrat', sans-serif; font-size: clamp(18px,3vw,28px);
    font-weight: 900; color: #fff; letter-spacing: -0.02em; line-height: 1.1;
    margin-bottom: 18px;
  }
  .pf-gov-title span { color: #fbbf24; }
  .pf-gov-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: rgba(255,255,255,0.08);
  }
  @media (max-width: 560px) { .pf-gov-grid { grid-template-columns: 1fr; } }
  .pf-gov-item { background: rgba(255,255,255,0.04); padding: 18px 22px; }
  .pf-gov-item-icon { font-size: 20px; margin-bottom: 8px; }
  .pf-gov-item-head {
    font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700;
    color: #93c5fd; margin-bottom: 5px; letter-spacing: 0.04em;
  }
  .pf-gov-item-body {
    font-family: 'Inter', sans-serif; font-size: 13px; line-height: 1.65;
    color: rgba(255,255,255,0.50);
  }
  .pf-gov-item-body strong { color: rgba(255,255,255,0.82); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── HOW GOVT FUNDS WATER — numbered feature ── */
  .pf-water-steps { margin-bottom: 52px; }
  .pf-ws-card {
    border: 1px solid var(--pf-rule); background: var(--pf-white);
    border-top: none; display: grid; grid-template-columns: 72px 1fr;
  }
  .pf-ws-card:first-child { border-top: 1px solid var(--pf-rule); }
  .pf-ws-num-col {
    display: flex; align-items: flex-start; justify-content: center;
    padding: 24px 10px; border-right: 1px solid var(--pf-rule);
  }
  .pf-ws-num {
    font-family: 'Montserrat', sans-serif; font-size: 26px; font-weight: 900;
    letter-spacing: -0.03em; line-height: 1;
  }
  .pf-ws-card:nth-child(1) .pf-ws-num { color: var(--pf-cyan2); }
  .pf-ws-card:nth-child(2) .pf-ws-num { color: var(--pf-amber2); }
  .pf-ws-card:nth-child(3) .pf-ws-num { color: var(--pf-green2); }
  .pf-ws-card:nth-child(4) .pf-ws-num { color: var(--pf-navy2); }
  .pf-ws-body-col { padding: 22px 26px; }
  .pf-ws-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 7px;
  }
  .pf-ws-card:nth-child(1) .pf-ws-tag { color: var(--pf-cyan2); }
  .pf-ws-card:nth-child(2) .pf-ws-tag { color: var(--pf-amber2); }
  .pf-ws-card:nth-child(3) .pf-ws-tag { color: var(--pf-green2); }
  .pf-ws-card:nth-child(4) .pf-ws-tag { color: var(--pf-navy2); }
  .pf-ws-title {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    letter-spacing: -0.02em; color: var(--pf-ink); margin-bottom: 8px; line-height: 1.2;
  }
  .pf-ws-desc {
    font-family: 'Inter', sans-serif; font-size: 15px;
    color: var(--pf-ink2); line-height: 1.75;
  }
  .pf-ws-desc strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--pf-ink); }

  /* ── CHENNAI CRISIS — compare ── */
  .pf-chennai {
    display: grid; grid-template-columns: 1fr 1fr;
    background: var(--pf-rule); gap: 1px; margin-bottom: 52px;
  }
  @media (max-width: 600px) { .pf-chennai { grid-template-columns: 1fr; } }
  .pf-ch-col { background: var(--pf-white); padding: 32px 28px; }
  .pf-ch-badge {
    display: inline-block;
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    margin-bottom: 12px; padding: 4px 12px;
  }
  .pf-ch-col:nth-child(1) .pf-ch-badge { color: var(--pf-red); background: var(--pf-red-lt); }
  .pf-ch-col:nth-child(2) .pf-ch-badge { color: var(--pf-green); background: var(--pf-green-lt); }
  .pf-ch-head {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: var(--pf-ink); margin-bottom: 14px; letter-spacing: -0.01em; line-height: 1.2;
  }
  .pf-ch-col ul { padding-left: 0; list-style: none; }
  .pf-ch-col ul li {
    font-family: 'Inter', sans-serif; font-size: 14px;
    color: var(--pf-muted); line-height: 1.65;
    padding: 10px 0 10px 18px; border-bottom: 1px solid var(--pf-light);
    position: relative;
  }
  .pf-ch-col ul li::before {
    content: ''; position: absolute; left: 0; top: 18px;
    width: 6px; height: 6px; border-radius: 50%;
  }
  .pf-ch-col:nth-child(1) ul li::before { background: var(--pf-red); }
  .pf-ch-col:nth-child(2) ul li::before { background: var(--pf-green2); }
  .pf-ch-col ul li:last-child { border-bottom: none; }
  .pf-ch-col ul li strong { color: var(--pf-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── EDITORIAL ── */
  .pf-editorial {
    padding: 48px 0; margin-bottom: 52px;
    border-top: 3px solid var(--pf-ink);
    border-bottom: 1px solid var(--pf-rule);
  }
  .pf-editorial-q {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 900; line-height: 1.22;
    letter-spacing: -0.02em; color: var(--pf-ink); margin-bottom: 18px;
  }
  .pf-editorial-q em { font-style: normal; color: var(--pf-cyan2); }
  .pf-editorial-attr {
    font-family: 'Inter', sans-serif; font-size: 13px;
    color: var(--pf-muted); letter-spacing: 0.02em;
  }

  /* ── FAQ ── */
  .pf-faq-intro { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; }
  .pf-faq-intro-line { flex: 1; height: 1px; background: var(--pf-rule); }
  .pf-faq-intro-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--pf-cyan2); background: var(--pf-cyan-lt); padding: 5px 14px;
  }
  .pf-faq-h2 {
    font-family: 'Montserrat', sans-serif; font-size: 34px; font-weight: 900;
    color: var(--pf-ink); letter-spacing: -0.025em; margin-bottom: 30px;
  }
  .pf-faq-item { border-bottom: 1px solid var(--pf-rule); }
  .pf-faq-item:first-of-type { border-top: 1px solid var(--pf-rule); }
  .pf-faq-q {
    width: 100%; display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;
    padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left;
  }
  .pf-faq-q-text {
    font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600;
    color: var(--pf-ink2); line-height: 1.45; flex: 1;
  }
  .pf-faq-item.open .pf-faq-q-text { color: var(--pf-cyan2); }
  .pf-faq-icon { font-size: 18px; color: var(--pf-cyan2); flex-shrink: 0; margin-top: 2px; }
  .pf-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.32s ease; }
  .pf-faq-ans.open { max-height: 1200px; }
  .pf-faq-ans-inner {
    padding-bottom: 22px; font-family: 'Inter', sans-serif; font-size: 15px;
    color: var(--pf-muted); line-height: 1.78;
  }
  .pf-faq-ans-inner strong { color: var(--pf-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }
  .pf-faq-ans-inner ul { padding-left: 20px; margin: 10px 0; }
  .pf-faq-ans-inner ul li { margin-bottom: 8px; line-height: 1.65; }

  @media (max-width: 900px) {
    .pf-hero-nav { padding: 22px 28px 0; }
    .pf-hero-center { padding: 36px 28px 0; }
    .pf-hero-bottom { padding: 18px 28px; gap: 18px; }
  }
  @media (max-width: 680px) {
    .pf-hero { min-height: auto; }
    .pf-hero-nav { padding: 16px 18px 0; justify-content: flex-start; }
    .pf-hero-center { padding: 28px 18px 0; }
    .pf-hero-h1 { font-size: clamp(36px,11vw,62px); letter-spacing:-0.03em; margin-bottom:20px; }
    .pf-hero-deck { font-size:14px; margin-bottom:28px; max-width:100%; }
    .pf-hero-stats { flex-wrap: wrap; }
    .pf-hero-stat { flex: 1 1 calc(50% - 1px); padding: 14px 14px; }
    .pf-hero-stat:nth-child(2n) { border-right: none; }
    .pf-hero-stat:nth-child(n+3) { border-top: 1px solid rgba(255,255,255,0.06); }
    .pf-hero-stat-val { font-size: 22px; }
    .pf-hero-bottom { padding: 12px 18px; gap: 8px; }
    .pf-body { padding: 52px 18px 72px; }
    .pf-gov-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 400px) {
    .pf-hero-h1 { font-size: clamp(30px, 10vw, 48px); }
    .pf-hero-stat { flex: 1 1 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
  }
`;

const faqs = [
  {
    q: "What are public facilities? Give examples.",
    a: <><strong>Public facilities</strong> are facilities provided to the people by the government. They are important to sustain and lead a comfortable life. Examples include:
      <ul>
        <li>Water supply and sanitation</li>
        <li>Electricity</li>
        <li>Public transport (buses, trains)</li>
        <li>Schools and colleges</li>
        <li>Hospitals and healthcare</li>
        <li>Post offices, railways, and roads</li>
      </ul>
      These are things necessary for <strong>survival</strong>, and their benefits are meant to be <strong>shared by many people</strong>. No one should be discriminated against in accessing them on the basis of social or economic division.</>
  },
  {
    q: "Why is water considered a Fundamental Right? What does Article 21 say?",
    a: <>Water is essential for life and good health. The <strong>Constitution of India recognises the right to water</strong> as part of the Right to Life under <strong>Article 21</strong>. This means there should be <strong>universal access</strong> to water. High Courts and the Supreme Court have held that the <strong>right to safe drinking water is a Fundamental Right</strong>. More than <strong>1,600 Indians — mostly children under age 5 — die every day</strong> due to water-related diseases like diarrhoea, dysentery, and cholera. Court verdicts make it the government's legal responsibility to ensure the supply of fresh drinking water.</>
  },
  {
    q: "Explain the three stories of water access in Chennai.",
    a: <>The chapter uses three real-life stories to show how unevenly water is distributed:
      <ul>
        <li><strong>Mr Ramgopal (Anna Nagar):</strong> His area looks lush and green with lawns maintained by generous water spraying — abundant supply for the wealthy</li>
        <li><strong>Mr Subramaniam (apartment):</strong> Faces inadequate municipal supply and spends Rs 500-600 per month buying water</li>
        <li><strong>Siva (Madipakkam):</strong> Gets water only once in 4 days. For drinking, buys bottled water</li>
      </ul>
      These stories show that <strong>water as a public utility is available in very different quantities to different people</strong> — the poor bear the worst of the shortfall.</>
  },
  {
    q: "What is the government's role in providing public facilities?",
    a: <>One of the most important functions of government is to ensure public facilities are made available to everyone:
      <ul>
        <li>Making provision for <strong>education</strong> — setting up schools and colleges</li>
        <li>Improving <strong>health and sanitation</strong> facilities</li>
        <li>Ensuring <strong>equal distribution of food</strong> throughout the country</li>
        <li>Improving the <strong>means of transport</strong></li>
        <li>Maintenance of <strong>public utility works</strong> — post offices, railways, roads</li>
      </ul>
      Private companies operate for profit; <strong>public facilities are related to basic needs</strong>. Government must fund them through tax revenue and use resources efficiently for the maximum welfare of the population.</>
  },
  {
    q: "How does the government fund public facilities like water supply?",
    a: <>The main source of revenue for government is <strong>taxes collected from the people</strong>. For water supply specifically, the government incurs costs in:
      <ul>
        <li>Pumping water</li>
        <li>Carrying it over long distances</li>
        <li>Laying down pipes for distribution</li>
        <li>Treating water for impurities</li>
        <li>Collecting and treating wastewater</li>
      </ul>
      It meets these expenses <strong>partly from taxes and partly by charging a price for water</strong>. This price is set so that most people can afford a certain minimum amount for daily use. The goal is universal access, not profit.</>
  },
  {
    q: "What is the water supply situation in Chennai? What does it reveal?",
    a: <>Water supply in Chennai is <strong>marked by shortage</strong>:
      <ul>
        <li>Municipal supply meets only about <strong>half the needs</strong> of the city on average</li>
        <li>The <strong>burden of shortfall falls mostly on the poor</strong></li>
        <li>Shortage and acute crisis during summer months is common to <strong>other Indian cities</strong> too</li>
        <li>A shortage of municipal water is often taken as a <strong>sign of government failure</strong></li>
        <li>Throughout the world, <strong>water supply is the government's responsibility</strong> — there are very few instances of private water supply</li>
        <li>In the era of industrialisation, <strong>water pollution</strong> has become a major additional problem</li>
      </ul></>
  },
  {
    q: "Why can't private companies be left to provide public facilities?",
    a: <><strong>Private companies operate for profit</strong> in the market. Public facilities are related to people's <strong>basic needs</strong> — not profitable markets. If water, schools, or hospitals are left to private companies:
      <ul>
        <li>Only those who can <strong>pay will get access</strong></li>
        <li>The poor will be <strong>excluded</strong> from essential services</li>
        <li>This violates the constitutional guarantee of <strong>equal access to the Right to Life</strong></li>
        <li>Universal access cannot be achieved through profit-driven systems</li>
      </ul>
      That is why government — funded by taxes from all citizens — must provide these facilities equitably.</>
  },
  {
    q: "What does the chapter conclude about public facilities?",
    a: <>The chapter concludes:
      <ul>
        <li>Public facilities are related to our <strong>basic needs</strong> — the Constitution has recognised water, health, education as part of the <strong>Right to Life</strong></li>
        <li>The <strong>major role of government</strong> is to ensure adequate public facilities for everyone</li>
        <li>Public facilities for everyone give rise to <strong>better living indices</strong> and help a country achieve international recognition for development</li>
        <li>The success of any government is measured by the <strong>facilities and basic needs provided</strong> to all its citizens</li>
        <li>These facilities are the <strong>building blocks of a nation's development</strong></li>
      </ul></>
  },
];

export default function CivicsCh9PublicFacilities() {
  const [openIdx, setOpenIdx] = useState(null);
  const tog = (i) => setOpenIdx(openIdx === i ? null : i);
  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="pf-root">
        <div className="pf-hero">
          <div className="pf-hero-glow" />
          <div className="pf-hero-glow2" />
          <div className="pf-hero-nav">
            <div className="pf-hero-nav-tag">Political Science · Class 8</div>
          </div>
          <div className="pf-hero-center">
            <div className="pf-hero-eyebrow">Chapter 09 · Social & Political Life</div>
            <h1 className="pf-hero-h1">
              <span className="cy">Public</span><br />
              <span className="go">Facili</span><span className="wh">ties</span>
            </h1>
            <div className="pf-hero-deck">
              Water, electricity, schools, hospitals — <strong>the services every citizen needs</strong> to live with dignity. Why government must provide them, and what happens when it fails.
            </div>
            <div className="pf-hero-stats">
              <div className="pf-hero-stat">
                <div className="pf-hero-stat-val"><span>1,600</span></div>
                <div className="pf-hero-stat-label">Indians die daily — water diseases</div>
              </div>
              <div className="pf-hero-stat">
                <div className="pf-hero-stat-val"><span>50%</span></div>
                <div className="pf-hero-stat-label">Chennai needs met by municipal supply</div>
              </div>
              <div className="pf-hero-stat">
                <div className="pf-hero-stat-val"><span>Art. 21</span></div>
                <div className="pf-hero-stat-label">Water — Part of Right to Life</div>
              </div>
              <div className="pf-hero-stat">
                <div className="pf-hero-stat-val"><span>₹500</span></div>
                <div className="pf-hero-stat-label">Monthly water cost — poor households</div>
              </div>
            </div>
          </div>
          <div className="pf-hero-bottom">
            <div className="pf-hero-bottom-item">Water — Fundamental Right</div>
            <div className="pf-hero-bottom-item">Government — Not Private Companies</div>
            <div className="pf-hero-bottom-item">Universal Access for All</div>
            <div className="pf-hero-bottom-item">Building Blocks of Development</div>
          </div>
        </div>

        <div className="pf-body">
          <div className="pf-run-label">
            <div className="pf-run-num">01</div>
            <div className="pf-run-title">Foundation</div>
            <div className="pf-run-topic">What Are Public Facilities?</div>
          </div>
          <h2 className="pf-sec-h2">Services That Keep<br /><em>Society Running</em></h2>
          <p className="pf-prose">
            <strong>Public facilities</strong> are the facilities provided to the people by the government. They are important to sustain and lead a comfortable life. Things like electricity, public transport, schools, colleges, and hospitals — necessary for survival — are known as public facilities. These are services whose <strong>benefits must be shared by many people</strong>, and no one should be discriminated against in accessing them.
          </p>
          <div className="pf-lead">
            <div className="pf-lead-badge">💧</div>
            <div>
              <div className="pf-lead-label">Core Principle · Article 21</div>
              <div className="pf-lead-title">Water as a <span>Fundamental Right</span></div>
              <div className="pf-lead-body">
                The Constitution of India recognises the <strong>right to water as part of the Right to Life</strong> under Article 21. That means there should be <strong>universal access</strong> to water. The High Courts and Supreme Court have held that the right to safe drinking water is a Fundamental Right. More than <strong>1,600 Indians — mostly children under five — die every day</strong> from water-related diseases like diarrhoea, dysentery, and cholera. Verdicts given by courts make it the <strong>legal responsibility of government</strong> to ensure the supply of fresh drinking water.
              </div>
            </div>
          </div>

          <div className="pf-break">
            <div className="pf-break-line" />
            <div className="pf-break-pill">Case Study — Chennai</div>
            <div className="pf-break-line" />
          </div>
          <div className="pf-run-label">
            <div className="pf-run-num">02</div>
            <div className="pf-run-title">Unequal Access</div>
            <div className="pf-run-topic">Water and the People of Chennai</div>
          </div>
          <h2 className="pf-sec-h2">Three <em>Faces</em> of<br />Water in Chennai</h2>
          <p className="pf-prose">
            Water as a public utility is available in <strong>very different quantities to different people</strong>. These three real stories from Chennai illustrate the stark inequality in access to one of the most basic necessities of life.
          </p>
          <div className="pf-stories">
            {[
              { icon:"🌿", name:"Mr Ramgopal", area:"Anna Nagar, Chennai", body:"This area looks <strong>lush and green</strong> with lawns maintained by generous spraying of water. The wealthy get more than enough — their gardens are watered while others go thirsty." },
              { icon:"🏠", name:"Mr Subramaniam", area:"Apartment, Chennai", body:"Water supply is <strong>inadequate</strong>. Has to spend <strong>Rs 500–600 per month</strong> buying water. A basic need has become an extra expense that strains the middle class." },
              { icon:"⏳", name:"Siva", area:"Madipakkam, Chennai", body:"Gets water <strong>only once in 4 days</strong>. For drinking, buys bottled water. The poor and working class bear the worst of the shortfall — water scarcity is a daily reality." },
            ].map((s) => (
              <div className="pf-story" key={s.name}>
                <div className="pf-story-icon">{s.icon}</div>
                <div className="pf-story-name">{s.name}</div>
                <div className="pf-story-area">{s.area}</div>
                <div className="pf-story-body" dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}
          </div>
          <div className="pf-stats-strip">
            <div className="pf-stat-box">
              <div className="pf-stat-num">50%</div>
              <div className="pf-stat-label">Chennai needs met by municipal supply on average</div>
            </div>
            <div className="pf-stat-box">
              <div className="pf-stat-num">Once/4d</div>
              <div className="pf-stat-label">Water access for some Chennai residents</div>
            </div>
            <div className="pf-stat-box">
              <div className="pf-stat-num">Poor</div>
              <div className="pf-stat-label">Bear the greatest burden of water shortfall</div>
            </div>
            <div className="pf-stat-box">
              <div className="pf-stat-num">Govt.</div>
              <div className="pf-stat-label">Worldwide water supply is govt. responsibility</div>
            </div>
          </div>

          <div className="pf-break">
            <div className="pf-break-line" />
            <div className="pf-break-pill">Government's Role</div>
            <div className="pf-break-line" />
          </div>
          <div className="pf-run-label">
            <div className="pf-run-num">03</div>
            <div className="pf-run-title">State Responsibility</div>
            <div className="pf-run-topic">What Must the Government Provide?</div>
          </div>
          <h2 className="pf-sec-h2">The <em>Government's</em><br />Core Obligations</h2>
          <p className="pf-prose">
            One of the most important functions of government is to ensure that public facilities are made available to everyone. Private companies operate for profit — <strong>public facilities are related to basic needs</strong> and cannot be left to the market alone.
          </p>
          <div className="pf-facilities">
            {[
              ["📚", "Education", "Making provision for education and setting up schools and colleges. Every child deserves access to quality learning regardless of income or social status."],
              ["🏥", "Health & Sanitation", "Improving health and sanitation facilities. Clean hospitals, primary health centres, and sanitation infrastructure save lives and prevent disease."],
              ["🌾", "Food Distribution", "Ensuring equal distribution of food throughout the country. Public distribution systems ensure that no citizen goes hungry due to market failures."],
              ["🚌", "Transport", "Improving the means of transport — buses, trains, roads. Mobility enables citizens to access work, education, and markets."],
              ["📮", "Public Utilities", "Maintenance of public utility works like post offices, railways, and roads — the connective tissue of a functioning society."],
            ].map(([icon, head, body]) => (
              <div className="pf-facility-row" key={head}>
                <div className="pf-facility-num">{icon}</div>
                <div className="pf-facility-content">
                  <div className="pf-facility-head">{head}</div>
                  <div className="pf-facility-body">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pf-gov">
            <div className="pf-gov-label">How Government Funds Public Facilities</div>
            <div className="pf-gov-title">Tax Revenue → <span>Public Welfare</span></div>
            <div className="pf-gov-grid">
              {[
                ["💰", "Source of Funds", "The main source of revenue is <strong>taxes collected from the people</strong>. Government is empowered to collect these taxes and use them for public programmes."],
                ["🔧", "Cost of Water Supply", "Pumping water, carrying it long distances, laying pipes, <strong>treating impurities</strong>, and treating wastewater all require significant infrastructure investment."],
                ["⚖️", "Affordable Pricing", "Government meets expenses partly from taxes and partly by <strong>charging a price for water</strong> — set so that most people can afford a minimum amount for daily use."],
                ["🎯", "Goal: Universal Access", "The most important task is to ensure <strong>availability of resources to everyone</strong>. Strict administration and effective scheme implementation can help the underprivileged."],
              ].map(([icon, head, body]) => (
                <div className="pf-gov-item" key={head}>
                  <div className="pf-gov-item-icon">{icon}</div>
                  <div className="pf-gov-item-head">{head}</div>
                  <div className="pf-gov-item-body" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>

          <div className="pf-break">
            <div className="pf-break-line" />
            <div className="pf-break-pill">Chennai Crisis</div>
            <div className="pf-break-line" />
          </div>
          <div className="pf-run-label">
            <div className="pf-run-num">04</div>
            <div className="pf-run-title">Reality Check</div>
            <div className="pf-run-topic">Is Water Available to All in Chennai?</div>
          </div>
          <h2 className="pf-sec-h2">The <span className="rd">Crisis</span> — and<br />What <em>Must Change</em></h2>
          <p className="pf-prose">
            Chennai's water situation is a mirror of India's public facilities challenge. When government fails to meet its obligation, it is always the poor who suffer most.
          </p>
          <div className="pf-chennai">
            <div className="pf-ch-col">
              <div className="pf-ch-badge">The Problem</div>
              <div className="pf-ch-head">Chennai's Water Failure</div>
              <ul>
                <li>Municipal supply meets only <strong>about half</strong> the city's needs</li>
                <li>The <strong>burden of shortfall</strong> falls mostly on the poor</li>
                <li>Shortage and acute crisis <strong>every summer</strong> — common to most Indian cities</li>
                <li>Water shortage is a <strong>sign of government failure</strong></li>
                <li><strong>Industrialisation</strong> has added water pollution to water scarcity</li>
              </ul>
            </div>
            <div className="pf-ch-col">
              <div className="pf-ch-badge">The Solution</div>
              <div className="pf-ch-head">What Government Must Do</div>
              <ul>
                <li>Throughout the world, <strong>water supply is the government's job</strong> — not private companies</li>
                <li>Technology advancement through <strong>government investment</strong> can make clean water available to large populations</li>
                <li>Government must <strong>enforce the Right to Life</strong> (Article 21) which includes the right to safe drinking water</li>
                <li>Better administration and <strong>effective implementation</strong> of schemes for the underprivileged</li>
              </ul>
            </div>
          </div>

          <div className="pf-editorial">
            <div className="pf-editorial-q">
              "Public facilities provided to everyone give rise to better living indices — these facilities <em>become the building blocks of a nation's development</em>."
            </div>
            <div className="pf-editorial-attr">— Chapter 09: Public Facilities, Class 8 Political Science</div>
          </div>

          <div className="pf-break">
            <div className="pf-break-line" />
            <div className="pf-break-pill">Exam Prep</div>
            <div className="pf-break-line" />
          </div>
          <div className="pf-faq-intro">
            <div className="pf-faq-intro-line" />
            <div className="pf-faq-intro-tag">Frequently Asked Questions</div>
            <div className="pf-faq-intro-line" />
          </div>
          <h2 className="pf-faq-h2">All You Need to Know</h2>
          {faqs.map((faq, i) => (
            <div className={`pf-faq-item${openIdx === i ? " open" : ""}`} key={i}>
              <button className="pf-faq-q" onClick={() => tog(i)}>
                <span className="pf-faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="pf-faq-icon">{openIdx === i ? "▴" : "▾"}</span>
              </button>
              <div className={`pf-faq-ans${openIdx === i ? " open" : ""}`}>
                <div className="pf-faq-ans-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
