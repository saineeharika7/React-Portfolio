import React from 'react'
import './Projects.css'
import Card from "react-bootstrap/Card";
import todo from '../images/todo.jpg'
import netflix from '../images/netflix.jpg'
import portfolio from '../images/portfolio.jpg'
import weather from '../images/weather.jpg'
import Travel from '../images/Travel.jpg'




/*import images3 from '../images/image4.jpg'*/


function Projects() {

    return (
        <div id ="projects" className ="project-container">
            <div>
            <h1 >PROJECTS</h1>
            </div>
            <h3>Check Out my projects below </h3>
                <div className ="cards_wrapper">  
                <ul className ="card_lists">
                  <li>
                    <Card 
                    className ="card_item">
                        <a href="https://netflix-clone-978d8.web.app">
                            <Card.Img className ="card_img" src ={netflix} />
                          
                        </a>
                   </Card>
                   
                  </li>
                  <li>
                     <Card className ="card_item">
                     <a href="https://romantic-almeida-f0ccbc.netlify.app/">
                      <Card.Img className ="card_img" src ={portfolio} />
                      </a>
                   </Card>
                  </li>
                  </ul>
                 
                <ul className ="card_lists">
                  <li>
                    <Card 
                    className ="card_item">
                        <a href="https://romantic-almeida-f0ccbc.netlify.app/">
                            <Card.Img className ="card_img" src ={Travel} />
                          
                        </a>
                   </Card>
                   
                  </li>
                  <li>
                     <Card className ="card_item">
                     <a href="https://admiring-jang-8c2f4c.netlify.app/">
                      <Card.Img className ="card_img" src ={todo} />
                      </a>
                   </Card>
                  </li>
                 
                  <li>
                    <Card className ="card_item">
                    <a href="https://trusting-euclid-7327e2.netlify.app">
                      <Card.Img className ="card_img" src ={weather} />
                      </a>
                   </Card>
                  </li>
                   
                </ul>
                    
                   
                   
                </div>
                
           </div>
    )
}

export default Projects
