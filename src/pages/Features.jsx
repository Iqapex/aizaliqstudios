import React from 'react';
import '../styles/feature.css';

const Features = () => {
  return (
    <section className="features">
      <h2 className="section-title">Our Core Features</h2>

      <div className="features-container">

        {/* Feature 1: Collaborative Approach */}
        <div className="feature-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5n4-lwzKDDI4l5YCIkUEcuM5dVwe9f08Og&s"
            alt="Collaboration"
            className="feature-image"
          />
          <h3>Collaborative Approach</h3>
          <p>
            Involving educators, developers, and students in the game development process to ensure a powerful and inclusive educational experience. Google Sheet integration enables real-time collaboration.
          </p>
        </div>

        {/* Feature 2: Gamification Techniques */}
        <div className="feature-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9qVS5_2dIc1xdKKi63ENQ9IxzOlVgaLJsA&s"
            alt="Gamification"
            className="feature-image"
          />
          <h3>Gamification Techniques</h3>
          <p>
            Points, levels, rewards, badges, storytelling, and leaderboards are used to keep learners engaged and motivated through fun and interactive learning.
          </p>
        </div>

        {/* Feature 3: Accessibility */}
        <div className="feature-card">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Accessibility"
            className="feature-image"
          />
          <h3>Ensuring Accessibility</h3>
          <p>
            Designed to work across multiple devices with inclusive principles. Offline APK sharing supports learning even with poor internet connectivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;