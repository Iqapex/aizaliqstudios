import React from 'react';
import '../styles/AI.css';

const AI = () => {
  return (
    <section className="ai-section" id="ai">
      <div className="ai-container">
        <div className="ai-text">
          <h2 className="section-title">Smart Learning with AI</h2>

          <div className="ai-block">
            <h3>🧠 Personalized Quizzes</h3>
            <p>
              Our system adapts quiz difficulty based on each user’s performance. AI identifies
              weak spots and delivers custom assessments, improving learning efficiency.
            </p>
            <p><strong>🎁 Rewards</strong> for high scores boost motivation and track success!</p>
          </div>

          <div className="ai-block">
            <h3>📊 Automated Content Generation</h3>
            <p>
              Using past case studies, AI generates new scenarios so students always have
              fresh, relevant challenges. This reduces load on medical professionals while
              maintaining accuracy.
            </p>
          </div>
        </div>

        <div className="ai-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Artificial_Intelligence_%26_AI_%26_Machine_Learning.jpg"
            alt="AI-driven education"
          />
        </div>
      </div>
    </section>
  );
};

export default AI;