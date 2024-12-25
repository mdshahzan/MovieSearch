import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure to import Bootstrap CSS

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  const handleScroll = () => {
    if (window.scrollY > 50) {  // Change 50 to the scroll position you want to trigger the background color
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);  // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);  // Clean up the event listener
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <nav style={{height:"130px"}} className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'bg-dark' : ''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="logo"
              src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
              alt="Logo"
              style={{ width: '100px' }}
            />
          </Link>

          {/* Hamburger Menu for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li style={{fontSize:"20px"}} className="nav-item">
                <Link className="nav-link" to="/signin">
                  <i className="bi bi-person-circle"></i>
                  <span className="d-none d-md-inline">My Space</span>
                </Link>
              </li>
              <li style={{fontSize:"20px"}} className="nav-item">
                <Link className="nav-link" to="/searchMovie">
                  <i className="bi bi-search"></i>
                  <span className="d-none d-md-inline">Search</span>
                </Link>
              </li>
              <li style={{fontSize:"20px"}} className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="bi bi-house-door-fill"></i>
                  <span className="d-none d-md-inline">Home</span>
                </Link>
              </li>
              <li style={{fontSize:"20px"}} className="nav-item">
                <Link className="nav-link" to="/movies">
                  <i className="bi bi-tv-fill"></i>
                  <span className="d-none d-md-inline">Movies</span>
                </Link>
              </li>
              <li style={{fontSize:"20px"}} className="nav-item">
                <Link className="nav-link" to="/series">
                  <i className="bi bi-film"></i>
                  <span className="d-none d-md-inline">Series</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
