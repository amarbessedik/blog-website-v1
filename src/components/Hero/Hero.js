import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Hero = () => {
  return (
    <Card>
      <div className="hero-container">
        <div className="nav-links">
          <ul>
            <li>
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className='link' to="/posts">Posts</Link>
            </li>
            <li>
              <Link className='link' to="/contact">Contact</Link>
            </li>
            <li>
              <Link className='link' to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="search-section">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input className="input" type="text" placeholder="Search ..." />
        </div>
      </div>
    </Card>
  );
};

export default Hero;
