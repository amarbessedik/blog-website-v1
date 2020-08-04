import React, { useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Hero = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const handleClick = () => {
    const sideMenuClass = document.querySelector(".side-menu");
    !sideMenu
      ? (sideMenuClass.style.display = "none")
      : (sideMenuClass.style.display = "block");
    setSideMenu(!sideMenu);
  };
  return (
    <Card>
      <div className="hero-container">
        <div className="hamburger-menu">
          <i onClick={handleClick} class="fas fa-bars"></i>
          <div className="side-menu">
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/posts">
                  Posts
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/posts">
                Posts
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="search-section">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            className="input"
            type="text"
            placeholder="Search ..."
            data-toggle="tooltip"
            data-placement="top"
            title="Search Posts"
          />
        </div>
      </div>
    </Card>
  );
};

export default Hero;
