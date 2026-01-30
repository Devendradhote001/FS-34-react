import { createContext, useState } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  return (
    <MyStore.Provider
      value={{ toggle, setToggle, registerUsers, setRegisterUsers }}
    >
      {children}
    </MyStore.Provider>
  );
};
