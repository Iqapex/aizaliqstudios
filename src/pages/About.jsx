import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-intro">
        <h1>About <span>AIZALIQ Studios</span></h1>
        <p>
          AIZALIQ Studios is transforming nursing education through immersive and gamified digital learning experiences.
          We empower students to bridge the gap between theory and practice using interactive simulations that are accessible, engaging, and backed by technology and AI.
        </p>
      </div>

      <div className="about-mission">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDJeYaTfvW-dVyvNyjDqbmPFD5DKDZvdheA&s"
          alt="Mission"
        />
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To revolutionize healthcare education by making learning practical, fun, and memorable. Our game-based approach boosts student confidence, engagement, and critical thinking — while making training accessible across all devices.
          </p>
        </div>
      </div>

      <div className="about-vision">
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We envision a world where nursing students are better prepared through digital tools, AI-driven assessments, and simulation-based learning. We aim to eliminate training barriers and expand impact throughout the North-East and beyond.
          </p>
        </div>
        <img
          src="https://cdn12.picryl.com/photo/2016/12/31/board-vision-presentation-2d583b-1024.jpg"
          alt="Vision"
        />
      </div>

      <div className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/assets/images/arjun.jpg" alt="Arjun Dutta" />
            <h3>Arjun Dutta</h3>
            <p>CBO & Tech Advisor (4+ yrs)</p>
          </div>
          <div className="team-card">
            <img src="/assets/images/madhumita.jpg" alt="Madhumita" />
            <h3>Madhumita Sarkar Dutta</h3>
            <p>Co-Founder & Advisor (10+ yrs)</p>
          </div>
          <div className="team-card">
            <img src="/assets/images/bhaskar.jpg" alt="Bhaskar Gayen" />
            <h3>Bhaskar Gayen</h3>
            <p>Developer (Jadavpur Univ. M.Tech)</p>
          </div>
          <div className="team-card">
            <img src="/assets/images/aritra.jpg" alt="Aritra Ghosh" />
            <h3>Aritra Ghosh</h3>
            <p>AI Lead (HITK)</p>
          </div>
          <div className="team-card">
            <img src="/assets/images/shalini.jpg" alt="Shalini Biswas" />
            <h3>Shalini Biswas</h3>
            <p>COO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;