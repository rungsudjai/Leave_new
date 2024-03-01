// AuthContext.js
import React, { createContext, useState } from 'react';

// สร้าง Context
export const AuthContext = createContext();

// สร้าง Provider
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // เริ่มต้นด้วยสถานะการล็อกอินเป็น false

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
