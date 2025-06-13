import React from 'react';
import './app.css'; // Import the global styles

// Your existing components
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar'; // Assuming you have a Navbar
import Footer from './components/Footer/Footer';   // Assuming you have a Footer

// The new page component we just built
import NewsletterPage from './components/NewsletterPage/NewsletterPage';

function App() {
  return (
    <>
      <Background /> {/* Your existing background component */}
      <div className="app-content">
        <Navbar />
        <NewsletterPage />
        <Footer />
      </div>
    </>
  );
}




export default App;