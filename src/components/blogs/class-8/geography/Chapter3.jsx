import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --ink:        #0f172a;
    --ink2:       #1e293b;
    --muted:      #64748b;
    --steel:      #1e3a5f;
    --steel2:     #1d4ed8;
    --steel-bg:   #eff6ff;
    --steel-bd:   #bfdbfe;
    --silver:     #475569;
    --silver2:    #64748b;
    --silver-bg:  #f8fafc;
    --silver-bd:  #cbd5e1;
    --gold:       #b45309;
    --gold2:      #d97706;
    --gold-bg:    #fffbeb;
    --gold-bd:    #fde68a;
    --coal:       #1c1917;
    --coal2:      #44403c;
    --coal-bg:    #fafaf9;
    --coal-bd:    #d6d3d1;
    --sun:        #ea580c;
    --sun2:       #f97316;
    --sun-bg:     #fff7ed;
    --sun-bd:     #fed7aa;
    --teal:       #0f766e;
    --teal2:      #0d9488;
    --teal-bg:    #f0fdfa;
    --teal-bd:    #99f6e4;
    --green:      #15803d;
    --green-bg:   #f0fdf4;
    --green-bd:   #86efac;
    --card:       #ffffff;
  }

  .blog-root {
    font-family: 'Inter', sans-serif;
    background: #f5f7ff;
    color: var(--ink);
    min-height: 100vh;
  }

  /* ── Hero ── */
  .mpr-hero {
    background: linear-gradient(135deg, #0a0a14 0%, #0f172a 35%, #1e3a5f 68%, #1d4ed8 100%);
    padding: 80px 24px 96px;
    position: relative; overflow: hidden;
  }
  .mpr-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 10% 65%, rgba(180,83,9,0.20) 0%, transparent 50%),
      radial-gradient(circle at 86% 15%, rgba(29,78,216,0.28) 0%, transparent 52%),
      radial-gradient(circle at 52% 95%, rgba(234,88,12,0.12) 0%, transparent 40%);
  }
  .mpr-hero::after {
    content: '⛏️';
    position: absolute; right: 44px; top: 32px;
    font-size: 130px; opacity: 0.07; line-height: 1;
  }
  .mpr-hero-inner { max-width: 820px; margin: 0 auto; position: relative; z-index: 1; }
  .mpr-hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(180,83,9,0.18); border: 1px solid rgba(180,83,9,0.38);
    color: #fde68a; font-family: 'Poppins', sans-serif;
    font-size: 13px; font-weight: 600; padding: 6px 16px; border-radius: 100px;
    margin-bottom: 28px; letter-spacing: 0.05em; text-transform: uppercase;
  }
  .mpr-hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 6vw, 64px); font-weight: 900; line-height: 1.07;
    color: #ffffff; margin: 0 0 20px; letter-spacing: -0.02em;
  }
  .mpr-hero-title span { color: #93c5fd; }
  .mpr-hero-sub {
    font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 500;
    color: #bfdbfe; line-height: 1.7; max-width: 620px; margin: 0 0 40px;
  }
  .mpr-hero-meta { display: flex; flex-wrap: wrap; gap: 20px; align-items: center; }
  .mpr-meta-chip { color: #93c5fd; font-size: 14px; font-weight: 500; display: flex; align-items: center; gap: 7px; }
  .mpr-meta-dot  { width: 4px; height: 4px; background: #60a5fa; border-radius: 50%; display: inline-block; }

  /* ── Body ── */
  .mpr-body { max-width: 820px; margin: 0 auto; padding: 64px 24px 80px; }

  /* ── Intro card ── */
  .mpr-intro-card {
    background: linear-gradient(135deg, #0a0a14, #0f172a);
    border-radius: 20px; padding: 40px 44px; margin-bottom: 56px;
    position: relative; overflow: hidden;
  }
  .mpr-intro-card::after {
    content: '💎'; position: absolute; top: 10px; right: 28px;
    font-size: 120px; opacity: 0.07; line-height: 1;
  }
  .mpr-intro-card p {
    font-family: 'Poppins', sans-serif; font-size: 19px; font-weight: 500;
    color: #bfdbfe; line-height: 1.75; margin: 0 0 16px; position: relative; z-index: 1;
  }
  .mpr-intro-card p:last-child { margin: 0; }
  .mpr-intro-card strong { color: #93c5fd; }

  /* ── Stat strip ── */
  .mpr-stat-strip {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0; border-radius: 14px; overflow: hidden;
    border: 1.5px solid var(--steel-bd); margin-bottom: 56px;
    box-shadow: 0 4px 18px rgba(29,78,216,0.08);
  }
  @media (max-width: 560px) { .mpr-stat-strip { grid-template-columns: repeat(2,1fr); } }
  .mpr-stat {
    padding: 24px 14px; text-align: center;
    border-right: 1.5px solid var(--steel-bd); background: var(--card);
  }
  .mpr-stat:last-child { border-right: none; }
  @media (max-width: 560px) {
    .mpr-stat:nth-child(2) { border-right: none; }
    .mpr-stat:nth-child(3) { border-top: 1.5px solid var(--steel-bd); }
    .mpr-stat:nth-child(4) { border-top: 1.5px solid var(--steel-bd); border-right: none; }
  }
  .mpr-stat-icon { font-size: 26px; margin-bottom: 6px; }
  .mpr-stat-num { font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900; color: var(--steel2); margin-bottom: 4px; }
  .mpr-stat-lbl { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 600; color: var(--muted); line-height: 1.4; }

  /* ── Labels & titles ── */
  .mpr-label {
    font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;
  }
  .mpr-label.stl { color: var(--steel2); }
  .mpr-label.gld { color: var(--gold2); }
  .mpr-label.sun { color: var(--sun2); }
  .mpr-label.tl  { color: var(--teal2); }
  .mpr-label.grn { color: var(--green); }
  .mpr-label.sil { color: var(--silver); }

  .mpr-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(26px, 4vw, 36px); font-weight: 800;
    color: var(--ink); line-height: 1.2; margin: 0 0 28px; letter-spacing: -0.01em;
  }
  .mpr-title .stl { color: var(--steel2); }
  .mpr-title .gld { color: var(--gold2); }
  .mpr-title .sun { color: var(--sun2); }
  .mpr-title .tl  { color: var(--teal2); }
  .mpr-title .grn { color: var(--green); }
  .mpr-title .sil { color: var(--silver); }

  .mpr-divider { border: none; border-top: 1.5px solid #bfdbfe; margin: 52px 0; }

  /* ── Mineral type big cards ── */
  .mpr-type-split {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; border-radius: 18px; overflow: hidden;
    border: 1.5px solid var(--steel-bd); margin-bottom: 32px;
  }
  @media (max-width: 540px) { .mpr-type-split { grid-template-columns: 1fr; } }
  .mpr-type-col { padding: 28px 26px; }
  .mpr-type-col.metal    { background: var(--steel-bg); }
  .mpr-type-col.nonmetal { background: var(--coal-bg); border-left: 1.5px solid var(--steel-bd); }
  @media (max-width: 540px) { .mpr-type-col.nonmetal { border-left:none; border-top: 1.5px solid var(--steel-bd); } }
  .mpr-type-col h3 {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 800; margin: 0 0 10px;
  }
  .mpr-type-col.metal    h3 { color: var(--steel2); }
  .mpr-type-col.nonmetal h3 { color: var(--coal2); }
  .mpr-type-badge {
    display: inline-block; font-family: 'Poppins', sans-serif;
    font-size: 11px; font-weight: 700; padding: 3px 12px; border-radius: 100px;
    text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px;
  }
  .mpr-type-col.metal    .mpr-type-badge { background: #dbeafe; color: var(--steel); }
  .mpr-type-col.nonmetal .mpr-type-badge { background: #e7e5e4; color: var(--coal2); }
  .mpr-type-col p { font-size: 14px; color: var(--ink2); line-height: 1.7; margin: 0 0 10px; }
  .mpr-type-col p:last-child { margin: 0; }
  .mpr-type-col strong { color: var(--ink); }
  .mpr-type-col .eg { font-family:'Poppins',sans-serif; font-size:12px; font-weight:600; color:var(--muted); font-style:italic; }

  /* ── Metallic sub-types two cards ── */
  .mpr-metallic-sub {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 14px; margin-bottom: 36px;
  }
  @media (max-width: 500px) { .mpr-metallic-sub { grid-template-columns: 1fr; } }
  .mpr-ms-card {
    border-radius: 14px; padding: 22px 20px; border: 1.5px solid;
  }
  .mpr-ms-card.fer  { background: var(--steel-bg); border-color: var(--steel-bd); border-left: 4px solid var(--steel2); }
  .mpr-ms-card.nfer { background: var(--gold-bg);  border-color: var(--gold-bd);  border-left: 4px solid var(--gold2); }
  .mpr-ms-card .mc-icon { font-size: 26px; margin-bottom: 8px; }
  .mpr-ms-card h4 { font-family:'Poppins',sans-serif; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 7px; }
  .mpr-ms-card.fer  h4 { color: var(--steel); }
  .mpr-ms-card.nfer h4 { color: var(--gold); }
  .mpr-ms-card p { font-size:14px; color:var(--ink2); line-height:1.65; margin:0; }
  .mpr-ms-card strong { color:var(--ink); }

  /* ── Extraction methods trio ── */
  .mpr-extract {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 14px; margin-bottom: 40px;
  }
  @media (max-width: 540px) { .mpr-extract { grid-template-columns: 1fr; } }
  .mpr-ext-card {
    background: var(--card); border: 1.5px solid var(--steel-bd);
    border-top: 4px solid var(--steel2); border-radius: 14px; padding: 22px 18px; text-align:center;
  }
  .mpr-ext-card .ec-icon { font-size:30px; margin-bottom:10px; }
  .mpr-ext-card h4 { font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; color:var(--steel2); margin:0 0 8px; }
  .mpr-ext-card p { font-size:13px; color:var(--ink2); line-height:1.65; margin:0; }
  .mpr-ext-card strong { color:var(--ink); }

  /* ── Rock distribution three-col ── */
  .mpr-rocks {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 0; border-radius: 14px; overflow: hidden;
    border: 1.5px solid var(--silver-bd); margin-bottom: 36px;
  }
  @media (max-width: 540px) { .mpr-rocks { grid-template-columns: 1fr; } }
  .mpr-rock-col { padding: 24px 18px; background: var(--card); border-right: 1.5px solid var(--silver-bd); }
  .mpr-rock-col:last-child { border-right: none; }
  @media (max-width: 540px) {
    .mpr-rock-col { border-right: none; border-bottom: 1.5px solid var(--silver-bd); }
    .mpr-rock-col:last-child { border-bottom: none; }
  }
  .mpr-rock-col .rc-icon { font-size:26px; margin-bottom:8px; }
  .mpr-rock-col h4 { font-family:'Poppins',sans-serif; font-size:13px; font-weight:700; color:var(--silver); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 8px; }
  .mpr-rock-col ul { margin:0; padding-left:16px; }
  .mpr-rock-col ul li { font-size:13px; color:var(--ink2); line-height:1.7; margin-bottom:4px; }

  /* ── Mineral uses grid ── */
  .mpr-uses-grid {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 14px; margin-bottom: 40px;
  }
  @media (max-width: 560px) { .mpr-uses-grid { grid-template-columns: repeat(2,1fr); } }
  .mpr-use-card {
    background: var(--card); border: 1.5px solid var(--gold-bd);
    border-radius: 14px; padding: 20px 16px; text-align:center;
  }
  .mpr-use-card .uc-icon { font-size:28px; margin-bottom:8px; }
  .mpr-use-card h4 { font-family:'Poppins',sans-serif; font-size:13px; font-weight:700; color:var(--gold); margin:0 0 5px; }
  .mpr-use-card p { font-size:12px; color:var(--muted); line-height:1.5; margin:0; }

  /* ── India mineral map cards ── */
  .mpr-india-grid {
    display: grid; grid-template-columns: repeat(2,1fr);
    gap: 14px; margin-bottom: 40px;
  }
  @media (max-width: 500px) { .mpr-india-grid { grid-template-columns: 1fr; } }
  .mpr-india-card {
    background: var(--card); border: 1.5px solid var(--steel-bd);
    border-radius: 14px; padding: 20px 20px;
    display: flex; gap: 14px; align-items: flex-start;
  }
  .mpr-india-card .ic-badge {
    background: var(--steel2); color:#fff;
    font-family:'Montserrat',sans-serif; font-size:22px; font-weight:900;
    width:44px; height:44px; border-radius:10px;
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .mpr-india-card h4 { font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; color:var(--steel); margin:0 0 4px; }
  .mpr-india-card p { font-size:13px; color:var(--muted); line-height:1.6; margin:0; }
  .mpr-india-card strong { color:var(--ink2); }

  /* ── Conservation callout ── */
  .mpr-conserve {
    background: linear-gradient(135deg, #052e16, #14532d);
    border-radius: 18px; padding: 30px 34px; margin-bottom: 40px;
    position: relative; overflow: hidden;
  }
  .mpr-conserve::after { content:'♻️'; position:absolute; right:20px; top:8px; font-size:100px; opacity:0.08; line-height:1; }
  .mpr-conserve h3 { font-family:'Montserrat',sans-serif; font-size:18px; font-weight:800; color:#86efac; margin:0 0 14px; position:relative; z-index:1; }
  .mpr-conserve ul { margin:0; padding-left:18px; position:relative; z-index:1; }
  .mpr-conserve ul li { font-family:'Poppins',sans-serif; font-size:14px; font-weight:500; color:#bbf7d0; line-height:1.8; margin-bottom:6px; }
  .mpr-conserve ul li strong { color:#fde68a; }

  /* ── Power uses row ── */
  .mpr-power-uses {
    display: grid; grid-template-columns: repeat(6,1fr);
    gap: 10px; margin-bottom: 36px;
  }
  @media (max-width: 600px) { .mpr-power-uses { grid-template-columns: repeat(3,1fr); } }
  .mpr-pu-box {
    background: var(--card); border: 1.5px solid var(--steel-bd);
    border-radius: 12px; padding: 16px 8px; text-align:center;
  }
  .mpr-pu-box .pub-icon { font-size:22px; margin-bottom:6px; }
  .mpr-pu-box p { font-family:'Poppins',sans-serif; font-size:11px; font-weight:700; color:var(--steel); margin:0; line-height:1.3; }

  /* ── Conventional vs Non-conventional compare ── */
  .mpr-power-compare {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; border-radius: 18px; overflow: hidden;
    border: 1.5px solid var(--coal-bd); margin-bottom: 36px;
  }
  @media (max-width: 540px) { .mpr-power-compare { grid-template-columns: 1fr; } }
  .mpr-pc-col { padding: 28px 26px; }
  .mpr-pc-col.conv   { background: var(--coal-bg); }
  .mpr-pc-col.noncon { background: var(--sun-bg); border-left: 1.5px solid var(--coal-bd); }
  @media (max-width: 540px) { .mpr-pc-col.noncon { border-left:none; border-top:1.5px solid var(--coal-bd); } }
  .mpr-pc-badge {
    display:inline-block; font-family:'Poppins',sans-serif; font-size:11px; font-weight:700;
    padding:3px 12px; border-radius:100px; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:12px;
  }
  .mpr-pc-col.conv   .mpr-pc-badge { background:#e7e5e4; color:var(--coal2); }
  .mpr-pc-col.noncon .mpr-pc-badge { background:#fed7aa; color:var(--sun); }
  .mpr-pc-col h3 { font-family:'Montserrat',sans-serif; font-size:17px; font-weight:800; margin:0 0 12px; }
  .mpr-pc-col.conv   h3 { color:var(--coal2); }
  .mpr-pc-col.noncon h3 { color:var(--sun); }
  .mpr-pc-col ul { margin:0; padding-left:18px; }
  .mpr-pc-col ul li { font-size:14px; color:var(--ink2); line-height:1.8; margin-bottom:6px; }
  .mpr-pc-col ul li strong { color:var(--ink); }

  /* ── Fossil fuel cards ── */
  .mpr-fossil-cards { margin-bottom: 36px; }
  .mpr-fossil-card {
    display:flex; gap:16px; align-items:flex-start;
    background: var(--card); border: 1.5px solid var(--coal-bd);
    border-radius: 14px; padding: 20px 22px; margin-bottom:12px;
  }
  .mpr-fossil-card .fc-dot {
    width:40px; height:40px; border-radius:10px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center; font-size:20px;
  }
  .mpr-fossil-card.coal-c .fc-dot { background:#1c1917; }
  .mpr-fossil-card.petro  .fc-dot { background:#431407; }
  .mpr-fossil-card.gas    .fc-dot { background:#1e3a5f; }
  .mpr-fossil-card.hydro  .fc-dot { background:#0c4a6e; }
  .mpr-fossil-card h4 { font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; margin:0 0 4px; }
  .mpr-fossil-card.coal-c h4 { color:var(--coal2); }
  .mpr-fossil-card.petro  h4 { color:var(--sun); }
  .mpr-fossil-card.gas    h4 { color:var(--steel2); }
  .mpr-fossil-card.hydro  h4 { color:#0369a1; }
  .mpr-fossil-card p { font-size:14px; color:var(--ink2); line-height:1.7; margin:0; }
  .mpr-fossil-card .fc-nickname {
    display:inline-block; font-family:'Poppins',sans-serif; font-size:11px; font-weight:700;
    padding:2px 10px; border-radius:100px; margin-bottom:4px;
  }
  .mpr-fossil-card.coal-c .fc-nickname { background:#e7e5e4; color:var(--coal2); }
  .mpr-fossil-card.petro  .fc-nickname { background:#fed7aa; color:var(--sun); }

  /* ── Non-conventional sources grid ── */
  .mpr-renew-grid {
    display: grid; grid-template-columns: repeat(2,1fr);
    gap: 14px; margin-bottom: 40px;
  }
  @media (max-width: 500px) { .mpr-renew-grid { grid-template-columns: 1fr; } }
  .mpr-renew-card {
    border-radius: 14px; padding: 22px 20px; border: 1.5px solid;
  }
  .mpr-renew-card.solar { background: var(--sun-bg);   border-color: var(--sun-bd);   border-top: 4px solid var(--sun2); }
  .mpr-renew-card.wind  { background: var(--teal-bg);  border-color: var(--teal-bd);  border-top: 4px solid var(--teal2); }
  .mpr-renew-card.tidal { background: var(--steel-bg); border-color: var(--steel-bd); border-top: 4px solid var(--steel2); }
  .mpr-renew-card.other { background: var(--green-bg); border-color: var(--green-bd); border-top: 4px solid var(--green); }
  .mpr-renew-card .rc-icon { font-size:28px; margin-bottom:10px; }
  .mpr-renew-card h4 { font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; margin:0 0 6px; }
  .mpr-renew-card.solar h4 { color:var(--sun); }
  .mpr-renew-card.wind  h4 { color:var(--teal); }
  .mpr-renew-card.tidal h4 { color:var(--steel2); }
  .mpr-renew-card.other h4 { color:var(--green); }
  .mpr-renew-card p { font-size:13px; color:var(--ink2); line-height:1.65; margin:0; }
  .mpr-renew-card strong { color:var(--ink); }

  /* ── India Solar callout ── */
  .mpr-solar-india {
    background: linear-gradient(135deg, var(--sun), #b45309);
    border-radius: 16px; padding: 26px 30px; margin-bottom: 40px;
    display: flex; gap:16px; align-items:center;
  }
  @media (max-width: 480px) { .mpr-solar-india { flex-direction:column; text-align:center; } }
  .mpr-solar-india .si-icon { font-size:40px; flex-shrink:0; }
  .mpr-solar-india h4 { font-family:'Montserrat',sans-serif; font-size:17px; font-weight:800; color:#fff; margin:0 0 6px; }
  .mpr-solar-india p { font-family:'Poppins',sans-serif; font-size:14px; font-weight:500; color:#fed7aa; line-height:1.6; margin:0; }
  .mpr-solar-india strong { color:#fff; }

  /* ── FAQ ── */
  .mpr-faq-label {
    font-family:'Poppins',sans-serif; font-size:12px; font-weight:700;
    color:var(--steel2); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:10px;
  }
  .mpr-faq-title {
    font-family:'Montserrat',sans-serif;
    font-size: clamp(24px,3.5vw,32px); font-weight:800;
    color:var(--ink); margin:0 0 28px; letter-spacing:-0.01em;
  }
  .faq-item {
    border: 1.5px solid var(--steel-bd); border-radius:14px; margin-bottom:12px;
    background: var(--card); overflow:hidden;
  }
  .faq-item.open { border-color: var(--steel2); }
  .faq-q {
    width:100%; background:none; border:none; cursor:pointer;
    display:flex; justify-content:space-between; align-items:center;
    padding:18px 22px; gap:12px; text-align:left;
  }
  .faq-q-text { font-family:'Poppins',sans-serif; font-size:15px; font-weight:600; color:var(--ink); line-height:1.5; }
  .faq-item.open .faq-q-text { color:var(--steel2); }
  .faq-icon { font-size:18px; color:var(--steel2); flex-shrink:0; font-family:'Poppins',sans-serif; font-weight:700; }
  .faq-ans {
    display:none; padding:0 22px 20px;
    font-family:'Poppins',sans-serif; font-size:14px; font-weight:500;
    color:var(--ink2); line-height:1.8;
  }
  .faq-ans.visible { display:block; }
  .faq-ans strong { color:var(--steel2); }
  .faq-ans ul { padding-left:20px; margin:8px 0; }
  .faq-ans ul li { margin-bottom:6px; }
`;

const faqs = [
  {
    q: "What are minerals? How are they identified?",
    a: (<>Minerals are <strong>naturally occurring substances that have a definite chemical composition</strong>. They are formed in different types of geological environments under varying conditions. Minerals can be identified on the basis of their <strong>physical properties</strong> such as colour, density, and hardness, as well as <strong>chemical properties</strong> such as solubility. They are distributed in rocks and on the seabed. Tropical regions are very rich in mineral resources.</>)
  },
  {
    q: "What is the difference between metallic and non-metallic minerals?",
    a: (<><strong>Metallic minerals</strong> contain metals in raw form. Metals are hard substances that conduct heat and electricity and have lustre or shine (e.g. iron ore, bauxite). They are of two types — <strong>Ferrous</strong> (contain iron: iron ore, manganese, chromites) and <strong>Non-ferrous</strong> (no iron but contain gold, silver, copper, lead). <strong>Non-metallic minerals</strong> do not contain metals at all — e.g. limestone, mica, gypsum, coal, petroleum.</>)
  },
  {
    q: "What are the three methods of mineral extraction?",
    a: (<>The three methods are:
      <ul>
        <li><strong>Mining</strong> — taking out minerals from rocks buried under the Earth's surface. Two types: (a) <strong>Open cast mining</strong> — minerals near the surface are dug out; (b) <strong>Shaft mining</strong> — deep wells/shafts are dug to reach minerals</li>
        <li><strong>Drilling</strong> — deep wells are bored to extract minerals (used mainly for petroleum and natural gas)</li>
        <li><strong>Quarrying</strong> — minerals that lie very close to the surface are simply dug out (e.g. stone, sand)</li>
      </ul></>)
  },
  {
    q: "Where are minerals found? Name the rock types and regions.",
    a: (<>Minerals are found in three types of rocks:
      <ul>
        <li><strong>Igneous and metamorphic rocks</strong> — iron ore, nickel, copper minerals</li>
        <li><strong>Sedimentary rocks</strong> — limestone</li>
      </ul>
      In India, the <strong>plateau regions</strong> — especially the <strong>Deccan Plateau</strong> and <strong>Chota Nagpur Plateau</strong> — are among the richest mineral zones. Specific distributions: Iron and Bauxite → Jharkhand, Odisha, Chattisgarh; Mica → Jharkhand, Bihar, Andhra Pradesh (India is the world's leading mica producer); Gold → Kolar, Karnataka.</>)
  },
  {
    q: "What are the uses of important minerals?",
    a: (<>
      <ul>
        <li><strong>Iron &amp; Steel</strong> — used in every industry; backbone of industrial development</li>
        <li><strong>Copper</strong> — used from coins to pipes; excellent conductor of electricity</li>
        <li><strong>Aluminium</strong> — used in automobiles, airplanes, bottling, building, and kitchen cookware</li>
        <li><strong>Mica</strong> — used in electrical appliances and glass-making industries</li>
        <li><strong>Silicon</strong> — used in the computer industry; obtained from quartz</li>
        <li><strong>Gems (hard minerals)</strong> — used in jewellery making</li>
      </ul></>)
  },
  {
    q: "How should we conserve mineral resources?",
    a: (<>Minerals are <strong>non-renewable resources</strong> — once used, they cannot be quickly replaced. Key conservation measures:
      <ul>
        <li><strong>Reduce wastage</strong> in the process of mining</li>
        <li><strong>Recycling of metals</strong> — using scrap metal reduces the need for fresh extraction</li>
        <li><strong>Avoid over-exploitation</strong> — which is harmful to both resources and the environment</li>
        <li>Use minerals <strong>judiciously and efficiently</strong> in industrial processes</li>
      </ul></>)
  },
  {
    q: "What are power resources? Why do we need them?",
    a: (<><strong>Power resources</strong> are sources of energy used to run industries, machines, and services. We need them for:
      <ul>
        <li>Industry — running factories and machinery</li>
        <li>Domestic use — cooking, heating, lighting</li>
        <li>Agriculture — running irrigation pumps</li>
        <li>Transport — fuel for vehicles, trains, ships</li>
        <li>Communication — powering networks and devices</li>
        <li>Defence — running military equipment</li>
      </ul>
      Power resources are of two types: <strong>Conventional</strong> (firewood, fossil fuels) and <strong>Non-conventional</strong> (solar, wind, tidal).</>)
  },
  {
    q: "What are conventional sources of energy? Name the fossil fuels.",
    a: (<><strong>Conventional sources</strong> are energy resources that have been <strong>in common use for a long time</strong>. The two main types are <strong>firewood</strong> and <strong>fossil fuels</strong>. Fossil fuels include:
      <ul>
        <li><strong>Coal</strong> — known as "buried sunshine"; formed from ancient plant matter</li>
        <li><strong>Petroleum</strong> — known as "black gold"; a liquid fossil fuel used widely in transport and industry</li>
        <li><strong>Natural Gas</strong> — a cleaner fossil fuel used for heating and power generation</li>
        <li><strong>Hydroelectricity</strong> — generated from flowing/falling water through dams</li>
      </ul></>)
  },
  {
    q: "What are non-conventional sources of energy? Why are they important?",
    a: (<><strong>Non-conventional sources</strong> of energy are <strong>renewable in nature</strong> — they can be replenished naturally and will not run out. Examples: solar energy, wind energy, tidal energy. Key points:
      <ul>
        <li>They are <strong>environmentally friendly</strong> — produce little or no pollution</li>
        <li>They are currently <strong>more expensive</strong> as they require technological upgradation</li>
        <li><strong>India has great potential for solar energy</strong> — due to its tropical location and long sunshine hours</li>
        <li>They are the <strong>future of energy</strong> as fossil fuels are finite and polluting</li>
      </ul></>)
  },
  {
    q: "Why are mineral-based industries called the backbone of industrial development?",
    a: (<>Mineral-based industries are called the backbone of industrial development because:
      <ul>
        <li><strong>Iron and steel</strong> — derived from ferrous minerals — are used in every industry from construction to manufacturing</li>
        <li>Heavy industries like shipbuilding, machinery, and railways all depend on <strong>ferrous minerals</strong></li>
        <li><strong>Copper, aluminium, silicon</strong> power the electronics, aviation, and IT industries</li>
        <li>Without minerals, <strong>no modern industrial economy can function</strong></li>
      </ul>
      This is why the mineral-rich plateau regions of India (Chota Nagpur, Deccan) are centres of heavy industry.</>)
  },
];

export default function MineralsAndPowerResources() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="blog-root">

        {/* ── HERO ── */}
        <div className="mpr-hero">
          <div className="mpr-hero-inner">
            <div className="mpr-hero-tag">📚 Geography · Class 8 · Chapter 3</div>
            <h1 className="mpr-hero-title">
              Minerals &amp;<br /><span>Power Resources</span>
            </h1>
            <p className="mpr-hero-sub">
              From iron ore beneath ancient plateaus to solar rays harnessed by modern panels — understand how minerals power civilisation and why conserving both is critical for our future.
            </p>
            <div className="mpr-hero-meta">
              <span className="mpr-meta-chip"><span className="mpr-meta-dot" />Geography</span>
              <span className="mpr-meta-chip"><span className="mpr-meta-dot" />NCERT Class 8</span>
              <span className="mpr-meta-chip"><span className="mpr-meta-dot" />Chapter 3</span>
              <span className="mpr-meta-chip"><span className="mpr-meta-dot" />10 FAQs</span>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="mpr-body">

          {/* Intro card */}
          <div className="mpr-intro-card">
            <p>
              <strong>Minerals</strong> are naturally occurring substances with a definite chemical composition — formed over millions of years in geological environments. They are the raw material of modern industry.
            </p>
            <p>
              <strong>Power resources</strong> keep our homes, farms, factories, and cities running. Together, minerals and energy form the twin pillars of every economy on Earth — and both demand wise, sustainable use.
            </p>
          </div>

          {/* Stat strip */}
          <div className="mpr-stat-strip">
            <div className="mpr-stat">
              <div className="mpr-stat-icon">⛏️</div>
              <div className="mpr-stat-num">3</div>
              <div className="mpr-stat-lbl">Extraction methods</div>
            </div>
            <div className="mpr-stat">
              <div className="mpr-stat-icon">🪨</div>
              <div className="mpr-stat-num">3</div>
              <div className="mpr-stat-lbl">Rock types with minerals</div>
            </div>
            <div className="mpr-stat">
              <div className="mpr-stat-icon">⚡</div>
              <div className="mpr-stat-num">2</div>
              <div className="mpr-stat-lbl">Power resource types</div>
            </div>
            <div className="mpr-stat">
              <div className="mpr-stat-icon">🌟</div>
              <div className="mpr-stat-num">#1</div>
              <div className="mpr-stat-lbl">India — world mica producer</div>
            </div>
          </div>

          {/* ── MINERALS ── */}
          <div className="mpr-label stl">Types of Minerals</div>
          <h2 className="mpr-title">Metallic vs <span className="stl">Non-Metallic Minerals</span></h2>

          <div className="mpr-type-split">
            <div className="mpr-type-col metal">
              <div className="mpr-type-badge">⚙️ Metallic</div>
              <h3>Metallic Minerals</h3>
              <p>Contain <strong>metals in raw form</strong>. Metals are hard substances that conduct heat and electricity and have a <strong>lustre or shine</strong>.</p>
              <p className="eg">e.g. Iron ore, Bauxite, Gold, Silver, Copper</p>
            </div>
            <div className="mpr-type-col nonmetal">
              <div className="mpr-type-badge">🪨 Non-Metallic</div>
              <h3>Non-Metallic Minerals</h3>
              <p>Do <strong>not contain metals</strong>. They are used as raw materials in various industries and chemical processes.</p>
              <p className="eg">e.g. Limestone, Mica, Gypsum, Coal, Petroleum</p>
            </div>
          </div>

          {/* Ferrous vs Non-ferrous */}
          <div className="mpr-label stl">Metallic Sub-types</div>
          <h2 className="mpr-title">Ferrous vs <span className="gld">Non-Ferrous</span></h2>

          <div className="mpr-metallic-sub">
            <div className="mpr-ms-card fer">
              <div className="mc-icon">🏗️</div>
              <h4>Ferrous Minerals</h4>
              <p>Contain <strong>iron</strong>. Most iron &amp; steel industries and heavy industries depend on these minerals. Examples: <strong>iron ore, manganese, chromites</strong>.</p>
            </div>
            <div className="mpr-ms-card nfer">
              <div className="mc-icon">🥇</div>
              <h4>Non-Ferrous Minerals</h4>
              <p>Do <strong>not contain iron</strong> but may contain other valuable metals. Examples: <strong>gold, silver, copper, lead</strong>. Critical for electronics and precision industries.</p>
            </div>
          </div>

          {/* Extraction methods */}
          <div className="mpr-label stl">Extraction</div>
          <h2 className="mpr-title">How Minerals Are <span className="stl">Extracted</span></h2>

          <div className="mpr-extract">
            <div className="mpr-ext-card">
              <div className="ec-icon">⛏️</div>
              <h4>Mining</h4>
              <p>Taking minerals out from rocks <strong>buried under Earth's surface</strong>. Two types: <strong>Open cast</strong> (near surface, dug out) and <strong>Shaft mining</strong> (deep wells dug down).</p>
            </div>
            <div className="mpr-ext-card">
              <div className="ec-icon">🛢️</div>
              <h4>Drilling</h4>
              <p><strong>Deep wells are bored</strong> to take minerals out. Primarily used for <strong>petroleum and natural gas</strong> extraction from underground reservoirs.</p>
            </div>
            <div className="mpr-ext-card">
              <div className="ec-icon">🪨</div>
              <h4>Quarrying</h4>
              <p>Minerals that <strong>lie near the surface</strong> are simply dug out. Used for stone, sand, gravel, and surface-level mineral deposits.</p>
            </div>
          </div>

          <hr className="mpr-divider" />

          {/* ── DISTRIBUTION ── */}
          <div className="mpr-label sil">Distribution</div>
          <h2 className="mpr-title">Where Minerals Are <span className="sil">Found</span></h2>

          <div className="mpr-rocks">
            <div className="mpr-rock-col">
              <div className="rc-icon">🌋</div>
              <h4>Igneous Rocks</h4>
              <ul>
                <li>Iron ore</li>
                <li>Nickel</li>
                <li>Copper minerals</li>
              </ul>
            </div>
            <div className="mpr-rock-col">
              <div className="rc-icon">🏔️</div>
              <h4>Metamorphic Rocks</h4>
              <ul>
                <li>Iron ore</li>
                <li>Copper</li>
                <li>Nickel</li>
              </ul>
            </div>
            <div className="mpr-rock-col">
              <div className="rc-icon">🪨</div>
              <h4>Sedimentary Rocks</h4>
              <ul>
                <li>Limestone</li>
                <li>Coal deposits</li>
                <li>Petroleum reserves</li>
              </ul>
            </div>
          </div>

          {/* India distribution */}
          <div className="mpr-label stl">India's Minerals</div>
          <h2 className="mpr-title">Mineral Distribution <span className="stl">in India</span></h2>

          <div className="mpr-india-grid">
            {[
              { mineral:"Fe", name:"Iron Ore", states:"Jharkhand, Odisha and Chattisgarh", note:"Chota Nagpur Plateau — India's iron heartland" },
              { mineral:"Al", name:"Bauxite", states:"Jharkhand, Odisha and Chattisgarh", note:"Source of aluminium; same mineral belt as iron" },
              { mineral:"Mi", name:"Mica", states:"Jharkhand, Bihar, Andhra Pradesh", note:"India is the leading producer of mica in the world" },
              { mineral:"Au", name:"Gold", states:"Kolar, Karnataka", note:"Kolar Gold Fields — India's deepest mining region" },
            ].map((item,i) => (
              <div className="mpr-india-card" key={i}>
                <div className="ic-badge">{item.mineral}</div>
                <div>
                  <h4>{item.name}</h4>
                  <p><strong>{item.states}</strong></p>
                  <p>{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="mpr-divider" />

          {/* Uses */}
          <div className="mpr-label gld">Uses of Minerals</div>
          <h2 className="mpr-title">Minerals <span className="gld">in Everyday Life</span></h2>

          <div className="mpr-uses-grid">
            {[
              { icon:"🏗️", name:"Iron & Steel",  desc:"Used in every industry — construction, railways, machinery" },
              { icon:"🔌", name:"Copper",         desc:"Coins to pipes; excellent electrical conductor" },
              { icon:"✈️", name:"Aluminium",      desc:"Automobiles, planes, bottles, buildings, cookware" },
              { icon:"💻", name:"Silicon",        desc:"Computer industry; obtained from quartz mineral" },
              { icon:"💡", name:"Mica",           desc:"Electrical appliances and glass-making industries" },
              { icon:"💎", name:"Hard Minerals",  desc:"Used as gems for making jewellery" },
            ].map((u,i) => (
              <div className="mpr-use-card" key={i}>
                <div className="uc-icon">{u.icon}</div>
                <h4>{u.name}</h4>
                <p>{u.desc}</p>
              </div>
            ))}
          </div>

          {/* Conservation */}
          <div className="mpr-conserve">
            <h3>♻️ Conservation of Minerals</h3>
            <ul>
              <li>Minerals are <strong>non-renewable resources</strong> — they take millions of years to form</li>
              <li>It is necessary to <strong>reduce wastage</strong> in the process of mining</li>
              <li><strong>Recycling of metals</strong> is the most effective way to conserve mineral resources</li>
              <li><strong>Over-exploitation</strong> is harmful for the environment as well as future generations</li>
              <li>Mineral-based industries must use raw materials <strong>efficiently and sustainably</strong></li>
            </ul>
          </div>

          <hr className="mpr-divider" />

          {/* ── POWER RESOURCES ── */}
          <div className="mpr-label sun">Power Resources</div>
          <h2 className="mpr-title">Energy That <span className="sun">Runs the World</span></h2>

          <p style={{fontFamily:"'Poppins',sans-serif", fontSize:"15px", color:"var(--ink2)", lineHeight:"1.7", marginBottom:"24px"}}>
            Power resources are needed across every sector of human activity. Without energy, no economy can function. Power resources are of two broad types — <strong>Conventional</strong> and <strong>Non-conventional</strong>.
          </p>

          <div className="mpr-power-uses">
            {[
              {icon:"🏭", label:"Industry"},
              {icon:"🏠", label:"Domestic"},
              {icon:"🌾", label:"Agriculture"},
              {icon:"🚂", label:"Transport"},
              {icon:"📡", label:"Communication"},
              {icon:"🛡️", label:"Defence"},
            ].map((u,i) => (
              <div className="mpr-pu-box" key={i}>
                <div className="pub-icon">{u.icon}</div>
                <p>{u.label}</p>
              </div>
            ))}
          </div>

          {/* Conventional vs Non-conventional */}
          <div className="mpr-label sil">Energy Types</div>
          <h2 className="mpr-title">Conventional vs <span className="tl">Non-Conventional</span></h2>

          <div className="mpr-power-compare">
            <div className="mpr-pc-col conv">
              <div className="mpr-pc-badge">🔥 Conventional</div>
              <h3>Traditional Sources</h3>
              <ul>
                <li>In <strong>common use for a long time</strong></li>
                <li>Firewood and <strong>fossil fuels</strong></li>
                <li>Coal, petroleum, natural gas, hydro</li>
                <li><strong>Non-renewable</strong> — will eventually run out</li>
                <li>Cause significant <strong>pollution</strong></li>
              </ul>
            </div>
            <div className="mpr-pc-col noncon">
              <div className="mpr-pc-badge">☀️ Non-Conventional</div>
              <h3>Renewable Sources</h3>
              <ul>
                <li><strong>Renewable</strong> — naturally replenished</li>
                <li>Solar, wind, tidal energy</li>
                <li>Environmentally <strong>clean &amp; green</strong></li>
                <li>Currently <strong>more expensive</strong> to set up</li>
                <li>Require <strong>technological upgradation</strong></li>
              </ul>
            </div>
          </div>

          {/* Fossil fuels */}
          <div className="mpr-label sil">Conventional — Fossil Fuels</div>
          <h2 className="mpr-title">The Fossil <span className="sil">Fuel Family</span></h2>

          <div className="mpr-fossil-cards">
            <div className="mpr-fossil-card coal-c">
              <div className="fc-dot">🪨</div>
              <div>
                <div className="fc-nickname">Buried Sunshine</div>
                <h4>Coal</h4>
                <p>Formed from ancient plant matter compressed over millions of years. Nicknamed <strong>"buried sunshine"</strong> because it stores energy originally from the Sun. The backbone of thermal power generation and steel production.</p>
              </div>
            </div>
            <div className="mpr-fossil-card petro">
              <div className="fc-dot">🛢️</div>
              <div>
                <div className="fc-nickname">Black Gold</div>
                <h4>Petroleum</h4>
                <p>A liquid fossil fuel extracted by <strong>drilling deep wells</strong>. Called <strong>"black gold"</strong> for its immense economic value. Used in transport fuels, plastics, and industrial chemicals worldwide.</p>
              </div>
            </div>
            <div className="mpr-fossil-card gas">
              <div className="fc-dot">💨</div>
              <div>
                <h4>Natural Gas</h4>
                <p>A cleaner fossil fuel found alongside petroleum deposits. Used for <strong>heating, cooking, and power generation</strong>. Produces less CO₂ than coal or petroleum when burned.</p>
              </div>
            </div>
            <div className="mpr-fossil-card hydro">
              <div className="fc-dot">💧</div>
              <div>
                <h4>Hydroelectricity</h4>
                <p>Generated from the <strong>kinetic energy of flowing or falling water</strong> through dams and turbines. A <strong>renewable conventional source</strong> — clean, sustainable, and widely used in India and globally.</p>
              </div>
            </div>
          </div>

          {/* Non-conventional */}
          <div className="mpr-label grn">Non-Conventional Sources</div>
          <h2 className="mpr-title">Renewable <span className="grn">Energy Sources</span></h2>

          <div className="mpr-renew-grid">
            <div className="mpr-renew-card solar">
              <div className="rc-icon">☀️</div>
              <h4>Solar Energy</h4>
              <p>Energy harnessed from sunlight using solar panels. <strong>India has great potential</strong> for solar energy due to its tropical location and 300+ sunny days per year. Fastest growing renewable sector.</p>
            </div>
            <div className="mpr-renew-card wind">
              <div className="rc-icon">💨</div>
              <h4>Wind Energy</h4>
              <p>Generated by wind turbines that convert <strong>kinetic energy of moving air</strong> into electricity. India has significant wind corridors, especially along coastlines and in Rajasthan and Tamil Nadu.</p>
            </div>
            <div className="mpr-renew-card tidal">
              <div className="rc-icon">🌊</div>
              <h4>Tidal Energy</h4>
              <p>Harnesses the <strong>energy of ocean tides</strong> to generate electricity. Predictable and consistent source of power, particularly useful for coastal nations. Still being developed at scale.</p>
            </div>
            <div className="mpr-renew-card other">
              <div className="rc-icon">⚡</div>
              <h4>Other Renewables</h4>
              <p>Include <strong>geothermal energy</strong> (Earth's internal heat), <strong>biomass energy</strong> (organic matter), and <strong>wave energy</strong>. All are renewable, clean, and part of the future energy mix.</p>
            </div>
          </div>

          <div className="mpr-solar-india">
            <div className="si-icon">☀️</div>
            <div>
              <h4>India's Solar Energy Potential</h4>
              <p>India is located in the <strong>tropical zone</strong> — receiving abundant sunshine throughout the year. The government has made massive investments in solar farms, and India now ranks among the world's <strong>top solar energy producers</strong>. With technological upgradation, non-conventional sources like solar are becoming increasingly affordable.</p>
            </div>
          </div>

          <hr className="mpr-divider" />

          {/* ── FAQ ── */}
          <div className="mpr-faq-label">Practice Questions</div>
          <h2 className="mpr-faq-title">Frequently Asked Questions</h2>

          {faqs.map((faq, i) => (
            <div className={`faq-item${openIndex === i ? " open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => toggle(i)}>
                <span className="faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="faq-icon">{openIndex === i ? "▴" : "▾"}</span>
              </button>
              <div className={`faq-ans${openIndex === i ? " visible" : ""}`}>
                {faq.a}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
