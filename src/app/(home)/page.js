import React from 'react'
import styles from './homepage.module.css'
import ProjectContainer from '../components/ProjectContainer'
import GraphicDesign from '../components/GraphicDesigns'

export default function HomePage() {
    const content = {
        remedify : {
            imageSrc : "/Group 1346.png",
            title : "remedify",
            description : "Remedify is a cutting-edge medication management app designed specifically for patients managing multiple prescriptions, including those with polypharmacy needs. Leveraging AI technology, the app simplifies health routines by allowing users to scan and identify medications, set tailored reminders, and track adherence."
        },
        wonderland : {
            imageSrc : "/Group 1346.png",
            title : "wonderland",
            description : "Wonderland is a unique app that encourages self-reflection and personal growth through an interactive, game-like platform. Designed to support mental and emotional well-being; it offers engaging features that guide users on a journey of self-discovery."
        },
    }

  return (
    <>
    <div className={styles.container}>
        <h1 className={styles.title}>JILLIAN G.</h1>
        <div className={styles.text}>
            <p>I am a <span className={styles.highlight}>product designer</span> who crafts like this floating crystal cube;</p>
            <p>clean, minimalistic, and reflective of intention</p>
        </div>
    </div>

    <ProjectContainer imageSrc={content.remedify.imageSrc} title={content.remedify.title} description={content.remedify.description} />
    <ProjectContainer imageSrc={content.wonderland.imageSrc} title={content.wonderland.title} description={content.wonderland.description} />
    <GraphicDesign />
    </>
  )
}
