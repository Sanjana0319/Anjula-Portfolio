import React from "react";
import profile from "./images/profile.png";
import facebook from "./images/icons/facebook.svg";
import youtube from "./images/icons/youtube.svg";
import github from "./images/icons/github.svg";
import medium from "./images/icons/medium.svg";
import linkedin from "./images/icons/linkedin.svg";
import cv from "./images/icons/cv.png";
import "./style.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div>
        <img src={profile} className="sidebar-image" alt="profile" />
        <div className="sidebar-name">
          <h3>
            <span>
              <span className="grey">Anjula Shanaka</span>
              <span className="back">Anjula Shanaka</span>
            </span>
          </h3>
        </div>
      </div>
      <div className="sidebar-work">
        <p>QA Fellow @openMRS | CTO @SEF </p>
        <p> GSoC '23 Mentor | GSoC '22 @openMRS </p>
        <p>Undergraduate @USJ</p>
      </div>
      <div className="sidebar-buttons">
        <div className="sideButton">
          <a href="#">Home</a>
        </div>
        <br />
        <div className="sideButton">
          <a href="#">About</a>
        </div>
        <br />
        <div className="sideButton">
          <a href="#">Services</a>
        </div>
        <br />
        <div className="sideButton">
          <a href="#">Portfolio</a>
        </div>
        <br />
        <div className="sideButton">
          <a href="#">Blog</a>
        </div>
        <br />
        <div className="sideButton">
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="sidebar-icons">
        <span>
          <a href="https://github.com/anjula-sack">
            <img src={github} className="icon" />
          </a>
        </span>
        <span>
          <a href="https://anjulashanaka.medium.com/">
            <img src={medium} className="icon" />
          </a>
        </span>
        <span>
          <a href="https://www.youtube.com/channel/UCLjQYVhICeegPX6ah4-dQpw">
            <img src={youtube} className="icon" />
          </a>
        </span>
        <span>
          <a href="https://www.facebook.com/anjula.shanaka">
            <img src={facebook} className="icon" />
          </a>
        </span>
        <span>
          <a href="linkedin.com/in/anjula-sack/">
            <img src={linkedin} className="icon" />
          </a>
        </span>
        <span>
          <a href="https://docs.google.com/document/d/1gkvfwb1J_JHN9UdOeG6Q8PAvWTyMHPUjC2N2nbfqK0Q/edit">
            <img src={cv} className="icon" />
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
