import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar") && !e.target.closest(".menu-toggle")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="aizaliq-header">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          AIZALIQ <span>Studios</span>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navigation */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/features" onClick={() => setMenuOpen(false)}>
          Features
        </Link>
        <Link to="/ai" onClick={() => setMenuOpen(false)}>
          AI
        </Link>
        <Link to="/scenario" onClick={() => setMenuOpen(false)}>
          Scenario
        </Link>
        <Link to="/technology" onClick={() => setMenuOpen(false)}>
          Technology
        </Link>
        <Link to="/business-model" onClick={() => setMenuOpen(false)}>
          Business Model
        </Link>
        <Link to="/team" onClick={() => setMenuOpen(false)}>
          Team
        </Link>
        <Link to="/achievements" onClick={() => setMenuOpen(false)}>
          Achievements
        </Link>
        <Link to="/future-plans" onClick={() => setMenuOpen(false)}>
          Future Plans
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <Link to="/become-member">Become a member</Link>

        
      </nav>
    </header>
  );
};

export default Header;
