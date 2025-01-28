import { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Program from './Components/Programs/Program'
import Testimonial from './Components/Testimonials/Testimonial'
import Title from './Components/Title/Title'
import Video_Player from './Components/Video_Player/Video_Player'
import './index.css'

function App() {
  const [play,setPlay]=useState(false);
  return (
    <>
    <Navbar/> 
    <Hero/>
    <div className="container">
   <Title subtitle="Our Program" title="What We Offer" ></Title>
    <Program/>
    <About setPlay={setPlay} />
    <Title subtitle="Gallery" title="Campus Photos"></Title>
    <Campus/>
    <Title subtitle="Testimononials" title="What Student Says"></Title>
    <Testimonial/>
    <Title subtitle="Contact Us" title="Get In Touch"></Title>
    <Contact/>
    <Footer/>
    </div>
    <Video_Player Play={play} setPlay={setPlay}/> 
    </>
    
  )
}

export default App
