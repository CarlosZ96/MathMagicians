import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculatorb from './components/Calculator';
import RandomQuote from './components/quote';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="Header-Container">
        <h1 className="Tittle"> Math Magicians</h1>
        <ul>
          <Link to="/"><li className="menu">Home</li></Link>
          <Link to="/calculator"><li className="menu">Calculator</li></Link>
          <Link to="/quote"><li className="menu">Quote</li></Link>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculatorb />} />
        <Route path="/quote" element={<RandomQuote />} />
      </Routes>
    </div>
  );
}

export default App;
