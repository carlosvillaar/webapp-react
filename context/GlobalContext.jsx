import { createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const value = {};
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
