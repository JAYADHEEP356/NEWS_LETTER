
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css'; 
// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // --- IMPORT BrowserRouter HERE ---
import App from './App.jsx';
import './index.css'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* --- WRAP THE ENTIRE APP IN THE ROUTER --- */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);