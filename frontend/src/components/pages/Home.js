import React from "react"; 
import '../styles/Home.css'
import { Link } from "react-router-dom";
import featureData from '../data/featureData';

const Home = () => {
    return (
        <div className="container">
            <header>
                <h1>Welcome to Threads</h1>
                <p>A real-time chat application for seamless communication!</p>
                <div className="auth-buttons">
                    <Link to="/SignUp">
                        <button className="login">Sign Up</button>
                    </Link>
                    <Link to="/Login">
                        <button className="signup">Login</button>
                    </Link>
                </div>
            </header>
            <main>
                <div className="features">
                    {featureData.map((feature, index) => (
                    <div key={index} className="feature-box">
                        <div className="feature-info">
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                        <div className="feature-image">
                            <img src={feature.image} alt={feature.title} />
                        </div>
                    </div>
                    ))}
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Threads. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;