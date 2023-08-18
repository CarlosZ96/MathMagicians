import React from "react";
import "../StyleSheets/calculator.css";

function Calculatorb() {
  return (
    <div className="calculator-container">
      <input type="number" className="number-input" placeholder="0" />
      <div className="buttons-container">
        <div className="numbers-container">
          <button className="calculator-button" type="button">AC</button>
          <button className="calculator-button" type="button">+/-</button>
          <button className="calculator-button" type="button">%</button>
          <button className="calculator-button" type="button">7</button>
          <button className="calculator-button" type="button">8</button>
          <button className="calculator-button" type="button">9</button>
          <button className="calculator-button" type="button">4</button>
          <button className="calculator-button" type="button">5</button>
          <button className="calculator-button" type="button">6</button>
          <button className="calculator-button" type="button">1</button>
          <button className="calculator-button" type="button">2</button>
          <button className="calculator-button" type="button">3</button>
          <button className="calculator-button zero" type="button">0</button>
          <button className="calculator-button" type="button">.</button>
        </div>
        <div className="basic-operations-container">
          <button className="calculator-button operator" type="button">/</button>
          <button className="calculator-button operator" type="button">x</button>
          <button className="calculator-button operator" type="button">-</button>
          <button className="calculator-button operator" type="button">+</button>
          <button className="calculator-button operator" type="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculatorb;
