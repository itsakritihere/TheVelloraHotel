import React, { useState } from "react";
import "./Gallery.css";
import im2 from "../assets/img/im2.jpg";
import im3 from "../assets/img/oo.jpg";
import recep from "../assets/img/reception.webp";

// Replace with real image paths / CMS data
const galleryImages = [
    {id: 1,src: im2, alt: "Hillside sunset view" },
  { id: 2, src: im3, alt: "ning campfire" },
  { id: 3, src: recep, alt: "nsjdi"},
  { id: 4, src: "/assets/gallery/room-view.jpg", alt: "Room with a view" },
  { id: 5, src: "/assets/gallery/entrance.jpg", alt: "Property entrance" },
  { id: 6, src: "/assets/gallery/garden.jpg", alt: "Garden path" },
  { id: 7, src: "/assets/gallery/mosaic.jpg", alt: "Mosaic tiling detail" },
  { id: 8, src: "/assets/gallery/patio.jpg", alt: "Colourful patio seating" },
  { id: 9, src: "/assets/gallery/bikes.jpg", alt: "Bicycles parked outside" },
  { id: 10, src: "/assets/gallery/dusk.jpg", alt: "Dusk over the hills" },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = galleryImages.length;

  const goTo = (index) => {
    const next = (index + total) % total;
    setActiveIndex(next);
  };

  return (
    <section className="gallery-description py-5">
      <div className="container text-center mb-4">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
          <span className="gallery-description__rule" />
          <span className="gallery-description__eyebrow">Gallery</span>
          <span className="gallery-description__rule" />
        </div>
        <h2 className="gallery-description__title mb-0">
          The Quercus Experience is more than a{" "}
          <span className="accent">Vacation</span>!
        </h2>
      </div>

      <div className="container">
        <div className="gallery-description__viewer">
          <button
            type="button"
            className="gallery-description__nav gallery-description__nav--prev"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left" />
          </button>

          <div className="gallery-description__image-wrap">
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="gallery-description__image"
            />
            <span className="gallery-description__counter">
              {activeIndex + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            className="gallery-description__nav gallery-description__nav--next"
            onClick={() => goTo(activeIndex + 1)}
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
              onClick={() => setActiveIndex(index)}
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