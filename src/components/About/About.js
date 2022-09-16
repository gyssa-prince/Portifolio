import React from "react";
import Alba from "../../assets/me.jpg";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="About">
          <h2 align="center" className="EE">
            <span>About me</span>
          </h2>
          <div className="aboutMe">
            <div className="AboutMeImg">
              <img src={Alba}></img>
            </div>
            <div className="AboutMeWords">
              <h5>Hello, My name is Gyssagara Prince</h5>
              <p>
                A full stack sofware developer based in Kigali, Rwanda with 2+
                years of experience. I like to be challanged with new projects,
                because I think is the best way to increase my knowledge and
                experience as an engineer.
                <br />
                <br />
              </p>

              <p>I also like to write articles on tech stuff</p>
              <h4>
                For more information please don't hesitate to{" "}
                <a href="">contact me.</a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
