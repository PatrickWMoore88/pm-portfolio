import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hey, I'm Patrick 👋</h1>
        <p>
          Results-driven Lead Software/DevOps Engineer with over 11+ years of comprehensive IT experience, including 4.5+ years specializing in cloud infrastructure and automation. Expert in AWS/Azure cloud services, CI/CD implementation, and infrastructure as code. Proven track record of delivering scalable deployment solutions and managing complex multi-OS environments. Strong foundation in networking concepts, security implementation, and system architecture.
        </p>
        <a href="#projects" className="cta-button">Check out my work</a>
      </div>
    </section>
  );
}

export default Hero;
