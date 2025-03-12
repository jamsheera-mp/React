

import React, { useRef, useState } from "react";

function CounterUsingUseRef() {
  const count = useRef(0); // Stores value across renders without causing re-render
  const [stateCount, setStateCount] = useState(0);

  function increase() {
    count.current += 1; // ✅ Updates ref without causing re-render
    console.log("Count (useRef):", count.current);
  }

  function increaseState() {
    setStateCount(stateCount + 1); // ❌ Causes re-render
  }

  return (
    <div>
      <p>useRef Count: {count.current}</p> {/* Won't update UI */}
      <p>useState Count: {stateCount}</p> {/* Updates UI */}
      <button onClick={increase}>Increase useRef Count</button>
      <button onClick={increaseState}>Increase useState Count</button>
    </div>
  );
}

export default CounterUsingUseRef;
