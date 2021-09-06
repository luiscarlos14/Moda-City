import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useContext, useEffect } from "react";
import api, { TOKEN_KEY } from "../config/api";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY)
      .then((value) => {
        setAuthenticated(value === "true" ? true : false);
      })
      .done();
  }, []); 

  const [authenticated, setAuthenticated] = useState();

  const Login = (email, password) => {
    api
      .post("/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        AsyncStorage.setItem(TOKEN_KEY, "true");
        setAuthenticated(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

 

  const Sair = () => {
    AsyncStorage.removeItem(TOKEN_KEY);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ Login,  Sair, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

