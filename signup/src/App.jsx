import React, { useContext } from "react";
import Login from "./components/Login";
import Register from "./components/register";
import { MyStore } from "./MyContext";

const App = () => {
  let { toggle } = useContext(MyStore);

  return <div>{toggle ? <Login /> : <Register />}</div>;
};

export default App;
