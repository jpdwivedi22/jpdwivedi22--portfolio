import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, achievements } from '../../data/portfolioData';
import styles from './About.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

// Animated counter hook
function useCounter(end, duration = 2000, startOnView = false, ref = null) {
  const [count, setCount] = useState(0);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (startOnView && !inView) return;
    const endNum = parseInt(end);
    if (isNaN(endNum)) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * endNum));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startOnView, inView]);

  return count;
}

// Spotlight card component
function SpotlightCard({ children, className, variants }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--spotlight-x', `${x}px`);
    cardRef.current.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glass-card ${styles.bentoCard} ${styles.spotlightCard} ${className}`}
      variants={variants}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.spotlightOverlay} />
      {children}
    </motion.div>
  );
}

export default function About() {
  const statRef1 = useRef(null);
  const statRef2 = useRef(null);
  const exp = useCounter('3', 1500, true, statRef1);
  const proj = useCounter('10', 1800, true, statRef2);

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <motion.div
          className="section-header center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">At a Glance</h2>
          <p className="section-subtitle">A quick snapshot of who I am and what I bring to the table.</p>
        </motion.div>

        <motion.div
          className={styles.bentoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Bio Card */}
          <SpotlightCard className={styles.bioCard} variants={fadeUp(0.1)}>
            <h3>Who I Am</h3>
            <p>
              I'm an <span className={styles.highlight}>AI Engineer</span> passionate about building
              conversational solutions that feel <span className={styles.highlight}>natural and human</span>.
              From enterprise chatbots to multilingual voice assistants, I've spent{' '}
              <span className={styles.highlight}>3+ years</span> turning complex AI into seamless conversations
              across platforms like <span className={styles.highlight}>Cognigy.AI</span>,{' '}
              <span className={styles.highlight}>Kore.ai</span>,{' '}
              <span className={styles.highlight}>Microsoft Copilot Studio</span>, and{' '}
              <span className={styles.highlight}>Dialogflow</span>.
            </p>
          </SpotlightCard>

          {/* Stat: Experience */}
          <SpotlightCard className={styles.statCard} variants={fadeUp(0.2)}>
            <div ref={statRef1}>
              <div className={styles.statEmoji}>⚡</div>
              <div className={styles.statValue}>{exp}+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
          </SpotlightCard>

          {/* Stat: Projects */}
          <SpotlightCard className={styles.statCard} variants={fadeUp(0.3)}>
            <div ref={statRef2}>
              <div className={styles.statEmoji}>🚀</div>
              <div className={styles.statValue}>{proj}+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
          </SpotlightCard>

          {/* Achievement */}
          <motion.div className={`glass-card ${styles.bentoCard} ${styles.achieveCard}`} variants={fadeUp(0.35)}>
            <a 
              href={achievements[0].image}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                display: 'flex', 
                width: '100%', 
                height: '100%', 
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              title="Click to view award certificate"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <div className={styles.achieveIcon}>🏆</div>
                <div className={styles.achieveText}>
                  <h4>{achievements[0].title}</h4>
                  <p>{achievements[0].org} • {achievements[0].date}</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '6px', display: 'block', fontFamily: 'var(--font-mono)' }}>
                    View Certificate ↗
                  </span>
                </div>
              </div>
              <img 
                src={achievements[0].image} 
                alt="Award Thumbnail" 
                style={{ 
                  height: '70px', 
                  width: 'auto', 
                  borderRadius: '4px', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  objectFit: 'contain',
                  transform: 'rotate(5deg)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(5deg) scale(1)'}
              />
            </a>
          </motion.div>

          {/* Location */}
          <SpotlightCard className={styles.locationCard} variants={fadeUp(0.4)}>
            <div className={styles.locationEmoji}>📍</div>
            <div className={styles.locationCity}>New Delhi</div>
            <div className={styles.locationCountry}>India</div>
          </SpotlightCard>

          {/* Education */}
          <SpotlightCard className={styles.eduCard} variants={fadeUp(0.45)}>
            <div className={styles.eduEmoji}>🎓</div>
            <div className={styles.eduDegree}>B.E. Civil Engineering</div>
            <div className={styles.eduInstitution}>{education.institution}</div>
            <span className={styles.eduCgpa}>CGPA: {education.cgpa}</span>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
