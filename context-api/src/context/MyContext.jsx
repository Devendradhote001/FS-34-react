import { useCallback, useState } from "react";
import { createContext } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  let updateCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <MyStore.Provider value={{ count, setCount, updateCount }}>
      {children}
    </MyStore.Provider>
  );
};
