import React from 'react'
import './BlogActions.scss'
import { FaThumbsUp, FaShare, FaComment } from 'react-icons/fa';
const BlogActions = (blog) => {
  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  return (
    <div className='blog-actions'>
                  <button className='button-like'>
                    <FaThumbsUp />
                    &nbsp;  Like  {blog.likes}
                  </button>
                  <button onClick={ copy } className='button-share'>
                    <FaShare />
                    &nbsp;    Share  {blog.shares}
                  </button>
                  <button className='button-comment'>
                    <FaComment />
                    &nbsp;    Comment  {blog.comments}
                  </button>

    </div>
  )
}

export default BlogActions
