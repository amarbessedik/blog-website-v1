import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import data from '../../assets/data';
import hero_image from '../../assets/images/hero_image.jpg'

const Hero = () => { 

  //User search state
  const [search, setSearch] = useState('');
  //Filtered data
  const [searchResults, setSearchResults] = useState([]);
  //Handle user search request
  const handleChange = (e) =>{
   e.preventDefault();
   setSearch(e.target.value);
  }

  const handleClick = ()=>{
  const filtered_data = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
  if (filtered_data.length){
    setSearchResults(filtered_data);
  }
  console.log("searchResults: ", searchResults);
  }

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
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Search ..."
            data-toggle="tooltip"
            data-placement="top"
            title="Search Posts"
          />
          <i
            onClick={handleClick}
            className="fa fa-search"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero_image} alt="hero_image" />
      </div>
      <div className="search-results-container">
        {searchResults.length ? <h4>Your Search Results: </h4>: null}
        {searchResults &&
          searchResults.map((item) => {
            return (
              <>
                <Link to="/">{item.title}</Link>
                <br />
              </>
            );
          })}
      </div>
    </Card>
  );
};

export default Hero;
