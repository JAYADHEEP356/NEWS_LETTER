import React from 'react';
import './Card.css';

// The component now accepts more props: description, publishDate, and articleUrl
const Card = ({ imageUrl, text, description, publishDate, articleUrl, width, height }) => {
  return (
    // The entire component is now a link
    <a href={articleUrl} className="card-link-wrapper">
      <div className="reusable-card" style={{ width, height }}>
        <img src={imageUrl} alt={text} />
        
        {/* This text overlay is from the original design */}
        <div className="card-text-overlay">
          <p className="card-title">{text}</p>
        </div>

        {/* --- NEW: The hover overlay for the blur and date --- */}
        <div className="card-hover-overlay">
          <span className="publish-date">{publishDate}</span>
        </div>
      </div>

      {/* --- NEW: The description text below the card --- */}
      <div className="card-description">
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
