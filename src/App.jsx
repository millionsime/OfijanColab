

import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import Default from "./Layout/Default";
import Loged from "./Layout/Loged";
import Seller from "./Seller"
import NetworkStatus from "./network/NetworkStatus";
import Footer from './components/footer/footer';

import { BrowserRouter as Router, Route, Link, Routes, Navigate, Outlet } from 'react-router-dom';
function App() {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const roleUser = JSON.parse(loggedInUser);
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
      setRole(parseInt(roleUser.user.role_id))
    }
  }, []);

  console.log(role)
  if (user) {
    if (role === 2 || role === 3) {
      return (
        <>
          <Loged />
          <Footer />
        </>
      )
    }

  }
  else {
    return (
      <>
        <Default />
        <Footer />
      </>
    )
  }

}
export default App
