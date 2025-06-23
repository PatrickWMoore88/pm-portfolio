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
            I'm Patrick Moore, a Lead Software and DevOps Engineer with over a decade of hands-on IT experience and a specialty in building cloud-native infrastructure, scalable automation, and secure deployment pipelines. I thrive at the intersection of full-stack development and systems reliability—designing solutions that are both elegant and battle-tested.
            Whether I’m managing 100+ TB of mission-critical data, deploying CI/CD pipelines across GovCloud and Commercial environments, or leading cross-functional teams through infrastructure modernization, I approach every project with a mix of precision and adaptability. My toolbox includes AWS, Azure, Node.js, Python, PowerShell, and just enough Bash to automate what needs automating.
            I’m also the founder of Conversion Web Design, where I craft targeted digital experiences and SEO strategies for small businesses. That entrepreneurial edge keeps me grounded in the “why” behind the tech.
            At the core, I’m driven by problem-solving, performance tuning, and building systems that scale—clean code meets clean architecture. And when things break (because they do) I fix them faster than you can say "multi-region failover."
        </p>
    </section>
  );
}

export default About;
