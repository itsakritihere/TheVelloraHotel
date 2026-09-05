
import React, { useState } from "react";
import "./FAQ.css";

import hotelData from "../data/exploreata.json";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = hotelData.faqs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        {/* HEADER */}
        <div className="faq-header">
          <div className="faq-eyebrow">
            <span></span>
            GOOD TO KNOW
            <span></span>
          </div>

          <h2>
            Frequently Asked
            <br />
            <em>Questions</em>
          </h2>

          <p>
            Everything you need to know before your stay at The Vellora,
            Mussoorie.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "faq-item--active" : ""
              }`}
              key={faq.id}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq-question-text">
                  {faq.question}
                </span>

                <span className="faq-icon">
                  <i
                    className={
                      activeIndex === index
                        ? "bi bi-dash"
                        : "bi bi-plus"
                    }
                  ></i>
                </span>
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "faq-answer--open" : ""
                }`}
              >
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="faq-bottom">
          <p>Still have questions?</p>

          <a href="/contact" className="faq-contact">
            Talk to us
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

