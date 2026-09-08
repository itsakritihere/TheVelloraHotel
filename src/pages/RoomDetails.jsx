
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./RoomDetails.css";
import sampleRooms from "../data/Datarooms.json";

import imBalcony from "../assets/img/Room1.webp";
import imNonBalcony from "../assets/img/Room2.jpg";

/* Map room image names from JSON to imported images */
const IMAGE_MAP = {
  "Room1.webp": imBalcony,
  "Room2.jpg": imNonBalcony,
};

/* Add actual imported image paths to room data */
const SAMPLE_ROOMS = sampleRooms.map((room) => ({
  ...room,
  image: IMAGE_MAP[room.image] || room.image,
}));

function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = SAMPLE_ROOMS.find(
    (item) => String(item.id) === String(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: room?.guests || 1,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* Room not found */
  if (!room) {
    return (
      <div className="room-not-found">
        <h2>Room Not Found</h2>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  /* Handle form input changes */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Handle form submission */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      room: room.title,
      ...formData,
    });

    setSubmitted(true);
  };

  return (
    <section className="room-details-page">

      {/* TOP BANNER */}
      <div className="room-details-banner">
        <div className="container">

         <button
  className="room-details-back"
  onClick={() =>
    navigate("/", {
      state: { scrollTo: "rooms" },
    })
  }
>
  <i className="bi bi-arrow-left"></i>
  Back to Rooms
</button>

          <div className="room-details-breadcrumb">
            HOME
            <span>/</span>
            ROOMS
            <span>/</span>
            {room.title.toUpperCase()}
          </div>

          <h1>{room.title}</h1>

          <div className="room-details-location">
            <i className="bi bi-geo-alt-fill"></i>
            {room.location}
          </div>

        </div>
      </div>


      {/* MAIN CONTENT */}
      <div className="container room-details-container">
        <div className="row g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-8">

            {/* ROOM IMAGE */}
            <div className="room-details-image-wrapper">

              <img
                src={room.image}
                alt={room.title}
                className="room-details-main-image"
              />

              {room.rating && (
                <div className="room-details-rating">
                  <i className="bi bi-star-fill"></i>
                  {room.rating}
                </div>
              )}

              {room.badges?.length > 0 && (
                <div className="room-details-badges">
                  {room.badges.map((badge) => (
                    <span key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              )}

            </div>


            {/* ROOM STATS */}
            <div className="room-details-stats">

              <div className="room-detail-stat">
                <i className="bi bi-door-closed-fill"></i>

                <div>
                  <strong>{room.rooms}</strong>
                  <span>Room</span>
                </div>
              </div>


              <div className="room-detail-stat">
                <i className="bi bi-droplet-fill"></i>

                <div>
                  <strong>{room.bathrooms}</strong>
                  <span>Bathroom</span>
                </div>
              </div>


              <div className="room-detail-stat">
                <i className="bi bi-people-fill"></i>

                <div>
                  <strong>{room.guests}</strong>
                  <span>Guests</span>
                </div>
              </div>


              <div className="room-detail-stat">
                <i className="bi bi-bounding-box"></i>

                <div>
                  <strong>{room.area}</strong>
                  <span>Room Size</span>
                </div>
              </div>

            </div>


            {/* ABOUT ROOM */}
            <div className="room-details-content">

              <div className="room-details-section-title">
                <span></span>
                <p>ABOUT THE ROOM</p>
                <span></span>
              </div>

              <h2>Experience Comfort & Luxury</h2>

              <p className="room-details-description">
                Welcome to {room.title}, a thoughtfully designed space
                created for comfort, relaxation and a memorable stay.
              </p>

            </div>


            {/* AMENITIES */}
            <div className="room-details-amenities">

              <div className="room-details-section-title">
                <span></span>
                <p>ROOM FEATURES</p>
                <span></span>
              </div>

              <h2>Premium Amenities</h2>

              <div className="room-details-amenities-grid">

                {room.amenities?.map((amenity, index) => (
                  <div
                    className="room-details-amenity"
                    key={index}
                  >

                    <div className="room-details-amenity-icon">
                      <i
                        className={`bi ${amenity.icon}`}
                      ></i>
                    </div>

                    <span>
                      {amenity.label}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* RIGHT SIDE — ENQUIRY FORM */}
          <div className="col-lg-4">

            <div className="room-enquiry-card">

              {/* PRICE */}
              <div className="room-enquiry-top">

                <p>STARTING FROM</p>

                <h2>
                  ₹{room.price.toLocaleString("en-IN")}
                </h2>

                <span>Per Night</span>

              </div>


              {!submitted ? (

                <form onSubmit={handleSubmit}>

                  <h3>Enquire About This Room</h3>


                  {/* NAME */}
                  <div className="room-form-group">

                    <label>Full Name</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* EMAIL */}
                  <div className="room-form-group">

                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* PHONE */}
                  <div className="room-form-group">

                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* CHECK IN / CHECK OUT */}
                  <div className="room-form-row">

                    <div className="room-form-group">

                      <label>Check In</label>

                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="room-form-group">

                      <label>Check Out</label>

                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  {/* GUESTS */}
                  <div className="room-form-group">

                    <label>Guests</label>

                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >

                      {[...Array(room.guests)].map((_, index) => (
                        <option
                          key={index}
                          value={index + 1}
                        >
                          {index + 1} Guest
                        </option>
                      ))}

                    </select>

                  </div>


                  {/* MESSAGE */}
                  <div className="room-form-group">

                    <label>Message</label>

                    <textarea
                      name="message"
                      placeholder="Any special requests?"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                    />

                  </div>


                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="room-enquiry-btn"
                  >
                    Send Enquiry

                    <i className="bi bi-arrow-right"></i>
                  </button>

                </form>

              ) : (

                /* SUCCESS MESSAGE */
                <div className="room-enquiry-success">

                  <div className="room-enquiry-success-icon">
                    <i className="bi bi-check-lg"></i>
                  </div>

                  <h3>Enquiry Sent!</h3>

                  <p>
                    Thank you! We will contact you soon.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default RoomDetails;

