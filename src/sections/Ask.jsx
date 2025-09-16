import React from 'react';
import '../styles/Ask.css';

const Ask = () => {
  return (
    <section className="ask-section" id="ask">
      <div className="ask-container">
        <h2 className="ask-title">Our Ask</h2>
        <div className="ask-highlight">
          <p>💰 We are seeking <strong>₹50 Lakhs</strong> for <strong>3% equity dilution</strong>.</p>
        </div>
        <p className="ask-detail">
          This funding will empower us to scale content, enhance AI-powered learning, expand to more institutions, 
          and build stronger healthcare outcomes across India — starting with the North-East.
        </p>
        <p className="ask-cta">🚀 Let’s create impact together — in healthcare, education, and beyond.</p>
      </div>
    </section>
  );
};

export default Ask;