// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Import your page components
import NewsletterPage from './pages/NewsletterPage/NewsletterPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';

// Import your shared layout components
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Background />
      
      <div className="app-content">
        
        {/* The Routes component now directly renders the pages */}
        <Routes>
          <Route path="/" element={<NewsletterPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        
        <Footer />
      </div>
    </>
  );
}

export default App;