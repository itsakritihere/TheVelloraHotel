import React, { useState, useEffect } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";

import hotelData from "../data/exploreata.json";

const FAQ = () => {
  const [faqs, setFaqs] = useState(hotelData.faqs);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("/api/faqs")
      .then((res) => {
        if (!res.ok) throw new Error("API not ready");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data);
        }
      })
      .catch(() => {
        console.log("Using sample FAQs (API not available yet)");
      });
  }, []);

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

          <h1>
            Frequently Asked
            <br />
            Questions
          </h1>

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

  <Link to="#contact" className="faq-contact">
    Talk to us
    <i className="bi bi-arrow-up-right"></i>
  </Link>
</div>

      </div>
    </section>
  );
};

export default FAQ;