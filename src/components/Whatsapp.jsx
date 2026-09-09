import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Whatsapp.css";
import whatsappConfig from "../data/whatsapp.json";

const { WHATSAPP_PHONE_NUMBER, WHATSAPP_CHAT_MESSAGE } = whatsappConfig;

const WhatsAppButton = () => {
  const encodedMessage = encodeURIComponent(WHATSAPP_CHAT_MESSAGE);
  const whatsappLink = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
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