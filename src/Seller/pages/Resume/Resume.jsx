import React, { useState, useEffect } from 'react'
import Wrapper from '../../../components/wrapper/Wrapper'
import axios from 'axios';
import "./Resume.scss";

const Resume = () => {

    const [resume, setResume] = useState(null);
    const [resumeMess, setResumeMess] = useState('');
    const [user_id, setUser_id] = useState('');
    const [valueRusume, setValueResume] = useState('');
    const [resumeType, setTypeResume] = useState(null);
    const [status, setStatus] = useState("");
    const [resumeExist, setResumeExist] = useState(false);
    const [needCheck, setNeedCheck] = useState(false);
    const [data, setData] = useState([]);
    let number = 0;

    useEffect(() => {
        const users = localStorage.getItem('user');
        const userinfo = JSON.parse(users);
        setUser_id(userinfo.user.id);
    }
    );

    useEffect(() => {
        const users = localStorage.getItem('user');
        const userinfo = JSON.parse(users);
        if (resumeExist === false) {
            // console.log("check user", userinfo.user.id);
            axios.get(`http://127.0.0.1:8000/api/get_resume/${userinfo.user.id}`, {
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
            })
                .then(response => {
                    console.log(response.data.status);
                    if (response.data.status === "success") {
                        // const datas = Array.from(response.data.message);
                        // console.log("datas",datas);
                        setData(response.data.message);
                        console.log(response.data.message);
                        console.log(data.id)
                        setResumeExist(true);
                        setNeedCheck(true);
                    }
                    else {
                        setResumeExist(false)
                        setNeedCheck(false)
                    }
                })
            // .then((d) => setData(d))
            // console.log(res);
        }
        else {
            setResumeExist(false)
        }
    }, []);

    const getResume = (event) => {
        const resumes = event.target.files[0];
        const resumesval = event.target.value;
        const resumetype = event.target.files[0];
        setResume(resumes);
        setValueResume(resumesval);
        // console.log(resumetype);
        if (resumetype.type === 'application/pdf') {
            setTypeResume(resumetype.type);
            setStatus("errormessage");
        }

        else {
            setResumeMess("Upload only pdf format");
            setStatus("errormessage");
        }
    };

    async function uploadResume() {
        let files = { resume, user_id }
        if (valueRusume === "") {
            setResumeMess("Please select file to upload");
            setStatus("errormessage");
        }
        else if (resume.size > 2 * 1024 * 1024) {
            setResumeMess("file size must be less or equal to 2MB");
            setStatus("errormessage");
        }
        else if (resumeType !== "application/pdf") {
            setResumeMess("Upload only pdf format");
            setStatus("errormessage");
        }
        else {
            const formData = new FormData();
            formData.append('file', resume);
            formData.append('user', user_id);

            axios.post('http://127.0.0.1:8000/api/add_resume', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    const datas = response.data.message;
                    setResumeMess(datas);
                    setStatus(response.data.status);
                })
                .catch(error => {
                    setResumeMess("Error uploading your resume");
                });

        }
    }
            return (
                <div className="topic">
                    <section className="login">
                        <Wrapper>
                            <h3 className='exp'>Upload your resume here</h3>
                            <div className="login__container">
                                <div className="form2">
                                    <div className="form-contents1">
                                        <div className="fnames">
                                            <label>Upload your resume</label>
                                            <input type="file" placeholder='select your resume' className="fname" onChange={getResume} required />
                                            <div className={status}>{resumeMess}</div>
                                        </div>

                                        <div className="summit-signup">
                                            <button className='sigbtn' onClick={uploadResume} >Save</button>
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

export default Resume