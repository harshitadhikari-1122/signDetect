import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='left-container'>
        <div className='contact-header'>
          <h1>Contact Us</h1>
        </div>
        <div className='left-container-details'>
          <div className='container-details-left-side'>
            <div className='details-1'>
              <p>Get in touch with us</p>
            </div>
            <div className='details-2'>
              <a href="mailto:someone@example.com">info@mysite.com</a>
            </div>
            <div className='details-3'>
              <h1>SignLearner</h1>
            </div>
          </div>
          <div className='container-details-right-side'>
            <div className='details-1'>
              <p>500 Terry Francine Street<br />San Francisco, CA 94158</p>
            </div>
            <div className='details-2'>
              <p>Phone: 1-800-000-0000</p>
            </div>
            <div className='details-3'>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <div className='contact-header faq-header'>
          <h1>FAQ</h1>
        </div>
        <div className='left-container-details-1'>
          <div className='faq-container'>
            <div className='faq-question'>
              <p><span>Q:</span> How does real-time translation work?</p>
            </div>
            <div className='faq-answer'>
              <p><span>Ans:</span> Our AI converts sign language into text and speech instantly.</p>
            </div>
          </div>
          <div className='faq-container'>
            <div className='faq-question'>
              <p><span>Q:</span> How do I get started?</p>
            </div>
            <div className='faq-answer'>
              <p><span>Ans:</span> Click "Try it Now / Get Started" on our homepage.</p>
            </div>
          </div>
          <div className='faq-container'>
            <div className='faq-question'>
              <p><span>Q:</span> Is the platform accessible for all students?</p>
            </div>
            <div className='faq-answer'>
              <p><span>Ans:</span> Yes, it is designed for inclusive learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
