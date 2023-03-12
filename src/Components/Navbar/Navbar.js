import React from 'react'
import './Navbar.css'

import home from '../../Assets/home.png'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="/">Nitesh Chowdhary</a><span></span></li>
                <li className='home'><a href="/"><img src={home} alt="" /></a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
