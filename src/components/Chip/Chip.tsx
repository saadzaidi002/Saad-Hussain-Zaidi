import React from 'react';
import styles from './Chip.module.css';

interface ChipProps {
  label: string;
}

export const Chip: React.FC<ChipProps> = ({ label }) => {
  return <span className={`${styles.chip} label-mono`}>{label}</span>;
};
