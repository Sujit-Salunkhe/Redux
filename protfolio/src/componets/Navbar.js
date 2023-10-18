import React, { useReducer } from "react";
import "./Navbar.css";
import Homeimg from "./icons/Home.png";
import infoimg from "./icons/InfoCircle.png";
import bulbimg from "./icons/bulb.png";
import educationimg from "./icons/JournalBookmarkFill.png";
import Trophyimg from "./icons/Trophy.png";
import Phoneimg from "./icons/Phone.png";
import Homehover from "./icons/Home hover.png";
import InfoCirclehover from "./icons/InfoCircle hover.png";
import Bulbhover from "./icons/bulbhover.png";
import Journolhover from "./icons/JournalBookmark hover.png";
import Trophyhover from "./icons/Trophy hover.png";
import Phonehover from "./icons/Phone hover.png";
const intialStage = {
  showHomeImg: false,
  showInfoImg: false,
  showBulbImg: false,
  showEducationImg: false,
  showTrophyImg: false,
  showPhoneImg: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Home":
      return { ...state, showHomeImg: true };
    case "Info":
      return { ...state, showInfoImg: true };
    case "Bulb":
      return { ...state, showBulbImg: true };
    case "Education":
      return { ...state, showEducationImg: true };
    case "Trophy":
      return { ...state, showTrophyImg: true };
    case "Phone":
      return { ...state, showPhoneImg: true };
    case "removehome":
      return { ...state, showHomeImg: false };
    case "removeinfo":
      return { ...state, showInfoImg: false };
    case "removebulb":
      return { ...state, showBulbImg: false };
    case "removeeducation":
      return { ...state, showEducationImg: false };
    case "removetrophy":
      return { ...state, showTrophyImg: false };
    case "removePhone":
      return {...state,showPhoneImg:false}
    default:
      return state;
  }
};
const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, intialStage);
  const handleMouseEnter = (type) => {
    dispatch({ type });
  };
  const handleMouseLeave = (remove) => {
    dispatch({ type: remove });
  };

  return (
    <div className="navbar">
      <section className="navbartitle">Sujit</section>
      <section className="navbaricons">
        <ul>
          {state.showHomeImg ? (
            <li className="iconsimage homeimg hoverimages ">
              <img
                src={Homehover}
                alt="Home"
                onMouseLeave={() => handleMouseLeave("removehome")}
              ></img>
              Home
            </li>
          ) : (
            <li className="iconsimage homeimg">
              <img
                src={Homeimg}
                alt="Home"
                onMouseEnter={() => handleMouseEnter("Home")}
              ></img>
            </li>
          )}
          {state.showInfoImg ? (
            <li className="iconsimage infoimg  hoverimages  ">
            <img
                src={InfoCirclehover}
                alt="info"
                onMouseLeave={() => handleMouseLeave("removeinfo")}
              ></img>
              About
            </li>
          ) : (
            <li className="iconsimage infoimg">
              <img
                src={infoimg}
                alt="info"
                onMouseEnter={() => handleMouseEnter("Info")}
              ></img>
            </li>
          )}
          {state.showBulbImg ? (
            <li className="iconsimage bulbimg hoverimages">
              <img
                src={Bulbhover}
                alt="bulb"
                onMouseLeave={() => handleMouseLeave("removebulb")}
              ></img>
              Skills
            </li>
          ) : (
            <li className="iconsimage bulbimg">
              <img
                src={bulbimg}
                alt="bulb"
                onMouseEnter={() => handleMouseEnter("Bulb")}
              ></img>
            </li>
          )}
        
          {state.showTrophyImg ? (
            <li className="iconsimage Trophyimg hoverimages">
              <img
                src={Trophyhover}
                alt="Trophy"
                onMouseLeave={() => handleMouseLeave("removetrophy")}
              ></img>
              Achieve
            </li>
          ) : (
            <li className="iconsimage Trophyimg">
              <img
                src={Trophyimg}
                alt="Trophy"
                onMouseEnter={() => handleMouseEnter("Trophy")}
              ></img>
            </li>
          )}
            {state.showEducationImg ? (
            <li className="iconsimage educationimg hoverimages">
              <img
                src={Journolhover}
                alt="education"
                onMouseLeave={() => handleMouseLeave("removeeducation")}
              ></img>
              Education
            </li>
          ) : (
            <li className="iconsimage educationimg">
              <img
                src={educationimg}
                alt="education"
                onMouseEnter={() => handleMouseEnter("Education")}
              ></img>
            </li>
          )}
          {state.showPhoneImg ? (
            <li className="iconsimage phoneimg hoverimages">
              <img
                src={Phonehover}
                alt="phone"
                onMouseLeave={() => handleMouseLeave("removePhone")}
              ></img>
              Contact
            </li>
          ) : (
            <li className="iconsimage phoneimg">
              <img
                src={Phoneimg}
                alt="phone"
                onMouseEnter={() => handleMouseEnter("Phone")}
              ></img>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
