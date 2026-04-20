import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = ({ children }) => {
  console.log("home rendering...");

  useContext(MyStore);

  return (
    <div>
      <h1>Home</h1>
      {children}
    </div>
  );
};

export default React.memo(Home);
