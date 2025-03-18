'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LOGO from '@/app/assets/LOGO.png';
import styles from './MainNav.module.css';

export default function MainNav() {
  const [time, setTime] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      const vancouverTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Vancouver' }).format(date);
      setTime(vancouverTime);
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Detect background darkness
      const bgColor = window.getComputedStyle(document.body).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        setIsDarkBackground(brightness < 128);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.logoContainer}>
        <Image src={LOGO} alt="logo" width={50} height={50} />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li><Link href="/#project" className={`${styles.link} ${isDarkBackground ? styles.darkMode : ''}`}>Project</Link></li>
          <li><Link href="/#about" className={`${styles.link} ${isDarkBackground ? styles.darkMode : ''}`}>About</Link></li>
          <li><a className={`${styles.link} ${isDarkBackground ? styles.darkMode : ''}`} href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
        </ul>
      </nav>
      <div className={`${styles.timeContainer} ${isDarkBackground ? styles.darkTime : ''}`}>
        <span className={styles.timeLabel}>VAN[CA]</span>
        <span className={styles.timeText}>{time}</span>
        <span className={styles.dot}></span>
      </div>
    </header>
  );
}