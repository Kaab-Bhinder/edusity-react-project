import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
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
    <Campus/>
    <Title subtitle="Testimononials" title="What Student Says"></Title>
    </div>
    </>
    
  )
}

export default App
