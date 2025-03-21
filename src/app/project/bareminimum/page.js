"use client"
import React from 'react'
import ProjectHero from '@/app/components/ProjectHero'
import ProjectOverview from '@/app/components/ProjectOverview'
import ProjectReflection from '@/app/components/ProjectReflection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './bareminimum.module.css'

export default function Bareminimum() {
    const project = {
        hero: {
            url: "/bareminimum/illust1.jpg"
        },
        overview: {
            subheading: "Magazine Design",
            title: "Is it really the bare minimum?",
            content: "For this project, I was tasked with creating a magazine centered on a theme within architecture. After exploring various options, I chose to focus on minimalism in architectural design, emphasizing its core principles of simplicity and functionality. The assignment required researching diverse styles, curating compelling content, and designing a cohesive layout that embodied the essence of minimalism.",
            role: "Graphic Designer",
            duration: "Oct. — Nov. 2024",
            time: "1 Month",
            projecttype: "Typography Assignment",
            tools: "Indesign, Illustrator",
        },
        reflection: {
            content: "Since this project was a minimalism magazine, I selected sans-serif fonts and used a condensed bold font for the titles to create a stronger visual impact. I carefully balanced negative space to ensure it felt intentional and cohesive, enhancing the overall flow and design of the magazine.",
            url: "/bareminimum/01.png"
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
                <ProjectReflection content={project.reflection.content} url={project.reflection.url} />
            </motion.section>
        </div>
    </main>
  )
}
