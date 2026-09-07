import { useState, useEffect } from "react";
import "./Testimonials.css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import sampleTestimonials from "../data/dataTestimonial.json";

// Map JSON's plain filename strings to actual imported images
import man from "../assets/img/man.jpg";
import man1 from "../assets/img/man.webp";
import man3 from "../assets/img/man1.jpg";
import woman from "../assets/img/womn.jpg";
import woman1 from "../assets/img/wmonn.jpg";

const IMAGE_MAP = {
  "man.jpg": man,
  "man1.jpg": man1,
  "man3.jpg": man3,
  "woman.jpg": woman,
  "woman1.jpg": woman1,
};

// Resolve the JSON's string filenames into real imported image objects
const SAMPLE_TESTIMONIALS = sampleTestimonials.map((t) => ({
  ...t,
  avatar: IMAGE_MAP[t.avatar] || t.avatar,
}));

function Testimonials() {
  const [testimonials, setTestimonials] = useState(SAMPLE_TESTIMONIALS);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => {
        if (!res.ok) throw new Error("API not ready");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTestimonials(data);
        }
      })
      .catch(() => {
        console.log("Using sample testimonials (API not available yet)");
      });
  }, []);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <div
      className="container-xxl py-5 wow fadeInUp"
      data-wow-delay="0.01s"
      id="guest-testimonials"
    >
      <div className="container">
        
         <div className="faq-header">
          <div className="faq-eyebrow">
            <span></span>
            GUEST TESTIMONIALS
            <span></span>
          </div>

          <h1>
           Our Clients Say!!!
          </h1>
        </div>

        <div className="testimonial-carousel-wrapper">
          {testimonials.length > 0 && (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={1000}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                600: { slidesPerView: 2, spaceBetween: 10 },
                1000: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={`loc-${index}`}>
                  <div className="item" style={{ paddingTop: 40 }}>
                    <div className="testimonial-slide-card">
                      <div className="testimonial-slide-avatar">
                        <img src={t.avatar} alt={t.name} />
                      </div>

                      <div style={{ height: 56 }} />

                      <div style={{ display: "flex", gap: "2px", marginBottom: 10 }}>
                        {[1, 2, 3, 4, 5].map((starIndex) => {
                          const fillValue = Math.max(
                            0,
                            Math.min(1, t.rating - (starIndex - 1))
                          );
                          const fillPercent = fillValue * 100;

                          return (
                            <svg
                              key={starIndex}
                              viewBox="0 0 24 24"
                              style={{ width: "18px", height: "18px" }}
                            >
                              <defs>
                                <linearGradient id={`grad-${t._id}-${starIndex}`}>
                                  <stop offset={`${fillPercent}%`} stopColor="#FFD700" />
                                  <stop offset={`${fillPercent}%`} stopColor="#ccc" />
                                </linearGradient>
                              </defs>
                              <path
                                fill={`url(#grad-${t._id}-${starIndex})`}
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                              />
                            </svg>
                          );
                        })}
                      </div>

                      <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.8, marginBottom: 14 }}>
                        {t.text?.substring(0, 145)}...{" "}
                        <span
                          onClick={() => openModal(t)}
                          style={{ color: "var(--primary)", fontWeight: 600, cursor: "pointer" }}
                        >
                          Read More
                        </span>
                      </p>

                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--primary)", marginBottom: 2 }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--primary)", opacity: 0.8 }}>
                        {t.propertyId?.title || t.property}
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingBottom: 40 }}></div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      {/* ---------- MODAL ---------- */}
      {isModalOpen && selectedTestimonial && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-btn">
              &times;
            </button>

            <div style={{ textAlign: "center" }}>
              <img
                src={selectedTestimonial.avatar}
                alt={selectedTestimonial.name}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  marginBottom: 15,
                  border: "3px solid var(--primary)",
                  objectFit: "cover",
                }}
              />
              <h4 style={{ color: "var(--primary)", marginBottom: 5 }}>
                {selectedTestimonial.name}
              </h4>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>
                {selectedTestimonial.propertyId?.title || selectedTestimonial.property}
              </p>

              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, textAlign: "left" }}>
                {selectedTestimonial.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;