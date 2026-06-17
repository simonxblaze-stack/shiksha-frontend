import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #00081a;
    --ink2:       #001030;
    --muted:      #2a4070;
    --paper:      #f0f4ff;
    --paper2:     #dce8ff;
    --accent:     #2563eb;
    --accent2:    #1d4ed8;
    --accent-lt:  #dbeafe;
    --sky:        #0284c7;
    --sky-lt:     #e0f2fe;
    --violet:     #7c3aed;
    --violet-lt:  #ede9fe;
    --amber:      #b45309;
    --amber-lt:   #fef3c7;
    --green:      #166534;
    --green-lt:   #dcfce7;
    --red:        #be123c;
    --red-lt:     #ffe4e6;
    --teal:       #0f766e;
    --teal-lt:    #ccfbf1;
    --rule:       #93c5fd;
    --white:      #ffffff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .fap-root { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }

  /* ═══ HERO ═══ */
  .fap-hero {
    background: linear-gradient(135deg, #000814 0%, #001428 50%, #002040 100%);
    min-height: 88vh; display: flex; align-items: flex-end;
    position: relative; overflow: hidden; padding: 0 0 64px;
  }
  @media (max-width: 700px) { .fap-hero { min-height: auto; align-items: flex-start; padding: 72px 0 48px; } }
  .fap-hero::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #2563eb 0%, #0284c7 30%, #7c3aed 58%, #b45309 82%, #166534 100%);
  }
  /* Force field lines */
  .fap-hero-field {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px),
      linear-gradient(0deg, rgba(37,99,235,0.04) 1px, transparent 1px),
      radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.08) 0%, transparent 60%);
    background-size: 48px 48px, 48px 48px, 100% 100%;
  }
  .fap-hero-ring { position: absolute; top: 50%; right: 5%; transform: translateY(-50%); width: clamp(140px,22vw,290px); height: clamp(140px,22vw,290px); border-radius: 50%; border: 1.5px solid rgba(37,99,235,0.18); pointer-events: none; }
  .fap-hero-ring::before { content: ''; position: absolute; inset: 18%; border-radius: 50%; border: 1px dashed rgba(2,132,199,0.14); }
  .fap-hero-ring::after  { content: ''; position: absolute; inset: 40%; border-radius: 50%; background: rgba(37,99,235,0.07); }
  .fap-glow-a { position: absolute; top: 14%; left: 6%; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 68%); pointer-events: none; }
  .fap-glow-b { position: absolute; bottom: 8%; right: 22%; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%); pointer-events: none; }
  .fap-hero-bg-num { position: absolute; bottom: -80px; right: -20px; font-family: 'Montserrat', sans-serif; font-size: clamp(200px,34vw,480px); font-weight: 900; line-height: 1; color: rgba(255,255,255,0.018); letter-spacing: -0.04em; user-select: none; pointer-events: none; }
  .fap-hero-inner { max-width: 900px; width: 100%; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }
  .fap-overline { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #93c5fd; margin-bottom: 24px; display: flex; align-items: center; gap: 14px; }
  .fap-overline::before, .fap-overline::after { content: ''; flex: 0 0 40px; height: 1px; background: #93c5fd; }
  .fap-hero-title { font-family: 'Montserrat', sans-serif; font-size: clamp(34px,7vw,76px); font-weight: 900; color: #fff; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px; }
  .fap-hero-title em   { font-style: normal; color: #93c5fd; }
  .fap-hero-title .em2 { color: #c4b5fd; }
  .fap-hero-bar { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; margin-top: 8px; }
  .fap-hero-bar-item { flex: 1 1 150px; padding: 0 24px 0 0; border-right: 1px solid rgba(255,255,255,0.08); margin-right: 24px; }
  .fap-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .fap-bar-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 5px; }
  .fap-bar-value { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.72); }

  /* ═══ BODY ═══ */
  .fap-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }

  /* ═══ INTRO CARD ═══ */
  .fap-intro-card { background: linear-gradient(135deg, #000814 0%, #002040 100%); border-left: 5px solid #2563eb; border-radius: 4px; padding: 38px 42px; margin-bottom: 64px; position: relative; overflow: hidden; }
  .fap-intro-card::after { content: '⚡'; position: absolute; right: 28px; top: 50%; transform: translateY(-50%); font-size: 96px; opacity: 0.09; }
  .fap-intro-card p { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.86); line-height: 1.8; margin: 0 0 14px; }
  .fap-intro-card p:last-child { margin: 0; }
  .fap-intro-card strong { color: #93c5fd; }

  /* ═══ DIVIDER ═══ */
  .fap-divider { margin: 60px 0; display: flex; align-items: center; gap: 16px; }
  .fap-divider::before, .fap-divider::after { content: ''; flex: 1; height: 1px; background: var(--rule); }
  .fap-divider-mark { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

  /* ═══ SECTION HEADER ═══ */
  .fap-sec-head { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 34px; border-bottom: 2px solid var(--rule); padding-bottom: 20px; }
  .fap-sec-num { font-family: 'Montserrat', sans-serif; font-size: 58px; font-weight: 900; color: var(--rule); line-height: 1; flex-shrink: 0; }
  .fap-sec-title-wrap { padding-top: 8px; }
  .fap-sec-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .fap-sec-title { font-family: 'Montserrat', sans-serif; font-size: clamp(22px,3.5vw,32px); font-weight: 800; color: var(--ink); line-height: 1.15; letter-spacing: -0.02em; }
  .fap-sec-title span { color: var(--accent); }

  /* ═══ BODY TEXT ═══ */
  .fap-body-text { font-family: 'Inter', sans-serif; font-size: 17px; color: var(--ink2); line-height: 1.85; margin-bottom: 28px; }
  .fap-body-text strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S1: FORCE DEFINITION — BIG STATEMENT CARD ═══ */
  .fap-def-card { background: var(--white); border: 2px solid var(--accent); border-radius: 14px; padding: 32px 36px; margin-bottom: 28px; display: flex; gap: 28px; align-items: center; }
  @media (max-width: 600px) { .fap-def-card { flex-direction: column; } }
  .fap-def-icon { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); display: flex; align-items: center; justify-content: center; font-size: 36px; flex-shrink: 0; }
  .fap-def-body {}
  .fap-def-term { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
  .fap-def-text { font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; color: var(--ink); line-height: 1.4; margin-bottom: 10px; }
  .fap-def-meta { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--muted); }
  .fap-def-meta strong { color: var(--accent); font-weight: 700; }

  /* ═══ S1: PUSH/PULL TAGS ═══ */
  .fap-pushpull { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
  @media (max-width: 560px) { .fap-pushpull { grid-template-columns: 1fr; } }
  .fap-pp-card { border-radius: 10px; padding: 22px 20px; }
  .fap-pp-card.push { background: var(--sky-lt);    border: 2px solid var(--sky);    }
  .fap-pp-card.pull { background: var(--violet-lt); border: 2px solid var(--violet); }
  .fap-pp-icon { font-size: 28px; margin-bottom: 8px; display: block; }
  .fap-pp-name { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; margin-bottom: 8px; }
  .push .fap-pp-name { color: var(--sky); }
  .pull .fap-pp-name { color: var(--violet); }
  .fap-pp-eg { display: flex; flex-wrap: wrap; gap: 6px; }
  .fap-pp-tag { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; }
  .push .fap-pp-tag { background: rgba(2,132,199,0.12); color: var(--sky); }
  .pull .fap-pp-tag { background: rgba(124,58,237,0.10); color: var(--violet); }

  /* ═══ S1: SVG — FORCE DIRECTION DIAGRAM ═══ */
  .fap-svg-wrap { background: var(--white); border: 1.5px solid var(--rule); border-radius: 12px; padding: 24px; margin-bottom: 28px; overflow-x: auto; }
  .fap-svg-title { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 16px; text-align: center; }
  .fap-svg-wrap svg { display: block; margin: 0 auto; max-width: 100%; }

  /* ═══ S2: NET FORCE — equation visual ═══ */
  .fap-eq-cards { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
  .fap-eq-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 10px; padding: 20px 24px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
  .fap-eq-scenario { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); flex: 1 1 200px; }
  .fap-eq-formula { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900; color: var(--accent); background: var(--accent-lt); padding: 8px 18px; border-radius: 8px; white-space: nowrap; }

  /* ═══ S3: EFFECTS OF FORCE — icon-list ═══ */
  .fap-effects-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 28px; }
  @media (max-width: 620px) { .fap-effects-row { grid-template-columns: 1fr; } }
  .fap-effect-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 10px; padding: 22px 18px; text-align: center; }
  .fap-effect-card:nth-child(1) { border-top: 4px solid var(--accent); }
  .fap-effect-card:nth-child(2) { border-top: 4px solid var(--sky); }
  .fap-effect-card:nth-child(3) { border-top: 4px solid var(--violet); }
  .fap-effect-icon { font-size: 30px; margin-bottom: 10px; display: block; }
  .fap-effect-title { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
  .fap-effect-desc { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--muted); line-height: 1.6; }

  /* ═══ S4: CONTACT/NON-CONTACT — two column layout ═══ */
  .fap-force-types { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--rule); margin-bottom: 28px; }
  @media (max-width: 580px) { .fap-force-types { grid-template-columns: 1fr; } }
  .fap-ft-col { padding: 0; }
  .fap-ft-col.contact    { background: var(--sky-lt); }
  .fap-ft-col.noncontact { background: var(--violet-lt); border-left: 2px solid var(--rule); }
  @media (max-width: 580px) { .fap-ft-col.noncontact { border-left: none; border-top: 2px solid var(--rule); } }
  .fap-ft-head { padding: 18px 22px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(0,0,0,0.06); }
  .fap-ft-head-icon { font-size: 24px; }
  .fap-ft-head-title { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; }
  .contact    .fap-ft-head-title { color: var(--sky); }
  .noncontact .fap-ft-head-title { color: var(--violet); }
  .fap-ft-body { padding: 18px 22px; }
  .fap-ft-def { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.65; margin-bottom: 14px; }
  .fap-ft-items { display: flex; flex-direction: column; gap: 10px; }
  .fap-ft-item { background: rgba(255,255,255,0.7); border-radius: 8px; padding: 12px 14px; }
  .fap-ft-item-name { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
  .fap-ft-item-desc { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.5; }

  /* ═══ S5: PRESSURE — formula card + SVG ═══ */
  .fap-pressure-hero { background: linear-gradient(135deg, #000814 0%, #002040 100%); border-radius: 14px; padding: 32px 36px; margin-bottom: 28px; border: 1.5px solid rgba(37,99,235,0.25); display: flex; gap: 32px; align-items: center; flex-wrap: wrap; }
  .fap-pressure-formula { flex: 0 0 auto; }
  .fap-pf-label { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 10px; }
  .fap-pf-frac { display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .fap-pf-num { font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900; color: #93c5fd; }
  .fap-pf-line { width: 120px; height: 2px; background: #93c5fd; }
  .fap-pf-den { font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900; color: #93c5fd; }
  .fap-pf-unit { font-family: 'Poppins', sans-serif; font-size: 13px; color: rgba(255,255,255,0.4); margin-top: 8px; text-align: center; }
  .fap-pressure-facts { flex: 1; }
  .fap-pres-fact { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px; }
  .fap-pres-fact:last-child { margin-bottom: 0; }
  .fap-pres-bullet { width: 28px; height: 28px; border-radius: 50%; background: rgba(37,99,235,0.25); border: 1.5px solid #93c5fd; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; color: #ffffff; font-weight: 900; font-family: 'Montserrat', sans-serif; }
  .fap-pres-text { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.65; }
  .fap-pres-text strong { color: #93c5fd; }

  /* ═══ S5: SVG NAIL PRESSURE DIAGRAM ═══ */
  .fap-tip-note { background: var(--amber-lt); border-left: 4px solid var(--amber); border-radius: 4px; padding: 16px 20px; margin-bottom: 24px; }
  .fap-tip-note p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.7; }
  .fap-tip-note strong { color: var(--amber); font-weight: 700; }

  /* ═══ S6: LIQUID/GAS PRESSURE ═══ */
  .fap-lgp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
  @media (max-width: 560px) { .fap-lgp-grid { grid-template-columns: 1fr; } }
  .fap-lgp-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 22px 20px; border-top: 4px solid var(--accent); }
  .fap-lgp-card:nth-child(2) { border-top-color: var(--sky); }
  .fap-lgp-icon { font-size: 26px; margin-bottom: 10px; display: block; }
  .fap-lgp-title { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
  .fap-lgp-desc { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.68; }
  .fap-lgp-desc strong { color: var(--accent2); font-weight: 700; }

  .fap-atm-box { background: linear-gradient(135deg, #001428 0%, #002040 100%); border-radius: 10px; padding: 24px 28px; margin-bottom: 24px; border: 1.5px solid rgba(37,99,235,0.25); }
  .fap-atm-title { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; color: #93c5fd; margin-bottom: 10px; }
  .fap-atm-text { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.78; }
  .fap-atm-text strong { color: #bfdbfe; }

  /* ═══ PULL QUOTE ═══ */
  .fap-pull-quote { border-left: 4px solid var(--accent); padding: 22px 30px; margin: 36px 0; background: var(--accent-lt); border-radius: 0 6px 6px 0; }
  .fap-pull-quote p { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: var(--accent2); line-height: 1.7; font-style: italic; }

  /* ═══ FAQ ═══ */
  .fap-faq-header { margin-bottom: 8px; }
  .fap-faq-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
  .fap-faq-title { font-family: 'Montserrat', sans-serif; font-size: clamp(24px,4vw,34px); font-weight: 800; color: var(--ink); margin-bottom: 28px; letter-spacing: -0.02em; }
  .fap-faq-item { border: 1.5px solid var(--rule); border-radius: 8px; margin-bottom: 12px; overflow: hidden; background: var(--white); }
  .fap-faq-item.open { border-color: var(--accent); }
  .fap-faq-q { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; text-align: left; gap: 16px; }
  .fap-faq-q-text { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); line-height: 1.4; }
  .fap-faq-icon { color: var(--accent); font-size: 20px; flex-shrink: 0; }
  .fap-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
  .fap-faq-ans.visible { max-height: 700px; }
  .fap-faq-ans-inner { padding: 0 24px 22px; font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.82; border-top: 1px solid var(--rule); padding-top: 18px; }
  .fap-faq-ans-inner strong { color: var(--accent2); font-weight: 600; }
`;

const faqs = [
  { q: "What is force? What is its SI unit?", a: "A push or pull on an object is called force. Force is a vector quantity (has both magnitude and direction). Its SI unit is Newton (N). Examples of push: kicking, hitting, throwing, pushing, flicking. Examples of pull: picking, lifting, shutting, pulling." },
  { q: "What is force due to interaction? How is net force calculated?", a: "Whenever there is interaction between two objects, a force acts between them. Net force calculation: (1) If two forces act in the SAME direction: F = F₁ + F₂ (forces add up). (2) If two forces act in OPPOSITE directions: F = F₁ − F₂ (if F₁ > F₂) or F = F₂ − F₁ (if F₂ > F₁). The net force acts in the direction of the larger force. Example: If F₁ = 4N and F₂ = 5N act right, and F₃ = 7N acts left: Fnet = (4+5) − 7 = 2N to the right." },
  { q: "What are the three effects of force on an object?", a: "A force acting on an object can: (1) Change the shape and size of an object — Example: pressing dough converts a dough ball into a flat chapati. (2) Change the state of motion of an object — Example: pushing a stationary cart makes it move; stopping a moving cart. (3) Change the speed and direction of a moving object — Example: a batsman hitting a cricket ball changes its speed and direction." },
  { q: "What are contact and non-contact forces? Give examples of each.", a: "Contact forces: Forces that can only be applied by physically touching the objects. Examples: (a) Muscular force — force applied by the action of muscles. (b) Frictional force — force that opposes relative motion between two surfaces in contact. Non-contact forces: Forces that act even without physical touching. Examples: (a) Magnetic force — force exerted by a magnet on another magnet or iron piece. (b) Electrostatic force — force exerted by a charged object on another charged or uncharged object. (c) Gravitational force — force of attraction between any two objects having mass." },
  { q: "What is pressure? Write the formula and SI unit.", a: "Pressure is the force acting per unit area on a surface. Formula: Pressure = Force ÷ Area. SI unit: Pascal (Pa), also written as N/m². Key rule: Pressure INCREASES when area DECREASES (same force on smaller area = more pressure). Example: A pointed nail pierces a wall more easily than a flat-headed nail because the pointed tip has a much smaller area — so the same force creates much greater pressure." },
  { q: "Why does a pointed nail go into the wall more easily than a flat-headed nail?", a: "Pressure = Force ÷ Area. A pointed nail has a very small surface area at its tip compared to a flat-ended nail. When the same force is applied to both, the pointed nail exerts much greater pressure on the wall because the area is smaller. Greater pressure means the force is concentrated on a tiny spot, allowing the nail to pierce the wall easily. A flat-ended nail has a larger area, so the same force creates much less pressure — making it harder to push into the wall." },
  { q: "What are the two factors that affect pressure exerted by liquids and gases?", a: "Liquids and gases exert pressure on the walls of their container in all directions. Two factors affect this pressure: (1) Depth of the liquid or gas — pressure increases as depth increases. At greater depth, there is more liquid above pushing down. (2) Density of the liquid or gas — pressure increases with the increase in density. Example: Why are dam walls thicker at the bottom? Because pressure of water increases with depth — so the bottom walls need to be stronger and thicker to withstand the higher water pressure." },
  { q: "What is atmospheric pressure?", a: "The pressure applied by air (the atmosphere) on the body is called atmospheric pressure. The atmosphere — the thick layer of air surrounding the Earth — exerts pressure in all directions on everything on Earth's surface. Atmospheric pressure is quite large but we don't feel it because the pressure inside our bodies balances it. Atmospheric pressure decreases as we go to higher altitudes (because there is less air above)." },
];

export default function ForceAndPressure() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="fap-root">
        {/* HERO */}
        <div className="fap-hero">
          <div className="fap-hero-field" />
          <div className="fap-hero-ring" />
          <div className="fap-glow-a" />
          <div className="fap-glow-b" />
          <div className="fap-hero-bg-num">11</div>
          <div className="fap-hero-inner">
            <div className="fap-overline">Class 8 Science — Chapter 11</div>
            <h1 className="fap-hero-title"><em>Force</em> and<br /><span className="em2">Pressure</span></h1>
            <div className="fap-hero-bar">
              <div className="fap-hero-bar-item"><div className="fap-bar-label">Chapter</div><div className="fap-bar-value">11 — Physics</div></div>
              <div className="fap-hero-bar-item"><div className="fap-bar-label">Topics</div><div className="fap-bar-value">Force · Net Force · Effects · Contact · Pressure</div></div>
              <div className="fap-hero-bar-item"><div className="fap-bar-label">Board</div><div className="fap-bar-value">NCERT / CBSE</div></div>
            </div>
          </div>
        </div>

        <div className="fap-body">
          <div className="fap-intro-card">
            <p>Every motion you see around you — a ball rolling, a door opening, water falling — is caused by <strong>force</strong>. Force is the reason objects move, stop, change shape, or change direction.</p>
            <p>This chapter explores what force is, how forces add and subtract, their effects on objects, the types of forces (contact and non-contact), and the concept of <strong>pressure</strong> — why a knife cuts but a palm doesn't.</p>
          </div>

          {/* S1: FORCE */}
          <div className="fap-sec-head">
            <div className="fap-sec-num">1</div>
            <div className="fap-sec-title-wrap">
              <div className="fap-sec-kicker">Fundamentals</div>
              <h2 className="fap-sec-title">Force — A <span>Push or Pull</span></h2>
            </div>
          </div>
          <div className="fap-def-card">
            <div className="fap-def-icon">⚡</div>
            <div className="fap-def-body">
              <div className="fap-def-term">Definition</div>
              <div className="fap-def-text">A push or pull on an object is called Force.</div>
              <div className="fap-def-meta">Quantity type: <strong>Vector</strong> (has direction + magnitude) · SI Unit: <strong>Newton (N)</strong> · Symbol: <strong>F</strong></div>
            </div>
          </div>
          <div className="fap-pushpull">
            <div className="fap-pp-card push">
              <span className="fap-pp-icon">👊</span>
              <div className="fap-pp-name">Push Forces</div>
              <div className="fap-pp-eg">
                {["Kicking","Hitting","Throwing","Pushing","Flicking"].map(t => <span className="fap-pp-tag" key={t}>{t}</span>)}
              </div>
            </div>
            <div className="fap-pp-card pull">
              <span className="fap-pp-icon">🤲</span>
              <div className="fap-pp-name">Pull Forces</div>
              <div className="fap-pp-eg">
                {["Picking","Lifting","Shutting","Pulling"].map(t => <span className="fap-pp-tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* SVG — Force Direction Diagram */}
          <div className="fap-svg-wrap">
            <div className="fap-svg-title">📐 Force Direction — Applied vs Frictional Force</div>
            <svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"540px"}}>
              {/* Ground */}
              <rect x="40" y="120" width="460" height="14" rx="4" fill="#e2e8f0"/>
              <text x="260" y="148" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#94a3b8">Ground Surface</text>
              {/* Box */}
              <rect x="195" y="68" width="100" height="52" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
              <text x="245" y="98" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="13" fontWeight="700" fill="#1e40af">Object</text>
              {/* Applied force arrow */}
              <defs>
                <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/>
                </marker>
                <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#be123c"/>
                </marker>
              </defs>
              <line x1="80" y1="94" x2="190" y2="94" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrowB)"/>
              <text x="55" y="88" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#2563eb">Applied</text>
              <text x="55" y="104" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#2563eb">Force (F)</text>
              {/* Friction arrow (opposite) */}
              <line x1="460" y1="94" x2="300" y2="94" stroke="#be123c" strokeWidth="3" markerEnd="url(#arrowR)"/>
              <text x="465" y="88" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#be123c">Friction</text>
              <text x="465" y="104" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#be123c">Force (f)</text>
              {/* Labels */}
              <text x="245" y="40" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="600" fill="#64748b">Friction is always opposite to the direction of applied force</text>
              {/* Opposing arrows annotation */}
              <path d="M155,94 Q245,55 335,94" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3"/>
              <text x="245" y="58" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">Opposite directions</text>
            </svg>
          </div>

          {/* S2: NET FORCE */}
          <div className="fap-divider"><div className="fap-divider-mark" /></div>
          <div className="fap-sec-head">
            <div className="fap-sec-num">2</div>
            <div className="fap-sec-title-wrap">
              <div className="fap-sec-kicker">Calculation</div>
              <h2 className="fap-sec-title">Net Force — <span>Combining Forces</span></h2>
            </div>
          </div>
          <p className="fap-body-text">When multiple forces act on an object, the combined effect is the <strong>net force</strong>. Direction determines whether forces add or subtract:</p>
          <div className="fap-eq-cards">
            <div className="fap-eq-card">
              <div className="fap-eq-scenario">➡️ Same Direction — Forces ADD UP</div>
              <div className="fap-eq-formula">F = F₁ + F₂</div>
            </div>
            <div className="fap-eq-card">
              <div className="fap-eq-scenario">↔️ Opposite Directions — Forces SUBTRACT</div>
              <div className="fap-eq-formula">F = |F₁ − F₂|</div>
            </div>
          </div>

          {/* SVG — Net Force Example */}
          <div className="fap-svg-wrap">
            <div className="fap-svg-title">📊 Net Force Example — Carton Box</div>
            <svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"540px"}}>
              <defs>
                <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#166534"/></marker>
                <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#be123c"/></marker>
                <marker id="arrowBlue2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
              </defs>
              {/* Carton */}
              <rect x="210" y="55" width="100" height="70" rx="6" fill="#fef3c7" stroke="#b45309" strokeWidth="2"/>
              <text x="260" y="95" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#78350f">Carton</text>
              {/* F1 = 4N right */}
              <line x1="60" y1="80" x2="205" y2="80" stroke="#166534" strokeWidth="2.5" markerEnd="url(#arrowG)"/>
              <text x="125" y="68" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#166534">F₁ = 4N →</text>
              {/* F2 = 5N right */}
              <line x1="60" y1="106" x2="205" y2="106" stroke="#166534" strokeWidth="2.5" markerEnd="url(#arrowG)"/>
              <text x="125" y="122" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#166534">F₂ = 5N →</text>
              {/* F3 = 7N left */}
              <line x1="480" y1="93" x2="315" y2="93" stroke="#be123c" strokeWidth="2.5" markerEnd="url(#arrowRed)"/>
              <text x="400" y="80" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#be123c">← F₃ = 7N</text>
              {/* Net force */}
              <text x="260" y="145" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="13" fontWeight="900" fill="#2563eb">Fnet = (4+5) − 7 = 2N →</text>
            </svg>
          </div>

          {/* S3: EFFECTS OF FORCE */}
          <div className="fap-divider"><div className="fap-divider-mark" /></div>
          <div className="fap-sec-head">
            <div className="fap-sec-num">3</div>
            <div className="fap-sec-title-wrap">
              <div className="fap-sec-kicker">What Force Does</div>
              <h2 className="fap-sec-title">Effects of <span>Force</span></h2>
            </div>
          </div>
          <p className="fap-body-text">An external force acting on an object can produce three different effects:</p>
          <div className="fap-effects-row">
            <div className="fap-effect-card"><span className="fap-effect-icon">🫓</span><div className="fap-effect-title">Change Shape & Size</div><div className="fap-effect-desc">Example: Rolling dough ball into a flat chapati changes its shape.</div></div>
            <div className="fap-effect-card"><span className="fap-effect-icon">🛒</span><div className="fap-effect-title">Change State of Motion</div><div className="fap-effect-desc">Example: Pushing a stationary cart makes it move (rest → motion).</div></div>
            <div className="fap-effect-card"><span className="fap-effect-icon">🏏</span><div className="fap-effect-title">Change Speed & Direction</div><div className="fap-effect-desc">Example: A batsman hitting a cricket ball changes its speed and direction.</div></div>
          </div>

          {/* S4: CONTACT & NON-CONTACT */}
          <div className="fap-divider"><div className="fap-divider-mark" /></div>
          <div className="fap-sec-head">
            <div className="fap-sec-num">4</div>
            <div className="fap-sec-title-wrap">
              <div className="fap-sec-kicker">Types of Forces</div>
              <h2 className="fap-sec-title">Contact &amp; <span>Non-Contact Forces</span></h2>
            </div>
          </div>
          <div className="fap-force-types">
            <div className="fap-ft-col contact">
              <div className="fap-ft-head"><span className="fap-ft-head-icon">🤝</span><div className="fap-ft-head-title">Contact Forces</div></div>
              <div className="fap-ft-body">
                <div className="fap-ft-def">Forces that require physical touching/contact between objects to act.</div>
                <div className="fap-ft-items">
                  <div className="fap-ft-item"><div className="fap-ft-item-name">💪 Muscular Force</div><div className="fap-ft-item-desc">Force applied due to the action of muscles. Example: lifting, pushing objects.</div></div>
                  <div className="fap-ft-item"><div className="fap-ft-item-name">🔀 Frictional Force</div><div className="fap-ft-item-desc">Force that opposes relative motion between surfaces in contact.</div></div>
                </div>
              </div>
            </div>
            <div className="fap-ft-col noncontact">
              <div className="fap-ft-head"><span className="fap-ft-head-icon">🌌</span><div className="fap-ft-head-title">Non-Contact Forces</div></div>
              <div className="fap-ft-body">
                <div className="fap-ft-def">Forces that act even without objects physically touching each other.</div>
                <div className="fap-ft-items">
                  <div className="fap-ft-item"><div className="fap-ft-item-name">🧲 Magnetic Force</div><div className="fap-ft-item-desc">Force exerted by a magnet on another magnet or iron piece.</div></div>
                  <div className="fap-ft-item"><div className="fap-ft-item-name">⚡ Electrostatic Force</div><div className="fap-ft-item-desc">Force by a charged object on charged or uncharged objects.</div></div>
                  <div className="fap-ft-item"><div className="fap-ft-item-name">🌍 Gravitational Force</div><div className="fap-ft-item-desc">Force of attraction between any two objects having mass.</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* S5: PRESSURE */}
          <div className="fap-divider"><div className="fap-divider-mark" /></div>
          <div className="fap-sec-head">
            <div className="fap-sec-num">5</div>
            <div className="fap-sec-title-wrap">
              <div className="fap-sec-kicker">Force per Unit Area</div>
              <h2 className="fap-sec-title">Pressure — <span>Formula &amp; Concept</span></h2>
            </div>
          </div>
          <div className="fap-pressure-hero">
            <div className="fap-pressure-formula">
              <div className="fap-pf-label">Formula</div>
              <div className="fap-pf-frac">
                <div className="fap-pf-num">Force (N)</div>
                <div className="fap-pf-line" />
                <div className="fap-pf-den">Area (m²)</div>
              </div>
              <div className="fap-pf-unit">SI Unit: Pascal (Pa) = N/m²</div>
            </div>
            <div className="fap-pressure-facts">
              <div className="fap-pres-fact"><div className="fap-pres-bullet">↑</div><div className="fap-pres-text">Pressure <strong>increases</strong> when area decreases (same force on smaller area)</div></div>
              <div className="fap-pres-fact"><div className="fap-pres-bullet">↓</div><div className="fap-pres-text">Pressure <strong>decreases</strong> when area increases (same force on larger area)</div></div>
              <div className="fap-pres-fact"><div className="fap-pres-bullet">↑</div><div className="fap-pres-text">Pressure <strong>increases</strong> when force is increased on same area</div></div>
            </div>
          </div>

          {/* SVG — Nail Pressure Comparison */}
          <div className="fap-svg-wrap">
            <div className="fap-svg-title">🔩 Why Pointed Nail Goes in Easier — Pressure Concept</div>
            <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"500px"}}>
              {/* Wall */}
              <rect x="0" y="80" width="500" height="90" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
              <text x="250" y="180" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#94a3b8">Wall Surface</text>
              {/* FLAT NAIL */}
              <rect x="80" y="20" width="40" height="70" rx="4" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5"/>
              <rect x="80" y="85" width="40" height="10" rx="2" fill="#64748b"/>
              <text x="100" y="12" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#475569">Flat End</text>
              {/* Down arrow force */}
              <defs><marker id="arrowD1" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#2563eb"/></marker></defs>
              {/* Area label */}
              <text x="100" y="135" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#be123c">Large Area</text>
              <text x="100" y="150" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#be123c">Less Pressure</text>
              <text x="100" y="165" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">Hard to push in</text>

              {/* POINTED NAIL */}
              <rect x="340" y="20" width="20" height="50" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5"/>
              <polygon points="340,70 360,70 350,90" fill="#64748b"/>
              <text x="350" y="12" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#166534">Pointed</text>
              <text x="350" y="135" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#166534">Small Area</text>
              <text x="350" y="150" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#166534">More Pressure</text>
              <text x="350" y="165" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">Pierces easily ✓</text>

              {/* VS */}
              <text x="250" y="60" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="20" fontWeight="900" fill="#2563eb">VS</text>
              <text x="250" y="78" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">Same Force Applied</text>
            </svg>
          </div>

          <div className="fap-tip-note">
            <p>💡 <strong>Key Rule:</strong> Pressure increases when the area decreases and the applied force is increased. This is why knife blades, needles, and pointed nails are designed with sharp, small-area tips — to maximise pressure with minimum force.</p>
          </div>

          {/* S6: LIQUID/GAS PRESSURE */}
          <div className="fap-divider"><div className="fap-divider-mark" /></div>
          <div className="fap-sec-head">
            <div className="fap-sec-num">6</div>
            <div className="fap-sec-title-wrap">
              <div className="fap-sec-kicker">Fluids</div>
              <h2 className="fap-sec-title">Pressure in Liquids, Gases &amp; <span>Atmosphere</span></h2>
            </div>
          </div>
          <p className="fap-body-text">Liquids and gases exert pressure on the walls of their containers <strong>in all directions</strong>. Two factors determine how much pressure they exert:</p>
          <div className="fap-lgp-grid">
            <div className="fap-lgp-card"><span className="fap-lgp-icon">📏</span><div className="fap-lgp-title">Factor 1: Depth</div><div className="fap-lgp-desc">Pressure exerted by a liquid or gas <strong>increases with depth</strong>. The deeper you go, the greater the pressure. Example: Dam walls are made thicker at the bottom to withstand higher water pressure at greater depth.</div></div>
            <div className="fap-lgp-card"><span className="fap-lgp-icon">⚖️</span><div className="fap-lgp-title">Factor 2: Density</div><div className="fap-lgp-desc">Pressure <strong>increases with the density</strong> of the liquid or gas. A denser fluid exerts more pressure at the same depth compared to a less dense fluid.</div></div>
          </div>

          {/* SVG — Dam Wall */}
          <div className="fap-svg-wrap">
            <div className="fap-svg-title">🏛️ Why Dam Walls Are Thicker at the Bottom</div>
            <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"480px"}}>
              {/* Water body */}
              <rect x="20" y="30" width="240" height="160" fill="#bfdbfe" rx="4"/>
              <text x="130" y="115" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="14" fontWeight="700" fill="#1e40af">Water</text>
              {/* Dam wall — trapezoid wider at bottom */}
              <polygon points="260,30 290,30 330,190 260,190" fill="#94a3b8" stroke="#475569" strokeWidth="2"/>
              {/* Pressure arrows — increasing down */}
              {[50,90,130,170].map((y,i) => {
                const len = 20 + i*14;
                return <g key={y}>
                  <line x1={260-len} y1={y} x2={258} y2={y} stroke="#2563eb" strokeWidth={1.5+i*0.5}
                    markerEnd="url(#arrowB2)" opacity="0.8"/>
                </g>;
              })}
              <defs><marker id="arrowB2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#2563eb"/></marker></defs>
              {/* Labels */}
              <text x="350" y="52" fontFamily="Inter,sans-serif" fontSize="12" fill="#475569">Low pressure</text>
              <text x="350" y="95" fontFamily="Inter,sans-serif" fontSize="12" fill="#2563eb">↑ Increasing</text>
              <text x="350" y="150" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#be123c">High pressure</text>
              <text x="280" y="210" fontFamily="Inter,sans-serif" fontSize="10" fill="#64748b">Thicker wall at bottom = withstands high pressure</text>
              {/* Water level */}
              <line x1="20" y1="30" x2="260" y2="30" stroke="#93c5fd" strokeWidth="2" strokeDasharray="6,3"/>
              <text x="140" y="22" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#0284c7">Water surface</text>
            </svg>
          </div>

          <div className="fap-atm-box">
            <div className="fap-atm-title">🌍 Atmospheric Pressure</div>
            <div className="fap-atm-text">The pressure applied by <strong>air (the atmosphere)</strong> on the body is called atmospheric pressure. The thick layer of air surrounding the Earth exerts pressure in all directions on everything at Earth's surface. We don't feel it because the pressure inside our bodies balances it. Atmospheric pressure <strong>decreases at higher altitudes</strong> — less air above means less pressure.</div>
          </div>

          <div className="fap-pull-quote">
            <p>"Force is invisible — you can't see it, only its effects. Yet every movement, every shape-change, every push and pull in the universe is governed by this single fundamental concept."</p>
          </div>

          <div className="fap-divider"><div className="fap-divider-mark" /></div>
          <div className="fap-faq-header"><span className="fap-faq-kicker">Exam Preparation</span></div>
          <h2 className="fap-faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq,i) => (
            <div className={`fap-faq-item${openIndex===i?" open":""}`} key={i}>
              <button className="fap-faq-q" onClick={() => toggle(i)}>
                <span className="fap-faq-q-text">Q{i+1}. {faq.q}</span>
                <span className="fap-faq-icon">{openIndex===i?"▴":"▾"}</span>
              </button>
              {openIndex===i && (<div className="fap-faq-ans visible"><div className="fap-faq-ans-inner">{faq.a}</div></div>)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
