import React from "react";
import Card from "../Card/Card";
import "./Sidebar.css";
import data from "../../assets/data";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      {data.map((post) => (
        <Card key={post.id}>
          <div className="thumbnail_link">
            <div className="thumbnail">
              <img src={post.image} alt="thumbnail" />
            </div>
            <div className="link_container">
              <NavLink style={{padding: '10px 0'}} to="/">{post.title}</NavLink>
              <span className="date_published">
                Published on {post.published}
              </span>
              <span className="author">by {post.author}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Sidebar;
