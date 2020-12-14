import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import GeracaoCodigo from './pages/GeracaoCodigo';
import Login from './pages/Login';
import ResgatarCodigo from './pages/ResgatarCodigo';

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
  'Home': {
    screen: Login
  },
  'Gerar código de pontos': {
    screen: GeracaoCodigo
  },
  'Validar código': {
    screen: ResgatarCodigo
  }
});

export default createAppContainer(clientDrawerNavigator);