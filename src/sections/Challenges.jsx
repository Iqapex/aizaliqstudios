import React from 'react';
import '../styles/Challenges.css';

const challenges = [
  {
    title: 'Faculty Buy-In & Training',
    desc: 'Educators may resist new tech-based teaching methods.',
    solution: 'Success stories will help convince and onboard them over time.',
    icon: '👩‍🏫',
  },
  {
    title: 'Screen Time Concerns',
    desc: 'Is more screen time good for students?',
    solution: 'We replace mindless scrolling with engaging, purposeful gameplay.',
    icon: '📱',
  },
  {
    title: 'Funding Constraints',
    desc: 'Scaling innovation requires consistent financial backing.',
    solution: 'We seek partnerships and grants to support sustainable growth.',
    icon: '💸',
  },
  {
    title: 'Collaboration Gaps',
    desc: 'Building partnerships with medical institutes isn’t easy.',
    solution: 'We work closely with local health educators for content alignment.',
    icon: '🤝',
  },
  {
    title: 'Tech & Resource Limits',
    desc: 'Lack of infra can hinder early adoption.',
    solution: 'Incubation support and shared office space bridge the gap.',
    icon: '💻',
  },
];

const Challenges = () => {
  return (
    <section className="challenges-section" id="challenges">
      <h2 className="section-title">Challenges & Solutions</h2>
      <div className="challenges-grid">
        {challenges.map((item, idx) => (
          <div className="challenge-card" key={idx}>
            <div className="challenge-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="challenge-desc">{item.desc}</p>
            <p className="solution"><strong>Solution:</strong> {item.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;