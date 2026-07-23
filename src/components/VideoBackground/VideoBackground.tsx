import React, { useRef, useState, useEffect } from 'react';
import { useVideoScrub } from '../../hooks/useVideoScrub';
import styles from './VideoBackground.module.css';

/**
 * Full-page fixed video background that scrubs based on total document
 * scroll progress (top of page → bottom of page = frame 0 → last frame).
 */
export const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pass null for sectionRef — the hook will use the full document
  // If videoRef.current is null (e.g. on mobile), the hook safely skips setup
  useVideoScrub(null, videoRef);

  return (
    <div className={styles.videoBackground}>
      {!isMobile && (
        <>
          <video
            className={styles.video}
            ref={videoRef}
            src="/merged.mp4"
            muted
            playsInline
            // webkit vendor attribute for older iOS Safari
            webkit-playsinline="true"
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          />
          <div className={styles.overlay} />
        </>
      )}
    </div>
  );
};
