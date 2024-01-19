import '../../components/ExitExam/ExitExam.scss';
import React from "react";
import Wrapper from '../../components/wrapper/Wrapper'
import Logo from "../../assets/logo.png";
import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useLoggedInUser from '../../Globals/useLoggedInUser';
import API_BASE_URL from '../../Globals/apiConfig';
import WhatModal from './WhatModal';
const LExitExam = () => {
  const { deptId, userId } = useLoggedInUser();
  const url = `${API_BASE_URL}/departments`;
  const [departmentTitle, setDepartmentTitle] = useState('');
  const [did, setDid] = useState('');
  const id = useParams();
  const [data, setData] = useState([]);
  const [price_tag, setPriceTag] = useState('');
  const [exams, setExams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
  const [selectedExamId, setSelectedExamId] = useState(null);
  const scollToRef = useRef();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setDid(foundUser.user.dept_id);
          if (foundUser.user.dept_id !== null) {
            setDepartmentTitle(data.title);
            console.log('the data', data.title);
            fetch(`${API_BASE_URL}/exams/${foundUser.user.dept_id}`)
              .then((res) => res.json())
              .then((d) => setExams(d))
              .catch((error) => console.error('Error fetching exams:', error));
          }
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const handleDepartmentChange = async (event) => {
    const selectedDepartmentId = event.target.value;
    setSelectedDepartmentId(selectedDepartmentId);
    if (selectedDepartmentId) {
      try {
        const response = await fetch(`${API_BASE_URL}/exams/${selectedDepartmentId}`);
        if (response.ok) {
          const examsData = await response.json();
          setExams(examsData);
        } else {
          console.error('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    } else {
      setCourses([]);
    }
  };
  const openModal = (exam) => {
    setIsModalOpen(true);
    setSelectedExamId(exam.id);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  
  }
  return (
    <section className='exit_exam_nli'>
      
      <Wrapper className="examsholder">
        {exams ? (exams.map((exam, index) => {
          return (
            <div key={exams.id} className="exams_card">
              <div className='exams_head'>
               
                <img className='__logo' src={Logo} alt='' width={30} height={20} />
                <div className="__title"> {exam.exam_name ? exam.exam_name : "No Name"}</div>
              </div>
              <div className="underline"></div>
              
              <table className='exam_table' border={1}>
                <tr className='table_body'>
                  <td className='categorizer' >Booklet Name: </td>
                  <td className='info' colSpan={4}><b>{exam.exam_name}</b></td>

                </tr>
                <tr className='table_body'>
                  <td className='categorizer'>Ofijan Id: </td>
                  <td className='info'><b>OF{exam.id}{exam.id}IN</b></td>
                  <td className='categorizer'>Prepared By: </td>
                  <td className='info' colSpan={2}><b>Gaki Serocho</b></td>
                </tr>
                <tr className='table_body'>
                  <td className='categorizer'>Description </td>
                  <td className='info' colSpan={4}>{exam.description ? exam.description : "No Description!"}</td>
                </tr>
                <tr className='table_body'>
                  <td className='categorizer'>Total no of Questions </td>
                  <td className='info'>{exam.questions_count}</td>
                  <td className='categorizer' colSpan={2}>Topics Covered </td>
                  <td className='info'>12</td>
                </tr>
                <tr className='table_body'>
                  <td className='categorizer'>Topics </td>
                  <td className='' colSpan={4}>
                    <ul>
                      <li>
                        Electromechanics
                      </li>
                      <li>Double Linked List</li>
                      <li>Super Conductor's</li>
                    </ul>
                  </td>
                </tr>
                
                <tr className='table_body'>
                  <td colSpan={5} className='open-holder'>
                    <button className='button-open' onClick={()=> openModal(exam)}>Open</button>
                  </td>
                </tr>
              </table>
            </div>
          )
        })) : (<div className='exams_card'>
          <p>We have no exams for your department. <li>Click Here</li> If you wan't to get notified!</p>
        </div>)}
      </Wrapper>
      {isModalOpen && selectedExamId && ( 
        <WhatModal  examID={selectedExamId} onClose={closeModal} /> 
      )}
    </section>
  );
}
export default LExitExam