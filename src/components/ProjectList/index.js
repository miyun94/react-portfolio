// import React, {useState} from 'react'; 


// const ProjectList = ({ category }) => {
//     // const [isModalOpen, setIsModalOpen] = useState(false);
//     // const [currentProject, setCurrentProject] = useState();
//     const [project] = useState([
//       {
//         name: 'Work Day Scheduler',
//         deployedLink: 'https://miyun94.github.io/scheduler/',
//         github: 'https://github.com/miyun94/scheduler',
//         imageId: 0
//     },
//     {
//         name: 'Budget Tracker',
//         deployedLink: 'https://budgettracker042521.herokuapp.com/',
//         github: 'https://github.com/miyun94/budget-tracker',
//         imageId: 1
//     },
//     {
//         name: 'Book Search',
//         deployedLink: 'https://salty-spire-75874.herokuapp.com/',
//         github: 'https://github.com/miyun94/book-search-engine',
//         imageId: 2
//     },    
//     {
//         name: 'Note Taker',
//         deployedLink: 'https://github.com/miyun94/note-taker',
//         github: 'https://github.com/miyun94/note-taker',
//         imageId: 3
//     }, 
//     {
//         name: 'Event Planner',
//         deployedLink: 'https://jcc83267.github.io/Event-Planner/',
//         github: 'https://github.com/jcc83267/Event-Planner',
//         imageId: 4
//     },    
//     {
//         name: 'Flowers Dating App',
//         deployedLink: ' https://send-flowers.herokuapp.com',
//         github: 'https://github.com/matt-gross-27/flowers',
//         imageId: 5
//     },    
//     ]);
  
//     const currentProject = project.map((project, i));
  
//     // const toggleModal = (image, i) => {
//     //   setCurrentPhoto({ ...image, index: i });
//     //   setIsModalOpen(!isModalOpen);
//     // };
  
//     return (
//       <div>
//         {/* {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />} */}
//         <div className="flex-row">
//           {project.map((image, i) => (
//             <img
//               src={require(`../../assets/screenshots/${i}.png`)}
//               alt={image.name}
//               className="img-thumbnail mx-1"
//             //   onClick={() => toggleModal(image, i)}
//               key={image.name}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default PhotoList;
  