import React, { createContext, useState } from "react";
import { login, register, logout, stateChange } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  stateChange((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  const onLogin = (email, password) => {
    setIsLoading(true);
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        console.log(error, "errr");
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
        // ..
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    register(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
        // ..
      });
  };

  const onLogout = () => {
    logout()
      .then(() => setUser(null))
      .catch((err) => console.log(err));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
