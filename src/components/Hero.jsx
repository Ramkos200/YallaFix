import React, { useState, useEffect } from 'react';
import './Hero.css';
import { getCurrentLanguage, getTranslations } from '../utils/languageUtils';
import heroImage from '../assets/pq92qx0o.png';


function Hero() {
 const [t, setT] = useState({});

 useEffect(() => {
  const lang = getCurrentLanguage();
  setT(getTranslations(lang));
 }, []);

 return (
  <section className="hero">
   <div className="hero-bg-blob-1"></div>
   <div className="hero-bg-blob-2"></div>

   <div className="container hero-grid">
    <div className="hero-content">
     <div className="hero-content-inner">
      <span className="hero-badge">{t.downloadNow}</span>
      <h1 className="hero-title">{t.heroTitle}</h1>
      <p className="hero-description">{t.heroDescription}</p>
      <div className="hero-buttons">
       <a href="#app-preview" className="btn-primary-hero">{t.downloadNow}</a>
       <a href="#how-it-works" className="btn-secondary-hero">{t.learnMore}</a>
      </div>
     </div>
    </div>

    <div className="hero-image-wrapper">
     <div className="hero-image-container">
      <div className="hero-image-placeholder">
       <img
        alt="YallaFix technician repairing a smartphone"
        className="hero-image"
        width="480"
        height="640"
        loading="eager"
        fetchpriority="high"
        src={heroImage}
       />
      </div>
      <div className="hero-badge-bottom">
       <span className="hero-badge-dot"></span>
       <span className="hero-badge-text">{t.repairInUnder}</span>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Hero;