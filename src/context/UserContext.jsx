import { createContext, useState } from "react";
import { databaseUser } from "../services/database";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const filterUser = databaseUser.filter((elem) => {
    return elem.name === "Annet Black";
  });

  const [user, setUser] = useState(filterUser);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
