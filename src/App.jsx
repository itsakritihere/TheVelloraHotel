import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExploreDetail from './pages/ExploreDetails'
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/Whatsapp"
import RoomDetails from "./pages/RoomDetails";
import Contact from './pages/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";



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
      }, 90); // typing speed per character
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
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}
// no export here — it's a helper used only inside this file

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/room/:id" element={<RoomDetails />}/>
        <Route path="/explore/:id" element={<ExploreDetail />} />
      </Routes>

      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}