import React, {useState} from 'react'; 
// import ProjectList from '../ProjectList/index'; 

function Portfolio(){
    const [project] = useState([
        {
          name: 'Work Day Scheduler',
          deployedLink: 'https://miyun94.github.io/scheduler/',
          github: 'https://github.com/miyun94/scheduler',
          imageId: 0
      },
      {
          name: 'Budget Tracker',
          deployedLink: 'https://budgettracker042521.herokuapp.com/',
          github: 'https://github.com/miyun94/budget-tracker',
          imageId: 1
      },
      {
          name: 'Book Search',
          deployedLink: 'https://salty-spire-75874.herokuapp.com/',
          github: 'https://github.com/miyun94/book-search-engine',
          imageId: 2
      },    
      {
          name: 'Note Taker',
          deployedLink: 'https://github.com/miyun94/note-taker',
          github: 'https://github.com/miyun94/note-taker',
          imageId: 3
      }, 
      {
          name: 'Event Planner',
          deployedLink: 'https://jcc83267.github.io/Event-Planner/',
          github: 'https://github.com/jcc83267/Event-Planner',
          imageId: 4
      },    
      {
          name: 'Flowers Dating App',
          deployedLink: ' https://send-flowers.herokuapp.com',
          github: 'https://github.com/matt-gross-27/flowers',
          imageId: 5
      },    
      ]);

      const projectList = project.map((project, i) =>
      <div>
          <br/>
          <span><h3>{project.name}</h3>
             
                  <a href={`${project.deployedLink}`} target="_blank" rel="noreferrer">
                      Deployed link
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                      github link
                  </a></span>
                                             
          <div className={`project${i} divBG`}></div>
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