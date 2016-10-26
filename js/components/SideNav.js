import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, View } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';


export default class SideNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: false
    }
  }
  componentWillMount() {
    this.userCheck()
  }
  componentDidMount() {
    this.userCheck()
  }
  render() {
    return (
      <Container>
        <Content>
            <List style={styles.alignmentFix}>
              {(() => {
                if(this.state.user){
                  return (
                    <ListItem iconLeft button onPress={() => this.handleLogout()}>
                      <Icon name='md-globe' />
                      <Text>Logout</Text>
                    </ListItem>
                  )
                } else {
                  return (
                    <View>
                    <ListItem iconLeft button onPress={this.handleSignUpPress}>
                      <Icon name='md-contact' />
                      <Text>Sign Up</Text>
                      <Text note>Note here</Text>
                    </ListItem>
                    <ListItem iconLeft button onPress={this.handleLoginPress}>
                      <Icon name='md-globe' />
                      <Text>Login</Text>
                    </ListItem>
                    </View>
                  )
                }
              })()}

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

  userCheck() {
    AsyncStorage.getItem('user')
      .then(res => JSON.parse(res))
      .then(data => {
        if(data) this.setState({ user: true })
      })
      .catch(console.error)
  }

  handleSignUpPress() {
    Actions.signup()
  }
  handleLoginPress() {
    Actions.login()
  }
  handleLogout() {
    AsyncStorage.removeItem('user')
    this.setState({ user: false })
    Actions.app({ type: 'reset' })
  }
  handleHistoryPress() {
    console.log('HISTORY PRESSED')
  }
  handleBusinessPress() {
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
