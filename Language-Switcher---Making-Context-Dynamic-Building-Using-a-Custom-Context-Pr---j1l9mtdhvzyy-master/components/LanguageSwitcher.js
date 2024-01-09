"use client"
import { useContext } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const [language,setLanguage] = useLanguage()
    return (
        <select value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
        </select>
    );
};

export default LanguageSwitcher;
