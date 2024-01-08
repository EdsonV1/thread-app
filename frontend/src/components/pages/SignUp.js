import React, { useState } from "react";
import "../styles/Signup.css";
import Navbar from "./Navbar";
import { useTheme } from '../../ThemeContext';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username || !email || !password) {
            setError("All fields are required.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            // Send registration request
            await axios.post("http://localhost:4000/backend/user", { username, email, password });
            // Handle successful registration
            navigate("/login");
        } catch (error) {
            // Handle registration failure/error
            setError("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
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
                        <input
                            style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            aria-label="Username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            style={{ backgroundColor: theme.color_surface_200, color: theme.color_text }}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Password"
                            required
                        />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <h5 style={{ color: theme.color_text }}> Already have an account? <Link to="/login"> Sign In </Link> </h5>
                    <div className="form-group">
                        <button type="submit" disabled={loading}>{loading ? 'Signing Up...' : 'Sign Up'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
