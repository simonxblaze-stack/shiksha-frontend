import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Courses.css';
import SubjectList from './SubjectList';
import ChapterDetail from './ChapterDetail';
import { courseData } from '../data/courseData';

const BOARDS = ['CBSE', 'MBSE'];

const CLASSES = [
  { id: 'class8', title: 'Class 8', desc: 'Complete Class 8 academic program.' },
  { id: 'class9', title: 'Class 9', desc: 'Complete Class 9 academic program.' },
  { id: 'class10', title: 'Class 10', desc: 'Complete Class 10 academic program.' },
  { id: 'class11science', title: 'Class 11 (Science)', desc: 'Physics, Chemistry, Biology, Maths.' },
  { id: 'class11commerce', title: 'Class 11 (Commerce)', desc: 'Accountancy, Business Studies, Economics.' },
  { id: 'class11arts', title: 'Class 11 (Arts)', desc: 'History, Political Science, Geography.' },
  { id: 'class12science', title: 'Class 12 (Science)', desc: 'Physics, Chemistry, Biology, Maths.' },
  { id: 'class12commerce', title: 'Class 12 (Commerce)', desc: 'Accountancy, Business Studies, Economics.' },
  { id: 'class12arts', title: 'Class 12 (Arts)', desc: 'History, Political Science, Geography.' },
];

export const courseCards = Object.values(courseData);

export const CourseCard = ({ course, onArrowClick }) => (
  <div className="course-card" onClick={() => onArrowClick(course)}>
    <div className="course-card-img" />
    <div className="course-card-body">
      <h3 className="course-card-title">{course.title}</h3>
      <p className="course-card-desc">{course.desc}</p>
      <div className="course-card-footer">
        <span className="course-card-price">{course.price}</span>
        <button
          className="course-arrow-btn"
          onClick={(e) => {
            e.stopPropagation();
            onArrowClick(course);
          }}
        >
          →
        </button>
      </div>
    </div>
  </div>
);

const PageCard = ({ title, desc, price, onClick }) => (
  <div className="course-card" onClick={onClick}>
    <div className="course-card-img" />
    <div className="course-card-body">
      <h3 className="course-card-title">{title}</h3>
      <p className="course-card-desc">{desc}</p>
      <div className="course-card-footer">
        {price ? <span className="course-card-price">{price}</span> : <span style={{ flex: 1 }} />}
        <button
          className="course-arrow-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          →
        </button>
      </div>
    </div>
  </div>
);

const PageHeader = ({ title, subtitle, onBack }) => (
  <div className="courses-full-header" style={{ position: 'relative' }}>
    {onBack && (
      <button className="board-back-btn" onClick={onBack}>
        ← Back
      </button>
    )}
    <h1 className="courses-full-title">{title}</h1>
    {subtitle && <p className="courses-full-subtitle">{subtitle}</p>}
  </div>
);

const Courses = () => {
  const location = useLocation();

  const initialBoard = location.state?.selectedBoard || null;

  const [selectedBoard, setSelectedBoard] = useState(initialBoard);
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedBoard, selectedClass, activeCourse, activeTopic]);

  useEffect(() => {
    if (location.state?.resetCourses) {
      setSelectedBoard(null);
      setSelectedClass(null);
      setActiveCourse(null);
      setActiveTopic(null);
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  const resetAll = () => {
    setSelectedBoard(null);
    setSelectedClass(null);
    setActiveCourse(null);
    setActiveTopic(null);
  };

  const handleBoardSelect = (board) => {
    setSelectedBoard(board);
  };

  const handleClassSelect = (cls) => {
    setSelectedClass(cls);
    const course = courseData[cls.id];
    if (course) setActiveCourse(course);
  };

  const handleSubjectSelect = (topic) => {
    setActiveTopic(topic);
  };

  const handleSubjectBack = () => {
    setActiveCourse(null);
    setActiveTopic(null);
    setSelectedClass(null);
  };

  if (activeTopic) {
    return (
      <ChapterDetail
        topic={activeTopic}
        course={activeCourse}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  if (activeCourse) {
    return (
      <SubjectList
        course={activeCourse}
        onSubjectSelect={handleSubjectSelect}
        onBack={handleSubjectBack}
      />
    );
  }

  if (selectedBoard) {
    return (
      <div className="courses-page">
        <PageHeader
          title={`${selectedBoard} — Select Class`}
          subtitle="Choose your class to view the lesson plan"
          onBack={resetAll}
        />
        <div className="courses-grid-wrap">
          <div className="courses-grid courses-grid--classes">
            {CLASSES.map((cls) => (
              <PageCard
                key={cls.id}
                title={cls.title}
                desc={cls.desc}
                price="₹1,500"
                onClick={() => handleClassSelect(cls)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <PageHeader
        title="Online Courses"
        subtitle="Select your board to explore courses"
      />
      <div className="courses-grid-wrap">
        <div className="courses-grid courses-grid--boards">
          {BOARDS.map((board) => (
            <PageCard
              key={board}
              title={board}
              desc={
                board === 'CBSE'
                  ? 'Central Board of Secondary Education — National curriculum.'
                  : board === 'MBSE'
                  ? 'Mizoram Board of School Education.'
                  : ''
              }
              onClick={() => handleBoardSelect(board)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;