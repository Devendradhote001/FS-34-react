import { createContext, useState } from "react";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  return (
    <MyStore.Provider value={{ cartItems, setCartItems }}>
      {children}
    </MyStore.Provider>
  );
};
