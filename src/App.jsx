import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
  const portfolioRef = useRef();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleDownloadPDF = async () => {
    const toastId = toast.loading('Generating your PDF...');
    try {
      const element = portfolioRef.current;
      
      // Ensure everything is visible for capture
      const canvas = await html2canvas(element, {
        scale: 1.5, // Balanced for quality vs size
        useCORS: true,
        allowTaint: true,
        backgroundColor: theme === 'dark' ? '#050505' : '#f8fafc',
        windowWidth: 1400, // Fixed width for consistent layout
        onclone: (clonedDoc) => {
          // Hide elements that shouldn't be in the PDF
          const elementsToHide = [
            '.premium-nav', 
            '.floating-socials', 
            '.hero-cta', 
            '.scroll-to-top', 
            '.Toaster',
            '#contact',
            '.footer-premium'
          ];
          elementsToHide.forEach(selector => {
            const el = clonedDoc.querySelector(selector);
            if (el) el.style.display = 'none';
          });
          
          // Force opacity for motion elements
          const motionElements = clonedDoc.querySelectorAll('[style*="opacity: 0"]');
          motionElements.forEach(el => el.style.opacity = '1');
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.6); // Compress to 60% quality
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgProps = pdf.getImageProperties(imgData);
      const contentHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      let heightLeft = contentHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, contentHeight);
      heightLeft -= pdfHeight;

      // Add subsequent pages if necessary
      while (heightLeft >= 0) {
        position = heightLeft - contentHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, contentHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('Abenezer_Mulatu_Portfolio.pdf');
      toast.success('Portfolio downloaded!', { id: toastId });
    } catch (error) {
      console.error('PDF Error:', error);
      toast.error('Failed to generate PDF. Please try again.', { id: toastId });
    }
  };

  const name = "Abenezer Mulatu";

  const socialLinks = {
    github: "https://github.com/Abeni-M",
    linkedin: "https://www.linkedin.com/in/abenezer-mulatu-b42595381",
    telegram: "https://t.me/Abe_m_1",
    instagram: "https://www.instagram.com/abe_ne_zer_m?igsh=MWhxc2JqcGJpZTN0ag==",
    facebook: "https://www.facebook.com/abenezer.mulatu.37"
  };

  const socialIcons = [
    { icon: <FaGithub size={20} />, link: socialLinks.github, color: '#ffffff', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, link: socialLinks.linkedin, color: '#0077b5', label: 'LinkedIn' },
    { icon: <FaTelegram size={20} />, link: socialLinks.telegram, color: '#0088cc', label: 'Telegram' },
    { icon: <FaInstagram size={20} />, link: socialLinks.instagram, color: '#e4405f', label: 'Instagram' },
    { icon: <FaFacebook size={20} />, link: socialLinks.facebook, color: '#1877f2', label: 'Facebook' }
  ];

  return (
    <div className="app-shell" ref={portfolioRef}>
      <Toaster position="top-right" />

      {/* Floating Social Toolbar (Desktop) */}
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
              Building Scalable <br />
              <span className="stroke-text">Web Apps</span>
            </h1>

            <p className="hero-description mb-8 text-muted max-w-xl">
              I help startups and businesses build fast, secure e-commerce ecosystems and 
              high-performance architectures. **5,000+ clients** served through Kudeja Trading PLC.
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
              <a href="#projects" className="btn-pill btn-pill-outline">
                See My Work
              </a>
            </div>

            <div className="stats-row flex flex-wrap gap-6">
              <div className="stat-box">
                <span className="stat-value">5k+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">$5/hr</span>
                <span className="stat-label">Starting Rate</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">24h</span>
                <span className="stat-label">Response Time</span>
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
        <Pricing />
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

const Pricing = () => {
  const packages = [
    {
      name: "Standard Dev",
      price: "$5/hr",
      features: ["Full-Stack Development", "PostgreSQL Optimization", "24h Response Time", "Git Version Control"],
      highlight: false
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      features: ["E-commerce Ecosystems", "Logistic Systems", "High-Scale Architecture", "Priority Support"],
      highlight: true
    }
  ];

  return (
    <section className="pricing-section py-24 bg-primary/5">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block underline underline-offset-8">Investment</span>
          <h2 className="text-4xl font-extrabold mb-4">Transparent Pricing</h2>
          <p className="text-muted max-w-xl mx-auto">Scalable solutions for every budget, from hourly consulting to full-scale enterprise systems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`glass-card p-10 border ${pkg.highlight ? 'border-primary' : 'border-white/10'} relative overflow-hidden`}
            >
              {pkg.highlight && <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest">Recommended</div>}
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-primary">{pkg.price}</span>
                <span className="text-xs text-muted font-bold uppercase tracking-widest">{pkg.price === 'Custom' ? '' : '/ hour'}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn-pill w-full justify-center ${pkg.highlight ? 'btn-pill-solid' : 'btn-pill-outline'}`}>Get Started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
