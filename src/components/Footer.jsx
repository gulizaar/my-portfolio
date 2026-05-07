
import React, { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { translations } from "../data/translations";

function Footer() {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    const t = translations[language];

    return (
        <footer
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: theme === "dark" ? "#121212" : "#fff",
                color: theme === "dark" ? "white" : "black"
            }}
        >
            <div style={{ position: 'relative' }}>
                <div
                    style={{
                        width: '150px',
                        height: '10px',
                        backgroundColor: '#82BBFF',
                        position: 'absolute',
                        top: '55px',
                        left: '90px',
                        zIndex: 0
                    }}
                />

                <h2
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        lineHeight: "50px",
                        fontSize: '30px'
                    }}
                >
                    {t.aciklama}
                </h2>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',

                }}
            >
                <a
                    style={{ textDecoration: 'none', color: theme === "light" ? "blue" : 'white' }}
                    href="https://github.com/gulizaar"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>

                <a
                    style={{ textDecoration: 'none', color: theme === "light" ? "blue" : 'white' }}
                    href="https://yourblog.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Personal Blog
                </a>

                <a
                    style={{ textDecoration: 'none', color: theme === "light" ? "blue" : 'white' }}
                    href="https://www.linkedin.com/in/g%C3%BClizar-aksoy-131733269/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Linkedin
                </a>

                <a
                    style={{ textDecoration: 'none', color: theme === "light" ? "blue" : 'white' }}
                    href="mailto:gulizar_aksoy@hotmail.com">
                    Email
                </a>
            </div>
        </footer>
    );
}

export default Footer;

