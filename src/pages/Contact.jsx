function Contact() {
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <div className="row align-items-center g-5">

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
                <span className="d-block text-uppercase small fw-semibold text-success mb-1">
                  Location
                </span>
                <p className="mb-0">Mussoorie, Uttarakhand</p>
              </div>

              <div className="col-6">
                <span className="d-block text-uppercase small fw-semibold text-success mb-1">
                  Reservations
                </span>
                <p className="mb-0">+91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form className="p-4 p-md-5 border rounded shadow-sm bg-white">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-uppercase small">Your Name</label>
                  <input type="text mb-2" className="form-control" placeholder="Enter your name" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-uppercase small">Your Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-uppercase small">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Tell us about your stay..."
                />
              </div>

              <button type="submit" className="btn btn-outline-success w-100 d-flex align-items-center justify-content-center gap-2 text-uppercase fw-bold">
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