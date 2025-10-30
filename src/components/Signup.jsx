import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/SignUp.css';

const Signup = () => {
  const [q] = useSearchParams();
  const planId = q.get('planId');
  const plan = q.get('plan');
  const nav = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/auth/register`, {
        name: form.name,
        email: form.email,
        password: form.password,
        planId,
      });
      alert('Signup successful! Please login to continue.');
      nav(`/login?plan=${plan}`);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="container">
      <h2>Sign Up {plan ? `- ${plan}` : ''}</h2>
      <form onSubmit={submit} className="form">
        <input
          className="input"
          value={form.name}
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          autoComplete="name"
        />
        <input
          className="input"
          type="email"
          value={form.email}
          placeholder="Email Address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          autoComplete="email"
        />
        <input
          className="input"
          type="password"
          value={form.password}
          placeholder="Create Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          autoComplete="new-password"
        />
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
