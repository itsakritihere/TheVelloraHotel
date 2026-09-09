import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import {
  FaBed,
  FaUtensils,
  FaConciergeBell,
  FaCalendarAlt,
} from "react-icons/fa";

import sampleServices from "../data/dataServices.json";

const ICON_MAP = {
  bed: FaBed,
  utensils: FaUtensils,
  "concierge-bell": FaConciergeBell,
  "calendar-alt": FaCalendarAlt,
};

// Parent container — staggers each card's entrance
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,   // increased gap between each card — more noticeable
      delayChildren: 0.1,      // small pause before the first card starts
    },
  },
};

// Each card fades up into place
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Services() {
  return (
    <section className="services section" id="services">
      <motion.div
        className="faq-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="faq-eyebrow">
          <span></span>
          SERVICES
          <span></span>
        </div>

        <h1>At your service, every step of the way</h1>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {sampleServices.map(({ icon, title, text }) => {
          const Icon = ICON_MAP[icon];
          return (
            <motion.div
              className="service-card"
              key={title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {Icon && <Icon size={40} />}
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Services;