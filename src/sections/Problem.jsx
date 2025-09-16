import React from 'react'
import '../styles/Problem.css';

const Problem = () => {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-content">
        <div className="text">
          <h2 className="section-title">The Problem We’re Solving</h2>
          <p className="problem-para">
            Nursing students face a <span className="highlight">shortage of practical training</span>, 
            making it hard to apply their theoretical knowledge.
          </p>
          <p className="problem-para">
            The rise of <span className="highlight">short-form digital content</span> (like reels and TikToks) 
            has significantly reduced attention spans.
          </p>
          <p className="problem-para">
            Many new nurses feel <span className="highlight">unprepared to enter the workforce</span>, leading to 
            preventable mistakes and lower confidence.
          </p>
        </div>

        <div className="image">
          <img
            src="https://prolinkworks.com/sites/default/files/styles/article_teaser/public/images/blog/02-partnering_0.jpg"
            alt="Concerned nurse or healthcare team"
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
