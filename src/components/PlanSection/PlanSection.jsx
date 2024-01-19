import "./PlanSection.scss";
import Wrapper from "../wrapper/Wrapper";
import Tick from "../../assets/visa.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

import React from 'react'

export default function PlanSection() {
  return (
    <section className="plans">
        <Wrapper>
            <h3>Choose a plan for your budget</h3>

            <div className="plans__container">
                <div className="plans__card">
                    <div className="plans__card-left">
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents ichi nec h </p>
                        </div> 
                       
                        <a href="#" className="button-primary">Get  the thrd Card online</a>
                    </div>
                   
                </div>
                 <div className="plans__card-right">
                        <img src={Tick} alt=""></img>
                        <div className="plans__card-title">
                            <h6>Standard card</h6>
                            <span>$ 0.00USD /Month</span>
                        </div>
                    </div>
                <div className="plans__card">
                    <div className="plans__card-left">
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <a href="#" className="button-primary">Get Card online</a>
                    </div>
                    <div className="plans__card-right">
                        <img src={Tick} alt=""></img>
                        <div className="plans__card-title">
                            <h6>Standard card</h6>
                            <span>$ 0.00USD /Month</span>
                        </div>
                    </div>
                </div>
                
                <div className="plans__card">
                    <div className="plans__crad-left">
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <div className="plans__card-feature">
                            <FaArrowAltCircleRight/>
                            <p>Free and without documents</p>
                        </div>
                        <a href="#" className="button-primary">Get  the 4th Card online</a>
                    </div>
                    <div className="plans__card-right">
                        <img src={Tick} alt=""></img>
                        <div className="plans__card-title">
                            <h6>Standard card</h6>
                            <span>$ 0.00USD /Month</span>
                        </div>
                    </div>
                </div>
                <div className="plans__last-card">
                    <h3>Custom Plan</h3>
                    <a href="#" className="button-outline-2">
                        Fill out our form for your cutom plan
                    </a>
                </div>
            </div>
        </Wrapper>
    </section>
  
  )
}
