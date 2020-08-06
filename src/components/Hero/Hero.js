import React, { useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import data from "../../assets/data";
import hero_image from "../../assets/images/hero_image.jpg";

const Hero = () => {
  //User search state
  const [search, setSearch] = useState("");
  // //Filtered data
  // const [searchResults, setSearchResults] = useState([]);
  // //Handle user search request
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  // const handleClick = () => {
  //   const filtered_data = data.filter(
  //     (item) =>
  //       item.title.toLowerCase().includes(search.toLowerCase()) && search
  //   );
  //   if (filtered_data.length) {
  //     setSearchResults(filtered_data);
  //   }
  // };

  const landing_image_style = {
    backgroundImage: `linear-gradient(to right, rgba(105, 145, 19, 0.1), rgba(20, 21, 23, 0.5)),
    url(${hero_image})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: 'right'
  };

  return (
    <Card>
      <div className="hero-container">
     </div>
      <div className="hero-image" style={landing_image_style}>
        {/* <img src={hero_image} alt="hero_image" /> */}
        <h1>Hello world</h1>
        <p>Nice dat today</p>
      </div>
      <div>

      </div>
      {/* <div className="search-results-container">
        {searchResults.length ? <h4>Your Search Results: </h4> : null}
        {searchResults &&
          searchResults.map((item) => {
            return (
              <>
                <Link to="/">{item.title}</Link>
                <br />
              </>
            );
          })}
      </div> */}
      <div className="home-page-content">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odit rem obcaecati corporis quae! Obcaecati nulla pariatur temporibus ullam, dolor esse qui accusamus quibusdam ex consequuntur, officiis quo ipsa ad, minus deleniti! Quidem eveniet odio quas? Nobis hic quo consequuntur fugiat ratione! Dolores, numquam nesciunt eaque itaque neque obcaecati quis!</p>
      </div>
    </Card>
  );
};

export default Hero;
