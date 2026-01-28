import { createContext, useState } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [naam, setNaam] = useState("polo");
  return (
    <MyStore.Provider value={{ naam, setNaam }}>{children}</MyStore.Provider>
  );
};
