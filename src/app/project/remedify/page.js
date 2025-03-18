import React from 'react'
import ProjectOverview from '@/app/components/ProjectOverview'
import styles from './remedify.module.css'
import Image from 'next/image'

export default function Remedify() {
  return (
    <main>
       <section className={styles.container}>
        <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
                <h2 className={styles.firsttitle}>Your Health</h2>
                <h2 className={styles.secondtitle}>Our <span className={styles.highlight}>Priority</span></h2>
            </div>
            <div className={styles.detailContainer}>
                <h3 className={styles.casestudy}>Case Study</h3>
                <p className={styles.duration}>8 min. read</p>
            </div>
        </div>
        <Image className={styles.image} src="/remedify/Mockup.png" alt="herobanner" width={600} height={600} />
    </section>
    <section className={styles.container}>
        <div className={styles.subHeadingContainer}>
            <h5>Case Study</h5>
            <span> | </span>
            <p>Overview</p>
        </div>
        <div className={styles.titleContainer}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
        <div className={styles.detailContainer}>
            <div>
                <p className={styles.detailTitle}>Role</p>
                <p className={styles.detailContent}>{role}</p>
            </div>
            <div>
                <p className={styles.detailTitle}>Duration</p>
                <div>
                    <p className={styles.detailContent}>{duration}</p>
                    <p className={styles.detailContent}>{time}</p>
                </div>
            </div>
            <div>
                <p className={styles.detailTitle}>Project Type</p>
                <p className={styles.detailContent}>{projecttype}</p>
            </div>
            <div>
                <p className={styles.detailTitle}>Tools</p>
                <p className={styles.detailContent}>{tools}</p>
            </div>
        </div>
    </section>
    </main>
  )
}
