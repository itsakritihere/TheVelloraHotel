import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "./Header.css";

import logo from "../assets/img/image.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
     { label: "Experience", to: "experience" },
     { label: "Gallery", to: "gallery" },
   
    { label: "Services", to: "services" },
    { label: "Rooms", to: "rooms" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="topbar d-none d-lg-block">
          <div className="topbar-container container-fluid d-flex align-items-center justify-content-between">
            <div className="topbar-contact d-flex align-items-center">
              <span className="topbar-item">
                <i className="fa-solid fa-location-dot"></i>
                The Vellora, Mussoorie
              </span>

              <a href="tel:+917575982121" className="topbar-item">
                <i className="fa-solid fa-phone"></i>
                +91-7575-98-2121
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vellora@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-item"
              >
                <i className="fa-solid fa-envelope"></i>
                vellora@gmail.com
              </a>
            </div>

            <div className="topbar-social d-flex align-items-center">
              <a
                href="https://twitter.com/thevellora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a
                href="https://facebook.com/thevellora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://linkedin.com/company/thevellora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://instagram.com/thevellora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://youtube.com/@thevellora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="main-navbar">
        <div className="navbar-container container-fluid d-flex align-items-center justify-content-between">
          {/* LOGO */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="navbar-logo"
            onClick={closeMenu}
            style={{ cursor: "pointer" }}
          >
            <img
              src={logo}
              alt="The Vellora - Mussoorie"
              className="logo-img"
            />
          </ScrollLink>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`navbar-toggler-custom d-lg-none ${
              menuOpen ? "is-open" : ""
            }`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
          </button>

          {/* NAVIGATION */}
          <ul
            className={`navbar-menu list-unstyled mb-0 ${
              menuOpen ? "is-open" : ""
            }`}
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeMenu}
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}

            {/* BOOK NOW → ROOMS */}
            <li>
              <ScrollLink
                to="rooms"
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-book"
                onClick={closeMenu}
                style={{ cursor: "pointer" }}
              >
                Book Now
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU BACKDROP */}
      {menuOpen && (
        <div
          className="menu-backdrop d-lg-none"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}

export default Header;