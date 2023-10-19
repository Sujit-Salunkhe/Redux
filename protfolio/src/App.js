import './App.css';
import Heading from './componets/Heading';
import Navbar from './componets/Navbar';
import About from './componets/About';
import Skill from './componets/Skill';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <About/>
      <Skill/>
    </div>
  );
}

export default App;
