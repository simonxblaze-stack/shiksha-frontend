import { useState } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap"
    rel="stylesheet"
  />
);

const styles = `
  :root {
    --sec-teal:     #0f766e;
    --sec-teal2:    #0d9488;
    --sec-teal-lt:  #ccfbf1;
    --sec-amber:    #b45309;
    --sec-amber2:   #d97706;
    --sec-amber-lt: #fef3c7;
    --sec-red:      #b91c1c;
    --sec-red-lt:   #fee2e2;
    --sec-blue:     #1e3a8a;
    --sec-blue2:    #1d4ed8;
    --sec-blue-lt:  #dbeafe;
    --sec-ink:      #0e1a2e;
    --sec-ink2:     #1e2d44;
    --sec-muted:    #5a6a82;
    --sec-rule:     #cdd8e8;
    --sec-off:      #f4f7fc;
    --sec-light:    #e8eef7;
    --sec-white:    #ffffff;
    --sec-black:    #060c18;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .sec-root {
    font-family: 'Inter', sans-serif;
    background: var(--sec-off);
    color: var(--sec-ink);
    min-height: 100vh;
  }

  /* ══ HERO ══ */
  .sec-hero {
    background: var(--sec-black);
    min-height: 100vh;
    display: grid; grid-template-rows: auto 1fr auto;
    position: relative; overflow: hidden; width: 100%;
  }
  .sec-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      -52deg, transparent, transparent 44px,
      rgba(255,255,255,0.013) 44px, rgba(255,255,255,0.013) 45px
    );
    pointer-events: none;
  }
  .sec-hero-glow {
    position: absolute; top: -80px; right: -80px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(15,118,110,0.22) 0%, transparent 68%);
    pointer-events: none;
  }
  .sec-hero-nav {
    display: flex; align-items: center; justify-content: flex-end;
    padding: 28px 52px 0; position: relative; z-index: 2;
  }
  .sec-hero-nav-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #5eead4; border: 1px solid #5eead4; padding: 4px 12px;
  }
  .sec-hero-center {
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 52px; position: relative; z-index: 2; min-width: 0;
  }
  .sec-hero-eyebrow {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: #5eead4; margin-bottom: 28px;
  }
  .sec-hero-h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 7.5vw, 108px);
    font-weight: 900; line-height: 0.88; letter-spacing: -0.04em;
    color: #fff; margin-bottom: 40px;
  }
  .sec-hero-h1 .tl { color: #5eead4; }
  .sec-hero-h1 .am { color: #fcd34d; }
  .sec-hero-deck {
    max-width: 580px; font-family: 'Inter', sans-serif;
    font-size: 18px; font-weight: 400; line-height: 1.72;
    color: rgba(255,255,255,0.50);
    border-left: 3px solid #5eead4; padding-left: 20px; margin-bottom: 52px;
  }
  .sec-hero-deck strong { color: rgba(255,255,255,0.80); font-weight: 500; }
  .sec-hero-stats {
    display: flex; gap: 0;
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .sec-hero-stat {
    flex: 1; padding: 22px 28px;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .sec-hero-stat:last-child { border-right: none; }
  .sec-hero-stat-val {
    font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: 900;
    color: #fff; letter-spacing: -0.03em; line-height: 1; margin-bottom: 6px;
  }
  .sec-hero-stat-val span { color: #5eead4; }
  .sec-hero-stat-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.28);
  }
  .sec-hero-bottom {
    padding: 22px 52px; display: flex; align-items: center; gap: 32px; flex-wrap: wrap;
    border-top: 1px solid rgba(255,255,255,0.06); position: relative; z-index: 2;
  }
  .sec-hero-bottom-item {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.25);
    display: flex; align-items: center; gap: 8px;
  }
  .sec-hero-bottom-item::before {
    content: ''; width: 4px; height: 4px;
    border-radius: 50%; background: #5eead4; flex-shrink: 0;
  }

  /* ══ BODY ══ */
  .sec-body { max-width: 920px; margin: 0 auto; padding: 80px 32px 100px; }

  /* ── Running label ── */
  .sec-run-label {
    display: flex; align-items: center; gap: 0;
    margin-bottom: 44px; border-top: 3px solid var(--sec-ink); padding-top: 14px;
  }
  .sec-run-num {
    font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 900;
    letter-spacing: 0.18em; color: #fff; background: var(--sec-ink);
    padding: 4px 10px; margin-right: 16px;
  }
  .sec-run-title {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase; color: var(--sec-muted); flex: 1;
  }
  .sec-run-topic {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--sec-teal2);
  }

  /* ── Section H2 ── */
  .sec-sec-h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(28px, 4.5vw, 48px); font-weight: 900;
    line-height: 1.0; letter-spacing: -0.03em; color: var(--sec-ink); margin-bottom: 24px;
  }
  .sec-sec-h2 em  { font-style: normal; color: var(--sec-teal2); }
  .sec-sec-h2 .r  { color: var(--sec-red); }
  .sec-sec-h2 .a  { color: var(--sec-amber2); }
  .sec-sec-h2 .b  { color: var(--sec-blue2); }

  /* ── Prose ── */
  .sec-prose {
    font-family: 'Inter', sans-serif; font-size: 17px; color: var(--sec-ink2);
    line-height: 1.82; margin-bottom: 28px;
  }
  .sec-prose strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--sec-ink); }

  /* ── Section break ── */
  .sec-break {
    display: flex; align-items: center; gap: 0; margin: 60px 0;
  }
  .sec-break-line { flex: 1; height: 1px; background: var(--sec-rule); }
  .sec-break-pill {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--sec-muted); background: var(--sec-light);
    padding: 5px 16px; margin: 0 16px;
  }

  /* ── Why Separate grid ── */
  .sec-why-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: var(--sec-rule); margin-bottom: 52px;
  }
  @media (max-width: 600px) { .sec-why-grid { grid-template-columns: 1fr; } }
  .sec-why-card {
    background: var(--sec-white); padding: 28px 28px;
    position: relative; overflow: hidden;
  }
  .sec-why-card::before {
    content: attr(data-n);
    position: absolute; bottom: -10px; right: -2px;
    font-family: 'Montserrat', sans-serif; font-size: 88px; font-weight: 900;
    color: rgba(0,0,0,0.035); line-height: 1; pointer-events: none; user-select: none;
  }
  .sec-why-card:nth-child(1) { background: var(--sec-teal); }
  .sec-why-card:nth-child(2) { background: var(--sec-blue); }
  .sec-why-icon { font-size: 26px; margin-bottom: 14px; }
  .sec-why-head {
    font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 900;
    margin-bottom: 10px; letter-spacing: -0.01em; line-height: 1.2;
  }
  .sec-why-card:nth-child(1) .sec-why-head,
  .sec-why-card:nth-child(2) .sec-why-head { color: #fff; }
  .sec-why-card:not(:nth-child(1)):not(:nth-child(2)) .sec-why-head { color: var(--sec-ink); }
  .sec-why-body { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.70; }
  .sec-why-card:nth-child(1) .sec-why-body,
  .sec-why-card:nth-child(2) .sec-why-body { color: rgba(255,255,255,0.65); }
  .sec-why-card:not(:nth-child(1)):not(:nth-child(2)) .sec-why-body { color: var(--sec-muted); }

  /* ── What is Indian Secularism — table ── */
  .sec-what-table {
    background: var(--sec-white); border: 1px solid var(--sec-rule);
    margin-bottom: 52px; overflow: hidden;
  }
  .sec-what-head {
    background: var(--sec-teal); color: #fff;
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
    padding: 14px 24px; letter-spacing: 0.04em;
    display: flex; align-items: center; gap: 10px;
  }
  .sec-what-row {
    display: grid; grid-template-columns: 48px 1fr;
    border-bottom: 1px solid var(--sec-light);
  }
  .sec-what-row:last-child { border-bottom: none; }
  .sec-what-num {
    padding: 18px 12px; background: var(--sec-off);
    border-right: 1px solid var(--sec-rule);
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: var(--sec-teal2);
    display: flex; align-items: center; justify-content: center;
  }
  .sec-what-content { padding: 16px 22px; }
  .sec-what-label {
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
    color: var(--sec-ink); margin-bottom: 4px;
  }
  .sec-what-desc {
    font-family: 'Inter', sans-serif; font-size: 13px;
    color: var(--sec-muted); line-height: 1.65;
  }
  .sec-what-desc strong { color: var(--sec-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── USA vs India compare ── */
  .sec-compare {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; border: 1px solid var(--sec-rule); background: var(--sec-white); margin-bottom: 52px;
  }
  @media (max-width: 600px) { .sec-compare { grid-template-columns: 1fr; } }
  .sec-cmp-col { padding: 30px 28px; }
  .sec-cmp-col:last-child { border-left: 1px solid var(--sec-rule); }
  @media (max-width: 600px) { .sec-cmp-col:last-child { border-left: none; border-top: 1px solid var(--sec-rule); } }
  .sec-cmp-badge {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 4px 12px; margin-bottom: 14px; display: inline-block;
  }
  .sec-cmp-col:first-child .sec-cmp-badge { background: var(--sec-blue-lt); color: var(--sec-blue); }
  .sec-cmp-col:last-child  .sec-cmp-badge { background: var(--sec-teal-lt); color: var(--sec-teal); }
  .sec-cmp-flag { font-size: 32px; margin-bottom: 10px; }
  .sec-cmp-head {
    font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 900;
    color: var(--sec-ink); margin-bottom: 18px; letter-spacing: -0.01em; line-height: 1.2;
  }
  .sec-cmp-col ul { list-style: none; padding: 0; margin: 0; }
  .sec-cmp-col ul li {
    font-family: 'Inter', sans-serif; font-size: 14px; color: var(--sec-ink2);
    line-height: 1.65; padding: 9px 0 9px 20px; position: relative;
    border-bottom: 1px solid var(--sec-light);
  }
  .sec-cmp-col ul li:last-child { border-bottom: none; }
  .sec-cmp-col ul li::before {
    content: ''; position: absolute; left: 0; top: 18px;
    width: 7px; height: 7px; border-radius: 50%;
  }
  .sec-cmp-col:first-child ul li::before { background: var(--sec-blue2); }
  .sec-cmp-col:last-child  ul li::before { background: var(--sec-teal2); }
  .sec-cmp-col ul li strong { font-family: 'Poppins', sans-serif; font-weight: 700; }
  .sec-cmp-col:first-child ul li strong { color: var(--sec-blue2); }
  .sec-cmp-col:last-child  ul li strong  { color: var(--sec-teal2); }

  /* ── Example callout block ── */
  .sec-example-block {
    background: var(--sec-white); border: 1px solid var(--sec-rule);
    margin-bottom: 52px; overflow: hidden;
  }
  .sec-ex-head {
    background: var(--sec-ink); padding: 18px 26px;
    display: flex; align-items: center; gap: 14px;
  }
  .sec-ex-head-icon { font-size: 26px; }
  .sec-ex-head-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 2px;
  }
  .sec-ex-head-title {
    font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 900;
    color: #fff; letter-spacing: -0.015em;
  }
  .sec-ex-body { padding: 22px 26px; }
  .sec-ex-row {
    display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px;
  }
  .sec-ex-row:last-child { margin: 0; }
  .sec-ex-key {
    font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    padding: 3px 10px; background: var(--sec-off);
    border: 1px solid var(--sec-rule); color: var(--sec-muted);
    white-space: nowrap; flex-shrink: 0;
  }
  .sec-ex-val {
    font-family: 'Inter', sans-serif; font-size: 14px; color: var(--sec-ink2); line-height: 1.65;
  }
  .sec-ex-val strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--sec-ink); }

  /* ── Editorial quote ── */
  .sec-editorial {
    padding: 48px 0; margin-bottom: 52px;
    border-top: 3px solid var(--sec-ink); border-bottom: 1px solid var(--sec-rule);
  }
  .sec-editorial-q {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(20px, 3vw, 32px); font-weight: 900; line-height: 1.22;
    letter-spacing: -0.02em; color: var(--sec-ink); margin-bottom: 18px;
  }
  .sec-editorial-q em { font-style: normal; color: var(--sec-teal2); }
  .sec-editorial-attr { font-family: 'Inter', sans-serif; font-size: 13px; color: var(--sec-muted); }

  /* ── Timeline block ── */
  .sec-tl-block { margin-bottom: 52px; }
  .sec-tl-header {
    padding: 26px 32px; background: var(--sec-teal);
    display: flex; align-items: flex-start; justify-content: space-between; gap: 20px;
  }
  .sec-tl-header-text { flex: 1; }
  .sec-tl-header-label {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 6px;
  }
  .sec-tl-header-title {
    font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 900;
    color: #fff; letter-spacing: -0.02em; line-height: 1.15;
  }
  .sec-tl-header-sub { margin-top: 6px; font-family: 'Inter', sans-serif; font-size: 14px; color: rgba(255,255,255,0.5); }
  .sec-tl-header-icon { font-size: 44px; line-height: 1; flex-shrink: 0; }
  .sec-tl-body { border: 1px solid var(--sec-rule); border-top: none; background: var(--sec-white); }
  .sec-tl-row {
    display: grid; grid-template-columns: 100px 1fr; border-bottom: 1px solid var(--sec-light);
  }
  .sec-tl-row:last-child { border-bottom: none; }
  .sec-tl-label {
    background: var(--sec-off); padding: 18px 10px;
    font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 900;
    display: flex; align-items: flex-start; justify-content: center;
    color: var(--sec-teal2); line-height: 1.3; text-align: center; padding-top: 20px;
  }
  .sec-tl-content { padding: 18px 24px; }
  .sec-tl-content-head {
    font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; color: var(--sec-ink); margin-bottom: 5px;
  }
  .sec-tl-content-body { font-family: 'Inter', sans-serif; font-size: 14px; color: var(--sec-muted); line-height: 1.65; }
  .sec-tl-content-body strong { color: var(--sec-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }

  /* ── FAQ ── */
  .sec-faq-intro { display: flex; align-items: center; gap: 16px; margin-bottom: 12px; }
  .sec-faq-intro-line { flex: 1; height: 1px; background: var(--sec-rule); }
  .sec-faq-intro-tag {
    font-family: 'Poppins', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--sec-teal2); background: var(--sec-teal-lt); padding: 5px 14px;
  }
  .sec-faq-h2 {
    font-family: 'Montserrat', sans-serif; font-size: 34px; font-weight: 900;
    color: var(--sec-ink); letter-spacing: -0.025em; margin-bottom: 30px;
  }
  .sec-faq-item { border-bottom: 1px solid var(--sec-rule); }
  .sec-faq-item:first-of-type { border-top: 1px solid var(--sec-rule); }
  .sec-faq-q {
    width: 100%; display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;
    padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left;
  }
  .sec-faq-q-text {
    font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600;
    color: var(--sec-ink2); line-height: 1.45; flex: 1;
  }
  .sec-faq-item.open .sec-faq-q-text { color: var(--sec-teal2); }
  .sec-faq-icon { font-size: 18px; color: var(--sec-teal2); flex-shrink: 0; margin-top: 2px; }
  .sec-faq-ans { max-height: 0; overflow: hidden; transition: max-height 0.32s ease; }
  .sec-faq-ans.open { max-height: 1200px; }
  .sec-faq-ans-inner {
    padding-bottom: 22px; font-family: 'Inter', sans-serif; font-size: 15px;
    color: var(--sec-muted); line-height: 1.78;
  }
  .sec-faq-ans-inner strong { color: var(--sec-ink2); font-family: 'Poppins', sans-serif; font-weight: 600; }
  .sec-faq-ans-inner ul { padding-left: 20px; margin: 10px 0; }
  .sec-faq-ans-inner ul li { margin-bottom: 8px; line-height: 1.65; }

  /* Responsive */
  @media (max-width: 900px) {
    .sec-hero-nav { padding: 22px 28px 0; }
    .sec-hero-center { padding: 36px 28px 0; }
    .sec-hero-bottom { padding: 18px 28px; gap: 18px; }
  }
  @media (max-width: 680px) {
    .sec-hero { min-height: auto; }
    .sec-hero-nav { padding: 16px 18px 0; justify-content: flex-start; }
    .sec-hero-center { padding: 28px 18px 0; }
    .sec-hero-h1 { font-size: clamp(36px,11vw,62px); letter-spacing:-0.03em; margin-bottom:20px; }
    .sec-hero-deck { font-size:14px; margin-bottom:28px; max-width:100%; }
    .sec-hero-stats { flex-wrap: wrap; }
    .sec-hero-stat { flex: 1 1 calc(50% - 1px); padding: 14px 14px; }
    .sec-hero-stat:nth-child(2n) { border-right: none; }
    .sec-hero-stat:nth-child(n+3) { border-top: 1px solid rgba(255,255,255,0.06); }
    .sec-hero-stat-val { font-size: 22px; }
    .sec-hero-bottom { padding: 12px 18px; gap: 8px; }
    .sec-body { padding: 52px 18px 72px; }
    .sec-tl-row { grid-template-columns: 72px 1fr; }
    .sec-tl-header { padding: 20px 20px; }
    .sec-tl-header-icon { font-size: 32px; }
  }
  @media (max-width: 400px) {
    .sec-hero-h1 { font-size: clamp(30px, 10vw, 48px); }
    .sec-hero-stat { flex: 1 1 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
  }
`;

