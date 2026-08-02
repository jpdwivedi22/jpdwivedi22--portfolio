import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaHackerrank, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import styles from './Footer.module.css';

const socialLinks = [
  { icon: <FaLinkedinIn />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FaGithub />, href: personalInfo.github, label: 'GitHub' },
  { icon: <FaHackerrank />, href: personalInfo.hackerrank, label: 'HackerRank' },
];

const sitemap = [
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.bgTextWrapper}>
        <span className={styles.bgText}>JYOTI PRAKASH</span>
      </div>

      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerLeft}>
          <h2 className={styles.ctaHeading}>
            Ready to build <span className={styles.ctaHighlight}>something iconic?</span>
          </h2>
          <motion.a 
            href={`mailto:${personalInfo.email}`} 
            className={styles.ctaButton}
            whileHover={{ x: 8 }}
          >
            <span>Start a conversation</span>
            <FaArrowRight />
          </motion.a>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Socials</span>
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.linkGroup}>
            <span className={styles.groupLabel}>Sitemap</span>
            {sitemap.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className={styles.footerLink}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <span className={styles.copyright}>© {new Date().getFullYear()} Jyoti Prakash Dwivedi</span>
            <span className={styles.madeWith}>Built with <span className={styles.heart}>❤</span> using React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
