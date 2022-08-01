import React from 'react'
import Alba from '../../assets/me.jpg'

export default function About() {
  return (
    <div>
      <section id='about'>
     <div className="aboutMe">
         <div className="AboutMeImg">
             <img src={Alba}></img>
         </div>
         <div className="AboutMeWords">
             <h5>
             Hello, My name is Gyssagara Prince
             </h5>
             <p>
              A full stack sofware developer based in Kigali, Rwanda<br/> with 2+ years of experience.<br/>
              I like to be challanged with new projects, because<br/>I think is the best way to increase my knowledge as an engineer.<br/>
              I am also a content creater, I make blogs on Technological tricks.<br/><br/>
             </p>
             <h3>My Skills:</h3>
             <p>HTML, CSS, JAVASCRIPT, FIREBASE, PHP, REACT, NODE, GRAPHQL,<br/> TYPESCRIPT, C++, C, JAVA</p>
             <p>Figma, Photoshop</p><br></br>
             <h4>For more information please don't hesitate to contact me.</h4>
         </div>
     </div>
     </section>
    </div>
  )
}
