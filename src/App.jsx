import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Program from './Components/Programs/Program'
import Testimonial from './Components/Testimonials/Testimonial'
import Title from './Components/Title/Title'
import './index.css'

function App() {
  
  return (
    <><Navbar/>
    <Hero/>
    <div className="container">
   <Title subtitle="Our Program" title="What We Offer" ></Title>
    <Program/>
    <About/>
    <Title subtitle="Gallery" title="Campus Photos"></Title>
    <Campus/>
    <Title subtitle="Testimononials" title="What Student Says"></Title>
    <Testimonial/>
    <Title subtitle="Contact Us" title="Get In Touch"></Title>
    <Contact/>
    <Footer/>
    </div>
    </>
    
  )
}

export default App
