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
import MainLayout from './components/MainLayout/MainLayout';


function App() {
  return (
    <>
      <Background />
      
      <div className="app-content">
        
        <main>
          <Routes>
            <Route element={<MainLayout />}>
            <Route path="/" element={<NewsletterPage />} />
          </Route>
            {/* <Route path="/" element={<NewsletterPage />} /> */}
            <Route path="/article/:slug" element={<ArticlePage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;