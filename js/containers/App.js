import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Button, Text, Container, Content, Header, Footer } from 'native-base'

import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

export default class App extends Component {
  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
        <Container style={styles.container}>
          <Header>
            <Text style={styles.welcome}>
              Welcome
            </Text>
          </Header>
          <Content>
            <Text style={styles.instructions}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

          </Content>
          <Footer>
            <Button block onPress={this.handlePress} style={styles.button}>
              Currently Available Locations
            </Button>
          </Footer>

        </Container>
      </SideMenu>
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
    padding: 10,
    marginTop: 60,
  },
  welcome: {
    fontSize: 21,
    textAlign: 'center',
    fontFamily: 'nevis'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 10,
    fontFamily: 'nevis'
  },
  button: {
    backgroundColor: '#4400FF',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
});
