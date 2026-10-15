// src/utils/languageUtils.js

// Available languages
export const LANGUAGES = {
 en: {
  code: 'en',
  name: 'English',
  label: 'English',
  dir: 'ltr',
  toggleLabel: 'العربية'
 },
 ar: {
  code: 'ar',
  name: 'Arabic',
  label: 'العربية',
  dir: 'rtl',
  toggleLabel: 'English'
 }
};

// Get current language from URL or localStorage
export const getCurrentLanguage = () => {
 // Check URL path for language
 const path = window.location.pathname;
 if (path.startsWith('/ar')) return 'ar';
 if (path.startsWith('/en')) return 'en';

 // Check localStorage
 const savedLang = localStorage.getItem('language');
 if (savedLang && LANGUAGES[savedLang]) return savedLang;

 // Default to English
 return 'en';
};

// Check if current language is RTL
export const isRTL = () => {
 const lang = getCurrentLanguage();
 return lang === 'ar';
};

// Get direction for current language
export const getDirection = () => {
 return isRTL() ? 'rtl' : 'ltr';
};

// Get current language data
export const getCurrentLanguageData = () => {
 const lang = getCurrentLanguage();
 return LANGUAGES[lang] || LANGUAGES.en;
};

// Toggle between English and Arabic
export const toggleLanguage = () => {
 const currentLang = getCurrentLanguage();
 const newLang = currentLang === 'en' ? 'ar' : 'en';

 // Save to localStorage
 localStorage.setItem('language', newLang);

 // Update HTML dir and lang attributes
 document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
 document.documentElement.lang = newLang;

 // Update body class for RTL
 if (newLang === 'ar') {
  document.body.classList.add('rtl');
 } else {
  document.body.classList.remove('rtl');
 }

 // Navigate to the same page with new language
 const currentPath = window.location.pathname;
 const newPath = currentPath.replace(/^\/(en|ar)/, `/${newLang}`);
 window.location.href = newPath || `/${newLang}`;
};

