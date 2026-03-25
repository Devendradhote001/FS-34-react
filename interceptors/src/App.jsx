import React, { useEffect } from "react";
import { axiosInstance } from "./config/axiosInstance";

const App = () => {
  useEffect(() => {
    (async () => {
      let res = await axiosInstance("/users");
      console.log(res);
    })();
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
