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

import {
  navColor,
  bgColor,
  fontColorWhite,
  buttonBgColor,
  fontFamily
} from '../css/variables'

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

            <Button block onPress={this.handlePress} style={styles.button}>
              <Text style={styles.text}>Currently Available Locations</Text>
            </Button>
          </Content>

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
    backgroundColor: bgColor,
    padding: 10,
    marginTop: 60,
  },
  welcome: {
    fontSize: 21,
    textAlign: 'center',
    fontFamily: fontFamily
  },
  instructions: {
    textAlign: 'center',
    color: fontColorWhite,
    fontSize: 10,
    fontFamily: fontFamily
  },
  button: {
    backgroundColor: buttonBgColor,
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    shadowOffset: {
      height: 2,
      width: 0
    },
  },
  text: {
    fontFamily,
    color: fontColorWhite
  }
});
