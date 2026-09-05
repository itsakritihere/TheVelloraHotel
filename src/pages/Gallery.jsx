import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import im2 from "../assets/img/im2.jpg";
import im3 from "../assets/img/oo.jpg";
import recep from "../assets/img/reception.webp";

// Replace with real image paths / CMS data
const galleryImages = [
  { id: 1, src: im2, alt: "Hillside sunset view" },
  { id: 2, src: im3, alt: "ning campfire" },
  { id: 3, src: recep, alt: "nsjdi" },
  { id: 4, src: "/assets/gallery/room-view.jpg", alt: "Room with a view" },
  { id: 5, src: "/assets/gallery/entrance.jpg", alt: "Property entrance" },
  { id: 6, src: "/assets/gallery/garden.jpg", alt: "Garden path" },
  { id: 7, src: "/assets/gallery/mosaic.jpg", alt: "Mosaic tiling detail" },
  { id: 8, src: "/assets/gallery/patio.jpg", alt: "Colourful patio seating" },
  { id: 9, src: "/assets/gallery/bikes.jpg", alt: "Bicycles parked outside" },
  { id: 10, src: "/assets/gallery/dusk.jpg", alt: "Dusk over the hills" },
];

const SLIDE_INTERVAL = 3500; // ms between auto slides

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = galleryImages.length;
  const intervalRef = useRef(null);

  const goTo = (index) => {
    const next = (index + total) % total;
    setActiveIndex(next);
  };

  // Auto-advance slideshow
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, SLIDE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, total]);

  // Manual nav resets the timer so it doesn't jump right after a click
  const handleManualNav = (fn) => {
    clearInterval(intervalRef.current);
    fn();
  };

  return (
    <section className="gallery-description py-4">
      <div className="container text-center mb-3">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
          <span className="gallery-description__rule" />
          <span className="gallery-description__eyebrow">Gallery</span>
          <span className="gallery-description__rule" />
        </div>
        <h2 className="gallery-description__title mb-0">
          The Vellora Experience is more than a{" "}
          <span className="accent">Vacation</span>!
        </h2>
      </div>

      <div className="container">
        <div
          className="gallery-description__viewer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            className="gallery-description__nav gallery-description__nav--prev"
            onClick={() => handleManualNav(() => goTo(activeIndex - 1))}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left" />
          </button>

          <div className="gallery-description__image-wrap">
            {galleryImages.map((img, index) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={
                  "gallery-description__image" +
                  (index === activeIndex
                    ? " gallery-description__image--active"
                    : "")
                }
              />
            ))}

            {/* progress bar — restarts every slide via the `key` trick */}
            <div className="gallery-description__progress">
              <span
                key={activeIndex}
                className="gallery-description__progress-fill"
                style={{
                  animationDuration: `${SLIDE_INTERVAL}ms`,
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              />
            </div>

            <span className="gallery-description__counter">
              {activeIndex + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            className="gallery-description__nav gallery-description__nav--next"
            onClick={() => handleManualNav(() => goTo(activeIndex + 1))}
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>

        <div className="gallery-description__thumbs">
          {galleryImages.map((img, index) => (
            <button
              type="button"
              key={img.id}
              className={
                "gallery-description__thumb" +
                (index === activeIndex
                  ? " gallery-description__thumb--active"
                  : "")
              }
              onClick={() => handleManualNav(() => setActiveIndex(index))}
              aria-label={`View image ${index + 1}`}
            >
              <img src={img.src} alt={img.alt} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;