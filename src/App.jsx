import './App.css';
import Calculatorb from './components/Calculator';
import RandomQuote from './components/quote';

function App() {
  return (
    <div className="App">
      <div className="Title-container">
        <h1>Math-Magicians</h1>
      </div>
      <div className='appContainer'>
      <Calculatorb />
      <RandomQuote />
      </div>
    </div>
  );
}

export default App;
