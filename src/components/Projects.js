import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <ProjectCard
          title="ClientTell"
          description="Interactive CRM for my company Conversion Web Design"
          image={`${process.env.PUBLIC_URL}/images/ClientTellScreenShot.png`}
          repo="https://github.com/PatrickWMoore88/ClientTell"
          demo="https://clienttell-production.up.railway.app/"
        />
        <ProjectCard
          title="Conversion Web Design"
          description="Website for my company"
          image={`${process.env.PUBLIC_URL}/images/CWDSite.png`}
          demo="https://conversionwebdesign.com/"
        />
        <ProjectCard
          title="NASA Life Science Portal"
          description="Interactive website for NASA Life Science research"
          image={`${process.env.PUBLIC_URL}/images/NLSP.png`}
          demo="https://nlsp.nasa.gov/explore/page/home"
        />
        <ProjectCard
          title="What's In The Box"
          description="Apparatus to convert physical files into digital data "
          image={`${process.env.PUBLIC_URL}/images/RadixData.png`}
          demo="https://www.radixdata.com/"
        />
      </div>
    </section>
  );
}

export default Projects;