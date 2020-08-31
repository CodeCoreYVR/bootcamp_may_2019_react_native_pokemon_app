import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Pokédex</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello World</Text>
      </View>
    </View>
  );
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 5
  }
});
