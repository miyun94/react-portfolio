import React from 'react'; 


function Resume(){
    return(
        <section id="resume">
        <h1>RESUME</h1>
        <h2>Links</h2>
        <a href='https://docs.google.com/document/d/17cqdUGRJgH6Zhmm9M5O9rIyjbHHOb0nOu_N_2RlB9r4/edit?usp=sharing' target="_blank" rel="noreferrer">
            Resume Link
        </a>
        <h2>Front-end Proficiencies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <h2>Back-end Proficiencies</h2>
        <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySql, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
        </ul>
    </section>
    )
}

export default Resume;