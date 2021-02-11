import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className="navbar-container">
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <Link
                                to="home"
                                spy={true}
                                duration={1000}
                                className="nav-links"
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="aboutme"
                                spy={true}
                                duration={1000}
                                className="nav-links"
                                onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="projects"
                                spy={true}
                                duration={1000}
                                className="nav-links"
                                onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="contactme"
                                spy={true}
                                duration={1000}
                                className="nav-links"
                                onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a 
                            className="nav-links"
                            onClick={closeMobileMenu}
                            href= "https://drive.google.com/file/d/1nNvAZh3ZzJy1TK3GWOe-sN0QeWl-gH7l/view?usp=sharing">
                                Resume 
                            </a>
                               
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
