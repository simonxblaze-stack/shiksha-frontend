import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import '../css/CoursePreview.css';
import '../css/Courses.css';

const TABS = ['Online', 'Classroom Training', 'Software Development'];

const BOARDS = [
  { id: 'CBSE',              title: 'CBSE',              desc: 'Central Board of Secondary Education — National curriculum.' },
  { id: 'MBSC',              title: 'MBSE',              desc: 'Mizoram Board of School Education.' },
];

const BoardCard = ({ board, onClick }) => (
  <div className="course-card" onClick={onClick}>
    <div className="course-card-img" />
    <div className="course-card-body">
      <h3 className="course-card-title">{board.title}</h3>
      <p className="course-card-desc">{board.desc}</p>
      <div className="course-card-footer">
        <span style={{ flex: 1 }} />
        <button
          className="course-arrow-btn"
          onClick={(e) => { e.stopPropagation(); onClick(); }}
        >→</button>
      </div>
    </div>
  </div>
);

const CoursePreview = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Online');

  // Navigate to /courses and pass the selected board so it starts from class page
  const handleBoardClick = (board) => {
    navigate('/courses', { state: { selectedBoard: board.id } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="course-preview">
      {/* Tab bar */}
      <div className="preview-tab-bar">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`preview-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'Online' ? (
        <div className="preview-grid-wrap">
          <div className="preview-grid">
            {BOARDS.map((board) => (
              <BoardCard
                key={board.id}
                board={board}
                onClick={() => handleBoardClick(board)}
              />
            ))}
          </div>
          {/*
          <button
            className="preview-show-all-btn"
            onClick={() => { navigate('/courses'); window.scrollTo(0, 0); }}
          >
            Show all
          </button>
          */}
        </div>
      ) : (
        <ComingSoon />
      )}
    </div>
  );
};

export default CoursePreview;
