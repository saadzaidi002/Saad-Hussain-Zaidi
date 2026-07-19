import React, { useRef, useState, useEffect } from 'react';
import { useVideoScrub } from '../../hooks/useVideoScrub';
import styles from './VideoBackground.module.css';

/**
 * Full-page fixed video background that scrubs based on total document
 * scroll progress (top of page → bottom of page = frame 0 → last frame).
 */
export const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  // Pass null for sectionRef — the hook will use the full document
  useVideoScrub(null, videoRef);

  useEffect(() => {
    if (import.meta.env.DEV) {
      // Zero-latency local file for development
      setVideoSrc('/merged.mp4');
    } else {
      // Pre-load the 76MB video into memory on Vercel to guarantee zero-latency scrubbing
      const REMOTE_URL = 'https://github.com/saadzaidi002/Saad-Hussain-Zaidi/releases/download/v10.0/merged.mp4';
      fetch(REMOTE_URL)
        .then((res) => res.blob())
        .then((blob) => {
          const objectUrl = URL.createObjectURL(blob);
          setVideoSrc(objectUrl);
        })
        .catch((err) => {
          console.error('Failed to pre-load background video:', err);
        });
    }
  }, []);

  return (
    <div className={styles.videoBackground}>
      <video
        className={styles.video}
        ref={videoRef}
        src={videoSrc || undefined}
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
