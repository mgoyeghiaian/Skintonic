import './Navbar.css'
import Logo from '../../assets/Logo.jpg'
const Navbar = () => {
  return (
    <div className='nav-bar'>
    <div className='nav-bar-logo'>
      <a href=''>
      <img src={Logo}/>
      </a>
      </div>
      <div className='nav-bar-menu'>
      <ul className='nav-bar-menu-ul'>
        <li className='nav-bar-menu-li'>
          <a className='nav-bar-menu-a' href='/Home'>Home</a>
         </li>
         <li className='nav-bar-menu-li'>
          <a className='nav-bar-menu-a' href='/About Us'>About Us</a>
         </li>
         <li className='nav-bar-menu-li'>
          <a className='nav-bar-menu-a' href='/Services'>Services</a>
         </li>
         <li className='nav-bar-menu-li'>
          <a className='nav-bar-menu-a' href='/Contact Us'>Contact Us</a>
         </li>
      </ul>
      </div>
      </div>
  )
}

export default Navbar