import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Database, Brain, Globe } from 'lucide-react';
import { Chip } from '../../components/Chip/Chip';
import styles from './Skills.module.css';

const PIPELINE_DATA = [
  {
    stage: '01',
    title: 'Hardware & IoT',
    description: 'Bridging the physical and digital worlds. Designing embedded systems and IoT architecture to reliably capture raw data from the environment.',
    icon: <CircuitBoard size={24} strokeWidth={1.5} />,
    skills: ['IoT Systems', 'PCB Designing', 'Hardware Prototyping', 'Firmware Development', 'Embedded Systems Engineering', 'Electronics'],
  },
  {
    stage: '02',
    title: 'Data Engineering & Analytics',
    description: 'Transforming raw inputs into structured assets. Cleaning, analyzing, and visualizing complex datasets to uncover foundational insights.',
    icon: <Database size={24} strokeWidth={1.5} />,
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Wrangling', 'Statistics', 'Power BI', 'Data Visualization', 'Analytics'],
  },
  {
    stage: '03',
    title: 'Machine Learning & AI',
    description: 'Building predictive engines. Training advanced neural networks and computer vision models to automate decision-making and detect patterns.',
    icon: <Brain size={24} strokeWidth={1.5} />,
    skills: ['Machine Learning', 'Deep Learning', 'Object Detection', 'Ultralytics (YOLOv8)', 'Image Processing'],
  },
  {
    stage: '04',
    title: 'Full-Stack Web Engineering',
    description: 'Delivering the final solution. Creating responsive, intuitive web applications and dashboards to put powerful models directly into the hands of users.',
    icon: <Globe size={24} strokeWidth={1.5} />,
    skills: ['Web Development', 'Web Designing', 'HTML', 'React', 'Deployment'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>
      <div className={styles.pipeline}>
        {PIPELINE_DATA.map((stage, index) => (
          <motion.div 
            key={stage.stage} 
            className={styles.pipelineRow}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Explanation Side */}
            <div className={styles.pipelineExplanation}>
              <span className="label-mono">STAGE {stage.stage}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>

            {/* Connector */}
            <div className={styles.pipelineConnector}>
              <div className={styles.pipelineDot}>
                {stage.icon}
              </div>
              {index !== PIPELINE_DATA.length - 1 && <div className={styles.pipelineLine}></div>}
            </div>

            {/* Card Side */}
            <div className={styles.pipelineCard}>
              <div className={styles.skillCard}>
                <div className={styles.chipContainer}>
                  {stage.skills.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
