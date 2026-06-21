import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// FIX: the old ProtectedRoute used window.location.href = LOGIN_URL
// which caused a hard redirect. On the landing page, /login is an
// in-app route — using <Navigate> keeps it within React Router,
// avoids a full page reload, and prevents the loop where the page
// would reload mid-bootstrap and briefly see loading=true again.
//
// window.location.href is still correct when crossing domains
// (e.g. from the student dashboard back to the landing page login).
// On the landing page, /login is local, so <Navigate> is right.

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!isAuthenticated) {
    try {
      const here = location.pathname + location.search;
      if (here && here.startsWith("/") && !here.startsWith("//")) {
        sessionStorage.setItem("post_auth_redirect", here);
      }
    } catch (_) { /* sessionStorage unavailable */ }

    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
