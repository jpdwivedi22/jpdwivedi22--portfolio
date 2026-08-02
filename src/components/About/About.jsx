import { motion } from 'framer-motion';
import { education, achievements } from '../../data/portfolioData';
import styles from './About.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function About() {
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
          <motion.div className={`glass-card ${styles.bentoCard} ${styles.bioCard}`} variants={fadeUp(0.1)}>
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
          </motion.div>

          {/* Stat: Experience */}
          <motion.div className={`glass-card ${styles.bentoCard} ${styles.statCard}`} variants={fadeUp(0.2)}>
            <div className={styles.statEmoji}>⚡</div>
            <div className={styles.statValue}>3+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </motion.div>

          {/* Stat: Projects */}
          <motion.div className={`glass-card ${styles.bentoCard} ${styles.statCard}`} variants={fadeUp(0.3)}>
            <div className={styles.statEmoji}>🚀</div>
            <div className={styles.statValue}>10+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </motion.div>

          {/* Achievement */}
          <motion.div className={`glass-card ${styles.bentoCard} ${styles.achieveCard}`} variants={fadeUp(0.35)}>
            <div className={styles.achieveIcon}>🏆</div>
            <div className={styles.achieveText}>
              <h4>{achievements[0].title}</h4>
              <p>{achievements[0].org} • {achievements[0].date}</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div className={`glass-card ${styles.bentoCard} ${styles.locationCard}`} variants={fadeUp(0.4)}>
            <div className={styles.locationEmoji}>📍</div>
            <div className={styles.locationCity}>New Delhi</div>
            <div className={styles.locationCountry}>India</div>
          </motion.div>

          {/* Education */}
          <motion.div className={`glass-card ${styles.bentoCard} ${styles.eduCard}`} variants={fadeUp(0.45)}>
            <div className={styles.eduEmoji}>🎓</div>
            <div className={styles.eduDegree}>B.E. Civil Engineering</div>
            <div className={styles.eduInstitution}>{education.institution}</div>
            <span className={styles.eduCgpa}>CGPA: {education.cgpa}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
