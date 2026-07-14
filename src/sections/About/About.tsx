import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { Button } from '../../components/Button/Button';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.summary}>
          <p>
            I am a highly motivated Physicist with a strong focus on software, machine learning, 
            and IoT development. Over my academic and professional career,
            I have consistently demonstrated the ability to tackle complex analytical problems and build 
            end-to-end data pipelines, predictive models, and web platforms.
          </p>
          <p>
            Whether it's deploying hybrid machine learning models to predict financial risk or developing 
            full-stack solutions for hardware integration, I thrive at the intersection of data, software, and scientific computing.
          </p>
          
          <div className={styles.resumeContainer}>
            {/* TODO: Update this placeholder link once you have the actual resume URL configured */}
            <Button href="/assets/S.M.SAAD CV.pdf" variant="secondary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </Button>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.education}>
            <h3>Education</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <strong>NED University of Engineering & Technology, Karachi</strong>
                <span className={styles.timelineMeta}>BS Physics | Oct 2022 - Dec 2026</span>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <strong>UK Tech Hub</strong>
                <span className={styles.timelineMeta}>Applied Data Science with Machine Learning | Oct 2023 - Nov 2024</span>
              </div>
            </div>
          </div>

          <div className={styles.certifications}>
            <h3>Certifications</h3>
            <ul>
              <li><div className={styles.certDot}></div> Fundamentals of Python <span className="label-mono">(Nov 2023)</span></li>
              <li><div className={styles.certDot}></div> Data Manipulation and Analysis <span className="label-mono">(Jan 2024)</span></li>
              <li><div className={styles.certDot}></div> SQL <span className="label-mono">(Feb 2024)</span></li>
              <li><div className={styles.certDot}></div> Data Visualization <span className="label-mono">(Apr 2024)</span></li>
              <li><div className={styles.certDot}></div> Statistics for Data Science <span className="label-mono">(Jul 2024)</span></li>
              <li><div className={styles.certDot}></div> Machine Learning <span className="label-mono">(Nov 2024)</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
