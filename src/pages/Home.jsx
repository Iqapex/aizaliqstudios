import React from 'react';

// Import all sections
import Hero from '../sections/Hero';
import Problem from '../sections/Problem';
import Benefits from '../sections/Benefits';
import Features from '../sections/Features';
import AI from '../sections/AI';
import Technology from '../sections/Technology';
import BusinessModel from '../sections/BusinessModel';
import Team from '../sections/Team';
import Achievements from '../sections/Achievements';
import Challenges from '../sections/Challenges';
import Impact from '../sections/Impact';
import Ask from '../sections/Ask';
import Future from '../sections/Future';
import Contact from '../sections/Contact';
import Conclusion from '../sections/Conclusion';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Problem />
      <Benefits />
      <Features />
      <AI />
      <Technology />
      <BusinessModel />
      <Team />
      <Achievements />
      <Challenges />
      <Impact />
      <Ask />
      <Future />
      <Contact />
      <Conclusion />
    </div>
  );
};

export default Home;