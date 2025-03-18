import React from 'react'
import Image from 'next/image'
import styles from './ProjectHero.module.css'

export default function ProjectHero({ url }) {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={url} alt="heroimage" width={500} height={500} />
        </div>
    </div>
  )
}
