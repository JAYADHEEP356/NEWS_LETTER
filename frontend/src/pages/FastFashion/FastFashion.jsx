import React from 'react';
import './FastFashion.css';
import Card from '../../components/shared/Card/Card.jsx';

// --- IMAGE IMPORTS ADDED ---
import imgMaroon from '../../assets/maroon.png';
import imgMan from '../../assets/shop-section-man.jpg';
import imgRed from '../../assets/red.png';
import imgGirl from '../../assets/attractive-girl-with-flying-hair-posing-studio-1.png';

const FastFashion = () => {
  const fastFashionItems = [
    { id: 1, imageUrl: imgMaroon, description: "Deep maroon tones for the autumn season.", publishDate: "Nov 12, 2023", articleUrl: "/article/fast-fashion-1" },
    { id: 2, imageUrl: imgMan, description: "Essential streetwear looks for the modern man.", publishDate: "Nov 12, 2023", articleUrl: "/article/fast-fashion-2" },
    { id: 3, imageUrl: imgRed, description: "Stand out with a pop of vibrant, eye-catching red.", publishDate: "Nov 11, 2023", articleUrl: "/article/fast-fashion-3" },
    { id: 4, imageUrl: imgGirl, description: "Effortless and chic styles for any occasion.", publishDate: "Nov 11, 2023", articleUrl: "/article/fast-fashion-4" },
    { id: 5, imageUrl: imgMaroon, description: "Another take on the versatile maroon palette.", publishDate: "Nov 10, 2023", articleUrl: "/article/fast-fashion-5" },
    { id: 6, imageUrl: imgMan, description: "Layering essentials for a dynamic, urban outfit.", publishDate: "Nov 10, 2023", articleUrl: "/article/fast-fashion-6" },
    { id: 7, imageUrl: imgRed, description: "The timeless appeal of a powerful red accessory.", publishDate: "Nov 09, 2023", articleUrl: "/article/fast-fashion-7" },
    { id: 8, imageUrl: imgGirl, description: "Flowing silhouettes that combine comfort and style.", publishDate: "Nov 09, 2023", articleUrl: "/article/fast-fashion-8" },
  ];

  return (
    <section className="ff-section">
      <div className="ff-title-container">
        <h2 className="ff-title-line1">FAST</h2>
        <h2 className="ff-title-line2">FASHION</h2>
      </div>
      <div className="ff-grid">
        {fastFashionItems.map(item => (
          <div className="card-wrapper" key={item.id}>
            <Card 
              imageUrl={item.imageUrl} 
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