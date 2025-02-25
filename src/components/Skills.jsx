import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Skills.css";

const skills = [
  { name: 'React.js', level: 90, color: '#61DAFB' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E' },
  { name: 'HTML/CSS', level: 95, color: '#E34F26' },
  { name: 'Node.js', level: 75, color: '#339933' },
  {name:'MongoDB',level:70,color:'#4F4F4F'},
  {name:'Express',level:65,color:'#4F4F4F'},
  {name:'Tailwind CSS',level:80,color:'#4F4F4F'},
  {name:'machine learning',level:75,color:'#4F4F4F'},
  {name:'python',level:70,color:'#4F4F4F'},
  {name:'C++',level:65,color:'#4F4F4F'},
  {name:'git',level:75,color:'#4F4F4F'},
];

const SkillBar = ({ skill, inView }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundColor: skill.color }}
          className="skill-progress"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="skills-section" ref={ref}>
      <div className="skills-container">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="skills-title"
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="skills-grid"
        >
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="other-skills"
        >
          <h3 className="other-skills-title">Other Skills & Tools</h3>
          <div className="skills-tags">
            {['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'Redux'].map((tool) => (
              <motion.span 
                key={tool}
                whileHover={{ scale: 1.1 }}
                className="skill-tag"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;