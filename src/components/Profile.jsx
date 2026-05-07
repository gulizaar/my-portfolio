import React, { useContext } from "react";
import "../css/profilCss.css";
import { ThemeContext } from "../context/ThemeContext";
import { translations } from "../data/translations";
import { LanguageContext } from "../context/LanguageContext";

function Profile() {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    const t = translations[language];

    return (
        <div
            className={`profile ${theme}`}
            style={{
                backgroundColor: theme === "dark" ? "#121212" : "#F4F4F4",
            }}
        >
            <h1>  {t.profil}</h1>

            <div className="profile-content">


                <div className="profile-card-wrapper">


                    <div className="profile-bg"></div>


                    <div
                        className="profile-card"
                        style={{
                            backgroundColor: theme === "dark" ? "black" : "white",
                            color: theme === "dark" ? "white" : "black",
                        }}
                    >
                        <h3>  {t.information}</h3>

                        <div className="profile-info">

                            <div>
                                <p>{t.dg}</p>
                                <p>{t.sehir}</p>
                                <p>{t.egitimdurumu}</p>
                                <p>{t.rolTercihi}</p>
                            </div>

                            <div>
                                <p>04.07.2000</p>
                                <p>Antalya</p>
                                <p>{t.egitimyeri}</p>
                                <p>{t.rol}</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div
                    className="about"
                    style={{
                        color: theme === "dark" ? "white" : "black",
                    }}
                >
                    <h4>Hakkımda</h4>

                    <p>
                        {t.hakkinda1}</p>

                    <p>
                        {t.hakkinda2}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Profile;