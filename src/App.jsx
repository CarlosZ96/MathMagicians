import React, { useState, useEffect } from 'react';
import './App.css';
import Calculatorb from './components/Calculator';
import emoji from './components/quote';

function App() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    emoji(setQuoteData);
  }, []);

  return (
    <div className="App">
      <div className="Title-container">
        <h1 className="title">Math Magicians</h1>
        {quoteData && (
          <div className="quote">
            <span className="emoji">{quoteData.character}</span>
          </div>
        )}
      </div>
      <Calculatorb />
    </div>
  );
}

export default App;
