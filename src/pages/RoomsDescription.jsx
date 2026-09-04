import React, { useRef } from "react";
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
    title: "Presidential Suite 2 Bedroom",
    description:
      "The Presidential Suite 2 Bedroom is the pinnacle of luxury, where opulence meets comfort in perfect harmony.",
    size: "233 sq. m.",
    guests: "Up to 5 guests",
    bed: "King",
    price: "1,84,028",
  },
  {
    id: 2,
    image: im2,
    title: "Superior Room King Bed",
    description:
      "Step into an oasis of refined luxury and tranquility in these spacious rooms designed for the discerning traveller.",
    size: "47 sq. m.",
    guests: "Up to 3 guests",
    bed: "King",
    price: "25,650",
  },
  {
    id: 3,
    image: im3,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
  {
    id: 3,
    image: im4,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
  {
    id: 3,
    image: im5,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
  {
    id: 3,
    image: im6,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
  {
    id: 3,
    image: im7,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
  {
    id: 3,
    image: im8,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
  {
    id: 3,
    image: im9,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
  {
    id: 3,
    image: im10,
    title: "Deluxe Room",
    description:
      "Elegantly appointed rooms offering panoramic views and bespoke furnishings for an unforgettable stay.",
    size: "40 sq. m.",
    guests: "Up to 2 guests",
    bed: "Queen",
    price: "18,900",
  },
];

const RoomsDescription = () => {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".room-card");
    const cardWidth = card ? card.offsetWidth + 24 : 400;
    trackRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="rooms-description py-5">
      <div className="container text-center mb-5">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
          <span className="rooms-description__rule" />
          <h2 className="rooms-description__title mb-0">
            Luxury Rooms &amp; Suites at
            <br />
          The Vellora, Mussouriee
          </h2>
          <span className="rooms-description__rule" />
        </div>
        <p className="rooms-description__subtitle mx-auto">
          Immerse yourself in luxury and comfort at The Vellora, Mussourie.
          Explore our exquisite suites and rooms, with bespoke furnishings
          <a href="#rooms" className="rooms-description__more">
            {" "}
            &raquo;
          </a>
        </p>
      </div>

      <div className="rooms-description__carousel">
        <button
          type="button"
          className="rooms-description__nav rooms-description__nav--prev"
          onClick={() => scrollByAmount("prev")}
          aria-label="Previous room"
        >
          <i className="bi bi-chevron-left" />
        </button>

        <div className="rooms-description__track" ref={trackRef}>
          {rooms.map((room) => (
            <div className="room-card" key={room.id}>
              <div className="room-card__image-wrap">
                <img
                  src={room.image}
                  alt={room.title}
                  className="room-card__image"
                />
                <button type="button" className="room-card__gallery btn">
                  <i className="bi bi-grid-3x3-gap-fill me-2" />
                  GALLERY
                </button>
              </div>

              <div className="room-card__info">
                <h3 className="room-card__title">{room.title}</h3>
                <p className="room-card__desc">
                  {room.description}
                  <a href="#rooms" className="rooms-description__more">
                    {" "}
                    &raquo;
                  </a>
                </p>

                <div className="room-card__meta d-flex align-items-center flex-wrap gap-4">
                  <span>
                    <i className="bi bi-bounding-box me-1" />
                    {room.size}
                  </span>
                  <span>
                    <i className="bi bi-people-fill me-1" />
                    {room.guests}
                  </span>
                  <span>
                    <i className="bi bi-moon-fill me-1" />
                    {room.bed}
                  </span>
                  <a href="#rooms" className="room-card__link ms-auto">
                    MORE
                  </a>
                </div>

                <hr className="room-card__divider" />

                <div className="d-flex align-items-end justify-content-between">
                  <div className="room-card__price">
                    <div className="room-card__price-label">MEMBER RATE</div>
                    <div className="room-card__price-value">
                      &#8377; {room.price}{" "}
                      <span className="room-card__price-unit">/ Night</span>
                    </div>
                  </div>
                  <button type="button" className="btn room-card__book-btn">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="rooms-description__nav rooms-description__nav--next"
          onClick={() => scrollByAmount("next")}
          aria-label="Next room"
        >
          <i className="bi bi-chevron-right" />
        </button>
      </div>
    </section>
  );
};

export default RoomsDescription;