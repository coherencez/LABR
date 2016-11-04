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
              This is LABR. Your one stop shop to getting everyday tasks completed on-demand.
              Find providers that are online, and available in your area today! Just press the
              locations button below to get started viewing providers. Or you can swipe right
              to open the menu and signup for an account. After that, think about becoming a
              provider yourself!
            </Text>


          </Content>
          <Footer style={{backgroundColor: bgColor}}>
            <Button block onPress={this.handlePress} style={styles.button}>
              <Text style={styles.text}>Currently Available Locations</Text>
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
    fontSize: 15,
    fontFamily: fontFamily,
    marginTop: 25,
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
