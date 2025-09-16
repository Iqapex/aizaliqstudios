import React from 'react';
import '../styles/BusinessModels.css';

const BusinessModel = () => {
  return (
    <section className="business-model">
      <h2 className="bm-title">Our Business Model</h2>
      <p className="bm-subtitle">Flexible, scalable, and built to support education at every level.</p>

      <div className="bm-plans">
        <div className="bm-card">
          <h3>Subscription Model</h3>
          <p>Monthly: ₹999<br />Yearly: ₹9999</p>
          <p>Unlimited access to all features and updates.</p>
        </div>

        <div className="bm-card">
          <h3>Pay-as-you-go</h3>
          <p>Ideal for institutions and researchers.<br />Pay only for what you use.</p>
        </div>
      </div>

      <h3 className="bm-stream-title">Revenue Streams</h3>
      <div className="bm-streams">
        <div className="stream-item">📊 Subscription Revenue</div>
        <div className="stream-item">📄 Pay-per-report Access</div>
        <div className="stream-item">📢 Educational Advertisements</div>
        <div className="stream-item">🧠 Consultancy Services</div>
        <div className="stream-item">🤝 Strategic Partnerships</div>
      </div>
    </section>
  );
};

export default BusinessModel;