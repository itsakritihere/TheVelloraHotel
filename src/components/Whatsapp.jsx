import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Whatsapp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;