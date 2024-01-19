import Wrapper from '../wrapper/Wrapper'
import './Grade6.scss';
import Plate from '../QuestionPlate/Plate'
import { Link } from 'react-router-dom';
const Grade6 = () => {
  return <section className="grade6">
    <Wrapper className="grade6-holder">
      <ul className='g6_subjects'>
        <li>Saayiinsii Haawaasaa</li>
        <li>Gadaa</li>
        <li>Heereega</li>
        <li>Fiiziksii</li>
        <li>Haawaasa</li>
        <li>English</li>
      </ul>
      <div className='g6_exams_list'>
        
        <table className='single_exam' border={1}>
          <tr>
            <td><b>BOOKLET CODE: 242</b></td>
            <td><b>SUBJECT CODE:10</b></td>
          </tr>
          <tr>
            <td></td>
            <td><b>TIME ALLOWED: 3:00 HOURS</b></td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={3}>THIS BOOKLET CONTAINS <b>MATHEMATICS EXAMINATION</b> FOR THE <b>SOCIAL SCIENCE </b>CANDIDATES ONLY</td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={3}>IN THIS EXAMINATION THERE ARE A TOTLA OF <b>65 MULTIPLE CHOICE ITEMS</b></td>
          </tr>
          <tr>
          <td  colSpan={5} className='open-holder'>
                   <Link  className='button-open' to={`/ofijan_question_plate/1`}>
                      Open
                    </Link>
                  </td>
            </tr>
        </table>
       
      
        <table className='single_exam' border={1}>
          <tr>
            <td><b>BOOKLET CODE: 242</b></td>
            <td><b>SUBJECT CODE:10</b></td>
          </tr>
          <tr>
            <td></td>
            <td><b>TIME ALLOWED: 3:00 HOURS</b></td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={3}>THIS BOOKLET CONTAINS <b>MATHEMATICS EXAMINATION</b> FOR THE <b>SOCIAL SCIENCE </b>CANDIDATES ONLY</td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={3}>IN THIS EXAMINATION THERE ARE A TOTLA OF <b>65 MULTIPLE CHOICE ITEMS</b></td>
          </tr>
          <tr>
          <td  colSpan={5} className='open-holder'>
                   <Link  className='button-open' to={`/ofijan_question_plate/1`}>
                      Open
                    </Link>
                  </td>
            </tr>
        </table>
        
        <table className='single_exam' border={1}>
          <tr>
            <td><b>BOOKLET CODE: 242</b></td>
            <td><b>SUBJECT CODE:10</b></td>
          </tr>
          <tr>
            <td></td>
            <td><b>TIME ALLOWED: 3:00 HOURS</b></td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={3}>THIS BOOKLET CONTAINS <b>MATHEMATICS EXAMINATION</b> FOR THE <b>SOCIAL SCIENCE </b>CANDIDATES ONLY</td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={3}>IN THIS EXAMINATION THERE ARE A TOTLA OF <b>65 MULTIPLE CHOICE ITEMS</b></td>
          </tr>
          <tr>
          <td  colSpan={5} className='open-holder'>
                   <Link  className='button-open' to={`/ofijan_question_plate/1`}>
                      Open
                    </Link>
                  </td>
            </tr>
        </table>
      </div>
    </Wrapper>
  </section>
}

export default Grade6