import React from 'react'
import ProjectHero from '@/app/components/ProjectHero'
import ProjectOverview from '@/app/components/ProjectOverview'
import ProjectReflection from '@/app/components/ProjectReflection'

export default function Michelangelo() {
    const project = {
        hero: {
            url: "/bareminimum/illust1.jpg"
        },
        overview: {
            subheading: "Magazine Design",
            title: "Michelangelo",
            content: "For this project, I was tasked with creating a magazine centered on a theme within architecture. After exploring various options, I chose to focus on minimalism in architectural design, emphasizing its core principles of simplicity and functionality. The assignment required researching diverse styles, curating compelling content, and designing a cohesive layout that embodied the essence of minimalism.",
            role: "Graphic Designer",
            duration: "Oct. — Nov. 2024",
            time: "1 Month",
            projecttype: "Typography Assignment",
            tools: "Indesign, Illustrator"
        },
        reflection: {
            content: "Since this project was a minimalism magazine, I selected sans-serif fonts and used a condensed bold font for the titles to create a stronger visual impact. I carefully balanced negative space to ensure it felt intentional and cohesive, enhancing the overall flow and design of the magazine.",
            url: "/bareminimum/01.png"
        }
    }
  return (
    <main>
        <ProjectHero url={project.hero.url} />
        <ProjectOverview subheading={project.overview.subheading} title={project.overview.title} content={project.overview.content} role={project.overview.role} duration={project.overview.duration} time={project.overview.time} projecttype={project.overview.projecttype} tools={project.overview.tools} />
        <ProjectReflection content={project.reflection.content} url={project.reflection.url} />
    </main>
  )
}
