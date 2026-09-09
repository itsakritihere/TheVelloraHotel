import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

// 👇 Reusable scroll-reveal wrapper — fades any section up into view
function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

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
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerOffset = 100;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 200);
    } else if (location.hash) {
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
          <div className="hero-slide hero-slide-1" style={{ backgroundImage: `url(${im1})` }} />
          <div className="hero-slide hero-slide-2" style={{ backgroundImage: `url(${im2})` }} />
          <div className="hero-slide hero-slide-3" style={{ backgroundImage: `url(${im3})` }} />
          <div className="hero-slide hero-slide-4" style={{ backgroundImage: `url(${im4})` }} />
          <div className="hero-slide hero-slide-5" style={{ backgroundImage: `url(${im5})` }} />
        </div>

        <div className="hero-content">
          <p className="hero-sub hero-eyebrow reveal" style={{ "--d": "0.1s" }}>
            "A Home Away From Home"
          </p>

          <h1 className="hero-title">
            <span className="reveal" style={{ "--d": "0.5s" }}>
              <TypewriterText text="Welcome To The Vellora" delay={700} />
            </span>
          </h1>

          <p className="hero-sub reveal" style={{ "--d": "2.2s" }}>
            Experience peaceful stays, warm hospitality, and the timeless
            beauty of Mussoorie.
          </p>
        </div>
      </section>

      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Experience /></AnimatedSection>
      <AnimatedSection><Gallery /></AnimatedSection>
      <AnimatedSection><Services /></AnimatedSection>
      <AnimatedSection><RoomsDescription /></AnimatedSection>
      <AnimatedSection><Amenties /></AnimatedSection>
      <AnimatedSection><Explore /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <AnimatedSection><Contact /></AnimatedSection>
    </div>
  );
}