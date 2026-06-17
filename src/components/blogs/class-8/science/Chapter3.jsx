import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #1a0012;
    --ink2:       #2e0020;
    --muted:      #7a4060;
    --paper:      #fff5fb;
    --paper2:     #fce8f5;
    --accent:     #be185d;
    --accent2:    #9d174d;
    --accent-lt:  #fce7f3;
    --violet:     #7c3aed;
    --violet-lt:  #ede9fe;
    --teal:       #0f766e;
    --teal-lt:    #ccfbf1;
    --amber:      #b45309;
    --amber-lt:   #fef3c7;
    --blue:       #1e40af;
    --blue-lt:    #dbeafe;
    --green:      #166534;
    --green-lt:   #dcfce7;
    --red:        #991b1b;
    --red-lt:     #fee2e2;
    --rule:       #f0abcf;
    --white:      #ffffff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .sfp-root { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }

  /* ═══ HERO ═══ */
  .sfp-hero {
    background: linear-gradient(135deg, #0f0008 0%, #1e0014 50%, #2d001e 100%);
    min-height: 88vh; display: flex; align-items: flex-end;
    position: relative; overflow: hidden; padding: 0 0 64px;
  }
  @media (max-width: 700px) { .sfp-hero { min-height: auto; align-items: flex-start; padding: 72px 0 48px; } }
  .sfp-hero::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #be185d 0%, #7c3aed 35%, #0f766e 65%, #b45309 100%);
  }
  .sfp-hero-weave {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      repeating-linear-gradient(45deg, rgba(190,24,93,0.06) 0px, rgba(190,24,93,0.06) 1px, transparent 1px, transparent 18px),
      repeating-linear-gradient(-45deg, rgba(124,58,237,0.04) 0px, rgba(124,58,237,0.04) 1px, transparent 1px, transparent 18px);
  }
  .sfp-hero-ring {
    position: absolute; top: 50%; right: 5%; transform: translateY(-50%);
    width: clamp(140px, 22vw, 290px); height: clamp(140px, 22vw, 290px);
    border-radius: 50%; border: 1.5px solid rgba(190,24,93,0.14); pointer-events: none;
  }
  .sfp-hero-ring::before { content: ''; position: absolute; inset: 18%; border-radius: 50%; border: 1px dashed rgba(124,58,237,0.12); }
  .sfp-hero-ring::after  { content: ''; position: absolute; inset: 40%; border-radius: 50%; background: rgba(190,24,93,0.07); }
  .sfp-glow-a { position: absolute; top: 14%; left: 6%; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(190,24,93,0.16) 0%, transparent 68%); pointer-events: none; }
  .sfp-glow-b { position: absolute; bottom: 8%; right: 24%; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%); pointer-events: none; }
  .sfp-hero-bg-num { position: absolute; bottom: -80px; right: -20px; font-family: 'Montserrat', sans-serif; font-size: clamp(200px, 34vw, 480px); font-weight: 900; line-height: 1; color: rgba(255,255,255,0.018); letter-spacing: -0.04em; user-select: none; pointer-events: none; }
  .sfp-hero-inner { max-width: 900px; width: 100%; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }
  .sfp-overline { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #f9a8d4; margin-bottom: 24px; display: flex; align-items: center; gap: 14px; }
  .sfp-overline::before, .sfp-overline::after { content: ''; flex: 0 0 40px; height: 1px; background: #f9a8d4; }
  .sfp-hero-title { font-family: 'Montserrat', sans-serif; font-size: clamp(34px, 7vw, 76px); font-weight: 900; color: #fff; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px; }
  .sfp-hero-title em   { font-style: normal; color: #f9a8d4; }
  .sfp-hero-title .em2 { color: #c4b5fd; }
  .sfp-hero-bar { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; margin-top: 8px; }
  .sfp-hero-bar-item { flex: 1 1 150px; padding: 0 24px 0 0; border-right: 1px solid rgba(255,255,255,0.08); margin-right: 24px; }
  .sfp-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .sfp-bar-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 5px; }
  .sfp-bar-value { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.72); }

  /* ═══ BODY ═══ */
  .sfp-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }

  /* ═══ INTRO CARD ═══ */
  .sfp-intro-card { background: linear-gradient(135deg, #0f0008 0%, #2d001e 100%); border-left: 5px solid #be185d; border-radius: 4px; padding: 38px 42px; margin-bottom: 64px; position: relative; overflow: hidden; }
  .sfp-intro-card::after { content: '🧵'; position: absolute; right: 28px; top: 50%; transform: translateY(-50%); font-size: 96px; opacity: 0.09; }
  .sfp-intro-card p { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.86); line-height: 1.8; margin: 0 0 14px; }
  .sfp-intro-card p:last-child { margin: 0; }
  .sfp-intro-card strong { color: #f9a8d4; }

  /* ═══ DIVIDER ═══ */
  .sfp-divider { margin: 60px 0; display: flex; align-items: center; gap: 16px; }
  .sfp-divider::before, .sfp-divider::after { content: ''; flex: 1; height: 1px; background: var(--rule); }
  .sfp-divider-mark { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

  /* ═══ SECTION HEADER ═══ */
  .sfp-sec-head { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 34px; border-bottom: 2px solid var(--rule); padding-bottom: 20px; }
  .sfp-sec-num { font-family: 'Montserrat', sans-serif; font-size: 58px; font-weight: 900; color: var(--rule); line-height: 1; flex-shrink: 0; }
  .sfp-sec-title-wrap { padding-top: 8px; }
  .sfp-sec-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .sfp-sec-title { font-family: 'Montserrat', sans-serif; font-size: clamp(22px, 3.5vw, 32px); font-weight: 800; color: var(--ink); line-height: 1.15; letter-spacing: -0.02em; }
  .sfp-sec-title span { color: var(--accent); }

  /* ═══ BODY TEXT ═══ */
  .sfp-body-text { font-family: 'Inter', sans-serif; font-size: 17px; color: var(--ink2); line-height: 1.85; margin-bottom: 28px; }
  .sfp-body-text strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S1: FIBRE TYPES — horizontal banner cards ═══ */
  .sfp-fibre-split { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px; }
  @media (max-width: 580px) { .sfp-fibre-split { grid-template-columns: 1fr; } }
  .sfp-fibre-card { border-radius: 12px; padding: 28px 26px; }
  .sfp-fibre-card.natural   { background: var(--green-lt); border: 2px solid var(--green); }
  .sfp-fibre-card.synthetic { background: var(--violet-lt); border: 2px solid var(--violet); }
  .sfp-fibre-badge { display: inline-block; font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
  .natural   .sfp-fibre-badge { background: rgba(22,101,52,0.15); color: var(--green); }
  .synthetic .sfp-fibre-badge { background: rgba(124,58,237,0.12); color: var(--violet); }
  .sfp-fibre-icon { font-size: 34px; margin-bottom: 10px; display: block; }
  .sfp-fibre-name { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 800; margin-bottom: 8px; }
  .natural   .sfp-fibre-name { color: var(--green); }
  .synthetic .sfp-fibre-name { color: var(--violet); }
  .sfp-fibre-desc { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.7; }
  .sfp-fibre-desc strong { font-weight: 600; }

  /* ═══ S2: 4 SYNTHETIC FIBRE SHOWCASE — zigzag style ═══ */
  .sfp-fibre-showcase { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
  .sfp-showcase-item { display: grid; grid-template-columns: 80px 1fr; gap: 0; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--rule); background: var(--white); }
  .sfp-showcase-side { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 12px; gap: 8px; }
  .sfp-si-rayon    .sfp-showcase-side { background: linear-gradient(180deg, #be185d 0%, #9d174d 100%); }
  .sfp-si-nylon    .sfp-showcase-side { background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%); }
  .sfp-si-polyest  .sfp-showcase-side { background: linear-gradient(180deg, #0f766e 0%, #0d5c56 100%); }
  .sfp-si-acrylic  .sfp-showcase-side { background: linear-gradient(180deg, #7c3aed 0%, #6d28d9 100%); }
  .sfp-showcase-letter { font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900; color: rgba(255,255,255,0.9); }
  .sfp-showcase-icon { font-size: 20px; }
  .sfp-showcase-content { padding: 20px 22px; }
  .sfp-showcase-name { font-family: 'Montserrat', sans-serif; font-size: 19px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
  .sfp-showcase-tag { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px; }
  .sfp-si-rayon   .sfp-showcase-tag { color: var(--accent); }
  .sfp-si-nylon   .sfp-showcase-tag { color: var(--blue); }
  .sfp-si-polyest .sfp-showcase-tag { color: var(--teal); }
  .sfp-si-acrylic .sfp-showcase-tag { color: var(--violet); }
  .sfp-showcase-facts { display: flex; flex-direction: column; gap: 4px; }
  .sfp-showcase-fact { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.6; padding-left: 16px; position: relative; }
  .sfp-showcase-fact::before { content: '→'; position: absolute; left: 0; font-weight: 700; color: var(--accent); font-size: 13px; }
  .sfp-si-nylon   .sfp-showcase-fact::before { color: var(--blue); }
  .sfp-si-polyest .sfp-showcase-fact::before { color: var(--teal); }
  .sfp-si-acrylic .sfp-showcase-fact::before { color: var(--violet); }

  /* ═══ S3: CHARACTERISTICS — tag cloud style ═══ */
  .sfp-char-intro { background: linear-gradient(135deg, #0f0008 0%, #2d001e 100%); border-radius: 10px; padding: 26px 28px; margin-bottom: 22px; }
  .sfp-char-intro-text { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.68); line-height: 1.78; }
  .sfp-char-intro-text strong { color: #f9a8d4; }
  .sfp-char-tags { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px; }
  .sfp-char-tag { display: flex; align-items: center; gap: 8px; background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 12px 18px; font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; color: var(--ink); }
  .sfp-char-tag-icon { font-size: 20px; }

  .sfp-warning-box { background: var(--red-lt); border-left: 4px solid var(--red); border-radius: 4px; padding: 20px 24px; margin-bottom: 24px; }
  .sfp-warning-box p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .sfp-warning-box strong { color: var(--red); font-weight: 700; }

  /* ═══ S4: PLASTICS — definition + types ═══ */
  .sfp-plastic-def { background: var(--amber-lt); border: 1.5px solid var(--amber); border-radius: 10px; padding: 24px 26px; margin-bottom: 28px; }
  .sfp-plastic-def-title { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; color: var(--amber); margin-bottom: 8px; }
  .sfp-plastic-def-text { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.75; }
  .sfp-plastic-def-text strong { color: var(--amber); font-weight: 700; }

  .sfp-plastic-types { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px; }
  @media (max-width: 580px) { .sfp-plastic-types { grid-template-columns: 1fr; } }
  .sfp-plastic-type-card { border-radius: 12px; overflow: hidden; border: 1.5px solid var(--rule); }
  .sfp-plastic-type-head { padding: 16px 20px; }
  .sfp-plastic-type-head.thermo { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); }
  .sfp-plastic-type-head.thermo-set { background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); }
  .sfp-plastic-type-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 4px; }
  .sfp-plastic-type-name { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 800; color: #fff; }
  .sfp-plastic-type-body { padding: 18px 20px; background: var(--white); }
  .sfp-plastic-type-desc { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.68; margin-bottom: 12px; }
  .sfp-plastic-sub { display: flex; flex-direction: column; gap: 8px; }
  .sfp-plastic-sub-item { background: var(--paper); border-radius: 6px; padding: 10px 14px; }
  .sfp-plastic-sub-name { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 3px; }
  .sfp-plastic-sub-desc { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.55; }

  /* ═══ S5: PLASTICS AS MATERIAL — 3 properties ═══ */
  .sfp-prop-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 24px; }
  @media (max-width: 580px) { .sfp-prop-row { grid-template-columns: 1fr; } }
  .sfp-prop-card { background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 20px 18px; text-align: center; border-top: 4px solid var(--accent); }
  .sfp-prop-card:nth-child(2) { border-top-color: var(--violet); }
  .sfp-prop-card:nth-child(3) { border-top-color: var(--teal); }
  .sfp-prop-icon { font-size: 28px; margin-bottom: 10px; display: block; }
  .sfp-prop-title { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 5px; }
  .sfp-prop-desc { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--muted); line-height: 1.6; }

  .sfp-teflon-note { background: var(--teal-lt); border-left: 4px solid var(--teal); border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .sfp-teflon-note p { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.72; }
  .sfp-teflon-note strong { color: var(--teal); font-weight: 700; }

  /* ═══ S6: BIODEGRADABLE vs NON ═══ */
  .sfp-bio-split { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-radius: 12px; overflow: hidden; border: 1.5px solid var(--rule); margin-bottom: 28px; }
  @media (max-width: 560px) { .sfp-bio-split { grid-template-columns: 1fr; } }
  .sfp-bio-col { padding: 26px 24px; }
  .sfp-bio-col.bio    { background: var(--green-lt); }
  .sfp-bio-col.nonbio { background: var(--red-lt); border-left: 2px solid var(--rule); }
  @media (max-width: 560px) { .sfp-bio-col.nonbio { border-left: none; border-top: 2px solid var(--rule); } }
  .sfp-bio-head { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
  .sfp-bio-icon { font-size: 28px; }
  .sfp-bio-title { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; }
  .bio    .sfp-bio-title { color: var(--green); }
  .nonbio .sfp-bio-title { color: var(--red); }
  .sfp-bio-text { font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.75; }
  .sfp-bio-text strong { font-weight: 700; }
  .bio    .sfp-bio-text strong { color: var(--green); }
  .nonbio .sfp-bio-text strong { color: var(--red); }
  .sfp-bio-example { margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.08); font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; }
  .bio    .sfp-bio-example { color: var(--green); }
  .nonbio .sfp-bio-example { color: var(--red); }

  /* ═══ PULL QUOTE ═══ */
  .sfp-pull-quote { border-left: 4px solid var(--accent); padding: 22px 30px; margin: 36px 0; background: var(--accent-lt); border-radius: 0 6px 6px 0; }
  .sfp-pull-quote p { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: var(--accent2); line-height: 1.7; font-style: italic; }

  /* ═══ FAQ ═══ */
  .sfp-faq-header { margin-bottom: 8px; }
  .sfp-faq-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
  .sfp-faq-title { font-family: 'Montserrat', sans-serif; font-size: clamp(24px, 4vw, 34px); font-weight: 800; color: var(--ink); margin-bottom: 28px; letter-spacing: -0.02em; }
  .sfp-faq-item { border: 1.5px solid var(--rule); border-radius: 8px; margin-bottom: 12px; overflow: hidden; background: var(--white); }
  .sfp-faq-item.open { border-color: var(--accent); }
  .sfp-faq-q { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; text-align: left; gap: 16px; }
  .sfp-faq-q-text { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); line-height: 1.4; }
  .sfp-faq-icon { color: var(--accent); font-size: 20px; flex-shrink: 0; }
  .sfp-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
  .sfp-faq-ans.visible { max-height: 700px; }
  .sfp-faq-ans-inner { padding: 0 24px 22px; font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.82; border-top: 1px solid var(--rule); padding-top: 18px; }
  .sfp-faq-ans-inner strong { color: var(--accent2); font-weight: 600; }
`;

const faqs = [
  { q: "What are synthetic fibres? How are they different from natural fibres?", a: "Fibres are of two types: Natural fibres are obtained directly from plants or animals — e.g., cotton (from plant), silk (from silkworm), wool (from sheep). Synthetic fibres are man-made fibres produced by humans through chemical synthesis using raw materials from petroleum (petrochemicals). Examples: Rayon, Nylon, Polyester, Acrylic. The key difference is the source: natural fibres come from nature while synthetic fibres are manufactured in factories." },
  { q: "What is Rayon? Why is it called artificial silk?", a: "Rayon is a synthetic fibre obtained by the chemical treatment of wood pulp (cellulose). It closely resembles silk in appearance and feel — it has a silky sheen and smooth texture. Hence, it is commonly called artificial silk. Rayon can be mixed with cotton to make bed sheets or blended with wool to make carpets. Unlike fully synthetic fibres, rayon is made from a natural raw material (wood pulp) but processed chemically." },
  { q: "Write any four properties of Nylon.", a: "Nylon is the first fully synthetic fibre prepared entirely without any natural raw materials. Properties: (1) It is prepared from coal, water, and air — completely man-made. (2) It is strong, elastic, lustrous, light, and easy to wash. (3) Its thread is stronger than a steel wire of the same thickness. (4) It is commonly used for making socks, ropes, tents, toothbrushes, parachutes, and seat belts." },
  { q: "What is Polyester? What are its uses?", a: "Polyester is a synthetic fibre made up of repeating units of chemical compounds called esters (hence the name poly-ester). It is wrinkle-free, easy to wash, and dries quickly. Polyester is commonly used to make dress material, shirts, and other clothing. PET (Polyethylene terephthalate) is a well-known type of polyester used for making bottles, utensils, films, and wires." },
  { q: "What is Acrylic? Why is it used as a substitute for wool?", a: "Acrylic is a synthetic fibre that closely resembles natural wool in appearance and feel. It is affordable, durable, and available in a wide range of colours, unlike natural wool which can be expensive. Acrylic is commonly used to make shawls, sweaters, blankets, and other woollen-type garments. Since it is cheaper than natural wool and easily washable, it is a popular wool substitute." },
  { q: "What are petrochemicals? What are the general characteristics of synthetic fibres?", a: "Synthetic fibres are manufactured by processing raw materials of petroleum origin in various chemical ways. These raw materials are called petrochemicals. Characteristics of synthetic fibres: (1) Durable — they last longer than natural fibres. (2) Dry faster. (3) Not costly — economical to produce. (4) Easy to maintain — wrinkle-resistant and washable. (5) Stronger — nylon thread is stronger than steel wire. (6) Do not shrink when washed." },
  { q: "Why should we not wear synthetic clothes while cooking or near fire?", a: "Synthetic fibres melt on heating and catch fire immediately. When a synthetic fabric burns, it melts and sticks to the body, causing severe burns that are much more dangerous than a simple cloth fire. Unlike natural fibres such as cotton which can be quickly removed, melted synthetic fabric sticks to the skin and causes lasting damage. Therefore, synthetic clothes should never be worn in the kitchen or near open fire." },
  { q: "What is plastic? Explain the two types of plastics.", a: "Plastic is a polymer that can be moulded into different shapes. The word 'plastic' comes from the Greek word 'plastikos' meaning 'that can be moulded'. Plastics are of two types: (1) Thermoplastics — plastics that get deformed easily on heating and can be bent easily. They can be reshaped on reheating. Examples: Polythene (plastic bags, ethene monomer), PVC/Polyvinyl chloride (construction pipes, bottles, bank cards). (2) Thermosetting plastics — plastics that when moulded once, cannot be softened again by heating. Examples: Bakelite (handles of utensils, electrical switches — poor conductor of heat/electricity), Melamine (floor tiles, fire-resistant fabrics, kitchenware — fire resistant and heat-tolerant)." },
  { q: "What are the characteristics of plastics that make them a material of choice?", a: "Plastics are widely preferred because: (1) Non-reactive and non-corrosive — plastic does not react with air, water, or most chemicals. (2) Light, strong, and durable — plastics are lightweight yet structurally strong. (3) Poor conductors of heat and electricity — making them suitable for handles, wiring insulation, etc. (4) Easily mouldable — can be shaped into any form. Special plastics: Teflon is used as a non-stick coating on cookware. Melamine is used to make flame-resistant coats for firefighters." },
  { q: "What are biodegradable and non-biodegradable materials? Give examples.", a: "Biodegradable Materials: Materials that get decomposed through natural processes (such as the action of bacteria and other microorganisms) are called biodegradable materials. Examples: Cotton, jute bags, food waste, paper. These decompose naturally and do not pollute the environment. Non-biodegradable Materials: Materials that are not easily decomposed by natural processes are called non-biodegradable materials. Examples: Plastic, synthetic fibres. Plastics are made of long chain polymers (monomers linked together) that microorganisms cannot break down easily, causing serious environmental pollution." },
];

export default function SyntheticFibresAndPlastics() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="sfp-root">
        {/* HERO */}
        <div className="sfp-hero">
          <div className="sfp-hero-weave" />
          <div className="sfp-hero-ring" />
          <div className="sfp-glow-a" />
          <div className="sfp-glow-b" />
          <div className="sfp-hero-bg-num">3</div>
          <div className="sfp-hero-inner">
            <div className="sfp-overline">Class 8 Science — Chapter 3</div>
            <h1 className="sfp-hero-title">Synthetic <em>Fibres</em><br />and <span className="em2">Plastics</span></h1>
            <div className="sfp-hero-bar">
              <div className="sfp-hero-bar-item"><div className="sfp-bar-label">Chapter</div><div className="sfp-bar-value">03 — Materials Science</div></div>
              <div className="sfp-hero-bar-item"><div className="sfp-bar-label">Topics</div><div className="sfp-bar-value">Fibres · Rayon · Nylon · Plastics · Environment</div></div>
              <div className="sfp-hero-bar-item"><div className="sfp-bar-label">Board</div><div className="sfp-bar-value">NCERT / CBSE</div></div>
            </div>
          </div>
        </div>

        <div className="sfp-body">
          {/* Intro */}
          <div className="sfp-intro-card">
            <p>From the clothes we wear to the bottles we drink from — <strong>synthetic fibres and plastics</strong> are everywhere. These man-made materials, born from chemical engineering, have transformed everyday life.</p>
            <p>This chapter explores how synthetic fibres like Rayon, Nylon, Polyester, and Acrylic are made and used — and dives into the world of plastics, their types, properties, and their growing threat to our <strong>environment</strong>.</p>
          </div>

          {/* S1: FIBRES */}
          <div className="sfp-sec-head">
            <div className="sfp-sec-num">1</div>
            <div className="sfp-sec-title-wrap">
              <div className="sfp-sec-kicker">Introduction</div>
              <h2 className="sfp-sec-title">What Are <span>Synthetic Fibres</span>?</h2>
            </div>
          </div>
          <p className="sfp-body-text">Fabrics are made by weaving fibres (or thread) obtained from natural or artificial sources. Fibres are classified into two categories based on their origin:</p>
          <div className="sfp-fibre-split">
            <div className="sfp-fibre-card natural">
              <span className="sfp-fibre-badge">From Nature</span>
              <span className="sfp-fibre-icon">🌿</span>
              <div className="sfp-fibre-name">Natural Fibres</div>
              <div className="sfp-fibre-desc">Fibres obtained directly from <strong>plants or animals</strong>. Examples: Cotton (plant), Silk (silkworm), Wool (sheep), Jute (jute plant stem). These decompose naturally and are biodegradable.</div>
            </div>
            <div className="sfp-fibre-card synthetic">
              <span className="sfp-fibre-badge">Man-Made</span>
              <span className="sfp-fibre-icon">🏭</span>
              <div className="sfp-fibre-name">Synthetic Fibres</div>
              <div className="sfp-fibre-desc">Fibres made by humans through <strong>chemical synthesis</strong> using petrochemicals. Also called man-made fibres. Examples: Rayon, Nylon, Polyester, Acrylic. These are non-biodegradable.</div>
            </div>
          </div>

          {/* S2: TYPES */}
          <div className="sfp-divider"><div className="sfp-divider-mark" /></div>
          <div className="sfp-sec-head">
            <div className="sfp-sec-num">2</div>
            <div className="sfp-sec-title-wrap">
              <div className="sfp-sec-kicker">The Four Main Types</div>
              <h2 className="sfp-sec-title">Types of <span>Synthetic Fibres</span></h2>
            </div>
          </div>
          <div className="sfp-fibre-showcase">
            <div className="sfp-showcase-item sfp-si-rayon">
              <div className="sfp-showcase-side"><div className="sfp-showcase-letter">R</div><div className="sfp-showcase-icon">🪡</div></div>
              <div className="sfp-showcase-content">
                <div className="sfp-showcase-name">Rayon</div>
                <div className="sfp-showcase-tag">Artificial Silk</div>
                <div className="sfp-showcase-facts">
                  <div className="sfp-showcase-fact">Obtained by chemical treatment of wood pulp (cellulose)</div>
                  <div className="sfp-showcase-fact">Resembles silk — hence called artificial silk</div>
                  <div className="sfp-showcase-fact">Mixed with cotton for bed sheets or with wool for carpets</div>
                </div>
              </div>
            </div>
            <div className="sfp-showcase-item sfp-si-nylon">
              <div className="sfp-showcase-side"><div className="sfp-showcase-letter">N</div><div className="sfp-showcase-icon">💪</div></div>
              <div className="sfp-showcase-content">
                <div className="sfp-showcase-name">Nylon</div>
                <div className="sfp-showcase-tag">First Fully Synthetic Fibre</div>
                <div className="sfp-showcase-facts">
                  <div className="sfp-showcase-fact">First fully synthetic fibre — no natural raw material used</div>
                  <div className="sfp-showcase-fact">Prepared from coal, water, and air; stronger than a steel wire</div>
                  <div className="sfp-showcase-fact">Strong, elastic, lustrous, light, easy to wash</div>
                  <div className="sfp-showcase-fact">Used in socks, ropes, tents, toothbrushes, parachutes</div>
                </div>
              </div>
            </div>
            <div className="sfp-showcase-item sfp-si-polyest">
              <div className="sfp-showcase-side"><div className="sfp-showcase-letter">P</div><div className="sfp-showcase-icon">👔</div></div>
              <div className="sfp-showcase-content">
                <div className="sfp-showcase-name">Polyester</div>
                <div className="sfp-showcase-tag">Repeating Ester Units</div>
                <div className="sfp-showcase-facts">
                  <div className="sfp-showcase-fact">Made of repeating units of chemical compounds called esters</div>
                  <div className="sfp-showcase-fact">Wrinkle-free and easy to wash</div>
                  <div className="sfp-showcase-fact">Used to make dress material, shirts; PET used for bottles</div>
                </div>
              </div>
            </div>
            <div className="sfp-showcase-item sfp-si-acrylic">
              <div className="sfp-showcase-side"><div className="sfp-showcase-letter">A</div><div className="sfp-showcase-icon">🧶</div></div>
              <div className="sfp-showcase-content">
                <div className="sfp-showcase-name">Acrylic</div>
                <div className="sfp-showcase-tag">Artificial Wool</div>
                <div className="sfp-showcase-facts">
                  <div className="sfp-showcase-fact">Synthetic fibre that resembles wool in look and feel</div>
                  <div className="sfp-showcase-fact">Affordable, durable, available in many colours</div>
                  <div className="sfp-showcase-fact">Used to make shawls, sweaters, blankets</div>
                </div>
              </div>
            </div>
          </div>

          {/* S3: CHARACTERISTICS */}
          <div className="sfp-divider"><div className="sfp-divider-mark" /></div>
          <div className="sfp-sec-head">
            <div className="sfp-sec-num">3</div>
            <div className="sfp-sec-title-wrap">
              <div className="sfp-sec-kicker">Properties</div>
              <h2 className="sfp-sec-title">Characteristics of <span>Synthetic Fibres</span></h2>
            </div>
          </div>
          <div className="sfp-char-intro">
            <div className="sfp-char-intro-text">All synthetic fibres are manufactured by processing raw materials of petroleum origin — called <strong>Petrochemicals</strong> — in a number of chemical ways. This gives them a unique set of shared properties:</div>
          </div>
          <div className="sfp-char-tags">
            {[["💪","Durable"],["💧","Dry Faster"],["💰","Not Costly"],["🔧","Easy to Maintain"],["🏋️","Stronger"],["🚫","Do Not Shrink"]].map(([icon,label]) => (
              <div className="sfp-char-tag" key={label}><span className="sfp-char-tag-icon">{icon}</span>{label}</div>
            ))}
          </div>
          <div className="sfp-warning-box">
            <p>⚠️ <strong>Important Warning:</strong> Synthetic fibres melt on heating and catch fire immediately. The melted fabric sticks to the body causing severe burns. <strong>Do not wear synthetic clothes while cooking or working near fire.</strong></p>
          </div>

          {/* S4: PLASTICS */}
          <div className="sfp-divider"><div className="sfp-divider-mark" /></div>
          <div className="sfp-sec-head">
            <div className="sfp-sec-num">4</div>
            <div className="sfp-sec-title-wrap">
              <div className="sfp-sec-kicker">Polymers</div>
              <h2 className="sfp-sec-title">Plastics — Types &amp; <span>Properties</span></h2>
            </div>
          </div>
          <div className="sfp-plastic-def">
            <div className="sfp-plastic-def-title">What is Plastic?</div>
            <div className="sfp-plastic-def-text">Plastic is a <strong>polymer</strong> that can be moulded into different shapes. The word 'plastic' comes from the Greek word <strong>'plastikos'</strong> meaning 'that can be moulded or shaped'. Plastics can have a linear or cross-linked arrangement of polymer chains. Polythene contains ethylene as its repeating monomer unit.</div>
          </div>
          <div className="sfp-plastic-types">
            <div className="sfp-plastic-type-card">
              <div className="sfp-plastic-type-head thermo">
                <div className="sfp-plastic-type-label">Type A</div>
                <div className="sfp-plastic-type-name">Thermoplastics</div>
              </div>
              <div className="sfp-plastic-type-body">
                <div className="sfp-plastic-type-desc">Get deformed easily on heating and can be bent easily. Can be reshaped by reheating — recyclable.</div>
                <div className="sfp-plastic-sub">
                  <div className="sfp-plastic-sub-item">
                    <div className="sfp-plastic-sub-name">Polythene</div>
                    <div className="sfp-plastic-sub-desc">Contains ethene as monomer. Used for making plastic bags.</div>
                  </div>
                  <div className="sfp-plastic-sub-item">
                    <div className="sfp-plastic-sub-name">PVC (Polyvinyl chloride)</div>
                    <div className="sfp-plastic-sub-desc">Strong, lightweight. Used in construction pipes, bottles, bank cards.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sfp-plastic-type-card">
              <div className="sfp-plastic-type-head thermo-set">
                <div className="sfp-plastic-type-label">Type B</div>
                <div className="sfp-plastic-type-name">Thermosetting Plastics</div>
              </div>
              <div className="sfp-plastic-type-body">
                <div className="sfp-plastic-type-desc">Once moulded, cannot be softened again by heating. Permanently set — not recyclable.</div>
                <div className="sfp-plastic-sub">
                  <div className="sfp-plastic-sub-item">
                    <div className="sfp-plastic-sub-name">Bakelite</div>
                    <div className="sfp-plastic-sub-desc">Poor conductor of heat and electricity. Used for utensil handles, electrical switches.</div>
                  </div>
                  <div className="sfp-plastic-sub-item">
                    <div className="sfp-plastic-sub-name">Melamine</div>
                    <div className="sfp-plastic-sub-desc">Fire resistant, tolerates heat well. Used for floor tiles, fire-resistant fabrics, kitchenware.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* S5: PLASTICS AS MATERIAL */}
          <div className="sfp-divider"><div className="sfp-divider-mark" /></div>
          <div className="sfp-sec-head">
            <div className="sfp-sec-num">5</div>
            <div className="sfp-sec-title-wrap">
              <div className="sfp-sec-kicker">Why We Use Them</div>
              <h2 className="sfp-sec-title">Plastics as <span>Material of Choice</span></h2>
            </div>
          </div>
          <div className="sfp-prop-row">
            <div className="sfp-prop-card"><span className="sfp-prop-icon">🛡️</span><div className="sfp-prop-title">Non-reactive &amp; Non-corrosive</div><div className="sfp-prop-desc">Does not react with air, water, or most chemicals — safe for storing food and liquids.</div></div>
            <div className="sfp-prop-card"><span className="sfp-prop-icon">⚖️</span><div className="sfp-prop-title">Light, Strong &amp; Durable</div><div className="sfp-prop-desc">Lightweight yet structurally strong and long-lasting — ideal for packaging and construction.</div></div>
            <div className="sfp-prop-card"><span className="sfp-prop-icon">⚡</span><div className="sfp-prop-title">Poor Conductors</div><div className="sfp-prop-desc">Bad conductors of heat and electricity — making them safe for electrical insulation and utensil handles.</div></div>
          </div>
          <div className="sfp-teflon-note">
            <p>🍳 <strong>Teflon</strong> — a special plastic — is used as a non-stick coating on cookware. <strong>Melamine</strong> plastic is used to make flame-resistant coats for firefighters. These special-purpose plastics demonstrate how material science saves lives.</p>
          </div>

          {/* S6: BIODEGRADABLE */}
          <div className="sfp-divider"><div className="sfp-divider-mark" /></div>
          <div className="sfp-sec-head">
            <div className="sfp-sec-num">6</div>
            <div className="sfp-sec-title-wrap">
              <div className="sfp-sec-kicker">Environmental Impact</div>
              <h2 className="sfp-sec-title">Plastics &amp; the <span>Environment</span></h2>
            </div>
          </div>
          <p className="sfp-body-text">There are two kinds of materials in the environment based on how they decompose:</p>
          <div className="sfp-bio-split">
            <div className="sfp-bio-col bio">
              <div className="sfp-bio-head"><span className="sfp-bio-icon">🌱</span><div className="sfp-bio-title">Biodegradable</div></div>
              <div className="sfp-bio-text">Materials that get decomposed through <strong>natural processes</strong> — such as the action of bacteria and other microorganisms — are called biodegradable materials. These break down harmlessly in the environment over time.</div>
              <div className="sfp-bio-example">Examples: Cotton, Jute bags, Food waste, Paper, Wood</div>
            </div>
            <div className="sfp-bio-col nonbio">
              <div className="sfp-bio-head"><span className="sfp-bio-icon">☠️</span><div className="sfp-bio-title">Non-biodegradable</div></div>
              <div className="sfp-bio-text">Materials that are <strong>not easily decomposed</strong> by natural processes are non-biodegradable. Plastics are made of long polymer chains (linked monomers) that microorganisms cannot break down, causing lasting environmental pollution.</div>
              <div className="sfp-bio-example">Examples: Plastics, Synthetic fibres, Glass, Metal</div>
            </div>
          </div>

          <div className="sfp-pull-quote">
            <p>"Synthetic fibres and plastics revolutionised modern life — but their greatest weakness is also their greatest threat: they are built to last forever, and the Earth is paying the price."</p>
          </div>

          {/* FAQ */}
          <div className="sfp-divider"><div className="sfp-divider-mark" /></div>
          <div className="sfp-faq-header"><span className="sfp-faq-kicker">Exam Preparation</span></div>
          <h2 className="sfp-faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div className={`sfp-faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button className="sfp-faq-q" onClick={() => toggle(i)}>
                <span className="sfp-faq-q-text">Q{i+1}. {faq.q}</span>
                <span className="sfp-faq-icon">{openIndex === i ? "▴" : "▾"}</span>
              </button>
              {openIndex === i && (<div className="sfp-faq-ans visible"><div className="sfp-faq-ans-inner">{faq.a}</div></div>)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
