import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div>
      <section id="contact">
        <div className="ContactMe">
          <h2 align="center">
            <span>CONTACT ME</span>
          </h2>
          <div className="contactForm">
            <p align="center">
              Send me a message here or use any other
              <br /> way below!
            </p>
            <form
              className="Form"
              method="POST"
              action="https://getform.io/f/0e349b18-9885-47e2-9729-21f8d03ed53b"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <br />
              <input
                type="phone"
                name="phone"
                placeholder="Your phone number"
                required
              />
              <br />
              <textarea
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <br />
              <button type="submit" id="send-btn">
                Send
              </button>
            </form>
          </div>
          <div className="icons">
            <div className="AllIcons">
              <a href="tel:+250785364200">
                <Icon icon="bx:phone-call" color="white" />
              </a>
            </div>
            <div className="AllIcons">
              <a href="https://wa.me/+250785364200?text=Hello!">
                <Icon icon="bi:whatsapp" color="white" />
              </a>
            </div>
            <div className="AllIcons">
              <a href="mailto:gyssagaraprince@gmail.com">
                <Icon icon="fontisto:email" color="white" />
              </a>
            </div>
            <div className="AllIcons">
              <a href="https://twitter.com/gyssa_prince">
                <Icon icon="akar-icons:twitter-fill" color="white" />
              </a>
            </div>
            <div className="AllIcons">
              <a href="https://linkedin.com/in/gyssagara-prince-355915153">
                <Icon icon="akar-icons:linkedin-box-fill" color="white" />
              </a>
            </div>
            <div className="AllIcons">
              <a href="https://www.instagram.com/prince_gyssa/">
                <Icon icon="akar-icons:instagram-fill" color="white" />
              </a>
            </div>
            <div className="AllIcons">
              <a href="https://github.com/gyssa-prince">
                <Icon icon="akar-icons:github-fill" color="white" />
              </a>
            </div>
          </div>
          <p align="center" className="footerWord">
            Made by Me with <Icon icon="ps:lovedsgn" />
          </p>
        </div>
        <div className="copyright">
          <div className="left">
            <p>gyssagaraprince@gmail.com</p>
            <hr className="pline"></hr>
          </div>
          <div className="right">
            <hr className="pline"></hr>
            <p>©GYSSAGARA All Right Reserved</p>
          </div>
        </div>
      </section>
    </div>
  );
}
