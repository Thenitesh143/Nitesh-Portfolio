import React from 'react'

import './Project.css'

import projectimg from '../../Assets/project.jpg'
import hotstar from '../../Assets/projectimg/hotstar.png'
import beats from '../../Assets/projectimg/beats.png'
import hackerbook from '../../Assets/projectimg/hackerbook.png'

const Project = () => {
    return (
        <div className='project-container'>
            <img src={projectimg} alt="" />
            <div className="display-project">
                <div className='project-content'>
                    <h3>Hackerbook </h3>
                    <p>A website for  learning hacking and penetration testing. Build for a bussiness client. This project uses Material UI for deesign as well as a major role of vanilla  CSS can also be seeen. </p>
                </div>
                <div><a href="https://hackerbook-classroom.netlify.app/"><img src={hackerbook} alt="" /></a>
                </div>
            </div>
            <div className="display-project second-pro">
                <div className='project-content'>
                    <h3>Hotstar Clone</h3>
                    <p>Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited.  </p>
                </div>
                <div><a href="https://steady-gingersnap-64e01e.netlify.app/"><img src={hotstar} alt="" /></a>
                </div>
            </div>
            <div className="display-project">
                <div className='project-content'>
                    <h3>Beat</h3>
                    <p>A website for  award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.  </p>
                </div>
                <div><a href="https://steady-gingersnap-64e01e.netlify.app/"><img src={beats} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Project
