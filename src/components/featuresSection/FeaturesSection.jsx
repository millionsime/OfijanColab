import './FeaturesSection.scss'
import Wrapper from '../wrapper/Wrapper'
import Img1 from '../../assets/resource1.png'
import Img2 from '../../assets/resource2.png'
import Img3 from '../../assets/resource3.png'
import ExploreIcon from '@mui/icons-material/Explore';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from 'react-router-dom'

const FeaturesSection = () => {
  return <section className="features">
    <Wrapper>
      <h6></h6>
    <div className="features__text">
        </div>
      <div className="features__container">
        <div className="features__feature dark-feature">
        <ExploreIcon/>
          <h4 className="dark-feature-title">
            Test yourself before exam
          </h4>
          <ul className="list-group">
            <p>Ofijan serves as a dedicated platform for individuals to formally confirm their readiness to undertake the actual test. This is achieved through the administration of meticulously crafted sample professional questions that are specifically designed to assess the candidate's proficiency and knowledge in their respective field. By engaging with these thoughtfully curated questions on Ofijan, individuals can validate their preparedness and demonstrate their aptitude in a comprehensive and professional manner.</p>
            {/* <li><p>Based on the new MoE Carriculum</p></li>
            <li><p>Answers with breif description</p></li>
            <li><p>For all Subjects</p></li> */}
          </ul>
         
        </div>
        <div className="features__feature white-feature">
        <ExploreIcon/>
          <h4 className="white-feature-title">
            Take test and see the answers
          </h4>
          <p>
          Ofijan is a reputable platform that facilitates the administration of tests, providing individuals with the opportunity to assess their knowledge and skills in a controlled environment. By utilizing Ofijan, individuals can undertake tests and gain access to comprehensive answer evaluations. This professional platform ensures a reliable and efficient process for test-taking, enabling users to gauge their performance and enhance their understanding of the subject matter through detailed answer analysis.
          </p>
        </div>
        <div className="features__feature dark-feature">
          <ExploreIcon/>
          <h4 className="dark-feature-title">
          Expert Instructors
          </h4>
         <p>
         Ofijan is a distinguished platform that boasts a team of highly qualified and experienced instructors and professors, who specialize in preparing individuals for a wide range of exams, including exit exams, entrance exams, and professional assessments. The platform offers meticulously crafted exam preparation materials, designed to comprehensively cover the subject matter and ensure that candidates are well-equipped to tackle the challenges of the exam. The professional guidance and mentorship provided by the instructors and professors on Ofijan are unparalleled, ensuring that individuals are equipped with the necessary knowledge and skills to excel in their respective fields.          </p>
        </div>
        <div className="features__feature white-feature">
        <ExploreIcon/>
          <h4 className="white-feature-title">
            Exit Exam Question!
          </h4>

          <p>
          Ofijan is a distinguished platform that boasts a team of highly qualified and experienced instructors and professors, who specialize in preparing individuals for a wide range of exams, including exit exams, entrance exams, and professional assessments. The platform offers meticulously crafted exam preparation materials, designed to comprehensively cover the subject matter and ensure that candidates are well-equipped to tackle the challenges of the exam. The professional guidance and mentorship provided by the instructors and professors on Ofijan are unparalleled, ensuring that individuals are equipped with the necessary knowledge and skills to excel in their respective fields.          
          </p>
        </div>
        <div className="features__feature dark-feature">
        <ExploreIcon/>
          <h4 className="dark-feature-title">
            Grade 6 , 8 , 12 Exam Question's
          </h4>
          <p>
          At Ofijan, we take great care in developing our question bank. Our team of experts meticulously crafts each question, ensuring they align with authoritative guides and adhere to the most up-to-date curriculum set by the Ethiopian Ministry of Education <b>(#MoE).</b> This means that the questions you encounter on Ofijan are not only relevant and comprehensive but also reflect the specific knowledge and skills required by the MoE curriculum. By utilizing our platform, you can have confidence that you are practicing with high-quality questions that are directly aligned with the educational standards set by the MoE.
            </p>
            
        </div>
     
        <div className="features__feature white-feature">
        <ExploreIcon/>
          <h4 className="white-feature-title">
          Simple Payment getway
          </h4>
          <p>
          Ofijan aims to provide fair pricing for its exams, ensuring accessibility for all individuals. To make the payment process simple and convenient, we have implemented the Chapa(www.chapa.co) payment gateway. With Chapa, users can easily complete their payments in a few simple steps. What makes #Chapa.co even more convenient is that it works seamlessly with 26 banks in Ethiopia, allowing users to choose their preferred bank for the transaction. This integration with multiple banks ensures a smooth and hassle-free payment experience for our valued users.
          </p>
        </div>

        
      </div>
   
    </Wrapper>
  </section>
}

export default FeaturesSection