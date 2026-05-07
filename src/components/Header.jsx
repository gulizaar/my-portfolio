import React, { useContext } from "react";
import "../css/headerCss.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import githubIcon from "../icons/github.png";
import linkedinIcon from "../icons/linkedin.png";
import switchOn from "../icons/switchon.png";
import switchOf from "../icons/switchof.png";
import profile from "../assets/profil.jpg";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

import { translations } from "../data/translations";

function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const t = translations[language];

    return (
        <div className={`header ${theme}`}>

            {/* TOP BAR */}
            <div className="header-top">

                <img
                    onClick={toggleTheme}
                    className="switch-icon"
                    src={theme === "dark" ? switchOn : switchOf}
                    alt="theme"
                />

                <p>
                    {theme === "dark"
                        ? t.lightMode
                        : t.darkMode}
                </p>

                <p>|</p>

                <p
                    className="lang"
                    onClick={toggleLanguage}
                >
                    {t.changeLang}
                </p>

            </div>

            {/* CONTENT */}
            <div className="header-content">

                {/* TEXT */}
                <div className="header-text">

                    <h3>
                        <span style={{ color: '#E92577' }}>
                            {t.hello}
                        </span>

                        <br />

                        {t.intro}

                        <br />

                        {t.description}
                    </h3>

                    {/* ICONS */}
                    <div className="icons">

                        <a href="https://www.linkedin.com/in/g%C3%BClizar-aksoy-131733269/">
                            <FaLinkedin style={{
                                color: theme === "dark" ? 'white' : 'black',
                                height: '40px', width: '40px'
                            }} />
                        </a>

                        <a href="https://github.com/gulizaar">
                            <FaGithub style={{
                                color: theme === "dark" ? 'white' : 'black',
                                height: '40px', width: '40px'
                            }} />
                        </a>

                    </div>

                    {/* MAIL */}
                    <p className="mail">
                        {t.freelance}
                        <br />
                        gulizar_aksoy@hotmail.com
                    </p>

                </div>

                {/* IMAGE */}
                <div className="header-image">

                    <div className="bg"></div>

                    <img
                        src={profile}
                        alt="profile"
                    />

                </div>

            </div>
        </div>
    );
}

export default Header;