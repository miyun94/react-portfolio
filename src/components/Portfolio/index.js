import React, {useState} from 'react'; 
// import ProjectList from '../ProjectList/index'; 
import githubIcon from '../../assets/icons/github.png'; 
import imageZero from '../../assets/screenshots/0.png'; 
import imageOne from '../../assets/screenshots/1.png'; 
import imageTwo from '../../assets/screenshots/2.png'; 
import imageThree from '../../assets/screenshots/3.png'; 
import imageFour from '../../assets/screenshots/4.png'; 
import imageFive from '../../assets/screenshots/5.png'; 
import imageSix from '../../assets/screenshots/6.png'

function Portfolio(){
    const [project] = useState([
        {
          name: 'Work Day Scheduler',
          deployedLink: 'https://miyun94.github.io/scheduler/',
          github: 'https://github.com/miyun94/scheduler',
          imageLink: imageZero
      },
      {
          name: 'Budget Tracker',
          deployedLink: 'https://budgettracker042521.herokuapp.com/',
          github: 'https://github.com/miyun94/budget-tracker',
          imageLink: imageOne
      },
      {
          name: 'Book Search',
          deployedLink: 'https://salty-spire-75874.herokuapp.com/',
          github: 'https://github.com/miyun94/book-search-engine',
          imageLink: imageTwo
      },    
      {
          name: 'Note Taker',
          deployedLink: 'https://github.com/miyun94/note-taker',
          github: 'https://github.com/miyun94/note-taker',
          imageLink: imageThree
      }, 
      {
          name: 'Event Planner',
          deployedLink: 'https://jcc83267.github.io/Event-Planner/',
          github: 'https://github.com/jcc83267/Event-Planner',
          imageLink: imageFour
      },    
      {
          name: 'Flowers Dating App',
          deployedLink: ' https://send-flowers.herokuapp.com',
          github: 'https://github.com/matt-gross-27/flowers',
          imageLink: imageFive
      },    
      {
        name: 'Memonto',
        deployedLink: 'https://rocky-shelf-98146.herokuapp.com/',
        github: 'https://github.com/davevebber/memonto',
        imageLink: imageSix
    },   
    ]);

      const projectList = project.map((project, i) =>
      <div>
          <br/>
          <span>
                <div className="backgroundImage" style = {{ backgroundImage: `url(${project.imageLink})` }}>
                  <a href={`${project.deployedLink}`} target="_blank" rel="noreferrer">
                      {project.name}
                  </a>
                  <br></br>
                  <a href={project.github} target="_blank" rel="noreferrer">
                      <img src={githubIcon} style={{width: "5%"}}></img>
                  </a>
                  </div>
                  </span>                          
          <br/>
      </div>
  )
  console.log(project[1].name)
  return (
      <div>
          <h1>Portfolio</h1>
          <div>
              {projectList}
          </div>
      </div>
  );

}

export default Portfolio; 