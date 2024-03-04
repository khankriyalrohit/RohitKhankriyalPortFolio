import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageSrc, technologies, title, description }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-details">
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
