import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const About = () => {
  console.log("About rendering...");
  let { setCount, count, updateCount } = useContext(MyStore);

  return (
    <div>
      <h1>About - {count}</h1>
      <button onClick={() => updateCount()}>Increment</button>
    </div>
  );
};

export default About;
