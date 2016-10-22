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
  View
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Button, Container, Icon, Content } from 'native-base'

// Components
import App from './js/containers/App'
import Locations from './js/containers/Locations'
import SideNav from './js/components/SideNav'


export default class LABR extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='app' component={App} title='LABR' renderRightButton={this.rightButton}/>
          <Scene key='locations' component={Locations} title='Locations' />
          <Scene key='sidenav' component={SideNav} type='modal'  />
        </Scene>
      </Router>
    )
  }

  handlePress() {
    Actions.locations()
  }

  showSideNav() {
    Actions.sidenav({type: 'modal'})
  }

  rightButton() {
    return (
      <View>
        <Button style={styles.button} onPress={Actions.sidenav}>
          <Icon name='ios-menu' style={{fontSize: 20, color: 'purple'}}/>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    position: 'relative',
    bottom: 8,
  },
})



AppRegistry.registerComponent('LABR', () => LABR);
