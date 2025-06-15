import React from 'react';
import './RelatedArticles.css';
// Import the shared Card component from its correct location
import Card from '../../../components/shared/Card/Card.jsx';

const RelatedArticles = ({ articles }) => {
  return (
    <section className="related-articles-section">
      <h2 className="related-title">Related Newsletters</h2>
      <div className="related-grid">
        {articles.map((article, index) => (
          <Card
            key={index}
            imageUrl={article.imageUrl}
            text={article.title}
            // For now, these links can point back to the homepage
            articleUrl="/"
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;