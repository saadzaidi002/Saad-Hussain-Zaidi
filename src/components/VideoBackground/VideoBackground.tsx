import React, { useRef, useState, useEffect } from 'react';
import { useVideoScrub } from '../../hooks/useVideoScrub';
import styles from './VideoBackground.module.css';

/**
 * Full-page fixed video background that scrubs based on total document
 * scroll progress (top of page → bottom of page = frame 0 → last frame).
 */
export const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pass null for sectionRef — the hook will use the full document
  useVideoScrub(null, videoRef);

  return (
    <div className={styles.videoBackground}>
      <video
        className={styles.video}
        ref={videoRef}
        src={isMobile ? undefined : "/merged.mp4"}
        muted
        playsInline
        // webkit vendor attribute for older iOS Safari
        webkit-playsinline=""
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      />
      <div className={styles.overlay} />
    </div>
  );
};
