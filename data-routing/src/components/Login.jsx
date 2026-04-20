import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

const Login = ({ setToggle }) => {
  let dispatch = useDispatch();

  let navigate = useNavigate();
  const [formData, setFormData] = useState({});

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "http://localhost:3000/api/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );

    dispatch(addUser(res.data.user))

    console.log(res);
    navigate("/home");
  };

  return (
    <div>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          placeholder="Username"
        />{" "}
        <br />
        <input
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="text"
          placeholder="password"
        />{" "}
        <br />
        <button>Submit</button>
      </form>
      <p>
        Dont have an account{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          style={{ color: "Blue", cursor: "pointer" }}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
