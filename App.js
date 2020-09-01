import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const POKEMON_API_ENDPOINT = `https://pokeapi.co/api/v2/`;
const GET_100_POKEMON_QUERY = `pokemon?limit=100`;

const Stack = createStackNavigator();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`${POKEMON_API_ENDPOINT}${GET_100_POKEMON_QUERY}`)
      .then(res => res.json())
      .then(payload => {
        console.log(payload)
        setPokemonList(payload.results);
      })
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
          <Header />
          <View style={styles.body}>
            <Stack.Navigator
              screenOptions={
                {
                  headerShown: false,
                }
              }
            >
              <Stack.Screen
                name="Pokemon List"
                children={() => {
                  return <PokemonList list={pokemonList}/>
                }}
              />
            </Stack.Navigator>
          </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5,
    width: '100%'
  }
});
