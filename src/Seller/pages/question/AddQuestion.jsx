
import { Editor } from '@tinymce/tinymce-react';
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import API_BASE_URL from '../../../Globals/apiConfig';
import "./question.scss";
import Wrapper from '../../../components/wrapper/Wrapper'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function AddQuestion() {
    const { deptId, userId } = useLoggedInUser();
    const [reference_id, setReferenceId] = useState(1);
    const [topic_id, setTopicId] = useState(1);
    const [referenceData, setReferenceData] = useState('');
    const [topicData, setTopicData] = useState('');
    const [rcUri, setReferenceUri] = useState('');
    const [topicUri, setTopicUri] = useState('');
    const [exam_id, setExamId] = useState('');
    const [answer_description, setAnswerDescription] = useState('');
    const [question_text, setQuestionText] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [question_text_error, setQuestionTextError] = useState('');
    const [option1Error, setOption1Error] = useState('');
    const [option2Error, setOption2Error] = useState('');
    const [option3Error, setOption3Error] = useState('');
    const [option4Error, setOption4Error] = useState('');
    const [correctOptionError, setCorrectOptionError] = useState('');
    const [correctOption, setCorrectOption] = useState('');
    const [successsMessage, setSuccessMessage] = useState('');
    const handleCorrectOptionChange = (event) => {
        setCorrectOption(event.target.value);
    };
    const state = useLocation();

    useEffect(() => {
        setReferenceUri(`${API_BASE_URL}/all_references/${userId}`);
        setTopicUri(`${API_BASE_URL}/all_topics/${userId}`);
        if (state.state !== null) {
            setExamId(state.state.name)
        }
        axios.get(rcUri, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                setReferenceData(response.data.references);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        axios.get(topicUri, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                setTopicData(response.data.topics);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [rcUri]);

    const handleSubmit = async () => {

        setOption1Error('');
        setOption2Error('');
        setOption3Error('');
        setOption4Error('');
        setQuestionTextError('')
        setSuccessMessage('')

        // Validate form fields
        if (question_text.trim() === '') {
            setQuestionTextError('Question Text is required');
            setCurrentStep(1);
            return;
        }
        if (option1.trim() === '') {
            setOption1Error('Option 1 is required');
            setCurrentStep(2);
            return;
        }
        if (option2.trim() === '') {
            setOption2Error('Option 2 is required');
            setCurrentStep(2);
            return;
        }
        if (option3.trim() === '') {
            setOption3Error('Option 3 is required');
            setCurrentStep(2);
            return;
        }
        if (option4.trim() === '') {
            setOption4Error('Option 4 is required');
            setCurrentStep(2);
            return;
        }
        if (correctOption.trim() === '') {
            setCorrectOptionError('Correct option is required');
            setCurrentStep(2);
            return;
        }
        const data = {
            question_text: question_text,
            // option: options.map((option) => option.text),
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            correct: correctOption,
            exam_id: exam_id,
            reference_id: reference_id,
            tag_id: topic_id,
            teacher_id: userId,
            answer_description: answer_description,
            department_id: deptId,
        };
        console.log(data);
        axios.post(`${API_BASE_URL}/questions`, data)
            .then(response => {
                console.log(response.data);
                setSuccessMessage("Question Saved!");
                setCurrentStep(1);
                setAnswerDescription('');
                setCorrectOption('');
                setOption1('');
                setOption2('');
                setOption3('');
                setOption4('');
                setQuestionText('');
            })
            .catch(error => {
                console.log(error);
                // handle error
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
    const handleEditorChange = (content, editor) => {
        setQuestionText(content);
    };
    const handleEditorChange2 = (content, editor) => {
        setAnswerDescription(content);
    };


    // selectedExam
    return (
        <div className="question">
            <div className='gon_le_gon'>
                <h4>Add Question </h4>
                <p>You have added 5 Questions so far!</p>
                <button className="my-button" onClick={handleSubmit}>
                    <span>Submit</span>
                    <NavigateNextIcon />
                </button>

            </div>
            <div className='step_holder'>
                <StepLine currentStep={currentStep} onStepClick={handleStepClick} />
                {currentStep === 1 && (
                    <div className='step1_question'>
                        <label>Question: <div className="errormessage">{question_text_error}</div></label>
                        <Editor
                            value={question_text}
                            onEditorChange={handleEditorChange}
                            // onChange={(e) => setQuestionText(e.target.value)}
                            apiKey='no1p57zpyjhhqjd9l5i03o52suh9n0vbklw8njdgdoramilj'
                            init={{
                                height: '300', plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                mergetags_list: [
                                    { value: 'First.Name', title: 'First Name' },
                                    { value: 'Email', title: 'Email' },
                                ],
                                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                            }}
                        // initialValue="Type the question here!"
                        />
                        <div className="" onClick={handleSubmit}><p>{successsMessage}</p>
                        </div>
                    </div>
                )}
                {currentStep === 2 && (
                    <div className='choice'>
                        <div className="errormessage">{correctOptionError}</div>
                        <div className='gon-le-gon'>
                            <label>Choice 1 <div className="errormessage">{option1Error}</div></label>
                            <div className="textarea-wrapper">
                                <textarea
                                    id={`option1`}
                                    name={`option1`}
                                    value={option1}
                                    placeholder="Enter your text here"
                                    onChange={(e) => setOption1(e.target.value)}
                                    required>
                                </textarea>
                                <input
                                    type="radio"
                                    id="option1"
                                    name="correct"
                                    value="option1"
                                    checked={correctOption === "option1"}
                                    onChange={handleCorrectOptionChange}
                                    required
                                />
                                <label htmlFor="option1">Option 1</label>
                            </div>
                        </div>
                        <div className='gon-le-gon'>
                            <label>Choice 2 <div className="errormessage">{option2Error}</div></label>
                            <div className="textarea-wrapper">
                                <textarea
                                    id={`option2`}
                                    name={`option2`}
                                    value={option2}
                                    placeholder="Enter your text here"
                                    onChange={(e) => setOption2(e.target.value)}
                                    required>
                                </textarea>
                                <input
                                    type="radio"
                                    id="option2"
                                    name="correct"
                                    value="option2"
                                    checked={correctOption === "option2"}
                                    onChange={handleCorrectOptionChange}
                                    required
                                />
                                <label htmlFor="option1">Option 2</label>
                            </div>
                        </div>
                        <div className='gon-le-gon'>
                            <label>Choice 3 <div className="errormessage">{option3Error}</div></label>
                            <div className="textarea-wrapper">
                                <textarea
                                    id={`option3`}
                                    name={`option3`}
                                    value={option3}
                                    placeholder="Enter your text here"
                                    onChange={(er) => setOption3(er.target.value)}
                                    required>
                                </textarea>
                                <input
                                    type="radio"
                                    id="option3"
                                    name="correct"
                                    value="option3"
                                    checked={correctOption === "option3"}
                                    onChange={handleCorrectOptionChange}
                                    required
                                />
                                <label htmlFor="option1">Option 1</label>
                            </div>
                        </div>
                        <div className='gon-le-gon'>
                            <label>Choice 4 <div className="errormessage">{option4Error}</div></label>
                            <div className="textarea-wrapper">
                                <textarea
                                    id={`option4`}
                                    name={`option4`}
                                    value={option4}
                                    placeholder="Enter your text here"
                                    onChange={(e) => setOption4(e.target.value)}
                                    required>
                                </textarea>

                                <input
                                    type="radio"
                                    id="option1"
                                    name="correct"
                                    value="option1"
                                    checked={correctOption === "option1"}
                                    onChange={handleCorrectOptionChange}
                                    required
                                />
                                <label htmlFor="option1">Option 1</label>

                            </div>
                        </div>
                    </div>
                )}
                {currentStep === 3 && (
                    <div className='mulu_mulu'>
                        <div className='explanation'>
                            <label>
                                <small>
                                    <i>
                                        <b>Add expalanation and study tip for the selected correct answer:</b>
                                    </i>
                                </small>
                            </label>
                            <div className='SelecteCorrectAnswer'>
                                <p><label>Selected Correct answer is  </label><b><u>{correctOption}</u></b></p>
                            </div>
                            <Editor
                                value={answer_description}
                                onEditorChange={handleEditorChange2}
                                apiKey='bri3o5uila5hipo3wlvn2g31ebamxqqhrijyijvt8wmky45t'
                                init={{
                                    height: '300',
                                    plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                    tinycomments_mode: 'embedded',
                                    tinycomments_author: 'Author name',
                                    mergetags_list: [
                                        { value: 'First.Name', title: 'First Name' },
                                        { value: 'Email', title: 'Email' },
                                    ],
                                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                }}
                                initialValue="Type the description for the correct answer here!"
                            />
                        </div>
                    </div>
                )}
                {currentStep === 4 && (
                    <div className='step1_question'>
                        <section className="login">
                            <Wrapper>
                                <div className="login__container">
                                    <div className="form2">
                                        <div className="form-contents1">
                                            <div className='names'>
                                                <div className='fnames'>
                                                    <label>Topic</label>
                                                    <select
                                                        name="type"
                                                        className="dept"
                                                        value={topic_id}
                                                        onChange={(e) => setTopicId(e.target.value)}
                                                        required>
                                                        {topicData &&
                                                            topicData.map((tData) => (
                                                                <option key={tData.id} value={tData.id}>
                                                                    {tData.title}
                                                                </option>
                                                            ))}
                                                    </select>
                                                </div>
                                                <div className='fnames'>
                                                    <label>Reference</label>
                                                    <select
                                                        name="type"
                                                        className="dept"
                                                        value={reference_id}
                                                        onChange={(e) => setReferenceId(e.target.value)}
                                                        required
                                                    >
                                                        {referenceData &&
                                                            referenceData.map((rData) => (
                                                                <option key={rData.id} value={rData.id}>
                                                                    {rData.title}
                                                                </option>
                                                            ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Wrapper>
                        </section>
                    </div>
                )}
                <div className="button-container">
                    <button
                        className="previous-button"
                        onClick={handlePreviousStep}
                        disabled={currentStep === 1}
                    > <ArrowLeftIcon />
                        Previous

                    </button>
                    <button
                        className="next-button"
                        onClick={handleNextStep}
                        disabled={currentStep === 4}
                    >
                        Next
                        <ArrowRightIcon />

                    </button></div>
            </div>
        </div >
    );
}
function StepLine({ currentStep, onStepClick }) {

    return (
        <div className="step-line">
            <div className={currentStep === 1 ? 'step active' : 'step'} onClick={() => onStepClick(1)}>
                Question Text
            </div>
            <div className={currentStep === 2 ? 'step active' : 'step'} onClick={() => onStepClick(2)}>
                Choice/options
            </div>
            <div className={currentStep === 3 ? 'step active' : 'step'} onClick={() => onStepClick(3)}>
                Answer description
            </div>
            <div className={currentStep === 4 ? 'step active' : 'step'} onClick={() => onStepClick(4)}>
                Tags
            </div>
            <div className="line" style={{ width: `${(currentStep - 1) * 33.33}%` }}>
            </div>
        </div>
    );
}