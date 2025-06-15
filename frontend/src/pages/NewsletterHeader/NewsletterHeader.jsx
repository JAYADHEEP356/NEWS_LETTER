import React from 'react';
import './NewsletterHeader.css';
import Card from '../../components/shared/Card/Card.jsx';
const NewsletterHeader = () => {
  return (
    
    <div className="newsletter-header-container">
      
      <h1 className="main-title">NEWSLETTER</h1>
      <div className="button-container">
        <button className="cta-button">Domestic</button>
        <button className="cta-button">International</button>
      </div>
      

      <div className="f-image-container">
        {/* Dimensions: 1436x958 */}
        <Card imageUrl="/src/assets/pexels-pixabay-265705.jpg"   />
      </div>

    </div>
  );
};

export default NewsletterHeader;


// width="1280px" height="683.063px"