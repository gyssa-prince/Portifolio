import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import MobileNavbar from "./mobileNavbar";

export default function Head() {
  const [Open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  let home = document.querySelector(".hero");
  let head = document.querySelector(".Logo");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setLoading(false);
  });

  function open() {
    setOpen(true);
    if (!loading) {
      home.classList.toggle("blur");
      head.classList.toggle("blur");
    }
  }
  window.onscroll = () => {
    setOpen(false);
    home.classList.remove("blur");
    head.classList.remove("blur");
  };
  function close() {
    setOpen(false);
    home.classList.remove("blur");
    head.classList.remove("blur");
  }

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
            {!Open && (
              <Icon
                icon="bytesize:menu"
                id="menu-icon"
                color="white"
                width={64}
                onClick={() => open()}
              />
            )}
          </div>

          {Open && (
            <div className="menu">
              <div className="closeMenuContainer" onClick={() => close()}>
                <Icon
                  icon="fe:close"
                  className="closeMenu"
                  color="white"
                  width={64}
                />
              </div>
              <MobileNavbar setOpen={setOpen} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
