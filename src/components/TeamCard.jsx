import React from 'react';
import '../styles/TeamCard.css';

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} className="team-image" />
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <p className="team-exp">{member.experience}</p>
    </div>
  );
};

export default TeamCard;