// Get translations based on language
export const getTranslations = (lang) => {
 const translations = {
  en: {
   // Header
   howItWorks: 'How It Works',
   whyYallaFix: 'Why YallaFix',
   contact: 'Contact',
   getEarlyAccess: 'Download Now',

   // Hero
   comingSoon: 'Coming Soon — Get Early Access',
   heroTitle: 'Your Phone, Fixed. At Your Doorstep.',
   heroDescription: 'Get your cracked screen, dead battery, or faulty charging port repaired in under 60 minutes by a trusted expert. No shop visits. No hassle.',
   downloadNow: 'Download YallaFix NOW',
   learnMore: 'Learn More →',
   repairInUnder: 'Repair in under 60 min',

   // How It Works
   fixItIn: 'Fix It in 3, 2, 1.',
   step1Title: 'Describe Your Issue',
   step1Desc: 'Tell us your device model and what\'s wrong with it.',
   step2Title: 'We Come to You',
   step2Desc: 'A skilled YallaFix technician arrives at your chosen location, fully equipped.',
   step3Title: 'Get It Fixed & Relax',
   step3Desc: 'Your device is repaired on the spot, often in under an hour. You get back to your day.',

   // Why YallaFix
   whyChoose: 'Why Choose YallaFix?',
   feature1Title: 'Super Fast & Convenient',
   feature1Desc: 'Average repair time of 45 minutes. We come to you, so you don\'t waste time in traffic or waiting in line.',
   feature2Title: 'Trusted & Certified Experts',
   feature2Desc: 'All our technicians are vetted, certified, and background-checked for your peace of mind.',
   feature3Title: 'Quality Guarantee',
   feature3Desc: 'We use only high-quality parts and offer a 100% satisfaction guarantee on all repairs.',
   trustedBy: 'Trusted by early users',
   partnerLogo: 'Partner Logo',

   // App Preview
   getReady: 'Get Ready to Fix It.',
   joinCommunity: 'Join the YallaFix community and be the first to know when we launch.',
   featureTracking: 'Real-time technician tracking',
   featurePricing: 'Transparent pricing and estimates',
   featurePayment: 'Secure, cashless payment',
   featureWarranty: '90-day warranty on all repairs',
   emailPlaceholder: 'Enter your email address',
   contactUs: 'Contact-US',
   scanToDownload: 'Scan to download the app',

   // Footer
   legal: 'Legal',
   terms: 'Terms of Service',
   privacy: 'Privacy Policy',
   contactUsFooter: 'Contact Us',
   followUs: 'Follow Us',
   copyright: '© 2026 YallaFix. All rights reserved.'
  },
  ar: {
   // Header
   howItWorks: 'كيف يعمل',
   whyYallaFix: 'لماذا يلافيكس',
   contact: 'اتصل بنا',
   getEarlyAccess: 'حمّل الآن',
   scanToDownload: 'امسح الكود لتحميل التطبيق',
   // Hero
   comingSoon: 'قريباً — احصل على الوصول المبكر',
   heroTitle: 'صلح موبايلك و إنت بمكانك',
   heroDescription: 'احصل على إصلاح الشاشة المكسورة أو البطارية التالفة أو منفذ الشحن المعطل في أقل من 60 دقيقة بواسطة خبير موثوق. لا حاجة لزيارة المتاجر. لا متاعب.',
   downloadNow: 'حمّل يلافيكس الآن',
   learnMore: ' →',
   repairInUnder: 'الإصلاح في أقل من 60 دقيقة',

   // How It Works
   fixItIn: 'موبايلك بيتصلح في 3,2,1',
   step1Title: 'صف مشكلتك',
   step1Desc: 'أخبرنا بنوع جهازك وما هي المشكلة فيه.',
   step2Title: 'نأتي إليك',
   step2Desc: 'يصل فني يلافيكس إلى موقعك المختار، مجهز بالكامل.',
   step3Title: 'احصل على الإصلاح واسترخِ',
   step3Desc: 'يتم إصلاح جهازك في مكانك، غالباً في أقل من ساعة. عد إلى يومك.',

   // Why YallaFix
   whyChoose: 'لماذا تختار يلافيكس؟',
   feature1Title: 'سريع جداً ومريح',
   feature1Desc: 'متوسط وقت الإصلاح 45 دقيقة. نأتي إليك، لذا لا تضيع وقتك في الزحام أو الانتظار في الطابور.',
   feature2Title: 'خبراء موثوقون ومعتمدون',
   feature2Desc: 'جميع فنيينا مدققون ومعتمدون وتم فحص خلفياتهم لراحة بالك.',
   feature3Title: 'ضمان الجودة',
   feature3Desc: 'نستخدم فقط قطع الغيار عالية الجودة ونقدم ضمان رضا ١٠٠٪ على جميع الإصلاحات.',
   trustedBy: 'موثوق من قبل المستخدمين الأوائل',
   partnerLogo: 'شعار الشريك',

   // App Preview
   getReady: 'استعد لإصلاحه.',
   joinCommunity: 'انضم إلى مجتمع يلافيكس وكن أول من يعلم عند إطلاقنا.',
   featureTracking: 'تتبع الفني في الوقت الفعلي',
   featurePricing: 'أسعار شفافة وتقديرات واضحة',
   featurePayment: 'دفع آمن بدون نقد',
   featureWarranty: 'ضمان ٩٠ يوماً على جميع الإصلاحات',
   emailPlaceholder: 'أدخل بريدك الإلكتروني',
   contactUs: 'اتصل بنا',

   // Footer
   legal: 'قانوني',
   terms: 'شروط الخدمة',
   privacy: 'سياسة الخصوصية',
   contactUsFooter: 'اتصل بنا',
   followUs: 'تابعنا',
   copyright: '© ٢٠٢٦ يلافيكس. جميع الحقوق محفوظة.'
  }
 };

 return translations[lang] || translations.en;
};