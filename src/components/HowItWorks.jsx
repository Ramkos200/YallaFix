import React, { useEffect, useRef, useState } from 'react';
import './HowItWorks.css';
import { getCurrentLanguage, getTranslations } from '../utils/languageUtils';

function HowItWorks() {
 const cardsRef = useRef([]);
 const [t, setT] = useState({});

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

 const steps = [
  {
   number: '1',
   title: t.step1Title,
   description: t.step1Desc
  },
  {
   number: '2',
   title: t.step2Title,
   description: t.step2Desc
  },
  {
   number: '3',
   title: t.step3Title,
   description: t.step3Desc
  }
 ];

 return (
  <section id="how-it-works" className="how-it-works">
   <div className="container">
    <div className="how-it-works-header">
     <h2 className="how-it-works-title">{t.fixItIn}</h2>
    </div>
    <div className="how-it-works-grid">
     {steps.map((step, index) => (
      <div
       key={index}
       className="step-card"
       ref={(el) => (cardsRef.current[index] = el)}
      >
       <span className="step-number">{step.number}</span>
       <h3 className="step-title">{step.title}</h3>
       <p className="step-description">{step.description}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}

export default HowItWorks;