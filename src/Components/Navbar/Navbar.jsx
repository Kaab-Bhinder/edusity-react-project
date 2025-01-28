import React, { useEffect, useState } from 'react'
import  "./Navbar.css"
import logo from '../../assets/logo.png';
import menu from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [scroll,setScroll]=useState(true);
  const [classN, setClassN] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScroll(false);
        setClassN("dark");
      } else {
        setScroll(true);
        setClassN("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    if(mobileMenu){
      setMobileMenu(false);
    }
    else{
      setMobileMenu(true);
    }
  }
  return (
    <nav className={`container ${classN}`}>
    <img  className='logo' src={logo} alt="" />
    <ul className={mobileMenu?'':'hide_mobile_menu'}>
      <li><Link to='Hero' smooth={true} offset={-260} duration={500} >Home</Link></li>
      <li><Link to='program' smooth={true} offset={-260} duration={500} >Programs</Link></li>
      <li><Link to='about' smooth={true} offset={-150} duration={500} >About Us</Link></li>
      <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
      <li><Link to='testimonial' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
      <li><Link  to='contact' smooth={true} offset={-260} duration={500}className='btn'>Contact Us</Link></li>
    </ul>
    <img src={menu} alt="" className='menu_icon' onClick={toggleMenu} />
   </nav>
  )
}


export default Navbar
