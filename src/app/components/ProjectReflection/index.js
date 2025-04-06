import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectReflection.module.css'

export default function ProjectReflection({ content, url }) {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Design Approach</h3>
        <p className={styles.content}>{content}</p>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={url} alt="mockup" width={200} height={200} />
        </div>
        <Link href="/" className={styles.homeButton}>← Go Back Home</Link>
      </div>
    </section>
  )
}
