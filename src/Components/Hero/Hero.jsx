import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='Hero container'>
      <div className='HeroText'>
        <h1>We Ensure BetterEducation For A Better World</h1>
        <p>We  design a curriculum that fosters holistic growth, empowering students with knowledge and skills for a better world.</p>
        <button className='btn'> Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
