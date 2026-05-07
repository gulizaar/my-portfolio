import React from 'react'
import projectData from '../data/projectData.json'
import ProjectItem from './ProjectItem'
import { imageMap } from "../data/imageMap";
import { useContext } from "react";
import { translations } from "../data/translations";
import { LanguageContext } from "../context/LanguageContext";


function ProjectList() {
    const { language } = useContext(LanguageContext);


    const t = translations[language];
    return (
        <section
            style={{

                padding: '50px',

            }}
        >
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.proje}</h2>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // taşarsa alt satıra geçer
                    gap: "20px",
                    justifyContent: "center",
                    marginTop: '50px'
                }}
            >
                {projectData.map((proje) => (
                    <ProjectItem
                        key={proje.id}
                        id={proje.id}
                        title={proje.title[language]}
                        description={proje.description[language]}
                        image={imageMap[proje.image]}
                        tags={proje.tags}
                        src={proje.src}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectList