import React, { useCallback, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("app rendering...");

  let val = 1;

  let greet = useCallback(() => {
    let rn = Math.random() * 10;
    return rn;
  }, [count]);

  console.log(greet());

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Home val={val} greet={greet} />
      <About val={val} greet={greet} />
    </div>
  );
};

export default App;

// React.memo hota hai Component ko memoize rerender hone se bachane k liye
// useCallback hota hai function ko memoize or same ref save rakhne k liye
