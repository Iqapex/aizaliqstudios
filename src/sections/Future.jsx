import React from 'react';
import '../styles/Future.css';

const plans = [
  {
    title: 'VR/AR Expansion',
    description: 'Develop immersive simulations to mimic real-life clinical environments using virtual and augmented reality.',
    icon: '🕶️',
  },
  {
    title: 'Full Curriculum Integration',
    description: 'Integrate our platform into nursing curriculums across institutions nationwide.',
    icon: '📘',
  },
  {
    title: 'New Medical Use Cases',
    description: 'Add scenarios for geriatrics, pediatrics, surgery, and emergency care.',
    icon: '⚕️',
  },
  {
    title: 'Research & Evaluation',
    description: 'Conduct long-term studies to validate the impact of game-based learning.',
    icon: '🔬',
  },
  {
    title: 'National & Global Expansion',
    description: 'Partner with national councils and explore opportunities internationally.',
    icon: '🌐',
  },
];

const Future = () => {
  return (
    <section className="future-section" id="future-plans">
      <h2 className="section-title">Our Future Plans</h2>
      <div className="future-grid">
        {plans.map((plan, index) => (
          <div className="future-card" key={index}>
            <div className="future-icon">{plan.icon}</div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Future;