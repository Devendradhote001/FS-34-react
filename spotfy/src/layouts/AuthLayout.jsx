import React, { Activity, useState } from "react";
import Login from "../features/auth/components/Login";
import Register from "../features/auth/components/Register";

const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Activity mode={toggle ? "hidden" : "visible"}>
        <Login setToggle={setToggle} />
      </Activity>
      <Activity mode={!toggle ? "hidden" : "visible"}>
        <Register setToggle={setToggle} />
      </Activity>
    </div>
  );
};

export default AuthLayout;
