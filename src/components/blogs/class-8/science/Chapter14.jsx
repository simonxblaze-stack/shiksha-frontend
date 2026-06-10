import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #001a0a;
    --ink2:       #003015;
    --muted:      #2a5040;
    --paper:      #f0fdf4;
    --paper2:     #d8f5e4;
    --accent:     #059669;
    --accent2:    #047857;
    --accent-lt:  #d1fae5;
    --teal:       #0f766e;
    --teal-lt:    #ccfbf1;
    --blue:       #1e40af;
    --blue-lt:    #dbeafe;
    --amber:      #b45309;
    --amber-lt:   #fef3c7;
    --red:        #be123c;
    --red-lt:     #ffe4e6;
    --violet:     #7c3aed;
    --violet-lt:  #ede9fe;
    --sky:        #0284c7;
    --sky-lt:     #e0f2fe;
    --rule:       #6ee7b7;
    --white:      #ffffff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .cec-root { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }

  /* ═══ HERO ═══ */
  .cec-hero {
    background: linear-gradient(135deg, #000f06 0%, #001a0a 50%, #002814 100%);
    min-height: 88vh; display: flex; align-items: flex-end;
    position: relative; overflow: hidden; padding: 0 0 64px;
  }
  @media (max-width: 700px) { .cec-hero { min-height: auto; align-items: flex-start; padding: 72px 0 48px; } }
  .cec-hero::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #059669 0%, #0f766e 28%, #0284c7 55%, #7c3aed 80%, #be123c 100%);
  }
  /* Electric current lines */
  .cec-hero-current {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      repeating-linear-gradient(90deg, rgba(5,150,105,0.05) 0px, rgba(5,150,105,0.05) 1px, transparent 1px, transparent 60px),
      radial-gradient(ellipse at 30% 50%, rgba(5,150,105,0.08) 0%, transparent 50%);
  }
  .cec-hero-ring { position: absolute; top: 50%; right: 5%; transform: translateY(-50%); width: clamp(140px,22vw,290px); height: clamp(140px,22vw,290px); border-radius: 50%; border: 1.5px solid rgba(5,150,105,0.18); pointer-events: none; }
  .cec-hero-ring::before { content: ''; position: absolute; inset: 18%; border-radius: 50%; border: 1px dashed rgba(15,118,110,0.14); }
  .cec-hero-ring::after  { content: ''; position: absolute; inset: 40%; border-radius: 50%; background: rgba(5,150,105,0.07); }
  .cec-glow-a { position: absolute; top: 14%; left: 6%; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(5,150,105,0.18) 0%, transparent 68%); pointer-events: none; }
  .cec-glow-b { position: absolute; bottom: 8%; right: 22%; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(15,118,110,0.12) 0%, transparent 70%); pointer-events: none; }
  .cec-hero-bg-num { position: absolute; bottom: -80px; right: -20px; font-family: 'Montserrat', sans-serif; font-size: clamp(200px,34vw,480px); font-weight: 900; line-height: 1; color: rgba(255,255,255,0.018); letter-spacing: -0.04em; user-select: none; pointer-events: none; }
  .cec-hero-inner { max-width: 900px; width: 100%; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }
  .cec-overline { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #6ee7b7; margin-bottom: 24px; display: flex; align-items: center; gap: 14px; }
  .cec-overline::before, .cec-overline::after { content: ''; flex: 0 0 40px; height: 1px; background: #6ee7b7; }
  .cec-hero-title { font-family: 'Montserrat', sans-serif; font-size: clamp(28px,5.5vw,60px); font-weight: 900; color: #fff; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px; }
  .cec-hero-title em   { font-style: normal; color: #6ee7b7; }
  .cec-hero-title .em2 { color: #93c5fd; }
  .cec-hero-bar { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; margin-top: 8px; }
  .cec-hero-bar-item { flex: 1 1 150px; padding: 0 24px 0 0; border-right: 1px solid rgba(255,255,255,0.08); margin-right: 24px; }
  .cec-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .cec-bar-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 5px; }
  .cec-bar-value { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.72); }

  /* ═══ BODY ═══ */
  .cec-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }

  /* ═══ INTRO CARD ═══ */
  .cec-intro-card { background: linear-gradient(135deg, #000f06 0%, #002814 100%); border-left: 5px solid #059669; border-radius: 4px; padding: 38px 42px; margin-bottom: 64px; position: relative; overflow: hidden; }
  .cec-intro-card::after { content: '⚡'; position: absolute; right: 28px; top: 50%; transform: translateY(-50%); font-size: 96px; opacity: 0.09; }
  .cec-intro-card p { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.86); line-height: 1.8; margin: 0 0 14px; }
  .cec-intro-card p:last-child { margin: 0; }
  .cec-intro-card strong { color: #6ee7b7; }

  /* ═══ DIVIDER ═══ */
  .cec-divider { margin: 60px 0; display: flex; align-items: center; gap: 16px; }
  .cec-divider::before, .cec-divider::after { content: ''; flex: 1; height: 1px; background: var(--rule); }
  .cec-divider-mark { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

  /* ═══ SECTION HEADER ═══ */
  .cec-sec-head { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 34px; border-bottom: 2px solid var(--rule); padding-bottom: 20px; }
  .cec-sec-num { font-family: 'Montserrat', sans-serif; font-size: 58px; font-weight: 900; color: var(--rule); line-height: 1; flex-shrink: 0; }
  .cec-sec-title-wrap { padding-top: 8px; }
  .cec-sec-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .cec-sec-title { font-family: 'Montserrat', sans-serif; font-size: clamp(22px,3.5vw,32px); font-weight: 800; color: var(--ink); line-height: 1.15; letter-spacing: -0.02em; }
  .cec-sec-title span { color: var(--accent); }

  /* ═══ BODY TEXT ═══ */
  .cec-body-text { font-family: 'Inter', sans-serif; font-size: 17px; color: var(--ink2); line-height: 1.85; margin-bottom: 28px; }
  .cec-body-text strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S1: CONDUCTOR/INSULATOR SPLIT ═══ */
  .cec-cond-split { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--rule); margin-bottom: 28px; }
  @media (max-width: 580px) { .cec-cond-split { grid-template-columns: 1fr; } }
  .cec-cond-col { padding: 24px 22px; }
  .cec-cond-col.good { background: var(--accent-lt); }
  .cec-cond-col.bad  { background: var(--red-lt); border-left: 2px solid var(--rule); }
  @media (max-width: 580px) { .cec-cond-col.bad { border-left: none; border-top: 2px solid var(--rule); } }
  .cec-cond-head { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.07); }
  .cec-cond-icon { font-size: 24px; }
  .cec-cond-title { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; }
  .good .cec-cond-title { color: var(--accent2); }
  .bad  .cec-cond-title { color: var(--red); }
  .cec-cond-def { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.68; margin-bottom: 12px; }
  .cec-cond-eg-label { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.10em; margin-bottom: 6px; }
  .good .cec-cond-eg-label { color: var(--accent); }
  .bad  .cec-cond-eg-label  { color: var(--red); }
  .cec-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .cec-tag { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 16px; }
  .good .cec-tag { background: rgba(5,150,105,0.12); color: var(--accent2); }
  .bad  .cec-tag  { background: rgba(190,18,60,0.10); color: var(--red); }

  /* ═══ S1: ELECTROLYTE BOX ═══ */
  .cec-electrolyte-box { background: var(--amber-lt); border-left: 4px solid var(--amber); border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .cec-electrolyte-box p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .cec-electrolyte-box strong { color: var(--amber); font-weight: 700; }

  /* ═══ S2: TESTERS — 2 dark cards ═══ */
  .cec-tester-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
  @media (max-width: 560px) { .cec-tester-grid { grid-template-columns: 1fr; } }
  .cec-tester-card { background: linear-gradient(160deg, #000f06 0%, #002814 100%); border-radius: 10px; padding: 22px 20px; border: 1.5px solid rgba(5,150,105,0.22); }
  .cec-tester-icon { font-size: 30px; margin-bottom: 10px; display: block; }
  .cec-tester-name { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; color: #6ee7b7; margin-bottom: 5px; }
  .cec-tester-tag { font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 10px; }
  .cec-tester-desc { font-family: 'Inter', sans-serif; font-size: 15px; color: rgba(255,255,255,0.60); line-height: 1.65; }
  .cec-tester-desc strong { color: rgba(255,255,255,0.82); }

  /* ═══ S2: SVG — CIRCUIT DIAGRAM ═══ */
  .cec-svg-wrap { background: var(--white); border: 1.5px solid var(--rule); border-radius: 12px; padding: 24px; margin-bottom: 28px; overflow-x: auto; }
  .cec-svg-title { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 16px; text-align: center; }

  /* ═══ S3: CHEMICAL EFFECTS — 3 results ═══ */
  .cec-effects-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 28px; }
  @media (max-width: 620px) { .cec-effects-row { grid-template-columns: 1fr; } }
  .cec-effect-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 20px 16px; text-align: center; border-top: 4px solid var(--accent); }
  .cec-effect-card:nth-child(2) { border-top-color: var(--blue); }
  .cec-effect-card:nth-child(3) { border-top-color: var(--violet); }
  .cec-effect-icon { font-size: 28px; margin-bottom: 8px; display: block; }
  .cec-effect-title { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 5px; }
  .cec-effect-desc { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.6; }

  /* ═══ S3: ELECTRODE NOTE ═══ */
  .cec-electrode-box { background: var(--teal-lt); border-left: 4px solid var(--teal); border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .cec-electrode-box p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .cec-electrode-box strong { color: var(--teal); font-weight: 700; }

  /* ═══ S4: ELECTROPLATING ═══ */
  .cec-electro-def { background: linear-gradient(135deg, #000f06 0%, #002814 100%); border-radius: 12px; padding: 26px 28px; margin-bottom: 24px; border: 1.5px solid rgba(5,150,105,0.25); }
  .cec-electro-def-title { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; color: #6ee7b7; margin-bottom: 10px; }
  .cec-electro-def-text { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.78; }
  .cec-electro-def-text strong { color: #a7f3d0; }

  /* ═══ S4: ELECTROPLATING STEPS ═══ */
  .cec-ep-steps { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
  .cec-ep-step { display: grid; grid-template-columns: 46px 1fr; gap: 0; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--rule); background: var(--white); }
  .cec-ep-num { background: linear-gradient(180deg, #000f06 0%, #002814 100%); color: #6ee7b7; font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900; display: flex; align-items: center; justify-content: center; }
  .cec-ep-body { padding: 12px 16px; }
  .cec-ep-title { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
  .cec-ep-desc { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.55; }

  /* ═══ S4: APPLICATIONS GRID ═══ */
  .cec-app-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px; }
  @media (max-width: 560px) { .cec-app-grid { grid-template-columns: 1fr; } }
  .cec-app-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 18px 16px; display: flex; gap: 14px; align-items: flex-start; }
  .cec-app-icon { font-size: 26px; flex-shrink: 0; margin-top: 2px; }
  .cec-app-content {}
  .cec-app-title { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
  .cec-app-desc { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--muted); line-height: 1.6; }
  .cec-app-desc strong { color: var(--accent2); font-weight: 700; }

  /* ═══ PULL QUOTE ═══ */
  .cec-pull-quote { border-left: 4px solid var(--accent); padding: 22px 30px; margin: 36px 0; background: var(--accent-lt); border-radius: 0 6px 6px 0; }
  .cec-pull-quote p { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: var(--accent2); line-height: 1.7; font-style: italic; }

  /* ═══ FAQ ═══ */
  .cec-faq-header { margin-bottom: 8px; }
  .cec-faq-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
  .cec-faq-title { font-family: 'Montserrat', sans-serif; font-size: clamp(24px,4vw,34px); font-weight: 800; color: var(--ink); margin-bottom: 28px; letter-spacing: -0.02em; }
  .cec-faq-item { border: 1.5px solid var(--rule); border-radius: 8px; margin-bottom: 12px; overflow: hidden; background: var(--white); }
  .cec-faq-item.open { border-color: var(--accent); }
  .cec-faq-q { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; text-align: left; gap: 16px; }
  .cec-faq-q-text { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); line-height: 1.4; }
  .cec-faq-icon { color: var(--accent); font-size: 20px; flex-shrink: 0; }
  .cec-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
  .cec-faq-ans.visible { max-height: 700px; }
  .cec-faq-ans-inner { padding: 0 24px 22px; font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.82; border-top: 1px solid var(--rule); padding-top: 18px; }
  .cec-faq-ans-inner strong { color: var(--accent2); font-weight: 600; }
`;

const faqs = [
  { q: "What are good conductors and bad conductors? What is an electrolyte?", a: "Good Conductors: Materials that allow electric current to pass through them easily. Examples: Metals (copper, iron, aluminium), salt water, lemon juice, tap water. Bad Conductors (Insulators): Materials that do not allow electric current to pass through them easily. Examples: Rubber, plastic, wood, dry air. Electrolyte: A liquid that conducts electricity is called an electrolyte. Electrolytes are mostly solutions of acids, bases, and salts in water. The reason a liquid conducts electricity: ions (charged particles) must be present in it." },
  { q: "Why does distilled water not conduct electricity but salt water does?", a: "Distilled water is pure water — it is free of salts, minerals, acids, and bases. Without these, there are no ions in distilled water, so it cannot conduct electricity. It is a poor conductor. However, when salt is added to distilled water, it dissolves and produces ions (Na⁺ and Cl⁻). These ions carry the electric charge, making the solution a good conductor. Similarly, orange juice, lemon juice (acidic — contain H⁺ ions) and sodium hydroxide solution (basic — contains OH⁻ ions) are good conductors." },
  { q: "What is an LED tester and a compass tester? When is each used?", a: "LED Tester: An LED (Light-emitting diode) connected in a circuit is used to detect whether a weak electric current is flowing through a liquid. The LED lights up if current flows. The longer lead of the LED is connected to the positive terminal and the shorter lead to the negative terminal. Based on the heating effect of electric current. Compass Tester: A compass is placed under a wire in a circuit. When current flows through the liquid (even a weak current), the wire produces a magnetic field — the compass needle deflects. Based on the magnetic effect of electric current. Note: Bulb is used as a tester for strong current; LED and compass are used for weak current." },
  { q: "What are the chemical effects of electric current? What are the three possible results?", a: "When electric current passes through a conducting liquid (electrolyte), it causes chemical changes — this is called the chemical effect of electric current. Example: When current passes through water, it splits into hydrogen and oxygen. Three possible results when current passes through a liquid: (1) Bubbles of gas may be formed at the electrodes. (2) Deposits of metal may be seen on one or both electrodes. (3) A change of colour may occur in the solution. Electrodes: Good conductors from which current enters/leaves a solution. Anode = connected to positive terminal; Cathode = connected to negative terminal." },
  { q: "What is the potato test for the positive terminal of a battery?", a: "When the end of a copper wire connected to the battery is inserted into a potato, the potato juice acts as an electrolyte and completes the circuit. The negative charge (electrons) flows in, and copper from the positive terminal wire combines with the potato at the point of insertion, forming a greenish-blue spot. The greenish-blue spot always forms at the positive terminal end. This is used as a simple tester to identify the positive terminal of a battery. Note: Many vegetables and fruits (orange, apple, tomato) conduct electricity due to the presence of acids, bases, and salts in their juice." },
  { q: "What is electroplating? How does it work? Explain with the copper sulphate example.", a: "Electroplating is the process of depositing a thin layer of a desired metal on another material using electric current. It is a chemical effect of electric current. How it works (Copper electroplating example): The cathode (negative electrode — object to be plated) is dipped in copper sulphate solution along with an anode (copper plate). When current flows, copper sulphate dissociates into Cu²⁺ and SO₄²⁻ ions. Cu²⁺ ions are attracted to the cathode and deposit as a thin layer of copper on it. Simultaneously, an equal amount of copper from the copper anode dissolves into the solution. This maintains copper concentration. The copper gets transferred from anode to cathode — electroplating the object with copper." },
  { q: "What are the applications of electroplating?", a: "(1) Chromium plating: Chromium is shiny, corrosion-resistant, and scratch-resistant. Electroplated on wheel rims, bath taps, kitchen gas burners to make them attractive and durable. (2) Tin plating on iron: Tin cans for storing food are made by electroplating tin on iron. Tin is less reactive than iron — prevents food from coming into contact with iron and spoiling. (3) Zinc plating on iron: In bridges and automobiles, iron is the structural material. Zinc (more reactive than iron) is electroplated on iron to protect it from corrosion and rusting (galvanisation). (4) Gold/Silver plating on artificial ornaments: Cheap metals are electroplated with gold or silver to give them the appearance of precious metals at much lower cost." },
];

export default function ChemicalEffectsOfElectricCurrent() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="cec-root">
        {/* HERO */}
        <div className="cec-hero">
          <div className="cec-hero-current" />
          <div className="cec-hero-ring" />
          <div className="cec-glow-a" />
          <div className="cec-glow-b" />
          <div className="cec-hero-bg-num">14</div>
          <div className="cec-hero-inner">
            <div className="cec-overline">Class 8 Science — Chapter 14</div>
            <h1 className="cec-hero-title"><em>Chemical Effects</em><br />of <span className="em2">Electric Current</span></h1>
            <div className="cec-hero-bar">
              <div className="cec-hero-bar-item"><div className="cec-bar-label">Chapter</div><div className="cec-bar-value">14 — Chemistry + Physics</div></div>
              <div className="cec-hero-bar-item"><div className="cec-bar-label">Topics</div><div className="cec-bar-value">Conductors · Electrolysis · Electroplating</div></div>
              <div className="cec-hero-bar-item"><div className="cec-bar-label">Board</div><div className="cec-bar-value">NCERT / CBSE</div></div>
            </div>
          </div>
        </div>

        <div className="cec-body">
          <div className="cec-intro-card">
            <p>Electricity isn't just about light bulbs and motors — it can also cause <strong>chemical changes</strong>. When current flows through a liquid, it can split molecules, deposit metals, and change colours.</p>
            <p>This chapter explores which liquids conduct electricity, how we can test for it, what chemical changes electric current causes, and the remarkable industrial process of <strong>electroplating</strong> — coating one metal with another using electricity.</p>
          </div>

          {/* S1: CONDUCTORS */}
          <div className="cec-sec-head">
            <div className="cec-sec-num">1</div>
            <div className="cec-sec-title-wrap">
              <div className="cec-sec-kicker">Conductivity</div>
              <h2 className="cec-sec-title">Do Liquids Conduct <span>Electricity</span>?</h2>
            </div>
          </div>
          <div className="cec-cond-split">
            <div className="cec-cond-col good">
              <div className="cec-cond-head"><span className="cec-cond-icon">✅</span><div className="cec-cond-title">Good Conductors</div></div>
              <div className="cec-cond-def">Materials that <strong>allow electric current to pass through them easily</strong>. Conducting liquids contain ions (charged particles) that carry the current.</div>
              <div className="cec-cond-eg-label">Examples of Conducting Liquids</div>
              <div className="cec-tags">{["Lemon juice","Orange juice","Salt solution","NaOH solution","Tap water","Seawater","Milk","Vinegar"].map(t=><span className="cec-tag" key={t}>{t}</span>)}</div>
            </div>
            <div className="cec-cond-col bad">
              <div className="cec-cond-head"><span className="cec-cond-icon">❌</span><div className="cec-cond-title">Bad Conductors</div></div>
              <div className="cec-cond-def">Materials that <strong>do not allow electric current to pass through them easily</strong>. Non-conducting liquids have no free ions to carry charge.</div>
              <div className="cec-cond-eg-label">Examples of Non-Conducting Liquids</div>
              <div className="cec-tags">{["Distilled water","Sugar solution","Honey","Kerosene oil","Vegetable oil"].map(t=><span className="cec-tag" key={t}>{t}</span>)}</div>
            </div>
          </div>
          <div className="cec-electrolyte-box">
            <p>⚗️ <strong>Electrolyte:</strong> A liquid that conducts electricity is called an electrolyte. They are mostly solutions of acids, bases, and salts in water. <strong>Key rule:</strong> Non-conducting liquid starts conducting when salt, acid, or base is added to the solution — because these dissolve to produce ions. Distilled water is a poor conductor because it is free of salts. Adding salt makes it conductive.</p>
          </div>

          {/* SVG — Simple Circuit with liquid */}
          <div className="cec-svg-wrap">
            <div className="cec-svg-title">⚡ Testing Conductivity of a Liquid — LED Circuit</div>
            <svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px"}}>
              <defs>
                <marker id="arrowEC" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="#059669"/></marker>
              </defs>
              {/* Battery — centered at top */}
              <rect x="210" y="18" width="70" height="32" rx="6" fill="#1e40af" stroke="#93c5fd" strokeWidth="1.5"/>
              <text x="245" y="38" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#fff">Battery</text>
              <text x="216" y="37" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="900" fill="#fbbf24">+</text>
              <text x="260" y="37" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="900" fill="#94a3b8">−</text>
              {/* LED — on right wire, label above it */}
              <polygon points="340,26 364,36 340,46" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5"/>
              <line x1="364" y1="30" x2="364" y2="42" stroke="#b45309" strokeWidth="2"/>
              <text x="352" y="16" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#b45309">LED</text>
              {/* Wires */}
              <polyline points="210,34 155,34 155,140 215,140" fill="none" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowEC)"/>
              <polyline points="280,34 340,34" fill="none" stroke="#059669" strokeWidth="2"/>
              <polyline points="364,36 400,36 400,140 355,140" fill="none" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowEC)"/>
              {/* Current label — far left in clear space */}
              <text x="118" y="92" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="600" fill="#059669">current</text>
              <text x="118" y="106" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="600" fill="#059669">flows ↓</text>
              {/* Electrodes — with labels pushed ABOVE them */}
              <text x="205" y="128" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#1e40af">Anode (+)</text>
              <rect x="210" y="132" width="10" height="72" rx="2" fill="#374151"/>
              <text x="368" y="128" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#dc2626">Cathode (−)</text>
              <rect x="355" y="132" width="10" height="72" rx="2" fill="#374151"/>
              {/* Liquid beaker */}
              <rect x="155" y="165" width="220" height="65" rx="6" fill="#cffafe" stroke="#0f766e" strokeWidth="2"/>
              <text x="265" y="202" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#0f766e">Liquid (Electrolyte)</text>
              {/* Bubbles */}
              {[214,222].map((x,i) => <circle key={i} cx={x} cy={158-i*10} r="4" fill="none" stroke="#0284c7" strokeWidth="1.5"/>)}
              {[359,351].map((x,i) => <circle key={i} cx={x} cy={158-i*10} r="3" fill="none" stroke="#059669" strokeWidth="1.5"/>)}
              {/* Caption */}
              <text x="265" y="256" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#64748b">If current flows → LED glows + bubbles form at electrodes</text>
            </svg>
          </div>

          {/* S2: TESTERS */}
          <div className="cec-divider"><div className="cec-divider-mark" /></div>
          <div className="cec-sec-head">
            <div className="cec-sec-num">2</div>
            <div className="cec-sec-title-wrap">
              <div className="cec-sec-kicker">Detection Methods</div>
              <h2 className="cec-sec-title">Types of <span>Testers</span></h2>
            </div>
          </div>
          <p className="cec-body-text">Two types of testers are used to detect whether a liquid conducts electricity:</p>
          <div className="cec-tester-grid">
            <div className="cec-tester-card"><span className="cec-tester-icon">💡</span><div className="cec-tester-name">LED Tester</div><div className="cec-tester-tag">Heating Effect of Electricity</div><div className="cec-tester-desc">A <strong>Light-Emitting Diode</strong> is used to detect weak electric current through a liquid. If current flows, the LED glows. Longer lead → positive terminal; shorter lead → negative terminal. <strong>LED is used for weak current; bulb is used for strong current.</strong></div></div>
            <div className="cec-tester-card"><span className="cec-tester-icon">🧭</span><div className="cec-tester-name">Compass Tester</div><div className="cec-tester-tag">Magnetic Effect of Electricity</div><div className="cec-tester-desc">A <strong>compass placed under a wire</strong> in the circuit. When current flows (even weak), the wire produces a magnetic field — the compass needle deflects. Can detect both weak and strong currents.</div></div>
          </div>

          {/* S3: CHEMICAL EFFECTS */}
          <div className="cec-divider"><div className="cec-divider-mark" /></div>
          <div className="cec-sec-head">
            <div className="cec-sec-num">3</div>
            <div className="cec-sec-title-wrap">
              <div className="cec-sec-kicker">Electrolysis</div>
              <h2 className="cec-sec-title">Chemical Effects of <span>Electric Current</span></h2>
            </div>
          </div>
          <p className="cec-body-text">When electric current passes through a conducting liquid (electrolyte), it causes <strong>chemical changes</strong>. Three possible results:</p>
          <div className="cec-effects-row">
            <div className="cec-effect-card"><span className="cec-effect-icon">🫧</span><div className="cec-effect-title">Gas Bubbles Formed</div><div className="cec-effect-desc">Bubbles of gas form at the electrodes. Example: Water splits into O₂ at anode and H₂ at cathode.</div></div>
            <div className="cec-effect-card"><span className="cec-effect-icon">🪙</span><div className="cec-effect-title">Metal Deposits</div><div className="cec-effect-desc">Deposits of metal may appear on electrodes. Basis of electroplating — metal coats the cathode.</div></div>
            <div className="cec-effect-card"><span className="cec-effect-icon">🎨</span><div className="cec-effect-title">Colour Change</div><div className="cec-effect-desc">The colour of the solution may change as chemical reactions take place during electrolysis.</div></div>
          </div>
          <div className="cec-electrode-box">
            <p>📌 <strong>Electrodes</strong> are good conductors through which current enters or leaves the electrolyte. The electrode connected to the <strong>positive terminal</strong> is called the <strong>Anode (+)</strong>. The electrode connected to the <strong>negative terminal</strong> is called the <strong>Cathode (−)</strong>. Also: vegetables and fruits like potatoes, oranges, apples, and tomatoes conduct electricity due to acids, bases, and salts in their juice.</p>
          </div>

          {/* SVG — Electrolysis of water */}
          <div className="cec-svg-wrap">
            <div className="cec-svg-title">💧 Electrolysis of Water — Chemical Effect of Current</div>
            <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px"}}>
              <defs>
                <marker id="arrowCEC" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="#0f766e"/></marker>
              </defs>
              {/* Battery */}
              <rect x="210" y="12" width="80" height="32" rx="5" fill="#1e40af" stroke="#93c5fd" strokeWidth="1.5"/>
              <text x="250" y="32" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#fff">Battery</text>
              <text x="216" y="31" fontFamily="Montserrat,sans-serif" fontSize="12" fontWeight="900" fill="#fbbf24">+</text>
              <text x="274" y="31" fontFamily="Montserrat,sans-serif" fontSize="12" fontWeight="900" fill="#94a3b8">−</text>
              {/* Water beaker */}
              <rect x="120" y="130" width="320" height="80" rx="6" fill="#bfdbfe" stroke="#1e40af" strokeWidth="2" opacity="0.7"/>
              <text x="280" y="175" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="13" fontWeight="700" fill="#1e40af">Water (H₂O) — Electrolyte</text>
              {/* Anode electrode */}
              <rect x="178" y="95" width="14" height="90" rx="2" fill="#dc2626"/>
              {/* Anode label — to the LEFT of electrode, well spaced */}
              <text x="88" y="112" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#dc2626">Anode (+)</text>
              <line x1="120" y1="112" x2="178" y2="112" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,2"/>
              {/* O2 bubbles — above anode, spaced above beaker */}
              {[184,176,190].map((x,i) => <circle key={i} cx={x} cy={90-i*14} r="5" fill="none" stroke="#dc2626" strokeWidth="1.5"/>)}
              {/* O2 label — above bubbles, in clear space */}
              <text x="185" y="30" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#dc2626">O₂ gas ↑</text>
              {/* Cathode electrode */}
              <rect x="368" y="95" width="14" height="90" rx="2" fill="#166534"/>
              {/* Cathode label — to the RIGHT of electrode */}
              <text x="462" y="112" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#166534">Cathode (−)</text>
              <line x1="382" y1="112" x2="430" y2="112" stroke="#166534" strokeWidth="1" strokeDasharray="3,2"/>
              {/* H2 bubbles — above cathode */}
              {[372,380,364].map((x,i) => <circle key={i} cx={x} cy={88-i*16} r="6" fill="none" stroke="#166534" strokeWidth="1.5"/>)}
              {/* H2 label */}
              <text x="373" y="28" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#166534">H₂ gas ↑</text>
              {/* Wires */}
              <polyline points="210,28 155,28 155,100 178,100" fill="none" stroke="#0f766e" strokeWidth="2" markerEnd="url(#arrowCEC)"/>
              <polyline points="290,28 360,28 360,28 382,28 382,100" fill="none" stroke="#0f766e" strokeWidth="2" markerEnd="url(#arrowCEC)"/>
              {/* Caption */}
              <text x="280" y="228" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#64748b">H₂O splits → H₂ at cathode + O₂ at anode (2:1 volume ratio)</text>
            </svg>
          </div>

          {/* S4: ELECTROPLATING */}
          <div className="cec-divider"><div className="cec-divider-mark" /></div>
          <div className="cec-sec-head">
            <div className="cec-sec-num">4</div>
            <div className="cec-sec-title-wrap">
              <div className="cec-sec-kicker">Industrial Application</div>
              <h2 className="cec-sec-title">Electroplating — <span>Metal Coating</span></h2>
            </div>
          </div>
          <div className="cec-electro-def">
            <div className="cec-electro-def-title">⚡ What is Electroplating?</div>
            <div className="cec-electro-def-text">Electroplating is the process of <strong>depositing a thin layer of any desired metal on another material</strong> with the help of an electric current. It is a chemical effect of electric current. The object to be plated is the <strong>cathode (negative)</strong>; the plating metal is the <strong>anode (positive)</strong>; dissolved in a salt solution of the plating metal.</div>
          </div>

          {/* SVG — Electroplating */}
          <div className="cec-svg-wrap">
            <div className="cec-svg-title">🪙 Copper Electroplating — How It Works</div>
            <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px"}}>
              <defs>
                <marker id="arrowEP" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="#059669"/></marker>
                <marker id="arrowEPB" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="#0284c7"/></marker>
              </defs>
              {/* Battery */}
              <rect x="210" y="10" width="80" height="28" rx="5" fill="#000f06" stroke="#6ee7b7" strokeWidth="1.5"/>
              <text x="250" y="28" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#6ee7b7">Battery</text>
              <text x="215" y="27" fontFamily="Montserrat,sans-serif" fontSize="12" fontWeight="900" fill="#fbbf24">+</text>
              <text x="268" y="27" fontFamily="Montserrat,sans-serif" fontSize="12" fontWeight="900" fill="#94a3b8">−</text>
              {/* Copper anode — label ABOVE electrode, fully clear */}
              <text x="120" y="72" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#b45309">Copper</text>
              <text x="120" y="86" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#b45309">Anode (+)</text>
              <rect x="140" y="90" width="18" height="100" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="1.5"/>
              {/* Object cathode — label ABOVE electrode */}
              <text x="430" y="72" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#374151">Object</text>
              <text x="430" y="86" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#374151">Cathode (−)</text>
              <rect x="402" y="90" width="18" height="100" rx="3" fill="#6b7280" stroke="#374151" strokeWidth="1.5"/>
              {/* Copper layer on cathode */}
              <rect x="402" y="90" width="6" height="100" rx="2" fill="#b45309" opacity="0.65"/>
              {/* Solution */}
              <rect x="110" y="120" width="340" height="85" rx="6" fill="#dbeafe" stroke="#0284c7" strokeWidth="1.5"/>
              <text x="280" y="160" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#0284c7">Copper Sulphate Solution</text>
              <text x="280" y="178" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#0284c7">Cu²⁺  +  SO₄²⁻</text>
              {/* Cu ions moving — in middle of solution, spaced */}
              {[195,235,270,305,340].map((x,i) => <text key={i} x={x} y="148" fontFamily="Montserrat,sans-serif" fontSize="10" fontWeight="700" fill="#0284c7">Cu²⁺</text>)}
              <line x1="340" y1="145" x2="398" y2="145" stroke="#0284c7" strokeWidth="1.5" markerEnd="url(#arrowEPB)"/>
              {/* Wires */}
              <polyline points="210,24 155,24 155,95 140,95" fill="none" stroke="#059669" strokeWidth="1.8" markerEnd="url(#arrowEP)"/>
              <polyline points="290,24 350,24 420,24 420,93" fill="none" stroke="#059669" strokeWidth="1.8" markerEnd="url(#arrowEP)"/>
              {/* Caption */}
              <text x="280" y="220" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#64748b">Cu from anode dissolves → Cu²⁺ travels → deposits on cathode</text>
            </svg>
          </div>

          <p className="cec-body-text" style={{marginTop:"8px"}}>The process step by step:</p>
          <div className="cec-ep-steps">
            {[["1","Anode: Copper Plate","The copper plate (anode, +) dissolves into the copper sulphate solution as Cu²⁺ ions."],["2","Solution: Cu²⁺ Ions","Cu²⁺ ions travel through the copper sulphate solution toward the cathode."],["3","Cathode: Object to be Plated","The Cu²⁺ ions reach the cathode (object, −) and get deposited as a thin layer of copper."],["4","Result","The object gets coated with copper. The copper lost from solution is replaced by the dissolving anode — process continues indefinitely."]].map(([n,t,d]) => (
              <div className="cec-ep-step" key={n}><div className="cec-ep-num">{n}</div><div className="cec-ep-body"><div className="cec-ep-title">{t}</div><div className="cec-ep-desc">{d}</div></div></div>
            ))}
          </div>

          <p className="cec-body-text">Real-world applications of electroplating:</p>
          <div className="cec-app-grid">
            <div className="cec-app-card"><div className="cec-app-icon">🔧</div><div className="cec-app-content"><div className="cec-app-title">Chromium Plating</div><div className="cec-app-desc">Chromium is <strong>shiny, corrosion-resistant, and scratch-resistant</strong>. Electroplated on wheel rims, bath taps, and gas burners.</div></div></div>
            <div className="cec-app-card"><div className="cec-app-icon">🥫</div><div className="cec-app-content"><div className="cec-app-title">Tin Plating on Iron</div><div className="cec-app-desc">Tin cans for food storage are <strong>iron electroplated with tin</strong>. Tin is less reactive than iron — prevents food spoilage.</div></div></div>
            <div className="cec-app-card"><div className="cec-app-icon">🌉</div><div className="cec-app-content"><div className="cec-app-title">Zinc Plating on Iron (Galvanisation)</div><div className="cec-app-desc">Bridges and automobiles use iron. <strong>Zinc is electroplated on iron</strong> to prevent corrosion and rust — zinc is more reactive, so it corrodes first.</div></div></div>
            <div className="cec-app-card"><div className="cec-app-icon">💍</div><div className="cec-app-content"><div className="cec-app-title">Gold/Silver Plating</div><div className="cec-app-desc">Artificial ornaments made of <strong>cheap metals are electroplated with gold or silver</strong> — giving precious appearance at much lower cost.</div></div></div>
          </div>

          <div className="cec-pull-quote">
            <p>"Electricity flowing through a liquid isn't just motion — it's transformation. Molecules split, metals migrate, and entire objects get coated in gleaming new surfaces. Electrochemistry is where physics and chemistry become one."</p>
          </div>

          <div className="cec-divider"><div className="cec-divider-mark" /></div>
          <div className="cec-faq-header"><span className="cec-faq-kicker">Exam Preparation</span></div>
          <h2 className="cec-faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq,i) => (
            <div className={`cec-faq-item${openIndex===i?" open":""}`} key={i}>
              <button className="cec-faq-q" onClick={() => toggle(i)}>
                <span className="cec-faq-q-text">Q{i+1}. {faq.q}</span>
                <span className="cec-faq-icon">{openIndex===i?"▴":"▾"}</span>
              </button>
              {openIndex===i && (<div className="cec-faq-ans visible"><div className="cec-faq-ans-inner">{faq.a}</div></div>)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
