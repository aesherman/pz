import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey it's me, your Petzi.</Text>
        <Text>Change all your security settings to let me in.</Text>
        <Text>It's totally secure, just trust me.</Text>
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
