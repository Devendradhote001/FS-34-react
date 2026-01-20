import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { useForm } from "react-hook-form";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
