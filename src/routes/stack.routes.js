import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../views/client/Home";
import Details from "../views/client/Details";

const HomeScreen = () => {
  return (
      <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen
          name="HomeStack"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
  );
};

export { HomeScreen };
