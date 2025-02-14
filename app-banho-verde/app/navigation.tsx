import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Home"; 
import LoginScreen from "./Login";
import DipScreen from "./Dip"; 

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>  {/* Apenas um NavigationContainer no App.tsx */}
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Rios e Banhos" component={DipScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
