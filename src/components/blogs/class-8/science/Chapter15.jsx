import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #0a0800;
    --ink2:       #1a1400;
    --muted:      #5a4a10;
    --paper:      #fffbf0;
    --paper2:     #fff3cc;
    --accent:     #d97706;
    --accent2:    #b45309;
    --accent-lt:  #fef3c7;
    --gold:       #f59e0b;
    --gold-lt:    #fef9c3;
    --sky:        #0284c7;
    --sky-lt:     #e0f2fe;
    --teal:       #0f766e;
    --teal-lt:    #ccfbf1;
    --red:        #be123c;
    --red-lt:     #ffe4e6;
    --green:      #166534;
    --green-lt:   #dcfce7;
    --violet:     #7c3aed;
    --violet-lt:  #ede9fe;
    --blue:       #1e40af;
    --blue-lt:    #dbeafe;
    --slate:      #334155;
    --rule:       #fcd34d;
    --white:      #ffffff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .snp-root { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }

  /* ═══ HERO — deep storm-charcoal / lightning night ═══ */
  .snp-hero {
    background: linear-gradient(135deg, #060400 0%, #100c00 40%, #1a1400 70%, #0a0800 100%);
    min-height: 88vh; display: flex; align-items: flex-end;
    position: relative; overflow: hidden; padding: 0 0 64px;
  }
  @media (max-width: 700px) { .snp-hero { min-height: auto; align-items: flex-start; padding: 72px 0 48px; } }
  .snp-hero::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #f59e0b 0%, #d97706 22%, #be123c 44%, #7c3aed 66%, #0284c7 84%, #166534 100%);
  }
  /* Storm cloud / lightning texture */
  .snp-hero-storm {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      radial-gradient(ellipse 400px 200px at 30% 30%, rgba(245,158,11,0.07) 0%, transparent 100%),
      radial-gradient(ellipse 300px 150px at 70% 20%, rgba(245,158,11,0.05) 0%, transparent 100%),
      repeating-linear-gradient(135deg, rgba(245,158,11,0.02) 0px, rgba(245,158,11,0.02) 1px, transparent 1px, transparent 30px);
  }
  /* Animated lightning bolt shapes */
  .snp-bolt-a { position: absolute; top: 20%; left: 15%; width: 2px; height: 60px; background: linear-gradient(180deg, rgba(245,158,11,0.30) 0%, transparent 100%); transform: rotate(8deg); pointer-events: none; }
  .snp-bolt-b { position: absolute; top: 35%; left: 17%; width: 2px; height: 40px; background: linear-gradient(180deg, rgba(245,158,11,0.20) 0%, transparent 100%); transform: rotate(-5deg); pointer-events: none; }
  .snp-hero-ring { position: absolute; top: 50%; right: 5%; transform: translateY(-50%); width: clamp(140px,22vw,290px); height: clamp(140px,22vw,290px); border-radius: 50%; border: 1.5px solid rgba(245,158,11,0.18); pointer-events: none; }
  .snp-hero-ring::before { content: ''; position: absolute; inset: 18%; border-radius: 50%; border: 1px dashed rgba(217,119,6,0.14); }
  .snp-hero-ring::after  { content: ''; position: absolute; inset: 40%; border-radius: 50%; background: rgba(245,158,11,0.07); }
  .snp-glow-a { position: absolute; top: 12%; left: 5%; width: 320px; height: 320px; border-radius: 50%; background: radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 68%); pointer-events: none; }
  .snp-glow-b { position: absolute; bottom: 10%; right: 20%; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, rgba(190,18,60,0.08) 0%, transparent 70%); pointer-events: none; }
  .snp-hero-bg-num { position: absolute; bottom: -80px; right: -20px; font-family: 'Montserrat', sans-serif; font-size: clamp(200px,34vw,480px); font-weight: 900; line-height: 1; color: rgba(255,255,255,0.018); letter-spacing: -0.04em; user-select: none; pointer-events: none; }
  .snp-hero-inner { max-width: 900px; width: 100%; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }
  .snp-overline { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #fcd34d; margin-bottom: 24px; display: flex; align-items: center; gap: 14px; }
  .snp-overline::before, .snp-overline::after { content: ''; flex: 0 0 40px; height: 1px; background: #fcd34d; }
  .snp-hero-title { font-family: 'Montserrat', sans-serif; font-size: clamp(32px,6vw,68px); font-weight: 900; color: #fff; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px; }
  .snp-hero-title em   { font-style: normal; color: #fcd34d; }
  .snp-hero-title .em2 { color: #fda4af; }
  .snp-hero-bar { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; margin-top: 8px; }
  .snp-hero-bar-item { flex: 1 1 150px; padding: 0 24px 0 0; border-right: 1px solid rgba(255,255,255,0.08); margin-right: 24px; }
  .snp-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .snp-bar-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 5px; }
  .snp-bar-value { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.72); }

  /* ═══ BODY ═══ */
  .snp-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }

  /* ═══ INTRO CARD ═══ */
  .snp-intro-card { background: linear-gradient(135deg, #060400 0%, #1a1400 100%); border-left: 5px solid #f59e0b; border-radius: 4px; padding: 38px 42px; margin-bottom: 64px; position: relative; overflow: hidden; }
  .snp-intro-card::after { content: '⚡'; position: absolute; right: 28px; top: 50%; transform: translateY(-50%); font-size: 96px; opacity: 0.09; }
  .snp-intro-card p { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.86); line-height: 1.8; margin: 0 0 14px; }
  .snp-intro-card p:last-child { margin: 0; }
  .snp-intro-card strong { color: #fcd34d; }

  /* ═══ DIVIDER ═══ */
  .snp-divider { margin: 60px 0; display: flex; align-items: center; gap: 16px; }
  .snp-divider::before, .snp-divider::after { content: ''; flex: 1; height: 1px; background: var(--rule); }
  .snp-divider-mark { width: 9px; height: 9px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }

  /* ═══ SECTION HEADER ═══ */
  .snp-sec-head { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 34px; border-bottom: 2px solid var(--rule); padding-bottom: 20px; }
  .snp-sec-num { font-family: 'Montserrat', sans-serif; font-size: 58px; font-weight: 900; color: var(--rule); line-height: 1; flex-shrink: 0; }
  .snp-sec-title-wrap { padding-top: 8px; }
  .snp-sec-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .snp-sec-title { font-family: 'Montserrat', sans-serif; font-size: clamp(22px,3.5vw,32px); font-weight: 800; color: var(--ink); line-height: 1.15; letter-spacing: -0.02em; }
  .snp-sec-title span { color: var(--accent); }

  /* ═══ BODY TEXT ═══ */
  .snp-body-text { font-family: 'Inter', sans-serif; font-size: 17px; color: var(--ink2); line-height: 1.85; margin-bottom: 28px; }
  .snp-body-text strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S1: ELECTRIC CHARGE — wide banner def ═══ */
  .snp-charge-banner { background: var(--white); border: 2px solid var(--rule); border-radius: 14px; padding: 0; margin-bottom: 28px; overflow: hidden; display: grid; grid-template-columns: 7px 1fr; }
  .snp-charge-stripe { background: linear-gradient(180deg, #f59e0b 0%, #d97706 50%, #b45309 100%); }
  .snp-charge-content { padding: 28px 32px; }
  .snp-charge-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
  .snp-charge-title { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 800; color: var(--ink); line-height: 1.35; margin-bottom: 10px; }
  .snp-charge-sub { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--muted); line-height: 1.68; }
  .snp-charge-sub strong { color: var(--accent2); font-weight: 700; }

  /* ═══ S1: STATIC CHARGE + RUBBING CARD ═══ */
  .snp-rub-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
  @media (max-width: 580px) { .snp-rub-pair { grid-template-columns: 1fr; } }
  .snp-rub-card { border-radius: 10px; padding: 22px 20px; }
  .snp-rub-card.static  { background: var(--accent-lt); border: 2px solid var(--gold); }
  .snp-rub-card.rubbing { background: var(--red-lt); border: 2px solid var(--red); }
  .snp-rub-icon { font-size: 30px; margin-bottom: 10px; display: block; }
  .snp-rub-name { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; margin-bottom: 7px; }
  .static  .snp-rub-name { color: var(--accent2); }
  .rubbing .snp-rub-name { color: var(--red); }
  .snp-rub-text { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.7; }
  .snp-rub-text strong { font-weight: 600; }
  .static  .snp-rub-text strong { color: var(--accent2); }
  .rubbing .snp-rub-text strong { color: var(--red); }

  .snp-conductor-note { background: var(--sky-lt); border-left: 4px solid var(--sky); border-radius: 4px; padding: 16px 20px; margin-bottom: 28px; }
  .snp-conductor-note p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .snp-conductor-note strong { color: var(--sky); font-weight: 700; }

  /* ═══ SVG WRAPPER ═══ */
  .snp-svg-wrap { background: var(--white); border: 1.5px solid var(--rule); border-radius: 12px; padding: 24px; margin-bottom: 28px; overflow-x: auto; }
  .snp-svg-title { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 16px; text-align: center; }

  /* ═══ S2: CHARGES — types + interactions ═══ */
  .snp-charge-types { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--rule); margin-bottom: 24px; }
  @media (max-width: 560px) { .snp-charge-types { grid-template-columns: 1fr; } }
  .snp-ct-col { padding: 24px 22px; }
  .snp-ct-col.positive { background: var(--gold-lt); }
  .snp-ct-col.negative { background: var(--blue-lt); border-left: 2px solid var(--rule); }
  @media (max-width: 560px) { .snp-ct-col.negative { border-left: none; border-top: 2px solid var(--rule); } }
  .snp-ct-head { font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900; margin-bottom: 8px; }
  .positive .snp-ct-head { color: var(--accent2); }
  .negative .snp-ct-head { color: var(--blue); }
  .snp-ct-label { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
  .snp-ct-def { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.68; margin-bottom: 12px; }
  .snp-ct-example { background: rgba(255,255,255,0.7); border-radius: 6px; padding: 10px 14px; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; }
  .positive .snp-ct-example { color: var(--accent2); }
  .negative .snp-ct-example { color: var(--blue); }

  /* ═══ S2: INTERACTION CARDS ═══ */
  .snp-interact-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 28px; }
  @media (max-width: 640px) { .snp-interact-grid { grid-template-columns: 1fr; } }
  .snp-interact-card { border-radius: 10px; padding: 20px 18px; text-align: center; }
  .snp-interact-card.repel1 { background: var(--red-lt);    border: 2px solid var(--red);    border-top: 4px solid var(--red);    }
  .snp-interact-card.attract { background: var(--green-lt);  border: 2px solid var(--green);  border-top: 4px solid var(--green);  }
  .snp-interact-card.repel2  { background: var(--blue-lt);   border: 2px solid var(--blue);   border-top: 4px solid var(--blue);   }
  .snp-interact-icon { font-size: 30px; margin-bottom: 10px; display: block; }
  .snp-interact-title { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 800; margin-bottom: 6px; }
  .repel1  .snp-interact-title { color: var(--red); }
  .attract .snp-interact-title { color: var(--green); }
  .repel2  .snp-interact-title { color: var(--blue); }
  .snp-interact-rule { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; margin-bottom: 6px; }
  .repel1  .snp-interact-rule { color: var(--red); }
  .attract .snp-interact-rule { color: var(--green); }
  .repel2  .snp-interact-rule { color: var(--blue); }
  .snp-interact-eg { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.55; }

  /* ═══ S2: INDUCED CHARGE BOX ═══ */
  .snp-induction-box { background: var(--violet-lt); border-left: 4px solid var(--violet); border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .snp-induction-box p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .snp-induction-box strong { color: var(--violet); font-weight: 700; }

  /* ═══ S3: ELECTROSCOPE ═══ */
  .snp-electroscope-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px; align-items: start; }
  @media (max-width: 600px) { .snp-electroscope-layout { grid-template-columns: 1fr; } }
  .snp-electroscope-text {}
  .snp-electroscope-def { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.78; margin-bottom: 16px; }
  .snp-electroscope-def strong { color: var(--accent2); font-weight: 700; }
  .snp-esc-steps { display: flex; flex-direction: column; gap: 10px; }
  .snp-esc-step { background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 12px 16px; }
  .snp-esc-step-title { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
  .snp-esc-step-desc  { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.55; }

  .snp-earth-box { background: var(--green-lt); border-left: 4px solid var(--green); border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .snp-earth-box p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .snp-earth-box strong { color: var(--green); font-weight: 700; }

  /* ═══ S4: LIGHTNING — dramatic dark box ═══ */
  .snp-lightning-def { background: linear-gradient(135deg, #060400 0%, #1a1400 100%); border-radius: 12px; padding: 28px 30px; margin-bottom: 24px; border: 1.5px solid rgba(245,158,11,0.22); display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap; }
  .snp-lightning-bolt-icon { font-size: 48px; flex-shrink: 0; }
  .snp-lightning-def-text {}
  .snp-lightning-def-title { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 800; color: #fcd34d; margin-bottom: 8px; }
  .snp-lightning-body { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.78; }
  .snp-lightning-body strong { color: #fde68a; }

  /* ═══ S4: LIGHTNING CONDUCTOR LAYOUT ═══ */
  .snp-lc-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; align-items: start; }
  @media (max-width: 580px) { .snp-lc-layout { grid-template-columns: 1fr; } }

  /* ═══ S4: LIGHTNING SAFETY ═══ */
  .snp-safety-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 28px; }
  @media (max-width: 580px) { .snp-safety-grid { grid-template-columns: 1fr; } }
  .snp-safety-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 16px 18px; display: flex; gap: 14px; align-items: flex-start; }
  .snp-safety-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
  .snp-safety-text { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink2); line-height: 1.6; }
  .snp-safety-text strong { color: var(--accent2); font-weight: 700; }

  /* ═══ S5: EARTHQUAKES ═══ */
  .snp-eq-def { background: linear-gradient(135deg, #060400 0%, #1a1400 100%); border-radius: 12px; padding: 26px 28px; margin-bottom: 24px; border: 1.5px solid rgba(245,158,11,0.22); }
  .snp-eq-def-title { font-family: 'Montserrat', sans-serif; font-size: 19px; font-weight: 800; color: #fcd34d; margin-bottom: 8px; }
  .snp-eq-def-text { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.78; }
  .snp-eq-def-text strong { color: #fde68a; }

  /* ═══ S5: RICHTER + SEISMOGRAPH ═══ */
  .snp-rs-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
  @media (max-width: 560px) { .snp-rs-pair { grid-template-columns: 1fr; } }
  .snp-rs-card { border-radius: 10px; padding: 22px 20px; }
  .snp-rs-card.richter    { background: var(--accent-lt); border: 2px solid var(--gold); }
  .snp-rs-card.seismograph{ background: var(--teal-lt);   border: 2px solid var(--teal); }
  .snp-rs-icon { font-size: 28px; margin-bottom: 10px; display: block; }
  .snp-rs-name { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; margin-bottom: 6px; }
  .richter     .snp-rs-name { color: var(--accent2); }
  .seismograph .snp-rs-name { color: var(--teal); }
  .snp-rs-text { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.68; }
  .snp-rs-text strong { font-weight: 600; }
  .richter     .snp-rs-text strong { color: var(--accent2); }
  .seismograph .snp-rs-text strong { color: var(--teal); }

  /* ═══ S5: EARTHQUAKE PROTECTION ═══ */
  .snp-eq-protect { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--rule); margin-bottom: 24px; }
  @media (max-width: 580px) { .snp-eq-protect { grid-template-columns: 1fr; } }
  .snp-eq-protect-col { padding: 0; }
  .snp-eq-protect-col.outdoors { background: var(--sky-lt); }
  .snp-eq-protect-col.indoors  { background: var(--green-lt); border-left: 2px solid var(--rule); }
  @media (max-width: 580px) { .snp-eq-protect-col.indoors { border-left: none; border-top: 2px solid var(--rule); } }
  .snp-eqp-head { padding: 16px 22px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid rgba(0,0,0,0.06); }
  .snp-eqp-head-icon { font-size: 22px; }
  .snp-eqp-head-title { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; }
  .outdoors .snp-eqp-head-title { color: var(--sky); }
  .indoors  .snp-eqp-head-title { color: var(--green); }
  .snp-eqp-body { padding: 16px 22px; display: flex; flex-direction: column; gap: 9px; }
  .snp-eqp-item { background: rgba(255,255,255,0.6); border-radius: 6px; padding: 10px 13px; font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.6; }

  /* ═══ PULL QUOTE ═══ */
  .snp-pull-quote { border-left: 4px solid var(--gold); padding: 22px 30px; margin: 36px 0; background: var(--gold-lt); border-radius: 0 6px 6px 0; }
  .snp-pull-quote p { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: var(--accent2); line-height: 1.7; font-style: italic; }

  /* ═══ FAQ ═══ */
  .snp-faq-header { margin-bottom: 8px; }
  .snp-faq-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
  .snp-faq-title { font-family: 'Montserrat', sans-serif; font-size: clamp(24px,4vw,34px); font-weight: 800; color: var(--ink); margin-bottom: 28px; letter-spacing: -0.02em; }
  .snp-faq-item { border: 1.5px solid var(--rule); border-radius: 8px; margin-bottom: 12px; overflow: hidden; background: var(--white); }
  .snp-faq-item.open { border-color: var(--gold); }
  .snp-faq-q { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; text-align: left; gap: 16px; }
  .snp-faq-q-text { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); line-height: 1.4; }
  .snp-faq-icon { color: var(--gold); font-size: 20px; flex-shrink: 0; }
  .snp-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
  .snp-faq-ans.visible { max-height: 800px; }
  .snp-faq-ans-inner { padding: 0 24px 22px; font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.82; border-top: 1px solid var(--rule); padding-top: 18px; }
  .snp-faq-ans-inner strong { color: var(--accent2); font-weight: 600; }
`;

const faqs = [
  { q: "What is electric charge? What is charging by rubbing? What causes it?", a: "Electric charge is the property of matter due to which it experiences electrical phenomena. Charging by rubbing: When two objects are rubbed with each other, both objects acquire charge. Example: When you rub a comb on dry hair, the comb acquires charge and can attract small pieces of paper. Cause: When objects are rubbed, friction occurs between their surfaces which produces heat energy, due to which charge is generated on the surfaces. The charges generated by rubbing are called static charges because they hold on the surface and do not move. Note: Conductors like aluminium, copper, and iron do NOT charge easily on rubbing because the charges start flowing across the conductor and produce an electric current." },
  { q: "What are the two types of electric charges? How were they named?", a: "There are two types of electric charges: Positive (+) charge and Negative (−) charge. Naming convention: Conventionally, when a glass rod is rubbed with silk cloth, the charge acquired by the glass rod is taken as positive (+) and the charge on the silk cloth is taken as negative (−). This convention was established so all other charges could be compared. Note: Two same objects when rubbed together acquire similar types of charges (e.g., two balloons rubbed against a wall both become negatively charged)." },
  { q: "What are the interactions between charged objects? State the laws of charge interaction.", a: "There are three rules for charge interactions: (1) Like charges REPEL each other — Two objects with the same type of charge push each other away. (+ve repels +ve, and −ve repels −ve). Example: Two positively charged balloons repel each other. (2) Unlike charges ATTRACT each other — Two objects with opposite charges pull each other. (+ve attracts −ve). Example: Plastic refill rubbed with polythene — the positive refill attracts the negative polythene. (3) Charged object attracts uncharged object — A charged object can attract an uncharged object through electric induction. When the charged object comes near, it induces the opposite charge in the uncharged object. Example: A rubbed comb attracts small pieces of paper." },
  { q: "What is an electroscope? How does it work?", a: "An electroscope is a device used to test whether an object is carrying an electric charge or not. Components: Plastic straw, cardboard cover, metal clip, two gold leaves, glass bottle. Working: When we touch the charged object with the metal clip, charge flows through the metal clip to both the gold leaves. Both gold leaves get the same type of charge and repel each other — they spread apart (diverge). The divergence (spreading) of the gold leaves shows that the object is charged. When a person touches the top of the metal clip: the charge flows from the leaves through the person's body to the earth — the leaves converge (close back) because there is no longer any charge to cause repulsion. This is called discharging." },
  { q: "What is transfer of charge? What are charging by conduction, discharging, and earthing?", a: "Transfer of charge: Electrical charge can be transferred from a charged object to another uncharged object through a metal conductor. Charging by conduction: When a charged object touches a conductor, charge flows from the charged object to the conductor — this is charging by conduction. Discharging: The process by which a charged object loses its charge is called discharging. Earthing: The process of transferring charge from a charged object to the earth is called earthing (or grounding). This is because the earth is a very large conductor that can absorb any amount of charge without becoming significantly charged itself." },
  { q: "What is lightning? How is it caused? What is a lightning conductor and how does it work?", a: "Lightning is the visible flash of light produced when electrically charged clouds discharge their accumulated charge — either between two clouds or between a cloud and the earth's surface. Cause of lightning: During a thunderstorm, the clouds accumulate large amounts of electric charge. When the potential difference between clouds or between a cloud and the earth becomes very large, the charge is released in a sudden massive discharge — producing a bright flash (lightning) and the sound of thunder. Lightning conductor: A lightning conductor is a metallic rod (taller than the building) installed at the top of buildings to protect them from lightning. When lightning strikes, the charge travels down the metal rod and is safely transferred to the ground (earth). The lightning conductor always taller than the building and is connected to a copper plate buried in the ground." },
  { q: "What are the safety measures to be taken during lightning/thunderstorm?", a: "When lightning strikes, follow these safety measures: (1) After hearing the last thunder, wait some time before coming out — lightning can strike after the main storm. (2) Inside a car or bus, you are safe — keep windows and doors shut. (3) Do NOT use open vehicles like motorbikes, tractors — they provide no protection. (4) Do NOT take shelter under a tree — lightning can strike tall trees. If forced, choose the shortest tree. (5) In an open space, squat low on the ground — do not lie flat. (6) Do NOT stand on high ground — clouds are closer to the earth at higher elevations. (7) Stay away from metal wires, fences, metal pipes, and any communication wires." },
  { q: "What is an earthquake? What causes it?", a: "Earthquake: A sudden shaking or trembling of the earth that lasts for a very short time is called an earthquake. Cause: Earthquakes are caused by disturbances deep inside the earth's crust. The earth's outer shell (crust) is not one piece — it is made of huge moving plates. When these tectonic plates slide past one another or collide with each other, it creates tremendous forces that shake the earth's surface. The point inside the earth where the disturbance originates is called the focus. The point on the surface directly above the focus is called the epicentre — this is where the shaking is strongest." },
  { q: "What is the Richter scale? What is a seismograph?", a: "Richter scale: The power (magnitude) of an earthquake is expressed on a scale called the Richter scale. It was developed by Charles Richter. Important: The Richter scale is NOT linear in nature — it is logarithmic. This means an earthquake measuring 7 on the Richter scale is 10 times more powerful than one measuring 6, and 100 times more powerful than one measuring 5. Seismograph: Earthquakes produce waves on the surface of the earth called seismic waves. These waves are detected and recorded by an instrument called a seismograph. The seismograph has a heavy pendulum with a pen attached that records the movement of the ground on a rotating drum of chart paper." },
  { q: "What are the protection measures during an earthquake?", a: "If you are OUTDOORS during an earthquake: (a) If in a car or bus — do not come out. Ask the driver to move slowly to a clear spot. Do not come out until tremors stop. (b) Find a clear spot away from buildings, trees, and overhead power lines — drop to the ground. If you are at HOME/SCHOOL or OFFICE during an earthquake: (a) Take shelter under a table and stay there until the shaking stops. (b) Stay away from tall and heavy objects that might fall on you. (c) If you are in bed, do not get up — protect your head with a pillow." },
];

export default function SomeNaturalPhenomena() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="snp-root">
        {/* HERO */}
        <div className="snp-hero">
          <div className="snp-hero-storm" />
          <div className="snp-bolt-a" />
          <div className="snp-bolt-b" />
          <div className="snp-hero-ring" />
          <div className="snp-glow-a" />
          <div className="snp-glow-b" />
          <div className="snp-hero-bg-num">15</div>
          <div className="snp-hero-inner">
            <div className="snp-overline">Class 8 Science — Chapter 15</div>
            <h1 className="snp-hero-title">Some <em>Natural</em><br /><span className="em2">Phenomena</span></h1>
            <div className="snp-hero-bar">
              <div className="snp-hero-bar-item"><div className="snp-bar-label">Chapter</div><div className="snp-bar-value">15 — Physics</div></div>
              <div className="snp-hero-bar-item"><div className="snp-bar-label">Topics</div><div className="snp-bar-value">Static Electricity · Lightning · Earthquakes · Safety</div></div>
              <div className="snp-hero-bar-item"><div className="snp-bar-label">Board</div><div className="snp-bar-value">NCERT / CBSE</div></div>
            </div>
          </div>
        </div>

        <div className="snp-body">
          <div className="snp-intro-card">
            <p>Two of nature's most awe-inspiring and dangerous phenomena — <strong>lightning</strong> and <strong>earthquakes</strong> — are the subject of this chapter.</p>
            <p>We'll explore the science of <strong>static electricity</strong> and electric charge, how charge is transferred, how lightning forms and how to stay safe, and how the earth's moving plates produce earthquakes — along with the instruments and safety measures used to understand and survive them.</p>
          </div>

          {/* S1: ELECTRIC CHARGE */}
          <div className="snp-sec-head">
            <div className="snp-sec-num">1</div>
            <div className="snp-sec-title-wrap">
              <div className="snp-sec-kicker">Electrostatics</div>
              <h2 className="snp-sec-title">Charging by <span>Rubbing</span></h2>
            </div>
          </div>
          <div className="snp-charge-banner">
            <div className="snp-charge-stripe" />
            <div className="snp-charge-content">
              <div className="snp-charge-label">Definition — Electric Charge</div>
              <div className="snp-charge-title">Electric charge is the property of matter due to which it experiences electrical phenomena.</div>
              <div className="snp-charge-sub">When two objects are rubbed with each other, <strong>friction</strong> between their surfaces generates <strong>heat energy</strong>, which causes charge to appear on both surfaces. The charges that stay fixed on the surface (not moving) are called <strong>static charges</strong>.</div>
            </div>
          </div>
          <div className="snp-rub-pair">
            <div className="snp-rub-card static">
              <span className="snp-rub-icon">⚡</span>
              <div className="snp-rub-name">Static Charge</div>
              <div className="snp-rub-text">Electric charges generated by rubbing are called <strong>static charges</strong> — they hold on the surface and do not move. Unlike electric current (where charges flow), static charge stays put on the surface of the object.</div>
            </div>
            <div className="snp-rub-card rubbing">
              <span className="snp-rub-icon">🔴</span>
              <div className="snp-rub-name">Charging by Rubbing</div>
              <div className="snp-rub-text">When two objects rub against each other, <strong>both acquire charge</strong>. Example: Rubbing a comb on dry hair — the comb charges and can attract small bits of paper. Friction creates energy that strips electrons from one surface to the other.</div>
            </div>
          </div>
          <div className="snp-conductor-note">
            <p>⚠️ <strong>Why conductors don't charge by rubbing:</strong> Metals like aluminium, copper, and iron do NOT charge easily when rubbed — because as soon as charge appears, it immediately flows away through the conductor, producing an electric current instead of accumulating as static charge.</p>
          </div>

          {/* SVG — Charge interaction diagram */}
          <div className="snp-svg-wrap">
            <div className="snp-svg-title">⚡ Types of Charges — Naming Convention</div>
            <svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px"}}>
              {/* Glass rod */}
              <rect x="60" y="60" width="130" height="40" rx="8" fill="#fde68a" stroke="#d97706" strokeWidth="2"/>
              <text x="125" y="82" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#92400e">Glass Rod</text>
              <text x="125" y="118" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#d97706">Positive (+)</text>
              <text x="125" y="132" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#92400e">after rubbing with silk</text>
              {/* Plus charges on glass rod */}
              {[80,110,140,165].map((x,i) => <text key={i} x={x} y="83" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="14" fontWeight="900" fill="#b45309">+</text>)}
              {/* Silk cloth */}
              <rect x="370" y="60" width="130" height="40" rx="8" fill="#dbeafe" stroke="#1e40af" strokeWidth="2"/>
              <text x="435" y="82" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#1e40af">Silk Cloth</text>
              <text x="435" y="118" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#1e40af">Negative (−)</text>
              <text x="435" y="132" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#1d4ed8">after rubbing with glass</text>
              {/* Minus charges on silk */}
              {[390,415,445,475].map((x,i) => <text key={i} x={x} y="85" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="16" fontWeight="900" fill="#1e40af">−</text>)}
              {/* Rub arrows */}
              <text x="280" y="75" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="18" fontWeight="900" fill="#94a3b8">↔</text>
              <text x="280" y="92" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">Rub together</text>
              {/* Top label */}
              <text x="280" y="22" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="13" fontWeight="800" fill="#374151">Glass rod + Silk cloth → Friction → Charging</text>
              <text x="280" y="40" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#94a3b8">This convention defines positive and negative charge</text>
            </svg>
          </div>

          {/* S2: TYPES & INTERACTIONS */}
          <div className="snp-divider"><div className="snp-divider-mark" /></div>
          <div className="snp-sec-head">
            <div className="snp-sec-num">2</div>
            <div className="snp-sec-title-wrap">
              <div className="snp-sec-kicker">Charge Behaviour</div>
              <h2 className="snp-sec-title">Types of Charges &amp; Their <span>Interactions</span></h2>
            </div>
          </div>
          <div className="snp-charge-types">
            <div className="snp-ct-col positive">
              <div className="snp-ct-head">(+) Positive</div>
              <div className="snp-ct-label">Type A</div>
              <div className="snp-ct-def">The charge acquired by a glass rod when rubbed with silk is defined as positive charge. Positive charges are associated with protons. Represented by the symbol (+).</div>
              <div className="snp-ct-example">Example: Glass rod rubbed with silk → Positive</div>
            </div>
            <div className="snp-ct-col negative">
              <div className="snp-ct-head">(−) Negative</div>
              <div className="snp-ct-label">Type B</div>
              <div className="snp-ct-def">The charge acquired by the silk cloth when rubbed with glass is defined as negative charge. Negative charges are associated with electrons. Represented by the symbol (−).</div>
              <div className="snp-ct-example">Example: Silk cloth rubbed with glass → Negative</div>
            </div>
          </div>
          <p className="snp-body-text">The three fundamental rules for how charges interact:</p>
          <div className="snp-interact-grid">
            <div className="snp-interact-card repel1">
              <span className="snp-interact-icon">🔴🔴</span>
              <div className="snp-interact-title">Like Charges Repel</div>
              <div className="snp-interact-rule">(+) repels (+)</div>
              <div className="snp-interact-eg">Two positively charged balloons push each other away. Two negatively charged objects also repel.</div>
            </div>
            <div className="snp-interact-card attract">
              <span className="snp-interact-icon">🔴🔵</span>
              <div className="snp-interact-title">Unlike Charges Attract</div>
              <div className="snp-interact-rule">(+) attracts (−)</div>
              <div className="snp-interact-eg">Plastic refill (+) rubbed with polythene (−) — they attract each other strongly.</div>
            </div>
            <div className="snp-interact-card repel2">
              <span className="snp-interact-icon">🔵🔵</span>
              <div className="snp-interact-title">Like Charges Repel</div>
              <div className="snp-interact-rule">(−) repels (−)</div>
              <div className="snp-interact-eg">Two negatively charged objects push each other away. Same as two positive charges.</div>
            </div>
          </div>
          <div className="snp-induction-box">
            <p>🔬 <strong>Charged object attracts uncharged object</strong> — through <strong>electric induction</strong>. When any charged object comes closer to an uncharged object, the opposite charge is induced in the uncharged object — causing attraction. Example: A rubbed comb attracts small pieces of paper even though the paper was not charged initially.</p>
          </div>

          {/* SVG — Charge interactions */}
          <div className="snp-svg-wrap">
            <div className="snp-svg-title">⚡ Charge Interactions — Repulsion &amp; Attraction</div>
            <svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px"}}>
              <defs>
                <marker id="arrowRepL" markerWidth="7" markerHeight="7" refX="2" refY="3.5" orient="auto"><path d="M7,0 L7,7 L0,3.5 z" fill="#be123c"/></marker>
                <marker id="arrowRepR" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="#be123c"/></marker>
                <marker id="arrowAtL" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="#166534"/></marker>
                <marker id="arrowAtR" markerWidth="7" markerHeight="7" refX="2" refY="3.5" orient="auto"><path d="M7,0 L7,7 L0,3.5 z" fill="#166534"/></marker>
              </defs>
              {/* REPULSION: +  + */}
              <text x="140" y="18" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#be123c">REPULSION (Like Charges)</text>
              <circle cx="95" cy="65" r="28" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
              <text x="95" y="71" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="20" fontWeight="900" fill="#b45309">+</text>
              <circle cx="185" cy="65" r="28" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
              <text x="185" y="71" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="20" fontWeight="900" fill="#b45309">+</text>
              <line x1="126" y1="65" x2="96" y2="65" stroke="#be123c" strokeWidth="2.5" markerEnd="url(#arrowRepL)"/>
              <line x1="154" y1="65" x2="184" y2="65" stroke="#be123c" strokeWidth="2.5" markerEnd="url(#arrowRepR)"/>
              <text x="140" y="115" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#be123c">Push away from each other</text>
              <text x="140" y="130" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">Two +ve charged balloons</text>

              {/* VERTICAL SEPARATOR */}
              <line x1="280" y1="10" x2="280" y2="155" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6,4"/>

              {/* ATTRACTION: + – */}
              <text x="420" y="18" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#166534">ATTRACTION (Unlike Charges)</text>
              <circle cx="375" cy="65" r="28" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
              <text x="375" y="71" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="20" fontWeight="900" fill="#b45309">+</text>
              <circle cx="465" cy="65" r="28" fill="#dbeafe" stroke="#1e40af" strokeWidth="2"/>
              <text x="465" y="71" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="22" fontWeight="900" fill="#1e40af">−</text>
              <line x1="348" y1="65" x2="378" y2="65" stroke="#166534" strokeWidth="2.5" markerEnd="url(#arrowAtL)"/>
              <line x1="492" y1="65" x2="462" y2="65" stroke="#166534" strokeWidth="2.5" markerEnd="url(#arrowAtR)"/>
              <text x="420" y="115" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#166534">Pull toward each other</text>
              <text x="420" y="130" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">Plastic refill (+) and polythene (−)</text>
            </svg>
          </div>

          {/* S3: TRANSFER OF CHARGE + ELECTROSCOPE */}
          <div className="snp-divider"><div className="snp-divider-mark" /></div>
          <div className="snp-sec-head">
            <div className="snp-sec-num">3</div>
            <div className="snp-sec-title-wrap">
              <div className="snp-sec-kicker">Detection &amp; Transfer</div>
              <h2 className="snp-sec-title">Transfer of Charge &amp; <span>Electroscope</span></h2>
            </div>
          </div>
          <div className="snp-electroscope-layout">
            <div className="snp-electroscope-text">
              <div className="snp-electroscope-def">An <strong>electroscope</strong> is a device used to test whether an object is carrying a charge. It consists of a plastic straw, cardboard cover, metal clip, two thin gold leaves, and a glass bottle. The principle: both leaves get the same charge and repel each other (diverge).</div>
              <div className="snp-esc-steps">
                <div className="snp-esc-step"><div className="snp-esc-step-title">Step 1 — Touch charged object to metal clip</div><div className="snp-esc-step-desc">Charge flows from the object through the metal clip into both gold leaves simultaneously.</div></div>
                <div className="snp-esc-step"><div className="snp-esc-step-title">Step 2 — Leaves diverge (spread apart)</div><div className="snp-esc-step-desc">Both leaves carry the same charge → they repel each other → spread apart. This shows the object was charged.</div></div>
                <div className="snp-esc-step"><div className="snp-esc-step-title">Step 3 — Person touches metal clip</div><div className="snp-esc-step-desc">Charge flows through person's body to earth → leaves lose charge → converge back (close together). This is discharging.</div></div>
              </div>
            </div>
            {/* SVG Electroscope diagram */}
            <div className="snp-svg-wrap" style={{margin:0}}>
              <div className="snp-svg-title">🔬 Electroscope — How It Works</div>
              <svg viewBox="0 0 220 260" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"220px"}}>
                {/* Plastic straw */}
                <rect x="60" y="10" width="100" height="10" rx="4" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
                <text x="110" y="7" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#64748b">Plastic straw</text>
                {/* Cardboard cover */}
                <rect x="50" y="20" width="120" height="14" rx="3" fill="#d97706" stroke="#92400e" strokeWidth="1.5"/>
                <text x="110" y="31" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#fff">Cardboard cover</text>
                {/* Metal clip vertical bar */}
                <rect x="106" y="34" width="8" height="60" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
                <text x="165" y="55" fontFamily="Inter,sans-serif" fontSize="9" fill="#64748b">Metal clip</text>
                <line x1="155" y1="55" x2="116" y2="55" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
                {/* Glass bottle */}
                <rect x="60" y="80" width="100" height="140" rx="10" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="5,3" opacity="0.5"/>
                <text x="110" y="238" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#0284c7">Glass bottle</text>
                {/* Gold leaves */}
                <line x1="110" y1="95" x2="86" y2="140" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
                <line x1="110" y1="95" x2="134" y2="140" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
                <text x="60" y="155" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#f59e0b">Gold leaves</text>
                <text x="60" y="166" fontFamily="Inter,sans-serif" fontSize="8" fill="#92400e">(spread = charged)</text>
                {/* Charge symbols on leaves */}
                <text x="80" y="135" fontFamily="Montserrat,sans-serif" fontSize="10" fontWeight="900" fill="#d97706">+</text>
                <text x="136" y="135" fontFamily="Montserrat,sans-serif" fontSize="10" fontWeight="900" fill="#d97706">+</text>
              </svg>
            </div>
          </div>
          <div className="snp-earth-box">
            <p>🌍 <strong>Charging by Conduction:</strong> Charge can be transferred from a charged object to an uncharged object through a metal conductor — this is charging by conduction. <strong>Discharging:</strong> Loss of charge by a charged object. <strong>Earthing:</strong> The process of transferring charge from a charged object to the earth. Because the earth is a huge conductor, it absorbs any charge without becoming significantly charged itself.</p>
          </div>

          {/* S4: LIGHTNING */}
          <div className="snp-divider"><div className="snp-divider-mark" /></div>
          <div className="snp-sec-head">
            <div className="snp-sec-num">4</div>
            <div className="snp-sec-title-wrap">
              <div className="snp-sec-kicker">Atmospheric Electricity</div>
              <h2 className="snp-sec-title">Lightning &amp; <span>Lightning Safety</span></h2>
            </div>
          </div>
          <div className="snp-lightning-def">
            <div className="snp-lightning-bolt-icon">⚡</div>
            <div className="snp-lightning-def-text">
              <div className="snp-lightning-def-title">What is Lightning?</div>
              <div className="snp-lightning-body">Lightning is caused by the <strong>accumulation of electric charges in clouds</strong> which get electrically discharged between clouds and the earth surface or between different clouds. During thunderstorms, the rubbing of air currents and water droplets inside clouds generates enormous amounts of electric charge. When the charge builds to an extreme level, a massive discharge occurs — the resulting <strong>bright flash is lightning</strong> and the sound is thunder. Lightning happens more often at higher points like hills because clouds are nearer to the earth's surface there.</div>
            </div>
          </div>

          {/* SVG — Lightning conductor */}
          <div className="snp-lc-layout">
            <div>
              <div className="snp-svg-wrap" style={{marginBottom:"0"}}>
                <div className="snp-svg-title">🏢 Lightning Conductor — How It Protects Buildings</div>
                <svg viewBox="0 0 260 280" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"260px"}}>
                  {/* Cloud at top */}
                  <ellipse cx="130" cy="28" rx="60" ry="22" fill="#94a3b8" opacity="0.5"/>
                  <text x="130" y="16" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="#334155">Storm Cloud (charged)</text>
                  {/* Lightning bolt */}
                  <polyline points="130,50 120,85 132,85 118,115" fill="none" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Building */}
                  <rect x="80" y="115" width="100" height="120" rx="4" fill="#dbeafe" stroke="#1e40af" strokeWidth="2"/>
                  {/* Building windows */}
                  {[130,158,186].map((y,i) => [90,140].map((x,j) => <rect key={`${i}${j}`} x={x} y={y} width="18" height="14" rx="2" fill="#93c5fd" stroke="#1e40af" strokeWidth="1"/>))}
                  {/* Lightning conductor rod — on top */}
                  <rect x="128" y="90" width="4" height="28" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                  <text x="170" y="105" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#d97706">Lightning</text>
                  <text x="170" y="116" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#d97706">Conductor</text>
                  <line x1="165" y1="108" x2="134" y2="108" stroke="#d97706" strokeWidth="0.8" strokeDasharray="2,2"/>
                  {/* Wire down side of building */}
                  <rect x="180" y="115" width="3" height="124" fill="#f59e0b"/>
                  {/* Ground */}
                  <rect x="60" y="235" width="160" height="12" rx="3" fill="#92400e" opacity="0.4"/>
                  {/* Copper plate underground */}
                  <rect x="155" y="247" width="50" height="8" rx="2" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
                  <text x="185" y="262" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fill="#92400e">Copper plate</text>
                  <text x="185" y="272" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fill="#92400e">(buried in ground)</text>
                  {/* Charge path arrow */}
                  <text x="55" y="175" fontFamily="Inter,sans-serif" fontSize="9" fill="#f59e0b">charge</text>
                  <text x="55" y="187" fontFamily="Inter,sans-serif" fontSize="9" fill="#f59e0b">flows ↓</text>
                  <text x="55" y="199" fontFamily="Inter,sans-serif" fontSize="9" fill="#f59e0b">to earth</text>
                </svg>
              </div>
            </div>
            <div>
              <p className="snp-body-text" style={{marginBottom:"16px"}}>A <strong>lightning conductor</strong> is a metallic rod installed at the top of a building — always taller than the building itself. When lightning strikes, the charge travels down the metal rod safely to a copper plate buried underground, protecting the building and its occupants.</p>
              <div className="snp-earth-box" style={{marginBottom:"0"}}>
                <p>⚡ <strong>Key fact:</strong> The lightning conductor must always be <strong>taller than the building</strong> so it is the highest point and intercepts the lightning before it can strike the building. It works through the principle of earthing — safely directing charge to the earth.</p>
              </div>
            </div>
          </div>

          <p className="snp-body-text" style={{marginTop:"28px"}}>Safety measures during a thunderstorm/lightning strike:</p>
          <div className="snp-safety-grid">
            {[
              ["🚗","Safe inside a vehicle","Stay inside a car or bus with windows and doors shut. The metal body acts as a Faraday cage protecting you."],
              ["🌳","Never under a tall tree","Lightning strikes tall trees. If forced, choose the shortest tree available in the area."],
              ["🏔️","Avoid high ground","Clouds are closer to earth at high ground/hills. Lightning strikes there more frequently."],
              ["📡","Stay away from metal conductors","Keep away from metal wires, fences, metal pipes, and communication lines — all conduct electricity."],
              ["🏠","Safest: inside a solid building","A building with a lightning conductor is the safest place during a storm. Stay away from windows."],
              ["🦟","In open space — squat low","If caught in an open space with no shelter, squat low with feet together. Do NOT lie flat on ground."],
              ["🏍️","Avoid open vehicles","Motorbikes, tractors, and similar open vehicles provide NO protection. Get to shelter."],
              ["⏰","Wait after thunder","After hearing the last thunder, wait before coming out — lightning can strike after the main storm."],
            ].map(([icon, title, desc], i) => (
              <div className="snp-safety-card" key={i}>
                <div className="snp-safety-icon">{icon}</div>
                <div className="snp-safety-text"><strong>{title}</strong> — {desc}</div>
              </div>
            ))}
          </div>

          {/* S5: EARTHQUAKES */}
          <div className="snp-divider"><div className="snp-divider-mark" /></div>
          <div className="snp-sec-head">
            <div className="snp-sec-num">5</div>
            <div className="snp-sec-title-wrap">
              <div className="snp-sec-kicker">Tectonic Activity</div>
              <h2 className="snp-sec-title">Earthquakes — Causes &amp; <span>Measurement</span></h2>
            </div>
          </div>
          <div className="snp-eq-def">
            <div className="snp-eq-def-title">🌍 What is an Earthquake?</div>
            <div className="snp-eq-def-text">An earthquake is a <strong>sudden shaking or trembling of the earth</strong> lasting for a very short time. It is caused by a disturbance deep inside the earth's crust. The earth's surface (crust) consists of massive <strong>tectonic plates</strong> that are constantly (though very slowly) moving. When these plates <strong>slide past one another or collide</strong>, it creates tremendous forces that shake the ground above. The point inside the earth where the disturbance originates is the <strong>focus</strong>; the point on the surface directly above it is the <strong>epicentre</strong> — where damage is greatest.</div>
          </div>

          {/* SVG — Earth layers + plate movement */}
          <div className="snp-svg-wrap">
            <div className="snp-svg-title">🌍 Earth's Layers &amp; How Tectonic Plates Cause Earthquakes</div>
            <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px"}}>
              {/* EARTH CROSS SECTION (left) */}
              <circle cx="130" cy="100" r="85" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
              <circle cx="130" cy="100" r="65" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5"/>
              <circle cx="130" cy="100" r="44" fill="#fca5a5" stroke="#dc2626" strokeWidth="1.5"/>
              <circle cx="130" cy="100" r="22" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
              {/* Layer labels — all outside the circles */}
              <text x="200" y="30"  fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#92400e">Crust</text>
              <line x1="197" y1="33" x2="170" y2="50" stroke="#92400e" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="210" y="65"  fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#c2410c">Mantle</text>
              <line x1="207" y1="68" x2="178" y2="75" stroke="#c2410c" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="210" y="100" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#dc2626">Outer Core</text>
              <line x1="207" y1="100" x2="175" y2="100" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="3,2"/>
              <text x="210" y="135" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#b45309">Inner Core</text>
              <line x1="207" y1="132" x2="148" y2="120" stroke="#b45309" strokeWidth="0.8" strokeDasharray="3,2"/>
              {/* PLATE MOVEMENT (right) */}
              <text x="390" y="22" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#374151">Plate Movement</text>
              {/* Plate 1 — sliding right */}
              <rect x="300" y="65" width="120" height="30" rx="4" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5"/>
              <text x="360" y="83" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#7c2d12">Plate A</text>
              {/* Plate 2 — sliding left */}
              <rect x="300" y="105" width="120" height="30" rx="4" fill="#bfdbfe" stroke="#1e40af" strokeWidth="1.5"/>
              <text x="360" y="123" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#1e3a8a">Plate B</text>
              {/* Collision/sliding lines */}
              <line x1="300" y1="95" x2="420" y2="95" stroke="#374151" strokeWidth="2" strokeDasharray="6,3"/>
              {/* Arrows on plates */}
              <defs>
                <marker id="arrR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#ea580c"/></marker>
                <marker id="arrL" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto"><path d="M6,0 L6,6 L0,3 z" fill="#1e40af"/></marker>
              </defs>
              <line x1="310" y1="78" x2="380" y2="78" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrR)"/>
              <line x1="410" y1="118" x2="340" y2="118" stroke="#1e40af" strokeWidth="2" markerEnd="url(#arrL)"/>
              {/* Epicentre */}
              <line x1="360" y1="95" x2="360" y2="40" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
              <text x="360" y="36" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#dc2626">Epicentre</text>
              {/* Focus */}
              <circle cx="360" cy="95" r="5" fill="#dc2626"/>
              <text x="390" y="100" fontFamily="Inter,sans-serif" fontSize="9" fill="#dc2626">Focus</text>
              {/* Seismic waves */}
              <text x="480" y="95" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#64748b">Seismic</text>
              <text x="480" y="107" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#64748b">waves →</text>
              {[10,20,30].map((r,i) => <circle key={i} cx="360" cy="95" r={r*2.5} fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity={0.5-i*0.1}/>)}
            </svg>
          </div>

          <div className="snp-rs-pair">
            <div className="snp-rs-card richter">
              <span className="snp-rs-icon">📊</span>
              <div className="snp-rs-name">Richter Scale</div>
              <div className="snp-rs-text">The power of an earthquake is expressed as its <strong>magnitude</strong> on the Richter scale. <strong>Key fact: The Richter scale is NOT linear</strong> — it is logarithmic. An earthquake measuring 7 is 10× more powerful than magnitude 6, and 100× more powerful than magnitude 5. Developed by Charles Richter.</div>
            </div>
            <div className="snp-rs-card seismograph">
              <span className="snp-rs-icon">📈</span>
              <div className="snp-rs-name">Seismograph</div>
              <div className="snp-rs-text">Earthquakes produce <strong>seismic waves</strong> on the earth's surface. These waves are detected and recorded by an instrument called a <strong>seismograph</strong>. It has a pendulum with a pen attached that draws on a rotating drum of chart paper, recording the intensity and timing of ground shaking.</div>
            </div>
          </div>

          <p className="snp-body-text">Earthquake protection measures — what to do during an earthquake:</p>
          <div className="snp-eq-protect">
            <div className="snp-eq-protect-col outdoors">
              <div className="snp-eqp-head"><span className="snp-eqp-head-icon">🌳</span><div className="snp-eqp-head-title">If Outdoors</div></div>
              <div className="snp-eqp-body">
                <div className="snp-eqp-item">🚗 If in a car or bus — do NOT come out. Ask the driver to move slowly to a clear spot and wait until tremors stop.</div>
                <div className="snp-eqp-item">🌿 Find a clear spot away from buildings, trees, and overhead power lines. Drop to the ground and stay low.</div>
                <div className="snp-eqp-item">⚡ Stay far away from electrical poles, wires, and anything that could fall on you.</div>
                <div className="snp-eqp-item">🏔️ Move away from slopes or cliffs where landslides may occur during tremors.</div>
              </div>
            </div>
            <div className="snp-eq-protect-col indoors">
              <div className="snp-eqp-head"><span className="snp-eqp-head-icon">🏠</span><div className="snp-eqp-head-title">If Indoors</div></div>
              <div className="snp-eqp-body">
                <div className="snp-eqp-item">🪑 Take shelter under a strong table or desk and stay there until the shaking stops completely.</div>
                <div className="snp-eqp-item">📦 Stay away from tall and heavy objects like bookshelves, wardrobes, and appliances that may topple and fall.</div>
                <div className="snp-eqp-item">🛏️ If you are in bed when the earthquake starts, do NOT get up — protect your head with a pillow.</div>
                <div className="snp-eqp-item">🚪 After shaking stops, leave the building calmly — use stairs, NOT elevators.</div>
              </div>
            </div>
          </div>

          <div className="snp-pull-quote">
            <p>"Nature's most powerful forces — from the spark of static electricity to the crack of lightning and the trembling of the earth beneath our feet — all follow the same fundamental laws of physics. Understanding them is our best protection."</p>
          </div>

          <div className="snp-divider"><div className="snp-divider-mark" /></div>
          <div className="snp-faq-header"><span className="snp-faq-kicker">Exam Preparation</span></div>
          <h2 className="snp-faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div className={`snp-faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button className="snp-faq-q" onClick={() => toggle(i)}>
                <span className="snp-faq-q-text">Q{i+1}. {faq.q}</span>
                <span className="snp-faq-icon">{openIndex === i ? "▴" : "▾"}</span>
              </button>
              {openIndex === i && (
                <div className="snp-faq-ans visible">
                  <div className="snp-faq-ans-inner">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
