import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, GraduationCap, MapPin } from 'lucide-react';

import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-stack Developer (Lead)',
      company: 'Kudeja E-commerce Platform',
      location: 'Addis Ababa, Ethiopia',
      period: '2025 - Present',
      description: 'Leading the development of a high-end e-commerce and property management platform. Architected advanced admin dashboards for ad management, integrated real-time communication services, and implemented secure role-based access control. Spearheaded the optimization of complex UI components and data management workflows.',
      icon: <Briefcase size={22} className="text-primary" />,
      type: 'work'
    },
    {
      title: 'Software Engineering Intern',
      company: 'Cooperative Bank of Oromia',
      location: 'Addis Ababa, Ethiopia',
      period: '2024',
      description: 'Deep-dived into enterprise banking systems and network infrastructure. Mastered IP configuration, advanced subnetting, and secure internal networking protocols while supporting core banking software operations.',
      icon: <Award size={22} className="text-secondary" />,
      type: 'internship'
    },
    {
      title: 'B.Sc. in Computer Science',
      company: 'Debre Berhan University',
      location: 'Debre Berhan, Ethiopia',
      period: '2021 - 2025',
      description: 'Focused on Software Engineering, Data Structures, and Computer Networking. Final Capstone Project: DBU Daily Service – a comprehensive campus management system.',
      icon: <GraduationCap size={22} className="text-primary" />,
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="experience-section py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="badge mb-4">Journey</span>
          <h2 className="section-title gradient-text">Professional Experience</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            A track record of technical excellence and continuous growth in software engineering.
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-items space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="timeline-item relative pl-12 md:pl-0"
              >
                <div className="timeline-dot-wrapper absolute left-0 md:left-1/2 -translate-x-1/2">
                  <div className="timeline-dot glass flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>

                <div className={`timeline-content-wrapper flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right md:pr-[calc(50%+2.5rem)]' : 'md:items-start md:text-left md:pl-[calc(50%+2.5rem)]'}`}>
                  <div className="experience-card glass p-8 w-full max-w-lg transition-all hover:border-primary/50">
                    <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold text-main">{exp.title}</h3>
                      <p className="text-primary font-medium text-lg mt-1">{exp.company}</p>
                    </div>
                    
                    <p className="text-muted leading-relaxed mb-6 text-base">
                      {exp.description}
                    </p>
                    
                    {exp.location && (
                      <div className={`flex items-center gap-2 text-sm text-muted ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <MapPin size={14} className="text-secondary" />
                        {exp.location}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
