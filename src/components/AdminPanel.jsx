import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [subs, setSubs] = useState([]);

  const API = import.meta.env.VITE_API_URL || "https://aizaliq-studios-backend.onrender.com";
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }

    // Fetch users
    axios
      .get(`${API}/api/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error(err);
        alert("Authentication error. Please log in again.");
      });

    // Fetch subscriptions
    axios
      .get(`${API}/api/admin/subscriptions`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSubs(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  const updateSub = async (id, status) => {
    try {
      await axios.put(
        `${API}/api/admin/subscription/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const refreshed = await axios.get(`${API}/api/admin/subscriptions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubs(refreshed.data);
    } catch (err) {
      console.error(err);
      alert("Failed to update subscription status.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Admin Panel</h2>
      </div>

      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Subscription</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.email}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>{u.subscription ? u.subscription.plan : "None"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Subscriptions</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((s) => (
            <tr key={s._id}>
              <td>{s.plan}</td>
              <td>₹{s.amount}</td>
              <td>{s.status}</td>
              <td>{s.payerDetails?.payerName || "N/A"}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => updateSub(s._id, "active")}
                >
                  Activate
                </button>
                <button
                  className="btn cancel-btn"
                  onClick={() => updateSub(s._id, "cancelled")}
                  style={{ marginLeft: 8 }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
