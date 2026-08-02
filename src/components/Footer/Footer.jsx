import { FaLinkedinIn, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <span className={styles.footerName}>JP.</span>
            <span className={styles.footerCopy}>© {new Date().getFullYear()} Jyoti Prakash Dwivedi</span>
          </div>
          <div className={styles.footerSocials}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href={personalInfo.hackerrank} target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink} aria-label="HackerRank"><FaHackerrank /></a>
            <a href={`mailto:${personalInfo.email}`} className={styles.footerSocialLink} aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
        <p className={styles.madeWith}>Built with <span className={styles.heart}>❤</span> using React + Vite</p>
      </div>
    </footer>
  );
}
