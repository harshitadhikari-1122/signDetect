import React from 'react'
import logo from "../images/s.png";

const Header = () => {
  return (
    <div>
        <div className='head-container-logo'>
                 <div className='img-logo'>
                     <img src={logo} alt="logo img" />
                 </div>
            
             <div className='nav-links'>
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
    </div>
  )
}

export default Header