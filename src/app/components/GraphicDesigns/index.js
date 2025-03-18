import React from 'react'
import Image from 'next/image'
import styles from './GraphicDesigns.module.css'
import Magazine from '@/app/assets/magazine 1.png'
import Arrow from '@/app/assets/arrow2.png'
import Link from 'next/link'

export default function GraphicDesign() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={`${styles.image} ${styles.imageMagazine}`} src={Magazine} alt="magazine" width={200} height={200} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.description}>
                    <p>
                    Bare Minimum is a design magazine celebrating minimalistic architecture, design, the beauty of simplicity. and the art of intentional spaces.</p>
                </div>
                <Link className={styles.ctaContainer} href="/project/bareminimum">
                    <Image className={styles.arrow} src={Arrow} alt="arrow" width={200} height={200} />
                </Link>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src="/michelangelo/psd 3.png" alt="magazine" width={200} height={200} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.description}>
                    <p>
                    Bare Minimum is a design magazine celebrating minimalistic architecture, design, the beauty of simplicity. and the art of intentional spaces.</p>
                </div>
                <Link className={styles.ctaContainer} href="/project/michelangelo">
                    <Image className={styles.arrow} src={Arrow} alt="arrow" width={200} height={200} />
                </Link>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src="/mello/1.png" alt="magazine" width={200} height={200} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.description}>
                    <p>
                    Bare Minimum is a design magazine celebrating minimalistic architecture, design, the beauty of simplicity. and the art of intentional spaces.</p>
                </div>
                <Link className={styles.ctaContainer} href="/project/mello">
                    <Image className={styles.arrow} src={Arrow} alt="arrow" width={200} height={200} />
                </Link>
            </div>
        </div>
    </div>
  )
}
