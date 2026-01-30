import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../MyContext";

const Register = () => {
  let { setToggle, setRegisterUsers, registerUsers } = useContext(MyStore);
  let { register, reset, handleSubmit } = useForm();

  let handleFormSubmit = (data) => {
    let updateArr = [...registerUsers, data];
    setRegisterUsers(updateArr);
    localStorage.setItem("users", JSON.stringify(updateArr));
    reset();
    alert("user registered successfully");
  };

  return (
    <div>
      <h1>Register form</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register("username")} type="text" placeholder="Username" />{" "}
        <br />
        <input {...register("name")} type="text" placeholder="Name" /> <br />
        <input
          {...register("password")}
          type="text"
          placeholder="password"
        />{" "}
        <br />
        <button>Submit</button>
      </form>
      <p>
        Already have an account{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          style={{ color: "Blue", cursor: "pointer" }}
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
