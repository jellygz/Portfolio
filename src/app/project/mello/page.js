"use client"
import React from 'react'
import ProjectHero from '@/app/components/ProjectHero'
import ProjectOverview from '@/app/components/ProjectOverview'
import ProjectReflection from '@/app/components/ProjectReflection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './mello.module.css'

export default function Bareminimum() {
    const project = {
        hero: {
            url: "/mello/Frozen Can Mockup_1.jpg"
        },
        overview: {
            subheading: "Can Mock-Up",
            title: "Brewing Identity, One Can at a Time",
            content: "Mello is a three-part project created for my Vectors class, where we integrate both Adobe Illustrator and Photoshop to develop a comprehensive final project. This project focuses on branding and mockups, combining vector-based design with digital imaging techniques. Through Mello, I explored visual identity development, utilizing both software tools to craft a cohesive brand aesthetic and present it through polished mockups.",
            role: "Graphic Designer",
            duration: "Oct. — Nov. 2024",
            time: "1 Month",
            projecttype: "Branding Assignment",
            tools: "Indesign, Illustrator",
        },
        reflection: {
            content: "For Mello, I wanted the design to reflect the vibrancy of its fruity flavors while maintaining a clean, modern aesthetic. I used expressive line drawings to capture the organic essence of each fruit, creating a sense of fluidity and lightness. To balance this, I incorporated bold typography for strong brand presence, ensuring a striking yet minimal look. Each flavor is distinguished by a unique color palette inspired by its fruit, reinforcing the visual identity. This contrast between soft illustrations and bold type mirrors Mello’s essence—playful yet refined, flavorful yet smooth.",
            url: "/mello/1.png"
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
