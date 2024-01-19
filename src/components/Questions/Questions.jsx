import React from 'react';
import './Questions.scss';

const Questions = () => {
  return (
    <div className="question">
      <h2>will abdu bring questions view?</h2>
      <ul className="choices">
        <li>yes</li>
        <li>of cource</li>
        <li>definetly</li>
        <li>exactly</li>
      </ul>
      <a href='#' className='button-primary'>Next</a>
    </div>
  );
};

export default Questions;
