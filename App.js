import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Pagina02 from './Pages/Pagina02'; // Import your other page component
import Pagina01 from './Pages/Pagina01'; // Import your initial page component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pagina01">
        <Stack.Screen name="Pagina01" component={Pagina01} />
        <Stack.Screen name="Pagina02" component={Pagina02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
