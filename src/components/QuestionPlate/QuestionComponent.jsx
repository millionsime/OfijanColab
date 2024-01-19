// QuestionComponent.jsx
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const QuestionComponent = ({ question, selectedOptionIndex, handleOptionClick, handleClearChoiceClick }) => {
  const alphabet = ["A", "B", "C", "D"];

  return (
    <div className="questionplate">
      <div className="questionText">
        <p dangerouslySetInnerHTML={{ __html: question.question_text }} />
      </div>
      <div className="choicePlate">
        {question.options.map((option, index) => (
          <label
            className={`option_box ${selectedOptionIndex === index ? 'selected' : ''} ${selectedOptionIndex !== null && option.correct === '1' ? 'correct-answer' : ''}`}
            key={index}
            onClick={() => handleOptionClick(index)}
          >
            <input
              type="radio"
              name={`option_${question.index}`}
              value={option.option}
              checked={selectedOptionIndex === index}
              readOnly
            />
            <span className="alphabet">{alphabet[index]}. </span>
            {option.option}
            <span className={`correct_is ${option.correct === '1' ? 'hi' : ''} ${selectedOptionIndex === index ? 'selected' : ''} ${question.options.some(opt => opt.selected) ? 'answered' : ''}`}><CheckIcon /></span>
          </label>
        ))}
        <h5 onClick={handleClearChoiceClick}>Clear Choice</h5>
      </div>
    </div>
  );
};

export default QuestionComponent;
