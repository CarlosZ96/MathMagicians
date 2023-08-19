import React from 'react';
import '../StyleSheets/calculator.css';
import Button from './boton';

function Calculatorb() {
  return (
    <div className="calculator-container">
      <input type="number" className="number-input" placeholder="0" />
      <div className="buttons-container">
        <div className="numbers-container">
        <Button class="calculator-button">AC</Button>
        <Button class="calculator-button">+/-</Button>
        <Button class="calculator-button">%</Button>
        <Button class="calculator-button">7</Button>
        <Button class="calculator-button">8</Button>
        <Button class="calculator-button">9</Button>
        <Button class="calculator-button">4</Button>
        <Button class="calculator-button">5</Button>
        <Button class="calculator-button">6</Button>
        <Button class="calculator-button">1</Button>
        <Button class="calculator-button">2</Button>
        <Button class="calculator-button">3</Button>
        <Button class="calculator-button zero">0</Button>
        <Button class="calculator-button">.</Button>
        </div>
        <div className="basic-operations-container">
        <Button class="calculator-button operator">÷</Button>
        <Button class="calculator-button operator">x</Button>
        <Button class="calculator-button operator">-</Button>
        <Button class="calculator-button operator">+</Button>
        <Button class="calculator-button operator">=</Button>
        </div>
      </div>
    </div>
  );
}

export default Calculatorb;
