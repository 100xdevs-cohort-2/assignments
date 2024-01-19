import React, { createContext, useContext, useEffect, useState } from "react";

//1. Create user context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log("context localstorage", storedUser);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUserData(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
