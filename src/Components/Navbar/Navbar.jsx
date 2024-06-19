import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import Logo from '../../assets/Logo.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<span className="logo"><a href="/#"><img className="Logo-img" src={Logo} alt="Logo"/></a></span>
			<nav className="nav-bar" ref={navRef}>
				<a href="../Home">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">Services</a>
				<a href="/#">Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
