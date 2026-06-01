import React, { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

/* =================================================================
   LAZY-LOADED BLOG CHAPTERS
   Each chapter is its own chunk; only the requested one is fetched.
   This keeps the main bundle small — visitors who never open a blog
   never download these files.
   ================================================================= */
const articleMap = {
  // ---- Class 10 — Geography ----
  "class-10/geography/chapter-1": lazy(() => import("./blogs/class-10/geography/Chapter1.jsx")),
  "class-10/geography/chapter-2": lazy(() => import("./blogs/class-10/geography/Chapter2.jsx")),
  "class-10/geography/chapter-3": lazy(() => import("./blogs/class-10/geography/Chapter3.jsx")),
  "class-10/geography/chapter-4": lazy(() => import("./blogs/class-10/geography/Chapter4.jsx")),
  "class-10/geography/chapter-5": lazy(() => import("./blogs/class-10/geography/Chapter5.jsx")),
  "class-10/geography/chapter-6": lazy(() => import("./blogs/class-10/geography/Chapter6.jsx")),
  "class-10/geography/chapter-7": lazy(() => import("./blogs/class-10/geography/Chapter7.jsx")),

  // ---- Class 10 — History ----
  "class-10/history/chapter-1": lazy(() => import("./blogs/class-10/history/Chapter1.jsx")),
  "class-10/history/chapter-2": lazy(() => import("./blogs/class-10/history/Chapter2.jsx")),
  "class-10/history/chapter-3": lazy(() => import("./blogs/class-10/history/Chapter3.jsx")),
  "class-10/history/chapter-4": lazy(() => import("./blogs/class-10/history/Chapter4.jsx")),
  "class-10/history/chapter-5": lazy(() => import("./blogs/class-10/history/Chapter5.jsx")),

  // ---- Class 10 — Economics ----
  "class-10/economics/chapter-1": lazy(() => import("./blogs/class-10/economics/Chapter1.jsx")),
  "class-10/economics/chapter-2": lazy(() => import("./blogs/class-10/economics/Chapter2.jsx")),
  "class-10/economics/chapter-3": lazy(() => import("./blogs/class-10/economics/Chapter3.jsx")),
  "class-10/economics/chapter-4": lazy(() => import("./blogs/class-10/economics/Chapter4.jsx")),
  "class-10/economics/chapter-5": lazy(() => import("./blogs/class-10/economics/Chapter5.jsx")),

  // ---- Class 10 — Political Science ----
  "class-10/political-science/chapter-1": lazy(() => import("./blogs/class-10/political-science/Chapter1.jsx")),
  "class-10/political-science/chapter-2": lazy(() => import("./blogs/class-10/political-science/Chapter2.jsx")),
  "class-10/political-science/chapter-3": lazy(() => import("./blogs/class-10/political-science/Chapter3.jsx")),
  "class-10/political-science/chapter-4": lazy(() => import("./blogs/class-10/political-science/Chapter4.jsx")),
  "class-10/political-science/chapter-5": lazy(() => import("./blogs/class-10/political-science/Chapter5.jsx")),
  "class-10/political-science/chapter-6": lazy(() => import("./blogs/class-10/political-science/Chapter6.jsx")),
  "class-10/political-science/chapter-7": lazy(() => import("./blogs/class-10/political-science/Chapter7.jsx")),

  // ---- Class 10 — Science ----
  "class-10/science/chapter-1": lazy(() => import("./blogs/class-10/science/Chapter1.jsx")),
  "class-10/science/chapter-2": lazy(() => import("./blogs/class-10/science/Chapter2.jsx")),
  "class-10/science/chapter-3": lazy(() => import("./blogs/class-10/science/Chapter3.jsx")),
  "class-10/science/chapter-4": lazy(() => import("./blogs/class-10/science/Chapter4.jsx")),
  "class-10/science/chapter-5": lazy(() => import("./blogs/class-10/science/Chapter5.jsx")),
  "class-10/science/chapter-6": lazy(() => import("./blogs/class-10/science/Chapter6.jsx")),
  "class-10/science/chapter-7": lazy(() => import("./blogs/class-10/science/Chapter7.jsx")),
  "class-10/science/chapter-8": lazy(() => import("./blogs/class-10/science/Chapter8.jsx")),
  "class-10/science/chapter-9": lazy(() => import("./blogs/class-10/science/Chapter9.jsx")),
  "class-10/science/chapter-10": lazy(() => import("./blogs/class-10/science/Chapter10.jsx")),
  "class-10/science/chapter-11": lazy(() => import("./blogs/class-10/science/Chapter11.jsx")),
  "class-10/science/chapter-12": lazy(() => import("./blogs/class-10/science/Chapter12.jsx")),
  "class-10/science/chapter-13": lazy(() => import("./blogs/class-10/science/Chapter13.jsx")),
  "class-10/science/chapter-14": lazy(() => import("./blogs/class-10/science/Chapter14.jsx")),
  "class-10/science/chapter-15": lazy(() => import("./blogs/class-10/science/Chapter15.jsx")),
  "class-10/science/chapter-16": lazy(() => import("./blogs/class-10/science/Chapter16.jsx")),

  // ---- Class 9 — Science ----
  "class-9/science/chapter-1": lazy(() => import("./blogs/class-9/science/Chapter1.jsx")),
  "class-9/science/chapter-2": lazy(() => import("./blogs/class-9/science/Chapter2.jsx")),
  "class-9/science/chapter-3": lazy(() => import("./blogs/class-9/science/Chapter3.jsx")),
  "class-9/science/chapter-4": lazy(() => import("./blogs/class-9/science/Chapter4.jsx")),
  "class-9/science/chapter-5": lazy(() => import("./blogs/class-9/science/Chapter5.jsx")),
  "class-9/science/chapter-6": lazy(() => import("./blogs/class-9/science/Chapter6.jsx")),
  "class-9/science/chapter-7": lazy(() => import("./blogs/class-9/science/Chapter7.jsx")),
  "class-9/science/chapter-8": lazy(() => import("./blogs/class-9/science/Chapter8.jsx")),
  "class-9/science/chapter-9": lazy(() => import("./blogs/class-9/science/Chapter9.jsx")),
  "class-9/science/chapter-10": lazy(() => import("./blogs/class-9/science/Chapter10.jsx")),
  "class-9/science/chapter-11": lazy(() => import("./blogs/class-9/science/Chapter11.jsx")),
  "class-9/science/chapter-12": lazy(() => import("./blogs/class-9/science/Chapter12.jsx")),
  "class-9/science/chapter-13": lazy(() => import("./blogs/class-9/science/Chapter13.jsx")),
  "class-9/science/chapter-14": lazy(() => import("./blogs/class-9/science/Chapter14.jsx")),

  // ---- Class 9 — History ----
  "class-9/history/chapter-1": lazy(() => import("./blogs/class-9/history/Chapter1.jsx")),
  "class-9/history/chapter-2": lazy(() => import("./blogs/class-9/history/Chapter2.jsx")),
  "class-9/history/chapter-3": lazy(() => import("./blogs/class-9/history/Chapter3.jsx")),
  "class-9/history/chapter-4": lazy(() => import("./blogs/class-9/history/Chapter4.jsx")),
  "class-9/history/chapter-5": lazy(() => import("./blogs/class-9/history/Chapter5.jsx")),
  "class-9/history/chapter-7": lazy(() => import("./blogs/class-9/history/Chapter7.jsx")),

  // ---- Class 9 — Geography ----
  "class-9/geography/chapter-1": lazy(() => import("./blogs/class-9/geography/Chapter1.jsx")),
  "class-9/geography/chapter-2": lazy(() => import("./blogs/class-9/geography/Chapter2.jsx")),
  "class-9/geography/chapter-3": lazy(() => import("./blogs/class-9/geography/Chapter3.jsx")),
  "class-9/geography/chapter-4": lazy(() => import("./blogs/class-9/geography/Chapter4.jsx")),
  "class-9/geography/chapter-5": lazy(() => import("./blogs/class-9/geography/Chapter5.jsx")),

  // ---- Class 9 — Economics ----
  "class-9/economics/chapter-1": lazy(() => import("./blogs/class-9/economics/Chapter1.jsx")),
  "class-9/economics/chapter-2": lazy(() => import("./blogs/class-9/economics/Chapter2.jsx")),
  "class-9/economics/chapter-3": lazy(() => import("./blogs/class-9/economics/Chapter3.jsx")),
  "class-9/economics/chapter-4": lazy(() => import("./blogs/class-9/economics/Chapter4.jsx")),

  // ---- Class 8 — Civics ----
  "class-8/civics/chapter-1": lazy(() => import("./blogs/class-8/civics/Chapter1.jsx")),
  "class-8/civics/chapter-2": lazy(() => import("./blogs/class-8/civics/Chapter2.jsx")),
  "class-8/civics/chapter-3": lazy(() => import("./blogs/class-8/civics/Chapter3.jsx")),

  // ---- Class 8 — Geography ----
  "class-8/geography/chapter-1": lazy(() => import("./blogs/class-8/geography/Chapter1.jsx")),
  "class-8/geography/chapter-2": lazy(() => import("./blogs/class-8/geography/Chapter2.jsx")),
  "class-8/geography/chapter-3": lazy(() => import("./blogs/class-8/geography/Chapter3.jsx")),
  "class-8/geography/chapter-4": lazy(() => import("./blogs/class-8/geography/Chapter4.jsx")),
  "class-8/geography/chapter-5": lazy(() => import("./blogs/class-8/geography/Chapter5.jsx")),
  "class-8/geography/chapter-6": lazy(() => import("./blogs/class-8/geography/Chapter6.jsx")),

  // ---- Class 8 — History ----
  "class-8/history/chapter-1": lazy(() => import("./blogs/class-8/history/Chapter1.jsx")),
  "class-8/history/chapter-2": lazy(() => import("./blogs/class-8/history/Chapter2.jsx")),
  "class-8/history/chapter-3": lazy(() => import("./blogs/class-8/history/Chapter3.jsx")),
  "class-8/history/chapter-4": lazy(() => import("./blogs/class-8/history/Chapter4.jsx")),
  "class-8/history/chapter-5": lazy(() => import("./blogs/class-8/history/Chapter5.jsx")),
  "class-8/history/chapter-6": lazy(() => import("./blogs/class-8/history/Chapter6.jsx")),
  "class-8/history/chapter-7": lazy(() => import("./blogs/class-8/history/Chapter7.jsx")),
  "class-8/history/chapter-8": lazy(() => import("./blogs/class-8/history/Chapter8.jsx")),
  "class-8/history/chapter-9": lazy(() => import("./blogs/class-8/history/Chapter9.jsx")),
  "class-8/history/chapter-10": lazy(() => import("./blogs/class-8/history/Chapter10.jsx")),
  "class-8/history/chapter-11": lazy(() => import("./blogs/class-8/history/Chapter11.jsx")),
};

/* ================= COMPONENT ================= */

const ChapterLoading = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "16px",
      color: "#003223",
    }}
  >
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "3px solid rgba(0, 92, 58, 0.2)",
        borderTopColor: "#005c3a",
        animation: "blogSpin 0.8s linear infinite",
      }}
    />
    <p style={{ fontSize: "14px", letterSpacing: "0.3px" }}>Loading chapter…</p>
    <style>{`@keyframes blogSpin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const BlogDetail = () => {
  const { "*": slug } = useParams();
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const Component = articleMap[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: "210px",
          left: "40px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => navigate("/blogs")}
          onMouseEnter={() => setHoveredBtn("back")}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            background: hoveredBtn === "back"
              ? "rgba(0, 92, 58, 0.95)"
              : "rgba(0, 50, 35, 0.82)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "0.4px",
            boxShadow: hoveredBtn === "back"
              ? "0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)"
              : "0 4px 16px rgba(0,0,0,0.22)",
            transform: hoveredBtn === "back" ? "translateX(-3px)" : "translateX(0)",
            transition: "all 0.25s ease",
          }}
        >
          <span style={{ fontSize: "16px", lineHeight: 1 }}>‹</span>
          Back
        </button>

        {showTopButton && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setHoveredBtn("top")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              width: "42px",
              height: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: hoveredBtn === "top"
                ? "linear-gradient(135deg, #005c3a, #00875a)"
                : "linear-gradient(135deg, #003223, #005c3a)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              boxShadow: hoveredBtn === "top"
                ? "0 8px 28px rgba(0,82,46,0.55), 0 0 0 4px rgba(0,135,90,0.2)"
                : "0 4px 16px rgba(0,50,35,0.45)",
              transform: hoveredBtn === "top"
                ? "translateY(-4px) scale(1.1)"
                : "translateY(0) scale(1)",
              transition: "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            ↑
          </button>
        )}
      </div>

      {Component ? (
        <Suspense fallback={<ChapterLoading />}>
          <Component />
        </Suspense>
      ) : (
        <h2>Blog not found</h2>
      )}
    </div>
  );
};

export default BlogDetail;
