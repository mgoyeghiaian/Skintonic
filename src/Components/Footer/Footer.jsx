import './Footer.css'
import In2Info from '../../assets/in2info.png'
import Logo from '../../assets/Logo.png'
import { Facebook, Instagram, X } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='first-sec'>
              <a href='/#' className='LogoCon'>
              <img src={Logo} alt="Logo" className='Logo'/>
                </a>
         <div className='main-links'>
            <div className='links1'>
              <div>
                <h2>Sections</h2>
                </div>
                <div className='links2'>
                 <a href='/#'>
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
            </div>        
            <div className='links1'>
              <div>
              <h2>Media</h2>
              </div>
              <div className='links2'>
              <a href='/#'>
                  <X sx={{ fontSize: 26 }}/>
                </a>  
                <a href='/#'>
                  <Facebook sx={{ fontSize: 26 }}/>
                </a>
                <a href='/#'>
                  <Instagram sx={{ fontSize: 26 }}/>
                </a>   
                </div>
            </div>
        </div>
      </div>
      <div className='second-sec'>
        <p>
        © 2024 all rights reserved | Skin Tonic | <span className='sitemanagerrr'>SITEMANAGER</span> V4.0
       <a href='http://www.in2info.com/' target='blank'> <img src={In2Info} alt='In2Info' className='in2infof'/> </a> 
        </p>
      </div>
      </div>
  )
}

export default Footer