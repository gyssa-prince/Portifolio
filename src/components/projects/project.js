import React from 'react'
import Phantom from "../../assets/phantom.png"
import Gyssa from "../../assets/gyssa.png"

export default function Project() {
  return (
    <div className="ProjectContainer">
        <section id="experience">
        <h2 align="center" className='EE'><span>Experience & Education</span></h2>
      <div className="ProjectContainer1">
          <div className="project1">
              <h3>Where I've worked</h3>
              <ol>
    <li>Andela, I did Internship at ANDELA RWANDA</li>
              </ol>
              </div>
              <div className="project1">
              <h3>Education</h3>
              <ol>
              <li>SOFTWARE DEVELOPMENT, I've completed Software development at APAPER COMPLEX SCHOOL</li>
              <li>SOFTWARE ENGINEERING, I'm currently doing Software Engineering at ADVENTIST UNIVERSITY OF CENTRAL AFRICA (AUCA)</li>
              <li>ANDELA TECHNICAL LEADERSHIP PROGRAM, I'm about to graduate from  Andela (ATLP)</li>
              </ol>
              </div>
          </div>
          <div className="built">
              <h3 align="center">What I've built</h3>
              <div className="project">
            <div className="title1">
            <a href='https://deploy-preview-51--phantom-dream-team.netlify.app/'>
            <h4>
             PHANTOM
             </h4>
             </a>
            </div>
         <div className="projectImg">
             <img src={Phantom}></img>
         </div>
         <div className="projectWords">
         <div className="title">
            <a href='https://deploy-preview-51--phantom-dream-team.netlify.app/'>
            <h4>
             PHANTOM
             </h4>
             </a>
            </div>
             <p>
             Is an application that came to solve queuing on bus stop and wait for a long time a bus by giving real time location of buses in your route and free seats
             </p>
         </div>
     </div>
     <div className="project">
     <div className="title1">
         <a href='https://gyssa-prince.github.io/node-project/blog/index.html'>
            <h4>
            GYSSA BLOG
             </h4>
             </a>
            </div>
         <div className="projectImg">
             <div className="gy">
             <img src={Gyssa}></img>
             </div>
         </div>
         <div className="projectWords1">
         <div className="title">
         <a href='https://gyssa-prince.github.io/node-project/blog/index.html'>
            <h4>
            GYSSA BLOG
             </h4>
             </a>
            </div>
             <p>
             Gyssa blog is web app that I built during ATLP bootcamp where I post blogs, I make blogs on fun facts, technological tricks, and scientific stuff.
             </p>
         </div>
     </div>
     
          </div>
          </section>
    </div>
  )
}
