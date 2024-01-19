import React, { useState, useEffect } from 'react';
import "./Education.scss";
import Wrapper from '../../../components/wrapper/Wrapper';
import API_BASE_URL from '../../../Globals/apiConfig';
import { json } from 'react-router-dom';

const EducationLevel = () => {

    const [eduLevel, setEduLevel] = useState("");
    const [eduLevelMessage, setEduLevelMessage] = useState("");
    const [degreeLevel, setDegreeLevel] = useState("");
    const [degreeLevelMessage, setDegreeLevelMessage] = useState("");
    const [attended, setAttended] = useState("");
    const [attendedMessage, setAttendedMessage] = useState("");
    const [gpa, setGpa] = useState("");
    const [gpaMessage, setGpaMessage] = useState("");
    const [unName, setUnName] = useState("");
    const [unNameMessage, setUnNameMessage] = useState("");
    const [user_id, setUserID] = useState("");
    // const [user_idMessage, setUser_idMessage] = useState("");
    const [start_date, setStartDate] = useState("");
    const [startMessage, setStartMessage] = useState("");
    const [end_date, setEndDate] = useState("");
    const [endMessage, setEndMessage] = useState("");
    const [succesMessage, setSuccesMessage] = useState(""); 

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const userinfo = JSON.parse(loggedInUser);
            setUserID(parseInt(userinfo.user.id));
        }
    }, []);

    function handleEduLevel(e) {
        const eduLevel = e.target.value;
        setEduLevel(eduLevel);
        if (eduLevel === "") {
            setEduLevelMessage("Education Level Required");
        }
        else {
            setEduLevelMessage("");
        }
    }
    function handleDegreeLevel(e) {
        const degreeLevels = e.target.value;
        setDegreeLevel(degreeLevels);
        if (degreeLevels === "") {
            setDegreeLevelMessage("Degree Level Required");
        }
        else {
            setDegreeLevelMessage("");
        }
    }
    function handleAttended(e) {
        const years = e.target.value;
        setAttended(years);
        if (years === "") {
            setAttendedMessage("Attended Year Required");
        }
        else {
            setAttendedMessage("");
        }
    }
    function handleGpa(e) {
        const gpas = e.target.value;
        setGpa(gpas);
        if (gpas === "") {
            setGpaMessage("Gpa Required");
        }
        else if (gpas < 2.00) {
            setGpaMessage("Your Gpa must be greater than 2.00");
        }
        else if (gpas > 4.00) {
            setGpaMessage("Use Proper Gpa format like 2.00, 3.25, 4.00");
        }
        else {
            setGpaMessage("");
        }
    }
    function handleUnName(e) {
        const names = e.target.value;
        setUnName(names);
        if (names === "") {
            setUnNameMessage("University Name Required");
        }
        else {
            setUnNameMessage("");
        }
    }
    function handleStart(e) {
        const starts = e.target.value;
        setStartDate(starts);
        if (starts === "") {
            setStartMessage("Start Date Required");
        }
        else {
            setStartMessage("");
        }
    }
    function handleEnd(e) {
        const ends = e.target.value;
        setEndDate(ends);
        if (ends === "") {
            setEndMessage("End Date Required");
        }
        else {
            setEndMessage("");
        }
    }

    const informs = { eduLevel, degreeLevel, attended, gpa, start_date, end_date, unName, user_id };
    const handleSubmit = async () => {

        if (eduLevel === "") {
            setEduLevelMessage("Education Level Required");
        }
        else if (degreeLevel === "") {
            setDegreeLevelMessage("Degree Level Required");
        }
        else if (attended === "") {
            setAttendedMessage("Attended Year Required");
        }
        else if (gpa === "") {
            setGpaMessage("Gpa Required");
        }
        else if (start_date === "") {
            setStartMessage("Start Date Required");
        }
        else if (end_date === "") {
            setEndMessage("End Date Required");
        }
        else if (unName === "") {
            setUnNameMessage("University Name Required");
        }
        else {
            console.log(informs);
            let result = await fetch(`${API_BASE_URL}/add_education`, {
                method: "POST",
                body: JSON.stringify(informs),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            result = await result.json()
            console.log(result);
            
                setSuccesMessage("Education level added");
                setEduLevel("");
                setAttended("");
                setDegreeLevel("");
                setEndDate("");
                setStartDate("");
                setGpa("");
                setUnName("");
        }

    };

    return (
        <div className="topic">
            <section className="login">
                <Wrapper>
                <h3 className='exp'>Add Your Education Backgraund</h3>
                    <div className="login__container">
                        <div className="form2">
                            <div className="form-contents1">
                                <div className="department">
                                    <div className="dept_pho">
                                        <div className="fnames">
                                            <label>Education Level</label>
                                            <input
                                                type="text"
                                                placeholder="Your Acadamic level"
                                                className="dept"
                                                required
                                                 value={eduLevel}
                                                onChange={handleEduLevel} />
                                            <div className="errormessage">{eduLevelMessage}</div>
                                        </div>
                                        <div className="fnames">
                                            <label>Degree Level</label>
                                            <select className='dept' onChange={handleDegreeLevel} value={degreeLevel}>
                                                <option value=""></option>
                                                <option value="Msc">Msc</option>
                                                <option value="Phd">Phd</option>
                                            </select>
                                            <div className="errormessage">{degreeLevelMessage}</div>
                                        </div>
                                    </div>
                                    <div className="dept_pho">
                                    <div className="fnames">
                                        <label>Attended Year</label>
                                        <input
                                            type="number"
                                            placeholder='Attended year in university'
                                            className="dept"
                                            required
                                             value={attended}
                                            onChange={handleAttended} />
                                        <div className="errormessage">{attendedMessage}</div>
                                    </div>
                                    <div className="fnames">
                                        <label>GPA</label>
                                        <input type="number"
                                            placeholder='Your GPA from 4.00'
                                            className="dept"
                                            value={gpa}
                                            onChange={handleGpa}
                                            required />
                                        <div className="errormessage">{gpaMessage}</div>
                                    </div>
                                    </div>
                                    <div className="dept_pho">
                                    <div className="fnames">
                                        <label>Start Date</label>
                                        <input type="date"
                                            placeholder='Start Date'
                                            className="dept"
                                            value={start_date}
                                            onChange={handleStart}
                                            required />
                                        <div className="errormessage">{startMessage}</div>
                                    </div>
                                    <div className="fnames">
                                        <label>End Date</label>
                                        <input type="date"
                                            placeholder='End Date'
                                            className="dept"
                                            value={end_date}
                                            onChange={handleEnd}
                                            required />
                                        <div className="errormessage">{endMessage}</div>
                                    </div>
                                    </div>
                                    <div className="dept_pho">
                                    <div className="fnames">
                                        <label>University Name</label>
                                        <input type="text"
                                            placeholder='University'
                                            className="dept"
                                            value={unName}
                                            onChange={handleUnName}
                                            required />
                                        <div className="errormessage">{unNameMessage}</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="summit-signup">
                                    {succesMessage && <div className='successMessage'>{succesMessage}</div>}
                                    <button className='sigbtn' onClick={handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </div>
    )
}

export default EducationLevel