import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './ContactForm.css';

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // ─── EMAILJS INTEGRATION ────────────────────────────────────────────────
    // To make this form functional, follow these steps:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create a Email Service (e.g., Gmail)
    // 3. Create an Email Template
    // 4. Get your Service ID, Template ID, and Public Key
    // 5. Uncomment the code below and replace the IDs

    try {
      // ACTUAL CALL (Uncomment when you have your IDs):
      /*
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formRef.current, 
        'YOUR_PUBLIC_KEY'
      );
      */

      // SIMULATED CALL for demonstration:
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted successfully');
      setStatus('success');
      toast.success('Message sent! I\'ll contact you soon.');
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-card glass"
      >
        <div className="contact-header">
          <h2 className="gradient-text">Get in Touch</h2>
          <p>Send me a message or reach out directly at <a href="mailto:abenezermulatu41@gmail.com" className="email-link">abenezermulatu41@gmail.com</a></p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Full Name</label>
            <input 
              type="text" 
              id="user_name" 
              name="user_name" 
              placeholder="John Doe" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email Address</label>
            <input 
              type="email" 
              id="user_email" 
              name="user_email" 
              placeholder="john@example.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="Project Inquiry" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="How can I help you?" 
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </motion.button>
        </form>

        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`status-message ${status}`}
            >
              {status === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </>
              ) : (
                <>
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactForm;
