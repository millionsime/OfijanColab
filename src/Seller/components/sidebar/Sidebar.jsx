import "./sidebar.scss";
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
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useLoggedInUser from '../../../Globals/useLoggedInUser';

export default function Sidebar() {
  const [role, setRole] = useState('');
  const [user, setUser] = useState('');
  const { deptId, userId } = useLoggedInUser();
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
    setIsExpanded(!isExpanded); 
    console.log(isMobileNavOpen);
  };
  
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
      setRole(parseInt(loggedInUser.user.role_id, 10));
    }
  }, []);

  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setExpandedMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setMobileNavOpen(!isMobileNavOpen);
  };

  const renderSellerSidebar = () => (
   
      <>
       <div className={`sidebarMenu ${expandedMenu === 'dashboard' ? 'expanded' : ''} `}>
            <h3 className="sidebarTitle" onClick={() => handleMenuClick('dashboard')}>
              Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/seller" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className={`sidebarMenu ${expandedMenu === 'reference' ? 'expanded' : ''} `}>
            <h3 className="sidebarTitle" onClick={() => handleMenuClick('reference')}>Manage References</h3>
            <ul className="sidebarList">
              <Link to="/seller/references" className="link">
                <li className="sidebarListItem">
                  <TokenIcon className="sidebarIcon" />
                  All References
                </li>
              </Link>
              <Link to="/seller/add_references" className="link">
                <li className="sidebarListItem">
                  <TopicSharpIcon className="sidebarIcon" />
                  Add Reference
                </li>
              </Link>
            </ul>
          </div>
          <div className={`sidebarMenu ${expandedMenu === 'topic' ? 'expanded' : ''}`}>
            <h3 className="sidebarTitle" onClick={() => handleMenuClick('topic')} >Manage Topic/Courses</h3>

            <ul className="sidebarList">
              <Link to="/seller/add_topics" className="link">
                <li className="sidebarListItem">
                  <TokenIcon className="sidebarIcon" />
                  Add Topic
                </li>
              </Link>
              <Link to="/seller/topics" className="link">
                <li className="sidebarListItem">
                  <TopicSharpIcon className="sidebarIcon" />
                  All Topics
                </li>
              </Link>
            </ul>
          </div>
          <div className={`sidebarMenu ${expandedMenu === 'exams' ? 'expanded' : ''}`}>
            <h3 className="sidebarTitle" onClick={() => handleMenuClick('exams')}>Manage Exams</h3>
            <ul className="sidebarList">
              <Link to="/seller/add_exams" className="link">
                <li className="sidebarListItem">
                  <TokenIcon className="sidebarIcon" />
                  Add Exam
                </li>
              </Link>
              <Link to="/seller/exams" className="link">
                <li className="sidebarListItem">
                  <TopicSharpIcon className="sidebarIcon" />
                  All Exams
                </li>
              </Link>
            </ul>
          </div>
          <div className={`sidebarMenu ${expandedMenu === 'questions' ? 'expanded' : ''}`}>
            <h3 className="sidebarTitle" onClick={() => handleMenuClick('questions')}>Manage Questions</h3>

            <ul className="sidebarList">
              <Link to="/select_exam" className="link">
                <li className="sidebarListItem">
                  <TokenIcon className="sidebarIcon" />
                  Add Question
                </li>
              </Link>
              <Link to="/questions" className="link">
                <li className="sidebarListItem">
                  <TopicSharpIcon className="sidebarIcon" />
                  All Questions
                </li>
              </Link>
            </ul>
          </div>
          <div className={`sidebarMenu ${expandedMenu === 'blog_w' ? 'expanded' : ''}`}>
            <h3 className="sidebarTitle" onClick={() => handleMenuClick('blog_w')}>Blog Writer</h3>
            <ul className="sidebarList">
              <Link to="/seller/write_blog" className="link">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Write
                </li>
              </Link>
              <Link to="/seller/edit_blog" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Edit
              </li>
              </Link>
              <Link to="/seller/blog_analytics" className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Analytics
              </li>
              </Link>
            </ul>
          </div>
       </>
  );

  const renderEducationSidebar = () => (
   
    <>
      <div className={`sidebarMenu ${isExpanded ? 'expanded' : ''}`}>
        <h3 className="sidebarTitle" onClick={() => handleMenuClick('dashboard')}>
          Education Background</h3>
        <ul className="sidebarList">
          <Link to="/seller/educationlevel" className="link">
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              Add Education Level
            </li>
          </Link>
          <Link to="/seller/experience" className="link">
              <li className="sidebarListItem">
                <AccountBalance className="sidebarIcon" />
                Work Expereince
              </li>
          </Link>
          <Link to="/seller/resume" className="link">
            <li className="sidebarListItem">
              <FaBriefcase className="sidebarIcon" />
              Add your Resume
            </li>
          </Link>
          <Link to="/seller/document" className="link">
            <li className="sidebarListItem">
              <Book className="sidebarIcon" />
              Add your Document
            </li>
          </Link>
        </ul>
      </div>
  </>
  );

  return (
    <div className={`sidebar_holder ${isMobileNavOpen ? 'mobile-nav-open': ''}`}>
      <div className={`sidebar2 ${isMobileNavOpen ? 'mobile-nav-open': ''}`}>
        <button className="mobile-nav-btn" onClick={toggleMobileNav}>
          ☰
        </button>
        <div className="sidebarWrapper2">
          {role === 3 ? renderSellerSidebar() : null}
          {role === 2 ? renderEducationSidebar() : null}
        </div>
      </div>
    </div>
  );


}
