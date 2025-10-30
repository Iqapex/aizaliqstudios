import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/AdminPanel.css';


export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [subs, setSubs] = useState([]);
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) { window.location.href = '/login'; return; }
    axios.get(`${API}/api/admin/users`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => setUsers(r.data)).catch(e => { console.error(e); alert('Auth error'); });

    axios.get(`${API}/api/admin/subscriptions`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => setSubs(r.data)).catch(e => console.error(e));
  }, [token]);

  const updateSub = async (id, status) => {
    await axios.put(`${API}/api/admin/subscription/${id}`, { status }, { headers: { Authorization: `Bearer ${token}` } });
    const r = await axios.get(`${API}/api/admin/subscriptions`, { headers: { Authorization: `Bearer ${token}` } });
    setSubs(r.data);
  };

  return (
    <div className="container">
      <div className="header"><h2>Admin Panel</h2></div>

      <h3>Users</h3>
      <table className="table">
        <thead><tr><th>Email</th><th>Name</th><th>Role</th><th>Subscription</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.email}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>{u.subscription ? u.subscription.plan : 'none'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Subscriptions</h3>
      <table className="table">
        <thead><tr><th>Plan</th><th>Amount</th><th>Status</th><th>Payer</th><th>Action</th></tr></thead>
        <tbody>
          {subs.map(s => (
            <tr key={s._id}>
              <td>{s.plan}</td>
              <td>₹{s.amount}</td>
              <td>{s.status}</td>
              <td>{s.payerDetails?.payerName || 'N/A'}</td>
              <td>
                <button className="btn" onClick={()=>updateSub(s._id,'active')}>Activate</button>
                <button className="btn" style={{marginLeft:8}} onClick={()=>updateSub(s._id,'cancelled')}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
