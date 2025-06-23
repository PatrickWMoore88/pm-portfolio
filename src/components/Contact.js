import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact"  className="contact">
      <h2>Contact Me</h2>
      <p>You can reach me via email or connect with me on LinkedIn or GitHub.</p>
      <ul>
        <li>
          <a href="mailto:patrickwmoore88@gmail.com">patrickwmoore88@gmail.com</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/PatrickWMoore88" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/patrick-moore-298a49b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
