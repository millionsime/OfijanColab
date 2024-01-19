import React, { useState, useEffect } from 'react';
import './App.scss';

const CategoryDiv = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {

    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    
  }, []);
  const handleScrollLeft = () => {
      const categoryDiv = document.querySelector('.category-div');
      categoryDiv.scrollLeft -= 100;
    };
  
    const handleScrollRight = () => {
      const categoryDiv = document.querySelector('.category-div');
      categoryDiv.scrollLeft += 100;
    };

  return (
    <div
      className={`category-div ${isHidden ? 'hidden' : ''}`}
      style={{ position: 'fixed', top: 0, width: '40%', zIndex: 999, overflowX: 'auto' }}>
      <ul className='category-list'>
        <li><a href="#">Exam /</a></li>
        <li><a className={`category-item ${isActive? 'active' : ''}`} href="#">Study tips /</a></li>
        <li><a href="#">Books /</a></li>
        <li><a href="#">News /</a></li>
        <li><a href="#">Entertainment /</a></li>
      </ul>
    </div>
  );
};

export default CategoryDiv;
