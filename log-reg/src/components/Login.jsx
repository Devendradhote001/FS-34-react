import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div>
      <h1>Login form</h1>
      <form action="">
        <input type="text" placeholder="Username" /> <br />
        <input type="text" placeholder="password" /> <br />
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
