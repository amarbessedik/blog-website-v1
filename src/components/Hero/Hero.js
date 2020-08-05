import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import hero_image from '../../assets/images/hero_image.jpg'

const Hero = () => { 
  return (
    <Card>
      <div className="hero-container">
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
          <input
            className="input"
            type="text"
            placeholder="Search ..."
            data-toggle="tooltip"
            data-placement="top"
            title="Search Posts"
          />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero_image} alt="hero_image" />
      </div>
    </Card>
  );
};

export default Hero;
