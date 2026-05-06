import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, MapPin, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import './ContactForm.css';

const ContactForm = ({ socialLinks }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_0ntia54', 
        'template_tfkv1xt', 
        formRef.current, 
        'aat6ziqGEqgNtDAg6'
      );
      toast.success('Message sent! I will respond shortly.');
      formRef.current.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', link: socialLinks?.linkedin || '#', color: '#0077b5' },
    { icon: <FaGithub size={18} />, label: 'GitHub', link: socialLinks?.github || '#', color: '#ffffff' },
    { icon: <FaTelegram size={18} />, label: 'Telegram', link: socialLinks?.telegram || '#', color: '#0088cc' },
    { icon: <FaInstagram size={18} />, label: 'Instagram', link: socialLinks?.instagram || '#', color: '#e4405f' },
    { icon: <FaFacebook size={18} />, label: 'Facebook', link: socialLinks?.facebook || '#', color: '#1877f2' }
  ];

  return (
    <section id="contact" className="contact-section-premium">
      <div className="container">
        <div className="contact-grid-premium">
          {/* Left Panel: Connect Cards */}
          <div className="contact-info-panel">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Connections</span>
            <h2 className="text-4xl font-extrabold mb-8">Let's Connect</h2>
            
            <div className="location-card glass-card p-6 mb-6 flex items-center gap-4 border-l-4 border-primary">
              <div className="icon-wrap bg-primary/10 text-primary p-3 rounded-xl">
                <Loader2 size={24} className="animate-pulse" />
              </div>
              <div>
                <span className="block text-xs text-muted uppercase font-bold tracking-widest">Availability</span>
                <span className="text-lg font-bold">Always Available</span>
                <span className="block text-[10px] text-primary font-black uppercase mt-1">Reply within 24 hours</span>
              </div>
            </div>

            <div className="location-card glass-card p-6 mb-10 flex items-center gap-4">
              <div className="icon-wrap bg-primary/10 text-primary p-3 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-xs text-muted uppercase font-bold tracking-widest">Base Location</span>
                <span className="text-lg font-bold">Addis Ababa, Ethiopia</span>
              </div>
            </div>

            {/* Horizontal Social Links with Modern UI */}
            <div className="social-row-modern flex flex-wrap gap-4 mb-10">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="social-icon-modern glass-card p-4 flex items-center justify-center"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="email-direct mt-10">
              <a href="mailto:abenezermulatu41@gmail.com" className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                <Mail size={18} />
                <span className="font-medium">abenezermulatu41@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Panel: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-panel glass-card p-8 md:p-12"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="form-premium">
              <div className="form-row-premium">
                <div className="form-group-premium">
                  <label>Your Name</label>
                  <input type="text" name="user_name" placeholder="Abenezer Mulatu" required />
                </div>
                <div className="form-group-premium">
                  <label>Email Address</label>
                  <input type="email" name="user_email" placeholder="example@gmail.com" required />
                </div>
              </div>

              <div className="form-group-premium">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Project Inquiry" required />
              </div>

              <div className="form-group-premium">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="btn-pill btn-pill-solid w-full justify-center py-4 text-base"
              >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" size={18} />}
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
