import React from 'react';
import './plate.scss'
const LAnswerBox = ({ index, isSelected, isFlagged, isAnswered, handleClick, handleSweetAlert }) => (
  <div
    className={`answer_box_holderl ${isSelected ? 'selected' : ''} ${isFlagged ? 'flagged' : ''} ${isAnswered ? 'answered' : ''}`}
    onClick={() => handleClick(index)}
  >
    <div className="answer_box">{index + 1}</div>
    <div className={`answer_box ${isSelected ? 'selected' : ''} ${isAnswered ? 'answered' : ''}`} />
  </div>
);

export default LAnswerBox;

