

import React from "react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./About.css";
import "../assets/css/style.css";

import im2 from "../assets/img/im2.jpg";


function About(){
  return (
    <>
<section className="about section" id="about">
  <div className="about-grid">

    <div className="about-image">
      <img
        src={im2}
        alt="The Vellora Hotel in Mussoorie"
      />
    </div>

    <div className="about-content">
      <p className="eyebrow">About The Vellora</p>

      <h2>
        A Home Away From <span className="script">Home</span>
      </h2>

      <p>
        Nestled in the serene hills of Mussoorie, The Vellora is a warm
        mountain retreat where comfort, nature, and heartfelt hospitality
        come together.
      </p>

      <p>
        Designed for peaceful getaways, our spaces invite you to slow down,
        reconnect, and enjoy the beauty of the hills.
      </p>

      <div className="about-features">
        <span>Comfortable Rooms</span>
        <span>Warm Hospitality</span>
        <span>Mountain Views</span>
        <span>Family Friendly</span>
      </div>

      <a href="#rooms" className="about-btn">
        Discover Our Stay →
      </a>
    </div>

  </div>
</section>
</>
)}
export default About;
