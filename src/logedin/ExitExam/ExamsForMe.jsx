import './lexitexam.scss';
import Wrapper from '../../components/wrapper/Wrapper';
import Logo from "../../assets/logo.png";
import { useRef, useState, useEffect } from 'react'
import Pay from '../payment/Pay';
import { Link, useParams } from 'react-router-dom';
import useLoggedInUser from '../../Globals/useLoggedInUser';

import Questions from '../../components/Questions/Questions';

import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import { ConstructionOutlined } from '@mui/icons-material';
const ExamsForMe = () => {
  const url = "https://ofijan.com/api/departments";
  const [firstName, setFirstName] = useState("Million");
  const [lastName, setLastName] = useState("Sime");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(9070);
  const tx_ref = "weygudemelameddfgsdbfbe";
  const public_key = "CHAPUBK_TEST-awyvtaEfHkG3crEKM4uLlCwX2vP7ytnK";
  const [data, setData] = useState([]);
  const { deptId, userId } = useLoggedInUser();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
  const [courses, setCourses] = useState([]);
  const [showDept, setShowDept] = useState(true);
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);
  const [deptTitle, setDepartmentTitle] = useState('');
  
 
  const ref = useRef(null);
  const scollToRef = useRef();
  
 

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
    setShowDept(!showDept);
  };
  const [isActive, setIsActive] = useState(false);

  const toggleCard = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {

    setSelectedDepartmentId(deptId);
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      const userEmail = foundUser.user.email;
      setEmail(foundUser.user.email);
      setFirstName(foundUser.user.fname);
     
      //setUser(foundUser);
    }
  }, []);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      fetch(`https://ofijan.com/api/exams/${deptId}`)
        .then((res) => res.json())
        .then((d) => setCourses(d))
    // }

  }, [selectedDepartmentId])
  const handleDepartmentClick = (departmentId, departmentTitle) => {
    setSelectedDepartmentId(departmentId);
    setDepartmentTitle(departmentTitle);
    setShowDept(false);
    setIsNavBarOpen(!isNavBarOpen);
console.log("dept id", selectedDepartmentId);
  };
  return <section className="examsholder">
    <Wrapper className="exit_exam_page">
      <div className='exitexam'>
        {isNavBarOpen ? (
          <button className="open-button" onClick={toggleNavBar}> <h2 className='my-button'> <AiOutlineArrowRight /> Other Field of studies</h2></button>
          
        ) : ( 
          <button className="close-button" onClick={toggleNavBar}><AiOutlineArrowLeft /> </button>)}
        <div className="dept_exam">

          <div className={`all_departments ${showDept ? "show-nav" : ""}`}>
            {data.map((dataObj, index) => {
              return (
                <div className="all_departments__card">
                  <div  key={dataObj.id} onClick={() => handleDepartmentClick(dataObj.id, dataObj.title)}><p className='dept_holder'>{dataObj.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`open_menu ${showDept ? "open_menu" : ""}`}
            onClick={() => setShowDept(!showDept)}>
          </div>
          <div className="exam_div">
         
            {courses ? (<h2>Here are the exams we have for  <small className='h7'>{deptTitle? deptTitle : "your"  }</small> department</h2>):
            (<h2>We do not have exams in <b>{deptTitle}</b> department yet. stay tuned!</h2>)}
          <div className='all_exams'>
            {courses.map((course, index) => {
              return (
                  <div key={course.id} className="product_card">
                    <div className='product_head'>
                      <div className="product-title"><h2>{course.exam_name
                      }</h2></div>
                    </div>
                    <div>Only for 50.00 ETB</div>
                    <div className="product-description">Brief description of the exam questions.</div>
                    <div className="product-questions">This bocklet contains <b>100</b> questions</div>
                    <div className="buttons">
                      {/* <button onClick={() => scollToRef.current.scrollIntoView()} className="btnpreview" >Preview</button> */}
                      <Link to={`/exam_details/${course.id}`} className='btnpreview'>Preview</Link>
                      <Pay
                        fname={firstName}
                        lname={lastName}
                        email={email}
                        amount={amount}
                        public_key={public_key}
                        tx_ref={tx_ref}
                        title={course.exam_name}
                        examId= {course.id} />
                    </div>
                  </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
}

export default ExamsForMe