const faqs = [
  {
    q: "What is secularism? Why does India need it?",
    a: <><strong>Secularism</strong> refers to the separation of religion from the state. India needs it because history is full of discrimination, persecution, and torture based on religion. In a civilized democracy, no person should face discrimination because of their faith. India adopted secularism to ensure that <strong>no one religion dominates others</strong>, that individuals have freedom to follow their faith, and that the government remains neutral between all religions.</>
  },
  {
    q: "Why is it important to separate religion from the state?",
    a: <><ul>
      <li><strong>For proper functioning of democracy</strong> — a democracy cannot function if state power is aligned with one religion</li>
      <li><strong>To prevent domination</strong> — it prohibits one religion from dominating others</li>
      <li><strong>To protect individual freedom</strong> — people must be free to exit their religion, embrace another, or interpret religious teachings differently</li>
      <li>Without this separation, minorities face discrimination and the state becomes an instrument of religious oppression</li>
    </ul></>
  },
  {
    q: "What are the key features of the Indian secular state?",
    a: <><ul>
      <li>One religious community <strong>does not dominate another</strong></li>
      <li>Some members do not dominate <strong>other members of the same religious community</strong></li>
      <li>The state does <strong>not enforce any particular religion</strong> nor take away religious freedom</li>
      <li><strong>Government schools cannot promote</strong> any one religion</li>
      <li>The state makes <strong>exceptions for religious communities</strong> to respect their practices (e.g. Sikhs and turbans)</li>
      <li>The Constitution <strong>bans untouchability</strong> to prevent religion-based caste discrimination</li>
    </ul></>
  },
  {
    q: "How is Indian secularism different from American secularism?",
    a: <><strong>American Secularism (1st Amendment):</strong> The legislature cannot make laws establishing a religion. Separation is strict — <strong>neither the state nor religion can interfere in each other's affairs</strong>. The state completely stays out of religious matters.

    <br /><br /><strong>Indian Secularism:</strong> Unlike the USA, the <strong>Indian state can interfere in religion</strong> if it is necessary to uphold constitutional values — for example, banning untouchability (a religiously-sanctioned practice) is legal in India. India practices <strong>"principled distance"</strong> — the state maintains equal respect for all religions and can intervene to remove social evils or protect minority rights, but does not promote any religion.</>
  },
  {
    q: "Give examples of how the Indian state practises secularism.",
    a: <><ul>
      <li><strong>Turban exception:</strong> Sikhs are allowed to wear a turban instead of a helmet while riding a two-wheeler — the state accommodates their religious practice</li>
      <li><strong>Ban on untouchability:</strong> Despite being a religious practice in some communities, untouchability is banned by law — the state intervenes to end caste-based discrimination</li>
      <li><strong>No religious instruction in state schools</strong> — government schools cannot promote any one religion</li>
      <li><strong>Minority educational rights:</strong> Religious minorities can establish and run their own schools</li>
      <li><strong>Equal treatment of all festivals</strong> as public holidays across religions</li>
    </ul></>
  },
  {
    q: "Can the state intervene in religious matters in India?",
    a: <>Yes — but only in specific circumstances. Unlike the strict US model, the <strong>Indian state can intervene in religion</strong> when:
      <ul>
        <li>Religious practices violate <strong>constitutional values</strong> (like equality and dignity)</li>
        <li>It is necessary to <strong>end social evils</strong> — like untouchability or gender discrimination within religious communities</li>
        <li>Intervention is needed to <strong>protect minorities</strong> from domination by a majority religious group</li>
      </ul>
      This does not mean India is anti-religious. The state treats all religions with equal respect while reserving the right to protect individual rights against religion-based oppression.</>
  },
  {
    q: "What does secularism protect individuals FROM?",
    a: <>Secularism protects individuals from:
      <ul>
        <li><strong>Inter-religious domination</strong> — one religion dominating others in a multi-religious society</li>
        <li><strong>Intra-religious domination</strong> — powerful members of a religious community oppressing others within it (e.g. caste discrimination)</li>
        <li><strong>State-imposed religion</strong> — the government forcing citizens to follow a particular religion</li>
        <li><strong>Discrimination based on faith</strong> — being denied rights or opportunities because of one's religion</li>
        <li>It also protects the freedom to <strong>leave or change one's religion</strong>, and to interpret religious teachings differently</li>
      </ul></>
  },
  {
    q: "What is the role of secularism in preventing historical injustices?",
    a: <>Throughout history, religion has been used to justify discrimination, exclusion, persecution, and even torture. Secularism emerged as a response to these injustices:
      <ul>
        <li>In India, the <strong>caste system</strong> used religious justification to oppress Dalits for centuries — secularism and the ban on untouchability address this</li>
        <li>Partition's communal violence showed what happens when religion and state power mix — secularism is India's safeguard against this</li>
        <li>Minority communities — Muslims, Christians, Sikhs, Parsis — are protected by the secular state from majority religious pressure</li>
      </ul>
      Secularism is not just a legal principle — it is India's <strong>answer to its most painful historical wounds</strong>.</>
  },
];

