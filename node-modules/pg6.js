// Counter.js
import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Initialize state variable count to 0
  const [count, setCount] = useState(0);

  // Just set count directly on mount (no delay or API simulation)
  useEffect(() => {
    setCount(0); // Directly set to 0
  }, []);

  // Handle actions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const double = () => setCount(count * 2);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={double}>Double</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        {/* Display messages for specific values */}
        {count < 0 && <p>The count cannot be less than 0!</p>}
        {count === 0 && <p>Count is at the initial value!</p>}
      </div>
    </div>
  );
};

export default Counter;

//CAN ALSO BE USED
//
//useEffect(() => {
//  const fetchData = async () => {
//    try {
//      const initialCount = await new Promise(...); // simulate delay
//      setCount(initialCount); // set count to 0 after delay
//    } catch (error) {
//      console.error("Error fetching data:", error);
//    }
//  };
//  fetchData();
//}, []);
