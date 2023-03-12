import React from 'react'
import './About.css'


// images 
import aboutImage from '../../Assets/about-img.jpg'

const About = () => {
    return (
        <section>
            <div className="section-container">
                <h1>About</h1>
                <img src={aboutImage} alt="" />
                <div>
                    <h2>My Journey of Becoming a Developer</h2>
                    <p>
                        Hi, my name is Nitesh. I’m a self-taught  <strong>Web Developer</strong> from <em>The most ancient country in the world <strong>"Bharat"</strong></em>.
                    </p>
                    <p>
                        I started my coding journey from 11 August, 2022, and haven’t stopped since. Although I don't have any official degree in Computer Science but my hard-work has helped me become a good developer.
                    </p>

                    <p>
                        I was not alone in the  journey of becoming a successful developer. People from all over the world helped me to enhance my skills day by day.

                        All Thanks to Modern day  communication i.e. social media and also to the zeal of people to help each others.
                    </p>

                    <p>
                        I started my journey via Youtube but soon realized the need structured roadmap to learn things more efficiently. I came across <em>The Odin Project</em>. This was the turning point of my development journey.
                    </p>

                    <p>
                        I started to follow The Odin Project and soon discovered a better way of writing structured code.
                    </p>

                    <p>
                        However, The Odin Project was not the only place that was reason behind my success but also various social networking sites like  linkedIn and twitter has played a major role in my learning via linkedIn and twitter I meet a lot of awesome peoples who had an humongous  knowledge and experience which help me do things in a better fashion.
                    </p>
                    <p>
                        This has been the most beautiful journey of my life.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About
