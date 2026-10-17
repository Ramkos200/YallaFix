import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/yallafix-logo.png';
import {
 getCurrentLanguage,
 toggleLanguage,
 getCurrentLanguageData,
 getTranslations
} from '../utils/languageUtils';

function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [currentLang, setCurrentLang] = useState('en');
 const [t, setT] = useState({});

 useEffect(() => {
  const lang = getCurrentLanguage();
  setCurrentLang(lang);
  setT(getTranslations(lang));
 }, []);

 const handleLanguageToggle = () => {
  toggleLanguage();
 };

 const langData = getCurrentLanguageData();

 return (
  <header className="header">
   <div className="header-container">
    <div className="header-inner">
     <a href={`/${currentLang}`} className="logo-link">
      <img
       src={logo}
       alt="YallaFix"
       className="logo-image"
      />
     </a>

     {/* --- DESKTOP NAVIGATION --- */}
     <nav className="desktop-nav" aria-label="Main navigation">
      <a href={`/${currentLang}#how-it-works`} className="nav-link">{t.howItWorks}</a>
      <a href={`/${currentLang}#why-yallafix`} className="nav-link">{t.whyYallaFix}</a>
      <a href={`/${currentLang}#contact`} className="nav-link">{t.contact}</a>

      <button
       className="lang-btn"
       onClick={handleLanguageToggle}
       aria-label={currentLang === 'en' ? 'Switch to العربية' : 'Switch to English'}
      >
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
       </svg>
       <span>{langData.toggleLabel}</span>
      </button>

      <a href={`/${currentLang}#app-preview`} className="btn-primary-nav">{t.getEarlyAccess}</a>
     </nav>

     {/* --- HAMBURGER MENU BUTTON --- */}
     <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <line x1="4" x2="20" y1="12" y2="12" />
       <line x1="4" x2="20" y1="6" y2="6" />
       <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
     </button>
    </div>

    {/* --- MOBILE NAVIGATION --- */}
    <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
     <a href={`/${currentLang}#how-it-works`} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{t.howItWorks}</a>
     <a href={`/${currentLang}#why-yallafix`} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{t.whyYallaFix}</a>
     <a href={`/${currentLang}#contact`} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{t.contact}</a>

     {/* ✅ Added Language Toggle for Mobile */}
     <button
      className="lang-btn mobile-lang-btn"
      onClick={() => {
       handleLanguageToggle();
       setIsMenuOpen(false); // Optional: closes menu after selection
      }}
      style={{ padding: '0.5rem 0', marginTop: '0.5rem', justifyContent: 'flex-start' }}
     >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
       <circle cx="12" cy="12" r="10" />
       <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
       <path d="M2 12h20" />
      </svg>
      <span>{langData.toggleLabel}</span>
     </button>

     <a href={`/${currentLang}#app-preview`} className="mobile-nav-btn" onClick={() => setIsMenuOpen(false)}>{t.getEarlyAccess}</a>
    </div>
   </div>
  </header>
 );
}

export default Header;