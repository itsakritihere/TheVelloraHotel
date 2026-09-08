import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Explore from './Explore';
import RoomsDescription from "./RoomsDescription";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import Experience from "./Experience";
import Amenties from "./Amenties";





import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import "../assets/css/style.css";
import im1 from "../assets/img/Nightview2.webp";
import im2 from "../assets/img/im2.jpg";
import im3 from "../assets/img/pr.webp";
import im4 from "../assets/img/ii.webp";
import im5 from "../assets/img/Terrace.webp"

// 👇 DEFINE IT HERE — outside and above the Home component
function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 90);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className="accent-word typewriter">
      {displayed}
      <span className="cursor">|</span>
    </span>
  );
}
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "rooms") {
      setTimeout(() => {
        const roomsSection = document.getElementById("rooms");

        if (roomsSection) {
          const headerOffset = 100;

          const elementPosition =
            roomsSection.getBoundingClientRect().top;

          const offsetPosition =
            elementPosition +
            window.pageYOffset -
            headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 200);
    } else if (location.hash) {
      const el = document.querySelector(location.hash);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="home">

<section className="hero" id="home">

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
    <div
      className="hero-slide hero-slide-5"
      style={{ backgroundImage: `url(${im5})` }}
    />

  </div>
<div className="hero-content">

  <p className="hero-sub hero-eyebrow reveal" style={{ "--d": "0.1s" }}>
    "A Home Away From Home"
  </p>

 
<h1 className="hero-title">
  <span className="reveal" style={{ "--d": "0.5s" }}>
    <TypewriterText
      text="Welcome To The Vellora"
      delay={700}
    />
  </span>
</h1>



  <p className="hero-sub reveal" style={{ "--d": "2.2s" }}>
    Experience peaceful stays, warm hospitality, and the timeless
    beauty of Mussoorie.
  </p>

</div>
  {/* <div className="hero-card">

    <h2>
      Your Peaceful Retreat in the Hills
    </h2>

    <p>
      Nestled in the beautiful hills of Mussoorie, The Vellora is a
      place to slow down, reconnect, and feel at home.
    </p>

  </div> */}

</section>
 
      <About />
      <Experience />
       <Gallery />
       <Services />
      <RoomsDescription />
      
       <Amenties />
        <Explore />
       <Testimonials />
        <FAQ />
       <Contact />
    </div>
  );
}