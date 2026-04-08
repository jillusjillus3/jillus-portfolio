import Navbar from './Portfolio/Navbar'
import About from './Portfolio/About'
import Tech from './Portfolio/Tech'
import Experience from './Portfolio/Experience'
import Education from './Portfolio/Education'
import Project from './Portfolio/Project'
import Contact from './Portfolio/Contact'
import Footer from './Portfolio/Footer'


function App() {
  return (
    <>
      <Navbar />
      <About />
      <Tech />
      <Experience />
      <Education />
      <Project />
      <Contact />
      <Footer />
      <div className="app-container">
        {/* Main Content will go here */}
      </div>
    </>
  )
}

export default App
