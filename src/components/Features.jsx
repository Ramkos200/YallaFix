import React from 'react';
import './Features.css';

function Features() {
 const features = [
  {
   icon: '⚡',
   title: 'Fast Service',
   description: 'Quick and reliable service to get your items fixed in no time.'
  },
  {
   icon: '🛠️',
   title: 'Expert Repairs',
   description: 'Professional technicians with years of experience in maintenance.'
  },
  {
   icon: '💯',
   title: 'Quality Guaranteed',
   description: '100% satisfaction guaranteed with every service we provide.'
  }
 ];

 return (
  <section className="features" id="features">
   <div className="container">
    <h2 className="features-title">Why Choose Yallafix</h2>
    <div className="features-grid">
     {features.map((feature, index) => (
      <div key={index} className="feature-card">
       <div className="feature-icon">{feature.icon}</div>
       <h3>{feature.title}</h3>
       <p>{feature.description}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}

export default Features;