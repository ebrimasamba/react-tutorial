import React, { createContext, useState } from "react";

export const UserConetext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: "Ebrima Samba",
    email: "ebrimasamba@gmail.com",
  });

  return (
    <UserConetext.Provider value={{ user }}>{children}</UserConetext.Provider>
  );
};
