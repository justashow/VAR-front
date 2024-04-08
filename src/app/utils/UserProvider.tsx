"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("isLoggedIn 상태 변경됨:", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      setIsLoggedIn(true);
      // 추가적으로, 사용자 정보를 가져오는 로직이 있다면 여기에 포함
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const login = (userDetails, token) => {
    setUserInfo(userDetails);
    localStorage.setItem("Authorization", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem("Authorization");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, isLoggedIn, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
