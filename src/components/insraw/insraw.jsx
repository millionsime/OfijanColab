import React from 'react'
import Wrapper from '../wrapper/Wrapper';
import Logo from '../../assets/visa.jpg';
import "./insraw.scss";
import { FaAddressBook } from 'react-icons/fa';

const insraw = () => {
  return (
    <section className="insraw">

        <Wrapper>
            <div className='__cards'>

           
        <div className="__card">
       
            <div className="__list_container">
                <div className="__list">
                    <div className='abbe'><FaAddressBook/> <p>Abbebe</p></div>
                    <div className='abbe'><FaAddressBook/> <p>Abbebe</p></div>
                    <div className='abbe'><FaAddressBook/> <p>Abbebe</p></div>
                </div>
               <div className="imegachin"><img src={Logo} alt=""  />
               </div>
              
               
            </div>
            <div className='thebutton'>
            <a href="#" className="button-primary">Get  the Card online </a>
            </div>
        </div>
        <div className="__card">
       
            <div className="__list_container">
                <div className="__list">
                    <h5>Abbebe</h5>
                    <h5>Kebede</h5>
                    <h5>Zeleke</h5>
                </div>
               <div className="imegachin"><img src={Logo} alt=""  />
               </div>
            </div>
            <div className='thebutton'>
            <a href="#" className="button-primary">Get  the Card online </a>
            </div>
        </div>
        <div className="__card">
       
       <div className="__list_container">
           <div className="__list">
               <h5>Abbebe</h5>
               <h5>Kebede</h5>
               <h5>Zeleke</h5>
           </div>
          <div className="imegachin"><img src={Logo} alt=""  />
          </div>
       </div>
       <div className='thebutton'>
       <a href="#" className="button-primary">Get  the Card online </a>
       </div>
         </div>
        <div className="__card">
       
       <div className="__list_container">
           <div className="__list">
               <h5>Abbebe</h5>
               <h5>Kebede</h5>
               <h5>Zeleke</h5>
           </div>
          <div className="imegachin"><img src={Logo} alt=""  />
          </div>
       </div>
       <div className='thebutton'>
       <a href="#" className="button-primary">Get  the Card online </a>
       </div>
        </div>
        </div>
        </Wrapper>
    </section>
  
  )
}


export default insraw
