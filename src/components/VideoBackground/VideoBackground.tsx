import React, { useRef } from 'react';
import { useVideoScrub } from '../../hooks/useVideoScrub';
import styles from './VideoBackground.module.css';

/**
 * Full-page fixed video background that scrubs based on total document
 * scroll progress (top of page → bottom of page = frame 0 → last frame).
 */
export const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pass null for sectionRef — the hook will use the full document
  useVideoScrub(null, videoRef);

  return (
    <div className={styles.videoBackground}>
      <video
        className={styles.video}
        ref={videoRef}
        src="/merged.mp4"
        muted
        playsInline
        // @ts-expect-error — webkit vendor attribute for older iOS Safari
        webkit-playsinline=""
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      />
      <div className={styles.overlay} />
    </div>
  );
};
