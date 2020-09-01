import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PokemonDetails(props) {
  const url = props.route.params.pokemon.url

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon((state) => data);
      })
  }, [])

  return(
    <View>
      <View style={styles.container}>
        {
          pokemon.id ? (
            <>
              <Image style={styles.image} source={{ uri: pokemon.sprites.front_default }}/>
              <Text style={styles.h1}>{pokemon.name}</Text>
              <Text style={styles.p}>Weight: {pokemon.weight}</Text>
              <Text style={styles.p}>Height: {pokemon.height}</Text>
            </>
          ) :
          <Text style={styles.loading}>Loading...</Text>
        } 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 300,
    width: 300
  },
  h1: {
    fontSize: 50
  },
  p: {
    fontSize: 20
  },
  loading: {
    fontSize: 30,
    paddingTop: 200
  }
})