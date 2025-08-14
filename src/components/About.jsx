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
          I am a passionate Full-Stack Developer & Machine Learning Engineer, combining the power of modern web technologies with intelligent data-driven solutions.

As a Front-End Developer, I craft visually stunning and highly interactive web applications using React, JavaScript, ensuring seamless user experiences across all devices.

As a Back-End Developer, I build scalable, secure, and efficient server-side architectures using technologies like Node.js, Express.js,MongoDB, and SQL, integrating APIs to create robust web applications.

Beyond web development, I am a Machine Learning Engineer with expertise in deep learning, designing intelligent systems that extract insights from data and drive innovation.

With a strong foundation in both software development and AI, I thrive on building innovative solutions that bridge technology and intelligence
          </p>
          <p className="about-text">
            With a keen eye for design and a focus on user experience, I strive to build
            applications that not only function flawlessly but also provide an intuitive
            and engaging user interface.
          </p>
          <div className="about-buttons">
            <Link to="/contact" className="about-button primary">Get in Touch</Link>
            <a href="/DEEKSHITH_PATEL_LL_SIT_CSE_RESUME.pdf" className="about-button secondary" download="My_Resume.pdf">
  Download CV
</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;