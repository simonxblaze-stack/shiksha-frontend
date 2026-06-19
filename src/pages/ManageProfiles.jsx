import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/apiClient";
import "./ManageProfiles.css";

const EMOJIS = ["🧑","👦","👧","🧒","👨","👩","🎓","📚","⭐","🌟"];

const Avatar = ({ p, size = 56 }) => {
  const style = { width: size, height: size, borderRadius: "50%", objectFit: "cover" };
  if (p.avatar_type === "image" && p.avatar)
    return <img src={p.avatar} alt="" style={style} />;
  const initial = (p.display_name || "?").charAt(0).toUpperCase();
  return (
    <div style={{
      ...style, display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg,#3fad4e,#2f9d42)",
      color: "#fff", fontWeight: 700, fontSize: size * 0.38,
    }}>
      {p.avatar_type === "emoji" && p.avatar ? p.avatar : initial}
    </div>
  );
};

const BLANK = { display_name: "", relationship: "DEPENDENT", pin: "", avatar_emoji: "", first_name: "", last_name: "" };

export default function ManageProfiles() {
  const { profiles: ctxProfiles, bootstrap } = useAuth();
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Modal state
  const [modal, setModal] = useState(null); // null | "create" | "edit"
  const [editing, setEditing] = useState(null); // profile being edited
  const [form, setForm] = useState(BLANK);
  const [saving, setSaving] = useState(false);
  const [formErr, setFormErr] = useState("");

  const load = async () => {
    try {
      const res = await api.get("/accounts/profiles/");
      setProfiles(res.data);
    } catch {
      setError("Could not load profiles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setForm(BLANK);
    setFormErr("");
    setEditing(null);
    setModal("create");
  };

  const openEdit = (p) => {
    setForm({
      display_name: p.display_name,
      relationship: p.relationship,
      pin: "",
      avatar_emoji: p.avatar_type === "emoji" ? p.avatar : "",
      first_name: "",
      last_name: "",
    });
    setFormErr("");
    setEditing(p);
    setModal("edit");
  };

  const closeModal = () => { setModal(null); setEditing(null); };

  const handleSave = async () => {
    setFormErr("");
    if (!form.display_name.trim()) { setFormErr("Display name is required."); return; }
    setSaving(true);
    try {
      if (modal === "create") {
        const payload = new FormData();
        Object.entries(form).forEach(([k, v]) => { if (v) payload.append(k, v); });
        await api.post("/accounts/profiles/", payload);
      } else {
        const payload = new FormData();
        ["display_name", "pin", "avatar_emoji", "first_name", "last_name"].forEach((k) => {
          if (form[k] !== undefined) payload.append(k, form[k]);
        });
        await api.patch(`/accounts/profiles/${editing.id}/`, payload);
      }
      await load();
      await bootstrap();
      closeModal();
    } catch (err) {
      const d = err?.response?.data;
      setFormErr(
        typeof d === "string" ? d :
        Object.values(d || {}).flat().join(" ") ||
        "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (p) => {
    if (!window.confirm(`Remove "${p.display_name}"? This cannot be undone.`)) return;
    try {
      await api.delete(`/accounts/profiles/${p.id}/`);
      await load();
      await bootstrap();
    } catch (err) {
      const d = err?.response?.data;
      setError(typeof d?.detail === "string" ? d.detail : "Could not remove profile.");
    }
  };

  return (
    <div className="mp-page">
      <div className="mp-header">
        <button className="mp-back" onClick={() => navigate(-1)}>← Back</button>
        <h1>Manage Profiles</h1>
      </div>

      {error && <p className="mp-error">{error}</p>}

      {loading ? (
        <div className="mp-spinner" />
      ) : (
        <div className="mp-list">
          {profiles.map((p) => (
            <div key={p.id} className="mp-row">
              <Avatar p={p} />
              <div className="mp-info">
                <span className="mp-name">{p.display_name}</span>
                <span className="mp-tag">
                  {p.relationship === "SELF" ? "You" : "Child / Dependent"}
                  {p.is_default ? " · Default" : ""}
                  {p.requires_pin ? " 🔒" : ""}
                </span>
              </div>
              <div className="mp-actions">
                <button className="mp-btn mp-btn--edit" onClick={() => openEdit(p)}>Edit</button>
                <button className="mp-btn mp-btn--del" onClick={() => handleDelete(p)}>Remove</button>
              </div>
            </div>
          ))}

          {profiles.length < 5 && (
            <button className="mp-add" onClick={openCreate}>+ Add profile</button>
          )}
        </div>
      )}

      {modal && (
        <div className="mp-overlay" onClick={closeModal}>
          <div className="mp-modal" onClick={(e) => e.stopPropagation()}>
            <h2>{modal === "create" ? "New profile" : "Edit profile"}</h2>

            {formErr && <p className="mp-error">{formErr}</p>}

            <label>Display name *
              <input value={form.display_name}
                onChange={(e) => setForm((f) => ({ ...f, display_name: e.target.value }))}
                placeholder="e.g. Rami or Child 1" autoFocus />
            </label>

            {modal === "create" && (
              <label>Relationship
                <select value={form.relationship}
                  onChange={(e) => setForm((f) => ({ ...f, relationship: e.target.value }))}>
                  <option value="DEPENDENT">Child / Dependent</option>
                  <option value="SELF">Myself (account holder)</option>
                </select>
              </label>
            )}

            <label>PIN (optional, 4-6 digits)
              <input inputMode="numeric" maxLength={6} value={form.pin}
                onChange={(e) => setForm((f) => ({ ...f, pin: e.target.value.replace(/\D/g, "") }))}
                placeholder={modal === "edit" ? "Leave blank to keep current" : "Leave blank for no PIN"} />
            </label>

            <label>Avatar emoji (optional)
              <div className="mp-emojis">
                {EMOJIS.map((em) => (
                  <button key={em} type="button"
                    className={`mp-emoji ${form.avatar_emoji === em ? "mp-emoji--sel" : ""}`}
                    onClick={() => setForm((f) => ({ ...f, avatar_emoji: f.avatar_emoji === em ? "" : em }))}>
                    {em}
                  </button>
                ))}
              </div>
            </label>

            <div className="mp-modal-footer">
              <button className="mp-btn" onClick={closeModal} disabled={saving}>Cancel</button>
              <button className="mp-btn mp-btn--primary" onClick={handleSave} disabled={saving}>
                {saving ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
