import React, { useContext } from "react";
import { MyStore } from "../MyContext";

const Home = () => {
  let { cdata, setCdata } = useContext(MyStore);
  return (
    <div>
      <h1>home -{cdata}</h1>
    </div>
  );
};

export default Home;
