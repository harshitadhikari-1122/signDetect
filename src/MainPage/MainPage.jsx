import React from 'react'
import "./MainPage.css";
import logo from "../HomePage/images/s.png";

const MainPage = () => {
  return (
    <div className='sign-detect'>
         <div className='main-header-container-color'>
                <div className='sign_detect-container'>
                  <div className='sign-logo'>
                      <img src={logo} alt="sign logo" />
                  </div>
                  <div className='sign-header-links'>
                      <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                          
                      </nav>
                  </div>
                </div>

            {/* welcome messgae */}
            <div className='welcome-intro-mes'>

                <div className='left-welcome-messgae'>
                    <div className='messages-cont'>
                        <div className='welcome-header'>
                          <h1><span>Welcome </span>to SignLearner</h1>
                        </div>
                        <div className='welcome-para'>
                            <p>Choose a feature to get started</p>
                        </div>
                    </div>
                    <div className='button-icon-to-new'>
                        <div className='sign-detect-model'>
                            <a href="/detection">Start Detection</a>
                        </div>
                        <div className='sign-video-call'>
                          <a href="#">Start Video Call</a>
                        </div>
                    </div>

                </div>
            </div> 
         </div>
         </div>
  )
}

export default MainPage