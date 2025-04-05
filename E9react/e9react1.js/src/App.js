import React, { useState } from "react";
import "./App.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // Default step size

  return (
    <div className="counter-container">
      <h1>🔢 Counter App</h1>

      <p className="count-display">Count: {count}</p>

      <div className="step-control">
        <label>Step Size: </label>
        <input 
          type="number" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))} 
        />
      </div>

      <div className="button-group">
        <button onClick={() => setCount(count + step)} className="btn increment">
          ➕ Increase
        </button>
        <button onClick={() => setCount(count - step)} className="btn decrement">
          ➖ Decrease
        </button>
        <button onClick={() => setCount(0)} className="btn reset">
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
