import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PokemonList({ list }) {
  return(
    <ScrollView>
      {
        list.map((pokemon, i) => {
          return(
            <View key={i} style={styles.li}>
              <Text style={styles.p}>{pokemon.name}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  li: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    fontSize: 25
  }
})