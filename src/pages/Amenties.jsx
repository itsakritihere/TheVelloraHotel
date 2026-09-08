import { motion } from "framer-motion";
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

        {/* Amenities Grid */}
        <div className="row g-4">

          {amenitiesContent.amenities.map((amenity, index) => (

            <motion.div
              className="col-12 col-sm-6 col-lg-3"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >

              <div className="amenity-card">

                <div className="amenity-icon">
                  <i className={`bi bi-${amenity.icon}`}></i>
                </div>

                <h4 className="amenity-name">
                  {amenity.title}
                </h4>

                {amenity.note && (
                  <span className="amenity-note">{amenity.note}</span>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Amenties;