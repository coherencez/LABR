import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';


export default class SideNav extends Component {
  render() {
    return (
      <Container>
        <Content>
            <List style={styles.alignmentFix}>
              <ListItem iconLeft button onPress={this.handleSignUpPress}>
                <Icon name='md-contact' />
                <Text>Sign Up</Text>
                <Text note>Note here</Text>
              </ListItem>
              <ListItem iconLeft button onPress={this.handleLoginPress}>
                <Icon name='md-globe' />
                <Text>Login</Text>
              </ListItem>
              <ListItem iconLeft button onPress={this.handleHistoryPress}>
                  <Icon name='md-archive' />
                  <Text>History</Text>
              </ListItem>
              <ListItem iconLeft iconRight button onPress={this.handleBusinessPress}>
                  <Icon name='ios-briefcase' />
                  <Text>Business Account</Text>
                  <Icon name='ios-mic-outline' style={styles.hidden}/>
              </ListItem>
              <ListItem iconLeft button onPress={this.handleMessagesPress}>
                  <Icon name='md-text' />
                  <Text>Messages</Text>
                  <Badge>3</Badge>
              </ListItem>
              <ListItem iconLeft button onPress={this.handleSettingsPress}>
                  <Icon name='md-aperture' />
                  <Text>Settings</Text>
              </ListItem>
            </List>
        </Content>
      </Container>
    )
  }
  handleSignUpPress() {
    console.log('SIGNUP PRESSED')
    Actions.signup()
  }
  handleLoginPress() {
    console.log('LOGIN PRESSED')
    Actions.login()
  }
  handleHistoryPress() {
    console.log('HISTORY PRESSED')
  }
  handleBusinessPress() {
    console.log('BA PRESSED')
    Actions.providersignup()
  }
  handleMessagesPress() {
    console.log('MESSAGES PRESSED')
  }
  handleSettingsPress() {
    console.log('SETTINGS PRESSED')
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60,
  },
  hidden: {
    opacity: 0,
  }
});
