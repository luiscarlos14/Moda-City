import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

//Views Client
import Login from '../views/SingIn';
import Cadastro from "../views/Cadastro";

export default function Auth() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false}} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
  );
}

