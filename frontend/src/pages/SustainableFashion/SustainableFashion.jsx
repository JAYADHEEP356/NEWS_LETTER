// import React from 'react';
// import './SustainableFashion.css';
// // IMPORTANT: Ensure the import path is correct
// import Card from '../shared/Card/Card.jsx'; 

// const SustainableFashion = () => {
//   return (
//     <section className="sf-section">
//       <div className="sf-title-container">
//         <h2 className="sf-title-line1">SUSTAINABLE</h2>
//         <h2 className="sf-title-line2">FASHION</h2>
//       </div>

//       <div className="sf-grid-hero">
//         {/* --- CHANGED: Was an <img> tag, now a full Card component --- */}
//         <Card
//           imageUrl="/src/assets/pisces-portrait-beautiful-woman 1.png"
//           width="630px"
//           height="428px"
//           // --- NEW PROPS ADDED ---
//           description="A deep dive into the materials that are changing the fashion industry for the better."
//           publishDate="Nov 08, 2023"
//           articleUrl="/article/eco-friendly-fabrics"
//         />
        
//         {/* --- UPDATED: Added new props to the existing card --- */}
//         <Card
//           imageUrl="/src/assets/fashion-portrait-elegant-woman 1.png"
//           width="630px" 
//           height="428px"
//           // --- NEW PROPS ADDED ---
//           description="Learn why minimalist, ethically-sourced jewelry is making a major comeback."
//           publishDate="Nov 07, 2023"
//           articleUrl="/article/ethical-necklace-trend"
//         />
//       </div>

//       <div className="sf-grid-small">
//         {/* --- UPDATED ALL 4 SMALL CARDS: Added new props to each --- */}
//         <Card 
//           imageUrl="/src/assets/maroon.png" 
//           width="300px" 
//           height="300px"
//           description="The art of creating vibrant colors without harming the environment."
//           publishDate="Nov 06, 2023"
//           articleUrl="/article/natural-dyes"
//         />
//         <Card 
//           imageUrl="/src/assets/c.png" 
//           width="300px" 
//           height="300px"
//           description="How to build a sustainable wardrobe with pieces that never go out of style."
//           publishDate="Nov 05, 2023"
//           articleUrl="/article/timeless-style"
//         />
//         <Card 
//           imageUrl="/src/assets/red.png" 
//           width="300px" 
//           height="300px"
//           description="Exploring the impact of bold, sustainable statement pieces in your collection."
//           publishDate="Nov 04, 2023"
//           articleUrl="/article/sustainable-red"
//         />
//         <Card 
//           imageUrl="/src/assets/c.png" 
//           width="300px" 
//           height="300px"
//           description="Why a single-color palette is the most versatile and sustainable choice."
//           publishDate="Nov 03, 2023"
//           articleUrl="/article/monochrome-wardrobe"
//         />
//       </div>
//     </section>
//   );
// };

// // export no-fallthrough: 0
// export default SustainableFashion;


import React from 'react';
import './SustainableFashion.css';
import Card from '../../components/shared/Card/Card.jsx';
const SustainableFashion = () => {
  return (
    <section className="sf-section">
      <div className="sf-title-container">
        <h2 className="sf-title-line1">SUSTAINABLE</h2>
        <h2 className="sf-title-line2">FASHION</h2>
      </div>

      <div className="sf-grid-hero">
        {/* --- CRITICAL CHANGE: 'width' and 'height' props REMOVED --- */}
        <div className="card-wrapper">
          <Card
            imageUrl="/src/assets/pisces-portrait-beautiful-woman 1.png"
            description="A deep dive into the materials that are changing the fashion industry for the better."
            publishDate="Nov 08, 2023"
            articleUrl="/article/eco-friendly-fabrics"
          />
        </div>
        
        <div className="card-wrapper">
          <Card
            imageUrl="/src/assets/fashion-portrait-elegant-woman 1.png"
            description="Learn why minimalist, ethically-sourced jewelry is making a major comeback."
            publishDate="Nov 07, 2023"
            articleUrl="/article/ethical-necklace-trend"
          />
        </div>
      </div>

      <div className="sf-grid-small">
        {/* --- CRITICAL CHANGE: 'width' and 'height' props REMOVED from all cards --- */}
        <div className="card-wrapper">
          <Card 
            imageUrl="/src/assets/maroon.png" 
            description="The art of creating vibrant colors without harming the environment."
            publishDate="Nov 06, 2023"
            articleUrl="/article/natural-dyes"
          />
        </div>
        <div className="card-wrapper">
          <Card 
            imageUrl="/src/assets/c.png" 
            description="How to build a sustainable wardrobe with pieces that never go out of style."
            publishDate="Nov 05, 2023"
            articleUrl="/article/timeless-style"
          />
        </div>
        <div className="card-wrapper">
          <Card 
            imageUrl="/src/assets/red.png" 
            description="Exploring the impact of bold, sustainable statement pieces in your collection."
            publishDate="Nov 04, 2023"
            articleUrl="/article/sustainable-red"
          />
        </div>
        <div className="card-wrapper">
          <Card 
            imageUrl="/src/assets/c.png" 
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