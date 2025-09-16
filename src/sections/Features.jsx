import React from 'react';
import '../styles/Features.css';

const features = [
  {
    title: 'Collaborative Approach',
    desc: 'Educators, developers, and students collaborate using Google Sheets with real-time syncing, enabling continuous content creation.',
    icon: '🤝',
  },
  {
    title: 'Gamification Techniques',
    desc: 'Points, badges, levels, storytelling, and leaderboards are used to drive motivation, engagement, and retention in learning.',
    icon: '🎯',
  },
  {
    title: 'Accessibility for All',
    desc: 'App-based experience with APK sharing for offline use and inclusive UI design for diverse learners across devices.',
    icon: '📱',
  },
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <h2 className="section-title">Key Features of Our Solution</h2>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;