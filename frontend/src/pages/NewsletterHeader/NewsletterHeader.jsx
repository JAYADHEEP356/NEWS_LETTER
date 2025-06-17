import React from 'react';
import './NewsletterHeader.css';
import Card from '../../components/shared/Card/Card.jsx';

// --- IMAGE IMPORT ADDED ---
import headerImage from '../../assets/pexels-pixabay-265705.jpg';

const NewsletterHeader = () => {
  return (
    <div className="newsletter-header-container">
      <h1 className="newsletter-main-title">NEWSLETTER</h1>

      <div className="button-container">
        <button className="cta-button">Domestic</button>
        <button className="cta-button">International</button>
      </div>
      
      <div className="f-image-container">
        <Card 
          imageUrl={headerImage}
          // Also adding a link for this card to g  o to a featured article
          articleUrl="/article/weekly-feature"
          description="Our featured story of the week. Dive into the latest trends."
          publishDate="Nov 15, 2023"
        />
      </div>
    </div>
  );
};

export default NewsletterHeader;