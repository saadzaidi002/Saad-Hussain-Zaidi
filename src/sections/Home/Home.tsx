import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button/Button';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  return (
    <section id="home" className={styles.home}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.name}>S.M. Saad Hussain Zaidi.</h1>
        <h2 className={styles.title}>Physicist | Data Scientist | Web Developer</h2>
        <p className={styles.description}>
          I build scalable solutions bridging the gap between hardware, data, and software. 
          Specializing in IoT systems, machine learning, and full-stack development to create 
          intelligent, data-driven applications.
        </p>
        <div className={styles.actions}>
          <Button href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Hire Me
          </Button>
          <Button href="#projects" variant="secondary" onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Projects
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
