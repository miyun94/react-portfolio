import React from 'react'; 
import profileImg from '../../assets/screenshots/20201130_143132_952.jpg'; 

function About(){
    return(
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={profileImg} className="my-2" style={{width: "5%"}} alt="cover image"/>

            <div className="my-2">
                <p>I am a full stack web-developer in the process. In my freetime, I like to practice and further my coding skills by tackling on new projects or going over old lesson plans from my time at UCLA's Full Stack Web Development Program.</p>
            </div>
        </section>
        
    )
}

export default About; 