import { useMemo } from "react";
import { createContext, useState } from "react";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("reg user")) || []
  );

  return (
    <MyStore.Provider
      value={{
        cartItems,
        setCartItems,
        isLoading,
        setIsLoading,
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
