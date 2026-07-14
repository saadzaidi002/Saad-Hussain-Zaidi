import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className={styles.timeline}>
        <motion.div 
          className={styles.item}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.header}>
            <h3 className={styles.role}>Data Analyst Intern</h3>
            <p className={`${styles.company} label-mono`}>
              Placement Dost, Pinnacle Full-Stack Interns, NED University, SUPARCO
            </p>

          </div>
          <ul className={`custom-list ${styles.responsibilities}`}>
            <li>Data Analysis &amp; Visualization: Built Power BI dashboards and conducted in-depth analysis of large datasets.</li>
            <li>Machine Learning: Developed predictive models using Python &amp; ML algorithms.</li>
            <li>Deep Learning: Designed and implemented neural network architectures for computer vision, object detection, and predictive modeling.</li>
            <li>Demonstrated strong Python proficiency and applied ML techniques to real-world datasets.</li>
            <li>Facilitated cross-functional stakeholder communication to align technical deliverables with business goals.</li>
            <li>Delivered problem-solving through data-driven solutions and actionable insights.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
