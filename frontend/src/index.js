import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./components/styles/index.css"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


