import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import styles from './Skills.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <motion.div
          className="section-header center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle">
            The platforms, languages, and tools I use to build intelligent conversational experiences.
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className={`glass-card ${styles.categoryCard}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp(i * 0.08)}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
