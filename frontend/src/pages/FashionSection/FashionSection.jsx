import React from 'react';
import './FashionSection.css';
import Card from '../../components/shared/Card/Card.jsx';

// --- IMAGE IMPORT ADDED ---
import prettyLadyImg from '../../assets/pretty lady.jpg';

const FashionSection = () => {
  return (
    <section className="f-section">
      <div className="f-image-container">
        <h2 className="f-title-overlay">FASHION</h2>
        <Card 
          imageUrl={prettyLadyImg}
          width="100%" 
        />
      </div>
    </section>
  );
};

export default FashionSection;