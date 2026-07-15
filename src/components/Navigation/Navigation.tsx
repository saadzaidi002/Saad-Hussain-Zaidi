import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../Button/Button';
import { Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export const Navigation: React.FC = () => {
  const activeSection = useActiveSection(SECTIONS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          S.M. Saad Hussain Zaidi
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {SECTIONS.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleScroll(e, section)}
                  className={`${styles.navLink} ${activeSection === section ? styles.active : ''}`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={styles.actions}>
          <div className={styles.desktopHireMe}>
            <Button href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
              Hire Me
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {SECTIONS.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleScroll(e, section)}
                  className={`${styles.mobileNavLink} ${activeSection === section ? styles.active : ''}`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li className={styles.mobileHireMe}>
              <Button href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                Hire Me
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
