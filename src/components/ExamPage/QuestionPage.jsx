import Img2 from '../../assets/resource2.png'
const QuestionPage = props => {
  return (
    <div className="features__feature white-feature">
         <div className="user-item__info">
          <h2>{props.name}</h2>

          <h3>
            {props.name} 
          </h3>
          <h2>{props.choice1}</h2>
          <h2>{props.choice2}</h2>
          <h2>{props.choice3}</h2>
          <h2>{props.choice4}</h2>
              </div>
      </div>
  )
}

export default QuestionPage