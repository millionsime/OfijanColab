import React from 'react';
import './plate.scss';
const NavigationButtons = ({ handlePreviousClick, handleNextClick, selectedQuestionIndex, isLoggedIn,handleSweetAlert }) => (
  <div className="navigation_buttons">
    <button onClick={handlePreviousClick} disabled={selectedQuestionIndex === 0}>
      Previous
    </button>
   {!isLoggedIn && selectedQuestionIndex === 4?  (
      <button onClick={() => handleSweetAlert(4)}>
        Next
      </button>
    ):
    (<><button onClick={handleNextClick} disabled={selectedQuestionIndex === 4}>
      Next
    </button></>)}
    
  </div>
);

export default NavigationButtons;
