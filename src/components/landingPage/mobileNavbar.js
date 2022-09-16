import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function MobileNavbar() {
  return (
    <div>
      <div className="mobileNav">
        <a href="#about" className="start">
          1.About me
        </a>
        <a href="#skills">2.Skills</a>
        <a href="#experience">3.Works</a>
        <a href="#contact">4.Contact me</a>
      </div>
    </div>
  );
}