export default function UnderstandingSecularism() {
  const [openIdx, setOpenIdx] = useState(null);
  const tog = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <>
      <FontLink />
      <style>{styles}</style>
      <div className="sec-root">

        {/* ══ HERO ══ */}
        <div className="sec-hero">
          <div className="sec-hero-glow" />
          <div className="sec-hero-nav">
            <div className="sec-hero-nav-tag">Political Science · Class 8 · Ch 02</div>
          </div>
          <div className="sec-hero-center">
            <div className="sec-hero-eyebrow">Chapter 02 · Social &amp; Political Life</div>
            <h1 className="sec-hero-h1">
              Under<span className="tl">standing</span><br />
              Secu<span className="am">larism</span>
            </h1>
            <div className="sec-hero-deck">
              <strong>Separation of religion from the state</strong> — India's answer to centuries of faith-based discrimination, domination, and exclusion. How does a nation of a billion believers remain free, equal, and fair to all?
            </div>
            <div className="sec-hero-stats">
              <div className="sec-hero-stat">
                <div className="sec-hero-stat-val"><span>3</span></div>
                <div className="sec-hero-stat-label">Reasons to separate religion from state</div>
              </div>
              <div className="sec-hero-stat">
                <div className="sec-hero-stat-val"><span>2</span></div>
                <div className="sec-hero-stat-label">Dominations secularism prevents</div>
              </div>
              <div className="sec-hero-stat">
                <div className="sec-hero-stat-val">IN<span> vs</span> US</div>
                <div className="sec-hero-stat-label">Two models of secularism</div>
              </div>
              <div className="sec-hero-stat">
                <div className="sec-hero-stat-val"><span>1</span>st</div>
                <div className="sec-hero-stat-label">US Amendment — basis of US secularism</div>
              </div>
            </div>
          </div>
          <div className="sec-hero-bottom">
            <div className="sec-hero-bottom-item">Separation of Religion &amp; State</div>
            <div className="sec-hero-bottom-item">No Dominant Religion</div>
            <div className="sec-hero-bottom-item">India vs USA Secularism</div>
            <div className="sec-hero-bottom-item">Ban on Untouchability</div>
          </div>
        </div>

        {/* ══ BODY ══ */}
        <div className="sec-body">

          {/* ── SECTION 1 ── */}
          <div className="sec-run-label">
            <div className="sec-run-num">01</div>
            <div className="sec-run-title">The Problem</div>
            <div className="sec-run-topic">Why Religion &amp; State Must Separate</div>
          </div>
          <h2 className="sec-sec-h2">Religion in History — A Story of <span className="r">Discrimination</span></h2>
          <p className="sec-prose">
            History is filled with instances of <strong>discrimination, exclusion, persecution and torture</strong> carried out in the name of religion. In a civilised world, no one wishes for such discrimination. This is why the Indian Constitution speaks about values like <strong>Secularism</strong> — a principle that protects every citizen, of every faith, from being dominated, excluded, or harmed because of their religion.
          </p>
          <p className="sec-prose">
            Secularism refers specifically to the <strong>separation of religion from the state</strong>. The Indian Constitution allows individuals the freedom to live by their religious beliefs and practices — but the government itself must remain neutral. India adopted a strategy of <strong>separating the power of religion from the power of the state</strong>.
          </p>

          {/* Why separate — grid */}
          <div className="sec-why-grid">
            {[
              { n:"I",   icon:"🏛️", head:"For Democracy to Function",     body:"Democracy requires that all citizens are equal — regardless of their religion. If the state favours one religion, citizens of other faiths become second-class in their own country." },
              { n:"II",  icon:"⚖️", head:"Prevent One Religion Dominating", body:"Without separation, the majority religion can use state power against minorities. Secularism prohibits this domination — protecting Muslims, Christians, Sikhs, and all minority faiths." },
              { n:"III", icon:"🕊️", head:"Protect Individual Religious Freedom", body:"Every person has the right to follow, leave, change, or interpret their religion as they choose. Secularism protects this freedom — even from one's own religious community." },
              { n:"IV",  icon:"🚫", head:"Prevent State-Imposed Religion",  body:"Without secularism, a government could force all citizens to follow one religion, fund only religious institutions of one faith, or teach only one religion in schools. All of this is prohibited." },
            ].map((c) => (
              <div className="sec-why-card" data-n={c.n} key={c.n}>
                <div className="sec-why-icon">{c.icon}</div>
                <div className="sec-why-head">{c.head}</div>
                <div className="sec-why-body">{c.body}</div>
              </div>
            ))}
          </div>

          {/* ── SECTION 2 ── */}
          <div className="sec-break">
            <div className="sec-break-line" />
            <div className="sec-break-pill">Indian Secularism</div>
            <div className="sec-break-line" />
          </div>
          <div className="sec-run-label">
            <div className="sec-run-num">02</div>
            <div className="sec-run-title">The Indian Model</div>
            <div className="sec-run-topic">What Indian Secularism Actually Means</div>
          </div>
          <h2 className="sec-sec-h2">What Is <em>Indian Secularism</em>?</h2>
          <p className="sec-prose">
            The Indian Constitution mandates that India be a <strong>secular state</strong>. But Indian secularism is not simply the absence of religion in public life — it is an active, principled commitment to equal respect for all religions, and to protecting individuals from religion-based domination.
          </p>

          <div className="sec-what-table">
            <div className="sec-what-head">🕌 Core Principles of Indian Secularism</div>
            {[
              { label:"No Inter-Religious Domination",    desc:"One religious community does not dominate another. No single religion — however large its following — has the power to impose its values on others through the state." },
              { label:"No Intra-Religious Domination",    desc:<>Even within a single religion, <strong>powerful members cannot dominate others</strong>. Caste-based oppression within Hinduism is a key example — the Constitution bans it.</> },
              { label:"No State-Enforced Religion",       desc:"The state does not enforce any particular religion, nor can it take away the religious freedom of individuals. Citizens are free to follow — or not follow — any faith." },
              { label:"No Religious Promotion in Schools",desc:"Government schools cannot promote any one religion. Education must be secular, open, and free from religious imposition." },
              { label:"Exceptions for Religious Practice",desc:<>To respect religious sentiments, the state makes exceptions for specific communities. <strong>Example:</strong> Sikhs wear a 'pugri' (turban) as a religious practice and are exempt from wearing helmets while riding two-wheelers.</> },
              { label:"Banning Untouchability",           desc:"To prevent religion-based exclusion and discrimination of lower castes, the Indian Constitution bans untouchability — one of secularism's most concrete interventions." },
              { label:"State Can Intervene in Religion",  desc:<>Unlike the US model, <strong>India allows state intervention in religion</strong> when necessary to uphold constitutional values — like ending untouchability or protecting minority rights.</> },
            ].map((r, i) => (
              <div className="sec-what-row" key={i}>
                <div className="sec-what-num">{i + 1}</div>
                <div className="sec-what-content">
                  <div className="sec-what-label">{r.label}</div>
                  <div className="sec-what-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Examples */}
          <div className="sec-example-block">
            <div className="sec-ex-head">
              <div className="sec-ex-head-icon">💡</div>
              <div>
                <div className="sec-ex-head-label">Real-World Examples</div>
                <div className="sec-ex-head-title">How Indian Secularism Works in Practice</div>
              </div>
            </div>
            <div className="sec-ex-body">
              {[
                ["Turban Exemption", "Sikhs are exempt from wearing helmets on two-wheelers — the state accommodates their religious practice of wearing a 'pugri'. This shows the state making space for religious identity."],
                ["Ban on Untouchability", "Untouchability — rooted in caste hierarchy justified by religion — is banned under Article 17. The state intervenes in religion-based social order to protect dignity and equality."],
                ["No Religion in State Schools", "Government-funded schools cannot give religious instruction or promote any one faith. All children, regardless of religion, must receive a neutral, equal education."],
                ["Minority Schools Protected", "Religious minorities have the constitutional right to establish and run their own educational institutions — protecting their ability to pass on their culture and faith."],
                ["Uniform Civil Code Debate", "India has different personal laws for different religious communities (Hindu, Muslim, Christian) — showing how the state navigates religious diversity without imposing uniformity."],
              ].map(([key, val]) => (
                <div className="sec-ex-row" key={key}>
                  <div className="sec-ex-key">{key}</div>
                  <div className="sec-ex-val">{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: India vs USA ── */}
          <div className="sec-break">
            <div className="sec-break-line" />
            <div className="sec-break-pill">Two Models</div>
            <div className="sec-break-line" />
          </div>
          <div className="sec-run-label">
            <div className="sec-run-num">03</div>
            <div className="sec-run-title">Comparative Study</div>
            <div className="sec-run-topic">Indian vs American Secularism</div>
          </div>
          <h2 className="sec-sec-h2"><em>India</em> vs <span className="b">USA</span> — Two Paths to Secularism</h2>
          <p className="sec-prose">
            Both India and the USA are secular democracies — but their models of secularism are significantly different. The <strong>First Amendment of the US Constitution</strong> prohibits the legislature from making laws "respecting an establishment of religion" or prohibiting the free exercise of religion. This means the legislature cannot declare any religion as the official religion. But the two countries diverge sharply on <strong>whether the state can intervene in religious affairs</strong>.
          </p>

          <div className="sec-compare">
            <div className="sec-cmp-col">
              <div className="sec-cmp-badge">🇺🇸 USA Model</div>
              <div className="sec-cmp-flag">🇺🇸</div>
              <div className="sec-cmp-head">Strict Separation</div>
              <ul>
                <li><strong>1st Amendment</strong> — no law can establish or prohibit religion</li>
                <li>State and religion operate in <strong>completely separate spheres</strong></li>
                <li>Neither can <strong>interfere in affairs</strong> of the other</li>
                <li>State stays <strong>completely out</strong> of religious matters</li>
                <li>Religion cannot influence <strong>state legislation</strong></li>
              </ul>
            </div>
            <div className="sec-cmp-col">
              <div className="sec-cmp-badge">🇮🇳 India Model</div>
              <div className="sec-cmp-flag">🇮🇳</div>
              <div className="sec-cmp-head">Principled Distance</div>
              <ul>
                <li>State maintains <strong>equal respect</strong> for all religions</li>
                <li>State <strong>can intervene</strong> in religious matters when needed</li>
                <li>To uphold <strong>constitutional ideals</strong> — e.g. ban on untouchability</li>
                <li>Can make <strong>exceptions</strong> to accommodate religious practices</li>
                <li>Actively works to <strong>prevent religious domination</strong> of minorities</li>
              </ul>
            </div>
          </div>

          <div className="sec-editorial">
            <div className="sec-editorial-q">
              "The Indian state does not keep religion at arm's length — it keeps <em>equal distance from all religions</em>, stepping in only to protect the weak and uphold the Constitution."
            </div>
            <div className="sec-editorial-attr">— The key distinction of Indian secularism versus Western models</div>
          </div>

          {/* ── FAQ ── */}
          <div className="sec-break">
            <div className="sec-break-line" />
            <div className="sec-break-pill">Exam Prep</div>
            <div className="sec-break-line" />
          </div>
          <div className="sec-faq-intro">
            <div className="sec-faq-intro-line" />
            <div className="sec-faq-intro-tag">Frequently Asked Questions</div>
            <div className="sec-faq-intro-line" />
          </div>
          <h2 className="sec-faq-h2">All You Need to Know</h2>
          {faqs.map((faq, i) => (
            <div className={`sec-faq-item${openIdx === i ? " open" : ""}`} key={i}>
              <button className="sec-faq-q" onClick={() => tog(i)}>
                <span className="sec-faq-q-text">Q{i + 1}. {faq.q}</span>
                <span className="sec-faq-icon">{openIdx === i ? "▴" : "▾"}</span>
              </button>
              <div className={`sec-faq-ans${openIdx === i ? " open" : ""}`}>
                <div className="sec-faq-ans-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
