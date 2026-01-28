import { useState } from "react";
import { createContext } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [toggle, setToggle] = useState(false);
  
  console.log("in context->", products);

  return (
    <MyStore.Provider value={{ products, setProducts, toggle, setToggle }}>
      {children}
    </MyStore.Provider>
  );
};
