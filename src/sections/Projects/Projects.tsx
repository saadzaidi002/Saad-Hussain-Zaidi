import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const PROJECTS_DATA = [
  {
    title: 'Solar Panel Detection & Change Detection AI Model',
    organization: 'RESOLVE South, SUPARCO Complex, Karachi',
    date: 'Jun–Aug 2025',
    description: 'YOLOv8-based detection and monitoring of solar panels from satellite imagery, with model comparison for accuracy and renewable-energy monitoring insights.',
    technologies: ['Python', 'Ultralytics (YOLOv8)', 'Image Processing', 'Object Detection'],
    link: 'https://huggingface.co/spaces/smsaad001/solarpanel',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Bankruptcy Risk Prediction Using Hybrid ML Models',
    organization: 'NED University',
    date: 'Feb–Jun 2025',
    description: 'Hybrid Dynamic Panel Probit + ANN (11-neuron single hidden layer, cross-entropy loss, k-fold CV) using financial/macroeconomic/market variables.',
    technologies: ['Machine Learning', 'Deep Learning', 'Data Analysis'],
    link: 'https://bankcruptcy-utpnyv42kjcfdvhohujyzr.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Flood Damage Prediction Model',
    organization: 'NED University',
    date: 'Dec 2024–Jan 2025',
    description: 'Two-stage classification pipeline (inundation depth + material type, one-hot encoding); optimized Random Forest — 95% accuracy (minor damage), 83% (severe damage).',
    technologies: ['Python', 'Machine Learning', 'Data Wrangling'],
    link: 'https://damage-detection-on-infrastructures.vercel.app/',
    image: 'https://images.unsplash.com/photo-1473654729523-203e25dfda10?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Flight Activity Dashboard (Power BI)',
    organization: 'Placement Dost',
    date: 'Apr–Jun 2024',
    description: 'Booking trends, CLV segmentation, geographic distribution, loyalty impact analysis.',
    technologies: ['Power BI', 'Data Visualization', 'Analytics'],
    link: 'https://www.linkedin.com/posts/s-m-saad-a9a238299_customer-and-flight-activity-analytics-dashboard-activity-7199291388704776194-DH7l?utm_source=share&utm_medium=member_desktop',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Email Spam Detection System',
    organization: 'Pinnacle Full-Stack Interns',
    date: 'Jun–Jul 2024',
    description: 'Text preprocessing and classification (decision trees) for spam detection.',
    technologies: ['Python', 'Machine Learning', 'NLP'],
    link: 'https://github.com/saadzaidi002/pfsinterns',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Heart Disease Classification',
    organization: 'Pinnacle Full-Stack Interns',
    date: 'Jun–Jul 2024',
    description: 'ML classification model for healthcare/diagnostic analytics.',
    technologies: ['Machine Learning', 'Data Analysis'],
    link: 'https://github.com/saadzaidi002/pfsinterns',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className={styles.grid}>
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            organization={project.organization}
            date={project.date}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};
