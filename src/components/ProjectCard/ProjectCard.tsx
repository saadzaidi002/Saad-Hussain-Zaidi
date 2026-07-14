import React from 'react';
import { motion } from 'framer-motion';
import { Chip } from '../Chip/Chip';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  organization,
  date,
  description,
  technologies,
  link,
  image,
}) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={`${styles.meta} label-mono`}>
          {organization} &bull; {date}
        </p>
      </div>
      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
        <div className={styles.techList}>
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </div>
        <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
          View Project &rarr;
        </a>
      </div>
    </motion.div>
  );
};
