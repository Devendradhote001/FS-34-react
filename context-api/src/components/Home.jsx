import React, { useContext } from "react";
import { MyStore } from "../MyContext";

const Home = () => {
  let { naam, setNaam } = useContext(MyStore);
  return (
    <div>
      <h1>home - {naam}</h1>
      <button onClick={() => setNaam("rahul")}>change name</button>
    </div>
  );
};

export default Home;
