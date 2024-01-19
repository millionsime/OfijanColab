import React from 'react'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    AccountCircle,
    ShoppingCart,
    School, 
    Book, 
    AccountBalance,
  } from "@material-ui/icons";
  import { FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";
  import QuizSharpIcon from '@mui/icons-material/QuizSharp';
  import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
  import TopicSharpIcon from '@mui/icons-material/TopicSharp';
  import TokenIcon from '@mui/icons-material/Token';
  import { Link } from "react-router-dom";
const SellerSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Education Background</h3>
          <ul className="sidebarList">
            <Link to="/educationlevel" className="link">
              <li className="sidebarListItem">
                <School className="sidebarIcon" />
                Add Education Level
              </li>
            </Link>
            <li className="sidebarListItem">
              <AccountBalance className="sidebarIcon" />
              Work Expereince
            </li>
            <li className="sidebarListItem">
              <FaBriefcase className="sidebarIcon" />
              Add your Resume
            </li>
            <li className="sidebarListItem">
              <Book className="sidebarIcon" />
              Add your Document
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SellerSidebar