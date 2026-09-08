import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer site-footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        {/* single brush stroke — same 3-tone palette, blended into one wave */}
        <div className="footer-brush" aria-hidden="true">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="brushGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E8C9A0" />
                <stop offset="45%" stopColor="#C9A24B" />
                <stop offset="100%" stopColor="#0F5E56" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 C240,110 480,50 720,75 C960,100 1200,60 1440,85 L1440,150 L0,150 Z"
              fill="url(#brushGradient)"
              opacity="0.9"
            />
          </svg>
        </div>

        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-title">Company</h4>
              <a className="footer-link" href="#about"><i className="fa fa-chevron-right me-2" />About Us</a>
              <a className="footer-link" href="#contact"><i className="fa fa-chevron-right me-2" />Contact Us</a>
              <a className="footer-link" href="#rooms"><i className="fa fa-chevron-right me-2" />Bookings</a>
              <a className="footer-link" href="#gallery"><i className="fa fa-chevron-right me-2" />Gallery</a>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="footer-title">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Mall Road, Landour, Mussoorie — 248179
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +052 5435 67435
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                hello@thevellora.in
              </p>
              <div className="d-flex pt-2 footer-social">
                <a href="/"><i className="fab fa-twitter" /></a>
                <a href="/"><i className="fab fa-facebook-f" /></a>
                <a href="/"><i className="fab fa-instagram" /></a>
                <a href="/"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4 className="footer-title">Newsletter</h4>
              <p>Stay updated: cozy escapes and Mussoorie stories, straight to your inbox.</p>
              <div className="footer-newsletter position-relative mx-auto">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your Email"
                />
                <button type="button" className="footer-subscribe-btn">
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
                <a className="footer-disclaimer" href="#">
                  The Vellora is a boutique hillside stay in Mussoorie.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  )
}