import { useEffect, useRef, type RefObject } from 'react';

/**
 * Scroll-scrub engine for a <video> element.
 *
 * Two modes:
 *  1. **Section mode** (sectionRef provided) — scrubs while scrolling through
 *     that section only (sticky-pin mechanic).
 *  2. **Full-page mode** (sectionRef is null) — scrubs across the entire
 *     document scroll range (top → bottom = first frame → last frame).
 *
 * Preserves:
 *  - Lerp-eased rAF loop (LERP = 0.12)
 *  - Seeked-event seek-debouncing (prevents stutter)
 *  - prefers-reduced-motion fallback (plays muted/looped)
 *  - iOS decoder priming on first touch/pointer
 */
export function useVideoScrub(
  sectionRef: RefObject<HTMLElement | null> | null,
  videoRef: RefObject<HTMLVideoElement | null>,
) {
  // Stable mutable state shared across the rAF loop and event listeners.
  const state = useRef({
    ready: false,
    duration: 0,
    targetTime: 0,
    currentTime: 0,
    rafId: null as number | null,
    seeking: false,
  });

  useEffect(() => {
    const section = sectionRef?.current ?? null; // null = full-page mode
    const video = videoRef.current;
    if (!video) return;

    const LERP = 0.12;
    const SNAP_EPS = 0.003;
    const s = state.current;

    // ── Reduced-motion fallback ─────────────────────────────
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      video.loop = true;
      video.autoplay = true;
      video.setAttribute('loop', '');
      video.setAttribute('autoplay', '');
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
      return; // no cleanup needed for this path
    }

    // ── Progress calculator ─────────────────────────────────
    function computeProgress(): number {
      if (section) {
        // Section mode: progress through one element
        const rect = section.getBoundingClientRect();
        const scrubbable = rect.height - window.innerHeight;
        if (scrubbable <= 0) return rect.top <= 0 ? 1 : 0;
        const scrolled = -rect.top;
        return Math.min(1, Math.max(0, scrolled / scrubbable));
      }
      // Full-page mode: progress across the entire document
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return 0;
      return Math.min(1, Math.max(0, scrollTop / docHeight));
    }

    // ── Tick (rAF loop body) ────────────────────────────────
    function tick() {
      s.rafId = null;
      if (!s.ready) return;

      const delta = s.targetTime - s.currentTime;
      if (Math.abs(delta) < SNAP_EPS) {
        s.currentTime = s.targetTime;
      } else {
        s.currentTime += delta * LERP;
      }

      if (!s.seeking) {
        const t = Math.min(s.duration - 0.001, Math.max(0, s.currentTime));
        if (Math.abs(video!.currentTime - t) > SNAP_EPS) {
          s.seeking = true;
          video!.currentTime = t;
        }
      }

      if (Math.abs(s.targetTime - s.currentTime) > SNAP_EPS) {
        s.rafId = requestAnimationFrame(tick);
      }
    }

    // ── Scroll handler ──────────────────────────────────────
    function onScroll() {
      if (!s.ready) return;
      const progress = computeProgress();
      s.targetTime = progress * s.duration;
      if (s.rafId === null) s.rafId = requestAnimationFrame(tick);
    }

    // ── Seeked handler (debounce seeks) ─────────────────────
    function onSeeked() {
      s.seeking = false;
      if (s.rafId === null && Math.abs(s.targetTime - s.currentTime) > SNAP_EPS) {
        s.rafId = requestAnimationFrame(tick);
      }
    }

    // ── Init ────────────────────────────────────────────────
    function initScrub() {
      s.duration = video!.duration;
      if (!isFinite(s.duration) || s.duration <= 0) return;
      s.ready = true;
      video!.pause();
      onScroll();
      tick();
    }

    if (video.readyState >= 1) {
      initScrub();
    } else {
      video.addEventListener('loadedmetadata', initScrub, { once: true });
    }

    video.addEventListener('seeked', onSeeked);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('orientationchange', onScroll, { passive: true });

    // ── iOS decoder priming ─────────────────────────────────
    function primeDecoder() {
      const pr = video!.play();
      if (pr && typeof pr.then === 'function') {
        pr.then(() => { video!.pause(); onScroll(); }).catch(() => {});
      } else {
        video!.pause();
      }
      window.removeEventListener('touchstart', primeDecoder);
      window.removeEventListener('pointerdown', primeDecoder);
    }
    window.addEventListener('touchstart', primeDecoder, { passive: true, once: true });
    window.addEventListener('pointerdown', primeDecoder, { passive: true, once: true });

    // ── Cleanup ─────────────────────────────────────────────
    return () => {
      if (s.rafId !== null) cancelAnimationFrame(s.rafId);
      s.rafId = null;
      s.ready = false;

      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('loadedmetadata', initScrub);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('orientationchange', onScroll);
      window.removeEventListener('touchstart', primeDecoder);
      window.removeEventListener('pointerdown', primeDecoder);
    };
  }, [sectionRef, videoRef]);
}
