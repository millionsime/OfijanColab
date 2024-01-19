import React from 'react';
import './plate.scss'
const AnswerBox = ({ index, isSelected, isFlagged, isAnswered, handleClick, handleSweetAlert }) => (
  <div
    className={`answer_box_holder ${isSelected ? 'selected' : ''} ${isFlagged ? 'flagged' : ''} ${isAnswered ? 'answered' : ''}`}
    onClick={() => (index < 5 ? handleClick(index) : handleSweetAlert(index))}
  >
    <div className="answer_box">{index + 1}</div>
    <div className={`answer_box ${isSelected ? 'selected' : ''} ${isAnswered ? 'answered' : ''}`} />
  </div>
);

export default AnswerBox;
