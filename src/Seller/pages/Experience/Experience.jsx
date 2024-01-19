import Wrapper from '../../../components/wrapper/Wrapper';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Experience.scss';

const Experience = () => {

    const navigate = useNavigate();
    const [jop_title, setJopTitle] = useState("");
    const [jop_titleMess, setJopMessage] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [companyMess, setCompanyMessage] = useState("");
    const [employement_type, setEmploye_type] = useState("");
    const [employMess, setEmployMessage] = useState("");
    const [achievement, setAchievement] = useState("");
    const [achieveMess, setAchieveMessage] = useState("");
    const [location, setLocation] = useState("");
    const [locationMess, setlocationMessage] = useState("");
    const [start_date, setStartDate] = useState("");
    const [startMess, setStartMessage] = useState("");
    const [end_date, setEndDate] = useState("");
    const [endMess, setEndMessage] = useState("");
    const [user_id, setUser_id] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [gap, setGap] = useState('');

    useEffect(()=>{
        const logedUser = localStorage.getItem("user");
        if(logedUser){
            const userInfo = JSON.parse(logedUser);
            setUser_id(userInfo.user.id);
            // console.log(user_id);
        }
    })
    let newEmail, newFname, newLname, startDates, endDates, locations, newAchieve;

    function checkName(event) {
        // console.log(event.target.value);
        newFname = event.target.value;
        setJopTitle(newFname);

        if (newFname === "") {
            setJopMessage("Jop title is required")
        }
        else {
            setJopMessage("")
        }
    }

    function checkLname(event) {
        // console.log(event.target.value);
        newLname = event.target.value;
        setCompanyName(newLname);

        if (newLname === "") {
            setCompanyMessage("Company name is required")
        }
        else {
            setCompanyMessage("")
        }
    }

    function checkEmail(event) {
        newEmail = event.target.value;
        setEmploye_type(newEmail);

        if (newEmail === "") {
            setEmployMessage("Employement type is required")
        }
        else {
            setEmployMessage("")
        }
    }

    function checkAchievement(event) {
        newAchieve = event.target.value;
        setAchievement(newAchieve);
    }

    function checkStart(event) {
        // console.log(event.target.value);
        startDates = new Date(event.target.value);
        
        console.log("start date",startDates);
        console.log("current date",currentDate);
        const gapInMilliseconds = Math.abs(currentDate - startDates);
        const gapInMonth = Math.ceil(gapInMilliseconds / (1000 * 60 * 60 * 24 * 30 ));
        setStartDate(startDates);

        if (startDates === "") {
            setStartMessage("Please select your employement date")
        }
        else if(startDates > currentDate || startDates === currentDate || gapInMonth < 7){
            setStartMessage("Employement date must be 6 month less than current date")
        }
        else {
            setStartMessage("");
            setEndMessage("");
        }
    }

    function checkEnd(event) {
        // console.log(event.target.value);
        endDates = new Date(event.target.value);
        const gapInMilliseconds = Math.abs(endDates - start_date);
        const gapInMonth = Math.ceil(gapInMilliseconds / (1000 * 60 * 60 * 24 * 30 ));
        // const currentDate = new Date();
        // console.log(endDates, start_date);
        // console.log(gapInMilliseconds);
        console.log(gapInMonth);
        setEndDate(endDates);

        if (endDates === "") {
            setEndMessage("Please select end date of your employement")
        }
        else if(endDates > currentDate){
            setEndMessage("Employement end date must be equeal or less than current date")
        }
        else if(start_date > end_date){
            setEndMessage("Employement end date must be greater than employment date")
        }
        else if(gapInMonth < 7){
            setEndMessage("Your experience must be at least 6 months")
        }
        else {
            setEndMessage("")
        }
    }

    function checkLocation(event) {
        // console.log(event.target.value);
        locations = event.target.value;
        setLocation(locations);

        if (locations === "") {
            setlocationMessage("Location is required")
        }
        else {
            setlocationMessage("")
        }
    }

    async function signUp() {
        // let info = { fname, lname, email, phone, dept, password, confpassword };
        let crinfo = { jop_title, company_name, employement_type, achievement, start_date, end_date, location, user_id };
        // console.warn(info);
        // console.warn(crinfo);
        const gapInMilliseconds = Math.abs(end_date - start_date);
        const gapInMonth = Math.ceil(gapInMilliseconds / (1000 * 60 * 60 * 24 * 30 ));
        console.log(gapInMonth);

        if (jop_title === "") {
            setJopMessage("Jop title required");
        }
        else if (company_name === "") {
            setCompanyMessage("Company name required");
        }
        else if (employement_type === "") {
            setEmployMessage("Employement type required");
        }
        else if (start_date === "") {
            setStartMessage("Please select your employement date");
        }
        else if (end_date === "" || end_date > currentDate || start_date > end_date ) {
            console.log(startDates, endDates);
            if(end_date === ""){
                setEndMessage("Please select your end date of employement");
            }
            else if(end_date > currentDate){
                setEndMessage("Employement end date must be equeal or less than current date");
            }
            else if(start_date > end_date){
                setEndMessage("Employment date must be less than end date of employment");
            }

        }
        else if(gapInMonth < 7){
            setEndMessage("Your experience must be at least 6 months");
        }
        else if (location === "") {
            setlocationMessage("Location is required");
        }
        else {
            console.log(crinfo);
        //     let result = await fetch("http://127.0.0.1:8000/api/add_experience", {
        //         method: "POST",
        //         body: JSON.stringify(crinfo),
        //         headers: {
        //             "Content-Type": 'application/json',
        //             "Accept": 'application/json'
        //         }
        //     })

        //     result = await result.json()
        //     // console.log(result);
        //     if (result) {
        //         let respresult = result.message;
        //         let status = result.status;

        //         console.log(respresult);
        //     }
        //     else {
        //         console.log(respresult);
        //     }
        }
    }

    return (
        <div className="topic">
            <section className="login">
                <Wrapper>
                <h3 className='exp'>Add Your Work Experience</h3>
                    <div className="login__container">
                        <div className="form2">
                            <div className="form-contents1">
                                <div className="names">
                                    <div className="fnames">
                                        <label>Jop Title</label>
                                        <input type="text" placeholder='jop title' className="fname" onChange={checkName} required />
                                        <div className="errormessage">{jop_titleMess}</div>
                                    </div>
                                    <div className="lnames">
                                        <label>Company Name</label>
                                        <input type="text" placeholder='company name' className="lname" onChange={checkLname} required />
                                        <div className="errormessage">{companyMess}</div>
                                    </div>

                                </div>
                                <div className="dept_pho">
                                    <div className="emails">
                                        <label>Employement Type</label>
                                        <input type="text" placeholder='employement type' className="email" onChange={checkEmail} required />
                                        <div className="errormessage">{employMess}</div>
                                    </div>
                                    <div className="phones">
                                        <label>Achievement <small>(Optional)</small></label>
                                        <input type="tel" placeholder='achievement' onChange={checkAchievement} className="phone" />
                                        {/* <div className="errormessage">{achieveMess}</div> */}
                                    </div>
                                </div>

                                <div className="dept_pho">
                                    <div className="emails">
                                        <label>Start Date</label>
                                        <input type="date" placeholder='start date' className="email" onChange={checkStart} required />
                                        <div className="errormessage">{startMess}</div>
                                    </div>
                                    <div className="phones">
                                        <label>End Date</label>
                                        <input type="date" placeholder='end date' className="phone" onChange={checkEnd} required />
                                        <div className="errormessage">{endMess}</div>
                                    </div>
                                </div>

                                <div className="dept_pho">
                                    <div className="emails">
                                        <label>Location</label>
                                        <input type="text" placeholder='location' className="email" onBlur={checkLocation} required />
                                        <div className="errormessage">{locationMess}</div>
                                    </div>
                                </div>

                                {/* <div className="errormessage">{registered}</div> */}
                                <div className="summit-signup">
                                    <button className='sigbtn' onClick={signUp} >Save</button>
                                    {/* <input type="submit" value="Log In" className="sigbtn"/> */}
                                </div>

                            </div>
                        </div>
                    </div>

                </Wrapper>
            </section>
        </div>
    )
}

export default Experience