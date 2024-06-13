import React from 'react'
import "./Feature.css";
import book from "../images/open-book.png";
import translate from "../images/translate.png";
import ui from "../images/share.png";

const Feature = () => {
  return (
     <div className='feature-container'>
         <div className='feature-head'>
             <h1><span>Our </span>Features</h1>
         </div>
         <div className='features-details-container'>

            <div className='feature-block'>
                <div className='feature-block-img feature-block-img-translate'>
                    <img src={translate} alt="Real-time Translation" />
                </div>
                <div className='feature-block-details'>
                     <div className='feature-details-head'>
                         <h2>Real-time Translation</h2>
                     </div>
                     <div className='feature-details-para'>
                         <p>Instantly converts sign language gestures into text and speech, facilitating seamless communication for all users.</p>
                     </div>
                </div>
            </div>

            <div className='feature-block'>
                <div className='feature-block-img feature-block-img-book'>
                    <img src={book} alt="Inclusive Learning" />
                </div>
                <div className='feature-block-details'>
                     <div className='feature-details-head'>
                         <h2>Inclusive Learning</h2>
                     </div>
                     <div className='feature-details-para'>
                         <p>Provides resources and tools tailored to learners of all skill levels, ensuring everyone has the opportunity to master sign language.</p>
                     </div>
                </div>
            </div>

            <div className='feature-block'>
                <div className='feature-block-img feature-block-img-ui'>
                    <img src={ui} alt="User-Friendly Interface" />
                </div>
                <div className='feature-block-details'>
                     <div className='feature-details-head'>
                         <h2>User-Friendly Interface</h2>
                     </div>
                     <div className='feature-details-para'>
                         <p>Designed for intuitive navigation, our platform makes learning sign language simple and enjoyable for users of all ages.</p>
                     </div>
                </div>
            </div>

         </div>
     </div>
  )
}

export default Feature
