import React from 'react';
import '../styles/Contacts.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Contact_us_logo.png"
          alt="Contact Us"
        />
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you. Reach out to us using the form or contact details below.</p>

          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:aizaliqstudios@gmail.com">aizaliqstudios@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918981464738">+91 8981464738</a></p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" action="#">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;