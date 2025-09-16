import React from 'react';
import '../styles/BusinessModel.css';

const revenueStreams = [
  {
    title: 'Subscription Model',
    desc: 'Users subscribe monthly or yearly to access all features and updates.',
    icon: '📦',
  },
  {
    title: 'Pay-per-report',
    desc: 'One-time purchase model for specific insights or case-based results.',
    icon: '🧾',
  },
  {
    title: 'Advertising',
    desc: 'Relevant health/edu-tech brands can advertise on the platform.',
    icon: '📢',
  },
  {
    title: 'Consultancy Services',
    desc: 'Market analysis, AI-powered reports, or educational content development.',
    icon: '💼',
  },
  {
    title: 'Partnerships',
    desc: 'Revenue sharing for referrals and institutional licensing.',
    icon: '🤝',
  },
];

const BusinessModel = () => {
  return (
    <section className="business-section" id="business-model">
      <h2 className="section-title">Business Model</h2>

      <div className="pricing-card">
        <h3>Simple. Flexible. Affordable.</h3>
        <p className="price">₹999 / month</p>
        <p className="price yearly">or ₹9999 / year</p>
        <p className="note">Includes all features, updates, and AI personalization.</p>
      </div>

      <h3 className="revenue-title">Revenue Streams</h3>
      <div className="revenue-grid">
        {revenueStreams.map((item, index) => (
          <div className="revenue-card" key={index}>
            <div className="revenue-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessModel;