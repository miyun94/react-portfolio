import React from 'react'; 
import { NavLink } from "react-router-dom";

function Nav() {
    return(
        <header className="flex-row px-1">
            <h2>My Portfolio</h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                    <NavLink to="/react-portfolio/about">About</NavLink>
                    </li>
                    <li className="mx-2">
                    <NavLink to="/react-portfolio/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="mx-2">
                    <NavLink to="/react-portfolio/contact">Contact</NavLink>
                    </li>
                      <li className="mx-2">
                    <NavLink to="/react-portfolio/resume">Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
  }
  
export default Nav; 