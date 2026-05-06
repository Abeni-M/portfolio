import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Database, Layers, ArrowRight, X, Info } from 'lucide-react';
import kudejaImg from '../assets/kudeja-preview.png';
import kudejaHeroImg from '../assets/kudeja-hero-site.png';
import videoEditingImg from '../assets/video-editing-preview.png';

import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Kudeja Enterprise Platform',
      type: 'E-commerce & Logistics',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      description: 'Lead architect for a multi-vendor ecosystem handling thousands of daily transactions. Implemented real-time inventory tracking and secure payment gateways.',
      result: 'Handled 5,000+ active clients with 99.9% uptime.',
      image: kudejaImg,
      gallery: [kudejaHeroImg, kudejaImg],
      links: { github: 'https://github.com/Abeni-M', live: 'https://kudeja.com' }
    },
    {
      title: 'Global Brand Visuals',
      type: 'Media Production',
      tech: ['Adobe Premiere', 'After Effects', 'Photoshop'],
      description: 'High-end video production and motion graphics for corporate clients. Developed automated rendering workflows for consistent brand storytelling.',
      result: 'Automated 60% of video rendering workflows.',
      image: videoEditingImg,
      links: { github: '#', live: '#' }
    },
    {
      title: 'DBU Daily Service',
      type: 'University Portal',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      description: 'A campus-wide notification and service management portal for Debre Berhan University, serving students with real-time updates.',
      result: 'Serving 10,000+ students daily.',
      image: 'https://images.unsplash.com/photo-1523050335392-938511794244?auto=format&fit=crop&q=80&w=800',
      links: { github: '#', live: '#' }
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

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
              onClick={() => setSelectedProject(project)}
              className="glass-card project-card-premium overflow-hidden flex flex-col cursor-pointer group"
            >
              <div className="project-preview relative overflow-hidden h-64">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {project.gallery && (
                  <div className="gallery-indicator absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Layers size={10} className="text-primary" /> Multi-Page Case Study
                  </div>
                )}

                <div className="project-overlay absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-center">
                   <div className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white">
                      <Info size={24} />
                   </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary text-[10px] uppercase font-black tracking-widest">{project.type}</span>
                  <Layers size={14} className="text-muted" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                {project.result && (
                  <div className="project-result bg-primary/5 p-3 rounded-lg border border-primary/10 mb-8">
                    <span className="text-primary text-[10px] font-black uppercase block mb-1">Impact / Result</span>
                    <p className="text-xs font-bold">{project.result}</p>
                  </div>
                )}
                <div className="project-footer flex justify-between items-center mt-auto pt-6 border-t border-border">
                  <div className="tech-tags flex gap-2">
                    {project.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[10px] font-bold text-muted uppercase">{t}</span>
                    ))}
                  </div>
                  <span className="text-primary flex items-center gap-2 text-xs font-bold group-hover:gap-4 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[2000] flex-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 p-6 md:p-12 border-white/10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{selectedProject.type}</span>
                    <h2 className="text-4xl font-black mb-6">{selectedProject.title}</h2>
                    <p className="text-muted leading-relaxed text-lg">{selectedProject.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Key Results</h4>
                    <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                      <p className="text-xl font-bold">{selectedProject.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/5">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6">
                    <a href={selectedProject.links.live} target="_blank" rel="noreferrer" className="btn-pill btn-pill-solid">
                      Live Preview <ExternalLink size={18} />
                    </a>
                    <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="btn-pill btn-pill-outline">
                      View Code <Github size={18} />
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  {selectedProject.gallery ? (
                    selectedProject.gallery.map((img, i) => (
                      <img key={i} src={img} alt="Gallery" className="w-full rounded-2xl shadow-2xl border border-white/5" />
                    ))
                  ) : (
                    <img src={selectedProject.image} alt="Preview" className="w-full rounded-2xl shadow-2xl border border-white/5" />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
