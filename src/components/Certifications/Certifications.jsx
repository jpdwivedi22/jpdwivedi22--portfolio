import { useState } from 'react';
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

function CertCard({ cert, i, onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // We can keep the cycle feature if they click the badge, but clicking the image opens lightbox
  const handleOpen = (e) => {
    e.stopPropagation();
    onOpenLightbox(cert, activeIndex);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (cert.images && cert.images.length > 1) {
      setActiveIndex((prev) => (prev + 1) % cert.images.length);
    }
  };

  return (
    <motion.div
      key={cert.name}
      className={styles.certCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      custom={i}
    >
      {/* Image / PDF Viewer */}
      <div 
        className={styles.certMediaContainer} 
        onClick={handleOpen}
        style={{ cursor: 'zoom-in' }}
        title="Click to view full screen"
      >
        {cert.images && cert.images.length > 0 ? (
          cert.images.map((imgSrc, imgIndex) => {
            const isPdf = imgSrc.endsWith('.pdf');
            
            // Calculate position based on activeIndex
            const total = cert.images.length;
            const offset = (imgIndex - activeIndex + total) % total;
            
            // Create an overlapping stacked effect
            const zIndex = total - offset;
            const scale = 1 - offset * 0.05;
            const translateY = offset * 8;
            const opacity = 1 - offset * 0.15;

            return (
              <div 
                key={imgSrc} 
                className={styles.stackedMediaWrapper}
                style={{
                  zIndex,
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  opacity: offset > 2 ? 0 : opacity, // Only show top 3
                  pointerEvents: offset === 0 ? 'auto' : 'none', // Only top card is interactive
                  transition: 'transform 0.4s ease, opacity 0.4s ease, z-index 0s'
                }}
              >
                {isPdf ? (
                  <object 
                    data={`${imgSrc}#toolbar=0&navpanes=0&scrollbar=0`} 
                    type="application/pdf" 
                    className={styles.certMedia}
                    style={{ pointerEvents: 'none' }} // Let click pass to wrapper
                  >
                    <div className={styles.certIconLarge} style={{ color: cert.color }}>
                      {cert.icon}
                    </div>
                  </object>
                ) : (
                  <img 
                    src={imgSrc} 
                    alt={`${cert.name} ${imgIndex + 1}`} 
                    className={styles.certMedia} 
                    loading="lazy" 
                  />
                )}
                {/* Display badge if multiple on the top card */}
                {cert.images.length > 1 && offset === 0 && (
                  <div 
                    className={styles.multipleBadge} 
                    onClick={handleNextImage}
                    title="Cycle through stack inline"
                  >
                    Stack: +{cert.images.length - 1} 
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className={styles.certImagePlaceholder}>
            <div className={styles.certIconLarge} style={{ color: cert.color }}>
              {cert.icon}
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className={styles.certInfo}>
        <h3 className={styles.certName}>{cert.name}</h3>
        <p className={styles.certIssuer} style={{ color: cert.color }}>
          {cert.issuer.toUpperCase()}
        </p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [lightboxCert, setLightboxCert] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (cert, startIndex) => {
    setLightboxCert(cert);
    setLightboxIndex(startIndex);
    document.body.classList.add('lightbox-open');
  };

  const closeLightbox = () => {
    setLightboxCert(null);
    document.body.classList.remove('lightbox-open');
  };

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    if (lightboxCert && lightboxCert.images) {
      setLightboxIndex((prev) => (prev + 1) % lightboxCert.images.length);
    }
  };

  const handleLightboxPrev = (e) => {
    e.stopPropagation();
    if (lightboxCert && lightboxCert.images) {
      setLightboxIndex((prev) => (prev - 1 + lightboxCert.images.length) % lightboxCert.images.length);
    }
  };

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
          <a 
            href="https://www.linkedin.com/in/jyoti-prakash-dwivedi-6a5096175/details/certifications/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn btn-secondary ${styles.knowMoreBtn}`}
          >
            KNOW MORE
          </a>
        </motion.div>

        {/* Right Side: Cards Grid/Carousel */}
        <div className={styles.certRight}>
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} i={i} onOpenLightbox={openLightbox} />
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

      {/* Lightbox Overlay */}
      {lightboxCert && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeLightbox}>✕</button>
            
            {lightboxCert.images[lightboxIndex].endsWith('.pdf') ? (
              <object 
                data={`${lightboxCert.images[lightboxIndex]}#toolbar=1&navpanes=1&scrollbar=1`} 
                type="application/pdf" 
                className={styles.lightboxMedia}
              >
                <p>PDF cannot be displayed. <a href={lightboxCert.images[lightboxIndex]} target="_blank" rel="noopener noreferrer">Download instead.</a></p>
              </object>
            ) : (
              <img 
                src={lightboxCert.images[lightboxIndex]} 
                alt={`${lightboxCert.name} full view`} 
                className={styles.lightboxMedia} 
              />
            )}

            {/* Lightbox Navigation if multiple images */}
            {lightboxCert.images.length > 1 && (
              <>
                <button className={styles.navBtnLeft} onClick={handleLightboxPrev}>‹</button>
                <button className={styles.navBtnRight} onClick={handleLightboxNext}>›</button>
                <div className={styles.lightboxCounter}>
                  {lightboxIndex + 1} / {lightboxCert.images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
