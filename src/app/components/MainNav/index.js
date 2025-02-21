import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LOGO from '@/app/assets/LOGO.png'
import styles from './MainNav.module.css'

export default function MainNav() {
  return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <Image src={LOGO} alt="logo" width={100} height={100}/>
        </div>
        <nav>
            <ul className={styles.nav}>
                <li><Link className={styles.link} href="/project">Project</Link></li>
                <li><Link className={styles.link} href="/about">About</Link></li>
                <li><Link className={styles.link} href="/cv">CV</Link></li>
            </ul>
        </nav>
        <div className={styles.buttonContainer}>

        </div>
    </header>
  )
}
