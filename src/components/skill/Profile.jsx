/* Profile.jsx — single teacher profile + contact modal (message / session / video). */
import React, { useState, useRef, useEffect } from "react";
import { Icon } from "./icons";
import { SKILL_CATEGORIES } from "./data";
import { Field, FormRow } from "./ui";

export default function Profile({ t, nav, openContact }) {
  const cat = SKILL_CATEGORIES.find(s => s.id === t.cat) || SKILL_CATEGORIES[0];
  return (
    <div className="sd-screen" style={{ background: "var(--c-cream-2)", minHeight: 560 }}>
      <div style={{ padding: "30px 48px 60px", maxWidth: 1080, margin: "0 auto" }}>
        <button onClick={() => nav("discovery")} className="sd-btn sd-btn-ghost" style={{ padding: "6px 12px", fontSize: 12, marginBottom: 18 }}>
          <Icon.back size={14} /> Back to teachers
        </button>

        <div style={{ background: "#fff", border: "1px solid var(--c-border)", borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "300px 1fr", boxShadow: "0 10px 32px rgba(18,80,39,.08)" }}>
          <div style={{ position: "relative", background: "var(--c-forest-dk)" }}>
            <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", left: 12, bottom: 12, background: cat.color, color: "#fff", padding: "5px 12px", borderRadius: 100, fontSize: 11.5, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
              <span>{cat.icon}</span> {cat.label}
            </div>
          </div>
          <div style={{ padding: 30, display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div style={{ fontSize: 11.5, color: "var(--c-orange)", fontWeight: 700, letterSpacing: ".5px", textTransform: "uppercase" }}>Guest teacher</div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "var(--c-forest)", letterSpacing: "-1px", marginTop: 4 }}>{t.name}</h2>
              <p style={{ fontSize: 14, color: "var(--c-ink-soft)", marginTop: 4 }}>{t.title}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {t.skills.map(s => (
                <span key={s} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 100, background: "rgba(18,80,39,.07)", color: "var(--c-forest)", fontWeight: 600 }}>{s}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 22, padding: "14px 0", borderTop: "1px solid var(--c-border)", borderBottom: "1px solid var(--c-border)" }}>
              <Stat label="Rating" value={<><Icon.star size={13} /> {t.rating}</>} />
              <Stat label="Sessions" value={t.sessions} />
              <Stat label="Rate" value={`₹${t.rate}`} sub="per session" />
              <Stat label="Available" value={t.availability} small />
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button onClick={openContact} className="sd-btn sd-btn-primary"><Icon.msg size={14} /> Contact teacher</button>
              <button className="sd-btn sd-btn-ghost"><Icon.cal size={14} /> Save for later</button>
              {t.badges.includes("Verified") && (
                <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--c-forest-mid)", fontWeight: 600 }}>
                  <Icon.shield size={13} /> ID-verified
                </span>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 18, marginTop: 18 }}>
          <div style={{ background: "#fff", border: "1px solid var(--c-border)", borderRadius: 16, padding: 26 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "var(--c-forest)", letterSpacing: ".3px", textTransform: "uppercase", marginBottom: 12 }}>About</h3>
            <p style={{ fontSize: 14, color: "var(--c-ink)", lineHeight: 1.7 }}>{t.bio}</p>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "var(--c-forest)", letterSpacing: ".3px", textTransform: "uppercase", marginTop: 24, marginBottom: 12 }}>What sessions look like</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["60-min one-on-one sessions over video or in person.", "First session is a free 15-min intro — see if we click.", "I'll share a personalised plan after our intro call.", "Reschedule any time up to 12 hours before the session."].map((l, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, color: "var(--c-ink-soft)" }}>
                  <span style={{ color: "var(--c-forest-mid)", marginTop: 2 }}><Icon.check size={14} /></span><span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "var(--c-forest-dk)", borderRadius: 16, padding: 22, color: "#fff" }}>
              <div style={{ fontSize: 11, opacity: .65, letterSpacing: ".5px", textTransform: "uppercase" }}>Ready?</div>
              <div style={{ fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 800, marginTop: 4 }}>Reach out to {t.name.split(" ")[0]} directly</div>
              <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", marginTop: 6, lineHeight: 1.55 }}>Send a message, request a session, or jump on a quick video call.</p>
              <button onClick={openContact} className="sd-btn sd-btn-accent" style={{ marginTop: 14, width: "100%", justifyContent: "center" }}><Icon.msg size={14} /> Open contact</button>
            </div>
            <div style={{ background: "#fff", border: "1px solid var(--c-border)", borderRadius: 16, padding: 22 }}>
              <h3 style={{ fontSize: 13, fontWeight: 800, color: "var(--c-forest)", letterSpacing: ".3px", textTransform: "uppercase", marginBottom: 10 }}>Recent reviews</h3>
              {[{ name: "Ruati", text: "Patient, structured, didn't make me feel stupid for asking basic things.", rating: 5 },
                { name: "Andrew", text: "Honest feedback on my work. Wish I started sessions sooner.", rating: 5 }].map((r, i) => (
                <div key={i} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? "none" : "1px solid var(--c-border)", marginTop: i === 0 ? 0 : 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--c-forest)" }}>{r.name}</div>
                    <div style={{ color: "var(--c-orange)", display: "inline-flex", gap: 1 }}>
                      {Array.from({ length: r.rating }).map((_, j) => <Icon.star key={j} size={11} />)}
                    </div>
                  </div>
                  <p style={{ fontSize: 12.5, color: "var(--c-ink-soft)", lineHeight: 1.5 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, sub, small }) {
  return (
    <div>
      <div style={{ fontSize: 10.5, color: "var(--c-ink-soft)", textTransform: "uppercase", letterSpacing: ".4px", fontWeight: 600 }}>{label}</div>
      <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: small ? 13 : 18, color: "var(--c-forest)", marginTop: 2, display: "inline-flex", alignItems: "center", gap: 4 }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: "var(--c-ink-soft)" }}>{sub}</div>}
    </div>
  );
}

