import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import styles from './Contact.module.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sectionLabel}>
          <span className={styles.labelText}>CONTACT</span>
        </div>
        <h2 className={styles.title}>
          Let's Create<br />
          <span className={styles.titleMuted}>Together</span>
        </h2>
        <p className={styles.description}>
          Ready to transform your ideas into exceptional digital experiences?<br />
          Let's collaborate and build something remarkable.
        </p>
      </motion.div>

      <div className={styles.contentGrid}>
        <motion.div 
          className={styles.contactCards}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Email */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=s.m.saad001@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <div className={styles.cardIconBox}><Mail size={20} /></div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>EMAIL</span>
              <span className={styles.cardValue}>s.m.saad001@gmail.com</span>
            </div>
            <ArrowUpRight size={16} className={styles.cardArrow} />
          </a>

          {/* Phone */}
          <a href="tel:+923154529120" className={styles.contactCard}>
            <div className={styles.cardIconBox}><Phone size={20} /></div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>PHONE</span>
              <span className={styles.cardValue}>+92 315 4529120</span>
            </div>
            <ArrowUpRight size={16} className={styles.cardArrow} />
          </a>

          {/* Location */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}><MapPin size={20} /></div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>LOCATION</span>
              <span className={styles.cardValue}>Karachi, Pakistan</span>
            </div>
          </div>


        </motion.div>

        <motion.div 
          className={styles.socialsColumn}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className={styles.socialsTitle}>Connect With Me</h3>
          
          <div className={styles.socialsGrid}>
            <a href="https://github.com/saadzaidi002" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <GithubIcon /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/s-m-saad-a9a238299/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="https://x.com/S_M_Saad002" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <TwitterIcon /> Twitter
            </a>
            <a href="https://www.instagram.com/s.m.saad002/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <InstagramIcon /> Instagram
            </a>
          </div>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=s.m.saad001@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.primaryCta}>
            Start a Project Together <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
