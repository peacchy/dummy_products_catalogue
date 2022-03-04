import * as React from "react";
import { createContext, useState } from "react";

interface IUserContext {
  user?: string;
  setUser: (user: string) => void;
}

export const UserContext = createContext<IUserContext>({
  user: "",
  setUser: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
