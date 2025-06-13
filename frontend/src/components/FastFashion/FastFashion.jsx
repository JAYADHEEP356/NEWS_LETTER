import React from 'react';
import './FastFashion.css';
import Card from '../shared/Card/Card.jsx'; 

const FastFashion = () => {
  // Data array is from your last version, it is correct.
  const fastFashionItems = [
    { id: 1, imageUrl: "/src/assets/maroon.png", description: "Deep maroon tones for the autumn season.", publishDate: "Nov 12, 2023", articleUrl: "/article/fast-fashion-1" },
    { id: 2, imageUrl: "/src/assets/shop-section-man.jpg", description: "Essential streetwear looks for the modern man.", publishDate: "Nov 12, 2023", articleUrl: "/article/fast-fashion-2"  },
    { id: 3, imageUrl: "/src/assets/red.png", description: "Stand out with a pop of vibrant, eye-catching red.", publishDate: "Nov 11, 2023", articleUrl: "/article/fast-fashion-3" },
    { id: 4, imageUrl: "/src/assets/attractive-girl-with-flying-hair-posing-studio-1.png", description: "Effortless and chic styles for any occasion.", publishDate: "Nov 11, 2023", articleUrl: "/article/fast-fashion-4" },
    { id: 5, imageUrl: "/src/assets/maroon.png", description: "Another take on the versatile maroon palette.", publishDate: "Nov 10, 2023", articleUrl: "/article/fast-fashion-5" },
    { id: 6, imageUrl: "/src/assets/shop-section-man.jpg", description: "Layering essentials for a dynamic, urban outfit.", publishDate: "Nov 10, 2023", articleUrl: "/article/fast-fashion-6" },
    { id: 7, imageUrl: "/src/assets/red.png", description: "The timeless appeal of a powerful red accessory.", publishDate: "Nov 09, 2023", articleUrl: "/article/fast-fashion-7" },
    { id: 8, imageUrl: "/src/assets/attractive-girl-with-flying-hair-posing-studio-1.png", description: "Flowing silhouettes that combine comfort and style.", publishDate: "Nov 09, 2023", articleUrl: "/article/fast-fashion-8" },
  ];

  return (
    <section className="ff-section">
      <div className="ff-title-container">
        <h2 className="ff-title-line1">FAST</h2>
        <h2 className="ff-title-line2">FASHION</h2>
      </div>

      <div className="ff-grid">
        {/* We map over the items and wrap each Card in a new div */}
        {fastFashionItems.map(item => (
          <div className="card-wrapper" key={item.id}>
            <Card 
              imageUrl={item.imageUrl} 
              height="267px"
              // NO fixed width or height props
              description={item.description}
              publishDate={item.publishDate}
              articleUrl={item.articleUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FastFashion;