import React from 'react';
import '../styles/Technologys.css';

const Technology = () => {
  return (
    <section className="technology-section">
      <div className="tech-header">
        <h2>Technology Stack</h2>
        <p>
          Empowering nursing education through powerful tools and infrastructure built for performance,
          scalability, and real-time collaboration.
        </p>
      </div>

      <div className="tech-grid">
        <div className="tech-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg" alt="Unity3D" />
          <h3>Unity 3D</h3>
          <p>Used to build immersive and interactive simulation environments for learners.</p>
        </div>

        <div className="tech-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
          <h3>AWS Cloud</h3>
          <p>Leveraging Lambda, API Gateway, and S3 for a secure and serverless backend infrastructure.</p>
        </div>

        <div className="tech-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" alt="Google Sheets" />
          <h3>Google Sheets API</h3>
          <p>Real-time collaboration and data editing through familiar spreadsheets for non-tech users.</p>
        </div>

        <div className="tech-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C#" />
          <h3>C# Scripting</h3>
          <p>Handles the logic and frontend interactivity inside the Unity engine.</p>
        </div>

        <div className="tech-card">
          <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png
" alt="DynamoDB" />
          <h3>DynamoDB</h3>
          <p>Highly scalable NoSQL database for storing game progress, questions, and performance data.</p>
        </div>
      </div>
    </section>
  );
};

export default Technology;