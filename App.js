import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/authentication";
import React from "react";

import Client from "./src/routes/client.routes";
import Router from "./src/routes/index";
import Login from './src/views/Login';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}
