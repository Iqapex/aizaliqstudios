import React from 'react';
import '../styles/Team.css';
import TeamCard from '../components/TeamCard';

const teamData = [
  {
    name: 'Arjun Dutta',
    role: 'CBO & Tech Advisor',
    experience: '4+ Years Experience',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Madhumita Sarkar Dutta',
    role: 'Co-Founder & Advisor',
    experience: '10+ Years Experience',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bhaskar Gayen',
    role: 'Developer',
    experience: 'Jadavpur Uni. M.Tech, CSE (2021–23)',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Aritra Ghosh',
    role: 'AI Lead',
    experience: 'HITK',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    name: 'Shalini Biswas',
    role: 'COO',
    experience: '',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2 className="section-title">Meet the Team</h2>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;