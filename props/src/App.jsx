import React from "react";
import About from "./About";
import Contact from "./Contact";

const App = (props) => {
  console.log("app..");

  const getDataFromChild = (param) => {
    console.log(param);
  };

  return (
    <div>
      <h1>Hello</h1>
      <About fun={getDataFromChild} name="rahul" age={90} />
      <Contact tum={getDataFromChild} />
    </div>
  );
};

export default App;
