import React from 'react';
import './SustainableFashion.css';
import Card from '../../components/shared/Card/Card.jsx';

// --- STEP 1: IMPORT ALL THE IMAGES YOU NEED ---
import heroImage1 from '../../assets/pisces-portrait-beautiful-woman 1.png';
import heroImage2 from '../../assets/fashion-portrait-elegant-woman 1.png';
import smallImage1 from '../../assets/maroon.png';
import smallImage2 from '../../assets/c.png';
import smallImage3 from '../../assets/red.png';
// Note: We can reuse the import for the last image since it's the same as smallImage2

const SustainableFashion = () => {
  return (
    <section className="sf-section">
      <div className="sf-title-container">
        <h2 className="sf-title-line1">SUSTAINABLE</h2>
        <h2 className="sf-title-line2">FASHION</h2>
      </div>

      <div className="sf-grid-hero">
        <div className="card-wrapper">
          <Card
            // --- STEP 2: USE THE IMPORTED VARIABLE ---
            imageUrl={heroImage1}
            description="A deep dive into the materials that are changing the fashion industry for the better."
            publishDate="Nov 08, 2023"
            articleUrl="/article/eco-friendly-fabrics"
          />
        </div>
        
        <div className="card-wrapper">
          <Card
            // --- STEP 2: USE THE IMPORTED VARIABLE ---
            imageUrl={heroImage2}
            description="Learn why minimalist, ethically-sourced jewelry is making a major comeback."
            publishDate="Nov 07, 2023"
            articleUrl="/article/ethical-necklace-trend"
          />
        </div>
      </div>

      <div className="sf-grid-small">
        <div className="card-wrapper">
          <Card 
            // --- STEP 2: USE THE IMPORTED VARIABLE ---
            imageUrl={smallImage1} 
            description="The art of creating vibrant colors without harming the environment."
            publishDate="Nov 06, 2023"
            articleUrl="/article/natural-dyes"
          />
        </div>
        <div className="card-wrapper">
          <Card 
            // --- STEP 2: USE THE IMPORTED VARIABLE ---
            imageUrl={smallImage2} 
            description="How to build a sustainable wardrobe with pieces that never go out of style."
            publishDate="Nov 05, 2023"
            articleUrl="/article/timeless-style"
          />
        </div>
        <div className="card-wrapper">
          <Card 
            // --- STEP 2: USE THE IMPORTED VARIABLE ---
            imageUrl={smallImage3} 
            description="Exploring the impact of bold, sustainable statement pieces in your collection."
            publishDate="Nov 04, 2023"
            articleUrl="/article/sustainable-red"
          />
        </div>
        <div className="card-wrapper">
          <Card 
            // --- STEP 2: USE THE IMPORTED VARIABLE ---
            imageUrl={smallImage2} // Reusing the import for 'c.png'
            description="Why a single-color palette is the most versatile and sustainable choice."
            publishDate="Nov 03, 2023"
            articleUrl="/article/monochrome-wardrobe"
          />
        </div>
      </div>
    </section>
  );
};

export default SustainableFashion;