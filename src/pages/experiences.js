import React from 'react';
//Styles
import "../scss/Experiences.scss";

function Experiences() {
    return (
    <>
      <p>Discover my experiences so far</p>
      <div className="exp-container">
        <div className="circle-box">
          <div className="circle1"></div>
          <h1>Project Engineer at Global Rail Sdn Bhd</h1>
          <h2>It is my honour to take part in Platform Screen Door & Automatic Platform Gate for KVMRT 2 Sungai Buloh Serdang Putrajaya (SSP) Project for almost 2 years.
          </h2>
        </div>
        <div className="circle-box">
          <div className="circle2"></div>
          <h1>Work & Travel in the United States of America</h1>
          <h2>I had the opportunity to participate in Summer Work and Travel program in United States of America during Summer 2018. I had worked as room attendant and prep cook in Peppermill Resort Spa Casino in Reno, Nevada.</h2>
        </div>
        <div className="circle-box">
          <div className="circle3"></div>
          <h1>Master of Engineering</h1>
          <h2>I had spent 4 years in University of Nottingham. Furthermore, I had the opportunity to study abroad in University of Nottingham, UK as an exchange student on my third year. I had obtained First class qualification in Meng Hons Mechanical, Materials and Manufacturing Engineering when pursuing my master degree. </h2>
        </div>
        <div className="circle-box">
          <div className="circle4"></div>
          <h1>Aerospace Experiences</h1>
          <h2>One of the greatest achievements was I had earned myself 7th place in IMechE International UAS (Unmanned Aerial Systems) Challenge 2017. I also had the opportunity to study Flutter Vibration of Flaperon and Calculations of Vibration (work closely with the MH370 case) during my final year.</h2>
        </div>
      </div>
    </>
    )
  }

export default Experiences;