import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <div className="">
      <Navbar />

      <div className="p-4">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
