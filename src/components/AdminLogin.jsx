import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css"; // make sure CSS file exists in /src/styles/

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const API = import.meta.env.VITE_API_URL || "https://aizaliq-studios-backend.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/auth/admin-login`, form);
      localStorage.setItem("token", res.data.token);
      alert("Admin login successful!");
      nav("/admin-dashboard"); // ✅ navigate to dashboard
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Invalid admin credentials");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          className="input"
          type="email"
          placeholder="Admin Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          className="input"
          type="password"
          placeholder="Admin Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
