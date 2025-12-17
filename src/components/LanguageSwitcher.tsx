import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CursorTrigger } from './CursorTrigger';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <CursorTrigger state="hover">
        <button
          className={`lang-button ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
          aria-label="Switch to English"
        >
          EN
        </button>
      </CursorTrigger>
      <CursorTrigger state="hover">
        <button
          className={`lang-button ${language === 'fr' ? 'active' : ''}`}
          onClick={() => setLanguage('fr')}
          aria-label="Passer au français"
        >
          FR
        </button>
      </CursorTrigger>
    </div>
  );
};

export default LanguageSwitcher;
