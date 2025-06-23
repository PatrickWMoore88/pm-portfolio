import React from 'react';
import '../styles/Projects.css'

function ProjectCard({ title, description, repo, demo, image }) {
  return (
    <div className="project-card">
        <h3>{title}</h3>
        {image && (
            <div className="project-image">
            <img src={image} alt={`${title} screenshot`} />
            </div>
        )}
        <p>{description}</p>
        <div className="card-links">
            {repo && <a href={repo} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
    </div>
  );
}

export default ProjectCard;