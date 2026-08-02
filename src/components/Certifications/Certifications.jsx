import { motion } from 'framer-motion';
import { certifications, education } from '../../data/portfolioData';
import styles from './Certifications.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Certifications() {
  return (
    <section className={`section ${styles.certifications}`} id="certifications">
      <div className={`container ${styles.certContainer}`}>
        
        {/* Left Side: Title and Intro */}
        <motion.div 
          className={styles.certLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <span className={styles.cursiveLabel}>Check Out</span>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            MY CERTIFICATIONS
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            I have completed various professional courses and exams to validate my AI and engineering skills, and I'm sharing a few of them here.
          </p>
          <a href="#projects" className={`btn btn-secondary ${styles.knowMoreBtn}`}>
            KNOW MORE
          </a>
        </motion.div>

        {/* Right Side: Cards Grid/Carousel */}
        <div className={styles.certRight}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={styles.certCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i}
            >
              {/* Image Placeholder */}
              <div className={styles.certImagePlaceholder}>
                <div className={styles.certIconLarge} style={{ color: cert.color }}>
                  {cert.icon}
                </div>
                {/* We can place an actual img tag here later */}
              </div>

              {/* Info */}
              <div className={styles.certInfo}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer} style={{ color: cert.color }}>
                  {cert.issuer.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Education - kept simple at the bottom */}
      <div className="container" style={{ marginTop: '100px' }}>
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
