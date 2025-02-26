import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Innovate",
    description: "Innovate is a platform connecting startupers, funders, and insight seekers.Through this application Startupers can showcase ideas, analyze success rates, and attract investors. Funders can explore ideas of startupers and connect for potential investments, while insight seekers access market trends. A secure database and AI assistant enhance collaboration and data-driven decisions.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/DEEKSHITHPATELLL/Innovate.git"
  },
  {
    title: "Food Donation Management System",
    description: "Food Donation Management is a web application connecting food donors and NGOs to reduce waste and support community welfare. Donors can list surplus food, while NGOs receive real-time notifications and assign nearby teams for collection. A built-in map improves coordination, and all data is securely stored in Database, ensuring traceability and efficient food distribution.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/DEEKSHITHPATELLL/Food-donation-management-.git"
  },
  {
    title: "Crop-Price-Prediction",
    description: "I developed a Machine Learning model using Random Forest Regressor to predict crop prices, helping farmers to make informed decisions. This web applicattion collects location, crop type, year, and rainfall data, provides historical prices, and integrates real-time weather updates. It visualizes trends with graphs and can expand for broader coverage.",
    technologies: ["Python", "Flask", "RandomForestRegressor"],
    link: "#",
    github: "https://github.com/DEEKSHITHPATELLL/Crop-Price-Prediction.git"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h1 className="section-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;