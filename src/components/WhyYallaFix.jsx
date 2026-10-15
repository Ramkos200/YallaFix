import React, { useEffect, useRef, useState } from 'react';
import './WhyYallaFix.css';
import { getCurrentLanguage, getTranslations } from '../utils/languageUtils';
// ✅ Import all partner logos
import partnerLogo1 from '../assets/STC2.png';
import partnerLogo2 from '../assets/white-logo.png';
import partnerLogo3 from '../assets/STC2.png';
import partnerLogo4 from '../assets/white-logo.png';

function WhyYallaFix() {
 const cardsRef = useRef([]);
 const [t, setT] = useState({});

 // ✅ Define array of partner logos with names
 const partnerLogos = [
  { id: 1, name: 'Partner 1', image: partnerLogo1 },
  { id: 2, name: 'Partner 2', image: partnerLogo2 },
  { id: 3, name: 'Partner 3', image: partnerLogo3 },
  { id: 4, name: 'Partner 4', image: partnerLogo4 }
 ];

 useEffect(() => {
  const lang = getCurrentLanguage();
  setT(getTranslations(lang));
 }, []);

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
     }
    });
   },
   { threshold: 0.1 }
  );

  cardsRef.current.forEach((card) => {
   if (card) observer.observe(card);
  });

  return () => observer.disconnect();
 }, []);

 const features = [
  {
   icon: '⏱️',
   title: t.feature1Title,
   description: t.feature1Desc
  },
  {
   icon: '🛡️',
   title: t.feature2Title,
   description: t.feature2Desc
  },
  {
   icon: '✅',
   title: t.feature3Title,
   description: t.feature3Desc
  }
 ];

 return (
  <section id="why-yallafix" className="why-yallafix">
   <div className="container">
    <div className="why-yallafix-header">
     <h2 className="why-yallafix-title">{t.whyChoose}</h2>
    </div>

    <div className="why-yallafix-grid">
     {features.map((feature, index) => (
      <div
       key={index}
       className="feature-card"
       ref={(el) => (cardsRef.current[index] = el)}
      >
       <div className="feature-icon-wrapper">
        <span className="feature-icon">{feature.icon}</span>
       </div>
       <div>
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-description">{feature.description}</p>
       </div>
      </div>
     ))}
    </div>

    <div className="trusted-section">
     <p className="trusted-label">{t.trustedBy}</p>
     <div className="partner-logos">
      {partnerLogos.map((partner) => (
       <div key={partner.id} className="partner-logo">
        <img
         alt={partner.name}
         className="partner-logo-image"
         loading="eager"
         fetchpriority="high"
         src={partner.image}
        />
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

export default WhyYallaFix;