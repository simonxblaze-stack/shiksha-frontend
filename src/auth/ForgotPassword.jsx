import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/apiClient";
import { useToast } from "../contexts/ToastContext";
import "./Login.css";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const STEP_EMAIL = "email";
const STEP_CODE = "code";
const STEP_PASSWORD = "password";

const errMsg = (err, fallback) =>
  err?.response?.data?.detail ||
  err?.response?.data?.email?.[0] ||
  err?.response?.data?.code?.[0] ||
  err?.response?.data?.new_password?.[0] ||
  err?.message ||
  fallback;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [step, setStep] = useState(STEP_EMAIL);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [ticket, setTicket] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setSubmitting(true);
    try {
      await api.post("/accounts/password-reset/request/", { email: email.trim().toLowerCase() });
      // A shared email gets one code PER account, each labelled with its
      // username — the user picks the code for the account they're resetting.
      setInfo(
        "If an account exists for that email, we've sent a 6-digit code. " +
        "If you have more than one account on this email, each gets its own " +
        "code labelled with its username — enter the one you want to reset."
      );
      setStep(STEP_CODE);
    } catch (err) {
      setError(errMsg(err, "Could not send verification code. Please try again."));
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setSubmitting(true);
    try {
      const { data } = await api.post("/accounts/password-reset/verify/", {
        email: email.trim().toLowerCase(),
        code: code.trim(),
      });
      setTicket(data.ticket);
      setStep(STEP_PASSWORD);
    } catch (err) {
      setError(errMsg(err, "Invalid or expired code."));
    } finally {
      setSubmitting(false);
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setSubmitting(true);
    try {
      await api.post("/accounts/password-reset/confirm/", {
        email: email.trim().toLowerCase(),
        ticket,
        new_password: newPassword,
      });
      showToast({ message: "Your password has been changed. Please log in.", duration: 3500 });
      navigate("/login", {
        replace: true,
        state: { message: "Your password has been changed. Please log in with your new password." },
      });
    } catch (err) {
      setError(errMsg(err, "Could not change your password. Please try again."));
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setInfo("");
    setSubmitting(true);
    try {
      await api.post("/accounts/password-reset/request/", { email: email.trim().toLowerCase() });
      setInfo("A new verification code has been sent.");
    } catch (err) {
      setError(errMsg(err, "Could not resend the code. Please try again later."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-glow-center"></div>
      <div className="login-glow-top-right"></div>

      <div className="login-form">
        <h2>Forgot Password</h2>

        {step === STEP_EMAIL && (
          <form onSubmit={handleRequest}>
            <p className="login-status" style={{ marginBottom: 16 }}>
              Enter your account email and we'll send you a 6-digit verification code.
            </p>

            <div className="login-form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={submitting}
                autoFocus
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-submit-btn" disabled={submitting}>
              {submitting ? "Sending..." : "Send verification code"}
            </button>
          </form>
        )}

        {step === STEP_CODE && (
          <form onSubmit={handleVerify}>
            <p className="login-status" style={{ marginBottom: 16 }}>
              We sent a 6-digit code to <strong>{email}</strong>. If this email
              has more than one account, use the code labelled with the username
              you want to reset.
            </p>

            <div className="login-form-group">
              <label>Verification Code</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="\d{6}"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                required
                disabled={submitting}
                autoFocus
                style={{ letterSpacing: "0.4em", fontSize: "1.1rem", textAlign: "center" }}
              />
            </div>

            {error && <p className="login-error">{error}</p>}
            {info && !error && <p className="login-status">{info}</p>}

            <button type="submit" className="login-submit-btn" disabled={submitting || code.length !== 6}>
              {submitting ? "Verifying..." : "Verify code"}
            </button>

            <p style={{ marginTop: 12 }}>
              Didn't get it?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={submitting}
                style={{
                  background: "none",
                  border: "none",
                  color: "#22c55e",
                  cursor: "pointer",
                  textDecoration: "underline",
                  padding: 0,
                }}
              >
                Resend code
              </button>
            </p>
          </form>
        )}

        {step === STEP_PASSWORD && (
          <form onSubmit={handleConfirm}>
            <p className="login-status" style={{ marginBottom: 16 }}>
              Choose a new password for <strong>{email}</strong>.
            </p>

            <div className="login-form-group">
              <label>New Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                  disabled={submitting}
                  autoFocus
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="login-form-group">
              <label>Confirm New Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                  disabled={submitting}
                />
              </div>
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-submit-btn" disabled={submitting}>
              {submitting ? "Changing..." : "Change password"}
            </button>
          </form>
        )}

        <p>
          Remembered your password? <Link to="/login">Back to login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
