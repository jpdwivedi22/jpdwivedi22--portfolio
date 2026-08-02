import { motion } from 'framer-motion';
import { certifications, education } from '../../data/portfolioData';
import styles from './Certifications.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Certifications() {
  return (
    <section className={`section ${styles.certifications}`} id="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <span className="section-label">Certifications & Education</span>
          <h2 className="section-title">Credentials</h2>
          <p className="section-subtitle">
            Professional certifications and academic qualifications validating my expertise.
          </p>
        </motion.div>

        <div className={styles.certGrid}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={`glass-card ${styles.certCard}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i}
            >
              <div
                className={styles.certIcon}
                style={{ background: `${cert.color}15` }}
              >
                {cert.icon}
              </div>
              <div className={styles.certInfo}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                {cert.period && <p className={styles.certPeriod}>{cert.period}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className={styles.education}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <span className="section-label">Education</span>
          <div className={`glass-card ${styles.educationCard}`}>
            <div className={styles.eduIcon}>🎓</div>
            <h3 className={styles.eduDegree}>{education.degree}</h3>
            <p className={styles.eduInstitution}>{education.institution}</p>
            <div className={styles.eduMeta}>
              <span className={styles.eduBadge}>{education.year}</span>
              <span className={styles.eduBadge}>CGPA: {education.cgpa}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
