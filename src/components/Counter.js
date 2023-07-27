import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initializing state with an initial value of 0

  function increment() {
    setCount(count + 1); // Updating state using the setter function
  }

  return <button onClick={increment}>{count}</button>;
}

export default Counter;