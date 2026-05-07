import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "tr";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "tr" ? "en" : "tr"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}