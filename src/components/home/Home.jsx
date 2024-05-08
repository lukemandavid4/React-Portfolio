import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h4>Hello I&apos;m</h4>
        <h1>David Mwangi</h1>
        <p>Full-Stack Developer</p>
      </div>
      <div className="home__cv">
        <a href="" download>Download CV</a>
        <a href="#">Let&apos;s Talk</a>
      </div>
      <div className="home__image">
        <img src="../../src/assets/portfolio-removebg.png" alt="image" />
      </div>
      <div className="home__links">
        <FaLinkedin />
        <FaGithub />
        <FaDribbble />
        <div className="home__links--line"></div>
      </div>
      <div className="home__scroll">
        <a href="#">Scroll Down</a>
      </div>
    </div>
  )
}

export default Home
