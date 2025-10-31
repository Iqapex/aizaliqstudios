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

  // ✅ Vite-friendly API variable
  const API = import.meta.env.VITE_API_URL || "https://aizaliq-studios-backend.onrender.com";

  const confirmPayment = async (e) => {
    e.preventDefault();
    try {
      // ✅ Corrected API endpoint and payload
      const { data } = await axios.post(`${API}/api/pay/bank`, {
        plan,
        payerName: form.payerName,
        accountNumber: form.accountNumber,
        bankName: form.bankName,
        note: form.note,
      });

      const subscriptionId = data?.subscriptionId;
      if (!subscriptionId) throw new Error("Subscription ID not received");

      alert("✅ Payment details submitted successfully!");
      nav(`/signup?planId=${subscriptionId}&plan=${plan}`);
    } catch (err) {
      console.error(err);
      alert("❌ Payment failed. Please try again.");
    }
  };


  return (
    <div className="container">
      <h2>Bank Payment for {plan.toUpperCase()} Plan</h2>
      <p>Please transfer the amount to the account below and confirm:</p>

      <div style={{ marginTop: 12 }}>
        <div style={{ marginBottom: 8, textAlign: "left" }}>
          <strong>Our Bank Details:</strong>
          <div>Account Name: Aizaliq Studios</div>
          <div>Account Number: 1234567890</div>
          <div>Bank: State Bank of India</div>
          <div>IFSC: SBIN0001234</div>
        </div>

        <form onSubmit={confirmPayment}>
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
            onChange={(e) =>
              setForm({ ...form, accountNumber: e.target.value })
            }
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
