import React, { useState } from "react";
import "../styles/Login.css"
import Navbar from "./Navbar";
import { useTheme } from '../../ThemeContext';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");

    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (!username) return alert("Username is blank");
        if (!password) return alert("Password is blank");
        navigate('/Chat');
    };

    return (
        <div className="container-login" style={{ backgroundColor: theme.color_surface_200 }}>
            <Navbar /> 
            <div className="container-content">
                <div class="text">
                    <h2 style={{ color: theme.color_text }}> Enter your account </h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }} type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <input style={{ backgroundColor: theme.color_surface_200, color: theme.color_text}} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
                    </div>
                    <h5 style={{ color: theme.color_text }}> Dont have an account? <Link to="/SignUp"> Create account </Link> </h5>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;