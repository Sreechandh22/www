// src/pages/blog/blog.js
import React from 'react';
import BlogCard from '../../components/BlogCard';
import './blog.css';

// Blog data (replace with real data from a database or API)
const blogPosts = [
  { 
    id: 1, 
    title: 'Building Effective AI Models for Healthcare', 
    excerpt: 'Delve into the process of creating AI models for healthcare, focusing on data quality, algorithm selection, and the ethical considerations necessary for impactful and fair AI applications.' 
  },
  { 
    id: 2, 
    title: 'From Backend to Frontend: Building Scalable Full-Stack Applications', 
    excerpt: 'An overview of the full-stack development process, from architecting a backend system to creating dynamic and user-friendly frontend interfaces, with lessons from my personal project experiences—including a funny hackathon story!' 
  },

  { 
    id: 3, 
    title: 'Lessons from a Dual Degree in Computer Science and Statistics', 
    excerpt: 'Explore how the combination of Computer Science and Statistics has provided me with a unique approach to problem-solving and the key lessons learned throughout my academic journey.' 
  },
  { 
    id: 4, 
    title: 'Navigating the Challenges of Being an International Student in the USA', 
    excerpt: 'A personal reflection on the experiences and challenges faced as an international student in the United States, and the strategies that helped me succeed academically and personally.' 
  },
  // Additional blog posts can be added here.
];

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">My Blog</h1>
      <div className="blog-list">
        {blogPosts.map(post => (
          <BlogCard key={post.id} id={post.id} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
    </div>
  );
};

export { Blog };
