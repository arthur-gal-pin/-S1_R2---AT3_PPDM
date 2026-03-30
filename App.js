import React from 'react'; // Importe o React
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Home from './src/pages/home';
import Contact from './src/pages/contact';
import Products from './src/pages/products';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Página inicial" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Informações de contato" }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ title: "Página de produtos" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}