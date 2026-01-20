import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ setToggle }) => {
  let { register, reset, handleSubmit } = useForm();

  return (
    <div>
      <h1>Register form</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
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
