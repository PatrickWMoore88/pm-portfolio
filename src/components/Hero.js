import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hey, I'm Patrick 👋</h1>
        <p>
          I build intuitive, responsive dashboards with interactive filters, collapsible sidebars, and clean design systems.
        </p>
        <a href="#projects" className="cta-button">Check out my work</a>
      </div>
    </section>
  );
}

export default Hero;
