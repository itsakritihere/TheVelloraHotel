import React from 'react';
import { useParams, Link } from 'react-router-dom';
import exploreData from '../data/exploreData.json';
import './ExploreDetails.css';

 function ExploreDetail() {
  const { id } = useParams();
  const article = exploreData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="explore-detail section">
        <p>Not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="explore-detail">
      <div className="explore-detail-hero">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="explore-detail-body section">
        <Link to="/" className="back-link">« Back</Link>
        <span className="explore-detail-icon">{article.icon}</span>
        <h1>{article.title}</h1>
        <p className="explore-detail-tags">{article.tags}</p>
        <p>{article.content}</p>
      </div>
    </div>
  );
}
export default ExploreDetail;