import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BecomeMember.css";

const PLANS = [
  { key: "basic", label: "Basic Plan", price: 99 },
  { key: "intermediate", label: "Intermediate Plan", price: 499 },
  { key: "medium", label: "Medium Plan", price: 799 },
  { key: "advanced", label: "Advanced Plan", price: 999 },
];

const BecomeMember = () => {
  const nav = useNavigate();

  const goToBank = (planKey) => {
    // Navigate to bank payment page with plan parameter
    nav(`/bank-payment?plan=${planKey}`);
  };

  return (
    <div className="container">
      <h2>Become a Member</h2>
      <p className="small">
        Choose a plan and click <strong>Pay Now</strong>. You’ll be redirected to
        the secure bank payment page to complete your details.
      </p>

      <div className="plans">
        {PLANS.map((p) => (
          <div className="card" key={p.key}>
            <h3>{p.label}</h3>
            <p style={{ fontSize: 18 }}>₹{p.price}/month</p>
            <button className="btn" onClick={() => goToBank(p.key)}>
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BecomeMember;
