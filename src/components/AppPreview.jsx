import React, { useEffect, useRef, useState } from 'react';
import './AppPreview.css';
import { getCurrentLanguage, getTranslations } from '../utils/languageUtils';
import AppreviewImage from '../assets/idgw50xr.png';
import QrGooglePlay from '../assets/qr-google-play.png';
import QrAppStore from '../assets/qr-app-store.png';

function AppPreview() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [t, setT] = useState({});
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const currentLang = getCurrentLanguage();
    setLang(currentLang);
    setT(getTranslations(currentLang));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.style.opacity = '1';
              imageRef.current.style.transform = 'translateX(0)';
            }
            if (contentRef.current) {
              contentRef.current.style.opacity = '1';
              contentRef.current.style.transform = 'translateX(0)';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    t.featureTracking,
    t.featurePricing,
    t.featurePayment,
    t.featureWarranty
  ];

  const isRTL = lang === 'ar'; 

  return (
    <section id="app-preview" className="app-preview">
      <div className="container">
        <div className="app-preview-grid">
          <div className="app-preview-image-wrapper" ref={imageRef}>
            <div className="app-preview-placeholder">
              <img
                alt="YallaFix mobile app interface"
                className="AppreviewImage"
                width="480"
                height="640"
                loading="eager"
                fetchpriority="high"
                src={AppreviewImage}
              />
            </div>
          </div>

          <div className="app-preview-content" ref={contentRef}>
            <h2 className="app-preview-title">{t.getReady}</h2>
            <p className="app-preview-description">{t.joinCommunity}</p>

            <ul className="app-preview-features">
              {features.map((feature, index) => (
                <li key={index} className="app-preview-feature">
                  <span className="app-preview-check">✓</span>
                  <span className="app-preview-feature-text">{feature}</span>
                </li>
              ))}
            </ul>
            <form className="app-preview-form">
              <input
                required
                placeholder={t.emailPlaceholder}
                className="app-preview-input"
                type="email"
              />
              <button type="submit" className="app-preview-btn">
                {t.contactUs}
              </button>
            </form>
            {/* ---------- QR CODES SECTION ---------- */}
            <div
              className={`app-preview-qr-section ${isRTL ? 'qr-rtl' : 'qr-ltr'
                }`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <p className="app-preview-qr-text">
                {t.scanToDownload || 'Scan to download the app'}
              </p>
              <div className="app-preview-qr-codes">
                <a
                  href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-preview-qr-item"
                >
                  <img
                    src={QrGooglePlay}
                    alt="Download YallaFix on Google Play"
                    className="app-preview-qr-image"
                  />
                  <span className="app-preview-qr-label">Google Play</span>
                </a>

                <a
                  href="https://apps.apple.com/app/idYOUR_APP_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-preview-qr-item"
                >
                  <img
                    src={QrAppStore}
                    alt="Download YallaFix on the App Store"
                    className="app-preview-qr-image"
                  />
                  <span className="app-preview-qr-label">App Store</span>
                </a>
              </div>
            </div>
            {/* ---------- END QR CODES SECTION ---------- */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPreview;