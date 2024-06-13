import React from 'react'
import "./Intro.css";
import dot from "../images/dot.png";
import r1 from "../images/Rectangle.png";
import r2 from "../images/Rectangle1.png";

import groupPhoto from "../images/Sign-Language-for-Kids.png"

const Intro = () => {
  return (
    <div className='intro-container'>
       <div className='intro-para-container'>
        <div className='dot-orange welcome-dot'>
                <img src={dot} alt="small dot"/>
            </div>
          <div className='intro-para-1'>

              <p><span className='blueColor'>Welcome</span> <span className='orangeColor'>to SignLearner</span>, where we revolutionize sign language education with innovative technology. Our mission is to make learning accessible, engaging, and effective for all skill levels with our interactive platform and real-time detection system.</p>
          </div>
          <div className='intro-para-2'>
                <p>Join us in empowering communication through sign language!</p>
          </div>
          <div className='cta-button-get'>
             <a href="/signdetectpage">Get Started</a>
         </div>
       </div>
       <div className='dot-orange-1'>
         <img src={dot} alt="small dot"/>
       </div>
       <div className='group-photo'>
          <div className='dot-1'>
              <img src={r2} alt="small dot"/>
          </div>
          <div className='intro-img'>
              <img src={groupPhoto} alt="small dot"/>
          </div>
          <div className='dot-2'>
              <img src={r1} alt="small dot"/>
          </div>
       </div>
    </div>
  )
}

export default Intro