import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';

export default function PokemonList({ list, navigation }) {
  console.log(navigation)
  return(
    <ScrollView>
      {
        list.map((pokemon, i) => {
          return(
            <TouchableHighlight
              key={i}
              underlayColor="lightblue"
              activeOpacity={0.3}
              onPress={(event) => {
                console.log(event.target)
                console.log(event.currentTarget)
                navigation.navigate('Pokemon Details', { pokemon })
              }}
            >
              <View style={styles.li}>
                <Text style={styles.p}>{pokemon.name}</Text>
              </View>
            </TouchableHighlight>
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