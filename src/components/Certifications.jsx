import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Download, X, ChevronRight } from 'lucide-react';
import certNet from '../assets/certificate.jpg';
import certMail from '../assets/photo_2026-06-18_11-34-25.jpg';
import certCCTV from '../assets/photo_2026-06-18_11-34-31.jpg';
import certSIEM from '../assets/photo_2026-06-18_11-34-35.jpg';

import './Certifications.css';

const certsData = {
  'hikvision-networking': {
    title: 'Hikvision Spark: Networking',
    issuer: 'Hikvision Spark',
    date: 'June 17, 2026',
    desc: 'Certified completion of the Hikvision Spark Training Program in Networking, focusing on enterprise-grade local network design, configuration, switching, and routing protocols.',
    img: certNet
  },
  'kaspersky-mail': {
    title: 'Kaspersky Sales Specialist: Security for Mail Server',
    issuer: 'Kaspersky',
    date: 'April 24, 2026',
    desc: 'Certified competence as a Sales Specialist for Kaspersky Security for Mail Server (S36.3), ensuring robust protection for enterprise mail server infrastructures.',
    img: certMail
  },
  'hikvision-cctv': {
    title: 'Hikvision Spark: CCTV and PA',
    issuer: 'Hikvision Spark',
    date: 'May 20, 2026',
    desc: 'Certified completion of the Hikvision Spark Training Program in CCTV and Public Address (PA) Systems, validating technical expertise in modern video surveillance and public paging systems.',
    img: certCCTV
  },
  'kaspersky-kuma': {
    title: 'Kaspersky Sales Specialist: KUMA (SIEM)',
    issuer: 'Kaspersky',
    date: 'May 28, 2026',
    desc: 'Certified Sales Specialist for Kaspersky Unified Monitoring and Analysis Platform (KUMA - S34.3), validating knowledge in security information and event management systems.',
    img: certSIEM
  }
};

const Certifications = () => {
  const [activeCertId, setActiveCertId] = useState(null);

  const activeCert = activeCertId ? certsData[activeCertId] : null;

  return (
    <section id="certifications" className="certifications-premium py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block underline underline-offset-8">Verified Credentials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Professional Certifications</h2>
          <p className="text-muted max-w-2xl mx-auto text-base">
            Industry-recognized credentials in enterprise security, networking, and system administration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {Object.entries(certsData).map(([id, cert]) => (
            <motion.div
              key={id}
              whileHover={{ y: -5 }}
              className="glass-card cert-card-premium overflow-hidden flex flex-col cursor-pointer group"
              onClick={() => setActiveCertId(id)}
            >
              <div className="cert-preview relative overflow-hidden h-48 bg-black/40">
                <img src={cert.img} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="cert-overlay absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-primary tracking-widest block mb-2">{cert.issuer}</span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.title.includes(':') ? cert.title.split(':').slice(1).join(':').trim() : cert.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2">{cert.desc}</p>
                </div>
                <div className="pt-4 border-t border-border mt-4 flex justify-between items-center text-[10px] text-muted">
                  <span>Issued: {cert.date.split(',')[0]}</span>
                  <span className="text-primary font-bold flex items-center gap-1">View <ChevronRight size={12} /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay active flex items-center justify-center p-4"
            onClick={() => setActiveCertId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="modal-container max-w-4xl w-full bg-bg-card border border-border rounded-2xl overflow-hidden relative p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all"
                onClick={() => setActiveCertId(null)}
              >
                <X size={24} />
              </button>
              <div className="p-2">
                <img src={activeCert.img} alt={activeCert.title} className="w-full h-auto rounded-xl max-h-[70vh] object-contain mx-auto" />
              </div>
              <div className="p-6 bg-black/40 border-t border-border/50 text-left flex justify-between items-center flex-wrap gap-4">
                <div className="max-w-xl">
                  <h3 className="text-xl font-bold text-text-main">{activeCert.title}</h3>
                  <p className="text-sm text-muted mt-1">{activeCert.issuer} • Issued on {activeCert.date} • {activeCert.desc}</p>
                </div>
                <a href={activeCert.img} download={`${activeCert.title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`} className="btn-pill btn-pill-solid flex items-center gap-2">
                  <Download size={16} /> Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
