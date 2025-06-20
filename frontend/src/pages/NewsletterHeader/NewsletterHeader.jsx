import React from 'react';
import './NewsletterHeader.css';
import headerImage from '../../assets/pexels-pixabay-265705.jpg'; // <-- IMPORTANT: Use your actual image path here

const NewsletterHeader = ({ activeFilter, onFilterChange }) => {
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