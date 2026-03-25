import React, { useRef } from "react";

import { axiosIntance } from "./config/axiosInstance";

const App = () => {
  console.log("app rendering...");
  let inpRef = useRef({
    name: "pop",
  });
  console.log(inpRef);

  let fetchData = async () => {
    try {
      let res = await axiosIntance.get("/use");
      console.log(res);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  fetchData();

  return (
    <div>
      <h1>APP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log(inpRef.current.name.value);
          console.log(inpRef.current.email.value);
          console.log(inpRef.current.password.value);

          // formRef.current.reset();
          e.target.reset();
        }}
        action=""
      >
        <input
          ref={(e) => (inpRef.current.name = e)}
          type="text"
          placeholder="name"
        />{" "}
        <br /> <br />
        <input
          ref={(e) => (inpRef.current.email = e)}
          type="text"
          placeholder="email"
        />{" "}
        <br /> <br />
        <input
          ref={(e) => (inpRef.current.password = e)}
          type="text"
          placeholder="password"
        />{" "}
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
