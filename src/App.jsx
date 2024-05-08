import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experiences from "./components/experiences/Experiences"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Testimonials from "./components/testimonials/Testimonials"
import './App.css'

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
