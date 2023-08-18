import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Tittle-container'>
        <h1 className='tittle'>Math Magicians</h1>
      </div>
      <div className='calculator-container'>
        <input type="number" className='number-input' placeholder='0' />
        <div className='buttons-container'>
          <div className='numbers-container'>
          <button className='calculator-button'>AC</button>
          <button className='calculator-button'>+/-</button>
          <button className='calculator-button'>%</button>
          <button className='calculator-button'>7</button>
          <button className='calculator-button'>8</button>
          <button className='calculator-button'>9</button>
          <button className='calculator-button'>4</button>
          <button className='calculator-button'>5</button>
          <button className='calculator-button'>6</button>
          <button className='calculator-button'>1</button>
          <button className='calculator-button'>2</button>
          <button className='calculator-button'>3</button>
          <button className='calculator-button zero'>0</button>
          <button className='calculator-button'>.</button>
          </div>
          <div className='basic-operations-container'>
          <button className='calculator-button'>/</button>
          <button className='calculator-button'>x</button>
          <button className='calculator-button'>-</button>
          <button className='calculator-button'>+</button>
          <button className='calculator-button'>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
