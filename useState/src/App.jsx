import React, { useState } from "react";
import Add from "./components/Add";
import Subs from "./components/Subs";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <h1>
        Count hai mere pass - <span className="text-3xl">{count}</span>
      </h1>
      <div className="flex gap-10">
        <Add add={setCount} />
        <Subs sub={setCount} />
      </div>
    </div>
  );
};

export default App;
