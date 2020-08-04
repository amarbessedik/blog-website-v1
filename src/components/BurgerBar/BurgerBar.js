import React, { useState} from "react";
import { Link } from 'react-router-dom';
import "./BurgerBar.css";

const BurgerBar = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    const sideMenuClass = document.querySelector(".side-menu");
    hidden
      ? (sideMenuClass.style.display = "none")
      : (sideMenuClass.style.display = "block");
    setHidden(!hidden);
  };
  return (
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
  );
};

export default BurgerBar;
