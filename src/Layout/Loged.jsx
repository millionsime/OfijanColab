import React, {useState, useEffect} from 'react'
import LNavbar from '../logedin/navbar/LNavbar'
import Footer from '../components/footer/footer';
import Grade12 from "../components/Grade12/Grade12";
import Grade8 from "../components/Grade8/Grade8"
import Grade6 from "../components/Grade6/Grade6";
import ExitExam from "../components/ExitExam/ExitExam"
import Home from "../components/Home/Home"
import LExitExam from "../logedin/ExitExam/LExitExam.jsx"
import Dashboard from "../components/Dashboard/Dashboard"
import LoginSection from "../components/loginSection/LoginSection";
// import Seller from '../components/Seller/Seller';
import BlogList from '../components/Blog/BlogList.jsx';
import SingleBlog from '../components/Blog/SingleBlog.jsx';
import FullBlog from '../components/Blog/FullBlog.jsx';
import Seller from '../Seller'
import Sidebar from '../Seller/components/sidebar/Sidebar.jsx';

import UserList from '../Seller/pages/userList/UserList.jsx';
import User from '../Seller/pages/user/User.jsx';
import NewUser from '../Seller/pages/newUser/NewUser.jsx';
import TestMePlate from '../logedin/ExitExam/LQuestionPlate/TestMePlate.jsx';
import StudyPlate from '../logedin/ExitExam/LQuestionPlate/StudyPlate.jsx';
import Exam from '../Seller/pages/exam/Exam.jsx';
import AddExam from '../Seller/pages/exam/AddExam.jsx';
import Topic from '../Seller/pages/topic/Topic.jsx';
import AddTopic from '../Seller/pages/topic/AddTopic.jsx';
import Reference from '../Seller/pages/reference/Reference.jsx';
import AddReference from '../Seller/pages/reference/AddReference.jsx';
import Question from '../Seller/pages/question/Question.jsx';
import AddQuestion from '../Seller/pages/question/AddQuestion.jsx';
import SelectExam from "../Seller/pages/question/SelectExam";
import EducationLevel from "../Seller/pages/EducationLevel/EducationLevel";
import SellerMain from "../Seller/pages/SellerMain/SellerMain";
import Experience from "../Seller/pages/Experience/Experience";

import EditBlog from "../Seller/pages/blog/Edit";
import BlogAnalytics from "../Seller/pages/blog/Analytics"

import Resume from "../Seller/pages/Resume/Resume";
import Document from "../Seller/pages/Document/Document";

import API_BASE_URL from '../Globals/apiConfig.jsx';
import WriteBlog from '../Seller/pages/blog/write.jsx';
import axios from 'axios';
import Topbar from '../Seller/components/topbar/Topbar.jsx';
import { BrowserRouter as Router, Route, Link, Routes, Navigate, Outlet } from 'react-router-dom';
import ExamsForMe from '../logedin/ExitExam/ExamsForMe.jsx';
import '../Seller/App.css';
import Plate from '../logedin/ExitExam/LQuestionPlate/Plate.jsx';
const Loged = () => {
  const [blogData, setBlogData] = useState([]);
const [selectedPost, setSelectedPost] = useState(null);
const [postUri, setPostUri] = useState('');

useEffect(() => {
  setPostUri(`${API_BASE_URL}/all_blogs`);
  axios.get(postUri)
    .then(response => {
      setBlogData(response.data.blogs);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, [postUri]);
const currentPath = window.location.pathname;
  return ( 
    <>
       
       {currentPath.includes('/seller') ?  null: <LNavbar /> } 


       {currentPath.includes('/seller') ? 
       
       <>
      
      <div className="containere">
        <div className="side">
         <Sidebar /> 
        </div>
        <div className="items"><Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/seller/write_blog" element={<WriteBlog />} />
          <Route path="/seller" element={<Seller />} />
          {/* blogs */}
          <Route exact path="/seller/write_blog" element={<WriteBlog />} />
          <Route exact path="/seller/edit_blog" element={<EditBlog />} />
          <Route exact path="/seller/blog_analytics" element={<BlogAnalytics />} />
          {/* exams */}
          <Route exact path="/seller/exams" element={<Exam />} />
          <Route exact path="/seller/add_exams" element={<AddExam />} />
          {/* topics */}
          <Route exact path="/seller/topics" element={<Topic />} />
          <Route exact path="/seller/add_topics" element={<AddTopic />} />
          {/* references  */}
          <Route exact path="/seller/references" element={<Reference />} />
          <Route exact path="/seller/add_references" element={<AddReference />} />
          {/* questions */}
          <Route exact path="/seller/questions" element={<Question />} />
          <Route exact path="/seller/add_questions" element={<AddQuestion />} />
          <Route exact path="/seller/select_exam" element={<SelectExam />} />
          {/* Education Level */}
          <Route exact path="/seller/educationlevel" element={<EducationLevel />} />
          <Route exact path="/seller/resume" element={<Resume />} />
          <Route exact path="/seller/document" element={<Document />} />
          <Route exact path="/seller/mainseller" element={<SellerMain />} />
          {/* Experience */}
          <Route exact path="/seller/experience" element={<Experience />} />

          <Route path="/seller/users" element={<UserList />} />
          <Route path="/seller/user/:userId" element={<User />} />
          <Route path="/seller/newUser" element={<NewUser />} />
          
          <Route path="/seller/seller" element={<Seller />} />
        </Routes>
        </div>
      </div>
    </>
       
       
       : null  } 
       
       
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
       
          <Route path="/" element={<Home />} />
          
          <Route path="/Grade12" element={<Grade12 />} />
          <Route path="/Grade8" element={<Grade8 />} />
          <Route path="/Grade6" element={<Grade6 />} />
          <Route path="/ExitExam" element={<ExitExam />} />
          <Route path="/exit/:id" element={<ExitExam />} />
          <Route path="/Login" element={<LoginSection />} />
          <Route path="/Exit_Exam" element={<LExitExam />} />
          <Route exact path='/ofijan_question_platel/:ofin_id' element={<Plate/>}/>
          <Route path="/ofijan_blogs" element={<BlogList blogs={blogData} />} />
        <Route path="/blog/:category/:title" element={<SingleBlog blogs={blogData} />} />
        <Route path="/blog/:category/:title/full" element={<FullBlog blogs={blogData} />} />
        <Route exact path='/ofijan_question_plate/:ofin_id' element={<Plate/>}/>
        <Route exact path='/ofijan_exam_plate/testmode/:ofin_id' element={<TestMePlate/>}/>
        <Route exact path='/ofijan_exam_plate/studymode/:ofin_id' element={<StudyPlate/>}/>
        </Routes>
      
    </>
  )
}

export default Loged
