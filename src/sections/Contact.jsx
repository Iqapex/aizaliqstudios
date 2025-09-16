import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>📧 Email: <a href="mailto:hello@aizaliq.com">hello@aizaliq.com</a></p>
          <p>📞 Phone: <a href="tel:+919876543210">+91-9876543210</a></p>
          <p>📍 Location: Aizawl, India</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;