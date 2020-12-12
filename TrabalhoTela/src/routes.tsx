import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GeracaoCodigo from './pages/GeracaoCodigo';
import Login from './pages/Login';
import ResgatarCodigo from './pages/ResgatarCodigo';


const AppStack = createStackNavigator();

export default function routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="GeracaoCodigo" component={GeracaoCodigo} />
        <AppStack.Screen name="ResgatarCodigo" component={ResgatarCodigo} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}