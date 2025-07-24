import React, { useState, useMemo } from "react";

function ExpensiveCalculator() {
  const [number, setNumber] = useState(10000);
  const [count, setCount] = useState(0);

  const expensiveSum = useMemo(() => {
    console.log("Calculating sum...");
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }, [number]);

  return (
    <div>
      <h2>Expensive Sum: {expensiveSum}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render Component</button>
      <p>Re-render Count: {count}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
    </div>
  );
}

export default ExpensiveCalculator;
