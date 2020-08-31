import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return(
    <View style={styles.header}>
      <Text style={styles.h1}>Pokédex</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  h1: {
    fontSize: 40
  },
})
