import React from "react";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;

        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/", {
        state: {
          scrollTo: sectionId,
        },
      });
    }
  };

  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer site-footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        {/* single brush stroke — same 3-tone palette, blended into one wave */}
        

        <div className="container py-5">
          <div className="row g-5">
            
            <div className="col-lg-4 col-md-6 footer-col-company">
              <h4 className="footer-title">Company</h4>

              <button
                type="button"
                className="footer-link"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </button>

              <button
                type="button"
                className="footer-link"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </button>

              <button
                type="button"
                className="footer-link"
                onClick={() => scrollToSection("gallery")}
              >
                Gallery
              </button>
               <button
                type="button"
                className="footer-link"
                onClick={() => scrollToSection("services")}
              >
Services
              </button>
               <button
                type="button"
                className="footer-link"
                onClick={() => scrollToSection("rooms")}
              >
                Rooms
              </button>
              <button
                type="button"
                className="footer-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </button>
            </div>
    
     <div className="col-lg-4 col-md-6 footer-col-contact">
              <h4 className="footer-title">Contact</h4>

              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                <a
                  href="https://maps.google.com/?q=Mall+Road,+Landour,+Mussoorie+248179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  Mall Road, Landour, Mussoorie — 248179
                </a>
              </p>

              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                <a href="tel:+052543567435" className="footer-contact-link">
                  +052 5435 67435
                </a>
              </p>

              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@thevellora.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  hello@thevellora.in
                </a>
              </p>

              <div className="d-flex pt-2 footer-social">
                <a
                  href="https://twitter.com/thevellora"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" />
                </a>

                <a
                  href="https://instagram.com/thevellora"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>

                <a
                  href="https://linkedin.com/company/thevellora"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 footer-col-newsletter">
              <h4 className="footer-title">Newsletter</h4>

              <p>
                Stay updated: cozy escapes and Mussoorie stories, straight to
                your inbox.
              </p>

              <div className="footer-newsletter position-relative mx-auto">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your Email"
                />

                <button
                  type="button"
                  className="footer-subscribe-btn"
                >
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">

                <button
                  type="button"
                  className="footer-disclaimer"
                  onClick={() => scrollToSection("home")}
                >
                  The Vellora is a boutique hillside stay in Mussoorie.
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}