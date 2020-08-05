import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerBar.css";

const links = [
  { name: "Home", url: "/" },
  { name: "Posts", url: "/posts" },
  { name: "Contact", url: "/contact" },
  { name: "About", url: "/about" },
];

const BurgerBar = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    const sideMenu = document.querySelector(".side-menu");
    sideMenu.style.transition = "ease-in-out .5s";

    hidden
      ? (sideMenu.style.transform = "translateX(0)")
      : (sideMenu.style.transform = "translateX(-100%)");

    setHidden(!hidden);
  };
  return (
    <div className="hamburger-menu">
      {hidden ? (
        <i onClick={handleClick} className="fas fa-bars"></i>
      ) : (
        <i onClick={handleClick} className="fas fa-times"></i>
      )}
      <div className="side-menu">
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index} onClick={handleClick}>
                <Link className="hamburger-link" to={link.url}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BurgerBar;
