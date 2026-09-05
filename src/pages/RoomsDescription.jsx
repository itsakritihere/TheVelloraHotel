import React from "react";
import "./RoomsDescription.css";
import im1 from "../assets/img/Room1.webp";
import im2 from "../assets/img/Room2.jpg";
import im3 from "../assets/img/Room3.webp";
import im4 from "../assets/img/Room4.jpg";
import im5 from "../assets/img/Room5.jpg";
import im6 from "../assets/img/Room6.jpg";
import im7 from "../assets/img/Room7.jpg";
import im8 from "../assets/img/Room8.jpg";
import im9 from "../assets/img/Room9.jpg";
import im10 from "../assets/img/Room10.jpg";

// Update image paths / data below to match your assets & CMS content
const rooms = [
  {
    id: 1,
    image: im1,
    badges: ["Popular", "Suite"],
    rating: "4.9",
    title: "Presidential Suite 2 Bedroom",
    location: "Main Wing, The Vellora, Mussoorie",
    rooms: 2,
    bathrooms: 2,
    guests: 5,
    area: "233 sq. m.",
    amenities: [
      { icon: "bi-wifi", label: "High-Speed WiFi" },
      { icon: "bi-tv", label: "Smart TV" },
      { icon: "bi-egg-fried", label: "Gourmet Kitchen" },
      { icon: "bi-p-square", label: "Secure Parking" },
      { icon: "bi-door-open", label: "Private Balcony" },
    ],
  },
  {
    id: 2,
    image: im2,
    badges: ["Nature Lover", "King Room"],
    rating: "4.8",
    title: "Superior Room King Bed",
    location: "Garden Wing, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 3,
    area: "47 sq. m.",
    amenities: [
      { icon: "bi-fire", label: "Fireplace" },
      { icon: "bi-wifi", label: "High-Speed WiFi" },
      { icon: "bi-p-square", label: "Secure Parking" },
      { icon: "bi-basket", label: "Laundry" },
      { icon: "bi-flower1", label: "Garden" },
    ],
  },
  {
    id: 3,
    image: im3,
    badges: ["Vantage", "Deluxe"],
    rating: "4.6",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-tv", label: "Smart TV" },
      { icon: "bi-wifi", label: "High-Speed WiFi" },
      { icon: "bi-flower1", label: "Garden" },
      { icon: "bi-door-open", label: "Balcony" },
      { icon: "bi-p-square", label: "Secure Parking" },
    ],
  },
  {
    id: 4,
    image: im4,
    badges: ["Popular", "Deluxe"],
    rating: "4.7",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-egg-fried", label: "Gourmet Kitchen" },
      { icon: "bi-fire", label: "BBQ Area" },
      { icon: "bi-basket", label: "Laundry" },
      { icon: "bi-flower1", label: "Garden" },
    ],
  },
  {
    id: 5,
    image: im5,
    badges: ["Nature Lover", "Deluxe"],
    rating: "4.8",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-wifi", label: "High-Speed WiFi" },
      { icon: "bi-tv", label: "Smart TV" },
      { icon: "bi-p-square", label: "Secure Parking" },
      { icon: "bi-door-open", label: "Balcony" },
    ],
  },
  {
    id: 6,
    image: im6,
    badges: ["Vantage", "Deluxe"],
    rating: "4.6",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-fire", label: "Fireplace" },
      { icon: "bi-flower1", label: "Garden" },
      { icon: "bi-basket", label: "Laundry" },
      { icon: "bi-p-square", label: "Secure Parking" },
    ],
  },
  {
    id: 7,
    image: im7,
    badges: ["Popular", "Deluxe"],
    rating: "4.9",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-wifi", label: "High-Speed WiFi" },
      { icon: "bi-egg-fried", label: "Gourmet Kitchen" },
      { icon: "bi-door-open", label: "Balcony" },
    ],
  },
  {
    id: 8,
    image: im8,
    badges: ["Nature Lover", "Deluxe"],
    rating: "4.7",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-flower1", label: "Garden" },
      { icon: "bi-fire", label: "BBQ Area" },
      { icon: "bi-tv", label: "Smart TV" },
    ],
  },
  {
    id: 9,
    image: im9,
    badges: ["Vantage", "Deluxe"],
    rating: "4.6",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-wifi", label: "High-Speed WiFi" },
      { icon: "bi-p-square", label: "Secure Parking" },
      { icon: "bi-basket", label: "Laundry" },
    ],
  },
  {
    id: 10,
    image: im10,
    badges: ["Popular", "Deluxe"],
    rating: "4.8",
    title: "Deluxe Room",
    location: "Valley View Block, The Vellora, Mussoorie",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "40 sq. m.",
    amenities: [
      { icon: "bi-fire", label: "Fireplace" },
      { icon: "bi-tv", label: "Smart TV" },
      { icon: "bi-flower1", label: "Garden" },
    ],
  },
];

const RoomsDescription = () => {
  return (
    <section className="rooms-description py-5">
      <div className="container text-center mb-5">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
          <span className="rooms-description__rule" />
          <h2 className="rooms-description__title mb-0">
            Luxury Rooms &amp; Suites at
            <br />
            The Vellora, Mussoorie
          </h2>
          <span className="rooms-description__rule" />
        </div>
        <p className="rooms-description__subtitle mx-auto">
          Immerse yourself in luxury and comfort at The Vellora, Mussoorie.
          Explore our exquisite suites and rooms, with bespoke furnishings
          <a href="#rooms" className="rooms-description__more">
            {" "}
            &raquo;
          </a>
        </p>
      </div>

      <div className="container">
        <div className="rooms-description__grid">
          {rooms.map((room) => (
            <div className="room-card" key={room.id}>
              <div className="room-card__image-wrap">
                <img
                  src={room.image}
                  alt={room.title}
                  className="room-card__image"
                />

                <div className="room-card__badges">
                  {room.badges.map((badge) => (
                    <span className="room-card__badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="room-card__rating">
                  <i className="bi bi-star-fill" />
                  {room.rating}
                </div>
              </div>

              <div className="room-card__stats">
                <span>
                  <i className="bi bi-door-closed-fill" />
                  {room.rooms} {room.rooms > 1 ? "Rooms" : "Room"}
                </span>
                <span>
                  <i className="bi bi-droplet-fill" />
                  {room.bathrooms}{" "}
                  {room.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
                </span>
                <span>
                  <i className="bi bi-people-fill" />
                  {room.guests} Guests
                </span>
                <span>
                  <i className="bi bi-bounding-box" />
                  {room.area}
                </span>
              </div>

              <div className="room-card__info">
                <h3 className="room-card__title">{room.title}</h3>
                <p className="room-card__location">
                  <i className="bi bi-geo-alt-fill" />
                  {room.location}
                </p>

                <div className="room-card__amenities">
                  {room.amenities.map((amenity) => (
                    <span className="room-card__pill" key={amenity.label}>
                      <i className={`bi ${amenity.icon}`} />
                      {amenity.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsDescription;