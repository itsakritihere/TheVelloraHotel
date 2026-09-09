import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import exploreData from '../data/exploreData.json';
import './Explore.css';
import trekImg from '../assets/img/teck.jpg';
import viewsImg from '../assets/img/buddha.jpg';
import shopImg from '../assets/img/Streets.jpg';
import foodImg from '../assets/img/Food.jpg';

const imageMap = {
  'trek-explore': trekImg,
  'mountain-views': viewsImg,
  'shop-stroll': shopImg,
  'taste-hills': foodImg,
};

export default function Explore() {
  const [items, setItems] = useState(exploreData);

  useEffect(() => {
    fetch('/api/explore')
      .then((res) => {
        if (!res.ok) throw new Error('API not ready');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setItems(data);
        }
      })
      .catch(() => {
        console.log('Using sample explore data (API not available yet)');
      });
  }, []);

  return (
    <section className="explore" id="explore">
      <div className="explore-inner section">

        <div className="faq-header">
          <div className="faq-eyebrow">
            <span></span>
            EXPLORE MUSSORRIE
            <span></span>
          </div>

          <h1>
            Let the mountains call you home
          </h1>
        </div>

        <div className="explore-grid">
          {items.map((item, idx) => (
            <Link
              to={`/explore/${item.id}`}
              className={`explore-card ${idx === 0 ? 'explore-card--featured' : ''}`}
              key={item.id}
              style={{ '--delay': `${idx * 0.12}s` }}
            >
              <div className="explore-img">
                <img src={imageMap[item.id] || item.image} alt={item.title} />
                <div className="explore-img-overlay" />
                <span className="explore-icon">{item.icon}</span>
                <span className="explore-pill">{item.title}</span>
              </div>

              <div className="explore-body">
                <p className="explore-tags">{item.tags}</p>
                <p className="explore-excerpt">{item.excerpt}</p>
                <span className="explore-link">
                  <span>Explore</span>
                  <span className="explore-link-arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}