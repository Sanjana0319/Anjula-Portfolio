import React from "react";
import profile from "./images/profile.png";
import facebook from "./images/facebook/icons8-facebook (1).svg";
import youtube from "./images/youtube/icons8-youtube.svg";
import github from "./images/github/icons8-github.svg";
import medium from "./images/medium/icons8-medium.svg";
import linkedin from "./images/linkedin/icons8-linkedin.svg";
import cv from "./images/cv/icons8-cv-64.png";
import "./style.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div>
        <img src={profile} className="sidebar-image" alt="profile" />
        <p className="sidebar-name">Anjula Shanaka</p>
      </div>
      <div className="sidebar-work">
        <p>QA Fellow @openMRS | CTO @SEF </p>
        <p> GSoC '23 Mentor | GSoC '22 @openMRS </p>
        <p>Undergraduate @USJ</p>
      </div>
      <div className="sidebar-buttons">
        <div className="button">
          <a href="#">Home</a>
        </div>
        <br />
        <div className="button">
          <a href="#">About</a>
        </div>
        <br />
        <div className="button">
          <a href="#">Services</a>
        </div>
        <br />
        <div className="button">
          <a href="#">Portfolio</a>
        </div>
        <br />
        <div className="button">
          <a href="#">Blog</a>
        </div>
        <br />
        <div className="button">
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="sidebar-icons">
        <span>
          <a href="#">
            <img src={github} className="icon"></img>
          </a>
        </span>
        <span>
          <a href="#">
            <img src={medium} className="icon"></img>
          </a>
        </span>
        <span>
          <a href="#">
            <img src={youtube} className="icon"></img>
          </a>
        </span>
        <span>
          <a href="#">
            <img src={facebook} className="icon"></img>
          </a>
        </span>
        <span>
          <a href="#">
            <img src={linkedin} className="icon"></img>
          </a>
        </span>
        <span>
          <a href="#">
            <img src={cv} className="icon"></img>
          </a>
        </span>
      </div>
      <div className="sidebar-footer">
        <p>Copyright © 2023 Anjula Shanaka. </p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
