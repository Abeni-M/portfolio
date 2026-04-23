import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckSquare, Award } from 'lucide-react';

import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: ' Developer and adminstrator',
      company: 'Kudeja Trading PLC',
      location: 'Addis Ababa, Ethiopia',
      period: 'Present',
      description: 'Architecting and leading development of a high-end multi-faceted e-commerce and property platform. Focused on high-scale PostgreSQL management and secure administrative infrastructure.',
      skills: ['PostgreSQL', 'Node.js', 'React', 'Socket.io'],
      type: 'Work'
    },

    {
      role: 'Computer Science (B.Sc.)',
      company: 'Debre Berhan University',
      location: 'Debre Berhan, Ethiopia',
      period: '2021 - 2025',
      description: 'web developing and Database systems. Developed DBU Daily Service — a campus-wide notification and service management portal.',
      skills: ['Software Engineering', 'Algorithms', 'PHP/MySQL'],
      type: 'Education'
    }
  ];

  return (
    <section id="experience" className="bg-secondary/30">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block underline underline-offset-8">My Journey</span>
          <h2 className="text-5xl font-extrabold mb-6">Experience & Education</h2>
        </div>

        <div className="experience-stack">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="experience-record glass-card p-0 overflow-hidden mb-8"
            >
              <div className="record-header flex flex-col md:flex-row items-center border-b border-border">
                <div className="record-type p-8 bg-primary/5 border-r border-border min-w-[140px] flex-center flex-col">
                  {exp.type === 'Work' && <Briefcase className="text-primary mb-2" size={24} />}
                  {exp.type === 'Internship' && <Award className="text-primary mb-2" size={24} />}
                  {exp.type === 'Education' && <CheckSquare className="text-primary mb-2" size={24} />}
                  <span className="text-[10px] font-black uppercase text-primary tracking-widest">{exp.type}</span>
                </div>

                <div className="record-title-area p-8 flex-grow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-bold tracking-wide">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold opacity-60 flex items-center gap-2">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="record-body p-8 flex flex-col lg:flex-row gap-10">
                <div className="lg:w-2/3">
                  <p className="text-muted leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted font-bold">
                    <MapPin size={12} className="text-primary" /> {exp.location}
                  </div>
                </div>

                <div className="lg:w-1/3">
                  <span className="text-[10px] font-black uppercase text-muted tracking-widest mb-4 block">Key Competencies</span>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
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
