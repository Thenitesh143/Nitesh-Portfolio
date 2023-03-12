import React from 'react'

import './Project.css'

import projectimg from '../../Assets/project.jpg'
import hotstar from '../../Assets/projectimg/hotstar.png'
import beats from '../../Assets/projectimg/beats.png'

const Project = () => {
    return (
        <div className='project-container'>
            <img src={projectimg} alt="" />
            <div className="display-project">
                <div className='project-content'>
                    <h3>Beat</h3>
                    <p>A website for  award-winning Beats sound with wireless listening freedom and a sleek, streamlined design with comfortable padded earphones, delivering first-rate playback.  </p>
                </div>
                <div><a href="https://steady-gingersnap-64e01e.netlify.app/"><img src={beats} alt="" /></a>
                </div>
            </div>
            <div className="display-project second-pro">
                <div className='project-content'>
                    <h3>Hotstar Clone</h3>
                    <p>Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited.  </p>
                </div>
                <div><a href="#"><img src={hotstar} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Project
