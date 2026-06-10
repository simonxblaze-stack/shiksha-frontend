import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #08001a;
    --ink2:       #12002e;
    --muted:      #4a3068;
    --paper:      #f7f4ff;
    --paper2:     #ede8ff;
    --accent:     #7c3aed;
    --accent2:    #6d28d9;
    --accent-lt:  #ede9fe;
    --violet:     #5b21b6;
    --pink:       #be185d;
    --pink-lt:    #fce7f3;
    --sky:        #0284c7;
    --sky-lt:     #e0f2fe;
    --teal:       #0f766e;
    --teal-lt:    #ccfbf1;
    --amber:      #b45309;
    --amber-lt:   #fef3c7;
    --red:        #be123c;
    --red-lt:     #ffe4e6;
    --green:      #166534;
    --green-lt:   #dcfce7;
    --rule:       #c4b5fd;
    --white:      #ffffff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .snd-root { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }

  /* ═══ HERO ═══ */
  .snd-hero {
    background: linear-gradient(135deg, #050010 0%, #0e0020 50%, #180035 100%);
    min-height: 88vh; display: flex; align-items: flex-end;
    position: relative; overflow: hidden; padding: 0 0 64px;
  }
  @media (max-width: 700px) { .snd-hero { min-height: auto; align-items: flex-start; padding: 72px 0 48px; } }
  .snd-hero::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #7c3aed 0%, #5b21b6 28%, #be185d 55%, #0f766e 80%, #0284c7 100%);
  }
  /* Sound wave bg */
  .snd-hero-waves {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      radial-gradient(ellipse 300px 60px at 50% 40%, rgba(124,58,237,0.07) 0%, transparent 100%),
      radial-gradient(ellipse 500px 80px at 50% 55%, rgba(91,33,182,0.05) 0%, transparent 100%),
      radial-gradient(ellipse 700px 100px at 50% 70%, rgba(124,58,237,0.04) 0%, transparent 100%);
  }
  .snd-hero-ring { position: absolute; top: 50%; right: 5%; transform: translateY(-50%); width: clamp(140px,22vw,290px); height: clamp(140px,22vw,290px); border-radius: 50%; border: 1.5px solid rgba(124,58,237,0.18); pointer-events: none; }
  .snd-hero-ring::before { content: ''; position: absolute; inset: 18%; border-radius: 50%; border: 1px dashed rgba(190,24,93,0.14); }
  .snd-hero-ring::after  { content: ''; position: absolute; inset: 40%; border-radius: 50%; background: rgba(124,58,237,0.08); }
  .snd-glow-a { position: absolute; top: 14%; left: 6%; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 68%); pointer-events: none; }
  .snd-glow-b { position: absolute; bottom: 8%; right: 22%; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(190,24,93,0.10) 0%, transparent 70%); pointer-events: none; }
  .snd-hero-bg-num { position: absolute; bottom: -80px; right: -20px; font-family: 'Montserrat', sans-serif; font-size: clamp(200px,34vw,480px); font-weight: 900; line-height: 1; color: rgba(255,255,255,0.018); letter-spacing: -0.04em; user-select: none; pointer-events: none; }
  .snd-hero-inner { max-width: 900px; width: 100%; margin: 0 auto; padding: 0 32px; position: relative; z-index: 1; }
  .snd-overline { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #c4b5fd; margin-bottom: 24px; display: flex; align-items: center; gap: 14px; }
  .snd-overline::before, .snd-overline::after { content: ''; flex: 0 0 40px; height: 1px; background: #c4b5fd; }
  .snd-hero-title { font-family: 'Montserrat', sans-serif; font-size: clamp(52px,10vw,100px); font-weight: 900; color: #fff; line-height: 0.92; letter-spacing: -0.04em; margin-bottom: 32px; }
  .snd-hero-title em   { font-style: normal; color: #c4b5fd; }
  .snd-hero-title .em2 { color: #f9a8d4; }
  .snd-hero-bar { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; margin-top: 8px; }
  .snd-hero-bar-item { flex: 1 1 150px; padding: 0 24px 0 0; border-right: 1px solid rgba(255,255,255,0.08); margin-right: 24px; }
  .snd-hero-bar-item:last-child { border-right: none; margin-right: 0; }
  .snd-bar-label { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 5px; }
  .snd-bar-value { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.72); }

  /* ═══ BODY ═══ */
  .snd-body { max-width: 860px; margin: 0 auto; padding: 72px 32px 96px; }

  /* ═══ INTRO CARD ═══ */
  .snd-intro-card { background: linear-gradient(135deg, #050010 0%, #180035 100%); border-left: 5px solid #7c3aed; border-radius: 4px; padding: 38px 42px; margin-bottom: 64px; position: relative; overflow: hidden; }
  .snd-intro-card::after { content: '🎵'; position: absolute; right: 28px; top: 50%; transform: translateY(-50%); font-size: 96px; opacity: 0.09; }
  .snd-intro-card p { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 500; color: rgba(255,255,255,0.86); line-height: 1.8; margin: 0 0 14px; }
  .snd-intro-card p:last-child { margin: 0; }
  .snd-intro-card strong { color: #c4b5fd; }

  /* ═══ DIVIDER ═══ */
  .snd-divider { margin: 60px 0; display: flex; align-items: center; gap: 16px; }
  .snd-divider::before, .snd-divider::after { content: ''; flex: 1; height: 1px; background: var(--rule); }
  .snd-divider-mark { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

  /* ═══ SECTION HEADER ═══ */
  .snd-sec-head { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 34px; border-bottom: 2px solid var(--rule); padding-bottom: 20px; }
  .snd-sec-num { font-family: 'Montserrat', sans-serif; font-size: 58px; font-weight: 900; color: var(--rule); line-height: 1; flex-shrink: 0; }
  .snd-sec-title-wrap { padding-top: 8px; }
  .snd-sec-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .snd-sec-title { font-family: 'Montserrat', sans-serif; font-size: clamp(22px,3.5vw,32px); font-weight: 800; color: var(--ink); line-height: 1.15; letter-spacing: -0.02em; }
  .snd-sec-title span { color: var(--accent); }

  /* ═══ BODY TEXT ═══ */
  .snd-body-text { font-family: 'Inter', sans-serif; font-size: 17px; color: var(--ink2); line-height: 1.85; margin-bottom: 28px; }
  .snd-body-text strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S1: VIBRATION DEF ═══ */
  .snd-def-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
  @media (max-width: 560px) { .snd-def-pair { grid-template-columns: 1fr; } }
  .snd-def-card { border-radius: 10px; padding: 22px 20px; background: var(--white); border: 1.5px solid var(--rule); border-top: 4px solid var(--accent); }
  .snd-def-card:nth-child(2) { border-top-color: var(--pink); }
  .snd-def-icon { font-size: 28px; margin-bottom: 10px; display: block; }
  .snd-def-term { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
  .snd-def-text { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.68; }
  .snd-def-text strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S1: SVG — SOUND WAVE ═══ */
  .snd-svg-wrap { background: var(--white); border: 1.5px solid var(--rule); border-radius: 12px; padding: 24px; margin-bottom: 28px; overflow-x: auto; }
  .snd-svg-title { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 16px; text-align: center; }

  /* ═══ S2: HOW HUMANS PRODUCE SOUND ═══ */
  .snd-larynx-card { background: linear-gradient(135deg, #050010 0%, #180035 100%); border-radius: 12px; padding: 26px 28px; margin-bottom: 28px; border: 1.5px solid rgba(124,58,237,0.25); display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap; }
  .snd-larynx-icon { font-size: 48px; flex-shrink: 0; }
  .snd-larynx-text {}
  .snd-larynx-title { font-family: 'Montserrat', sans-serif; font-size: 19px; font-weight: 800; color: #c4b5fd; margin-bottom: 8px; }
  .snd-larynx-body { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.78; }
  .snd-larynx-body strong { color: #ddd6fe; }

  /* ═══ S3: PROPAGATION ═══ */
  .snd-medium-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 24px; }
  @media (max-width: 620px) { .snd-medium-cards { grid-template-columns: 1fr; } }
  .snd-medium-card { border-radius: 8px; padding: 20px 16px; text-align: center; }
  .snd-medium-card.solid  { background: var(--teal-lt);  border: 1.5px solid var(--teal);  border-top: 4px solid var(--teal);  }
  .snd-medium-card.liquid { background: var(--sky-lt);   border: 1.5px solid var(--sky);   border-top: 4px solid var(--sky);   }
  .snd-medium-card.gas    { background: var(--accent-lt); border: 1.5px solid var(--accent); border-top: 4px solid var(--accent); }
  .snd-medium-icon { font-size: 26px; margin-bottom: 8px; display: block; }
  .snd-medium-name { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; margin-bottom: 5px; }
  .solid  .snd-medium-name { color: var(--teal); }
  .liquid .snd-medium-name { color: var(--sky); }
  .gas    .snd-medium-name { color: var(--accent); }
  .snd-medium-eg { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.5; }

  .snd-vacuum-note { background: var(--ink2); border-left: 4px solid #c4b5fd; border-radius: 4px; padding: 18px 22px; margin-bottom: 24px; }
  .snd-vacuum-note p { font-family: 'Inter', sans-serif; font-size: 16px; color: rgba(255,255,255,0.70); line-height: 1.72; }
  .snd-vacuum-note strong { color: #ddd6fe; }

  /* ═══ S4: HOW EARS WORK — steps ═══ */
  .snd-ear-steps { display: flex; flex-direction: column; gap: 0; margin-bottom: 28px; position: relative; }
  .snd-ear-steps::before { content: ''; position: absolute; left: 23px; top: 0; bottom: 0; width: 2px; background: var(--rule); }
  .snd-ear-step { display: flex; gap: 16px; align-items: flex-start; padding-bottom: 20px; position: relative; }
  .snd-ear-dot { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; z-index: 1; border: 3px solid var(--rule); }
  .snd-ear-step:nth-child(1) .snd-ear-dot { background: #3b0764; }
  .snd-ear-step:nth-child(2) .snd-ear-dot { background: #4c1d95; }
  .snd-ear-step:nth-child(3) .snd-ear-dot { background: #5b21b6; }
  .snd-ear-step:nth-child(4) .snd-ear-dot { background: #6d28d9; }
  .snd-ear-content { flex: 1; background: var(--white); border: 1.5px solid var(--rule); border-radius: 8px; padding: 14px 18px; margin-top: 4px; }
  .snd-ear-title { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
  .snd-ear-desc { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--muted); line-height: 1.6; }

  /* ═══ S5: WAVE PROPERTIES — 3 dark cards ═══ */
  .snd-props-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
  @media (max-width: 640px) { .snd-props-grid { grid-template-columns: 1fr; } }
  .snd-prop-card { background: linear-gradient(160deg, #050010 0%, #180035 100%); border-radius: 10px; padding: 22px 18px; border: 1.5px solid rgba(124,58,237,0.22); }
  .snd-prop-icon { font-size: 28px; margin-bottom: 10px; display: block; }
  .snd-prop-name { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 800; color: #c4b5fd; margin-bottom: 4px; }
  .snd-prop-formula { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 700; color: #a78bfa; background: rgba(124,58,237,0.15); padding: 4px 10px; border-radius: 6px; display: inline-block; margin-bottom: 8px; }
  .snd-prop-unit { font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 8px; }
  .snd-prop-desc { font-family: 'Inter', sans-serif; font-size: 14px; color: rgba(255,255,255,0.58); line-height: 1.65; }
  .snd-prop-desc strong { color: rgba(255,255,255,0.82); }

  /* ═══ S5: FREQUENCY FORMULA ═══ */
  .snd-freq-formula { background: var(--white); border: 1.5px solid var(--rule); border-radius: 10px; padding: 22px 26px; margin-bottom: 24px; display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
  .snd-freq-frac { display: flex; flex-direction: column; align-items: center; gap: 2px; flex-shrink: 0; }
  .snd-freq-lhs { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; color: var(--accent); margin-right: 12px; }
  .snd-freq-num { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 700; color: var(--accent2); }
  .snd-freq-line { width: 180px; height: 2px; background: var(--accent); }
  .snd-freq-den { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 700; color: var(--accent2); }
  .snd-freq-eq { display: flex; align-items: center; gap: 10px; }
  .snd-freq-note { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--muted); line-height: 1.65; flex: 1; }
  .snd-freq-note strong { color: var(--accent2); font-weight: 600; }

  /* ═══ S6: AUDIBLE RANGE SVG ═══ */
  /* ═══ S6: SOUND TYPES CARDS ═══ */
  .snd-sound-types { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 24px; }
  @media (max-width: 620px) { .snd-sound-types { grid-template-columns: 1fr; } }
  .snd-st-card { border-radius: 10px; padding: 20px 18px; text-align: center; }
  .snd-st-card.infra  { background: var(--teal-lt);  border: 2px solid var(--teal);  }
  .snd-st-card.audible{ background: var(--green-lt); border: 2px solid var(--green); }
  .snd-st-card.ultra  { background: var(--sky-lt);   border: 2px solid var(--sky);   }
  .snd-st-icon { font-size: 26px; margin-bottom: 8px; display: block; }
  .snd-st-name { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 800; margin-bottom: 5px; }
  .infra   .snd-st-name { color: var(--teal); }
  .audible .snd-st-name { color: var(--green); }
  .ultra   .snd-st-name { color: var(--sky); }
  .snd-st-range { font-family: 'Montserrat', sans-serif; font-size: 15px; font-weight: 900; margin-bottom: 6px; }
  .infra   .snd-st-range { color: var(--teal); }
  .audible .snd-st-range { color: var(--green); }
  .ultra   .snd-st-range { color: var(--sky); }
  .snd-st-eg { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--muted); line-height: 1.55; }

  /* ═══ S7: NOISE POLLUTION ═══ */
  .snd-np-split { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 24px; }
  @media (max-width: 580px) { .snd-np-split { grid-template-columns: 1fr; } }
  .snd-np-card { border-radius: 10px; overflow: hidden; border: 1.5px solid var(--rule); background: var(--white); }
  .snd-np-head { padding: 14px 18px; display: flex; align-items: center; gap: 10px; }
  .snd-np-head.sources  { background: var(--red-lt); }
  .snd-np-head.effects  { background: var(--amber-lt); }
  .snd-np-head.measures { background: var(--green-lt); }
  .snd-np-head-title { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 800; }
  .sources  .snd-np-head-title { color: var(--red); }
  .effects  .snd-np-head-title { color: var(--amber); }
  .measures .snd-np-head-title { color: var(--green); }
  .snd-np-body { padding: 16px 18px; }
  .snd-np-list { display: flex; flex-direction: column; gap: 7px; }
  .snd-np-item { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); padding-left: 16px; position: relative; line-height: 1.6; }
  .sources  .snd-np-item::before { content: '📢'; position: absolute; left: 0; font-size: 11px; top: 2px; }
  .effects  .snd-np-item::before { content: '⚠️'; position: absolute; left: 0; font-size: 11px; top: 2px; }
  .measures .snd-np-item::before { content: '✅'; position: absolute; left: 0; font-size: 11px; top: 2px; }

  .snd-noise-music { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
  @media (max-width: 560px) { .snd-noise-music { grid-template-columns: 1fr; } }
  .snd-nm-card { border-radius: 8px; padding: 20px 18px; }
  .snd-nm-card.noise  { background: var(--red-lt);   border: 1.5px solid var(--red);   }
  .snd-nm-card.music  { background: var(--accent-lt); border: 1.5px solid var(--accent); }
  .snd-nm-icon { font-size: 26px; margin-bottom: 8px; display: block; }
  .snd-nm-name { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 6px; }
  .noise .snd-nm-name { color: var(--red); }
  .music .snd-nm-name { color: var(--accent); }
  .snd-nm-desc { font-family: 'Inter', sans-serif; font-size: 15px; color: var(--ink2); line-height: 1.68; }

  /* ═══ PULL QUOTE ═══ */
  .snd-pull-quote { border-left: 4px solid var(--accent); padding: 22px 30px; margin: 36px 0; background: var(--accent-lt); border-radius: 0 6px 6px 0; }
  .snd-pull-quote p { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: var(--accent2); line-height: 1.7; font-style: italic; }

  /* ═══ FAQ ═══ */
  .snd-faq-header { margin-bottom: 8px; }
  .snd-faq-kicker { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
  .snd-faq-title { font-family: 'Montserrat', sans-serif; font-size: clamp(24px,4vw,34px); font-weight: 800; color: var(--ink); margin-bottom: 28px; letter-spacing: -0.02em; }
  .snd-faq-item { border: 1.5px solid var(--rule); border-radius: 8px; margin-bottom: 12px; overflow: hidden; background: var(--white); }
  .snd-faq-item.open { border-color: var(--accent); }
  .snd-faq-q { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; text-align: left; gap: 16px; }
  .snd-faq-q-text { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); line-height: 1.4; }
  .snd-faq-icon { color: var(--accent); font-size: 20px; flex-shrink: 0; }
  .snd-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
  .snd-faq-ans.visible { max-height: 700px; }
  .snd-faq-ans-inner { padding: 0 24px 22px; font-family: 'Inter', sans-serif; font-size: 16px; color: var(--ink2); line-height: 1.82; border-top: 1px solid var(--rule); padding-top: 18px; }
  .snd-faq-ans-inner strong { color: var(--accent2); font-weight: 600; }
`;

const faqs = [
  { q: "How is sound produced? What is a vibration?", a: "Sound is produced due to vibrations in a body. When a body vibrates, it produces sound in the form of waves. A vibration is the back-and-forth movement of an object. One complete vibration occurs when the vibrating object goes from one extreme position to another extreme position and returns back to its original position. Example: When a drum player strikes the membrane, it vibrates. This vibration forces the whole body of the instrument to vibrate, producing the sound we hear." },
  { q: "How do humans produce sound? What is the role of the larynx?", a: "Humans produce sound using the larynx (voice box). The larynx is located at the upper end of the windpipe. Inside the larynx are two vocal cords which are stretched across the voice box, leaving a narrow slit between them for the passage of air. When we speak, air passes through this slit, making the vocal cords vibrate and produce sound. The pitch of the voice depends on the length and tension of vocal cords — men have longer vocal cords (deeper voice), women and children have shorter ones (higher pitch)." },
  { q: "Why does sound need a medium for propagation? Can it travel through vacuum?", a: "Sound needs a medium (solid, liquid, or gas) for propagation because sound travels by making the particles of the medium vibrate. The particles pass the vibration on to neighbouring particles, carrying the sound wave. In a vacuum, there are no particles to vibrate, so sound cannot travel. Example: Astronauts on the moon cannot communicate without special devices because the moon's surface is essentially a vacuum — there is no air, and the very thin layer of gas has particles too far apart to transmit sound vibrations." },
  { q: "How do we hear sound through our ears?", a: "The outer ear is shaped like a funnel to collect sound vibrations. These vibrations travel down the ear canal to the eardrum — a thin stretched membrane. Sound vibrations make the eardrum vibrate. The eardrum sends these vibrations to the inner ear. The inner ear converts the vibrations into electrical signals and transfers them to the brain through the auditory nerve. The brain interprets these signals as sound — this is how we hear." },
  { q: "What is time period, frequency, and amplitude? Give formulas and units.", a: "Time Period (T): The time taken by a vibrating object for one complete oscillation. SI unit: second (s). Frequency (f): The number of oscillations made per second. Formula: f = Number of Oscillations ÷ Total time taken. SI unit: Hertz (Hz). Example: 40 oscillations in 2 seconds → f = 40÷2 = 20 Hz. Amplitude: The maximum displacement of a vibrating object from its central (rest) position. Amplitude determines loudness — greater amplitude = louder sound." },
  { q: "What is loudness and pitch? How are they related to amplitude and frequency?", a: "Loudness: The volume of sound — how loud or soft it is. Loudness is directly proportional to the square of the amplitude: Loudness = (Amplitude)². Unit: Decibel (dB). Greater amplitude = louder sound. Pitch: The characteristic of sound that helps distinguish sounds of the same loudness. Pitch is directly proportional to frequency. High frequency = high pitch (shrill sound, like a whistle). Low frequency = low pitch (flat/deep sound, like a drum). Example: A whistle has a higher frequency than a drum, so the whistle has a higher pitch." },
  { q: "What is audible sound, infrasound, and ultrasound?", a: "Audible sound: Sounds with frequency between 20 Hz and 20,000 Hz (20 kHz) that the human ear can hear. Infrasound (Infrasonic): Sounds with frequency below 20 Hz. Human ears cannot hear infrasound. Animals like whales, elephants, and rhinoceroses use infrasound to communicate over long distances. Ultrasound (Ultrasonic): Sounds with frequency above 20,000 Hz (20 kHz). Human ears cannot hear ultrasound. Applications: police use high-frequency dog whistles; bats communicate using ultrasound; ultrasound is used in medical diagnosis (sonography)." },
  { q: "What is noise? What is noise pollution and what are its effects?", a: "Noise: Unpleasant, unwanted sounds are called noise. Musical sounds are sounds that are pleasant to hear. Note: A musical sound becomes noise when it is too loud. Sources of noise pollution: Vehicles, industrial machines, loudspeakers/TVs at high volume, home appliances (desert coolers), aircraft engines. Harmful effects on humans: Lack of sleep, irritation, loss of concentration, hypertension (high blood pressure), headache, and impairment of hearing. Control measures: Industries away from residential areas; avoid unnecessary horn blowing; play radio/TV at low volume; plant trees along roads; use silencers in vehicles." },
];

export default function Sound() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="snd-root">
        {/* HERO */}
        <div className="snd-hero">
          <div className="snd-hero-waves" />
          <div className="snd-hero-ring" />
          <div className="snd-glow-a" />
          <div className="snd-glow-b" />
          <div className="snd-hero-bg-num">13</div>
          <div className="snd-hero-inner">
            <div className="snd-overline">Class 8 Science — Chapter 13</div>
            <h1 className="snd-hero-title"><em>Sound</em></h1>
            <div className="snd-hero-bar">
              <div className="snd-hero-bar-item"><div className="snd-bar-label">Chapter</div><div className="snd-bar-value">13 — Physics</div></div>
              <div className="snd-hero-bar-item"><div className="snd-bar-label">Topics</div><div className="snd-bar-value">Vibration · Propagation · Frequency · Noise Pollution</div></div>
              <div className="snd-hero-bar-item"><div className="snd-bar-label">Board</div><div className="snd-bar-value">NCERT / CBSE</div></div>
            </div>
          </div>
        </div>

        <div className="snd-body">
          <div className="snd-intro-card">
            <p>Every sound you hear — music, speech, thunder — begins with the same phenomenon: <strong>vibration</strong>. When objects vibrate, they disturb the medium around them, creating waves that travel to our ears.</p>
            <p>This chapter explores how sound is produced and heard, the properties of sound waves — frequency, amplitude, pitch, loudness — and the growing problem of <strong>noise pollution</strong>.</p>
          </div>

          {/* S1: PRODUCTION OF SOUND */}
          <div className="snd-sec-head">
            <div className="snd-sec-num">1</div>
            <div className="snd-sec-title-wrap">
              <div className="snd-sec-kicker">Origin</div>
              <h2 className="snd-sec-title">Sound is Produced by <span>Vibration</span></h2>
            </div>
          </div>
          <div className="snd-def-pair">
            <div className="snd-def-card"><span className="snd-def-icon">🔔</span><div className="snd-def-term">What is Sound?</div><div className="snd-def-text">Sound is produced due to <strong>vibrations</strong> in a body. When a body vibrates, it produces sound in the form of waves that travel through a medium.</div></div>
            <div className="snd-def-card"><span className="snd-def-icon">↔️</span><div className="snd-def-term">What is a Vibration?</div><div className="snd-def-text">The back-and-forth motion of an object. One <strong>complete vibration</strong> = object moves from one extreme → other extreme → back to start. Any part of a body vibrating forces the whole body to vibrate.</div></div>
          </div>

          {/* SVG — Sound Wave */}
          <div className="snd-svg-wrap">
            <div className="snd-svg-title">〰️ Sound Wave — Anatomy of a Wave</div>
            <svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"580px"}}>
              <defs>
                <marker id="arrowV" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="#7c3aed"/></marker>
              </defs>
              {/* Center line */}
              <line x1="40" y1="100" x2="540" y2="100" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="6,4"/>
              <text x="32" y="104" textAnchor="end" fontFamily="Inter,sans-serif" fontSize="10" fill="#94a3b8">0</text>
              {/* Wave path — two full cycles, shifted down to give space above */}
              <path d="M40,100 C75,48 105,48 140,100 C175,152 205,152 240,100 C275,48 305,48 340,100 C375,152 405,152 440,100 C475,48 505,48 540,100"
                fill="none" stroke="#7c3aed" strokeWidth="3"/>
              {/* CREST label — above the first crest, well clear */}
              <text x="90" y="28" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#7c3aed">Crest (top)</text>
              <line x1="90" y1="32" x2="90" y2="50" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3,2"/>
              {/* TROUGH label — below wave, well clear */}
              <text x="290" y="188" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#7c3aed">Trough (bottom)</text>
              <line x1="290" y1="152" x2="290" y2="180" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3,2"/>
              {/* Amplitude dashed lines */}
              <line x1="190" y1="100" x2="190" y2="152" stroke="#be185d" strokeWidth="1.5" strokeDasharray="4,3"/>
              <line x1="90" y1="100" x2="90" y2="48" stroke="#be185d" strokeWidth="1.5" strokeDasharray="4,3"/>
              {/* Amplitude label — placed to the right of dashed lines, in clear space */}
              <text x="208" y="132" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#be185d">Amplitude</text>
              <text x="108" y="70" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#be185d">Amplitude</text>
              {/* Wavelength bracket — at bottom */}
              <line x1="40" y1="170" x2="240" y2="170" stroke="#0f766e" strokeWidth="1.5"/>
              <line x1="40" y1="164" x2="40" y2="176" stroke="#0f766e" strokeWidth="1.5"/>
              <line x1="240" y1="164" x2="240" y2="176" stroke="#0f766e" strokeWidth="1.5"/>
              <text x="140" y="188" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#0f766e">1 Wavelength (λ)</text>
              {/* Direction arrow — top right, clear of wave */}
              <line x1="450" y1="72" x2="530" y2="72" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrowV)"/>
              <text x="490" y="64" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#b45309">Direction →</text>
            </svg>
          </div>

          {/* S2: SOUND PRODUCED BY HUMANS */}
          <div className="snd-divider"><div className="snd-divider-mark" /></div>
          <div className="snd-sec-head">
            <div className="snd-sec-num">2</div>
            <div className="snd-sec-title-wrap">
              <div className="snd-sec-kicker">Human Voice</div>
              <h2 className="snd-sec-title">Sound Produced <span>by Humans</span></h2>
            </div>
          </div>
          <div className="snd-larynx-card">
            <div className="snd-larynx-icon">🗣️</div>
            <div className="snd-larynx-text">
              <div className="snd-larynx-title">The Larynx — Voice Box</div>
              <div className="snd-larynx-body">The <strong>larynx</strong> is the voice box, located at the upper end of the windpipe. It has two <strong>vocal cords</strong> stretched across it, leaving a narrow slit. When we speak, air from the lungs passes through this slit — the vocal cords vibrate and produce sound. The <strong>pitch of the voice</strong> depends on the length and tension of the vocal cords. Men have longer vocal cords (deeper, lower pitch). Women and children have shorter vocal cords (higher pitch, shriller voice).</div>
            </div>
          </div>

          {/* S3: PROPAGATION */}
          <div className="snd-divider"><div className="snd-divider-mark" /></div>
          <div className="snd-sec-head">
            <div className="snd-sec-num">3</div>
            <div className="snd-sec-title-wrap">
              <div className="snd-sec-kicker">Medium Needed</div>
              <h2 className="snd-sec-title">Sound Needs a Medium for <span>Propagation</span></h2>
            </div>
          </div>
          <p className="snd-body-text">Sound travels by making particles of a medium vibrate. Sound can travel through <strong>all three states of matter</strong>:</p>
          <div className="snd-medium-cards">
            <div className="snd-medium-card solid"><span className="snd-medium-icon">🪨</span><div className="snd-medium-name">Solid</div><div className="snd-medium-eg">Best conductor of sound. Particles closely packed → sound travels fast. Example: metal rails, walls.</div></div>
            <div className="snd-medium-card liquid"><span className="snd-medium-icon">💧</span><div className="snd-medium-name">Liquid</div><div className="snd-medium-eg">Sound travels through liquids. Example: aquatic animals communicate underwater.</div></div>
            <div className="snd-medium-card gas"><span className="snd-medium-icon">💨</span><div className="snd-medium-name">Gas (Air)</div><div className="snd-medium-eg">We normally hear sound through air. Slowest medium — particles are far apart.</div></div>
          </div>
          <div className="snd-vacuum-note">
            <p>🌑 <strong>Sound cannot travel through vacuum.</strong> Astronauts on the moon cannot communicate without special devices — the moon's surface is a vacuum with no air particles to vibrate. When a body vibrates in a medium, the surrounding particles start vibrating and carry the wave in all directions.</p>
          </div>

          {/* S4: HOW WE HEAR */}
          <div className="snd-divider"><div className="snd-divider-mark" /></div>
          <div className="snd-sec-head">
            <div className="snd-sec-num">4</div>
            <div className="snd-sec-title-wrap">
              <div className="snd-sec-kicker">Hearing Mechanism</div>
              <h2 className="snd-sec-title">We Hear Sound Through <span>Our Ears</span></h2>
            </div>
          </div>
          <div className="snd-ear-steps">
            <div className="snd-ear-step"><div className="snd-ear-dot">👂</div><div className="snd-ear-content"><div className="snd-ear-title">Outer Ear — Funnel Collection</div><div className="snd-ear-desc">The outer ear is shaped like a funnel. It collects sound vibrations from the environment and channels them inward.</div></div></div>
            <div className="snd-ear-step"><div className="snd-ear-dot">🎵</div><div className="snd-ear-content"><div className="snd-ear-title">Ear Canal — Transmission</div><div className="snd-ear-desc">Sound vibrations travel down the ear canal toward the eardrum — a thin, tightly stretched membrane at the end.</div></div></div>
            <div className="snd-ear-step"><div className="snd-ear-dot">🔊</div><div className="snd-ear-content"><div className="snd-ear-title">Eardrum — Vibration</div><div className="snd-ear-desc">Sound vibrations make the eardrum vibrate. The eardrum then sends these vibrations to the inner ear through tiny bones.</div></div></div>
            <div className="snd-ear-step"><div className="snd-ear-dot">🧠</div><div className="snd-ear-content"><div className="snd-ear-title">Inner Ear → Brain — Perception</div><div className="snd-ear-desc">The inner ear transfers the vibration signals to the brain via the auditory nerve. The brain interprets these signals as sound — and we hear.</div></div></div>
          </div>

          {/* S5: WAVE PROPERTIES */}
          <div className="snd-divider"><div className="snd-divider-mark" /></div>
          <div className="snd-sec-head">
            <div className="snd-sec-num">5</div>
            <div className="snd-sec-title-wrap">
              <div className="snd-sec-kicker">Properties of Sound</div>
              <h2 className="snd-sec-title">Amplitude, Frequency, <span>Pitch &amp; Loudness</span></h2>
            </div>
          </div>
          <div className="snd-props-grid">
            <div className="snd-prop-card"><span className="snd-prop-icon">📏</span><div className="snd-prop-name">Amplitude</div><div className="snd-prop-unit">No unit (displacement)</div><div className="snd-prop-desc">Maximum displacement from the <strong>central rest position</strong>. Determines loudness — greater amplitude = louder sound.</div></div>
            <div className="snd-prop-card"><span className="snd-prop-icon">🔁</span><div className="snd-prop-name">Frequency</div><div className="snd-prop-formula">f = Oscillations / Time</div><div className="snd-prop-unit">Unit: Hertz (Hz)</div><div className="snd-prop-desc"><strong>Number of oscillations per second.</strong> Determines pitch — higher frequency = higher pitch (shrill).</div></div>
            <div className="snd-prop-card"><span className="snd-prop-icon">⏱️</span><div className="snd-prop-name">Time Period</div><div className="snd-prop-formula">T = 1/f</div><div className="snd-prop-unit">Unit: Second (s)</div><div className="snd-prop-desc">Time taken for <strong>one complete oscillation</strong>. Reciprocal of frequency.</div></div>
          </div>
          <div className="snd-freq-formula">
            <div className="snd-freq-eq">
              <div className="snd-freq-lhs">f =</div>
              <div className="snd-freq-frac">
                <div className="snd-freq-num">Number of Oscillations</div>
                <div className="snd-freq-line" />
                <div className="snd-freq-den">Total Time Taken (seconds)</div>
              </div>
            </div>
            <div className="snd-freq-note">Example: 40 oscillations in 2 seconds → <strong>f = 40 ÷ 2 = 20 Hz</strong>. Loudness = (Amplitude)². Unit: Decibel (dB). Pitch ∝ Frequency — higher frequency → higher (shriller) pitch.</div>
          </div>

          {/* SVG — Frequency comparison */}
          <div className="snd-svg-wrap">
            <div className="snd-svg-title">🎵 High vs Low Frequency — Pitch Comparison</div>
            <svg viewBox="0 0 540 140" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"540px"}}>
              {/* LOW FREQUENCY */}
              <text x="135" y="16" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#0f766e">Low Frequency (Drum)</text>
              <text x="135" y="30" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#0f766e">Few oscillations per second → Low Pitch</text>
              <path d="M20,75 C60,25 100,25 140,75 C180,125 220,125 260,75" fill="none" stroke="#0f766e" strokeWidth="2.5"/>
              {/* HIGH FREQUENCY */}
              <text x="405" y="16" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#7c3aed">High Frequency (Whistle)</text>
              <text x="405" y="30" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#7c3aed">Many oscillations per second → High Pitch</text>
              <path d="M280,75 C297,45 313,45 330,75 C347,105 363,105 380,75 C397,45 413,45 430,75 C447,105 463,105 480,75 C497,45 513,45 530,75" fill="none" stroke="#7c3aed" strokeWidth="2.5"/>
              {/* Center line */}
              <line x1="20" y1="75" x2="260" y2="75" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,3"/>
              <line x1="280" y1="75" x2="530" y2="75" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,3"/>
            </svg>
          </div>

          {/* S6: AUDIBLE/INAUDIBLE */}
          <div className="snd-divider"><div className="snd-divider-mark" /></div>
          <div className="snd-sec-head">
            <div className="snd-sec-num">6</div>
            <div className="snd-sec-title-wrap">
              <div className="snd-sec-kicker">Hearing Range</div>
              <h2 className="snd-sec-title">Audible &amp; <span>Inaudible Sounds</span></h2>
            </div>
          </div>
          <div className="snd-sound-types">
            <div className="snd-st-card infra"><span className="snd-st-icon">🐘</span><div className="snd-st-name">Infrasound</div><div className="snd-st-range">&lt; 20 Hz</div><div className="snd-st-eg">Below human hearing. Whales, elephants, rhinoceroses use infrasound to communicate over long distances.</div></div>
            <div className="snd-st-card audible"><span className="snd-st-icon">👂</span><div className="snd-st-name">Audible Sound</div><div className="snd-st-range">20 Hz – 20,000 Hz</div><div className="snd-st-eg">The range the human ear can hear. Most speech and music falls in this range.</div></div>
            <div className="snd-st-card ultra"><span className="snd-st-icon">🦇</span><div className="snd-st-name">Ultrasound</div><div className="snd-st-range">&gt; 20,000 Hz</div><div className="snd-st-eg">Above human hearing. Bats navigate using ultrasound. Used in medical sonography and police dog whistles.</div></div>
          </div>

          {/* S7: NOISE POLLUTION */}
          <div className="snd-divider"><div className="snd-divider-mark" /></div>
          <div className="snd-sec-head">
            <div className="snd-sec-num">7</div>
            <div className="snd-sec-title-wrap">
              <div className="snd-sec-kicker">Environmental Issue</div>
              <h2 className="snd-sec-title">Noise &amp; <span>Noise Pollution</span></h2>
            </div>
          </div>
          <div className="snd-noise-music">
            <div className="snd-nm-card noise"><span className="snd-nm-icon">📢</span><div className="snd-nm-name">Noise</div><div className="snd-nm-desc">Unpleasant, unwanted sounds. Even musical sounds become noise when too loud.</div></div>
            <div className="snd-nm-card music"><span className="snd-nm-icon">🎵</span><div className="snd-nm-name">Musical Sound</div><div className="snd-nm-desc">Sounds that are pleasant to hear. Pleasant music at appropriate volume — until it becomes too loud.</div></div>
          </div>
          <div className="snd-np-split">
            <div className="snd-np-card">
              <div className="snd-np-head sources"><span style={{fontSize:"20px"}}>📢</span><div className="snd-np-head-title">Major Sources</div></div>
              <div className="snd-np-body"><div className="snd-np-list sources">{["Vehicles and industrial machines","Loudspeakers, TVs at high volume","Home appliances like desert coolers","Aircraft engines"].map((s,i)=><div className="snd-np-item" key={i}>{s}</div>)}</div></div>
            </div>
            <div className="snd-np-card">
              <div className="snd-np-head effects"><span style={{fontSize:"20px"}}>⚠️</span><div className="snd-np-head-title">Harmful Effects</div></div>
              <div className="snd-np-body"><div className="snd-np-list effects">{["Lack of sleep","Irritation","Loss of concentration","Hypertension","Headache","Impairment of hearing"].map((s,i)=><div className="snd-np-item" key={i}>{s}</div>)}</div></div>
            </div>
          </div>
          <div className="snd-np-card" style={{width:"100%",border:"1.5px solid var(--rule)",borderRadius:"10px",overflow:"hidden",background:"var(--white)",marginBottom:"24px"}}>
            <div className="snd-np-head measures" style={{padding:"14px 18px",display:"flex",alignItems:"center",gap:"10px",background:"var(--green-lt)"}}><span style={{fontSize:"20px"}}>✅</span><div className="snd-np-head-title" style={{fontFamily:"'Montserrat',sans-serif",fontSize:"16px",fontWeight:"800",color:"var(--green)"}}>Measures to Control Noise Pollution</div></div>
            <div className="snd-np-body" style={{padding:"16px 18px"}}><div className="snd-np-list measures">{["Set up noisy industries away from residential areas","Don't blow vehicle horns unnecessarily","Play radio, TV, and loudspeakers at low volumes","Plant trees along roads to absorb noise","Use good quality silencers in vehicles and aircraft"].map((s,i)=><div className="snd-np-item" key={i}>{s}</div>)}</div></div>
          </div>

          <div className="snd-pull-quote">
            <p>"Sound is the invisible architecture of the world — vibrations building waves that cross space, enter ears, and become meaning. From a whisper to a thunderclap, it all begins with a single object moving back and forth."</p>
          </div>

          <div className="snd-divider"><div className="snd-divider-mark" /></div>
          <div className="snd-faq-header"><span className="snd-faq-kicker">Exam Preparation</span></div>
          <h2 className="snd-faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq,i) => (
            <div className={`snd-faq-item${openIndex===i?" open":""}`} key={i}>
              <button className="snd-faq-q" onClick={() => toggle(i)}>
                <span className="snd-faq-q-text">Q{i+1}. {faq.q}</span>
                <span className="snd-faq-icon">{openIndex===i?"▴":"▾"}</span>
              </button>
              {openIndex===i && (<div className="snd-faq-ans visible"><div className="snd-faq-ans-inner">{faq.a}</div></div>)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
