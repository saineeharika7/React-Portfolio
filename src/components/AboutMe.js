import React from 'react'
import neehaa from '../images/neehaa.jpg'


import './AboutMe.css'

function AboutMe() {
    return (

        <div id="aboutme" className="aboutme-container"> 
        <div>
                        <h1> ABOUT ME</h1>  

        </div>
            <div className="main-wrapper">
                <ul className ="aboutme-items">
                    <li className ="aboutme-item">
                       <img className ="image-class" src={neehaa} alt="my profilpic" />
                    </li>
                    <li className ="aboutme-item">
                        <div>
                            <p>
                         I have a firm knowledge of HTML, CSS and JavaScript language and possess 
                    a good knowledge <br />of computer software packages (frameworks and tools) that 
                    are used in today’s technology.<br />
                    On a personal level, I am highly-motivated, result oriented, self-driven, 
                    hard-working, <br />fast learner and constantly seeking to improve my skills.<br />
                    In addition to this, I have the ability to adapt to any type of team environment, 
                    I am team <br />oriented and get along with others when working in a group setting. 
                    I also have the ability <br />to work independently while staying on schedule and 
                    meeting those tight deadlines.
                         </p>
                        </div>
                        <div className ="skills-container">
                             <h3>My Skills</h3>
                                  <i class="fab fa-html5" aria-hidden="true"></i>
                        <i class="fab fa-css3" aria-hidden="true"></i>
                        <i class="fab fa-js-square" aria-hidden="true"></i>
                        <i class="fab fa-react"></i>
                        <i class="fab fa-bootstrap"></i>
                       
                        

                        </div>
                       


                    </li>
                </ul>
            </div>
        </div>


    )
}

export default AboutMe
