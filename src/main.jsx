
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Router>
      <App />
    </Router>
);
