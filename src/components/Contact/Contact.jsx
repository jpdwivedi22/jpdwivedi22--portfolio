import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import styles from './Contact.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const links = [
  { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#6C5CE7' },
  { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#a78bfa' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', value: 'Jyoti Prakash Dwivedi', href: personalInfo.linkedin, color: '#0A66C2' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: '#', color: '#10b981' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <motion.div
          className="section-header center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build Something</h2>
          <p className="section-subtitle">
            Interested in working together or have a question? Drop me a message.
          </p>
        </motion.div>

        <div className={styles.contactWrapper}>
          <motion.div
            className={styles.contactInfo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h3 variants={fadeUp(0.1)}>Let's Connect</motion.h3>
            <motion.p variants={fadeUp(0.2)}>
              Open to new opportunities, AI collaborations, and exciting conversational AI projects.
            </motion.p>

            <div className={styles.links}>
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.linkItem}
                  variants={fadeUp(0.25 + i * 0.08)}
                >
                  <div className={styles.linkIcon} style={{ background: `${link.color}12`, color: link.color }}>
                    {link.icon}
                  </div>
                  <div>
                    <div className={styles.linkLabel}>{link.label}</div>
                    <div className={styles.linkValue}>{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className={`glass-card ${styles.formCard}`}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp(0.2)}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your name" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))} required />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              <FaPaperPlane /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
