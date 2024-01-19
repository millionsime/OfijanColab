import React from 'react';
import './plate.scss';
const LNavigationButtons = ({ handlePreviousClick, handleNextClick, selectedQuestionIndex, length }) => (
  <div className="navigation_buttons">
    <button onClick={handlePreviousClick} disabled={selectedQuestionIndex === 0}>
      Previous
    </button>
 
    <><button onClick={handleNextClick} disabled={selectedQuestionIndex == length}>
      Next
    </button></>
    
  </div>
);

export default LNavigationButtons;
