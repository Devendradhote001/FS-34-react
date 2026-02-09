import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  let getValueFromApi = async () => {
    let res = await axios.get("https://fakestoreapi.com/users");
    if (res) {
      setUsers(res.data);
    }
  };

  useEffect(() => {
    getValueFromApi();
  }, []);

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <div>
        {users.map(({ id, email }) => (
          <h1 key={id}>{email}</h1>
        ))}
      </div>
    </div>
  );
};

export default App;
