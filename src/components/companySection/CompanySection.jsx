import './CompanySection.scss';
import Wrapper from '../wrapper/Wrapper';
import Company1 from '../../assets/inventory 2.png'
import Company2 from '../../assets/inventory 3.png'
import Company3 from '../../assets/brain2.png'
import Company4 from '../../assets/sun2.png'
import Company5 from '../../assets/brain.png'
import Phone from '../../assets/sun3.png'
import Logo from '../../assets/moon.png'
import Ofijan from '../../assets/logo.png'
import moon2 from '../../assets/moon2.png'
import Playstore from '../../assets/inventory 1.png'
import Bg from '../../assets/question.gif'

const CompanySection = () => {
  return <section className="company">
    <Wrapper>
      <hr></hr>
      <h3>Pay easly with all banks in Ethiopia</h3>
      <p>Powered by Chapa Payment API</p>
      <div className="company__companies">
      </div>
      <div className="company__container">
        <div className="company__right">
            <div className="company__point">
              <div className="company__point-icon">
                <div>1</div>
              </div>
              <div className="company__point-text">
                <h5>Select Exam you want to take</h5>
              </div>
            </div>
            <div className="company__point">
              <div className="company__point-icon">
                <div>2</div>
              </div>
              <div className="company__point-text">
                <h5>Click <button className='button-primary'><h5>Buy</h5></button></h5>
              </div>
            </div>
            <div className="company__point">
              <div className="company__point-icon">
                <div>3</div>
              </div>
              <div className="company__point-text">
                <h5>Select your convinient bank</h5>
              </div>
            </div>
          </div>
       
        <div className="company__right">
         
       
            <div className="company__point">
              <div className="company__point-icon">
                <div>4</div>
              </div>
              <div className="company__point-text">
                <h5>Add Your information</h5>
              </div>
            </div>
            <div className="company__point">
              <div className="company__point-icon">
                <div>5</div>
              </div>
              <div className="company__point-text">
                <h5>Click <button className='button-primary'><h5>Ok</h5></button></h5>
              </div>
            </div>
            <div className="company__point">
              <div className="company__point-icon">
                <div>6</div>
              </div>
              <div className="company__point-text">
                <h5>Start test right away.</h5>
              </div>
            </div>
          </div>
        </div>
  
    </Wrapper>
  
  </section>
}

export default CompanySection