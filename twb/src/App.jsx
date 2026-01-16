import React, { useState } from "react";

const App = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });


  console.log(user);

  return (
    <div>
      <h1>Hello</h1>
      <form action="">
        <input
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          type="text"
          placeholder="name"
        />{" "}
        <br /> <br />
        <input
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          type="text"
          placeholder="Email"
        />{" "}
        <br /> <br />
        <input
          onChange={(e) => {
            setUser({ ...user, mobile: e.target.value });
          }}
          type="text"
          placeholder="Mobile"
        />{" "}
        <br />
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default App;
