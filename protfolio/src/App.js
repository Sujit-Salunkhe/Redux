import './App.css';
import Heading from './componets/Heading';
import Navbar from './componets/Navbar';
import About from './componets/About';
import Skill from './componets/Skill';
import Achievement from './componets/Achievement';
import Education from './componets/Education';
import Contact from './componets/Contact';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <About/>
      <Skill/>
      <Achievement/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
