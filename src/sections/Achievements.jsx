import React from 'react';
import '../styles/Achievements.css';

const achievements = [
  {
    title: '100+ Early Interests',
    description: 'Our proof of concept attracted interest from over 100 nursing students and institutions.',
    icon: '📈',
  },
  {
    title: 'STPI Octane Winner',
    description: 'Won the STPI Octane award in Dec 2023 under the Aizawl CoE incubation program.',
    icon: '🏆',
  },
  {
    title: '₹25 Lakhs Seed Funding',
    description: 'Secured ₹25 Lakhs at a 3% equity dilution through STPI partnership.',
    icon: '💰',
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="section-title">Our Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;