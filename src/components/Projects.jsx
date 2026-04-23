import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layers, ArrowRight } from 'lucide-react';
import kudejaImg from '../assets/kudeja-preview.png';

import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Kudeja Platform',
      type: 'E-commerce & Property',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      description: 'Lead developer for a massive multi-vendor ecosystem. Architected the core relational database to handle high-concurrency transactions and real-time ad placement.',
      image: kudejaImg,
      links: { github: '#', live: '#' }
    },
    {
      title: 'Video editing',
      type: 'Video editing',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      description: 'Video editing platform',
      image: 'src/assets/video-editing-preview.png',
      links: { github: '#', live: '#' }
    },

  ];

  return (
    <section id="projects" className="projects-premium">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block underline underline-offset-8">My Portfolio</span>
          <h2 className="text-5xl font-extrabold mb-6">Recent Work</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A selection of software systems where architecture meets business logic.
          </p>
        </div>

        <div className="projects-grid-premium">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card project-card-premium overflow-hidden flex flex-col"
            >
              <div className="project-preview relative overflow-hidden group h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="project-overlay absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-center">
                  <div className="flex gap-4">
                    <a href={project.links.live} className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                    <a href={project.links.github} className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform"><Github size={20} /></a>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary text-[10px] uppercase font-black tracking-widest">{project.type}</span>
                  <Layers size={14} className="text-muted" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="project-footer flex justify-between items-center mt-auto pt-6 border-t border-border">
                  <div className="tech-tags flex gap-2">
                    {project.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[10px] font-bold text-muted uppercase">{t}</span>
                    ))}
                  </div>
                  <a href={project.links.live} className="text-primary flex items-center gap-2 text-xs font-bold hover:gap-4 transition-all">
                    View Project <ArrowRight size={14} />
                  </a>
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
