/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Button } from 'native-base'

export default class App extends Component {
  render() {
    console.log('HELLO', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello from the App file!
        </Text>
        <Button block onPress={this.handlePress}>
          Click me
        </Button>
      </View>
    );
  }
  handlePress() {
    Actions.locations({type: 'push'})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'nevis'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
