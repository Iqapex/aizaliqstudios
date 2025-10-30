import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const BankPayment = () => {
  const [q] = useSearchParams();
  const plan = q.get("plan") || "basic";
  const nav = useNavigate();

  const [form, setForm] = useState({
    payerName: "",
    accountNumber: "",
    bankName: "",
    note: "",
  });

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const confirmPayment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/pay/bank`, { plan, ...form });
      const subscriptionId = res.data.subscriptionId;
      alert(`✅ Payment successful for ${plan} plan!`);
      nav(`/signup?planId=${subscriptionId}&plan=${plan}`);
    } catch (err) {
      console.error(err);
      alert("❌ Payment failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Bank Payment — {plan}</h2>
      <p className="small">
        Enter your payment details below (mock bank payment page).
      </p>

      <div style={{ marginTop: 12 }}>
        <div style={{ marginBottom: 8, textAlign: "left" }}>
          <strong>Our Bank Details:</strong>
          <div>Account Name: Aizaliq Studios</div>
          <div>Account Number: 1234567890</div>
          <div>Bank: Demo Bank</div>
          <div>IFSC: DEMO0001234</div>
        </div>

        <form className="form" onSubmit={confirmPayment}>
          <input
            className="input"
            value={form.payerName}
            placeholder="Your Name"
            onChange={(e) => setForm({ ...form, payerName: e.target.value })}
            required
          />
          <input
            className="input"
            value={form.accountNumber}
            placeholder="Your Account Number"
            onChange={(e) => setForm({ ...form, accountNumber: e.target.value })}
            required
          />
          <input
            className="input"
            value={form.bankName}
            placeholder="Your Bank Name"
            onChange={(e) => setForm({ ...form, bankName: e.target.value })}
            required
          />
          <input
            className="input"
            value={form.note}
            placeholder="Optional Note (e.g., Transaction ID)"
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />
          <button className="btn" type="submit">
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BankPayment;
