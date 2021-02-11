import React from 'react'
import './ContactMe.css'
function ContactMe() {
    return (
        <div id ="contactme" className ="contactme-container">
            <h1>
             CONTACT ME
            </h1>
            <ul className ="contact_items_list">
                <li className ="contact_item_list">
                <i className="fa fa-phone"> </i>
                <span style ={{paddingRight:"70px"}}> +91 8309377548</span>
                </li>
                <li className ="contact_item_list">
                <i className="fa fa-envelope"> </i>
                rs.neeharika@gmail.com
                </li>
                </ul>
                <ul className ="contact_items__list">
                <li className ="contact_item__list">
                    <a href ="https://github.com/saineeharika7"><i className="fab fa-github"></i></a>
                </li>
                <li className ="contact_item__list">
                    <a href ="https://www.linkedin.com/in/neeharika-reppala/"><i className="fab fa-linkedin"></i></a>
                </li>
                
            </ul>
        </div>
    )
}

export default ContactMe
