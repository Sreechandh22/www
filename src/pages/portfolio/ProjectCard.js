import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
