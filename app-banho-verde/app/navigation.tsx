import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Ínicio' screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Ínicio" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}