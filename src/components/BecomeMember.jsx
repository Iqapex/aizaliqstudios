import { useNavigate } from 'react-router-dom';
import '../styles/BecomeMember.css';
const PLANS = [
  { key: 'basic', label: 'Basic Plain', price: 99 },
  { key: 'intermediate', label: 'Intermediate', price: 499 },
  { key: 'medium', label: 'Medium Plain', price: 799 },
  { key: 'advanced', label: 'Advanced Plane', price: 999 }
];

export default function BecomeMember() {
  const nav = useNavigate();

  const goToBank = (planKey) => {
    // navigate to bank payment page with plan param
    nav(`/bank-payment?plan=${planKey}`);
  };

  return (
    <div className="container">
      <h2>Become a Member</h2>
      <p className="small">Choose a plan and click Pay Now. You will see a bank payment page where you can add account details.</p>
      <div className="plans">
        {PLANS.map(p => (
          <div className="card" key={p.key}>
            <h3>{p.label}</h3>
            <p style={{fontSize:18}}>₹{p.price}/month</p>
            <button className="btn" onClick={() => goToBank(p.key)}>Pay Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
