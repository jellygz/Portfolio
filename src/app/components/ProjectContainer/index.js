import React from 'react'
import Image from 'next/image'
import Arrow from '@/app/assets/arrow.png'
import Link from 'next/link'
import styles from './ProjectContainer.module.css'

export default function ProjectContainer({imageSrc, title, description}) {
  return (
    <section className={styles.wrapper}>
        <div className={styles.imageContainer}>
            <Image className={styles.image} src={imageSrc} alt={`${title}`} width={200} height={200} />
            <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
            <div className={styles.ctaContainer}>
                <Link className={styles.link} href="work/remedify">
                    <p>View Case Study</p>
                    <Image src={Arrow} alt="arrow" width={200} height={200} />
                </Link>
            </div>
        </div>
    </section>
  )
}
