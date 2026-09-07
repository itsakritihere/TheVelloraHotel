import React from "react";
import "./Services.css";
import {
  FaBed,
  FaUtensils,
  FaConciergeBell,
  FaCalendarAlt,
} from "react-icons/fa";

import sampleServices from "../data/dataServices.json";

// Map JSON's plain icon-key strings to actual imported icon components
const ICON_MAP = {
  bed: FaBed,
  utensils: FaUtensils,
  "concierge-bell": FaConciergeBell,
  "calendar-alt": FaCalendarAlt,
};

function Services() {
  return (
    <section className="services section" id="services">
     
       <div className="faq-header">
          <div className="faq-eyebrow">
            <span></span>
                      SERVICES

            <span></span>
          </div>

          <h1>
          At your service, every step of the way
          </h1>
        </div>

      <div className="services-grid">
        {sampleServices.map(({ icon, title, text }) => {
          const Icon = ICON_MAP[icon];
          return (
            <div className="service-card" key={title}>
              {Icon && <Icon size={40} />}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;