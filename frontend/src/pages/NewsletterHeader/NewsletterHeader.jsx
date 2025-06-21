import React, { useState, useEffect } from 'react';
import './NewsletterHeader.css';
import defaultImage from '../../assets/pexels-pixabay-265705.jpg'; 
import domesticImage from '../../assets/luthfi-ali-qodri-IfMv7JSdT3E-unsplash.jpg';
// Use URL method for image with space in filename
const internationalImage = new URL('../../assets/pretty lady.jpg', import.meta.url).href;

const NewsletterHeader = ({ activeFilter, onFilterChange }) => {
  const [headerImage, setHeaderImage] = useState(defaultImage);

  useEffect(() => {
    switch (activeFilter) {
      case 'domestic':
        setHeaderImage(domesticImage);
        break;
      case 'international':
        setHeaderImage(internationalImage);
        break;
      default:
        setHeaderImage(defaultImage);
        break;
    }
  }, [activeFilter]);

  return (
    <section 
      className="hero-container" 
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content" style={{ justifyContent: 'flex-start', paddingTop: '3rem' }}>
        <h1 className="hero-title">
          {activeFilter === 'domestic' && (<><span>DOMESTIC</span><br /><span>NEWSLETTER</span></>)}
          {activeFilter === 'international' && (<><span>INTERNATIONAL</span><br /><span>NEWSLETTER</span></>)}
          {!activeFilter && 'NEWSLETTER'}
        </h1>
        <div className="hero-button-group">
          <button 
            className={`hero-button ${activeFilter === 'domestic' ? 'active' : ''}`}
            onClick={() => onFilterChange('domestic')}
          >
            Domestic
          </button>
          <button 
            className={`hero-button ${activeFilter === 'international' ? 'active' : ''}`}
            onClick={() => onFilterChange('international')}
          >
            International
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterHeader;