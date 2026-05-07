
import React, { useContext } from "react";
import "../css/projectCss.css";
import pcIcon from "../icons/pcicon.png";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function ProjectItem({
    id,
    title,
    description,
    image,
    tags,
    src
}) {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    return (
        <article
            className="project-card"
            style={{
                backgroundColor:
                    theme === "dark"
                        ? "black"
                        : id % 2 === 0
                            ? "#DDEEFE"
                            : "#D9F6F1",
                color: theme === "dark" ? "white" : "black"
            }}
        >
            <h3>{title}</h3>

            <p>{description}</p>

            <div className="project-tags">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        className="tag-button"
                        style={{
                            backgroundColor: theme === "dark" ? "#222" : "white",
                            color: theme === "dark" ? "white" : "black"
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="project-links">
                <a
                    style={{ color: theme === "light" ? "black" : "white" }}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                >
                    {language === "en"
                        ? "View on GitHub"
                        : "Github’da görüntüle"}
                </a>

                <a
                    style={{ color: theme === "light" ? "black" : "white" }}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                >
                    {language === "en"
                        ? "Go to app"
                        : "Uygulamaya Git"}
                </a>
            </div>

            <div className="project-image-box">
                <img
                    src={pcIcon}
                    alt="pc icon"
                    className="pc-icon"
                />

                <img
                    src={image}
                    alt={title}
                    className="project-image"
                />
            </div>
        </article>
    );
}

