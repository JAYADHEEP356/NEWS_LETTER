import React from 'react';
import './LuxuryFashion.css';
import Card from '../../components/shared/Card/Card.jsx';

// The component is now "dumb" and receives 'posts' as a prop
const LuxuryFashion = ({ posts }) => { 
  
  // Safety check: Don't render if we don't have enough posts for the layout
  if (!posts || posts.length < 5) {
    return null; 
  }

  // Manually assign each post from the array to its specific slot
  // This assumes the API data for this category is in the correct order
  const card1Data = posts[0];
  const card2Data = posts[1];
  const card3Data = posts[2];
  const largeCardData = posts[3];
  const tallCardData = posts[4];

  return (
    <section className="lf-section">
      <div className="lf-title-container">
        <h2 className="lf-title-line1">LUXURY</h2>
        <h2 className="lf-title-line2">FASHION</h2>
      </div>

      <div className="lf-grid-container">
        
        {/* Slot 1 */}
        <div className="lf-card-wrapper lf-card-1">
          <Card 
            imageUrl={card1Data.imageUrl}
            description={card1Data.description}
            publishDate={card1Data.publishDate}
            articleUrl={`/article/${card1Data.slug}`}
            location={card1Data.location}
          />
        </div>

        {/* Slot 2 */}
        <div className="lf-card-wrapper lf-card-2">
          <Card 
            imageUrl={card2Data.imageUrl}
            description={card2Data.description}
            publishDate={card2Data.publishDate}
            articleUrl={`/article/${card2Data.slug}`}
            location={card2Data.location}
          />
        </div>

        {/* Slot 3 */}
        <div className="lf-card-wrapper lf-card-3">
          <Card 
            imageUrl={card3Data.imageUrl}
            description={card3Data.description}
            publishDate={card3Data.publishDate}
            articleUrl={`/article/${card3Data.slug}`}
            location={card3Data.location}
          />
        </div>

        {/* Slot 4 (Large) */}
        <div className="lf-card-wrapper lf-card-large">
          <Card 
            imageUrl={largeCardData.imageUrl}
            description={largeCardData.description}
            publishDate={largeCardData.publishDate}
            articleUrl={`/article/${largeCardData.slug}`}
            location={largeCardData.location}
          />
        </div>
        
        {/* Slot 5 (Tall) */}
        <div className="lf-card-wrapper lf-card-tall">
          <Card 
            imageUrl={tallCardData.imageUrl}
            description={tallCardData.description}
            publishDate={tallCardData.publishDate}
            articleUrl={`/article/${tallCardData.slug}`}
            location={tallCardData.location}
          />
        </div>

      </div>
    </section>
  );
};

export default LuxuryFashion;