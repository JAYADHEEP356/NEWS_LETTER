import React from 'react';
// Make sure you import the Link component from react-router-dom
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ imageUrl, text, description, publishDate, articleUrl }) => {
  return (
    // This <Link> component is the key. It makes the whole card clickable.
    // The 'to' prop receives the 'articleUrl' from SustainableFashion.jsx
    <Link to={articleUrl || "/"} className="card-link-wrapper">
      
      <div className="card-image-container">
        <img src={imageUrl} alt={text || description} />
        
        {text && (
          <div className="card-text-overlay">
            <p className="card-title">{text}</p>
          </div>
        )}

        <div className="card-hover-overlay">
          <span className="publish-date">{publishDate}</span>
        </div>
      </div>

      {description && (
        <div className="card-description">
          <p>{description}</p>
        </div>
      )}

    </Link>
  );
};

export default Card;