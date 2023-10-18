import logo from './logo.svg';
import './App.css';
import Heading from './componets/Heading';
import Navbar from './componets/Navbar';
import About from './componets/About';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar className='navbar'/>
      <About/>
    </div>
  );
}

export default App;
