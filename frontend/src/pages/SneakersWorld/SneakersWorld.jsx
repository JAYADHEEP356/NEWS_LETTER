import React from 'react';
import './SneakersWorld.css';
import Card from '../../components/shared/Card/Card.jsx';

const SneakersWorld = ({ posts }) => {
  // Safety check: ensure we have exactly 5 posts to build the layout
  if (!posts || posts.length < 5) {
    return null;
  }

  // Assign the fetched data to the specific card slots
  // This assumes the first post in the data is for the large card
  const largeCardData = posts[0];
  const smallCard1Data = posts[1];
  const smallCard2Data = posts[2];
  const smallCard3Data = posts[3];
  const smallCard4Data = posts[4];

  return (
    <section className="sw-section">
      <div className="sw-title-container">
        <h2 className="sw-title-line1">SNEAKERS</h2>
        <h2 className="sw-title-line2">WORLD</h2>
      </div>

      {/* This "flat" JSX structure matches your CSS Grid Area layout */}
      <div className="sw-grid-container">
        <div className="sw-card-wrapper sw-large-card">
          <Card {...largeCardData} articleUrl={`/article/${largeCardData.slug}`} />
        </div>

        <div className="sw-card-wrapper sw-small-card-1">
          <Card {...smallCard1Data} articleUrl={`/article/${smallCard1Data.slug}`} />
        </div>

        <div className="sw-card-wrapper sw-small-card-2">
          <Card {...smallCard2Data} articleUrl={`/article/${smallCard2Data.slug}`} />
        </div>

        <div className="sw-card-wrapper sw-small-card-3">
          <Card {...smallCard3Data} articleUrl={`/article/${smallCard3Data.slug}`} />
        </div>

        <div className="sw-card-wrapper sw-small-card-4">
          <Card {...smallCard4Data} articleUrl={`/article/${smallCard4Data.slug}`} />
          
        </div>
      </div>
    </section>
  );
};

export default SneakersWorld;