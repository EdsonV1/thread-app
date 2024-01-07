import React, { useState } from "react";
import "../styles/Signup.css"
import Navbar from "./Navbar";
import { useTheme } from '../../ThemeContext';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    var [username, setUsername] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");

    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (!username) return alert("Username is blank");
        if (!email) return alert("Email is blank");
        if (!password) return alert("Password is blank");
        navigate("/Login")
    };

    return (
        <div className="container-signup" style={{ backgroundColor: theme.color_surface_200 }}>
            <Navbar /> 
            <div className="container-content">
                <div className="text">
                    <h2 style={{ color: theme.color_text }}> Create an account </h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }} type="text" id="username" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }} type="email" id="email" name="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }} type="password" id="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }} type="password" id="password" name="password" placeholder="Confirm password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <h5 style={{ color: theme.color_text }}> Already have an account? <Link to="/login"> Sign In </Link> </h5>
                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
