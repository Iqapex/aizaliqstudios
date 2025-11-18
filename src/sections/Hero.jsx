import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Revolutionizing Medical Education Through AI & Gamified Innovation.</h1>
          <p className="hero-subtitle">Bridging the Gap Between Theory and Practice</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;