import React, { useContext } from "react";
import { MyStore } from "../MyContext";
import { useForm } from "react-hook-form";

const Login = () => {
  let { register, handleSubmit, reset } = useForm();
  let { setToggle, registerUsers } = useContext(MyStore);

  let handleLoginForm = (data) => {
    let checkUser = registerUsers.find(
      (elem) =>
        elem.username === data.username && elem.password === data.password
    );

    if (!checkUser) {
      return alert("Invalid credentials..!");
    }

    alert("user fetched");
  };

  return (
    <div>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit(handleLoginForm)} action="">
        <input {...register("username")} type="text" placeholder="Username" />{" "}
        <br />
        <input
          {...register("password")}
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
