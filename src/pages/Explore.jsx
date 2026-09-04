import React from 'react';
import { Link } from 'react-router-dom';
import exploreData from '../data/exploreData.json';
import './Explore.css';
import trekImg from '../assets/img/view.jpg';
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
  return (
    <section className="explore">
      <div className="explore-inner section">
        <div className="section-head">
          <p className="eyebrow">Do You Know?</p>
          <h2>Explore Mussoorie</h2>
          <p className="explore-lead">Beyond your stay, discover the hills.</p>
        </div>

        <div className="explore-grid">
          {exploreData.map((item, idx) => (
            <div
              className={`explore-card ${idx % 2 === 0 ? 'is-up' : 'is-down'}`}
              key={item.id}
            >
              <span className="explore-num">{String(idx + 1).padStart(2, '0')}</span>

              <div className="explore-img">
                <img src={imageMap[item.id]} alt={item.title} />
                <span className="explore-icon">{item.icon}</span>
                <span className="explore-pill">{item.title}</span>
              </div>

              <div className="explore-body">
                <p className="explore-tags">{item.tags}</p>
                <p className="explore-excerpt">{item.excerpt}</p>
                <Link to={`/explore/${item.id}`} className="explore-link">
                  <span>Explore</span>
                  <span className="explore-link-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}