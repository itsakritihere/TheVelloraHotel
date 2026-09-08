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
import im5 from "../assets/img/Terrace.jpg"

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

// 👇 your existing component, unchanged below
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
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
    <span className="reveal" style={{ "--d": "0.5s" }}>Welcome to</span>{" "}
    <TypewriterText text="The Vellora" delay={700} />
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
   
{/* ABOUT */}

<About />

      {/* SERVICES */}
      <Services />
      <Gallery />
 

      {/* EXPERIENCE
      <section className="process section">
        <div className="section-head">
         <div className="faq-eyebrow">
            <span></span>
           OUR SERVICES
            <span></span>
          </div>

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
      </section> */}
      <Explore />
      <Amenties />
      <RoomsDescription />
      <Experience />
     <Contact />
     <FAQ />
      {/* TESTIMONIALS */}
     <Testimonials />

    </div>
  );
}