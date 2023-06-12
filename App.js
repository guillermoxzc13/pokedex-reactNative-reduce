import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './src/screens/HomeScreen';
import PokemonListScreen from './src/list/PokemonListScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokédex" component={PokemonListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


