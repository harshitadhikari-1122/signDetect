import React from 'react'
import deaf from "../images/deaf-child.png";

import chat from "../images/chat.png";
import market from "../images/marketing.png";
import learning from "../images/learning.png";

const Hero = () => {
  return (
    <div class="hero-content">
        <div className='heading-hero-container'>
            <div className='hero-heading'>
                <h1><span>Empowering</span> Education with Sign Language Tech</h1>
            </div>
            <div className='hero-sub-heading'>
                <h3>SignLearner is an interesting platform that will teach you in more an interactive way</h3>
            </div>
            <div className='hero-links'>
                <div class="cta-button">
                <a href="/signdetectpage" >Try it Now</a>
                </div>
                <div class="cta-button">
                  <a href="#" >Learn More</a>
                </div>
            </div>
        </div>
        <div className='hero-image-container'>
              <div className='images-container'>
                   <div className='info-box left'>
                       <div className='info-box-img'>
                          <img src={market} alt="" />
                       </div>
                       <div className='info-box-details'>
                         <div className='info-box-1'>
                                <h6>Engaging Content</h6>
                         </div>
                         <div className='info-box-2'>
                              <span>Interactive & Fun</span>
                         </div>
                       </div>
                   </div>
                   <div className='info-box right'>
                       <div className='info-box-img'>
                           <img src={learning} alt="" />
                       </div>
                       <div className='info-box-details'>
                         <div className='info-box-1'>
                                <h6>Visual Learning</h6>
                         </div>
                         <div className='info-box-2'>
                               <span>Easy & Effective</span>
                         </div>
                       </div>
                   </div>
                   <div className='info-box left'>
                       <div className='info-box-img'>
                          <img src={chat} alt="" />
                          
                       </div>
                       <div className='info-box-details'>
                         <div className='info-box-1'>
                            <h6>User-Friendly</h6>
                         </div>
                         <div className='info-box-2'>
                             <span>Accessible & Intuitive</span>
                         </div>
                       </div>
                   </div>
              </div>
              <div className='children-images'>
                 <img src={deaf} alt="icon"></img>
              </div>
        </div>
   </div>
  )
}

export default Hero