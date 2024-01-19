import React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
const TimePlate = ({isLoggedin, timeLeft }) => {
  return (
    <div className="timePlate">
                        <div className="timebox1"></div>
                       {isLoggedin? (<div className='timebox2'>
                            <TimerIcon /> Time left {timeLeft} sec
                        </div>) :
                        (<div className='timebox2'>
                             <TimerIcon /> Time left 00:00 sec
                             
                        </div>)} 
                    </div>
  )
}

export default TimePlate
