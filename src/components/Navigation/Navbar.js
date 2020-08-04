import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">
              <i
                class="fab fa-github-square"
                data-toggle="tooltip"
                data-placement="top"
                title="Github"
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i
                class="fab fa-linkedin"
                data-toggle="tooltip"
                data-placement="top"
                title="LinkedIn"
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i
                class="fab fa-twitter-square"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i
                class="fab fa-facebook-square"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i
                class="fab fa-google-plus-square"
                data-toggle="tooltip"
                data-placement="top"
                title="Google-plus"
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i
                class="fas fa-share-alt-square"
                data-toggle="tooltip"
                data-placement="top"
                title="Share"
              ></i>
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Navbar;
