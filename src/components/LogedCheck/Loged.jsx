import React from 'react';
import LNavbar from '../logedin/navbar/LNavbar';
import Footer from '../components/footer/footer';
import Grade12 from "../components/Grade12/Grade12";
import Grade8 from "../components/Grade8/Grade8"
import Grade6 from "../components/Grade6/Grade6";
import ExitExam from "../components/ExitExam/ExitExam";
import Home from "../components/Home/Home";
import LExitExam from "../logedin/ExitExam/ExitExam.jsx";
import Dashboard from "../components/Dashboard/Dashboard";
import LoginSection from "../components/loginSection/LoginSection";
import Sellers from '../Sellers/Sellers.jsx';


import { BrowserRouter as Router, Route, Link, Routes, Navigate, Outlet } from 'react-router-dom';
const Loged = () => {
  return (
    <>
      <LNavbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/toseller" element={<Sellers />} />
          <Route path="/" element={<Home />} />
          <Route path="/Grade12" element={<Grade12 />} />
          <Route path="/Grade8" element={<Grade8 />} />
          <Route path="/Grade6" element={<Grade6 />} />
          <Route path="/ExitExam" element={<ExitExam />} />
          <Route path="/exit/:id" element={<ExitExam />} />
          <Route path="/Login" element={<LoginSection />} />
          <Route path="/Exit_Exam" element={<LExitExam />} />
          
        </Routes>
      
    </>
  )
}

export default Loged
