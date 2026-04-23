import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap } from 'lucide-react';

import './About.css';

const About = () => {
  const serviceList = [
    {
      title: 'Video Editing',
      desc: 'End-to-end architecture using adobe premiere pro, after effects, photoshop .',
      icon: <Code size={24} />
    },
    {
      title: 'Full-Stack Development',
      desc: 'End-to-end architecture using React, Node.js, and modern frameworks.',
      icon: <Code size={24} />
    },
    {
      title: 'Database Design',
      desc: 'Expert PostgreSQL modeling for high-scale relational data.',
      icon: <Database size={24} />
    },
    {
      title: 'System Security',
      desc: 'Rigorous network security and role-based access control.',
      icon: <Shield size={24} />
    }
  ];

  return (
    <section id="about" className="about-premium">
      <div className="container">
        <div className="about-grid-premium">
          {/* Services Column */}
          <div className="services-column">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">What I Do</span>
            <div className="services-list">
              {serviceList.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="service-item glass-card p-6 mb-4 flex items-start gap-4"
                >
                  <div className="service-icon text-primary mt-1">{service.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{service.title}</h4>
                    <p className="text-sm text-muted">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Biography Column */}
          <div className="bio-column">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">My Background</span>
            <h2 className="text-4xl font-extrabold mb-8">Engineering Robust <br />Digital Solutions</h2>
            <div className="bio-text text-muted space-y-6">
              <p>
                My approach to computer science is grounded in the belief that performance starts at the database layer.
                As a Computer Science graduate from Debre Berhan University, I have spent years mastering
                the intersection of clean code and reliable infrastructure.
              </p>
              <p>
                Currently serving as the Developer and adminstrator at Kudeja, I have spearheaded the transformation
                of their e-commerce ecosystem. My work focuses on PostgreSQL optimization, real-time
                concurrency, and building systems that scale without compromise.
              </p>
              <div className="stats-mini flex gap-8 mt-10">
                <div className="mini-stat">
                  <Zap size={20} className="text-primary mb-2" />
                  <span className="block font-bold">Fast Scale</span>
                  <span className="text-xs">Architectures</span>
                </div>
                <div className="mini-stat">
                  <Shield size={20} className="text-primary mb-2" />
                  <span className="block font-bold">Secure</span>
                  <span className="text-xs">Networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
