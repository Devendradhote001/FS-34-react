import React from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("app rendering..");

  return (
    <div>
      <h1>App</h1>
      <Home />
      <About />
    </div>
  );
};

export default App;
