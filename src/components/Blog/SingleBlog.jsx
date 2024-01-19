import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleBlog = ({ blogs }) => {
  const { category, title } = useParams();

  // Find the blog with matching category and title
  const blog = blogs.find((blog) => blog.categories === category && blog.title === title);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Category: {blog.categories}</p>
      <p>{blog.body}</p>
      <Link to={`/blog/${blog.categories}/${blog.title}/full`}>Read More</Link>
    </div>
  );
};

export default SingleBlog;
