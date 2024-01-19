import './footer.scss'
import Wrapper from '../wrapper/Wrapper'
import PlayStore from "../../assets/google.png";
import Logo from "../../assets/ofijan_negetive.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Feedback from 'react-bootstrap/esm/Feedback';
const footer = () => {
  return (
    <section className='footer'>
        <Wrapper>
          <Feedback/>
        <div className='footer__text'>
            <h3>Learn, Study & Test Your Study with  <span>Ofijan</span></h3>
        </div>
        <ul className='footer__links'>
            <li><FacebookIcon/></li>
            <li><TelegramIcon/></li>
            <li><TwitterIcon/></li>
            <li><LinkedInIcon/></li>
            <li><YouTubeIcon/></li>
        </ul>
        <ul className='footer__links'>
            <li>Services</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>privacy policy</li>
            <li>FAQS</li>
        </ul>
    </Wrapper>
    </section>
  )
}

export default footer

