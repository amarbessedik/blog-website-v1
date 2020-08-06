import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import BurgerBar from "../BurgerBar/BurgerBar";
import data from '../../assets/data';

const Navbar = () => {
  const [search, setSearch] = useState("");
  //Filtered data
  const [searchResults, setSearchResults] = useState([]);
  //Handle user search request
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleClick = () => {
    const filtered_data = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) && search
    );
    if (filtered_data.length) {
      setSearchResults(filtered_data);
    }
  };
  return (
    <div className="navbar">
      <BurgerBar />
      <div className="sub-navbar">
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
    </div>
  );
};

const SocialIcon = ({ icon, title }) => {
  return (
    <li>
      <Link  to='/'>
        <i
          className={`${icon} icon`}
          data-toggle="tooltip"
          data-placement="top"
          title={title}
        ></i>
      </Link>
    </li>
  );
};

const social_icons = [
  { icon: "fab fa-github-square", title: "Github" },
  { icon: "fa fa-linkedin-square", title: "LinkedIn" },
  { icon: "fab fa-twitter-square", title: "Twitter" },
  { icon: "fab fa-facebook-square", title: "Facebook" },
  { icon: "fab fa-google-plus-square", title: "Google+" },
  { icon: "fa fa-share-alt-square", title: "Share" },
];

export default Navbar;
