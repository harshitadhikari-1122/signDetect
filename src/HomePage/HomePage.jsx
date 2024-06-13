import React from 'react'

// importing the page
import Header from "./Header/Header";
import Hero from './Hero/Hero';
import Intro from './Introduction/Intro';
import "./HomePage.css";
import MiddleText from './middleText/MiddleText';
import About from './about/About';
import Feature from './Feature/Feature';
import Contact from "./Contact/Contact";

const HomePage = () => {
  return (
     <div className='homepage-container' id="home">
        <header>
            <div className='content-heading'>
                <div className='header-container'>
                    <Header />
                </div>
                <div className='hero-container'>
                    <Hero />
                </div>
            </div>
         </header>
         <div id="middle">
            <MiddleText />
         </div>
         <div className='intro-container' id="intro">
             <Intro />
         </div>
         <div className='about-container' id="about">
                <About/>
         </div>
         <div className='feature-container' id="features">
             <Feature />
         </div>
         <div className='contact-container' id="contact">
            <Contact />
         </div>
     </div>
  )
}

export default HomePage