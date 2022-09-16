import React, { useState } from "react";
import { Icon } from "@iconify/react";
export default function Head() {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <div className="Head1">
        <div className="Logo">
          <h1>
            GYSSAGARA{" "}
            <Icon icon="fa6-solid:signature" color="white" width="32" />
          </h1>
        </div>
        <div className="navbar">
          <h3>
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Works</a>
            <a href="#contact">Contact me</a>
          </h3>
          <div className="mobilemenu">
            {Open && (
              <div className="mobileNav">
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Works</a>
                <a href="#contact">Contact me</a>
              </div>
            )}
            {!Open && (
              <Icon
                icon="bytesize:menu"
                id="menu-icon"
                color="white"
                width={64}
                onClick={() => setOpen(true)}
              />
            )}
            {Open && (
              <Icon
                icon="fe:close"
                color="white"
                width="64"
                onClick={() => setOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
