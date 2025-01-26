import React from 'react'
import  "./Navbar.css"
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
   <nav >
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
