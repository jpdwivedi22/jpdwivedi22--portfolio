import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import styles from './Skills.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } },
});

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const tagFade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

function SkillCard({ category, index }) {
  return (
    <motion.div
      className={styles.categoryCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp(index * 0.1)}
    >
      <div className={styles.categoryIcon}>{category.icon}</div>
      <h3 className={styles.categoryTitle}>{category.title}</h3>
      <motion.div
        className={styles.skillTags}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {category.skills.map((skill) => (
          <motion.span key={skill} className={styles.skillTag} variants={tagFade}>
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

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
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            The platforms, languages, and tools I use to build intelligent conversational experiences.
          </p>
        </motion.div>

        <div className={styles.projectsGrid ? '' : styles.skillsGrid}>
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
