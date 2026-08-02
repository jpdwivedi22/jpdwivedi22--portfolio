import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const idx = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={cardRef}
      className={styles.projectCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp(0.1)}
    >
      {/* Visual Block (Background Image replacement) */}
      <div 
        className={styles.projectVisual} 
        style={{ 
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}30, #0a0a0c)`
        }}
      >
        <div className={styles.visualIcon} style={{ color: project.color }}>
          {project.icon}
        </div>
      </div>

      {/* Overlapping Content Box */}
      <div className={styles.projectContent}>
        <div className={styles.projectNumber}>{idx}</div>
        
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        
        <div className={styles.impact}>
          <span className={styles.impactDot} />
          {project.impact}
        </div>

        <div className={styles.techTags}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

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
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Key Projects</h2>
          <p className="section-subtitle">
            Enterprise AI solutions I've architected and deployed to production.
          </p>
        </motion.div>

        <div className={styles.projectsList}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div 
          className={styles.moreProjects}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp()}
        >
          <p>And many more...</p>
          <a href="https://github.com/jpdwivedi22/" target="_blank" rel="noopener noreferrer" className={styles.moreLink}>
            Explore more on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
