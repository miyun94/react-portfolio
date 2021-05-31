import React from 'react'; 
import coverImage from "../../assets/cover/KakaoTalk_20201218_162427081.jpg"

function About(){
    return(
        <section className="my-5">
            <h1 id="about">Portfolio</h1>
            <img src={coverImage} className="my-2" style={{width: "100%"}} alt="cover image"/>
        </section>
        
    )
}

export default About; 