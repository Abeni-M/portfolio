import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckSquare, Award } from 'lucide-react';

import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Lead Developer & System Administrator',
      company: 'Kudeja Trading PLC',
      location: 'Addis Ababa, Ethiopia',
      period: 'Jan 2024 - Present',
      description: 'Architecting and managing a high-scale digital marketplace. Developed a seamless client ordering system and multi-vendor ecosystem, focusing on high-concurrency PostgreSQL performance and secure digital infrastructure.',
      skills: ['Marketplace Logic', 'PostgreSQL', 'Node.js', 'React', 'Cloud Security'],
      type: 'Work'
    },
    {
      role: 'Computer Science Graduate (B.Sc.)',
      company: 'Debre Berhan University',
      location: 'Debre Berhan, Ethiopia',
      period: '2021 - 2025',
      description: 'Specialized in Advanced Database Systems and Full-Stack Development. Focused on building scalable campus-wide notification engines and administrative data portals.',
      skills: ['Algorithms', 'Software Architecture', 'PHP/MySQL', 'React'],
      type: 'Education'
    }
  ];

  return (
    <section id="experience" className="experience-premium">
      <div className="container">
        <div className="text-center mb-24">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block underline underline-offset-8">My Career Path</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">Professional Journey</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A timeline of academic excellence and professional leadership in software engineering.
          </p>
        </div>

        <div className="experience-stack max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="experience-record glass-card p-0 overflow-hidden mb-12 border border-white/5 hover:border-primary/30"
            >
              <div className="record-header flex flex-col md:flex-row items-stretch border-b border-border">
                <div className="record-type p-10 bg-primary/5 flex-center flex-col border-r border-border min-w-[160px]">
                  {exp.type === 'Work' && <Briefcase className="text-primary mb-3" size={32} />}
                  {exp.type === 'Education' && <CheckSquare className="text-primary mb-3" size={32} />}
                  <span className="text-[10px] font-black uppercase text-primary tracking-[0.2em]">{exp.type}</span>
                </div>

                <div className="record-title-area p-8 md:p-10 flex-grow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-primary text-lg font-bold tracking-wide flex items-center gap-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                      <span className="text-sm font-bold text-primary flex items-center gap-2">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="record-body p-8 md:p-10 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {exp.description}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted font-bold">
                    <MapPin size={16} className="text-primary" /> {exp.location}
                  </div>
                </div>

                <div className="lg:w-1/3">
                  <span className="text-[10px] font-black uppercase text-muted tracking-widest mb-6 block">Core Competencies</span>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-badge bg-white/5 px-4 py-2 rounded-lg text-xs font-bold border border-white/10 hover:border-primary/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
