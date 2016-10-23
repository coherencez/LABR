import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Button, Icon, Text } from 'native-base'

// Components
import App from './js/containers/App'
import Locations from './js/containers/Locations'
import Category from './js/containers/Category'
import Providers from './js/containers/Providers'


export default class LABR extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={styles.navbar} >
          <Scene key='app' component={App} initial={true} renderTitle={() => this.renderTitle('LABR')} />
          <Scene key='locations' component={Locations} renderTitle={() => this.renderTitle('Locations')}/>
          <Scene key='category' component={Category} renderTitle={() => this.renderTitle('Categories')} />
          <Scene key='providers' component={Providers} renderTitle={() => this.renderTitle('Providers')} />
        </Scene>
      </Router>
    )
  }
  renderTitle(title) {
    return (
      <View style={styles.title}>
        <Text style={{fontFamily: 'nevis', color: 'white', fontSize: 21, fontWeight: '800'}}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
  },
  navbar: {
    backgroundColor: '#4400FF',
    height: 60,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
})



AppRegistry.registerComponent('LABR', () => LABR);
