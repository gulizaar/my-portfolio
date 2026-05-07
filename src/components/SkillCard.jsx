import React from "react";
import "../css/skills.css";

function SkillCard({ image, title }) {
    return (
        <div className="skill-card">

            <div className="skill-image">
                <img src={image} alt={title} />
            </div>

            <p>{title}</p>

        </div>
    );
}

export default SkillCard;