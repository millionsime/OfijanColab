import "../list.scss";
import "./question.scss";
import './styles.css'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import API_BASE_URL from '../../../Globals/apiConfig';
import Wrapper from '../../../components/wrapper/Wrapper'
import { Link } from "react-router-dom";

export default function Question() {
  const { deptId, userId } = useLoggedInUser();
  const [questionUri, setQuestionUri] = useState('');
  const [userID, setUserID] = useState();
  const [questionData, setQuestionData] = useState('');
  const [questionOption, setQuestionOption] = useState('');
  const alphabet = ["A", "B", "C", "D"];
  useEffect(() => {
    setUserID(userId);
    setQuestionUri(`${API_BASE_URL}/all_questions/${userId}`);
    axios.get(questionUri)
      .then(response => {
        setQuestionData(response.data.questions);
        setQuestionOption(response.data.questions.options)
        console.log(response.data.questions)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [questionUri]);

  return (
    <div className="question">
      <Wrapper>
      {questionData && questionData.map((question) => (
        <div key={question.id}>
          <h2 dangerouslySetInnerHTML={{ __html: question.question_text }}/>
          {question.options.map((option, index) => (
            <div key={option.id} className="gon-le-gon">
              <span className="alphabet">{alphabet[index]}. </span>
              <span className={`option-text ${option.correct === 1 ? "correct" : ""}`}>
                {option.option}
              </span>
              <span className="icon edit-icon">✎</span>
              <span className="icon delete-icon">✖</span>
            </div>
          ))}
        </div>
      ))}
      </Wrapper>
    </div>
    
  );
}
