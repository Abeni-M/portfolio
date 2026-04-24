import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Shield, Zap, Heart } from 'lucide-react';
import loveImage from '../assets/love.jpg';
import love2Image from '../assets/love2.jpg';

const loveImages = [loveImage, love2Image];

import './About.css';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % loveImages.length);
    }, 1000); // 1 second interval
    return () => clearInterval(interval);
  }, []);

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
            <h2 className="text-4xl font-extrabold mb-8">education and skills<br />Digital Solutions</h2>
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

        {/* The Heart Behind the Code */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="love-section glass-card mt-24 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 lg:gap-16 border-t-2 border-pink-500/20"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <motion.div 
            whileHover={{ scale: 1.02, rotate: -2 }}
            className="love-image-wrapper shrink-0 relative w-full max-w-[280px] md:max-w-[320px] mx-auto md:mx-0 h-[380px] md:h-[450px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-primary rounded-2xl blur-xl opacity-40"></div>
            <div className="relative w-full h-full z-10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.3)] border border-white/10">
              <AnimatePresence>
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={loveImages[currentImageIndex]} 
                  alt="My Inspiration" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  style={{ objectPosition: 'center' }} 
                />
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="love-content z-10">
            <div className="flex items-center gap-3 mb-4">
              <Heart size={20} className="text-pink-500 animate-pulse" fill="currentColor" />
              <span className="text-pink-500 font-bold tracking-widest text-sm uppercase block">My Heart & Inspiration</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">Beyond the Code</h3>
            <div className="text-muted space-y-5 text-lg leading-relaxed relative">
              <p>
                In a world governed by logic, algorithms, and rigid structures, you are my beautiful exception. 
                You bring profound warmth to the cold screens and vibrant color to the binary monochrome of my days. 
                Every late-night debugging session, every complex system I build, and every milestone I reach 
                is deeply fueled by the endless love, belief, and support you pour into me.
              </p>
              <p>
                You are my calmest harbor in the chaos of life, my greatest joy, and the most breathtaking reality 
                I could ever know. More than just my partner, you are the very soul of my ambition. I love you 
                deeper than any ocean, infinitely more than words could ever convey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
