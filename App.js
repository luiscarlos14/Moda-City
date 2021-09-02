import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import Client from "./src/routes/client.routes";

export default function App() {
  return (
    <NavigationContainer>
      <Client />
    </NavigationContainer>
  );
}
