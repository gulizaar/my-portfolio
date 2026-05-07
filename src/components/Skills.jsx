import React, { useContext } from 'react'
import "../css/skills.css";

import SkillCard from "./SkillCard";
import { skillsData } from "../data/skillData";

import { translations } from "../data/translations";
import { LanguageContext } from "../context/LanguageContext";

function Skills() {

    const { language } = useContext(LanguageContext);

    const t = translations[language];

    return (
        <div className="skills">

            <h3>{t.skills}</h3>

            <div className="skills-container">

                {skillsData.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        image={skill.image}
                        title={skill.title}
                    />
                ))}

            </div>
        </div>
    )
}

export default Skills;