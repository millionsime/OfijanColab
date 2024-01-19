import "../../components/navbar/Navbar.scss";
import Wrapper from "../../components/wrapper/Wrapper";
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LNavbar = () => {
   const navigate = useNavigate();
   const [showNav, setShowNav] = useState(false);
   const [user, setUser] = useState("");

   const handleLogout = () => {
      localStorage.clear();
      window.location.href = '/';

   };
   return (
      <nav className="navbarz">
      <Wrapper className="navbarz__container">
          <Link to="/" className="navbarz__logo"
              onClick={() => setShowNav(false)}>
              <img src={Logo} alt="" />

          </Link>
          <ul className={`navbarz__links ${showNav ? "show-nav" : ""}`}>
              <li onClick={() => setShowNav(false)}>
                  <Link to="/">Home</Link>
              </li> 
              <li   onClick={() => setShowNav(false)}>
                  <Link to="/Exit_Exam">Exit Exam</Link> 
                  </li>
                  <li onClick={() => setShowNav(false)}>
                  <Link to="/CoC">CoC</Link>
              </li>
              <li onClick={() => setShowNav(false)}>
                  <Link to="/Grade12">Grade 12<sup>th</sup></Link>

              </li>
              <li onClick={() => setShowNav(false)}>
                  <Link to="/Grade8">Grade 8<sup>th</sup></Link>
              </li>
             
              <li onClick={() => setShowNav(false)}>
                  <Link to="/Grade6">Grade 6<sup>th</sup></Link>
              </li>
              <li onClick={() => setShowNav(false)}>
                  <a href="/ofijan_blogs">Blog</a>
              </li>
              <li className={`navbarz__menubar ${showNav ? "button-outline" : ""}`}
               onClick={handleLogout}
            > 
               Log out
               </li>
            </ul>
            <Link to='#' onClick={handleLogout} className="button-primary 
navbarz__btn">
               Log out
            </Link>

            <div className={`navbarz__menubar ${showNav ? "bg-color" : ""}`}
               onClick={() => setShowNav(!showNav)}
            >
               <FaBars />
            </div>
      </Wrapper>
    
  </nav>
   )
}

export default LNavbar
