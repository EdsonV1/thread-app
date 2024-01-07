import { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme } from './components/data/lightTheme.js';
import { darkTheme } from './components/data/darkTheme.js';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Retrieve theme preference from localStorage, default to 'light' if not set
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference to localStorage
  };

  useEffect(() => {
    // Update the HTML root element with the current theme
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const themeValues = {
    currentTheme: theme,
    toggleTheme,
    light: lightTheme,
    dark: darkTheme,
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};