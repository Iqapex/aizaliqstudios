import React from 'react';
import '../styles/FuturePlans.css';

const plans = [
  {
    title: 'Remote Learning & Simulation',
    description:
      'We aim to offer accessible remote learning tools and virtual simulations to reach underserved regions.',
    image: 'https://live.staticflickr.com/153/376037119_7ab1ab77dc_m.jpg',
    alt: 'Remote Learning',
    reverse: true,
  },
  {
    title: 'Immersive VR & AR',
    description:
      'We plan to introduce VR and AR to enable hands-on training in realistic, low-risk virtual environments.',
    image:
      'https://images.stockcake.com/public/8/1/9/819abc05-6cd9-4039-9b08-46f12cf10019/seniors-enjoy-vr-stockcake.jpg',
    alt: 'Virtual Reality',
    reverse: false,
  },
];

const FuturePlans = () => {
  return (
    <section className="future-section">
      <div className="future-header">
        <h2>Future Plans</h2>
        <p>Empowering the next generation of nurses through cutting-edge innovation.</p>
      </div>

      <div className="future-list">
        {plans.map((plan, index) => (
          <div
            className={`future-row ${plan.reverse ? 'row-reverse' : ''}`}
            key={index}
          >
            <div className="future-image">
              <img src={plan.image} alt={plan.alt} loading="lazy" />
            </div>
            <div className="future-text">
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FuturePlans;