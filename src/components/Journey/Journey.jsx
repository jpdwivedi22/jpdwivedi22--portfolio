import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { experiences, certifications, education } from '../../data/portfolioData';
import styles from './Journey.module.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const slideIn = (direction, delay = 0) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
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
  const pathRef = useRef(null);
  const sectionRef = useRef(null);
  const [pathProgress, setPathProgress] = useState(0);

  // Animate path line fill on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section has been scrolled through
      const scrolled = (viewportHeight - sectionTop) / (sectionHeight + viewportHeight);
      const progress = Math.max(0, Math.min(1, scrolled * 1.5));
      setPathProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`section ${styles.journey}`} id="journey" ref={sectionRef}>
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
          {/* Vertical path line with scroll-based fill */}
          <div className={styles.pathSvg} ref={pathRef}>
            <div className={styles.pathLine} />
            <div
              className={styles.pathFill}
              style={{ height: `${pathProgress * 100}%` }}
            />
          </div>

          {/* Milestones */}
          {milestones.map((m, i) => (
            <motion.div
              key={m.company + m.year}
              className={styles.milestone}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={i % 2 === 0 ? slideIn('left', 0.1) : slideIn('right', 0.1)}
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


      </div>
    </section>
  );
}
