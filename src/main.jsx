




import React from 'react';
import { createRoot } from 'react-dom/client'; // Only import createRoot from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

// Get the root element
const rootElement = document.getElementById('root');

// Create the root and render the App component within Router
createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
