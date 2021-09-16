import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Views Client
import Home from "../views/client/Home";
import Details from "../views/client/Details/index";
import Loja from '../views/client/Store/index';

//Views Seller
import DetailsAdm from "../views/seller/Details/index";
import Store from '../views/seller/Store/index';
import Form from "../views/seller/Form";
import Editar from "../views/seller/FormEdit";
import EditarImage from "../views/seller/FormEditImage";




const HomeScreen = () => {
  return (
      <Stack.Navigator initialRouteName="HomeClient">
        <Stack.Screen
          name="HomeClient"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detalhes" component={Details} />
        <Stack.Screen name="Loja" component={Loja} />

      </Stack.Navigator>
  );
};

export { HomeScreen };








const HomeScreenAdmin = () => {
  return (
      <Stack.Navigator initialRouteName="HomeAdmin">
        <Stack.Screen
          name="HomeAdmin"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detalhes do Produto" component={DetailsAdm} />

        <Stack.Screen name="Detalhes" component={Details} />

        <Stack.Screen name="Store" component={Store} options={{ headerShown: false }} />

        <Stack.Screen name="Novo Produto" component={Form} />
        <Stack.Screen name="Editar Produto" component={Editar} />
        <Stack.Screen name="Editar Foto" component={EditarImage} />





      </Stack.Navigator>
  );
};

export { HomeScreenAdmin };
