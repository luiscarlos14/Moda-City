import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import { HomeScreenAdmin } from "./stack.routes";

import sidebar from "../components/SidebarAdmin";

export default function Seller() {
  return (
    <Drawer.Navigator
      //screenOptions={{ headerTransparent: true}}
      screenOptions={{ headerShown: false}}
      drawerContent= {sidebar}  
      
    >
      <Drawer.Screen name="Inicio" component={HomeScreenAdmin} />
    </Drawer.Navigator>
  );
}
