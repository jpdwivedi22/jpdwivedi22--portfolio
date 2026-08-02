import { motion } from 'framer-motion';
import { experiences, certifications, education } from '../../data/portfolioData';
import styles from './Journey.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const milestoneIcons = ['🚀', '⚡', '🌱'];
const periodToYear = (period) => period.split('–')[0].trim().split(' ').pop();

// Combine experiences with education as a starting milestone
const milestones = [
  ...experiences.map((exp, i) => ({
    type: 'work',
    icon: milestoneIcons[i],
    year: periodToYear(exp.period),
    period: exp.period,
    ...exp,
  })),
  {
    type: 'education',
    icon: '🎓',
    year: '2022',
    period: 'May 2022',
    role: education.degree,
    company: education.institution,
    location: 'Indore, M.P.',
    highlights: [`Graduated with a CGPA of ${education.cgpa}`, 'Transitioned into the world of Conversational AI'],
    techStack: [],
  },
].reverse(); // Chronological order: oldest first

export default function Journey() {
  return (
    <section className={`section ${styles.journey}`} id="journey">
      <div className="container">
        <motion.div
          className="section-header center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">The Path So Far</h2>
          <p className="section-subtitle">
            From civil engineering to conversational AI — every step has shaped the engineer I am today.
          </p>
        </motion.div>

        <div className={styles.journeyPath}>
          {/* Vertical path line */}
          <div className={styles.pathSvg}>
            <div className={styles.pathLine} />
          </div>

          {/* Milestones */}
          {milestones.map((m, i) => (
            <motion.div
              key={m.company + m.year}
              className={styles.milestone}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp(i * 0.1)}
            >
              {/* Center node */}
              <div className={styles.milestoneNode}>
                <div className={styles.nodeCircle}>{m.icon}</div>
              </div>

              {/* Year badge */}
              <div className={styles.milestoneYear}>
                <span className={styles.yearBadge}>{m.period}</span>
              </div>

              {/* Content card */}
              <div className={styles.milestoneContent}>
                <h3 className={styles.contentRole}>{m.role}</h3>
                <p className={styles.contentCompany}>{m.company}</p>
                <p className={styles.contentLocation}>{m.location}</p>

                <ul className={styles.contentHighlights}>
                  {m.highlights.slice(0, 3).map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>

                {m.techStack && m.techStack.length > 0 && (
                  <div className={styles.techRow}>
                    {m.techStack.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className={styles.certsSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="section-header center" variants={fadeUp()}>
            <span className="section-label">Credentials</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              Certifications & Badges
            </h2>
          </motion.div>

          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className={`glass-card ${styles.certCard}`}
                variants={fadeUp(i * 0.06)}
              >
                <div className={styles.certIcon} style={{ background: `${cert.color}15` }}>
                  {cert.icon}
                </div>
                <div>
                  <div className={styles.certName}>{cert.name}</div>
                  <div className={styles.certIssuer}>{cert.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
