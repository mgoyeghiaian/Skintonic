import { useRef } from "react";
import './Navbar.css';
import Logo from '../../assets/Logo.png'
import { CloseOutlined, Menu, X } from "@mui/icons-material";

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
		<CloseOutlined/>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
		<Menu/>
			</button>
		</header>
	);
}

export default Navbar;
