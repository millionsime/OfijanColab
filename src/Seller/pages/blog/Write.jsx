// Write.js

import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Wrapper from '../../../components/wrapper/Wrapper';
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import API_BASE_URL from '../../../Globals/apiConfig';
import './index.scss';

export default function Write() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [categories, setCategory] = useState('General');
  const [blogUri, setBlogUri] = useState('');
  const [titleError, setTitleError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { userId } = useLoggedInUser();

  useEffect(() => {
    setBlogUri(`${API_BASE_URL}/add_post`);
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleEditorChange = (content, editor) => {
    setBody(content);
  };

  const handleSubmit = async () => {
    setTitleError('');

    if (title.trim() === '') {
      setTitleError('Title is required');
      return;
    }

    try {
      const response = await fetch(blogUri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, categories, body }),
      });

      if (response.ok) {
        console.log('Blog data sent successfully!');
        // Reset the form fields
        setTitleError('');
        setTitle('');
        setBody('');
        setSuccessMessage('Blog added successfully!');
      } else {
        console.log('Failed to send blog.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="topic">
      <h3>Write New Blog</h3>

      <section className="login">
        <Wrapper>
          <div className="login__container">
            <div className="form2">
              <div className="form-contents1">
                <div className="department">
                  <div className="fnames">
                    <label>Category</label>
                    <select
                      className="dept"
                      name="categories"
                      value={categories}
                      onChange={handleCategoryChange}
                    >
                      <option value="Exam">Exam</option>
                      <option value="Education">Education</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Sport">Sport</option>
                      <option value="Tech">Tech</option>
                    </select>
                  </div>
                  <div className="lnames">
                    <label>Blog Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="How to pass difficult exams"
                      className="dept"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="errormessage">{titleError}</div>
                  </div>
                  <div className="lnames">
                    <label>Add Blog text here: </label>
                   <div className="ck_editor">

                    <CKEditor
                      editor={ClassicEditor}
                      className="ck_editor"
                      data=""
                      onReady={(editor) => {
                        console.log('Editor is ready to use!', editor);
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                      onEditorChange={handleEditorChange}
                    /></div>
                  </div>
                </div>
                <div className="summit-signup">
                  <button className="sigbtn" onClick={handleSubmit}>
                    Save
                  </button>
                  {successMessage && (
                    <div className="success-message">{successMessage}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
