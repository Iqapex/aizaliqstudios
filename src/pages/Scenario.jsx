import React from 'react';
import '../styles/Scenario.css';

const Scenario = () => {
  return (
    <section className="scenario">
      <div className="scenario-container">
        <div className="scenario-text">
          <h2>🧠 A Sample Scenario Flow</h2>
          <p>
            Imagine a nursing student logging into our app and launching a simulation. They choose a patient case — for example, a patient showing symptoms of sepsis.
          </p>
          <p>
            The game presents a real-time situation. The student must take vital signs, administer medication, make choices under pressure, and reflect on outcomes.
          </p>
          <p>
            Throughout the experience, points, rewards, and AI-generated feedback help tailor learning. The flow simulates a real hospital experience, making learning truly immersive.
          </p>
        </div>

        <div className="scenario-image">
          <img
            src="https://live.staticflickr.com/2930/14067359044_fd6ae2ff27_b.jpg"
            alt="Nursing Scenario Simulation"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Scenario;