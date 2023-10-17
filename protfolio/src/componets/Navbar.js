import React from "react";
import './Navbar.css'
import Homeimg from "./icons/Home.png";
import infoimg from "./icons/InfoCircle.png";
import bulbimg from "./icons/bulb.png";
import educationimg from "./icons/JournalBookmarkFill.png";
import Trophyimg from "./icons/Trophy.png";
import Phoneimg from "./icons/Phone.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <section className="navbartitle">Sujit</section>
      <section className="navbaricons">
        <div> 
          <img src={Homeimg} alt="bulb"></img>
        </div>
        <div>
          <img src={infoimg} alt="bulb"></img>
        </div>
        <div>
          <img src={bulbimg} alt="bulb"></img>
        </div>
        <div>
          <img src={educationimg} alt="bulb"></img>
        </div>
        <div>
          <img src={Trophyimg} alt="bulb"></img>
        </div>
        <div>
          <img src={Phoneimg} alt="bulb"></img>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
