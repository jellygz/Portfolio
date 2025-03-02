import React from 'react'
import Image from 'next/image'
import styles from './ProjectReflection.module.css'

export default function ProjectReflection({ content, url }) {
  return (
    <section className={styles.container}>
        <h3 className={styles.title}>Design Approach</h3>
        <p className={styles.content}>{content}</p>
        <Image className={styles.image} src={url} alt='mockup' width={200} height={200} />
    </section>
  )
}
