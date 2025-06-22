
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Spotify" className="logo" />
        </Link>

        <Link to="/" className="nav-link">Home</Link>

       
        <div className="install-app">
          <FiDownload className="download-icon" />
          <span className="install-text">Install App</span>
          
        </div>
      </div>
      

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search songs, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="navbar-right">
        <Link to="/signup" className="signup-btn">Signup</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
