import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-content">
          <span className="contact-label">PLAN YOUR STAY</span>

          <h2>
             <span>Come Stay With Us..</span>
          </h2>

          <p>
            Have a question about your stay or planning your next getaway
            to Mussoorie? We'd love to hear from you.
          </p>

          <div className="contact-details">
            <div>
              <span>Location</span>
              <p>Mussoorie, Uttarakhand</p>
            </div>

            <div>
              <span>Reservations</span>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Tell us about your stay..."
            />
          </div>

          <button type="submit">
            Send Enquiry <span>→</span>
          </button>
        </form>

      </div>
    </section>
  );
}
export default Contact;