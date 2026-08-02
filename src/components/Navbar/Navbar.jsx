import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const navItems = ['About', 'Journey', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => ({
        id: item.toLowerCase(),
        el: document.getElementById(item.toLowerCase()),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el) {
          const rect = sections[i].el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.navContent}>
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            JP.
          </div>
          <div className={styles.navPill}>
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item}>
                  <span
                    className={`${styles.navLink} ${activeSection === item.toLowerCase() ? styles.active : ''}`}
                    onClick={() => scrollTo(item)}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>

            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`${styles.mobileMenu} ${styles.open}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                className={styles.mobileNavLink}
                onClick={() => scrollTo(item)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {item}
              </motion.div>
            ))}
            <button className={styles.themeToggle} onClick={toggleTheme} style={{ marginTop: 16, width: 48, height: 48, fontSize: '1.2rem' }}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
