import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey it's me, your Pz.</Text>
        <Text>None of this means anything and it's all just filler.</Text>
        <Text>It's a good time for me.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dd2396',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
