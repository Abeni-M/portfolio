import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';
import { Mail, Github, Linkedin, Globe, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import profileImg from './assets/profile.jpg';

import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const name = "Abenezer Mulatu";
  const email = "abenezermulatu41@gmail.com";
  const phone = "(+251) 986 880 186";
  const location = "Addis Ababa, Ethiopia";
  const githubUrl = "https://github.com/Abeni-M";
  const linkedinUrl = "https://www.linkedin.com/in/abenezer-mulatu-b42595381?utm_source=share_via&utm_content=profile&utm_medium=member_android";

  return (
    <div className="min-h-screen bg-app">
      <Toaster position="top-right" />
      
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="nav-bar glass">
        <div className="nav-container">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            <span className="gradient-text">{name.split(' ')[0]}</span>
            <span className="text-muted">.</span>
          </motion.div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <div className="nav-divider"></div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <div className="nav-profile">
              <img src={profileImg} alt={name} className="nav-avatar" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-background">
          <div className="glow-effect glow-1"></div>
          <div className="glow-effect glow-2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="badge mb-6"
            >
              Available for New Opportunities
            </motion.div>
            
            <h1 className="hero-title mb-6">
              Full-Stack Developer <br />
              <span className="gradient-text">& IT Specialist</span>
            </h1>
            
            <p className="hero-desc mb-8 text-xl leading-relaxed mx-auto">
              Hi, I'm <span className="font-semibold text-main">{name}</span>. 
              A detail-oriented Computer Science graduate passionate about building 
              scalable software and robust network infrastructures.
            </p>
            
            <div className="hero-actions flex flex-wrap gap-4 items-center justify-center">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <div className="flex gap-3">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-icon-btn glass">
                  <Github size={22} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon-btn glass">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            <div className="hero-stats flex gap-12 mt-12 pt-12 border-t border-white/5 w-full justify-center">
              <div>
                <h4 className="text-2xl font-bold">4+</h4>
                <p className="text-sm text-muted">Years Coding</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold">10+</h4>
                <p className="text-sm text-muted">Projects</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold">Addis</h4>
                <p className="text-sm text-muted">Based In</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        >
          <ChevronDown size={32} />
        </motion.div>
      </main>

      <About />
      <Experience />
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text">{name}</h3>
            <p className="text-muted mt-2">Solving real-world problems through technology.</p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="nav-link">Github</a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            </div>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} {name}. Built with React, Vite & Framer Motion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
