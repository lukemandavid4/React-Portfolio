import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import './home.css'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__header">
        <h4>Hello I&apos;m</h4>
        <h1>David Mwangi</h1>
        <p>Full-Stack Developer</p>
      </div>
      <div className="home__cv">
        <a href="../../src/assets/curriculum vitae.docx" download target="__blank" id="cv"  rel="noopener noreferrer">Download CV</a>
        <a href="#" id="talk">Let&apos;s Talk</a>
      </div>
      <div className="home__image">
        <img src="../../src/assets/portfolio-removebg.png" alt="image" />
      </div>
      <div className="home__links">
        <a href="https://www.linkedin.com/in/lukeman-david-6b88b1212/" target="__blank"><FaLinkedin /></a>
        <a href="https://github.com/lukemandavid4" target="__blank"><FaGithub /></a>
        <a href="https://dribbble.com/lukemandavid" target="__blank"><FaDribbble /></a>
        <div className="home__links--line"></div>
      </div>
      <div className="home__scroll">
        <a href="#">Scroll Down</a>
      </div>
    </div>
  )
}

export default Home
