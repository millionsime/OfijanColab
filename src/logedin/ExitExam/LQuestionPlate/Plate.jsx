import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import './plate.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import API_BASE_URL from '../../../Globals/apiConfig';
import CheckIcon from '@mui/icons-material/Check';
const Plate = () => {
    const { ofin_id } = useParams();
    const { deptId, userId } = useLoggedInUser();
    const [answered, setAnswered] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('')
    const alphabet = ["A", "B", "C", "D"];
    useEffect(() => {
        fetch(`https://server.ofijan.com/api/way_questions/${ofin_id}`)
            .then((res) => res.json())
            .then((data) => {
                setQuestionData(data);
            })
            .catch((err) => console.log(err));
    }, [ofin_id, userId]);

    useEffect(() => {
        if (questionData.length > 0) {
            const selectedOption = questionData[selectedQuestionIndex].options.find((option) => option.selected);
            setSelectedOptionIndex(selectedOption ? questionData[selectedQuestionIndex].options.indexOf(selectedOption) : null);
        }
    }, [selectedQuestionIndex, questionData]);
    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index);

        setSelectedOptionIndex(questionData[index].options.findIndex((option) => option.selected));
    };
    const handleOptionClick = (index) => {
        const updatedQuestionData = [...questionData];
        updatedQuestionData[selectedQuestionIndex].options = updatedQuestionData[selectedQuestionIndex].options.map((option, i) => ({
            ...option,
            selected: i === index
        }));
        setQuestionData(updatedQuestionData);
        setSelectedOptionIndex(index);
        //set the correct answer
        setAnswered(true)

        if (questionData[selectedQuestionIndex].options[index].correct === '1') {
            setCorrectAnswersCounter((prevCounter) => prevCounter + 1);
        } else {
            setCorrectAnswersCounter((prevCounter) => prevCounter - 1);
        }
        const selectedQuestion = questionData[selectedQuestionIndex];
        const selectedOptionID = selectedQuestion.options[selectedOptionIndex];
        axios.post(`${API_BASE_URL}/selected-answers`, {
            user_id: 1,
            question_id: selectedQuestion,
            option_id: selectedOptionID,
        })
            .then(response => {
            })
            .catch(error => {
            });
    };
    const handleNextClick = () => {
        if (selectedQuestionIndex < questionData.length - 1) {
            setSelectedQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOptionIndex(null);
        }
    };
    const handlePreviousClick = () => {
        if (selectedQuestionIndex > 0) {
            setSelectedQuestionIndex((prevIndex) => prevIndex - 1);
            setSelectedOptionIndex(null);
        }
    };
    const handleSweetAlert = (id) => {
        Swal.fire({
            text: 'Login to get the rest of the questions!',
            icon: 'alert',
            showCancelButton: true,
            confirmButtonText: 'Login Now',
            //cancelButtonText: 'Later',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `/login`;
            }
        });
    };

    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };
    const handleStepClick = (step) => {
        setCurrentStep(step);
    };
    return (
        <div className='ofijan_exam_plate'>
            {/* <div className='basicInfoPlate'>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Basic Information</th>
                    </tr>
                    <tr>
                        <td><img src={Logo} width={10} height={10} alt='profile picture' /></td>
                        <td className='basicInfoPlate2'>
                            <tr>
                                <td>Full Name Million Sime</td>
                                <td>Institution:  Ofin University</td>
                            </tr>
                            <tr><td>Enrolment Type: Regular</td>
                                <td>University ID O/UR28147/11</td>
                            </tr>
                            <tr><td>Exam Center: Ofin University</td>
                                <td>Department: Computer Science</td>
                            </tr>
                        </td>
                    </tr>
                </table>
            </div> */}
            <StepLine currentStep={currentStep} onStepClick={handleStepClick} />
            {currentStep === 1 && (
                <>
                <h5>Exam Name: </h5>
                <h5>Exam Name: </h5>
                
                </>
            )}
            {currentStep === 2 && (
                <div className='plate'>
                    <div className='flag_plate'>
                        <h5>Question {selectedQuestionIndex + 1}</h5>
                        <p>Answer saved</p>
                        <p>Marked out of 100</p>
                        <p></p>
                        <p><a href='#'>Flag Question</a></p>
                    </div>
                    <div className='question_plate'>
                        <div className="timePlate">
                            <div className="timebox1"></div>
                            <div className="timebox2">Time left 20 min</div>
                        </div>
                        <div className="questionplate">
                            {questionData.length > 0 && (
                                <>
                                    <div className="questionText">
                                        <p dangerouslySetInnerHTML={{ __html: questionData[selectedQuestionIndex].question_text }} />
                                    </div>
                                    <div className="choicePlate">
                                        {questionData[selectedQuestionIndex].options.map((option, index) => {
                                            const isSelected = selectedOptionIndex === index;
                                            const isCorrectAnswer = option.correct === '1';

                                            return (
                                                <label
                                                    className={`option_box ${isSelected ? 'selected' : ''} ${selectedOptionIndex !== null && isCorrectAnswer ? 'correct-answer' : ''}`}
                                                    key={index}
                                                    onClick={() => handleOptionClick(index)}
                                                >
                                                    <input
                                                        type='radio'
                                                        name={`option_${selectedQuestionIndex}`}
                                                        value={option.option}
                                                        checked={isSelected}
                                                        readOnly
                                                    />
                                                    <span className="alphabet">{alphabet[index]}. </span>

                                                    {option.option}
                                                    {/* <span className={`correct_is ${isCorrectAnswer ? 'hi' : ''} ${selectedQuestionIndex === index ? 'selected' : ''} ${questionData[selectedQuestionIndex].options.some(option => option.selected) ? 'answered' : ''} `} ><CheckIcon /></span> */}
                                                </label>
                                            );
                                        })}
                                        <h5>Clear Choice</h5>
                                    </div>

                                </>
                            )}
                        </div>  <div className='navigation_buttons'>
                            <button onClick={handlePreviousClick} disabled={selectedQuestionIndex === 0}>
                                Previous
                            </button>
                            <button onClick={handleNextClick} disabled={selectedQuestionIndex === questionData.length - 1}>
                                Next
                            </button>
                        </div>
                    </div>
                    <div className='answer_plate'>
                        <h5>Exam Navigation</h5>
                        <div className='answer_plate'>
                            {questionData.map((question, index) => (
                                <>
                                    <div
                                        className={`answer_box_holder ${selectedQuestionIndex === index ? 'selected' : ''} ${question.options.some(option => option.selected) ? 'answered' : ''}`}
                                        key={index}
                                        onClick={() => handleQuestionClick(index)
                                        }
                                    >
                                        <div className='answer_box'>{index + 1}</div>
                                        <div
                                            className={`answer_box ${selectedQuestionIndex === index ? 'selected' : ''} ${question.options.some(option => option.selected) ? 'answered' : ''}`}
                                            key={index}
                                            onClick={() => handleQuestionClick(index)
                                            }
                                        >
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                </div>)
            }
            {currentStep === 3 && (
                <div className='plate'>
                <div className='flag_plate'>
                    <h5>Question {selectedQuestionIndex + 1}</h5>
                    <p>Answer saved</p>
                    <p>Marked out of 100</p>
                    <p></p>
                    <p><a href='#'>Flag Question</a></p>
                </div>
                <div className='question_plate'>
                    <div className="timePlate">
                        
                    </div>
                    <div className="questionplate">
                        {questionData.length > 0 && (
                            <>
                                <div className="questionText">
                                    <p dangerouslySetInnerHTML={{ __html: questionData[selectedQuestionIndex].question_text }} />
                                </div>
                                <div className="choicePlate">
                                    {questionData[selectedQuestionIndex].options.map((option, index) => {
                                        const isSelected = selectedOptionIndex === index;
                                        const isCorrectAnswer = option.correct === '1';

                                        return (
                                            <label
                                                className={`option_box ${isSelected ? 'selected' : ''} ${selectedOptionIndex !== null && isCorrectAnswer ? 'correct-answer' : ''}`}
                                                key={index}
                                                onClick={() => handleOptionClick(index)}
                                            >
                                                <input
                                                    type='radio'
                                                    name={`option_${selectedQuestionIndex}`}
                                                    value={option.option}
                                                    checked={isSelected}
                                                    readOnly
                                                />
                                                <span className="alphabet">{alphabet[index]}. </span>

                                                {option.option}
                                                <span className={`correct_is ${isCorrectAnswer ? 'hi' : ''} ${selectedQuestionIndex === index ? 'selected' : ''} ${questionData[selectedQuestionIndex].options.some(option => option.selected) ? 'answered' : ''} `} ><CheckIcon /></span>
                                            </label>
                                        );
                                    })}
                                    <h5>Clear Choice</h5>
                                </div>

                            </>
                        )}
                    </div>  <div className='navigation_buttons'>
                        <button onClick={handlePreviousClick} disabled={selectedQuestionIndex === 0}>
                            Previous
                        </button>
                        <button onClick={handleNextClick} disabled={selectedQuestionIndex === questionData.length - 1}>
                            Next
                        </button>
                    </div>
                </div>
                <div className='answer_plate'>
                    <h5>Exam Navigation</h5>
                    <div className='answer_plate'>
                        {questionData.map((question, index) => (
                            <>
                                <div
                                    className={`answer_box_holder ${selectedQuestionIndex === index ? 'selected' : ''} ${question.options.some(option => option.selected) ? 'answered' : ''}`}
                                    key={index}
                                    onClick={() => handleQuestionClick(index)
                                    }
                                >
                                    <div className='answer_box'>{index + 1}</div>
                                    <div
                                        className={`answer_box ${selectedQuestionIndex === index ? 'selected' : ''} ${question.options.some(option => option.selected) ? 'answered' : ''}`}
                                        key={index}
                                        onClick={() => handleQuestionClick(index)
                                        }
                                    >
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

            </div>)
            }
            {/* <div className='correct_counter'>Correct Answers: {correctAnswersCounter}</div> */}
        </div>
    );
};

export default Plate;

function StepLine({ currentStep, onStepClick }) {

    return (
        <div className="step-line">
            <div className={currentStep === 1 ? 'step active' : 'step'} onClick={() => onStepClick(1)}>
                Exam Details
            </div>
            <div className={currentStep === 2 ? 'step active' : 'step'} onClick={() => onStepClick(2)}>
                Take test
            </div>
            <div className={currentStep === 3 ? 'step active' : 'step'} onClick={() => onStepClick(3)}>
                Study
            </div>

        </div>
    );
}