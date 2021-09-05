import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/authentication";
import React from "react";

import Client from "./src/routes/client.routes";

import Login from './src/views/Login';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </NavigationContainer>
  );
}
