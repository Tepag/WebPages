import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SecondaryPage from './pages/SecondaryPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              WebPages Refactor
            </Link>
            <div className="nav-menu">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/secondary" className="nav-link">
                Secondary Page
              </Link>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secondary" element={<SecondaryPage />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>&copy; 2024 WebPages Refactor. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

