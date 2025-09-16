import React from 'react';
import '../styles/Impact.css';

const impacts = [
  {
    title: 'Economic Growth',
    description: 'Creates job opportunities and strengthens the local economy.',
    icon: '💼',
  },
  {
    title: 'Skill Development',
    description: 'Builds a capable and confident healthcare workforce.',
    icon: '🧠',
  },
  {
    title: 'Education & Learning',
    description: 'Improves literacy and attracts students via gamified learning.',
    icon: '📚',
  },
  {
    title: 'Technology Infrastructure',
    description: 'Promotes tech adoption and innovation in the North-East.',
    icon: '🏗️',
  },
  {
    title: 'Social Impact',
    description: 'Drives societal change through health-focused education.',
    icon: '❤️',
  },
  {
    title: 'Talent Retention',
    description: 'Encourages local youth to stay and solve local challenges.',
    icon: '🔁',
  },
];

const Impact = () => {
  return (
    <section className="impact-section" id="impact">
      <h2 className="section-title">Impact in the North-East</h2>
      <div className="impact-grid">
        {impacts.map((item, index) => (
          <div className="impact-card" key={index}>
            <div className="impact-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;