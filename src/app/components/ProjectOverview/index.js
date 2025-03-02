import React from 'react'
import styles from './ProjectOverview.module.css'

export default function ProjectOverview({ subheading, title, content, role, duration, time, projecttype, tools }) {
  return (
    <section className={styles.container}>
        <div className={styles.subHeadingContainer}>
            <h5>{subheading}</h5>
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
  )
}
