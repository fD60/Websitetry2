import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.PNG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>TF Styles</h1>
        <p> Life is too short to wear boring clothes</p>
        <Link to="/Kids">
          <button> Shop Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
