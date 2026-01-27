import { createContext, useState } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [cdata, setCdata] = useState("pop");

  return (
    <MyStore.Provider value={{ cdata, setCdata }}>{children}</MyStore.Provider>
  );
};
