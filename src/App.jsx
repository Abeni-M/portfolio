import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Experience from './components/Experience';
import ThemeToggle from './components/ThemeToggle';
import { Mail, Github, Linkedin, Globe, Phone, MapPin } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import profileImg from './assets/profile.jpg';

import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const name = "Abenezer Mulatu Banti";
  const email = "abenezermulatu41@gmail.com";
  const phone = "(+251) 986 880 186";
  const location = "Addis Ababa, Ethiopia";
  const githubUrl = "https://github.com/Abeni-M";

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" toastOptions={{
        style: {
          background: theme === 'dark' ? '#1e293b' : '#ffffff',
          color: theme === 'dark' ? '#f8fafc' : '#0f172a',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      }} />
      
      {/* Navigation */}
      <nav className="nav-bar glass">
        <div className="nav-container">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
          >
            {name.split(' ')[0]}.
          </motion.div>
          <div className="nav-links flex items-center">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="badge">
            Computer Science Professional
          </div>
          <h1 className="hero-title">
            I'm <span className="gradient-text">{name}</span>.
          </h1>
          <p className="hero-desc">
            A detail-oriented Computer Science graduate with a passion for software development, IT support, and networking.
          </p>
          
          <div className="contact-info-list">
            <div className="contact-info-item">
              <Mail className="icon-primary" size={20} />
              <span>{email}</span>
            </div>
            <div className="contact-info-item">
              <Phone className="icon-primary" size={20} />
              <span>{phone}</span>
            </div>
            <div className="contact-info-item">
              <MapPin className="icon-primary" size={20} />
              <span>{location}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Let's Talk
            </a>
            <div className="social-links">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-icon-btn glass">
                <Github size={20} />
              </a>
              <a href="#" className="social-icon-btn glass">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="hero-visual">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="visual-container glass"
          >
            <div className="profile-img-wrapper">
              <img
                src={profileImg}
                alt={name}
                className="profile-img"
              />
              <div className="profile-overlay"></div>
            </div>
          </motion.div>
        </div>
      </main>

      <About />
      <Experience />

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-quote">
            "Solving real-world problems through technology."
          </p>
          <div className="footer-right">
            <div className="social-links mb-4" style={{ justifyContent: 'center' }}>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="nav-link">
                <Github size={18} />
              </a>
            </div>
            <p className="footer-copy">
              © {new Date().getFullYear()} {name}. Built with React & Vite.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;
