import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarStyles";

import ExitExam from "../ExitExam/ExitExam";

import { dummyData } from "..";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Sender from "../../Sender";
const SidebarItems = ({ displaySidebar }) => {
  const url = "https://ofijan.com/api/departments";
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState([]);
  const datas = {
    id: 123,
    name: 'John Doe',
  };
  const [activeItem, setActiveItem] = useState(0);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  useEffect(() => {
    if (selectedDepartmentId) {

      fetch(`https://ofijan.com/api/exams/${selectedDepartmentId}`)
        .then((res) => res.json())
        .then((d) => setCourses(d))
    }
    else {
      fetch(`https://ofijan.com/api/exams/1`)
        .then((res) => res.json())
        .then((d) => setCourses(d))
    }

  }, [selectedDepartmentId]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))

  }, [])
  const handleDepartmentClick = (departmentId) => {
    setSelectedDepartmentId(departmentId);
  };
  return (
    <ItemsList>
      {data.map((itemData, index) => (
        <ItemContainer
          key={index} id={itemData.id} 
          onClick={() => setActiveItem(itemData.id)}
          className={itemData.id === activeItem ? "active" : ""}>
            <Link to={`/exit/${itemData.id}`} page= {itemData.id}>
          
            <ItemWrapper>
              <ItemName displaySidebar={displaySidebar}>
                {itemData.title}
                
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;