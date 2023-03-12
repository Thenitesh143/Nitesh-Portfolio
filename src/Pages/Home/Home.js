import React from 'react'
import './Home.css'

// image 
import myImage from '../../Assets/myimage.jpg'

const Home = () => {
    return (
        <main>
            <div className="hero-section">
                <div className='image-container'>
                    <img src={myImage} alt="" className='admin' />
                </div>
                <div className='greet' >Hi, <span className='break'><br /></span> I'm <span className='name'>Nitesh</span></div>

            </div>
        </main>
    )
}

export default Home
