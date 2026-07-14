import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Huge Background Text */}
      <div className={styles.hugeTextContainer}>
        <motion.h1 
          className={styles.hugeText}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          S.M. SAAD ZAIDI
        </motion.h1>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Column 1: Navigation */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>NAVIGATION</h4>
            <ul className={styles.navList}>
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={(e) => handleScroll(e, item)} className={styles.navLink}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Specialization */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>SPECIALIZATION</h4>
            <ul className={styles.specList}>
              <li>Full-Stack IoT Engineer</li>
              <li>Machine Learning &amp; Data Analyst</li>
              <li>Hardware Prototyping Specialist</li>
            </ul>
          </div>

          {/* Column 3: Call to Action */}
          <div className={`${styles.column} ${styles.ctaColumn}`}>
            <h3 className={styles.ctaText}>
              Ready to start your next digital experience?
            </h3>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className={styles.pillButton}>
              <span className={styles.dot}></span> GET IN TOUCH
            </a>
            
            <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
              &uarr;
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} S.M. SAAD ZAIDI. All rights reserved.</p>
          <p>Crafted with passion &amp; modern web technologies</p>
        </div>
      </div>
    </footer>
  );
};
