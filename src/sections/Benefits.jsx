import React from 'react'
import '../styles/Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        <div className="text-content">
          <h2 className="section-title">Why Gaming Benefits Nursing Students</h2>
          <p className="benefit-point">🎮 <span className="highlight">Increased Engagement</span> through interactive, immersive learning experiences.</p>
          <p className="benefit-point">💡 <span className="highlight">Emotional Connection</span> enhances memory retention and learning outcomes.</p>
          <p className="benefit-point">🔄 <span className="highlight">Bridges Theory & Practice</span> by simulating real-world medical scenarios.</p>
          <p className="benefit-point">🧠 <span className="highlight">Critical Thinking</span> improves as students make decisions in gameplay.</p>
          <p className="benefit-point">🚀 <span className="highlight">Improved Performance</span> leads to better preparation for real-world healthcare.</p>
        </div>

        <div className="image-box">
          <img
            src="https://www.newportinstitute.com/wp-content/uploads/Hero-1366x731-ProcessAddictions.png"
            alt="Game-based learning benefits"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
