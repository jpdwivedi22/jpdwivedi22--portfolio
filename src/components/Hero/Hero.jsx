import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaHackerrank, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
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
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 30 : 70);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        {/* Left */}
        <motion.div className={styles.heroLeft} initial="hidden" animate="visible">
          <motion.div className={styles.statusBadge} variants={fadeUp(0.2)}>
            <span className={styles.statusDot} />
            Available for opportunities
          </motion.div>

          <motion.h1 className={styles.heroName} variants={fadeUp(0.35)}>
            Hi, I'm{' '}
            <span className={styles.heroNameAccent}>Jyoti Prakash</span>
          </motion.h1>

          <motion.div className={styles.roleWrapper} variants={fadeUp(0.5)}>
            <span>{displayText}</span>
            <span className={styles.cursor} />
          </motion.div>

          <motion.p className={styles.heroDesc} variants={fadeUp(0.6)}>
            I design and build intelligent conversational AI solutions — chatbots & voice bots — that transform how enterprises connect with people.
          </motion.p>

          <motion.div className={styles.ctas} variants={fadeUp(0.7)}>
            <a href="#journey" className="btn btn-primary">
              My Journey <FaArrowRight />
            </a>
            <a href="/JyotiPrakash_Resume_Sep25.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaDownload /> Resume
            </a>
          </motion.div>

          <motion.div className={styles.socials} variants={fadeUp(0.8)}>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={personalInfo.hackerrank} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="HackerRank">
              <FaHackerrank />
            </a>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email">
              <FaEnvelope />
            </a>
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
