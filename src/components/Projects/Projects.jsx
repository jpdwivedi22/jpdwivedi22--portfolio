import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <motion.div
          className="section-header center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            AI-powered solutions deployed across industries — from healthcare to public safety.
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`glass-card ${styles.projectCard}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp(i * 0.08)}
            >
              <div className={styles.cardAccent} style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}66)` }} />
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <div className={styles.projectIcon} style={{ background: `${project.color}12` }}>
                    {project.icon}
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.impact}>{project.impact}</div>
                <div className={styles.techRow}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
