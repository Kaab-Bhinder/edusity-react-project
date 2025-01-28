import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play from "../../assets/play-icon.png"
const About = ({setPlay}) => {
  return (
    <div className='about'>
      <div className="left">
        <img className="ab_im" src={about_img} alt="" />
        <img className="play" src={play} alt=""  onClick={()=>{
          console.log("cicked");setPlay(true)}}/>
      </div>
      <div className="right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurtuting Tomorrrow's Leaders Today</h2>  
        <p>Our university is committed to providing world-class education that empowers students to excel in their chosen fields.</p>
        <p>With a focus on innovation, we prepare leaders who can adapt to a rapidly changing world and drive meaningful impact.</p>
        <p>Join us to be part of a transformative learning journey that shapes your future and inspires greatness.</p>
      </div>
      
    </div>
  )
}

export default About
