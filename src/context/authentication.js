import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useContext, useEffect } from "react";
import api, { TOKEN_KEY, LOGGED, ADMIN, SELLER, CITY, ID_USER, NAME_USER } from "../config/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    AsyncStorage.getItem(LOGGED)
      .then((value) => {
        setAuthenticated(value === "true" ? true : false);
      })
      .done();
  }, []);

  const [authenticated, setAuthenticated] = useState();
  const [admin, setAdmin] = useState();
  const [seller, setSeller] = useState();

  const [token, setToken] = useState();

  const Login = (email, password) => {
    api
      .post("/login", {
        email: email,
        password: password,
      })
      .then(function (response) {

        AsyncStorage.setItem(LOGGED, "true");
        AsyncStorage.setItem(TOKEN_KEY, response.data.token);
        AsyncStorage.setItem(ID_USER,`${response.data.data_user.id_user}`);
        AsyncStorage.setItem(CITY, response.data.data_user.city);
        AsyncStorage.setItem(NAME_USER, response.data.data_user.name);
        setAuthenticated(true);
        setToken(response.data.token);


        if (response.data.data_user.admin === 1) {
          setAdmin(true);
        }
        else if (response.data.data_user.seller === 1) {
          setSeller(true);
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Sair = () => {
    AsyncStorage.removeItem(LOGGED);
    AsyncStorage.removeItem(TOKEN_KEY);
    AsyncStorage.removeItem(ID_USER);
    AsyncStorage.removeItem(CITY);
    AsyncStorage.removeItem(NAME_USER);
    setAuthenticated(false);   
    setSeller(false);   
    setAdmin(false);       
    setToken('');
  };

  return (
    <AuthContext.Provider
      value={{ Login, Sair, authenticated, token, admin, seller }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
