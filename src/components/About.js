import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/images/PatrickMoore.jpg`} alt="Patrick Moore" />
        </div>
        <p>
            I'm a web developer focused on building smooth, user-centered interfaces. My work bridges clean design with technical rigor—think collapsible sidebars, facet filters, and snappy dashboards.
        </p>
    </section>
  );
}

export default About;
