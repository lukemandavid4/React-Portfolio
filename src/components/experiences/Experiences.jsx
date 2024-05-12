import "./experiences.css"
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experiences = () => {
  return (
    <div className="experiences" id="experiences">
      <h4>What Skills I Have</h4>
      <h1>My Experience</h1>
      <div className="experiences__center">
        <div className="experiences__center--left">
          <h1>Frontend Development</h1>
          <div className="experiences__left--down">
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>HTML</p>
              </div>
              <p>Experienced</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>CSS</p>
              </div>
              <p>Experienced</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>Javascript</p>
              </div>
              <p>Experienced</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>Bootstrap</p>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>Tailwind</p>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>React</p>
              </div>
              <p>Experienced</p>
            </div>
          </div>
        </div>
        <div className="experiences__center--right">
          <h1>Backend Development</h1>
          <div className="experiences__right--down">
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>Node JS</p>
              </div>
              <p>Experienced</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>MongoDB</p>
              </div>
              <p>Experienced</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>Python</p>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>Express</p>
              </div>
              <p>Experienced</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>MySQL</p>
              </div>
              <p>Basic</p>
            </div>
            <div className="experiences__center--one">
              <div>
                <span><BsFillPatchCheckFill /></span>
                <p>Django</p>
              </div>
              <p>Basic</p>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Experiences
