import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to WebPages Refactor</h1>
        <p>A modern React-based website with clean architecture</p>
        <Link to="/secondary" className="cta-button">
          Visit Secondary Page
        </Link>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>React Router</h3>
              <p>Modern client-side routing for seamless navigation</p>
            </div>
            <div className="feature-card">
              <h3>Responsive Design</h3>
              <p>Mobile-first approach with clean, modern styling</p>
            </div>
            <div className="feature-card">
              <h3>GitHub Pages</h3>
              <p>Automated deployment with GitHub Actions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

