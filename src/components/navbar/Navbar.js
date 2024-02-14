import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <Link to="/" className="logo">PonapTech</Link>
        <button className="toggle-button" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={isOpen ? "navbar-links active" : "navbar-links"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="dropdown">
            <Link to="/services">Services</Link>
            <div className="dropdown-content">
              <Link to="/services/service1">Service 1</Link>
              <Link to="/services/service2">Service 2</Link>
              <Link to="/services/service3">Service 3</Link>
              {/* Add more services as needed */}
            </div>
          </div>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    );
  }
  

export default Navbar;
