import React from 'react';
import './SneakersWorld.css';
import Card from '../../components/shared/Card/Card.jsx';

// --- IMAGE IMPORTS ADDED ---
import largeSneakerImg from '../../assets/sneaker1.jpg';
import greenSneakerImg from '../../assets/green sneaker.jpg';
import orangeSneakerImg from '../../assets/orange sneaker.jpg';

const SneakersWorld = () => {
  const smallSneakerItems = [
    { id: 1, imageUrl: greenSneakerImg, description: "Discover why this green variant is taking over the streets this fall.", publishDate: "Oct 26, 2023", articleUrl: "/article/green--sneaker-trend" },
    { id: 2, imageUrl: orangeSneakerImg, description: "The vibrant orange colorway that's perfect for a summer look.", publishDate: "Oct 25, 2023", articleUrl: "/article/orange-sneaker-style" },
    { id: 3, imageUrl: greenSneakerImg, description: "Another look at the versatile green sneaker.", publishDate: "Oct 25, 2023", articleUrl: "/article/puma-speed-cat-green" },
    { id: 4, imageUrl: orangeSneakerImg, description: "Styling the essential orange sneaker.", publishDate: "Oct 25, 2023", articleUrl: "/article/orange-sneaker-style-2" },
  ];

  return (
    <section className="sw-section">
      <div className="sw-title-container">
        <h2 className="sw-title-line1">SNEAKERS</h2>
        <h2 className="sw-title-line2">WORLD</h2>
      </div>
      <div className="sw-grid-container">
        <div className="sw-card-wrapper sw-large-card">
          <Card
            imageUrl={largeSneakerImg}
            description="The complete story behind the rise of the most iconic sneaker of the year."
            publishDate="Oct 28, 2023"
            articleUrl="/article/puma-speed-cat-story"
          />
        </div>
        <div className="sw-card-wrapper sw-small-card-1">
          <Card {...smallSneakerItems[0]} />
        </div>
        <div className="sw-card-wrapper sw-small-card-2">
          <Card {...smallSneakerItems[1]} />
        </div>
        <div className="sw-card-wrapper sw-small-card-3">
          <Card {...smallSneakerItems[2]} />
        </div>
        <div className="sw-card-wrapper sw-small-card-4">
          <Card {...smallSneakerItems[3]} />
        </div>
      </div>
    </section>
  );
};

export default SneakersWorld;