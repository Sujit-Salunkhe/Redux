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
        <ul>
          <li className="iconsimage homeimg"><img src={Homeimg} alt="Home"></img></li>
          <li className="iconsimage infoimg"><img src={infoimg} alt="info"></img></li>
          <li className="iconsimage bulbimg"><img src={bulbimg} alt="bulb"></img></li>
          <li className="iconsimage educationimg"><img src={educationimg} alt="education"></img></li>
          <li className="iconsimage Trophyimg"><img src={Trophyimg} alt="Trophy"></img></li>
          <li className="iconsimage phoneimg"><img src={Phoneimg} alt="phone"></img></li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
