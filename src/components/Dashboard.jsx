import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${API}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);

 return (
  <div className="dashboard">
    {/* Welcome Section */}
    <div className="welcome-section">
      <h1>Welcome, {user?.name || "User"} 🎉</h1>
      <p>You are now logged in.</p>
    </div>

    {/* Interview Section */}
    <div className="group">
      <h3 className="section-title">Interview</h3>
      <div className="group-items">
        <div className="group-item">Domain Specific Interview</div>
        <div className="group-item">Competency Based Interview</div>
        <div className="group-item">HR Interview</div>
      </div>
    </div>

    {/* Popular AI Solutions */}
    <div className="group">
      <h3 className="section-title">Popular AI Solutions</h3>
      <div className="group-items">
        {[
          "Ask Anything",
          "Generate Images",
          "Generate Videos",
          "Life Coach",
          "Medical Guide",
          "Psychologist",
          "Office Assistant",
          "Language Expert",
          "Science Tutor",
          "Career Counselor",
          "IQ Assessor",
          "Social Media Expert",
        ].map((solution, idx) => (
          <div className="group-item" key={idx}>{solution}</div>
        ))}
      </div>
      <div className="explore-button-container">
        <button className="explore-button">Explore</button>
      </div>
    </div>

    {/* Subscription Card */}
    <div className="cards-container">
      <div className="card">
        <h4>Subscription Plan: {user?.subscription?.plan || "FREE"}</h4>
        <p>Daily AI Credits: {user?.credits || 20}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: user?.subscription ? "70%" : "10%" }}
          ></div>
        </div>
        <button className="card-btn">Increase your Daily AI Credit limit</button>
      </div>

      <div className="card green">
        <h4>Your Current Points: {user?.points || 131}</h4>
        <p>Refer friends and earn rewards!</p>
        <button className="card-btn">Know more</button>
      </div>
    </div>

    {/* LLM Section */}
    <div className="llm-section">
      <h4>Get access to 100+ LLMs with higher AI Credit Limit.</h4>
      <div className="llm-icons">
        {[
          { name: "ChatGPT", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58UpQdoq4AcJGMdJYoIJ8qHApwhXHDj7auQ&s" },
          { name: "Claude", img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" },
          { name: "Gemini", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" },
          { name: "DeepSeek", img: "https://toffeedev.com/wp-content/uploads/2025/03/deepseek-1.webp" },
          { name: "Perplexity", img: "https://heute-at-prod-images.imgix.net/2025/01/28/ecafc8cd-84cf-4fac-a8f6-d980cffe040d.jpeg?rect=0%2C200%2C3000%2C1687&auto=format" },
          { name: "Grok", img: "https://images.seeklogo.com/logo-png/61/2/grok-logo-png_seeklogo-613403.png" },
        ].map((llm, i) => (
          <div className="llm-item" key={i}>
            <img src={llm.img} alt={llm.name} />
            <span>{llm.name}</span>
          </div>
        ))}
      </div>
      <button className="subscribe-btn">🛒 Plan starts @ ₹49 monthly! Subscribe Now</button>
    </div>

    {/* ✅ Blog Section */}
    <div className="blog-section">
      <div className="blog-card">
        <img src="https://ns-hrms-s3-bucket.s3.amazonaws.com/media/marketing_website/thumbnail/250728142653_Banner-resize_From-automation-to-innovation_-How-AI-business-solutions-are-reshaping-industries_1200x600.jpg" alt="Food Packaging" />
        <div className="blog-content">
          <h5>Simplifying Food Packaging Compliance: AI’s Role</h5>
        </div>
      </div>

      <div className="blog-card">
        <img src="https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/644975a9-d989-49bf-89e5-b57fe2c8a520.png" alt="AI Ombudsman" />
        <div className="blog-content">
          <h5>Fairness at Your Fingertips: Exploring the AI Ombudsman</h5>
        </div>
      </div>

      <div className="blog-card">
        <img src="https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/05/Repository.webp?lossy=1&quality=75&webp=92&ssl=1" alt="Translation Tool" />
        <div className="blog-content">
          <h5>Breaking Language Barriers: The Revolutionary Translation Tool</h5>
        </div>
      </div>
    </div>
  </div>
);

}
