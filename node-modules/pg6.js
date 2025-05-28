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

//CAN ALSO BE USEDs
//
  //useEffect(() => {
  //  const fetchData = async () => {
  //    try {
  //      // Simulating an API call (e.g., getting initial count)
  //      const initialCount = await new Promise((resolve) => {
  //        setTimeout(() => {
  //          resolve(0); // Simulate API returning 0
  //        }, 1000); // 1 second delay
  //      });
//
  //      // Update the state with the fetched count
  //      setCount(initialCount);
  //    } catch (error) {
  //      console.error("Error fetching data:", error);
  //    }
  //  };

