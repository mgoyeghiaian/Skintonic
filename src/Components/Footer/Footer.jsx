import './Footer.css'
import In2Info from '../../assets/in2info.png'
import Logo from '../../assets/Logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='first-sec'>
      <div className='logo'>
        <a href='/#'>
        <img src={Logo} alt="Logo"/>
          </a>
      </div>
      <div className='sections'>
        <h3>Sections</h3>
          <a href='../Home'>
            Home
          </a>
          <a href='/#'>
            About Us
          </a>
          <a href='/#'>
            Services
          </a>
          <a href='/#'>
            Contact Us
          </a>          
      </div>
      <div className='links'>
        <h3>Social Media</h3>
          <a href='../Home'>
            Facebook
          </a>
          <a href='/#'>
             Instagram
          </a>
          <a href='/#'>
            Twitter
          </a>        
      </div>
      </div>
      <div className='second-sec'>
      <div className='copyrights'>
        <p>
        © 2024 all rights reserved | Skin Tonic
        </p>
        <p>
        SITEMANAGERV4.0
        <img src={In2Info} alt='In2Info'/>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Footer