
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Explore from './Explore';
import RoomsDescription from "./RoomsDescription";
import Gallery from "./Gallery";
import FAQ from "./FAQ";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  FaArrowRight,
  FaBed,
  FaUtensils,
  FaConciergeBell,
  FaCalendarAlt,
  FaMountain,
  FaSpa,
  FaSmile,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import "../assets/css/style.css";
import im1 from "../assets/img/oo.jpg";
import im2 from "../assets/img/im2.jpg";
import im3 from "../assets/img/pr.webp";
import im4 from "../assets/img/ii.webp";



const steps = [
  {
    icon: FaMountain,
    title: "Arrive in the Hills",
    text: "Leave the everyday behind and arrive at The Vellora, your peaceful retreat in Mussoorie.",
  },
  {
    icon: FaSpa,
    title: "Relax & Reconnect",
    text: "Unwind in comfortable surroundings, enjoy thoughtful hospitality, and take in the beauty around you.",
  },
  {
    icon: FaSmile,
    title: "Create Memories",
    text: "Enjoy every moment and take home memories of a warm, peaceful stay in the Queen of Hills.",
  },
];

const testimonials = [
  {
    name: "Aryan Sharma",
    place: "Bengaluru",
    img: "/assets/img/testimony3.jpg",
    quote:
      "The Vellora felt like a true home away from home. Beautiful surroundings and wonderful hospitality.",
  },
  {
    name: "Jai Aggrawal",
    place: "New Delhi",
    img: "/assets/img/testimony4.jpg",
    quote:
      "A peaceful stay in Mussoorie with a beautiful atmosphere. Everything felt warm and welcoming.",
  },
  {
    name: "Shreya Desai",
    place: "Dehradun",
    img: "/assets/img/testimony.jpg",
    quote:
      "The perfect place to slow down, relax, and enjoy the beauty of the hills.",
  },
  {
    name: "Ankit Das",
    place: "Pune",
    img: "/assets/img/testimony1.jpg",
    quote:
      "Beautiful property, comfortable rooms, and hospitality that genuinely makes you feel at home.",
  },
];

export default function Home() {
  return (
    <div className="home">

 <section className="hero">

  <div className="hero-slideshow">

    <div
      className="hero-slide hero-slide-1"
      style={{ backgroundImage: `url(${im1})` }}
    />

    <div
      className="hero-slide hero-slide-2"
      style={{ backgroundImage: `url(${im2})` }}
    />

    <div
      className="hero-slide hero-slide-3"
      style={{ backgroundImage: `url(${im3})` }}
    />

    <div
      className="hero-slide hero-slide-4"
      style={{ backgroundImage: `url(${im4})` }}
    />

  </div>

  <div className="hero-overlay"></div>

  <div className="hero-content">

    <p className="eyebrow">
      A Home Away From Home
    </p>

    <h1>
      Welcome to The Vellora
    </h1>

    <p className="hero-sub">
      Experience peaceful stays, warm hospitality, and the timeless
      beauty of Mussoorie.
    </p>

  </div>

  <div className="hero-card">

    <p className="eyebrow">
      Discover The Vellora
    </p>

    <h2>
      Your Peaceful Retreat in the Hills
    </h2>

    <p>
      Nestled in the beautiful hills of Mussoorie, The Vellora is a
      place to slow down, reconnect, and feel at home. Come for the
      views, stay for the warmth, and leave with memories to cherish.
    </p>

  </div>

</section>
   
{/* ABOUT */}

<About />

      {/* SERVICES */}
      <Services />
      <Gallery />

      {/* EXPERIENCE */}
      <section className="process section">
        <div className="section-head">
          <p className="eyebrow">The Vellora Experience</p>

          <h2>Stay. Relax. Remember.</h2>
        </div>

        <div className="process-grid">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div className="process-card" key={title}>
              <span className="process-badge">
                <Icon size={36} />
              </span>

              <h3>
                Step {i + 1}: {title}
              </h3>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <Explore />
      <RoomsDescription />
     <Contact />
     <FAQ />
      {/* TESTIMONIALS */}
     <Testimonials />

    </div>
  );
}

