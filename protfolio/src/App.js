import './App.css';
import Heading from './componets/Heading';
import Navbar from './componets/Navbar';
import About from './componets/About';
import Skill from './componets/Skill';
import Achievement from './componets/Achievement';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <About/>
      <Skill/>
      <Achievement/>
    </div>
  );
}

export default App;
