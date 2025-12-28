import React, { useState } from "react";

const App = () => {
  console.log("app rendering....");
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello</h1>
      <h2>Count is - {count}</h2>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Increment
      </button>
      <button>Decrement</button>
    </div>
  );
};

export default App;
