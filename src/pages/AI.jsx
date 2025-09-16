import React from 'react';
import '../styles/ais.css';

const AI = () => {
  return (
    <section className="ai-page">
      <div className="ai-header">
        <h1>AI in Nursing Education</h1>
        <p>Empowering personalized, engaging, and effective learning experiences through AI.</p>
      </div>

      <div className="ai-section">
        <div className="ai-text">
          <h2>🎯 Personalized Learning & Reward System</h2>
          <p>
            AI helps identify key improvement areas for each student based on their quiz and performance data.
            It automatically creates customized quizzes with difficulty levels tailored to the learner’s abilities.
            A gamified reward system encourages better performance, keeping students engaged and motivated.
          </p>
        </div>
        <div className="ai-image">
          <img
            src="https://today.ucsd.edu/news_uploads/StudentsinIntrotoComputing.jpg"
            alt="AI for students"
          />
        </div>
      </div>

      <div className="ai-section reverse">
        <div className="ai-image">
          <img
            src="https://erepa7ohg8r.exactdn.com/wp-content/uploads/2023/05/cover-ui-ux-tools.jpg?lossy=1&quality=75&webp=92&ssl=1"
            alt="AI quiz generation"
          />
        </div>
        <div className="ai-text">
          <h2>⚙️ AI-Powered Content Generation</h2>
          <p>
            Medical professionals have limited time. AI automatically generates new clinical scenarios using
            past case data. This reduces manual work and ensures students always have fresh material to test their knowledge.
          </p>
        </div>
      </div>

      <div className="ai-footer">
        <p>✨ With AI, learning becomes smarter, faster, and tailored for every student.</p>
      </div>
    </section>
  );
};

export default AI;