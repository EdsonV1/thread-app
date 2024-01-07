import React from "react";
import "../styles/Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from '../../ThemeContext';

const Navbar = () => {
    const { currentTheme, toggleTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    const  navigate = useNavigate();

    const logOut = () => {
        navigate("/Login")
    };

    const toggleThemeHandler = () => {
        toggleTheme(); // Toggle the theme
    };
    
    const themeIcon = currentTheme === 'light' ? 'dark_mode' : 'brightness_4';

    return (
        <nav style={{ backgroundColor: theme.color_surface_100, color: theme.color_text }}>
            <div className="navbar-content">
                <div className="navbar-left">
                    <h3>Threads</h3>
                </div>
                <div className="navbar-right">
                    <span className="material-icons">account_circle</span>
                    <span className="material-icons" onClick={logOut}>exit_to_app</span>
                    <span className="material-icons" onClick={toggleThemeHandler}>{themeIcon}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;