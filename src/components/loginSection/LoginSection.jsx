import React, { useState, useEffect } from 'react';
import './LoginSection.scss';
import Wrapper from '../wrapper/Wrapper';
import Lottie from 'lottie-react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../Globals/apiConfig';
import animationData from '../../assets/animation_lnk8tp8u.json';
import logoImg from '../../assets/ofijan_logo.png';
import 'react-toastify/dist/ReactToastify.css';

import './LoginSection.scss'
const LoginSection = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
   

    useEffect(() => {
        const logedUser = localStorage.getItem("user");
        if (logedUser !== null) {
            navigate('/');
        }
    }, [navigate]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setError("Email and password are required");
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
                
                
  
                navigate('/');
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setError("Incorrect username or password");
            }
        }
    };

    return (
        <section className="login">
            <Wrapper>
                <div className="login__container">
                    <div className="login__image_holder">
                        <Lottie animationData={animationData} className='img-1' />
                    </div>
                    <div className="login__form_container">
                        <div className="login__image_holder2">
                            <div className="logtitle">
                                {/* <img src={logoImg} className='img-2' alt="Ofijan Logo" /> */}
                                <h1>Ofijan</h1>
                            </div>
                            <div className="login__header">
                                <p className='infos'>Continue your study to increase your achivement.</p>
                            </div>
                            <hr />
                        </div>
                        <div className="login__form1">
                            <div className="form-contents">
                                {error && <div className="error-message">{error}</div>}
                                <input type="text" placeholder='Email' value={email} onChange={handleEmailChange} className="email" />
                                <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} className="pass" />
                                <div className="summit-forward">
                                    {/* <p>Forgot your password ?</p> */}
                                </div>
                                <div className="summit-login">
                                    <button className='logbtn' onClick={handleSubmit}> Log In</button>
                                </div>
                                <div className="summit-signup">
                                    <h5>Register as new user</h5> <Link to={'/signup'}><input type='submit' value="Sign Up" className='singup' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default LoginSection;
