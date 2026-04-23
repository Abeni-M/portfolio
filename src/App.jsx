import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import { Download, Mail, ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';
import profileImg from './assets/profile.jpg';

import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const name = "Abenezer Mulatu";
  
  const socialLinks = {
    github: "https://github.com/Abeni-M",
    linkedin: "https://www.linkedin.com/in/abenezer-mulatu-b42595381",
    telegram: "#",
    instagram: "#",
    facebook: "#"
  };

  const socialIcons = [
    { icon: <FaGithub size={20} />, link: socialLinks.github, color: '#ffffff', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, link: socialLinks.linkedin, color: '#0077b5', label: 'LinkedIn' },
    { icon: <FaTelegram size={20} />, link: socialLinks.telegram, color: '#0088cc', label: 'Telegram' },
    { icon: <FaInstagram size={20} />, link: socialLinks.instagram, color: '#e4405f', label: 'Instagram' },
    { icon: <FaFacebook size={20} />, link: socialLinks.facebook, color: '#1877f2', label: 'Facebook' }
  ];

  return (
    <div className="app-shell">
      <Toaster position="top-right" />
      
      {/* Floating Social Toolbar (Desktop) moved to its own component or simplified */}
      <div className="floating-socials hidden lg:flex">
        <div className="social-rack glass-card p-2 flex flex-col gap-4">
          {socialIcons.slice(0, 3).map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="rack-icon" style={{ color: s.color }}>{s.icon}</a>
          ))}
          <div className="rack-line"></div>
          <span className="rack-text tracking-widest uppercase">Connect</span>
        </div>
      </div>

      {/* Premium Navbar */}
      <nav className="premium-nav">
        <div className="container nav-content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo-text"
          >
            {name.split(' ')[0]}<span className="text-primary">.</span>
          </motion.div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Portfolio</a>
            <a href="#contact" className="btn-pill btn-pill-solid px-6 py-2 h-auto text-[10px] font-black">Let's Talk</a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <button className="mobile-menu-toggle lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        >
          <div className="mobile-links">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-pill btn-pill-solid mt-4">Let's Talk</a>
          </div>
        </motion.div>
      </nav>

      {/* Split Hero Section */}
      <header className="hero-split">
        <div className="container hero-grid">
          {/* Photo Moved to Top (for mobile and visual priority) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-right flex-center"
          >
            <div className="profile-circle-wrap">
              <div className="profile-glow"></div>
              <div className="profile-avatar-container">
                <img src={profileImg} alt={name} className="hero-avatar-img" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left"
          >
            <span className="text-primary font-bold tracking-widest text-xs mb-4 block uppercase underline underline-offset-8">Abenezer Mulatu</span>
            <h1 className="headline-huge mb-6">
              Full-Stack <br />
              <span className="stroke-text">Developer</span>
            </h1>
            
            <p className="hero-description mb-8 text-muted max-w-xl">
              Specialized in crafting high-performance e-commerce ecosystems and 
              highly-secure database architectures. Lead developer at **Kudeja Trading PLC**.
            </p>

            <div className="social-links-row mb-12 flex flex-wrap gap-4 items-center">
              {socialIcons.map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill glass-card flex items-center gap-2 px-4 py-2"
                  style={{ '--hover-color': social.color }}
                >
                  <span style={{ color: social.color }}>{social.icon}</span>
                </motion.a>
              ))}
            </div>

            <div className="hero-cta mb-16 flex flex-wrap gap-4">
              <a href="#contact" className="btn-pill btn-pill-solid">
                Hire Me <ChevronRight size={18} />
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  toast.error("CV is being updated. Please check back soon!");
                }}
                className="btn-pill btn-pill-outline"
              >
                Download CV
              </a>
            </div>

            <div className="stats-row flex flex-wrap gap-6">
              <div className="stat-box">
                <span className="stat-value">4+</span>
                <span className="stat-label">Years of Dev</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">20+</span>
                <span className="stat-label">Projects Built</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Experience />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ContactForm socialLinks={socialLinks} />
      </motion.div>

      <footer className="footer-premium">
        <div className="container text-center py-16 border-t border-border mt-12">
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-8">Stay Connected</p>
          <div className="flex justify-center gap-6 mb-12">
            {socialIcons.map((s, i) => (
               <a key={i} href={s.link} className="social-footer-link" style={{ color: s.color }}>{s.icon}</a>
            ))}
          </div>
          <p className="text-[10px] text-muted/40 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {name} • Leading Innovation @ Kudeja
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
