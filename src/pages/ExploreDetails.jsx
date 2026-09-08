import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import exploreData from "../data/exploreData.json";
import "./ExploreDetails.css";

import imTrek from "../assets/img/aa.webp";
import imViews from "../assets/img/mountain.jpg";
import imShop from "../assets/img/Streets.jpg";
import imFood from "../assets/img/Food.jpg";

const IMAGE_MAP = {
  "ii.webp": imTrek,
  "explore-views.jpg": imViews,
  "explore-shop.jpg": imShop,
  "explore-food.jpg": imFood,
};

function ExploreDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const rawArticle = exploreData.find((item) => item.id === id);

  const article = rawArticle
    ? {
        ...rawArticle,
        image: IMAGE_MAP[rawArticle.image] || rawArticle.image,
      }
    : null;

  const currentIndex = exploreData.findIndex((item) => item.id === id);

  const nextRaw =
    exploreData[(currentIndex + 1) % exploreData.length];

  const nextArticle = {
    ...nextRaw,
    image: IMAGE_MAP[nextRaw.image] || nextRaw.image,
  };

  const backToExplore = () => {
    navigate("/", {
      state: {
        scrollTo: "explore",
      },
    });
  };

  if (!article) {
    return (
      <div className="explore-not-found">
        <h2>This page seems to have wandered off the trail.</h2>

        <Link to="/" className="back-link">
          « Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="explore-detail">
      {/* HERO — image + title only */}
      <div className="explore-detail-hero">
        <img src={article.image} alt={article.title} />

        <div className="explore-detail-hero-overlay" />

        <div className="explore-detail-hero-content">
          <span className="explore-detail-icon">
            {article.icon}
          </span>

          <h1>{article.title}</h1>
        </div>
      </div>

      {/* WHITE CONTENT SECTION */}
      <div className="explore-detail-body section">
        <button
          type="button"
          className="back-link"
          onClick={backToExplore}
        >
          « Back to Explore
        </button>

        <p className="explore-detail-tags">
          {article.tags}
        </p>

        <div className="explore-detail-content">
          <p>{article.content}</p>
        </div>

        <div className="explore-detail-highlights">
          <h2>Not to Miss</h2>

          <ol className="explore-detail-highlights-list">
            {article.highlights.map((item, index) => (
              <li key={item.name}>
                <span className="explore-detail-highlight-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="explore-detail-next">
          <span>Next up</span>

          <Link
            to={`/explore/${nextArticle.id}`}
            className="explore-detail-next-link"
          >
            {nextArticle.icon} {nextArticle.title} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreDetail;

