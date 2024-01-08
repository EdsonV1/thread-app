import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css"
import Navbar from "./Navbar";
import { useTheme } from '../../ThemeContext';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;
    
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError("Both username and password are required.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            // Example: Change the request type to POST and send data securely
            const response = await axios.post("http://localhost:4000/backend/user/login", {
                username: username,
                password: password
            });

            const token = response.data.token;

            localStorage.setItem("token", token);

            navigate("/Chat");
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code that falls out of the range of 2xx
                setError(`Login failed with status code: ${error.response.status}`);
            } else if (error.request) {
                // The request was made but no response was received
                setError("No response received. Please try again.");
            } else {
                // Something happened in setting up the request that triggered an error
                setError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
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
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <h5 style={{ color: theme.color_text }}> Dont have an account? <Link to="/SignUp"> Create account </Link> </h5>
                    <div className="form-group">
                        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;