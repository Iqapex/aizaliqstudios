import React from 'react';
import '../styles/Teams.css';
//import arjun from '../assets/images/arjun.jpg';
//import madhumita from '../assets/images/madhumita.jpg';
//import bhaskar from '../assets/images/bhaskar.jpg';
//import aritra from '../assets/images/aritra.jpg';
//import shalini from '../assets/images/shalini.jpg';

const team = [
  {
    name: "Arjun Dutta",
    role: "CBO & Tech Advisor",
    exp: "Exp: 4+ Years",
    //image: arjun,
  },
  {
    name: "Madhumita Sarkar Dutta",
    role: "Co-Founder & Advisor",
    exp: "Exp: 10+ Years",
    //image: madhumita,
  },
  {
    name: "Bhaskar Gayen",
    role: "Developer",
    exp: "Jadavpur Uni, M.Tech CSE (2021-23)",
    //image: bhaskar,
  },
  {
    name: "Aritra Ghosh",
    role: "AI Lead",
    exp: "HITK",
    //image: aritra,
  },
  {
    name: "Shalini Biswas",
    role: "COO",
    exp: "",
    //image: shalini,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <p className="team-subtitle">A passionate and experienced group driving innovation in nursing education.</p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.exp}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;