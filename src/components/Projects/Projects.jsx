import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

/* ── Featured Project Card (full-width hero-style) ── */
function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      className={styles.featuredCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp(0.1)}
    >
      {/* Gradient border glow */}
      <div className={styles.featuredGlow} />

      <div className={styles.featuredInner}>
        {/* Left: Content */}
        <div className={styles.featuredContent}>
          <div className={styles.featuredBadges}>
            <span className={styles.featuredTag}>⭐ FEATURED</span>
            <span className={styles.liveTag}>
              <span className={styles.liveDot} />
              LIVE
            </span>
          </div>

          <h3 className={styles.featuredTitle}>{project.title}</h3>
          <p className={styles.featuredDesc}>{project.description}</p>

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

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewLiveBtn}
            >
              View Live Product
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>

        {/* Right: Visual */}
        <div
          className={styles.featuredVisual}
          style={{
            background: `linear-gradient(135deg, ${project.color}20, ${project.color}40, #0a0a0c)`,
          }}
        >
          <div className={styles.featuredIcon} style={{ color: project.color }}>
            {project.icon}
          </div>
          <div className={styles.agentCount}>25+</div>
          <div className={styles.agentLabel}>AI Agents</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Regular Project Card (alternating layout) ────── */
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
      <div
        className={styles.projectVisual}
        style={{
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}30, #0a0a0c)`,
        }}
      >
        <div className={styles.visualIcon} style={{ color: project.color }}>
          {project.icon}
        </div>
      </div>

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
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

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

        {/* Featured Project */}
        {featuredProject && <FeaturedProjectCard project={featuredProject} />}

        {/* Regular Projects */}
        <div className={styles.projectsList}>
          {regularProjects.map((project, i) => (
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
