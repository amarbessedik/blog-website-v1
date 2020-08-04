import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import BurgerBar from "../BurgerBar/BurgerBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <BurgerBar />
      <ul>
        {social_icons.map((social_icon) => {
          return (
            <SocialIcon icon={social_icon.icon} title={social_icon.title} />
          );
        })}
      </ul>
    </div>
  );
};

const SocialIcon = ({ icon, title }) => {
  return (
    <li>
      <Link>
        <i
          class={icon}
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
