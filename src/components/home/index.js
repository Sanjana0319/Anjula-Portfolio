import React from "react";
import big from "./images/big.PNG";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="details">
          <div className="left">
            <div className="title">
              <h3>
                Hi, I'm <span className="color">Anjula!</span>
              </h3>
              <h3>
                <span className="cd-headline rotate-1">
                  <span className="blc">Creative</span>{" "}
                  <span className="cd-words-wrapper">
                    <b className="is-hidden animate__animated">Designer</b>
                    <b className="is-hidden animate__animated">Coder</b>
                    <b className="is-visible animate__animated">Player</b>
                  </span>
                </span>
              </h3>
              <h3 className="country">Based in Sri Lanka</h3>
            </div>
            <div className="subtitle">
              <p>
                I'm a Sri Lanka based web designer &amp; front‑end developer
                with <span className="color">4+ years</span> of experience
              </p>
            </div>
            <div className="buttons">
              <div className="button transition_link">
                <a href="#portfolio">Got a project?</a>
              </div>
              <div className="button transition_link" data-style="border">
                <a href="#contact">Let's talk</a>
              </div>
            </div>
            <div className="info">
              <ul>
                <li>
                  <a href="mailto:support@elisc.com">support@elisc.com</a>
                </li>
                <li>
                  <a href="+94 74 093 1194">+94 74 093 1194</a>
                </li>
                <li>
                  <a className="href_location" href="#">
                    Ave Street Avenue, New York
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <img src={big} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
