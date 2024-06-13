import React from 'react'
import "./About.css";

const About = () => {
  return (
     <div className='about-container '>
         <div className='mission-container'>
            <div className='mission-inside-container'>
                <div className='mission-head'>
                    <h5><span>Our</span> Mission</h5>
                </div>
                <div className='mission-para'>
                    <p>Revolutionizing sign language education to make it accessible, engaging, and effective for all learners by leveraging cutting-edge technology and innovative teaching methods.</p>
                </div>
             </div>
         </div>
         <div className='initutives'>
            <div className='initutive-inside-container'>
                <div className='initutives-head'>
                    <h5><span>Our</span> Initiatives</h5>
                </div>
                <div className='initutive-para'>
                    <p>Enhancing sign language learning through outreach, innovative curriculum, and advanced technology, fostering inclusivity for all ages and skill levels. Exemplified by video call technology, connecting individuals through sign language.</p>
                </div>
             </div>
         </div>
     </div>
  )
}

export default About