import { useState, useEffect } from "react";
import "./RoomsDescription.css";
import { useNavigate } from "react-router-dom";
import RoomDetails from "./RoomDetails";
import sampleRooms from "../data/Datarooms.json";


// Map JSON's plain filename strings to actual imported images
import imBalcony from "../assets/img/Room1.webp";
import imNonBalcony from "../assets/img/Room2.jpg";

const IMAGE_MAP = {
  "Room1.webp": imBalcony,
  "Room2.jpg": imNonBalcony,
};

const SAMPLE_ROOMS = sampleRooms.map((r) => ({
  ...r,
  image: IMAGE_MAP[r.image] || r.image,
}));

/* ================================
   ROOM CARD (single card)
================================ */

function RoomCard({ room, onBook, onClick }) {
  return (
    <div
      className="room-card"
      onClick={(e) => onClick && onClick(e, room)}
    >
      <div className="room-card__image-wrap">
        <img
          src={room.image}
          alt={room.title}
          className="room-card__image"
        />

        {/* top-left badges */}
        <div className="room-card__badges">
          {room.badges?.map((badge) => (
            <span className="room-card__badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>

        {/* top-right rating */}
        {room.rating && (
          <div className="room-card__rating">
            <i className="bi bi-star-fill"></i> {room.rating}
          </div>
        )}

        {/* bottom gradient stats bar */}
        <div className="room-card__stats-overlay">
          <span>
            <i className="bi bi-door-closed-fill"></i>
            {room.rooms} {room.rooms > 1 ? "Rooms" : "Room"}
          </span>
          <span>
            <i className="bi bi-droplet-fill"></i>
            {room.bathrooms} {room.bathrooms > 1 ? "Bathrooms" : "Bathroom"}
          </span>
          <span>
            <i className="bi bi-people-fill"></i>
            {room.guests} Guests
          </span>
          <span>
            <i className="bi bi-bounding-box"></i>
            {room.area}
          </span>
        </div>
      </div>

      <div className="room-card__body">
        <div className="room-card__title">{room.title}</div>

        <div className="room-card__location">
          <i className="bi bi-geo-alt-fill"></i> {room.location}
        </div>

        <div className="room-card__amenities">
          {room.amenities?.slice(0, 4).map((amenity, i) => (
            <span className="room-card__pill" key={i}>
              <i className={`bi ${amenity.icon}`}></i>
              {amenity.label}
            </span>
          ))}
        </div>

        <div className="room-card__footer">
          <div>
            <span className="room-card__from">From </span>
            <span className="room-card__price">
              ₹{room.price.toLocaleString("en-IN")}
            </span>
            <span className="room-card__per"> / Night</span>
          </div>

          <button
            className="room-card__book-btn"
            onClick={(e) => {
              e.stopPropagation();
              onBook && onBook(e, room);
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================
   ROOMS (container / grid)
================================ */

function Rooms() {
   const navigate = useNavigate();
  const [rooms, setRooms] = useState(SAMPLE_ROOMS);



  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    fetch("/api/rooms")
      .then((res) => {
        if (!res.ok) throw new Error("API not ready");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRooms(data);
        }
      })
      .catch(() => {
        console.log("Using sample rooms (API not available yet)");
      });
  }, []);

const handlePropertyClick = (e, room) => {

  navigate(`/room/${room.id}`);

};


const handlePropertyBook = (e, room) => {

  navigate(`/room/${room.id}`);

};
if (selectedRoom) {
  return (
    <RoomDetails
      room={selectedRoom}
      onBack={() => {
        setSelectedRoom(null);

        setTimeout(() => {
          document
            .getElementById("rooms")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }, 100);
      }}
    />
  );
}

  return (
    <section className="rooms-section" id="rooms">
      <div className="container">

        {/* HEADER */}

        
            <div className="faq-header">
          <div className="faq-eyebrow">
            <span></span>
             LUXURY ROOMS &amp; SUITES
            <span></span>
          </div>

          <h1>
            Everything You Need for a Memorable Stay
          </h1>

          <p>
                 Choose between a private balcony room or a cozy non-balcony
            stay — both crafted with the same comfort and care.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onClick={handlePropertyClick}
              onBook={handlePropertyBook}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;