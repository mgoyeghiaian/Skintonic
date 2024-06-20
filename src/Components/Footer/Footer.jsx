import './Footer.css'
import In2Info from '../../assets/in2info.png'
import Logo from '../../assets/Logo.png'
const Footer = () => {
  return (
    <div className='footer'>
     <div className='first-sec'>
            <div className='Logo'>
              <a href='/#'>
              <img src={Logo} alt="Logo"/>
                </a>
            </div>
         <div className='main-links'>
            <div className='links'>
              
                <h2>Sections</h2>
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
              <h2>Media</h2>
              <a href='/#'>
                  Twitter
                </a>  
                <a href='/#'>
                  Facebook
                </a>
                <a href='/#'>
                  Instagram
                </a>   
            </div>
        </div>
      </div>
      <div className='second-sec'>
        <p>
        © 2024 all rights reserved | Skin Tonic | SITEMANAGER V4.0
       <a href='http://www.in2info.com/' target='blank'> <img src={In2Info} alt='In2Info'/> </a> 
        </p>
      </div>
      </div>
  )
}

export default Footer