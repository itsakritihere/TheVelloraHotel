
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Amenties.css";

import amenitiesContent from "../data/dataAmenties.json";

function Amenties() {
  return (
    <section className="amenities-section" id="amenities">
      <div className="container">

        {/* Section Header */}
        <div className="faq-header">
          <div className="faq-eyebrow">
            <span></span>
            {amenitiesContent.sectionTitle}
            <span></span>
          </div>

          <h1>{amenitiesContent.sectionHeading}</h1>
        </div>

        {/* Amenities Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="amenities-swiper"
          >
            {amenitiesContent.amenities.map((amenity, index) => (
              <SwiperSlide key={index}>
                <div className="amenity-card">
                  <div className="amenity-icon">
                    <i className={`bi bi-${amenity.icon}`}></i>
                  </div>

                  <h4 className="amenity-name">
                    {amenity.title}
                  </h4>

                  {amenity.note && (
                    <span className="amenity-note">
                      {amenity.note}
                    </span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
export default Amenties;
