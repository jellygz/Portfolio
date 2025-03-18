import React from 'react';
import styles from './homepage.module.css';
import ProjectContainer from '../components/ProjectContainer';
import GraphicDesign from '../components/GraphicDesigns';
import About from '../components/About';
import Spline from '@splinetool/react-spline/next';

export default function HomePage() {
    const content = {
        remedify : {
            imageSrc : "/Group 1346.png",
            title : "remedify",
            description : "Remedify is a cutting-edge medication management app designed specifically for patients managing multiple prescriptions, including those with polypharmacy needs. Leveraging AI technology, the app simplifies health routines by allowing users to scan and identify medications, set tailored reminders, and track adherence."
        },
    };

    return (
        <>
            {/* Hero Section */}
            <div id="home" className={styles.container}>
                <Spline scene="https://prod.spline.design/HSBJbJ1qIjRSQhFX/scene.splinecode" />
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <p>I am a <span className={styles.highlight}>product designer</span> who crafts like this floating crystal cube;</p>
                        <p>clean, minimalistic, and reflective of intention</p>
                    </div>
                </div>
            </div>

            {/* Project Section */}
            <div id="project">
                <ProjectContainer 
                    imageSrc={content.remedify.imageSrc} 
                    title={content.remedify.title} 
                    description={content.remedify.description} 
                />
            </div>

            {/* Graphic Design Section */}
            <div id="graphicDesign">
                <GraphicDesign />
            </div>

            {/* About Section */}
            <div id="about">
                <About />
            </div>
        </>
    );
}
