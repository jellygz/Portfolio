"use client";

import React, { useState } from 'react';
import styles from './About.module.css';

export default function About() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { question: 'What school does Jillian go to?', answer: 'Jillian studies in the BCIT Digital Design & Development (D3) program.' },
        { question: 'Why does she design?', answer: 'Design is her way of problem-solving and storytelling, blending creativity with functionality.' },
        { question: 'What inspires her work?', answer: 'Minimalist aesthetics, human-centered experiences, and making things feel effortless.' }
    ];

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>So... Who is Jillian?</h2>
            <div className={styles.content}>
                {faqData.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.faqQuestion} onClick={() => toggleAccordion(index)}>
                            {openIndex === index ? '✖' : '+'} {item.question}
                        </div>
                        {openIndex === index && <div className={styles.faqAnswer}>{item.answer}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
}