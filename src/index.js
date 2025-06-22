// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ from 'react-dom/client'
import App from './App';
import './styles/global.css';

// ✅ Create root and render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
