import React, { useEffect, useState } from 'react'
import  "./Navbar.css"
import logo from '../../assets/logo.png';

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

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
   <nav className={classN} >
    <img src={logo} alt="" />
    <ul>
      <li>Home</li>
      <li>Programs</li>
      <li>About Us</li>
      <li> Campus</li>
      <li>Testimonials</li>
      <li><button className='btn'>Contact Us</button></li>
    </ul>
   </nav>
  )
}

export default Navbar
