import React from "react";
import "./Skill.css";
const Skill = () => {
  const toggleWebDevlopment = () => {
    const textshowelement = document.getElementsByClassName("Webdevlopment")[0];
    textshowelement.addEventListener("mouseenter", () => {
      textshowelement.id = "webdevlopmentText";
      textshowelement.innerText = "I am a Full Stack Web Developer (MERN)";
    });
  };
  const toggleWebDevlopmenHide = () => {
    const textshowelement = document.getElementsByClassName("Webdevlopment")[0];
    textshowelement.removeEventListener("mouseenter", toggleWebDevlopment);
    textshowelement.id = null;
    textshowelement.innerText = "Web Development";
  };
  const toggleWebDesign = () => {
    const textshowelement = document.getElementsByClassName("Webdesign")[0];
    textshowelement.addEventListener("mouseenter", () => {
      textshowelement.id = "webdevlopmentText";
      textshowelement.innerText =
        "I love designs and it's the first step before creating any website as I can give layout to my imagination.";
    });
  };
  const toggleWebDesignHide = () => {
    const textshowelement = document.getElementsByClassName("Webdesign")[0];
    textshowelement.removeEventListener("mouseenter", toggleWebDesign);
    textshowelement.id = null;
    textshowelement.innerText = "Web Design";
  };
  const toggleproblem = () => {
    const textshowelement = document.getElementsByClassName("Problem")[0];
    textshowelement.addEventListener("mouseenter", () => {
      textshowelement.id = "webdevlopmentText";
      textshowelement.innerText =
        "I love solving problems whether programming problems or real life problems.";
    });
  };
  const toggleproblemHide = () => {
    const textshowelement = document.getElementsByClassName("Problem")[0];
    textshowelement.removeEventListener("mouseenter", toggleWebDesign);
    textshowelement.id = null;
    textshowelement.innerText = "Problem Solving";
  };

  return (
    <div id="thirdcomponent">
      <div className="skillhead">
        <h3>Skills</h3>
      </div>
      <div className="skillbodybox">
        <div
          className="Webdesign skillbox"
          onMouseEnter={toggleWebDesign}
          onMouseLeave={toggleWebDesignHide}
        >
          <p>Web Design</p>
        </div>
        <div
          className="Webdevlopment skillbox"
          onMouseEnter={toggleWebDevlopment}
          onMouseLeave={toggleWebDevlopmenHide}
        >
          <p>Web Development</p>
        </div>
        <div
          className="Problem Solving skillbox"
          onMouseEnter={toggleproblem}
          onMouseLeave={toggleproblemHide}
        >
          <p>Problem Solving</p>
        </div>
      </div>
      <section className="skillsmainwithhead">
        <div className="techTitle">
            TECH I'M FAMILIAR WITH
        </div>
        <main className="skillsmain">
        <ul className="firstskillbox techbox">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JAVASCRIPT</li>
        </ul>
        <ul className="secondskillbox techbox">
            <li>REACT</li>
            <li>MONGO DB</li>
            <li>EXPRESS JS</li>
            <li>TAILWIND</li>
        </ul>
        <ul className="thirdkillbox techbox">
            <li>NODE JS</li>
            <li>PYTHON</li>
            <li>REDUX</li>
        </ul>
        </main>
      </section>
    </div>
  );
};

export default Skill;
