import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Anime from './pages/Anime';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Anime" component={Anime} />
        {/* <Stack.Screen name="Episodios" component={Episodios} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
