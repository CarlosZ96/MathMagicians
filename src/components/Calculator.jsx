import React from 'react';
import '../StyleSheets/calculator.css';
import Button from './boton';

function Calculatorb() {
  return (
    <div className="calculator-container">
      <input type="number" className="number-input" placeholder="0" />
      <div className="buttons-container">
        <div className="numbers-container">
          <Button className="calculator-button">AC</Button>
          <Button className="calculator-button">+/-</Button>
          <Button className="calculator-button">%</Button>
          <Button className="calculator-button">7</Button>
          <Button className="calculator-button">8</Button>
          <Button className="calculator-button">9</Button>
          <Button className="calculator-button">4</Button>
          <Button className="calculator-button">5</Button>
          <Button className="calculator-button">6</Button>
          <Button className="calculator-button">1</Button>
          <Button className="calculator-button">2</Button>
          <Button className="calculator-button">3</Button>
          <Button className="calculator-button zero">0</Button>
          <Button className="calculator-button">.</Button>
        </div>
        <div className="basic-operations-container">
          <Button className="calculator-button operator">÷</Button>
          <Button className="calculator-button operator">x</Button>
          <Button className="calculator-button operator">-</Button>
          <Button className="calculator-button operator">+</Button>
          <Button className="calculator-button operator">=</Button>
        </div>
      </div>
    </div>
  );
}

export default Calculatorb;
