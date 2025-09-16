import React from 'react';
import '../styles/Technology.css';

const technologies = [
  {
    title: 'Unity3D Game Engine',
    desc: 'Used to build immersive, interactive simulations for nursing students.',
    icon: '🕹️',
  },
  {
    title: 'AWS Lambda + API Gateway',
    desc: 'Serverless backend with scalable APIs to handle logic and data securely.',
    icon: '☁️',
  },
  {
    title: 'DynamoDB & S3',
    desc: 'Flexible NoSQL storage for game data and scalable file storage.',
    icon: '💾',
  },
  {
    title: 'Google Sheets + API',
    desc: 'Enables real-time collaboration with educators using familiar tools.',
    icon: '📊',
  },
];

const Technology = () => {
  return (
    <section className="technology-section" id="technology">
      <h2 className="section-title">Technologies Behind the Solution</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <h3>{tech.title}</h3>
            <p>{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;