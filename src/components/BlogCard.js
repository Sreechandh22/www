// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';  // Optional: Styling for blog cards

const BlogCard = ({ id, title, excerpt }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Link to={`/blog/${id}`} className="read-more">Read More</Link>
    </div>
  );
};

export default BlogCard;
