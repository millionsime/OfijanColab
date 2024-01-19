import React, { useState, useEffect } from 'react';
import Wrapper from '../../../components/wrapper/Wrapper';
import "./reference.scss";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import API_BASE_URL from '../../../Globals/apiConfig';
const AddReference = () => {
  const { deptId, userId } = useLoggedInUser();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('Book');
  const [url, setUrlSource] = useState('');
  const [author, setAuthor] = useState('');
  const [publication_date, setPubDate] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [urlError, setUrlError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [pubDateError, setPubDateError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [user_id, setUserID] = useState('');
  const [department_id, setDepartmentId] = useState('');
  const [addReferenceUri, setAddReferenceUri] = useState('');
  useEffect(() =>{
setAddReferenceUri(`${API_BASE_URL}/add_references`);
setDepartmentId(deptId);
setUserID(userId);
  });


  const handleSubmit = async () => {
    // Reset error messages and success message
    setTitleError('');
    setDescriptionError('');
    setUrlError('');
    setAuthorError('');
    setPubDateError('');
    setSuccessMessage('');
  
    // Validate form fields
    if (title.trim() === '') {
      setTitleError('Title is required');
      return;
    }

    try {
      const response = await fetch(addReferenceUri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, type, url, author, user_id, department_id, publication_date }),
      });

      if (response.ok) {
        console.log('Reference data sent successfully!');
        // Reset the form fields and display success message
        setTitle('');
        setDescription('');
        setType('Book');
        setUrlSource('');
        setAuthor('');
        setPubDate('');
        setSuccessMessage('Reference added successfully!');
      } else {
        console.log('Failed to send reference data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="reference">
      <h3>Add reference </h3>
      <span><i><PriorityHighIcon />References are a valuable addition to your questions as they provide
        comprehensive  information related to the topic, thereby increasing the interest and engagement of
        students (your clients). By including references, you enable students to access additional
        resources that enhance their understanding and knowledge of the subject matter associated with the question.</i></span>
      <br></br>
      <span><PriorityHighIcon />It is better to provide straightforward resources that support exam preparation and ensure success in assessments.</span>
      <section className="login">
        <Wrapper>
          <div className="login__container">
            <div className="form2">
              <div className="form-contents1">
                <div className="department">
                  <div className="names">
                    <div className="fnames">
                      <label>Title</label>
                      <input
                        type="text"
                        placeholder='Title(required)'
                        className="dept"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                      <div className="errormessage">{titleError}</div>
                    </div>
                    <div className="fnames">
                      <label>Description</label>
                      <input
                        type="text"
                        placeholder='Description for the reference(optional)'
                        className="dept"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                      <div className="errormessage">{descriptionError}</div>
                    </div>
                  </div>
                  <div className="names">
                    <div className="department">
                      <label>Type</label>
                      <select
                        name='type'
                        className='dept'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required>
                        <option value="Book">Book</option>
                        <option value="Journal">Journal</option>
                        <option value="Website">Web-link</option>
                      </select>
                    </div>
                    <div className="fnames">
                      <label>URL/Source</label>
                      <input
                        type="text"
                        placeholder='URL/Source(optional)'
                        className="dept"
                        value={url}
                        onChange={(e) => setUrlSource(e.target.value)} />
                      <div className="errormessage">{urlError}</div>
                    </div>
                  </div>
                  <div className="names">
                    <div className="fnames">
                      <label>Author</label>
                      <input
                        type="text"
                        placeholder='Author'
                        className="dept"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                      <div className="errormessage">{authorError}</div>
                    </div>
                    <div className="fnames">
                      <label>Publication Date</label>
                      <input
                        type="date"
                        placeholder='Publication Date'
                        className="dept"
                        value={publication_date}
                        onChange={(e) => setPubDate(e.target.value)}
                      />
                      <div className="errormessage">{pubDateError}</div>
                    </div>
                  </div>
                </div>
                <div className="summit-signup">
                {successMessage && <div className="success-message">{successMessage}</div>}
                  <button className='sigbtn' onClick={handleSubmit}>Save</button>
             
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}

export default AddReference;
