import './projects.css'

const Projects = () => {
  return (
    <div className="projects" id='projects'>
      <h4>My Recent Work</h4>
      <h1>Projects</h1>
      <div className="projects__cards">
        <div className="projects__card one">
          <div className="projects__card--background"></div>
          <div className="projects__card--name">
            <span>Food Ordering App that allows customers to order different types of food</span>
          </div>
          <div className="projects__card--links">
            <a href="#" id='github'>Github</a>
            <a href="#" id='live'>Live Demo</a>
          </div>
        </div>
        <div className="projects__card two">
          <div className="projects__card--background"></div>
          <div className="projects__card--name">
            <span>EnergyUp Industries with the companies details</span>
          </div>
          <div className="projects__card--links">
            <a href="#" id='github'>Github</a>
            <a href="#" id='live'>Live Demo</a>
          </div>
        </div>
        <div className="projects__card three">
          <div className="projects__card--background"></div>
          <div className="projects__card--name"></div>
          <div className="projects__card--links">
            <a href="#" id='github'>Github</a>
            <a href="#" id='live'>Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
