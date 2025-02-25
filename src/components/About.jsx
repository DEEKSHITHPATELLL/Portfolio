import React from 'react';
import { Link } from "react-router-dom";
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I am a passionate Full Stack Developer with expertise in modern web technologies.
            My journey in software development has equipped me with a strong foundation in
            both front-end and back-end development, allowing me to create seamless and
            efficient web applications.
          </p>
          <p className="about-text">
            With a keen eye for design and a focus on user experience, I strive to build
            applications that not only function flawlessly but also provide an intuitive
            and engaging user interface.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
          <div className="about-buttons">
            <Link to="/contact" className="about-button primary">Get in Touch</Link>
            <a href="/resume.pdf" className="about-button secondary" download="My_Resume.pdf">
  Download CV
</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;