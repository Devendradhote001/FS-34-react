import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-4">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
