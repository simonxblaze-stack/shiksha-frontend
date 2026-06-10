import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #04021a;
    --ink2:       #0c0828;
    --muted:      #3a3060;
    --paper:      #f5f4ff;
    --paper2:     #e8e5ff;
    --accent:     #6d28d9;
    --accent2:    #5b21b6;
    --accent-lt:  #ede9fe;
    --gold:       #d97706;
    --gold-lt:    #fef3c7;
    --sky:        #0284c7;
    --sky-lt:     #e0f2fe;
    --teal:       #0f766e;
    --teal-lt:    #ccfbf1;
    --red:        #be123c;
    --red-lt:     #ffe4e6;
    --orange:     #ea580c;
    --orange-lt:  #ffedd5;
    --pink:       #be185d;
    --pink-lt:    #fce7f3;
    --green:      #166534;
    --green-lt:   #dcfce7;
    --rose:       #e11d48;
    --slate:      #334155;
    --rule:       #a78bfa;
    --white:      #ffffff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .sts-root { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }

  /* ═══ HERO — deep space midnight / stardust violet ═══ */
  .sts-hero {
    background: linear-gradient(150deg, #020110 0%, #05021e 45%, #0a0530 75%, #040218 100%);
    min-height: 88vh; display: flex; align-items: flex-end;
    position: relative; overflow: hidden; padding: 0 0 64px;
  }
  @media (max-width: 700px) { .sts-hero { min-height: auto; align-items: flex-start; padding: 72px 0 48px; } }
  .sts-hero::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #6d28d9 0%, #a78bfa 18%, #f59e0b 36%, #ec4899 52%, #0284c7 68%, #10b981 84%, #6d28d9 100%);
  }
  /* Star field bg */
  .sts-hero-stars {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.75) 0%, transparent 100%),
      radial-gradient(1px 1px at 28% 8%,  rgba(255,255,255,0.55) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 54% 14%, rgba(255,255,255,0.80) 0%, transparent 100%),
      radial-gradient(1px 1px at 72% 22%, rgba(255,255,255,0.60) 0%, transparent 100%),
      radial-gradient(2px 2px at 88% 10%, rgba(255,255,255,0.90) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 38%, rgba(255,255,255,0.45) 0%, transparent 100%),
      radial-gradient(1px 1px at 66% 48%, rgba(255,255,255,0.50) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 8%  55%, rgba(255,255,255,0.65) 0%, transparent 100%),
      radial-gradient(1px 1px at 94% 42%, rgba(255,255,255,0.55) 0%, transparent 100%),
      radial-gradient(2px 2px at 20% 70%, rgba(255,255,255,0.40) 0%, transparent 100%),
      radial-gradient(1px 1px at 80% 65%, rgba(255,255,255,0.60) 0%, transparent 100%),
      radial-gradient(ellipse 600px 300px at 20% 40%, rgba(109,40,217,0.12) 0%, transparent 65%),
      radial-gradient(ellipse 400px 400px at 80% 20%, rgba(217,119,6,0.08) 0%, transparent 60%);
  }
  /* Orbit arc decorations */
  .sts-hero-arc {
    position: absolute; top: 50%; right: 3%; transform: translateY(-50%);
    width: clamp(120px,20vw,270px); height: clamp(120px,20vw,270px);
    border-radius: 50%; border: 1.5px solid rgba(167,139,250,0.14); pointer-events: none;
  }
  .sts-hero-arc::before { content: ''; position: absolute; inset: 20%; border-radius: 50%; border: 1px dashed rgba(245,158,11,0.12); }
  .sts-hero-arc::after  { content: ''; position: absolute; inset: 42%; border-radius: 50%; background: rgba(245,158,11,0.10); box-shadow: 0 0 20px rgba(245,158,11,0.20); }
  .sts-glow-a { position: absolute; top: 10%; left: 4%; width: 340px; height: 340px; border-radius: 50%; background: radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 68%); pointer-events: none; }
  .sts-glow-b { position: absolute; bottom: 8%; right: 24%; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%); pointer-events: none; }
  .sts-hero-bg-num { position: absolute; bottom: -80px; right: -20px; font-family: 'Montserrat', sans-serif; font-size: clamp(200px,34vw,480px); font-weight: 900; line-height: 1; color: rgba(255,255,255,0.015); letter-spacing: -0.04em; user-select: none; pointer-events: none; }
  .sts-hero-inner { max-width: 900px; width: 100%; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }
  @media (max-width: 600px) { .sts-hero-inner { padding: 0 20px; } }
  .sts-overline { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #a78bfa; margin-bottom: 24px; display: flex; align-items: center; gap: 14px; }
  .sts-overline::before, .sts-overline::after { content: ''; flex: 0 0 40px; height: 1px; background: #a78bfa; }
  .sts-hero-title { font-family: 'Montserrat', sans-serif; font-size: clamp(36px,7.5vw,82px); font-weight: 900; color: #fff; line-height: 0.92; letter-spacing: -0.03em; margin-bottom: 32px; }
  .sts-hero-title em   { font-style: normal; color: #a78bfa; }
  .sts-hero-title .em2 { color: #fcd34d; }
  .sts-hero-bar { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; margin-top: 8px; }
  .sts-hero-bar-item { flex: 1 1 140px; padding: 0 24px 0 0; border-right: 1px solid rgba(255,255,255,0.08); margin-right: 24px; }
  .sts-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .sts-bar-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.30); margin-bottom: 5px; }
  .sts-bar-value { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.72); }

  /* ═══ BODY ═══ */
  .sts-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }
  @media (max-width: 600px) { .sts-body { padding: 48px 20px 64px; } }

  /* ═══ INTRO CARD ═══ */
  .sts-intro-card { background: linear-gradient(135deg, #020110 0%, #0a0530 100%); border-left: 5px solid #6d28d9; border-radius: 4px; padding: 38px 42px; margin-bottom: 64px; position: relative; overflow: hidden; }
  .sts-intro-card::after { content: '🌌'; position: absolute; right: 28px; top: 50%; transform: translateY(-50%); font-size: 96px; opacity: 0.09; }
  .sts-intro-card p { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.86); line-height: 1.8; margin: 0 0 14px; }
  .sts-intro-card p:last-child { margin: 0; }
  .sts-intro-card strong { color: #c4b5fd; }
  @media (max-width: 600px) { .sts-intro-card { padding: 28px 24px; } .sts-intro-card p { font-size: 16px; } }

  /* ═══ DIVIDER ═══ */
  .sts-divider { margin: 60px 0; display: flex; align-items: center; gap: 16px; }
  .sts-divider::before, .sts-divider::after { content: ''; flex: 1; height: 1px; background: var(--rule); }
  .sts-divider-mark { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

  /* ═══ SECTION HEADER ═══ */
  .sts-sec-head { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 34px; border-bottom: 2px solid var(--rule); padding-bottom: 20px; }
  .sts-sec-num { font-family: 'Montserrat', sans-serif; font-size: 58px; font-weight: 900; color: var(--rule); line-height: 1; flex-shrink: 0; }
  .sts-sec-title-wrap { padding-top: 8px; }
  .sts-sec-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .sts-sec-title { font-family: 'Montserrat', sans-serif; font-size: clamp(22px,3.5vw,32px); font-weight: 800; color: var(--ink); line-height: 1.15; letter-spacing: -0.02em; }
  .sts-sec-title span { color: var(--accent); }

  /* ═══ BODY TEXT ═══ */
  .sts-body-text { font-family: 'Inter', sans-serif; font-size: 17px; color: var(--ink2); line-height: 1.85; margin-bottom: 28px; }
  .sts-body-text strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S1: MOON — PHASES CYCLE ═══ */
  .sts-moon-phases { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
  .sts-moon-phase { flex: 1 1 80px; background: var(--white); border: 1.5px solid var(--rule); border-radius: 10px; padding: 14px 10px; text-align: center; }
  .sts-moon-phase-icon { font-size: 28px; display: block; margin-bottom: 6px; }
  .sts-moon-phase-name { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; color: var(--ink2); }
  /* Moon definition pair */
  .sts-moon-def-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
  @media (max-width: 540px) { .sts-moon-def-pair { grid-template-columns: 1fr; } }
  .sts-moon-def { border-radius: 10px; padding: 20px 18px; border-top: 4px solid; }
  .sts-moon-def.full { background: var(--gold-lt); border-top-color: var(--gold); }
  .sts-moon-def.new  { background: #1e1040; border-top-color: #a78bfa; }
  .sts-moon-def.full .sts-moon-def-icon { color: var(--gold); }
  .sts-moon-def.new  .sts-moon-def-icon { color: #c4b5fd; }
  .sts-moon-def-icon { font-size: 28px; margin-bottom: 8px; display: block; }
  .sts-moon-def-name { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 6px; }
  .full .sts-moon-def-name { color: var(--gold); }
  .new  .sts-moon-def-name { color: #c4b5fd; }
  .sts-moon-def-text { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.68; }
  .full .sts-moon-def-text { color: var(--ink2); }
  .new  .sts-moon-def-text { color: rgba(255,255,255,0.65); }
  /* Moon surface facts */
  .sts-moon-surface { background: linear-gradient(135deg, #020110 0%, #0a0530 100%); border-radius: 12px; padding: 26px 30px; margin-bottom: 24px; border: 1.5px solid rgba(109,40,217,0.22); }
  .sts-moon-surface-title { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; color: #c4b5fd; margin-bottom: 14px; }
  .sts-moon-facts { display: flex; flex-direction: column; gap: 10px; }
  .sts-moon-fact { display: flex; gap: 12px; align-items: flex-start; }
  .sts-moon-fact-dot { width: 8px; height: 8px; border-radius: 50%; background: #a78bfa; flex-shrink: 0; margin-top: 7px; }
  .sts-moon-fact-text { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.65; }
  .sts-moon-fact-text strong { color: #ddd6fe; }
  /* Neil Armstrong tip */
  .sts-neil-box { background: var(--accent-lt); border-left: 5px solid var(--accent); border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .sts-neil-box p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .sts-neil-box strong { color: var(--accent2); font-weight: 700; }

  /* ═══ S2: STARS ═══ */
  .sts-star-facts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 24px; }
  @media (max-width: 540px) { .sts-star-facts-grid { grid-template-columns: 1fr; } }
  .sts-star-fact-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 18px 16px; border-left: 5px solid var(--accent); }
  .sts-star-fact-card:nth-child(2) { border-left-color: var(--gold); }
  .sts-star-fact-card:nth-child(3) { border-left-color: var(--sky); }
  .sts-star-fact-card:nth-child(4) { border-left-color: #10b981; }
  .sts-star-fact-card:nth-child(5) { border-left-color: var(--pink); }
  .sts-star-fact-icon { font-size: 20px; margin-bottom: 6px; display: block; }
  .sts-star-fact-title { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 5px; }
  .sts-star-fact-desc { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink2); line-height: 1.65; }
  .sts-star-fact-desc strong { color: var(--accent2); font-weight: 600; }
  /* Light year callout */
  .sts-lightyear-box { background: linear-gradient(135deg, #020110 0%, #0a0530 100%); border-radius: 12px; padding: 24px 28px; margin-bottom: 24px; border: 1.5px solid rgba(245,158,11,0.22); display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
  .sts-lightyear-big { font-family: 'Montserrat', sans-serif; font-size: clamp(22px,4vw,38px); font-weight: 900; color: #fcd34d; flex-shrink: 0; line-height: 1.1; }
  .sts-lightyear-text { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.72; }
  .sts-lightyear-text strong { color: #fde68a; }

  /* ═══ S3: CONSTELLATIONS ═══ */
  .sts-const-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
  @media (max-width: 600px) { .sts-const-cards { grid-template-columns: 1fr; } }
  .sts-const-card { background: linear-gradient(160deg, #04021a 0%, #0a0530 100%); border: 1.5px solid rgba(167,139,250,0.20); border-radius: 12px; padding: 22px 18px; text-align: center; }
  .sts-const-icon { font-size: 36px; display: block; margin-bottom: 10px; }
  .sts-const-name { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; color: #c4b5fd; margin-bottom: 4px; }
  .sts-const-alias { font-family: 'Poppins', sans-serif; font-size: 11px; color: #a78bfa; margin-bottom: 10px; }
  .sts-const-stars { display: inline-block; font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.10em; padding: 3px 10px; border-radius: 20px; background: rgba(167,139,250,0.15); color: #c4b5fd; margin-bottom: 8px; }
  .sts-const-when { font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(255,255,255,0.50); line-height: 1.55; }
  .sts-sirius-note { background: var(--gold-lt); border-left: 5px solid var(--gold); border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .sts-sirius-note p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .sts-sirius-note strong { color: var(--gold); font-weight: 700; }

  /* ═══ S4: SOLAR SYSTEM — planet cards ═══ */
  .sts-planet-orbit { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
  .sts-planet-row { display: grid; grid-template-columns: 60px 1fr; gap: 0; align-items: stretch; background: var(--white); border: 1.5px solid var(--rule); border-radius: 10px; overflow: hidden; }
  .sts-planet-num-col { display: flex; align-items: center; justify-content: center; font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900; color: #fff; writing-mode: vertical-rl; text-orientation: mixed; padding: 16px 0; letter-spacing: 0.04em; }
  .sts-planet-num-col.p1 { background: #78350f; }
  .sts-planet-num-col.p2 { background: #7c2d12; }
  .sts-planet-num-col.p3 { background: #1e3a5f; }
  .sts-planet-num-col.p4 { background: #7f1d1d; }
  .sts-planet-num-col.p5 { background: #3b1f00; }
  .sts-planet-num-col.p6 { background: #2d2010; }
  .sts-planet-num-col.p7 { background: #0c2340; }
  .sts-planet-num-col.p8 { background: #0c1f40; }
  .sts-planet-content { padding: 16px 20px; }
  .sts-planet-header { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
  .sts-planet-icon { font-size: 24px; }
  .sts-planet-name { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; color: var(--ink); }
  .sts-planet-badges { display: flex; flex-wrap: wrap; gap: 6px; }
  .sts-planet-badge { font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; padding: 3px 9px; border-radius: 20px; }
  .badge-amber { background: var(--gold-lt); color: var(--gold); }
  .badge-blue  { background: var(--sky-lt);  color: var(--sky); }
  .badge-red   { background: var(--red-lt);  color: var(--red); }
  .badge-green { background: var(--green-lt); color: var(--green); }
  .badge-violet{ background: var(--accent-lt); color: var(--accent2); }
  .badge-teal  { background: var(--teal-lt);  color: var(--teal); }
  .badge-orange{ background: var(--orange-lt); color: var(--orange); }
  .sts-planet-facts { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.65; }
  .sts-planet-facts strong { color: var(--accent2); font-weight: 600; }

  /* Inner/Outer split label */
  .sts-belt-label { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); background: var(--accent-lt); padding: 6px 18px; border-radius: 20px; display: inline-block; margin: 10px 0 14px; }

  /* ═══ S5: OTHER MEMBERS ═══ */
  .sts-others-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 28px; }
  @media (max-width: 540px) { .sts-others-grid { grid-template-columns: 1fr; } }
  .sts-other-card { border-radius: 12px; padding: 22px 20px; border-top: 4px solid; }
  .sts-other-card.satellite { background: var(--sky-lt);    border-top-color: var(--sky);    }
  .sts-other-card.asteroid  { background: var(--gold-lt);   border-top-color: var(--gold);   }
  .sts-other-card.comet     { background: var(--accent-lt); border-top-color: var(--accent); }
  .sts-other-card.meteor    { background: var(--red-lt);    border-top-color: var(--red);    }
  .sts-other-icon  { font-size: 32px; margin-bottom: 10px; display: block; }
  .sts-other-name  { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; margin-bottom: 6px; }
  .satellite .sts-other-name { color: var(--sky); }
  .asteroid  .sts-other-name { color: var(--gold); }
  .comet     .sts-other-name { color: var(--accent2); }
  .meteor    .sts-other-name { color: var(--red); }
  .sts-other-desc { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.7; }
  .sts-other-desc strong { color: var(--ink); font-weight: 600; }
  /* Halley's comet tip */
  .sts-halley-note { background: linear-gradient(135deg, #020110 0%, #0a0530 100%); border-radius: 10px; padding: 20px 24px; margin-bottom: 24px; border: 1.5px solid rgba(109,40,217,0.22); }
  .sts-halley-note p { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.72; }
  .sts-halley-note strong { color: #c4b5fd; }
  /* Meteor vs Meteorite 2-col */
  .sts-meteor-split { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 24px; }
  @media (max-width: 500px) { .sts-meteor-split { grid-template-columns: 1fr; } }
  .sts-meteor-card { border-radius: 10px; padding: 20px 18px; }
  .sts-meteor-card.shooting { background: linear-gradient(135deg, #020110 0%, #200840 100%); border: 1.5px solid rgba(167,139,250,0.25); }
  .sts-meteor-card.landed   { background: var(--red-lt); border: 2px solid var(--red); }
  .sts-meteor-card-icon { font-size: 30px; margin-bottom: 8px; display: block; }
  .sts-meteor-card-name { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; margin-bottom: 6px; }
  .shooting .sts-meteor-card-name { color: #c4b5fd; }
  .landed   .sts-meteor-card-name { color: var(--red); }
  .sts-meteor-card-text { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.68; }
  .shooting .sts-meteor-card-text { color: rgba(255,255,255,0.60); }
  .landed   .sts-meteor-card-text { color: var(--ink2); }

  /* ═══ PULL QUOTE ═══ */
  .sts-pull-quote { background: linear-gradient(135deg, #020110 0%, #0a0530 100%); border-radius: 4px; padding: 32px 40px; margin: 48px 0; border-left: 5px solid #a78bfa; }
  .sts-pull-quote p { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.82); line-height: 1.75; font-style: italic; }
  @media (max-width: 600px) { .sts-pull-quote { padding: 24px 22px; } .sts-pull-quote p { font-size: 16px; } }

  /* ═══ FAQ ═══ */
  .sts-faq-header { margin-bottom: 8px; }
  .sts-faq-kicker { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.20em; text-transform: uppercase; color: var(--accent); background: var(--accent-lt); padding: 5px 14px; border-radius: 20px; }
  .sts-faq-title { font-family: 'Montserrat', sans-serif; font-size: clamp(26px,4vw,38px); font-weight: 900; color: var(--ink); margin-bottom: 28px; margin-top: 14px; letter-spacing: -0.02em; }
  .sts-faq-item { border: 1.5px solid var(--rule); border-radius: 8px; margin-bottom: 10px; overflow: hidden; background: var(--white); }
  .sts-faq-item.open { border-color: var(--accent); }
  .sts-faq-q { width: 100%; background: none; border: none; cursor: pointer; padding: 18px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; text-align: left; }
  .sts-faq-q-text { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; color: var(--ink); line-height: 1.4; }
  .sts-faq-item.open .sts-faq-q-text { color: var(--accent2); }
  .sts-faq-icon { font-size: 18px; color: var(--accent); flex-shrink: 0; }
  .sts-faq-ans { padding: 0 20px 18px; }
  .sts-faq-ans-inner { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.78; border-top: 1px solid var(--rule); padding-top: 14px; }
  .sts-faq-ans-inner strong { color: var(--accent2); font-weight: 600; }
`;

const planets = [
  {
    num: '01', cls: 'p1', icon: '⚫', name: 'Mercury',
    badges: [{ label: '1st Planet', cls: 'badge-amber' }, { label: 'Smallest', cls: 'badge-amber' }],
    facts: <><strong>Nearest planet to the Sun</strong> and the smallest in the solar system. Has <strong>no natural satellite</strong>. Observed just before sunrise and after sunset — known as both the "morning star" and "evening star".</>
  },
  {
    num: '02', cls: 'p2', icon: '🟡', name: 'Venus',
    badges: [{ label: '2nd Planet', cls: 'badge-orange' }, { label: 'Hottest', cls: 'badge-red' }],
    facts: <><strong>Closest planet to Earth</strong> and the <strong>brightest object in the night sky</strong> (after the Moon). The <strong>hottest planet</strong> due to a thick greenhouse-gas atmosphere. No natural satellite. Uniquely, Venus rotates from <strong>east to west</strong> — so the Sun rises in the west and sets in the east.</>
  },
  {
    num: '03', cls: 'p3', icon: '🌍', name: 'Earth',
    badges: [{ label: '3rd Planet', cls: 'badge-blue' }, { label: 'Life Exists', cls: 'badge-green' }],
    facts: <><strong>The only known planet with life.</strong> Has an atmosphere, liquid water, and <strong>1 natural satellite</strong> (the Moon). Earth's axis of rotation is <strong>tilted</strong>, which is responsible for the change of seasons.</>
  },
  {
    num: '04', cls: 'p4', icon: '🔴', name: 'Mars',
    badges: [{ label: '4th Planet', cls: 'badge-red' }, { label: 'Red Planet', cls: 'badge-red' }],
    facts: <>Called the <strong>Red Planet</strong> due to its reddish iron-oxide surface. The first planet outside Earth's orbit — an outer neighbour. Has <strong>2 natural satellites</strong>: Phobos and Deimos.</>
  },
  {
    num: '05', cls: 'p5', icon: '🟠', name: 'Jupiter',
    badges: [{ label: '5th Planet', cls: 'badge-orange' }, { label: 'Biggest', cls: 'badge-orange' }],
    facts: <><strong>Largest planet in the solar system</strong> — so big that all other planets could fit inside it. A very bright object in the night sky. Made mainly of gases (hydrogen and helium). Has <strong>28+ natural satellites</strong>, 4 of which (the Galilean moons) are very large.</>
  },
  {
    num: '06', cls: 'p6', icon: '🪐', name: 'Saturn',
    badges: [{ label: '6th Planet', cls: 'badge-amber' }, { label: 'Has Rings', cls: 'badge-amber' }],
    facts: <>Second biggest planet. The <strong>only planet with a visible system of rings</strong> (made of ice and rock). Has the <strong>maximum number of natural satellites (30)</strong>. Composed mainly of hydrogen and helium. Least dense planet — <strong>its density is less than that of water</strong>!</>
  },
  {
    num: '07', cls: 'p7', icon: '🔵', name: 'Uranus',
    badges: [{ label: '7th Planet', cls: 'badge-teal' }, { label: 'Telescope', cls: 'badge-teal' }],
    facts: <>Third biggest planet. Rotates from <strong>east to west</strong> like Venus. The <strong>first planet discovered with the telescope</strong>. Has a highly tilted axis of rotation — it spins nearly on its side. Has <strong>21 natural satellites</strong>. Mainly hydrogen and helium.</>
  },
  {
    num: '08', cls: 'p8', icon: '🔷', name: 'Neptune',
    badges: [{ label: '8th Planet', cls: 'badge-blue' }, { label: 'Farthest', cls: 'badge-blue' }],
    facts: <><strong>Farthest planet from the Sun</strong> in the current eight-planet model. The <strong>second planet discovered with the telescope</strong>. Has <strong>8 natural satellites</strong> (including Triton, its largest). A cold, windy world billions of km from the Sun.</>
  },
];

const faqs = [
  {
    q: "What are celestial objects? Give examples.",
    a: "Celestial objects (also called heavenly bodies) are all the natural objects found in the sky and outer space. They include stars, planets, moons, comets, asteroids, meteoroids, and galaxies. Examples: the Sun (a star), Earth (a planet), the Moon (Earth's natural satellite), Halley's comet, and Alpha Centauri (the nearest star to the Sun after our Sun)."
  },
  {
    q: "Why can we see the Moon even though it is non-luminous?",
    a: "The Moon does not produce its own light — it is non-luminous. We can see the Moon because sunlight falling on its surface gets reflected towards the Earth. We therefore see only the part of the Moon's surface that reflects sunlight towards us. The same is true for all other non-luminous celestial objects like planets."
  },
  {
    q: "What are the phases of the Moon? Explain Full Moon and New Moon.",
    a: <><strong>Phases of the Moon</strong> are the different shapes of the bright (sunlit) part of the Moon as observed from Earth during a month. The Moon's lit portion appears to change because our viewing angle of the sunlit half changes as the Moon orbits Earth. The complete cycle takes about 29.5 days. <strong>Full Moon:</strong> The entire disc of the Moon is visible — Earth is between the Sun and Moon. <strong>New Moon:</strong> The Moon is not visible at all — the Moon is between Earth and the Sun, so its dark side faces Earth. New Moon occurs about 15 days after Full Moon.</>
  },
  {
    q: "Why can we see only one side of the Moon from Earth?",
    a: "We always see the same face of the Moon because the Moon completes one rotation on its own axis in the same time it takes to complete one revolution around the Earth. Since these two periods are equal (both approximately 27.3 days), the same side of the Moon always faces the Earth, and the far side is never visible from our planet."
  },
  {
    q: "What is a light-year? How large is it?",
    a: "A light-year is a unit of distance used to measure the vast distances between celestial objects. It is defined as the distance light travels in one year at its speed of approximately 3 × 10⁵ km/s. 1 light-year = 9.46 × 10¹² km (nearly 9.46 trillion kilometres). For reference, even the Sun — our nearest star — is about 8 light-minutes from Earth (not a full light-year). The next nearest star, Alpha Centauri, is about 4.3 light-years away."
  },
  {
    q: "What is a constellation? Name three important constellations.",
    a: <><strong>Constellations</strong> are groups of stars that appear to form a recognisable pattern or shape when viewed from Earth. The stars in a constellation are not actually close to each other in space — they merely appear in the same line of sight from Earth. Three important constellations: <strong>Ursa Major</strong> (Great Bear / Big Dipper / Saptarshi) — 6 prominent stars; visible in summer evenings in the northern hemisphere. <strong>Orion</strong> (The Hunter) — 7 prominent stars; visible in winter evenings. <strong>Cassiopeia</strong> — 5 prominent stars in a W-shape; visible in winter early nights.</>
  },
  {
    q: "What is Sirius and how do you locate it?",
    a: "Sirius is the brightest star in the entire night sky. It can be located using the constellation Orion. The three middle stars of Orion represent the 'belt of the hunter'. If an imaginary straight line is drawn through these three stars eastward, it leads directly to the bright star Sirius. The Pole Star can be located near the Ursa Major constellation."
  },
  {
    q: "What is the Solar System? Define planet and orbit.",
    a: "The Solar System consists of the Sun and all the celestial bodies that revolve around it — including 8 planets, their natural satellites, asteroids, comets, and meteoroids. A planet is a large celestial body that revolves around the Sun in a fixed, regular path called an orbit. Planets are non-luminous; they shine by reflecting the Sun's light. The 8 planets in order from the Sun are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune."
  },
  {
    q: "What is special about Venus and Uranus compared to other planets?",
    a: "Both Venus and Uranus rotate from east to west on their axes — the opposite direction to most other planets (which rotate west to east). Because of Venus's reverse rotation, the Sun rises in the west and sets in the east on Venus. Venus is also uniquely the hottest planet (not Mercury, despite being closer to the Sun) due to its dense CO₂ atmosphere causing a strong greenhouse effect. Uranus has a highly tilted axis (nearly 98°) making it appear to roll around the Sun on its side."
  },
  {
    q: "What are asteroids? Where are they found?",
    a: "Asteroids are a large number of small rocky or metallic objects that revolve around the Sun. They are too small to be called planets. The vast majority of asteroids are found in a region between the orbits of Mars and Jupiter called the Asteroid Belt. They are thought to be material left over from the formation of the Solar System that never coalesced into a full planet, possibly due to Jupiter's powerful gravity."
  },
  {
    q: "What are comets? What is Halley's Comet?",
    a: "Comets are very small celestial bodies made of ice, gas, and dust that revolve around the Sun in highly elongated (elliptical) orbits. As a comet approaches the Sun, solar heat causes the ice to vaporise, forming a glowing head and a long tail of gas and dust. The tail always points away from the Sun (blown by solar wind). Halley's Comet is the most famous periodic comet, appearing from Earth approximately every 76 years. Its last appearance was in 1986."
  },
  {
    q: "What is the difference between a meteoroid, a meteor, and a meteorite?",
    a: <><strong>Meteoroid:</strong> A small rocky or metallic body revolving around the Sun in outer space, smaller than an asteroid. <strong>Meteor (Shooting Star):</strong> When a meteoroid enters Earth's atmosphere, friction with the air causes it to heat up and produce a bright streak of light — this is called a meteor or shooting star. Most meteors burn up completely before reaching the surface. <strong>Meteorite:</strong> If a meteor is large enough and does not completely burn up in the atmosphere, the surviving fragment that reaches Earth's surface is called a meteorite. Meteorites can create craters when they hit the ground.</>
  },
  {
    q: "What is an artificial satellite? Name some Indian satellites.",
    a: "Artificial satellites are man-made objects that are launched by humans and placed in orbit around the Earth. They travel much closer to Earth than the Moon. They are used for communication, weather forecasting, GPS navigation, remote sensing, and scientific research. Indian satellites include Aryabhatta (the first Indian satellite), INSAT (telecommunications), IRS (remote sensing), Kalpana-1, and EDUSAT (educational satellite)."
  }
];

export default function Chapter17SolarSystem() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="sts-root">

        {/* ══ HERO ══ */}
        <div className="sts-hero">
          <div className="sts-hero-stars" />
          <div className="sts-hero-arc" />
          <div className="sts-glow-a" />
          <div className="sts-glow-b" />
          <div className="sts-hero-bg-num">17</div>
          <div className="sts-hero-inner">
            <div className="sts-overline">Class 8 Science &nbsp;·&nbsp; Chapter 17</div>
            <h1 className="sts-hero-title">
              <em>Stars</em> &amp;<br />
              the <span className="em2">Solar</span><br />
              System
            </h1>
            <div className="sts-hero-bar">
              <div className="sts-hero-bar-item">
                <div className="sts-bar-label">Planets</div>
                <div className="sts-bar-value">8 in Solar System</div>
              </div>
              <div className="sts-hero-bar-item">
                <div className="sts-bar-label">Nearest Star</div>
                <div className="sts-bar-value">Alpha Centauri</div>
              </div>
              <div className="sts-hero-bar-item">
                <div className="sts-bar-label">Moon Cycle</div>
                <div className="sts-bar-value">29.5 Days</div>
              </div>
              <div className="sts-hero-bar-item">
                <div className="sts-bar-label">Class</div>
                <div className="sts-bar-value">NCERT Grade 8</div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ BODY ══ */}
        <div className="sts-body">

          {/* INTRO CARD */}
          <div className="sts-intro-card">
            <p>Step outside on a clear night and look up — you are staring into a universe of <strong>billions of stars, planets, moons, and comets</strong> stretching across unimaginable distances.</p>
            <p>Chapter 17 takes you on a journey from our familiar Moon through the eight planets of the Solar System, across star clusters and constellations, to the spectacular streaks of comets and meteors blazing through the sky.</p>
          </div>

          {/* ══ S1: THE MOON ══ */}
          <div className="sts-sec-head">
            <div className="sts-sec-num">1</div>
            <div className="sts-sec-title-wrap">
              <div className="sts-sec-kicker">Earth's Companion</div>
              <h2 className="sts-sec-title">The <span>Moon</span></h2>
            </div>
          </div>
          <p className="sts-body-text">
            The Moon is the <strong>natural satellite of the Earth</strong> — the only large celestial body that orbits our planet. It is non-luminous; we see it only because it reflects sunlight. We see only one face of the Moon because its rotation period equals its revolution period around Earth.
          </p>

          {/* Phases */}
          <div className="sts-moon-def-pair">
            <div className="sts-moon-def full">
              <span className="sts-moon-def-icon">🌕</span>
              <div className="sts-moon-def-name">Full Moon</div>
              <div className="sts-moon-def-text">The day when the entire disc of the Moon is visible from Earth. The Moon, Earth, and Sun are approximately aligned with Earth in the middle.</div>
            </div>
            <div className="sts-moon-def new">
              <span className="sts-moon-def-icon">🌑</span>
              <div className="sts-moon-def-name">New Moon</div>
              <div className="sts-moon-def-text">The day when the Moon is not visible at all. The Moon is positioned between Earth and the Sun, so its dark face points toward us. Occurs ~15 days after Full Moon.</div>
            </div>
          </div>

          {/* Phase cycle */}
          <div className="sts-moon-phases">
            {[
              { icon: '🌑', name: 'New Moon' },
              { icon: '🌒', name: 'Waxing Crescent' },
              { icon: '🌓', name: 'First Quarter' },
              { icon: '🌔', name: 'Waxing Gibbous' },
              { icon: '🌕', name: 'Full Moon' },
              { icon: '🌖', name: 'Waning Gibbous' },
              { icon: '🌗', name: 'Last Quarter' },
              { icon: '🌘', name: 'Waning Crescent' },
            ].map(({ icon, name }) => (
              <div className="sts-moon-phase" key={name}>
                <span className="sts-moon-phase-icon">{icon}</span>
                <div className="sts-moon-phase-name">{name}</div>
              </div>
            ))}
          </div>

          <div className="sts-moon-surface">
            <div className="sts-moon-surface-title">🌑 Surface of the Moon</div>
            <div className="sts-moon-facts">
              {[
                <>The Moon's surface is <strong>dusty and barren</strong>. There are many craters of different sizes formed by meteorite impacts over billions of years.</>,
                <>The Moon also has a large number of <strong>steep and high mountains</strong>. Some are as high as the highest mountains on Earth.</>,
                <>The Moon has <strong>no atmosphere and no water</strong> — conditions completely hostile to life as we know it.</>,
                <>The time between two consecutive full moons is approximately <strong>29.5 days</strong> — the origin of the word "month" in many calendars.</>,
              ].map((text, i) => (
                <div className="sts-moon-fact" key={i}>
                  <div className="sts-moon-fact-dot" />
                  <div className="sts-moon-fact-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="sts-neil-box">
            <p>🚀 <strong>Neil Armstrong</strong> was the first human to walk on the Moon on July 20, 1969. He was accompanied by <strong>Edwin Aldrin</strong>. They arrived aboard the spacecraft <strong>Apollo 11</strong>.</p>
          </div>

          {/* ══ S2: THE STARS ══ */}
          <div className="sts-divider"><div className="sts-divider-mark" /></div>
          <div className="sts-sec-head">
            <div className="sts-sec-num">2</div>
            <div className="sts-sec-title-wrap">
              <div className="sts-sec-kicker">Luminous Giants</div>
              <h2 className="sts-sec-title">Stars &amp; <span>Light Years</span></h2>
            </div>
          </div>
          <p className="sts-body-text">
            Stars are <strong>luminous celestial objects</strong> — they emit their own light produced by nuclear fusion in their cores. They are extremely hot and composed mainly of hydrogen and helium gas. The Sun is our nearest star.
          </p>
          <div className="sts-star-facts-grid">
            {[
              { icon: '☀️', title: 'The Sun — Nearest Star', desc: 'The Sun is a star, and the nearest star to Earth. It is about 8 light-minutes away — enormously closer than any other star.' },
              { icon: '🔭', title: 'Stars Appear Small', desc: 'Stars are actually enormous — often bigger than the Sun — but they appear tiny because they are incredibly far away, often light-years distant.' },
              { icon: '🌀', title: 'Stars Seem to Move', desc: <>Stars appear to move from <strong>east to west</strong> across the sky because the Earth rotates from west to east — we are the ones moving, not the stars.</> },
              { icon: '⭐', title: 'The Pole Star', desc: 'The only star that appears stationary is the Pole Star (Polaris). It lies on the axis of rotation of the Earth on the side of the north pole, so it does not appear to move.' },
              { icon: '🌟', title: 'Alpha Centauri', desc: 'The nearest star to Earth after the Sun is Alpha Centauri, a triple star system about 4.3 light-years away. Even at the speed of light it would take 4.3 years to reach it.' },
            ].map(({ icon, title, desc }) => (
              <div className="sts-star-fact-card" key={title}>
                <span className="sts-star-fact-icon">{icon}</span>
                <div className="sts-star-fact-title">{title}</div>
                <div className="sts-star-fact-desc">{desc}</div>
              </div>
            ))}
          </div>
          <div className="sts-lightyear-box">
            <div className="sts-lightyear-big">9.46 × 10¹²<br/>km</div>
            <div className="sts-lightyear-text">
              <strong>1 Light-Year = 9.46 × 10¹² km</strong><br/>
              The distances between celestial objects are so enormous that using kilometres becomes impractical. Astronomers use the <strong>light-year</strong> — the distance light travels in one year. Our own Sun is just 8 <em>light-minutes</em> away. The next nearest star is <strong>4.3 light-years</strong> away.
            </div>
          </div>

          {/* ══ S3: CONSTELLATIONS ══ */}
          <div className="sts-divider"><div className="sts-divider-mark" /></div>
          <div className="sts-sec-head">
            <div className="sts-sec-num">3</div>
            <div className="sts-sec-title-wrap">
              <div className="sts-sec-kicker">Patterns in the Sky</div>
              <h2 className="sts-sec-title"><span>Constellations</span></h2>
            </div>
          </div>
          <p className="sts-body-text">
            A <strong>constellation</strong> is a group of stars that, when viewed from Earth, appear to form a recognisable pattern or shape. The stars in a constellation are not all at the same distance — they are simply in the same line of sight. Each constellation has many more stars than the bright ones we can see with the naked eye.
          </p>
          <div className="sts-const-cards">
            {[
              { icon: '🐻', name: 'Ursa Major', alias: 'Great Bear / Big Dipper / Saptarshi', stars: '6 prominent stars', when: 'Summer evenings — northern hemisphere early night' },
              { icon: '🏹', name: 'Orion', alias: 'The Hunter', stars: '7 prominent stars', when: 'Winter late evenings — visible worldwide' },
              { icon: '✨', name: 'Cassiopeia', alias: 'The Queen (W-shape)', stars: '5 prominent stars', when: 'Winter early part of night' },
            ].map(({ icon, name, alias, stars, when }) => (
              <div className="sts-const-card" key={name}>
                <span className="sts-const-icon">{icon}</span>
                <div className="sts-const-name">{name}</div>
                <div className="sts-const-alias">{alias}</div>
                <span className="sts-const-stars">{stars}</span>
                <div className="sts-const-when">{when}</div>
              </div>
            ))}
          </div>
          <div className="sts-sirius-note">
            <p>⭐ <strong>Sirius</strong> is the brightest star in the night sky. To find it: look at the three middle stars of Orion (the hunter's belt) and draw an imaginary line eastward — it points directly to Sirius. The <strong>Pole Star</strong> is located near Ursa Major and always points north.</p>
          </div>

          {/* ══ S4: SOLAR SYSTEM ══ */}
          <div className="sts-divider"><div className="sts-divider-mark" /></div>
          <div className="sts-sec-head">
            <div className="sts-sec-num">4</div>
            <div className="sts-sec-title-wrap">
              <div className="sts-sec-kicker">Our Cosmic Neighbourhood</div>
              <h2 className="sts-sec-title">The <span>Solar System</span></h2>
            </div>
          </div>
          <p className="sts-body-text">
            The <strong>Solar System</strong> is the Sun and all celestial bodies that revolve around it — 8 planets, their moons, asteroids, comets, and dust. Planets travel in fixed paths around the Sun called <strong>orbits</strong>. The first four planets are called <strong>Inner Planets</strong> (rocky); the outer four are <strong>Outer Planets</strong> (mostly gas giants).
          </p>

          <div className="sts-belt-label">☉ Inner Planets — Mercury, Venus, Earth, Mars</div>
          <div className="sts-planet-orbit">
            {planets.slice(0, 4).map(({ num, cls, icon, name, badges, facts }) => (
              <div className="sts-planet-row" key={name}>
                <div className={`sts-planet-num-col ${cls}`}>{num}</div>
                <div className="sts-planet-content">
                  <div className="sts-planet-header">
                    <span className="sts-planet-icon">{icon}</span>
                    <span className="sts-planet-name">{name}</span>
                    <div className="sts-planet-badges">
                      {badges.map(b => <span key={b.label} className={`sts-planet-badge ${b.cls}`}>{b.label}</span>)}
                    </div>
                  </div>
                  <div className="sts-planet-facts">{facts}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sts-belt-label">🪨 Asteroid Belt (between Mars &amp; Jupiter)</div>
          <div style={{marginBottom: 14}}>
            <p className="sts-body-text" style={{marginBottom:0}}>
              Between Mars and Jupiter lies the <strong>Asteroid Belt</strong> — a region teeming with millions of rocky and metallic asteroids, the remnants of planetary formation.
            </p>
          </div>

          <div className="sts-belt-label">🪐 Outer Planets — Jupiter, Saturn, Uranus, Neptune</div>
          <div className="sts-planet-orbit">
            {planets.slice(4).map(({ num, cls, icon, name, badges, facts }) => (
              <div className="sts-planet-row" key={name}>
                <div className={`sts-planet-num-col ${cls}`}>{num}</div>
                <div className="sts-planet-content">
                  <div className="sts-planet-header">
                    <span className="sts-planet-icon">{icon}</span>
                    <span className="sts-planet-name">{name}</span>
                    <div className="sts-planet-badges">
                      {badges.map(b => <span key={b.label} className={`sts-planet-badge ${b.cls}`}>{b.label}</span>)}
                    </div>
                  </div>
                  <div className="sts-planet-facts">{facts}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sts-neil-box" style={{marginTop:16}}>
            <p>📖 <strong>Tip:</strong> Until 2006 the Solar System had 9 planets — the ninth being <strong>Pluto</strong>. In 2006, the International Astronomical Union redefined "planet", and Pluto was reclassified as a <strong>dwarf planet</strong>.</p>
          </div>

          {/* ══ S5: OTHER MEMBERS ══ */}
          <div className="sts-divider"><div className="sts-divider-mark" /></div>
          <div className="sts-sec-head">
            <div className="sts-sec-num">5</div>
            <div className="sts-sec-title-wrap">
              <div className="sts-sec-kicker">Beyond the Planets</div>
              <h2 className="sts-sec-title">Other Members of <span>the Solar System</span></h2>
            </div>
          </div>
          <p className="sts-body-text">
            The Solar System contains many more objects beyond the eight planets — artificial satellites, rocky asteroids, icy comets, and the fiery streaks of meteors.
          </p>
          <div className="sts-others-grid">
            <div className="sts-other-card satellite">
              <span className="sts-other-icon">🛰️</span>
              <div className="sts-other-name">Artificial Satellites</div>
              <div className="sts-other-desc">Man-made objects launched into orbit around Earth, revolving much closer than the Moon. Used for communication, GPS, weather, and Earth observation. <strong>India's first satellite:</strong> Aryabhatta. Others: INSAT, IRS, Kalpana-1, EDUSAT.</div>
            </div>
            <div className="sts-other-card asteroid">
              <span className="sts-other-icon">🪨</span>
              <div className="sts-other-name">Asteroids</div>
              <div className="sts-other-desc">Large numbers of small rocky or metallic objects that revolve around the Sun, mainly found in the <strong>Asteroid Belt between Mars and Jupiter</strong>. They are too small to be considered planets — leftovers from the Solar System's formation.</div>
            </div>
            <div className="sts-other-card comet">
              <span className="sts-other-icon">☄️</span>
              <div className="sts-other-name">Comets</div>
              <div className="sts-other-desc">Very small celestial bodies made of ice, gas, and dust. They travel in <strong>elongated elliptical orbits</strong> around the Sun. As they approach the Sun, they develop a glowing head and a long tail that <strong>always points away from the Sun</strong> (pushed by solar wind).</div>
            </div>
            <div className="sts-other-card meteor">
              <span className="sts-other-icon">🌠</span>
              <div className="sts-other-name">Meteoroids</div>
              <div className="sts-other-desc">Small celestial bodies smaller than asteroids that revolve around the Sun. When they enter Earth's atmosphere they glow as <strong>meteors</strong> (shooting stars). If they survive and reach the surface they become <strong>meteorites</strong>.</div>
            </div>
          </div>
          <div className="sts-halley-note">
            <p>☄️ <strong>Halley's Comet</strong> is the most famous periodic comet, appearing roughly every <strong>76 years</strong>. It was last seen from Earth in 1986 and is expected to return around 2061. Its predictable returns allowed astronomers to confirm that comets orbit the Sun.</p>
          </div>
          <div className="sts-meteor-split">
            <div className="sts-meteor-card shooting">
              <span className="sts-meteor-card-icon">✨</span>
              <div className="sts-meteor-card-name">Meteor (Shooting Star)</div>
              <div className="sts-meteor-card-text">When a meteoroid enters Earth's atmosphere, air friction heats it up, producing a bright streak of light. This is called a meteor or shooting star. Most burn up completely before reaching the surface.</div>
            </div>
            <div className="sts-meteor-card landed">
              <span className="sts-meteor-card-icon">🪨</span>
              <div className="sts-meteor-card-name">Meteorite</div>
              <div className="sts-meteor-card-text">A meteor that is large enough to survive its fiery journey through the atmosphere and reaches Earth's surface is called a meteorite. It can create a large crater upon impact.</div>
            </div>
          </div>

          <div className="sts-pull-quote">
            <p>"The universe is made up of stars that burn like the Sun, planets that travel in patient orbits, moons that reflect borrowed light, and comets that arc across the void in lonely, periodic journeys — all bound together by the invisible thread of gravity."</p>
          </div>

          {/* ══ FAQ ══ */}
          <div className="sts-divider"><div className="sts-divider-mark" /></div>
          <div className="sts-faq-header"><span className="sts-faq-kicker">Exam Preparation</span></div>
          <h2 className="sts-faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div className={`sts-faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button className="sts-faq-q" onClick={() => toggle(i)}>
                <span className="sts-faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="sts-faq-icon">{openIndex === i ? "▴" : "▾"}</span>
              </button>
              {openIndex === i && (
                <div className="sts-faq-ans">
                  <div className="sts-faq-ans-inner">{faq.a}</div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
