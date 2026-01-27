import React, { useContext, useState } from "react";
import Home from "./components/Home";
import { ContextProvider } from "./MyContext";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </div>
  );
};

export default App;
