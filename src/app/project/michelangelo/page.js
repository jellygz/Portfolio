"use client"
import React from 'react'
import ProjectHero from '@/app/components/ProjectHero'
import ProjectOverview from '@/app/components/ProjectOverview'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './michelangelo.module.css'

export default function Michelangelo() {
    const project = {
        hero: {
            url: "/michelangelo/Poster Mockup.jpg"
        },
        overview: {
            subheading: "Poster Design",
            title: "Frozen in Time, Brought to Life",
            content: "For this project, I was tasked with selecting an art theme to exhibit at the National Canadian Museum of History. Inspired by my interest in figure sculptures, I chose to center the theme around Michelangelo's statues and artwork. This two-week project allowed me to refine my poster layout design skills while showcasing a cohesive and visually engaging concept",
            role: "Graphic Designer",
            duration: "Oct. — Nov. 2024",
            time: "2 Weeks",
            projecttype: "Poster Layout Assignment",
            tools: "Indesign, Illustrator"
        },
        reflection: {
            content: ["For this poster, I aimed to take an experimental approach with the fonts and layout, drawing inspiration from Michelangelo’s extraordinary work. To make the design stand out, I adjusted the tracking to create more space between words, giving it an edgy, minimalistic, and almost futuristic feel. This ironic contrast—pairing a modern design approach with a historical concept—symbolizes the timelessness of Michelangelo’s art.", "To ensure the focus remained on the statue, I opted for a dotted halftone effect instead of a traditional photo. This choice complemented the black-and-white design, emphasizing the statue’s details while tying together the overall concept cohesively."],
            url: "/michelangelo/psd 3.png"
        }
    }

    const containerRef = useRef()
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]) 

  return (
    <main>
        <div className={styles.wrapper} ref={containerRef}>
            <ProjectHero url={project.hero.url} />
            <motion.section className={styles.motion} style={{y}}>
                <ProjectOverview subheading={project.overview.subheading} title={project.overview.title} content={project.overview.content} role={project.overview.role} duration={project.overview.duration} time={project.overview.time} projecttype={project.overview.projecttype} tools={project.overview.tools} />
                <section className={styles.container}>
                    <div className={styles.textWrapper}>
                        <h3 className={styles.title}>Design Approach</h3>
                        {project.reflection.content.map((paragraph, index) => (
                            <p className={styles.content} key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image className={styles.image} src={project.reflection.url} alt='mockup' width={200} height={200} />
                    </div>
                </section>
            </motion.section>
        </div>
    </main>
  )
}
