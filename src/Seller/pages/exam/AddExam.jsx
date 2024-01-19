import React, { useState, useEffect } from 'react';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Wrapper from '../../../components/wrapper/Wrapper';
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import API_BASE_URL from '../../../Globals/apiConfig';

export default function AddExam() {

  const [exam_name, setExamName] = useState('');
  const [description, setDescription] = useState('');
  const [exam_duration, setDuration] = useState('');
  const [teacher_id, setUserId] = useState('');
  const [department_id, setDepartmentId] = useState('');
  const [exam_grade, setGrade] = useState(100);
  const [exam_date, setExamDate] = useState("2023-10-27");
  const [nameError, setNameError] = useState('');
  const [durationError, setDurationError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const {deptId, userId } = useLoggedInUser();
  const [addExamUri, setAddExamUri] = useState('');
  useEffect(() => {
    setAddExamUri(`${API_BASE_URL}/add_exams`);
    setDepartmentId(deptId);
    setUserId(userId);
  }, []);

  const handleSubmit = async () => {

    setNameError('');
    setDurationError('');
    setDescriptionError('');
    setSuccessMessage('');

    if (exam_name.trim() === '') {
      setNameError('Exam name is required');
      return;
    }
    if (exam_duration.trim() === '') {
      setDurationError('Duration is required');
      return;
    }
    if (description.trim() === '') {
      setDescriptionError('Description is required');
      return;
    }

    try {
      const response = await fetch(addExamUri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exam_name, exam_duration, description, department_id, exam_grade, exam_date, teacher_id }),
      });

      if (response.ok) {
        console.log(response);
        console.log('Exam data sent successfully!');
        // Reset the form fields
        setExamName('');
        setDescription('');
        setDuration('');
        setSuccessMessage('Exam added successfully!');
      } else {
        console.log(response);
        console.log('Failed to send exam data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="topic">
      <h3>Add Exam</h3>
      <span><i><PriorityHighIcon />"Grouping questions within exams enables organized packaging and presentation.
        By bundling questions under exam names, you can showcase your work in a more appealing and controlled
        manner, streamlining clicks and driving sales."</i></span>
      <br></br>
      <section className="login">
        <Wrapper>
          <div className="login__container">
            <div className="form2">
              <div className="form-contents1">
                <div className="department">
                  <div className="fnames">
                    <label>Exam Name</label>
                    <input
                      type="text"
                      placeholder="2016 Model Exam for Accounting Department (Avoid using vague titles)"
                      className="dept"
                      required
                      value={exam_name}
                      onChange={(e) => setExamName(e.target.value)} />
                    <div className="errormessage">{nameError}</div>
                  </div>
                  <div className="fnames">
                    <label>Duration(<small> in minutes </small>)</label>
                    <input
                      type="number"
                      placeholder=' 10 min'
                      className="dept"
                      required
                      value={exam_duration}
                      onChange={(e) => setDuration(e.target.value)} />
                    <div className="errormessage">{durationError}</div>
                  </div>
                  <div className="fnames">
                    <label>Description</label>
                    <input type="text"
                      placeholder='Those Questions will definitely appear on your exit exam'
                      className="dept"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required />
                    <div className="errormessage">{descriptionError}</div>
                  </div>
                </div>
                <div className="summit-signup">
                  <button className='sigbtn' onClick={handleSubmit}>Save</button>
                  {successMessage && <div className="success-message">{successMessage}</div>}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
