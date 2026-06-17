import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import "./Login.css";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const Login = () => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [username, setUsername] = useState("");      // only used after a 409
  const [needUsername, setNeedUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Show message passed from signup / password-reset redirects.
  useEffect(() => {
    if (location.state?.message) {
      setStatusMessage(location.state.message);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatusMessage("");
    setSubmitting(true);

    // After a 409, the user types their username; that becomes the identifier.
    const idToSend = needUsername ? username.trim() : identifier.trim();

    try {
      setStatusMessage("Checking your account...");
      const { redirect } = await login(idToSend, password);

      showToast({ message: "You are logged in! Welcome back.", duration: 2500 });

      let redirectTo = "/";
      try {
        const stashed = sessionStorage.getItem("post_auth_redirect");
        if (stashed && stashed.startsWith("/") && !stashed.startsWith("//")) {
          redirectTo = stashed;
        }
        sessionStorage.removeItem("post_auth_redirect");
      } catch (_) { /* sessionStorage unavailable */ }

      // If the backend points us at a dashboard on a different host, go there.
      // Same-host (or malformed) → fall through to in-app navigation.
      if (redirect?.dashboard_url) {
        try {
          const target = new URL(redirect.dashboard_url);
          if (target.hostname !== window.location.hostname) {
            window.location.href = redirect.dashboard_url;
            return;
          }
        } catch (_) { /* malformed url — fall through */ }
      }

      navigate(redirectTo, { replace: true });
    } catch (err) {
      setStatusMessage("");
      if (err?.code === "ambiguous_email") {
        // Shared email → reveal the username field and ask them to retry.
        setNeedUsername(true);
        setPassword("");
        setError(
          "This email is linked to more than one account. " +
          "Please enter your username to sign in."
        );
      } else {
        setError(err?.message || "Login failed");
      }
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-glow-center"></div>
      <div className="login-glow-top-right"></div>

      <div className="login-form">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {!needUsername ? (
            <div className="login-form-group">
              <label>Username or email</label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                disabled={submitting}
                autoComplete="username"
              />
            </div>
          ) : (
            <div className="login-form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={submitting}
                autoFocus
                autoComplete="username"
              />
            </div>
          )}

          <div className="login-form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={submitting}
                autoComplete="current-password"
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

          {error && <p className="login-error">{error}</p>}

          {statusMessage && !error && (
            <p className="login-status">{statusMessage}</p>
          )}

          <button type="submit" className="login-submit-btn" disabled={submitting}>
            {submitting ? "Please wait..." : "Login"}
          </button>
        </form>

        <p style={{ marginTop: 12 }}>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
