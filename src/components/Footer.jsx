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
        {/* torn paper edge */}
        <div className="footer-tear footer-tear-back" aria-hidden="true" />
        <div className="footer-tear footer-tear-front" aria-hidden="true" />

        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">Company</h4>
              <a className="footer-link" href="/">About Us</a>
              <a className="footer-link" href="/">Contact Us</a>
              <a className="footer-link" href="/">Privacy Policy</a>
              <a className="footer-link" href="/">Terms &amp; Condition</a>
              <a className="footer-link" href="/">FAQs &amp; Help</a>
            </div>

            <div className="col-lg-3 col-md-6">
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
                <a href=""><i className="fab fa-youtube" /></a>
                <a href=""><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">Gallery</h4>
              <div className="row g-2 pt-2 footer-gallery">
                <div className="col-4"><img src="assets/img/package-1.jpg" alt="" /></div>
                <div className="col-4"><img src="assets/img/package-2.jpg" alt="" /></div>
                <div className="col-4"><img src="assets/img/package-3.jpg" alt="" /></div>
                <div className="col-4"><img src="assets/img/package-2.jpg" alt="" /></div>
                <div className="col-4"><img src="assets/img/package-3.jpg" alt="" /></div>
                <div className="col-4"><img src="assets/img/package-1.jpg" alt="" /></div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">Newsletter</h4>
              <p>Get news on stays, offers and Mussoorie events.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="container">
          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <a className="footer-disclaimer" href="#">
                  The Vellora is a boutique hillside stay in Mussoorie, bringing together Himalayan views and warm, easy hospitality.
                  Disclaimer: Its just a demo website made for project by Akriti Chauhan(chauhanakriti66@gmail.com)
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/">Cookies</a>
                  <a href="/">Help</a>
                  <a href="/">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  )
}