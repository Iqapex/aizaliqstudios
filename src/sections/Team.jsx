import React from 'react';
import '../styles/Team.css';
import TeamCard from '../components/TeamCard';
import IM6 from '../images/IM6.jpg';


const teamData = [
  {
    name: 'Arjun Dutta',
    role: 'CBO & Tech Advisor',
    experience: '4+ Years Experience',
    image: "https://media.licdn.com/dms/image/v2/D5603AQGXIBey3a-H6Q/profile-displayphoto-shrink_200_200/B56ZTGSg6kGsAY-/0/1738493530700?e=1764806400&v=beta&t=Mj1J4Rla7fn49VV3GjxrrW_o_uE-UyfGhgfuPggTBs8",
    // image: 'https://randomuser.me/api/portraits/men/45.jpg',
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
    name: 'Soma Dutta',
    role: 'Operations',
    experience: '7+ Years Experience',
    image: IM6,   // Updated image path
  },
  /*
  {
    name: 'Shalini Biswas',
    role: 'COO',
    experience: '',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
  */
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
