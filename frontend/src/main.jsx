
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './app.css'; // I renamed this from index.css to match our plan

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
