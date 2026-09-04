import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "./Header.css";


function Header() {
  return (
    <>
      {/* HOTEL TOP HEADER - SCROLLS AWAY */}
      <header className="site-header">
        <div className="topbar">
          <div className="topbar-container">
            <div className="topbar-contact">
              <span className="topbar-item">
                <i className="fa-solid fa-location-dot"></i>
                The Vellora, Mussoorie
              </span>

              <span className="topbar-item">
                <i className="fa-solid fa-phone"></i>
                +91-7575-98-2121
              </span>

              <span className="topbar-item">
                <i className="fa-solid fa-envelope"></i>
                vellora@gmail.com
              </span>
            </div>

            <div className="topbar-social">
              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN NAVBAR - STICKY */}
      <nav className="main-navbar">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo">
            <span className="logo-main">Vellora</span>
            <span className="logo-sub">MUSSOORIE</span>
          </Link>

          <div className="navbar-menu">
            <Link to="/" className="nav-link active">
              Home
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>

            <Link to="/rooms" className="nav-link">
              Rooms
            </Link>

            <Link to="/services" className="nav-link">
              Services
            </Link>

            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>

            <Link to="/booking" className="nav-book">
              Book Now
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}
export default Header;