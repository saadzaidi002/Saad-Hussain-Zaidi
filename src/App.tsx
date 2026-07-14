import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './sections/Home/Home';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { CustomCursor } from './components/CustomCursor/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
