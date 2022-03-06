import { User } from "app/models/User";
import * as React from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

interface IUserContext {
  user?: User;
  saveUser: (user: User) => void;
  clearUser: () => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    username: "",
    avatar: "",
    accessToken: "",
  },
  saveUser: () => {},
  clearUser: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const serializedUser = localStorage.getItem("user");

    if (serializedUser) {
      setUser(JSON.parse(serializedUser) as User);
    }
  }, []);

  const saveUser = (newUser: User): void => {
    setUser(newUser);

    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const clearUser = (): void => {
    setUser(undefined);

    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
