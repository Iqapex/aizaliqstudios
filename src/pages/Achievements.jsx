import React from 'react';
import '../styles/Achievementss.css';

const achievements = [
  {
    title: '100+ POC Interests',
    desc: 'Over 100 educators and institutions have shown strong interest in our platform prototype.',
    img: 'https://freesvg.org/img/1669705424trophy-for-the-winner.png',
  },
  {
    title: 'STPI Octane Winner',
    desc: 'Awarded by STPI Aizawl CoE in Dec 2023 for excellence in edtech innovation.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkZMnA43gLb6jjhPD-A0uVMKxNmwghh3h2w&s',
  },
  {
    title: '₹25 Lakhs Funded',
    desc: 'Seed round secured at 3% equity dilution from STPI to accelerate growth and development.',
    img: 'https://www.constructionworld.in/assets/uploads/dc6a5abc52334dae09088369ef750e23.jpg',
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Our Achievements</h2>
      <p className="achievements-subtitle">
        Recognized and backed by industry leaders for innovation in nursing education.
      </p>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <img src={item.img} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;