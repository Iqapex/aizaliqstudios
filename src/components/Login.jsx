import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Login.css';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [q] = useSearchParams();
    const plan = q.get('plan');
    const nav = useNavigate();
    const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API}/api/auth/login`, form);
            localStorage.setItem('token', res.data.token);
            if (res.data.user.role === 'admin') nav('/admin');
            else {
                alert(`Welcome! You are logged in${plan ? ' for ' + plan : ''}`);
                nav('/dashboard');
            }
        } catch (err) {
            alert(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={submit}>
                <h2>Sign In</h2>
                <input
                    className="input"
                    type="email"
                    value={form.email}
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    autoComplete="email"
                />
                <div className="password-field">
                    <input
                        className="input"
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        placeholder="Password"
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                        name="password"
                        autoComplete="current-password"
                    />

                    <span
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </span>
                </div>
                <button className="btn" type="submit">
                    Sign In
                </button>
            </form>
        </div>
    );
}
