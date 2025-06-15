import React from 'react';
import './LuxuryFashion.css';
import Card from '../../components/shared/Card/Card.jsx';
const LuxuryFashion = () => {
  return (
    <section className="lf-section">
      <div className="lf-title-container">
        <h2 className="lf-title-line1">LUXURY</h2>
        <h2 className="lf-title-line2">FASHION</h2>
      </div>

      <div className="lf-grid-container">
        {/* Each card wrapper gets a unique class for grid-area targeting */}
        <div className="lf-card-wrapper lf-card-1">
          <Card 
            imageUrl="/src/assets/jay-soundo-L4_eie0ttuM-unsplash.jpg"
            description="Timeless elegance in modern architecture and style."
            publishDate="Nov 10, 2023"
            articleUrl="/article/luxury-style-1"
          />
        </div>
        <div className="lf-card-wrapper lf-card-2">
          <Card 
            imageUrl="/src/assets/luxury-outfit-style - Copy.png"
            description="How to pair classic luxury with bold, contemporary pieces."
            publishDate="Nov 09, 2023"
            articleUrl="/article/luxury-style-2"
          />
        </div>
        <div className="lf-card-wrapper lf-card-3">
          <Card 
            imageUrl="/src/assets/luxury-fashion.png"
            description="The essential luxury accessories that define a powerful look."
            publishDate="Nov 08, 2023"
            articleUrl="/article/luxury-style-3"
          />
        </div>
        <div className="lf-card-wrapper lf-card-large">
          <Card 
            imageUrl="/src/assets/photo-1595065666634-4725aa7e8379.jpeg"
            description="Capturing the effortless grace of luxury resort wear."
            publishDate="Nov 07, 2023"
            articleUrl="/article/luxury-style-4"
          />
        </div>
        <div className="lf-card-wrapper lf-card-tall">
          <Card 
            imageUrl="/src/assets/luthfi-ali-qodri-IfMv7JSdT3E-unsplash.jpg"
            description="Exploring the intersection of high fashion and street style."
            publishDate="Nov 06, 2023"
            articleUrl="/article/luxury-style-5"
          />
        </div>
      </div>
    </section>
  );
};

export default LuxuryFashion;