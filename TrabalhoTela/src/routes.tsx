import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import Login from './pages/Login';
import GeracaoCodigo from './pages/GeracaoCodigo';
import ResgatarCodigo from './pages/ResgatarCodigo';
import TopBar from './components/TopBar';

// const AppStack = createStackNavigator();

// export default function routes() {
//   return (
//     <NavigationContainer>
//       <AppStack.Navigator screenOptions={{
//         headerShown: false
//       }}>
//         <AppStack.Screen name="Login" component={Login} />
//         <AppStack.Screen name="GeracaoCodigo" component={GeracaoCodigo} />
//         <AppStack.Screen name="ResgatarCodigo" component={ResgatarCodigo} />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   )
// }

const clientDrawerNavigator = createDrawerNavigator({
  'Gerar código de pontos': {
    screen: GeracaoCodigo
  },
  'Validar código': {
    screen: ResgatarCodigo
  }
});

export default createAppContainer(clientDrawerNavigator);