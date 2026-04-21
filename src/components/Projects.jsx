import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ShoppingBag, Globe } from 'lucide-react';
import kudejaImg from '../assets/kudeja-preview.png';

import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Kudeja E-commerce Platform',
      category: 'Full-stack Platform',
      description: 'A premium e-commerce and property management system with real-time bidding, ad management, and live chat integration. Features a sophisticated admin dashboard and role-based access control.',
      image: kudejaImg,
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'EmailJS'],
      links: {
        github: '#',
        live: '#'
      },
      featured: true
    },
    {
      title: 'DBU Daily Service',
      category: 'Student Portal',
      description: 'A comprehensive campus management system designed for Debre Berhan University students. Streamlines access to academic resources, notifications, and campus services.',
      image: 'https://images.unsplash.com/photo-1523050335392-9bc56751d11e?auto=format&fit=crop&q=80&w=800',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      links: {
        github: '#',
        live: '#'
      },
      featured: false
    },
    {
      title: 'Banking System Simulation',
      category: 'Academic Project',
      description: 'A secure banking application prototype developed during my internship. Implements core banking logic, transaction management, and secure user authentication.',
      image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800',
      tags: ['Java', 'SQL Server', 'Networking'],
      links: {
        github: '#',
        live: '#'
      },
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Portfolio</span>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="text-muted max-w-2xl mx-auto mt-4">
            A selection of my recent work in web development, system architecture, and UI/UX design.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`project-card glass ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="flex gap-4">
                    <a href={project.links.github} className="social-icon-btn glass">
                      <Github size={20} />
                    </a>
                    <a href={project.links.live} className="social-icon-btn glass">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <Layers size={14} className="mr-1" /> Featured
                    </div>
                  )}
                </div>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
