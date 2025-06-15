// import React from 'react';
// import './app.css'; // Import the global styles

// // Your existing components
// import Background from './components/Background/Background';
// import Navbar from './components/Navbar/Navbar'; // Assuming you have a Navbar
// import Footer from './components/Footer/Footer';   // Assuming you have a Footer

// import NewsletterPage from './pages/NewsletterPage/NewsletterPage';
// function App() {
//   return (
//     <>
//       <Background /> {/* Your existing background component */}
//       <div className="app-content">
//         <Navbar />
//         <NewsletterPage />
//         <Footer />
//       </div>
//     </>
//   );
// }




// export default App;

// This is your FULL, updated App.jsx file
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';

// Import your page components
import NewsletterPage from './pages/NewsletterPage/NewsletterPage';
import ArticlePage from './pages/ArticlePage/ArticlePage'; // <-- ADD THIS

// Import your shared layout components
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Background />
      {/* Remove the main Navbar for a cleaner structure based on our new design */}
      {/* <Navbar /> */}

      <main>
        <Routes>
          <Route path="/" element={<NewsletterPage />} />
          {/* --- ADD THIS NEW ROUTE --- */}
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;