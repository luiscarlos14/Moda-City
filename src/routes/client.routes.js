import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import { HomeScreen } from "./stack.routes";

import sidebar from "../components/sidebar";

export default function Client() {
  return (
    <Drawer.Navigator
      //screenOptions={{ headerTransparent: true}}
      screenOptions={{ headerShown: false}}
      drawerContent= {sidebar}  
      
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
