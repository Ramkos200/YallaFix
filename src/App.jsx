import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyYallaFix from './components/WhyYallaFix';
import AppPreview from './components/AppPreview';
import Footer from './components/Footer';
import { getCurrentLanguage, isRTL } from './utils/languageUtils';

function App() {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  // Set HTML direction based on language
  const lang = getCurrentLanguage();
  const rtl = isRTL();
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  if (rtl) {
   document.body.classList.add('rtl');
  } else {
   document.body.classList.remove('rtl');
  }

  const timer = setTimeout(() => {
   setLoading(false);
  }, 1000);
  return () => clearTimeout(timer);
 }, []);

 if (loading) {
  return (
   <div id="airo-boot-spinner" role="status" aria-live="polite">
    <div className="airo-boot-ring" aria-hidden="true"></div>
    <p className="airo-boot-text">Loading…</p>
    <p className="airo-boot-slow-text">Still working — the first load can take a little longer.</p>
   </div>
  );
 }

 return (
  <div className="min-h-screen flex flex-col fs-unmask-airo-app-builder">
   <Header />
   <main>
    <Hero />
    <HowItWorks />
    <WhyYallaFix />
    <AppPreview />
   </main>
   <Footer />
  </div>
 );
}

export default App;