import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap } from 'lucide-react';

import './About.css';

const About = () => {

  const serviceList = [
    {
      title: 'Conversion-Focused E-commerce',
      desc: 'Building marketplaces that handle 5,000+ daily clients with seamless checkout and inventory logic.',
      icon: <Zap size={24} />
    },
    {
      title: 'Scalable SaaS Architecture',
      desc: 'Architecting Node.js & PostgreSQL systems designed to grow from 100 to 100k users without friction.',
      icon: <Code size={24} />
    },
    {
      title: 'High-Performance Databases',
      desc: 'Optimizing PostgreSQL queries and structures for sub-second response times in high-traffic apps.',
      icon: <Database size={24} />
    },
    {
      title: 'Infrastructure & Security',
      desc: 'Ensuring 99.9% uptime and bulletproof security for your business-critical digital platforms.',
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
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6 block">The Digital Architect</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Bridging Code <br />& Creativity</h2>
            <div className="bio-text text-muted space-y-6">
              <p>
                I thrive at the intersection of technical precision and
                creative vision. My journey in technology is driven by a
                dual passion for high-performance coding and cinematic
                storytelling. To me, a database is the foundation, but the user
                experience is the story.
              </p>
              <p>
                As the Lead Developer and Administrator at Kudeja,
                I spearheaded the creation of a sophisticated digital marketplace.
                From architecting complex ordering systems to managing real-time
                inventory, I've built a platform where thousands of clients can
                interact and transact seamlessly.
              </p>
              <p>
                My creative background in video editing isn't
                just a hobby—it's my edge. It allows me to
                approach UI/UX with a director's eye for detail,
                ensuring every digital product I build is as visually
                stunning as it is technically sound. My ultimate goal is
                to build a pioneering company that sets new standards in
                the digital tech landscape.
              </p>
              <div className="testimonial-mini glass-card p-6 mt-10 border-l-4 border-primary">
                <p className="italic text-sm mb-4">
                  "Kudeja Trading PLC was very happy with the project Abenezer delivered. He handled our ecosystem of 5,000+ clients with exceptional technical skill."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex-center text-[10px] font-bold">KT</div>
                  <div>
                    <span className="block text-xs font-bold">Management Team</span>
                    <span className="text-[10px] text-muted">Kudeja Trading PLC</span>
                  </div>
                </div>
              </div>

              <div className="stats-mini flex gap-8 mt-10">
                <div className="mini-stat">
                  <Zap size={20} className="text-primary mb-2" />
                  <span className="block font-bold">99.9%</span>
                  <span className="text-xs">System Uptime</span>
                </div>
                <div className="mini-stat">
                  <Shield size={20} className="text-primary mb-2" />
                  <span className="block font-bold">Secure</span>
                  <span className="text-xs">Enterprise Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block underline underline-offset-8">My Arsenal</span>
            <h2 className="text-4xl font-extrabold mb-6">Technologies & Tools</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', level: 'Expert' },
              { name: 'Node.js', level: 'Advanced' },
              { name: 'PostgreSQL', level: 'Expert' },
              { name: 'Python', level: 'Intermediate' },
              { name: 'Adobe Premiere', level: 'Professional' },
              { name: 'After Effects', level: 'Advanced' },
              { name: 'Docker', level: 'Intermediate' },
              { name: 'AWS', level: 'Advanced' },
              { name: 'Git', level: 'Expert' },
              { name: 'TypeScript', level: 'Advanced' },
              { name: 'Redis', level: 'Intermediate' },
              { name: 'Figma', level: 'Intermediate' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="tech-card glass-card p-4 text-center border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="text-sm font-bold mb-1">{tech.name}</div>
                <div className="text-[10px] text-primary uppercase font-black tracking-widest opacity-60">{tech.level}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
