import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from './Login';
import HomeScreen from './Home';
import IndexScreen from './index';
import CadastroScreen from './Cadastro';
import { RootStackParamList } from '../types';
import DipScreen from './Dip';
import CityScreen from './City';
import RestaurantScreen from './Restaurant';
import EsqueceuScreen from './Esqueceu';
import HotelScreen from './Hotel';

const Stack = createStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen 
            name="Index" 
            component={IndexScreen} 
            options={{ headerShown: false }} // Esconde o cabeçalho padrão
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Cadastro" 
            component={CadastroScreen} 
            options={{ headerShown: false }} // Esconde o cabeçalho padrão
          />
          <Stack.Screen name="Esqueceu" component={EsqueceuScreen} />
          <Stack.Screen name="Dip" component={DipScreen} />
          <Stack.Screen name="City" component={CityScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Hotel" component={HotelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
