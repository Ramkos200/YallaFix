import React, { useState, useEffect } from 'react';
import './Footer.css';
import logo from '../assets/yallafix-logo.png';
import { getCurrentLanguage, getTranslations } from '../utils/languageUtils';

function Footer() {
 const [t, setT] = useState({});
 const [currentLang, setCurrentLang] = useState('en');

 useEffect(() => {
  const lang = getCurrentLanguage();
  setCurrentLang(lang);
  setT(getTranslations(lang));
 }, []);

 return (
  <footer id="contact" className="footer">
   <div className="container">
    <div className="footer-grid">
     <div className="footer-logo-section">
      <a href={`/${currentLang}`} className="logo-link">
       <img
        src={logo}
        alt="YallaFix"
        className="logo-image"
       />
      </a>
     </div>

     <div className="footer-links">
      <p className="footer-links-label">{t.legal}</p>
      <a href={`/${currentLang}/terms`} className="footer-link">{t.terms}</a>
      <a href={`/${currentLang}/privacy`} className="footer-link">{t.privacy}</a>
      <a href="mailto:hello@yallafixsy.com" className="footer-link">{t.contactUsFooter}</a>
     </div>

     <div className="footer-social">
      <p className="footer-social-label">{t.followUs}</p>
      <div className="footer-social-icons">
       <a href="#" aria-label="Instagram" className="footer-social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
         <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
       </a>
       <a href="#" aria-label="Facebook" className="footer-social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
       </a>
       <a href="#" aria-label="Twitter / X" className="footer-social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
       </a>
      </div>
     </div>
    </div>
   </div>
   <div className="container-bottom">
    <div className="footer-bottom">
     <p className="footer-copyright">{t.copyright}</p>
    </div>
   </div>
  </footer>
 );
}

export default Footer;