import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './MainLayout.css';

const MainLayout = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const location = useLocation();
  const isNewsletter = location.pathname === '/';

  const handleFlip = () => {
    setIsFlipping(true);
    setShowBack(true); // Show back content immediately
  };

  const handleFlipReset = () => {
    setIsFlipping(false);
    setShowBack(false); // Hide back after animation
  };

  return (
    <div className={`page-flip-container${isNewsletter ? '' : ' no-flip'}`}>
      {isNewsletter ? (
        <div className={`flip-card${isFlipping ? ' flipping' : ''}`}>
          <div className="flip-card-inner">
            {/* Front - always shows current content */}
            <div className="flip-card-front">
              <Outlet context={{ 
                isFlipping, 
                handleFlip, 
                handleFlipReset, 
                showBack: false // Front always shows old content
              }} />
              <Footer />
            </div>
            
            {/* Back - always shows next content */}
            <div className="flip-card-back">
              <Outlet context={{ 
                isFlipping, 
                handleFlip, 
                handleFlipReset, 
                showBack: true // Back always shows new content
              }} />
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;