import React from 'react';
import './About.css';


function About() {
  return (
    <>
      <div className='about-section'>
        <div className='about-container'>
          <div className='row'>
            <div className='col'>
              <div className='about-text-wrapper'>
                <div className='top-line'>About me</div>
                <h1 className='heading'>Little information <br/>about me</h1>
                <p className='about-subtitle'>Skilled Fullstack developer who is at the beginning of his career with experience of developing accessible, scalable web applications, as well as with good understanding for Linux command line and Cloud Computing architecture such as AWS and Azure. Im basically a front-end developer with experience in Java. I have not had the opportunity to certify myself in Java, but I have learned on my own with the help of Udemy.</p>
              </div>
            </div>
            <div className='col'>
              <div className='about-img-wrapper'>
                <img src='/images/Zewar_Salih.svg' alt='Portfolio' className='about-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;