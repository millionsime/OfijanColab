import './ExitExam.scss';
import React from "react";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from '../Sidebar/SidebarStyles';

import Wrapper from '../wrapper/Wrapper'
import Logo from "../../assets/logo.png";
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { Routes, Route, useParams } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "../../components";
import API_BASE_URL from '../../Globals/apiConfig';
import "../../App.css";
const ExitExam = () => {
  const url = `${API_BASE_URL}/departments`;
  const url2 = `${API_BASE_URL}/way_exams`;
  const id = useParams();
  const [data, setData] = useState([]);
  const [price_tag, setPriceTag] = useState('');
  const [exams, setExams] = useState([]);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(6);
  const scollToRef = useRef();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
    fetch(url2)
      .then((res) => res.json())
      .then((d) => setExams(d))


  }, [])
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
      // Handle the case when "All" is selected
      setCourses([]);
    }
  };
  const [showAll, setShowAll] = useState(false);

  const toggleTopics = () => {
    setShowAll(!showAll);
  };
  return (
    <section className='exit_exam_nli'>
      <div className="select_field">

        <p>Select Your field of study</p>
        <div className='input_holder'>

          <select name='department' className='dept' onChange={handleDepartmentChange} defaultValue="" required>
            <option value="">All</option>
            {data.map(data => (
              <option key={data.id} value={data.id}>{data.title}</option>
            ))}
          </select>

        </div>

      </div>
      <Wrapper className="examsholder">


        {exams ? (exams.map((exam, index) => {
          return (
            <div key={exam.id} className="exams_card">
              <div className='exams_head'>
                <img className='__logo' src={Logo} alt='' width={30} height={20} />
                <div className="__title"> {exam.exam_name ? exam.exam_name : "No Name"}</div>
              </div>
              <div className="underline"></div>
              {/* <div className="__department">From: {exam.department_id ? exam.department.title : "Unknown "}. Department!</div> */}
              <table className='exam_table' border={1}>
  <tbody>
    <tr className='table_body'>
      <td className='categorizer'>Booklet Name: </td>
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
    <td className='categorizer topics'>Topics </td>
    <td className='' colSpan={4}>
      <ul>
        <li>___</li>
        <li>___</li>
        <li>___</li>
        {showAll && (
          <>
            <li>___</li>
            <li>___</li>
            <li>___</li>
          </>
        )}
      </ul>
      <span className="dropdown-icon" onClick={toggleTopics}>{!showAll? (<>▼</>) : (<>▲</>)}</span>
    </td>
    </tr>
    <tr className='table_body'>
      <td colSpan={5} className='open-holder'>
        <Link className='button-open' to={`/ofijan_question_plate/${exam.id}`}>
          Open
        </Link>
      </td>
    </tr>
  </tbody>
</table>

            </div>
          )
        })) : (<div className='exams_card'>
          <p>We have no exams for your department. <li>Click Here</li> If you wan't to get notified!</p>
        </div>)}
      </Wrapper>
    </section>
  );
}
export default ExitExam