import React, { useState } from 'react';
import '../StyleSheets/calculator.css';
import Button from './boton';
import calculate from '../logic/calculate';

function Calculatorb() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  return (
    <div className='calculator-section'>
      <h1 className="calculatortittle">Lets do Some Math!</h1>
      <div className="calculator-container">
        <input
          type="text"
          className="number-input"
          value={calculatorData.next || calculatorData.total || '0'}
          readOnly
        />
        <div className="buttons-container">
          <div className="numbers-container">
            <Button className="calculator-button" onClick={() => handleButtonClick('AC')}>AC</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('+/-')}>+/-</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('%')}>%</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('7')}>7</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('8')}>8</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('9')}>9</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('4')}>4</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('5')}>5</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('6')}>6</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('1')}>1</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('2')}>2</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('3')}>3</Button>
            <Button className="calculator-button zero" onClick={() => handleButtonClick('0')}>0</Button>
            <Button className="calculator-button" onClick={() => handleButtonClick('.')}>.</Button>
          </div>
          <div className="basic-operations-container">
            <Button className="calculator-button operator" onClick={() => handleButtonClick('÷')}>÷</Button>
            <Button className="calculator-button operator" onClick={() => handleButtonClick('x')}>x</Button>
            <Button className="calculator-button operator" onClick={() => handleButtonClick('-')}>-</Button>
            <Button className="calculator-button operator" onClick={() => handleButtonClick('+')}>+</Button>
            <Button className="calculator-button operator" onClick={() => handleButtonClick('=')}>=</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculatorb;
