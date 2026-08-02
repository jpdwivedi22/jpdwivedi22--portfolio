import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Journey from './components/Journey/Journey';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticlesBackground from './components/Background/ParticlesBackground';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Particle constellation background */}
      <ParticlesBackground />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top visible"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
