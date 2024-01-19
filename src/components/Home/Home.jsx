import React from 'react'
import Hero from "../hero/Hero"
import CounterUpPage from "../counter/CounterUpPage"
import CompanySection from "../companySection/CompanySection"
import FeaturesSection from "../featuresSection/FeaturesSection"
import SignUpSection from "../SignUpSection/SignUpSection"
import Footer from "../footer/footer"
import Plans from "../PlanSection/PlanSection";
import Insraw from "../insraw/insraw"
import Testimonals from '../Testimonals/Testimonals'

const Home = () => {
  return (
    <>
      <Hero/>
      
      
     {/* <CounterUpPage/> */}
      <FeaturesSection/>
      <CompanySection/> 
      {/* <SignUpSection/>  */}
      <Testimonals/>
  
   
    </>
  )
}

export default Home
