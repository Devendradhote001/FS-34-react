import React, { useState } from "react";

const App = () => {
  console.log("rendering...");
  const [count, setCount] = useState(0);

  let handle = () => {
    setCount(1);
    setCount(2);
    setCount(3);
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handle}>Action</button>
    </div>
  );
};

export default App;