/* ── Contact modal ────────────────────────────────────────── */
export function ContactModal({ t, onClose, onRequestPayment }) {
  const [tab, setTab] = useState("message");
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");
  const [sessionTopic, setSessionTopic] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [sessionMode, setSessionMode] = useState("online");
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submitMessage = () => { setSent(true); setTimeout(() => { setSent(false); onClose(); }, 1800); };

  return (
    <div ref={overlayRef} onClick={e => { if (e.target === overlayRef.current) onClose(); }}
      style={{ position: "fixed", inset: 0, background: "rgba(14,28,15,.5)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}>
      <div style={{ background: "#fff", borderRadius: 18, width: "min(560px, 100%)", maxHeight: "90vh", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,.4)", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "20px 22px", borderBottom: "1px solid var(--c-border)", display: "flex", alignItems: "center", gap: 14 }}>
          <img src={t.img} alt="" style={{ width: 48, height: 48, borderRadius: 12, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 16, color: "var(--c-forest)", letterSpacing: "-.3px" }}>Contact {t.name}</div>
            <div style={{ fontSize: 12, color: "var(--c-ink-soft)" }}>{t.title}</div>
          </div>
          <button onClick={onClose} style={{ background: "var(--c-cream-2)", border: "none", width: 32, height: 32, borderRadius: 10, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--c-ink)" }}>
            <Icon.close size={15} />
          </button>
        </div>

        <div style={{ display: "flex", padding: "0 22px", borderBottom: "1px solid var(--c-border)" }}>
          {[["message", "Message", Icon.msg], ["session", "Request session", Icon.cal], ["video", "Video call", Icon.vid]].map(([k, label, Ic]) => (
            <button key={k} onClick={() => setTab(k)} style={{ all: "unset", cursor: "pointer", padding: "12px 4px", marginRight: 20, fontSize: 12.5, fontWeight: 600,
              color: tab === k ? "var(--c-forest)" : "var(--c-ink-soft)", borderBottom: tab === k ? "2px solid var(--c-forest)" : "2px solid transparent", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Ic size={13} /> {label}
            </button>
          ))}
        </div>

        <div className="sd-scroll" style={{ padding: 22, overflowY: "auto", flex: 1 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(29,202,171,.18)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--c-forest-mid)" }}>
                <Icon.check size={26} />
              </div>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 18, color: "var(--c-forest)", marginTop: 14 }}>Sent to {t.name.split(" ")[0]}</div>
              <p style={{ fontSize: 13, color: "var(--c-ink-soft)", marginTop: 6 }}>You'll see their reply in your inbox.</p>
            </div>
          ) : tab === "message" ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Your message">
                <textarea className="sd-textarea" rows={6} value={msg} onChange={e => setMsg(e.target.value)}
                  placeholder={`Hi ${t.name.split(" ")[0]} — I'd like to learn ${t.skills[0]}. I'm a beginner and have about 3 hrs a week. Could we chat?`} />
              </Field>
              <div style={{ fontSize: 11.5, color: "var(--c-ink-soft)" }}>Replies go to your registered email. Average reply time: 4 hours.</div>
              <button onClick={submitMessage} className="sd-btn sd-btn-primary" style={{ justifyContent: "center" }} disabled={!msg.trim()}><Icon.msg size={14} /> Send message</button>
            </div>
          ) : tab === "session" ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Topic / what you want to cover">
                <input className="sd-input" value={sessionTopic} onChange={e => setSessionTopic(e.target.value)} placeholder={`e.g. Intro to ${t.skills[0]}`} />
              </Field>
              <FormRow>
                <Field label="Preferred date"><input className="sd-input" type="date" value={sessionDate} onChange={e => setSessionDate(e.target.value)} /></Field>
                <Field label="Preferred time"><input className="sd-input" type="time" value={sessionTime} onChange={e => setSessionTime(e.target.value)} /></Field>
              </FormRow>
              <Field label="Session mode">
                <div style={{ display: "flex", gap: 8 }}>
                  {[["online", "Online"], ["inperson", "In-person"]].map(([id, label]) => (
                    <button key={id} type="button" onClick={() => setSessionMode(id)} className={"sd-chip " + (sessionMode === id ? "sd-chip-on" : "")} style={{ flex: 1, justifyContent: "center", padding: "10px 12px" }}>{label}</button>
                  ))}
                </div>
              </Field>
              <div style={{ background: "var(--c-cream-2)", padding: "12px 14px", borderRadius: 10, fontSize: 12.5, color: "var(--c-ink-soft)" }}>
                Sessions are <strong style={{ color: "var(--c-forest)" }}>₹{t.rate}</strong> &mdash; you'll pay on the next step. Cancel free up to 12 hours before.
              </div>
              <button onClick={() => onRequestPayment({ topic: sessionTopic, date: sessionDate, time: sessionTime, mode: sessionMode })}
                className="sd-btn sd-btn-primary" style={{ justifyContent: "center" }} disabled={!sessionTopic || !sessionDate || !sessionTime}>
                Continue to payment <Icon.arrow size={14} />
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "linear-gradient(135deg, var(--c-forest-dk), var(--c-forest))", color: "#fff", padding: 22, borderRadius: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.16)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon.vid size={16} /></div>
                  <div>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 16 }}>Quick video call</div>
                    <div style={{ fontSize: 12, opacity: .7 }}>15 min · free intro</div>
                  </div>
                </div>
                <p style={{ fontSize: 12.5, opacity: .8, marginTop: 12, lineHeight: 1.55 }}>Get on a 15-minute video call to talk about your goals before booking a paid session.</p>
              </div>
              <Field label="Pick a slot">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                  {["Today 6:00 PM", "Tomorrow 11 AM", "Tomorrow 5 PM", "Thu 7 PM", "Sat 10 AM", "Sun 4 PM"].map(sName => (
                    <button key={sName} type="button" onClick={() => setSessionTime(sName)} className={"sd-chip " + (sessionTime === sName ? "sd-chip-on" : "")} style={{ justifyContent: "center", padding: "10px 6px", fontSize: 11.5 }}>{sName}</button>
                  ))}
                </div>
              </Field>
              <Field label="What you'd like to talk about">
                <textarea className="sd-textarea" rows={3} value={sessionTopic} onChange={e => setSessionTopic(e.target.value)} placeholder="One or two lines about your goal." />
              </Field>
              <button onClick={submitMessage} className="sd-btn sd-btn-primary" style={{ justifyContent: "center" }} disabled={!sessionTime}><Icon.vid size={14} /> Request video call</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
