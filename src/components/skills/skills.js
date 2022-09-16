import React from "react";
import { Icon } from "@iconify/react";

export default function Skills() {
  return (
    <div>
      <section id="skills">
        <h2 align="center" className="EE">
          <span>Skills</span>
        </h2>
        <h3 className="SkillOpener">
          These are the skills I have and enjoy as a professional
        </h3>
        <div className="professional">
          <div className="skill">
            <Icon icon="logos:bootstrap" width={50} />
            <p>BOOTSTRAP</p>
          </div>
          <div className="skill">
            <Icon icon="logos:tailwindcss-icon" width={50} />
            <p>TAILWIND CSS</p>
          </div>
          <div className="skill">
            <Icon icon="logos:javascript" width={50} />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill">
            <Icon icon="logos:react" width={50} />
            <p>REACT (JS, Native)</p>
          </div>
          <div className="skill">
            <Icon icon="logos:vue" width={50} />
            <p>VUE JS</p>
          </div>
          <div className="skill">
            <Icon icon="vscode-icons:file-type-node2" width={50} />
            <p>NODE JS</p>
          </div>
          <div className="skill">
            <Icon icon="logos:php" width={50} />
            <p>PHP</p>
          </div>
          <div className="skill">
            <Icon icon="logos:typescript-icon-round" width={50} />
            <p>TYPESCRIPT</p>
          </div>
          <div className="skill">
            <Icon icon="cib:coreui-c" color="#1769aa" width={50} />
            <p>C</p>
          </div>
          <div className="skill">
            <Icon icon="bxl:c-plus-plus" color="#1769aa" width={50} />
            <p>C++</p>
          </div>
          <div className="skill">
            <Icon icon="logos:mysql" width={50} />
            <p>MYSQL</p>
          </div>
          <div className="skill">
            <Icon icon="logos:postgresql" width={50} />
            <p>POSTGRES</p>
          </div>
          <div className="skill">
            <Icon icon="logos:mongodb" width={50} />
            <p>MONGO DB</p>
          </div>
          <div className="skill">
            <Icon icon="logos:firebase" width={50} />
            <p>FIREBASE</p>
          </div>
          <div className="skill">
            <Icon icon="bi:git" color="#d24e01" width={50} />
            <p>GIT</p>
          </div>
          <div className="skill">
            <Icon icon="logos:heroku-icon" width={50} />
            <p>HEROKU</p>
          </div>
          <div className="skill">
            <Icon icon="logos:netlify" width={50} />
            <p>NETLIFY</p>
          </div>
          <div className="skill">
            <Icon icon="fa-solid:people-carry" color="#1769aa" width={50} />
            <p>TEAMWORK</p>
          </div>
        </div>
      </section>
    </div>
  );
}
