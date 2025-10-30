import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/auth/users");
    const data = await res.json();
    setUsers(data);
  };

  const updateStatus = async (email, status) => {
    await fetch(`http://localhost:5000/api/auth/users/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin Dashboard</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.email}>
              <td>{u.email}</td>
              <td>{u.name}</td>
              <td>{u.status || "Pending"}</td>
              <td>
                <button onClick={() => updateStatus(u.email, "approved")}>Approve</button>
                <button onClick={() => updateStatus(u.email, "rejected")} style={{ marginLeft: "10px" }}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
