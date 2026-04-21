import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe2, Briefcase, GraduationCap, Cpu } from 'lucide-react';

import './About.css';

const About = () => {
  const skills = [
    { 
      name: 'Software Engineering', 
      items: ['React', 'JavaScript (ES6+)', 'Node.js', 'Python'], 
      icon: <Cpu className="icon-blue" size={24} /> 
    },
    { 
      name: 'Systems & Backend', 
      items: ['Java', 'PHP', 'C#', 'C/C++'], 
      icon: <Server className="icon-purple" size={24} /> 
    },
    { 
      name: 'Database & Infrastructure', 
      items: ['MySQL', 'SQL Server', 'MongoDB', 'Networking'], 
      icon: <Code2 className="icon-green" size={24} /> 
    },
    { 
      name: 'Professional Skills', 
      items: ['IT Support', 'Network Security', 'VLANs', 'System Admin'], 
      icon: <Briefcase className="icon-orange" size={24} /> 
    },
  ];

  return (
    <section id="about" className="about-section py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-4">Background</span>
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            A dedicated technologist focused on creating efficient solutions through clean code and robust systems.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Academic Excellence</h3>
            </div>
            
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I am a detail-oriented and adaptable <span className="text-main font-medium">Computer Science graduate</span> from 
                <span className="text-main font-medium"> Debre Berhan University</span>. 
                My academic journey equipped me with a deep understanding of software engineering 
                principles and complex system architectures.
              </p>
              <p>
                With a strong technical foundation in full-stack development, IT support, and 
                enterprise networking, I specialize in bridging the gap between sophisticated 
                software requirements and robust hardware infrastructure.
              </p>
            </div>
            
            <div className="about-stats flex gap-8 mt-10">
              <div className="stat-item">
                <span className="stat-value">3.5+</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">B.Sc.</span>
                <span className="stat-label">Computer Science</span>
              </div>
            </div>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="skill-card glass p-6"
              >
                <div className="skill-header flex items-center gap-4 mb-4">
                  <div className="skill-icon-bg p-3 rounded-xl bg-white/5">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                </div>
                <div className="skill-items flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="skill-item-tag">
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
