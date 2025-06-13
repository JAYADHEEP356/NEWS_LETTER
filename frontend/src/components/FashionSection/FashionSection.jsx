// import React from 'react';
// import './FashionSection.css';
// import Card from '../shared/Card/Card';
// const FashionSection = () => {
//   return (
//     <section className="f-section">
//       <div className="f-title-container">
//         {/* The first word is invisible/empty in the design */}
//         <h2 className="f-title-line2">FASHION</h2>
//       </div>
//       <div className="f-image-container">
//         {/* Dimensions: 1436x958 */}
//         <Card imageUrl="/src/assets/pretty lady.jpg" text="This Necklace Trend" width="100%" height="958px" />
//       </div>
//     </section>
//   );
// };
// export default FashionSection;


import React from 'react';
import './FashionSection.css';
import Card from '../shared/Card/Card.jsx'; // Make sure path is correct

const FashionSection = () => {
  return (
    <section className="f-section">
      {/* The container now holds BOTH the title and the card */}
      <div className="f-image-container">
        
        {/* The title is now INSIDE the container, so we can position it */}
        <h2 className="f-title-overlay">FASHION</h2>

        {/* The Card component for the image */}
        <Card 
          imageUrl="/src/assets/pretty lady.jpg" 
          width="100%" 
          // height="958px" 
        />
      </div>
    </section>
  );
};

export default FashionSection;