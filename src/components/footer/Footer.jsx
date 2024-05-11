import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='footer'>
      <h1>David Mwangi</h1>
      <div className="footer__links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer__socials">
        <a href="#"><FaInstagram /></a>
        <a href="#"><BsTwitterX /></a>
        <a href="#"><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <p>&copy;{year}. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
