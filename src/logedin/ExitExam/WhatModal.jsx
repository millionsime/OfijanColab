import React from 'react';
import { Link } from 'react-router-dom';
import './whatmodal.scss';

const WhatModal = ({ examID, onClose }) => {
  const handleTestMyself = () => {
    console.log("Test Myself");
  };

  const handleStudyMore = () => {
    console.log("Study More");
  };
  const [isOpen, setIsOpen] = React.useState(true);

 
  return (
    <div className={`modalw ${isOpen ? 'open' : 'closed'}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-contentw">
        <button className="close-btnw" onClick={onClose}>X</button>
        <div className="card-containerw">
          
          <h3>What do you want to do with this exam?</h3>
          <div className="combined-cardw">
          <Link to={`/ofijan_exam_plate/testmode/${examID}`} className="cardw positivew">
              <h4>Test Myself</h4>
              <ul>
                <p>Take a practice exam to see how well you know the material.</p>
                
              </ul>
              
            </Link>
            </div>
            <div className="combined-cardw">
            <Link to={`/ofijan_exam_plate/studymode/${examID}`} className="cardw negativew">
              <div onClick={handleStudyMore}>
                <h4>Study More</h4>
                <ul>
                  <li><p>You will be able to see the answer and description of each question.</p></li>
                  <li><p>Review the material and learn more before taking the exam.</p></li>
                  </ul>
                <p></p>
                
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatModal;
