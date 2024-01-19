import React, { useState, useEffect } from 'react';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import "./question.scss";
import axios from 'axios';
import '../../components/featuredInfo/featuredInfo.css'
import '../../pages/home/home.css'
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import API_BASE_URL from '../../../Globals/apiConfig';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Link } from 'react-router-dom';
export default function SelectExam() {
    const { deptId, userId } = useLoggedInUser();
    const [examsUri, setExamsUri] = useState('');
    const [data, setData] = useState([]);
    const [userID, setUserID] = useState('');
    useEffect(() => {
         setUserID(userId);
         setExamsUri(`${API_BASE_URL}/all_exams/${userId}`);
       
        axios.get(examsUri)
            .then(response => {
                setData(response.data.exams);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [examsUri]);
    return (
        <div className='home'>
            <h3>Select Exam You want add question to:</h3>
            <div className="mulu_mulu">
                {data && data.map((eData) => (
                    <div className="featuredItem" key={eData.id}>
                        <span className="featuredTitle">Exam Name: {eData.exam_name}</span>
                        <div className="featuredMoneyContainer gon_le_gon">
                            <span className="featuredMoneyRate">
                                Sales 0 <ArrowUpward className="featuredIcon" />
                            </span>
                            <span className="featuredMoney">3 Question's</span>
                        </div>
                        <div className='gon_le_gon'>
                            <span className="featuredSub">Visited by 0 people so far</span>

                        </div>
                        <Link to={'/add_questions'} state={{ name: eData.id }} className='tade_btn'>
                            Add Question
                        </Link>
                    </div>
                ))}


            </div>

        </div>
    );
}
