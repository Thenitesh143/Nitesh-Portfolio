import React from 'react'

import './Contact.css'

import linkedin from '../../Assets/linkedinlogo.png'
import github from '../../Assets/github.png'
import twitter from '../../Assets/twitterlogo.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div>
                <div className='contact-title'>
                    <h1>Get In Touch</h1>
                </div>
                <div className="contact-container">
                    <div>
                        <p>Want to know my journey or would like to chat with me, feel free to contacts</p>
                        <div>
                            <a href="https://www.linkedin.com/in/nitesh-chowdhary-004327249/"><img src={linkedin} alt="" /></a>
                            <a href="https://github.com/Thenitesh143"><img src={github} alt="" /></a>
                            <a href="https://twitter.com/Niteshtwt143"><img src={twitter} alt="" /></a>
                        </div>
                    </div>
                    <div className='input-container'>
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Your Email' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button className='.btn'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
