import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe2, Briefcase } from 'lucide-react';

import './About.css';

const About = () => {
  const skills = [
    { name: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React'], icon: <Globe2 className="icon-blue" size={24} /> },
    { name: 'Backend', items: ['Java', 'PHP', 'Python', 'C#', 'C/C++'], icon: <Server className="icon-green" size={24} /> },
    { name: 'Database', items: ['MySQL', 'SQL Server'], icon: <Code2 className="icon-purple" size={24} /> },
    { name: 'Networking', items: ['TCP/IP', 'Cisco Router/Switch', 'VLANs', 'DNS'], icon: <Briefcase className="icon-orange" size={24} /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h3 className="sub-title">Who I Am</h3>
            <p>
              I am a detail-oriented and adaptable Computer Science graduate from <strong>Debre Berhan University</strong>. 
              With a strong foundation in system development, IT support, and networking, I am passionate 
              about solving real-world problems through technology.
            </p>
            <p>
              My journey in tech has led me to master a wide range of programming languages and frameworks. 
              I am quick to learn new tools and always eager to contribute to impactful, tech-driven environments.
            </p>
            
            <div className="about-tags">
              <div className="tag">📍 Addis Ababa, Ethiopia</div>
              <div className="tag">🎓 B.Sc. in Computer Science</div>
            </div>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="skill-card glass"
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <div className="skill-items">
                  {skill.items.map((item, i) => (
                    <span key={i} className="skill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
