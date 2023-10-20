import "./App.css";
import Firstcomponet from "./componets/Firstcomponet";
import Navbar from "./componets/Navbar";
import About from "./componets/About";
import Skill from "./componets/Skill";
import Achievement from "./componets/Achievement";
import Education from "./componets/Education";
import Contact from "./componets/Contact";
import { useEffect, useState } from "react";

function App() {
  const [home, sethome] = useState(false);
  const [info, setinfo] = useState(false);
  const [skill, setskill] = useState(false);
  const [achieve, setschieve] = useState(false);
  const [education, seteducation] = useState(false);
  const [contact, setcontact] = useState(false);
  useEffect(() => {
    if (home) {
      let targetzone = document.getElementById("firstcomponet");
      if (targetzone) {
        targetzone.scrollIntoView({ behavior: "smooth" });
      }
    }
    sethome(false);
  }, [home]);
  useEffect(() => {
    if (info) {
      let targetzone = document.getElementById("secondcomponent");
      if (targetzone) {
        targetzone.scrollIntoView({ behavior: "smooth" });
      }
    }
    setinfo(false);
  }, [info]);
  useEffect(() => {
    if (skill) {
      let targetzone = document.getElementById("thirdcomponent");
      if (targetzone) {
        targetzone.scrollIntoView({ behavior: "smooth" });
      }
    }
    setskill(false);
  }, [skill]);
  useEffect(() => {
    if (achieve) {
      let targetzone = document.getElementById("fourthcomponent");
      if (targetzone) {
        targetzone.scrollIntoView({ behavior: "smooth" });
      }
    }
    setschieve(false);
  }, [achieve]);
  useEffect(() => {
    if (education) {
      let targetzone = document.getElementById("fifthcomponent");
      if (targetzone) {
        targetzone.scrollIntoView({ behavior: "smooth" });
      }
    }
    seteducation(false);
  }, [education]);
  useEffect(() => {
    if (contact) {
      let targetzone = document.getElementById("sixthcomponent");
      if (targetzone) {
        targetzone.scrollIntoView({ behavior: "smooth" });
      }
    }
    setcontact(false);
  }, [contact]);
  return (
    <div className="App">
      <Firstcomponet />
      <Navbar
        sethome={sethome}
        setinfo={setinfo}
        setskill={setskill}
        setschieve={setschieve}
        seteducation={seteducation}
        setcontact={setcontact}
      />
      <About />
      <Skill />
      <Achievement />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
