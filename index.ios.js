import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Button, Icon, Text } from 'native-base'
import { navColor } from './js/css/variables'
// Components
import App from './js/containers/App'
import Locations from './js/containers/Locations'
import Category from './js/containers/Category'
import Providers from './js/containers/Providers'
import SignUp from './js/components/SignUp'
import Login from './js/components/Login'


export default class LABR extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={styles.navbar} >
          <Scene key='app' component={App} initial={true} renderTitle={() => this.renderTitle('labr')} />
          <Scene key='locations' component={Locations} renderTitle={() => this.renderTitle('locations')}/>
          <Scene key='category' component={Category} renderTitle={() => this.renderTitle('categories')} />
          <Scene key='providers' component={Providers} renderTitle={() => this.renderTitle('providers')} />
          <Scene key='signup' component={SignUp} renderTitle={() => this.renderTitle('signup')} />
          <Scene key='login' component={Login} renderTitle={() => this.renderTitle('login')} />
        </Scene>
      </Router>
    )
  }
  renderTitle(title) {
    const upperCaseTitle = title.toUpperCase()
    return (
      <View style={styles.title}>
        <Text style={{fontFamily: 'nevis', color: 'white', fontSize: 21, fontWeight: '800'}}>{upperCaseTitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: navColor,
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
