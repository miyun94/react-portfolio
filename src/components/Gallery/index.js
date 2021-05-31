import React from 'react'; 
import screenshotOne from '../../assets/screenshots/50-hero-section-mock-up.jpg'; 


function Gallery(){
    // const currentCategory={
    //     name:"something", 
    //     description: "picture of project"
    // }
    return(
        <section>
            <h1 id="about">Gallery</h1>
            <h2>Run Buddy</h2>
        <p>Run Buddy</p>
        <div className="flex=row">
            <img src={screenshotOne} style={{width: "50%"}} alt="Run Buddy Application Screenshot" className="img-thumbnail mx-1"/>
        </div>
        </section>

    )
}

export default Gallery; 