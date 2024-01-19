import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import QuestionPage from '../../components/ExamPage/QuestionPage';
import Questions from '../../components/Questions/Questions';
const Plate = () => {
    const { message } = useParams();
    const [isPayed, setIsPayed] = useState(message);
    const payedMessage=()=>{
        if(message == 1)
        {
          setIsPayed(true);
        }
        else{
          setIsPayed(false);
        }
          };
          useEffect(()=> { 
            payedMessage();
          },[])
  return (
    <div>
      {isPayed ? (
            <p>payed</p>):(<p>not payed</p>)}
            <Questions/>
    </div>
  )
}
export default Plate