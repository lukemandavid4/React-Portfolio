import { MdOutlineMail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h4>Get in Touch</h4>
      <h1>Contact Me</h1>
      <div className="contact__bottom">
        <div className="contact__left">
          <div className="contact__left--links">
            <MdOutlineMail className="icon"/>
            <h4>Email</h4>
            <p>dmwangi595@gmail.com</p>
            <a href="#">Send a message</a>
          </div>
          <div className="contact__left--links">
            <MdOutlineWhatsapp className="icon"/>
            <h4>Whatsapp</h4>
            <p>+245 700577740</p>
            <a href="#">Send a message</a>
          </div>
        </div>
        <div className="contact__right">
          <form>
            <input type="text" name="name" id="name" placeholder="Your Full Name"/>
            <input type="email" name="email" id="email" placeholder="Your Email"/>
            <textarea
              placeholder="Your Message"
              rows={4} 
              cols={50}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
