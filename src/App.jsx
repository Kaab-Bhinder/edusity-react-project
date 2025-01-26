import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Program from './Components/Programs/Program'
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
    </div>
    </>
    
  )
}

export default App
