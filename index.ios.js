/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Button, Icon } from 'native-base'

// Components
import App from './js/containers/App'
import Locations from './js/containers/Locations'


export default class LABR extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='app' component={App} initial={true} title='Welcome' />
          <Scene key='locations' component={Locations} title='Locations' />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
  },
})



AppRegistry.registerComponent('LABR', () => LABR);
