import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Let's Connect :)</h3>
      <div className={styles.linksContainer}>
        <a
          href="https://www.linkedin.com/in/jilliangz/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.linkedin}`}
        >
          LinkedIn
        </a>
        <a
          href="mailto:jilliangonzales12@gmail.com"
          className={`${styles.link} ${styles.email}`}
        >
          Email
        </a>
      </div>
    </section>
  );
}
