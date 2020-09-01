import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function PokemonDetails(props) {
  const url = props.route.params.pokemon.url

  const [pokemon, setPokemon] = useState({});
  const [currentSprite, setCurrentSprite] = useState(0);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon((state) => data);
      })
  }, [])

  function updateDisplayedSprite(bool) {
    if (bool) {
      setCurrentSprite((state) => {
        if (state === 7) {
          return 0;
        }
        return state + 1;
      })
    } else {
      setCurrentSprite((state) => {
        if ( state === 0 ) {
          return Object.keys(pokemon.sprites).length - 3
        }
        return state - 1;
      })
    }
  }

  return(
    <View>
      <View style={styles.container}>
        {
          pokemon.id ? (
            <>
              <View style={styles.imageContainer}>
                <Button title='👈' onPress={() => updateDisplayedSprite(false) }></Button>
                <Image style={styles.image} source={{ uri: pokemon.sprites[Object.keys(pokemon.sprites)[currentSprite]] || '#' }}/>
                <Button title='👉' onPress={() => updateDisplayedSprite(true) }></Button>
              </View>
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
  imageContainer: {
    flexDirection: 'row',
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