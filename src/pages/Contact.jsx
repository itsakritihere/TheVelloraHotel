import "./Contact.css";

function Contact() {
return ( <section className="contact-section" id="contact"> <div className="container"> <div className="row align-items-center g-5">

```
      {/* Left Content */}
      <div className="col-lg-6">
        <div className="faq-header">
          <div className="faq-eyebrow">
            <span></span>
            PLAN YOUR STAY
            <span></span>
          </div>

          <h1>Come Stay With Us..</h1>

          <p>
            Have a question about your stay or planning your next getaway
            to Mussoorie? We'd love to hear from you.
          </p>
        </div>

        <div className="row border-top pt-4 contact-info-row">

          <div className="col-6">
            <span className="d-block text-uppercase small fw-semibold contact-label">
              Location
            </span>

            <p className="mb-0">
              Mussoorie, Uttarakhand
            </p>
          </div>

          <div className="col-6">
            <span className="d-block text-uppercase small fw-semibold contact-label">
              Reservations
            </span>

            <p className="mb-0">
              +91 XXXXX XXXXX
            </p>
          </div>

        </div>
      </div>


      {/* Right Form */}
      <div className="col-lg-6">

        <form className="contact-form">

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label text-uppercase small">
                Your Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>


            <div className="col-md-6 mb-3">
              <label className="form-label text-uppercase small">
                Your Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

          </div>


          <div className="mb-4">
            <label className="form-label text-uppercase small">
              Message
            </label>

            <textarea
              className="form-control"
              rows="5"
              placeholder="Tell us about your stay..."
            />
          </div>


          <button
            type="submit"
            className="contact-button"
          >
            Send Enquiry <span>→</span>
          </button>

        </form>

      </div>

    </div>
  </div>
</section>
);
}
export default Contact;
