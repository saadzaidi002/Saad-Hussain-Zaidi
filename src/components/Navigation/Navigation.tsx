import React from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Button } from '../Button/Button';
import styles from './Navigation.module.css';

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

export const Navigation: React.FC = () => {
  const activeSection = useActiveSection(SECTIONS);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          S.M. Saad Hussain Zaidi
        </div>
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
          <Button href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
};
