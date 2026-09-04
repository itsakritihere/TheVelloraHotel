import React from 'react'
import "./Services.css";
import {
  FaArrowRight,
  FaBed,
  FaUtensils,
  FaConciergeBell,
  FaCalendarAlt,
  FaMountain,
  FaSpa,
  FaSmile,
} from "react-icons/fa";

const services = [
  {
    icon: FaBed,
    title: "Comfortable Rooms",
    text: "Beautifully appointed rooms designed to give you a peaceful and comfortable stay in the hills.",
  },
  {
    icon: FaUtensils,
    title: "Dining Experience",
    text: "Enjoy delicious meals and warm hospitality while taking in the charm of Mussoorie.",
  },
  {
    icon: FaConciergeBell,
    title: "Warm Hospitality",
    text: "From check-in to check-out, our team is here to make your stay effortless and memorable.",
  },
  {
    icon: FaCalendarAlt,
    title: "Events & Gatherings",
    text: "Celebrate special moments, family gatherings, and intimate occasions in a beautiful setting.",
  },
];

function Services() {
  return (
    <section className="services section">
        <div className="section-head">
          <p className="eyebrow">Our Services</p>

          <h2>Everything You Need for a Memorable Stay</h2>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <div className="service-card" key={title}>
              <Icon size={40} />

              <h3>{title}</h3>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Services
