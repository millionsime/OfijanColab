import React, {useState} from 'react';
import { FaBars , FaQuestion, FaChalkboardTeacher, FaPeopleArrows, FaSchool} from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "./CounterUpPage.scss";
export default function CounterUpPage() {
  const [counterOn, setCounterOn]= useState(false); 
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={()=>setCounterOn(false)}>

    
    <div className='counter-up'>
      <div className='content'>
        <div className='cbox'>
          <div className='icon'>
           <FaQuestion/>
          </div>
          <div className='counter'>{ counterOn && <CountUp start={999900} end={1000000} duration={2} delay={0}/>}
      +  </div>
          <div className='text'>Exam Questions</div>
        </div>
        <div className='cbox'>
          <div className='icon'>
            <FaChalkboardTeacher/>
          </div>
          <div className='counter'>{ counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
      +  </div>
          <div className='text'>Pofessional Istructors</div>
        </div>
        <div className='cbox'>
          <div className='icon'>
            <FaPeopleArrows/>
          </div>
          <div className='counter'>{ counterOn && <CountUp start={100} end={1000} duration={2} delay={0}/>}
      +  </div>
          <div className='text'>Students</div>
        </div>
        <div className='cbox'>
          <div className='icon'>
            <FaSchool/>
          </div>
          <div className='counter'>{ counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
      +  </div>
          <div className='text'>Partners</div>
        </div>
      </div>
    </div>
    
    </ScrollTrigger>
  )
}

  

