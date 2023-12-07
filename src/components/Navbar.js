import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav className="navbar">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
                Home
            </Link>
            <Link activeClass="active" to="research" spy={true} smooth={true} offset={-70} duration={500}>
                Research
            </Link>
            <Link activeClass="active" to="teaching" spy={true} smooth={true} offset={-70} duration={500}>
                Teaching
            </Link>
            <Link activeClass="active" to="awards" spy={true} smooth={true} offset={-70} duration={500}>
                Awards
            </Link>
            {/* <Link activeClass="active" to="news" spy={true} smooth={true} offset={-70} duration={500}>
                News
            </Link> */}
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                About
            </Link>
        </nav>
    );
}

export default Navbar;
