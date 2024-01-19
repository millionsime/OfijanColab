
import './StyleBox.css'
import  Instructions from './Instructions'
import QuestionPage from './QuestionPage';
import data from './data';


const handleClick = (event) => {
  <QuestionPage 
  name = {event.target.name}
  choice1 = {event.target.choice1}
  choice2 = {event.target.choice2}
  choice3 = {event.target.choice3}
  choice4 = {event.target.choice4}
  answer = {event.target.answer}
  />
}
 

function QuestionList() {
  return (
    <>
      <div className="features__feature dark-feature">
        <div> <Instructions /> </div>
        
        {
          data.map(question => (
          <button key={question.name} id = "1" className="square" onClick={handleClick} >
            <span role="img" aria-label={question.name}
                  id={question.Id}>{question.Id}</span>
                  </button> ))
           }

        
      </div>
    </>
  )
}

export default QuestionList