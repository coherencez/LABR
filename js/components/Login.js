import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import {
  Container, Content,
  Text, Icon, InputGroup,
  Input, Button } from 'native-base';

import { buttonBgColor, bgColor, endpointIP } from '../css/variables'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content style={{ width: 300 }}>
          {(() => {
            if(this.state.errorMessage) {
              return (
                <View>
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                </View>
              )
            }
          })()}
          <InputGroup>
            <Icon name='ios-mail' />
            <Input
              placeholder='EMAIL'
              autoCapitalize='none'
              onChangeText={(txt) => this.emailChanged(txt)}
              keyboardType='email-address' />
          </InputGroup>
          <InputGroup>
            <Icon name='ios-unlock' />
            <Input
              placeholder='PASSWORD'
              secureTextEntry={true}
              onChangeText={(txt) => this.passwordChanged(txt)}
              autoCapitalize="none"/>
          </InputGroup>
          <Button block style={styles.button} onPress={() => this.handleLogin()}>Login</Button>
        </Content>
      </Container>
    )
  }

  emailChanged(txt) {
    this.setState({ email: txt })
  }
  passwordChanged(txt) {
    this.setState({ password: txt })
  }
  handleLogin() {
    const API_ENDPOINT = `${endpointIP}/labr/api/login`
    const requestObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }

    fetch(API_ENDPOINT, requestObj)
      .then(res => res.json())
      .then(({ pwMatch, msg, user }) => {
        if(pwMatch) {
          AsyncStorage.setItem('user', JSON.stringify(user))
          Actions.locations({ type: 'reset' })
        } else {
          this.setState({ errorMessage: msg})
        }
      })
      .catch(console.error)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 64,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    top: 20,
    backgroundColor: buttonBgColor,
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: '700',
    margin: 10,
  },
});
