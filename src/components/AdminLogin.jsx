import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css"; // make sure CSS file exists in /src/styles/

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/admin/login`, form);
      localStorage.setItem("token", res.data.token);
      alert("Admin login successful");
      nav("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
