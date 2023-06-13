import React, { useState } from "react";

const Counter = ({ button }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const clear = () => {
    setCount(0);
  };

  return  (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Counter