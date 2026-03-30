import "../css/LearningPathways.css";

const pathways = [
  { title: "School Academics", class: "card--school" },
  { title: "IIT-JEE Preparation", class: "card--iitjee" },
  { title: "NEET Preparation", class: "card--neet" },
  { title: "UPSC & Civil Services", class: "card--upsc" },
  { title: "Government Exams", class: "card--govt" },
  { title: "Defence Exams", class: "card--defence" },
  { title: "CA Program", class: "card--ca" },
  { title: "Olympiad & Foundation", class: "card--olympiad" },
  { title: "Skill Development", class: "card--skill" }
];

const LearningPathways = () => {
  return (
    <div className="pathways-wrapper">
      <section className="section">
        <p className="section__eyebrow">What We Offer</p>

        <h2 className="section__title">
          Structured <span className="highlight">Learning</span> Pathways
        </h2>

        <div className="section__underline"></div>

        <p className="section__desc">
          From foundational academics to competitive exam preparation — every program is syllabus-aligned and delivered by subject experts.
        </p>

        <div className="pathways-grid">
          {pathways.map((item, i) => (
            <button
              key={i}
              type="button"
              className={`pathway-card ${item.class}`}
            >
              <span className="card__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </span>

              <span className="card__label">{item.title}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LearningPathways;