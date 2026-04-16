import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award } from 'lucide-react';

import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-stack Developer (Lead)',
      company: 'Kudeja E-commerce Platform',
      location: 'Addis Ababa, Ethiopia',
      period: '2025 - Present',
      description: 'Leading the development of a comprehensive e-commerce and property management platform. Built advanced administrative dashboards for ad management, integrated live chat services, and implemented role-based access control (RBAC). Optimized UI/UX for high-visibility service cards and interactive data tables.',
      icon: <Briefcase size={20} className="icon-blue" />
    },
    {
      title: 'Intern',
      company: 'Cooperative Bank of Oromia',
      location: 'Addis Ababa, Ethiopia',
      period: '2024',
      description: 'Gained practical knowledge of banking systems, including network infrastructure, core banking software, and day-to-day IT operations. Learned about IP configuration, subnetting, and secure internal networking systems.',
      icon: <Briefcase size={20} className="icon-blue" />
    },
    {
      title: 'Freelance & Volunteer IT Support',
      company: 'Jimma Arjo & Debre Berhan',
      period: 'Ongoing',
      description: 'Maintained and repaired computers, installed software and operating systems. Managed internet connectivity, router setup, and LAN network diagnostics.',
      icon: <Award size={20} className="icon-green" />
    },
    {
      title: 'Bachelor of Computer Science',
      company: 'Debre Berhan University',
      period: 'Jan 2021 - Mar 2025',
      description: 'Completed Bachelor of Science in Computer Science. Final Project: DBU Daily Service – a student service portal built with HTML, CSS, PHP & MySQL.',
      icon: <Calendar size={20} className="icon-purple" />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">My Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              
              <div className="experience-card glass">
                <div className="experience-header">
                  <div className="company-info">
                    <div className="company-logo-bg">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="company-name">{exp.company}</p>
                    </div>
                  </div>
                  <div className="experience-period">
                    {exp.period}
                  </div>
                </div>
                
                <p className="experience-desc">
                  {exp.description}
                </p>
                
                {exp.location && (
                  <p className="experience-location">
                    📍 {exp.location}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
