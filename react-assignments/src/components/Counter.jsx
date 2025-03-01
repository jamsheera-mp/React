
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="counter-button decrement" onClick={decrement}>-</button>
        <button className="counter-button increment" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;