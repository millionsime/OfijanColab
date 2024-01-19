import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';
import anim from '../../assets/aguytakingexam.json';
import Lottie from 'lottie-react';

import Img1 from '../../assets/education1.png';
import Img2 from '../../assets/education2.png';
import Img3 from '../../assets/sun1.png';
import Img4 from '../../assets/sun2.png';

import './Hero.scss';

const Hero = () => {
  const [text, setText] = useState('Study with exams!');
  const [role, setRole] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the text after 20 seconds
      setText('A Place to confirm Your Study');
    }, 20000);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser !== null) {
      setIsLoggedin(true);
      const userLogged = JSON.parse(loggedUser);
      setRole(userLogged.user.role_id);
    }
  }, []);

  return (
    <section className="hero">
      <Wrapper className="hero__container">
        <div className="hero__left">
          <h1>{text}</h1>
          <p>
            Revolutionize Your Exam Preparation with Our Cutting-Edge Exam Selling Website. Unleash your
            potential with our comprehensive collection of exam resources, meticulously crafted to meet your
            specific needs.
          </p>

          <div className="hero__btn-container">
            {!isLoggedin && (
              <Link to="/signup" className="button-primary">
                Join Us
              </Link>
            )}

            <Link
              // to={isLoggedin ? (role === 3 ? '/seller' : '/requestseller') : '/Login'}
              to={isLoggedin ? ('/seller') : '/Login'}
              state={{ name: 'seller' }}
              className="button-outline"
            >
              Start Selling Answers!
            </Link>
          </div>
        </div>

        <div className="hero__right">
          <div>
            <Lottie animationData={anim} className="img-1" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
