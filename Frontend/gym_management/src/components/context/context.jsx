import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("Empty");
  const [users_age, setUsersAge] = useState(0);
  const [type, setType] = useState("");
  const [mob, setMob] =useState("");

  return (
    <AppContext.Provider value={{ user, users_age, type, mob, setUser, setUsersAge, setType, setMob }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook for easy access
export const useAppContext = () => {
  return useContext(AppContext);
};
