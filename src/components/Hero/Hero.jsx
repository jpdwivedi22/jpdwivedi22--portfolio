import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedinIn,
  FaHackerrank,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 70
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  });

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        {/* Left */}
        <motion.div
          className={styles.heroLeft}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.statusBadge} variants={fadeUp(0.2)}>
            <span className={styles.statusDot} />
            Available for opportunities
          </motion.div>

          <motion.h1 className={styles.heroName} variants={fadeUp(0.35)}>
            Hi, I'm <span className={styles.heroNameAccent}>Jyoti Prakash</span>
          </motion.h1>

          <motion.div className={styles.roleWrapper} variants={fadeUp(0.5)}>
            <span>{displayText}</span>
            <span className={styles.cursor} />
          </motion.div>

          <motion.p className={styles.heroDesc} variants={fadeUp(0.6)}>
            I design and build intelligent conversational AI solutions —
            chatbots & voice bots — that transform how enterprises connect with
            people.
          </motion.p>

          <motion.div className={styles.ctas} variants={fadeUp(0.7)}>
            <a href="#journey" className="btn btn-primary">
              My Journey <FaArrowRight />
            </a>
            <a
              href="/JyotiPrakash_Resume_Aug26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaDownload /> Resume
            </a>
          </motion.div>

          <motion.div className={styles.socials} variants={fadeUp(0.8)}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={personalInfo.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="HackerRank"
            >
              <FaHackerrank />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.photoWrapper}>
            <div className={styles.photoGlow} />
            <div className={styles.photoContainer}>
              <img src="/headshot.png" alt="Jyoti Prakash Dwivedi" />
            </div>

            {/* Floating badges */}
            <motion.div
              className={`${styles.floatingBadge} ${styles.badge1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className={styles.emoji}>☁️</span> GCP Certified
            </motion.div>
            <motion.div
              className={`${styles.floatingBadge} ${styles.badge2}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className={styles.emoji}>🤖</span> 3+ Years AI
            </motion.div>
            <motion.div
              className={`${styles.floatingBadge} ${styles.badge3}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span className={styles.emoji}>🎯</span> 10+ Projects
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </motion.div>
    </section>
  );
}
