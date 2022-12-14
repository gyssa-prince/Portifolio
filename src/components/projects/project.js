import React, { useState } from "react";
import Phantom from "../../assets/phantom.png";
import Gyssa from "../../assets/gyssa.png";
import { Icon } from "@iconify/react";

export default function Project() {
  return (
    <div className="ProjectContainer">
      <section id="experience">
        <h2 align="center" className="EE">
          <span>Works</span>
        </h2>
        <h3 className="SkillOpener">Check out some of my recent work</h3>

        <div className="skills">
          <a href="https://phantom-dream-team.netlify.app/">
            <div className="skill">
              <img src={Phantom}></img>
              <p>PHANTOM</p>
            </div>
          </a>
          <a href="https://gyssa-prince.github.io/node-project/blog/index.html">
            <div className="skill">
              <img src={Gyssa}></img>
              <p>GYSSA BLOG</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
