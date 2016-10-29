import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button } from 'native-base';

import { buttonBgColor } from '../css/variables'
export default class StartConvo extends Component {
  render() {
    const { props } = this
    return (
      <Container style={styles.alignmentFix}>
        <Content>
          <Text>To: {props.provider.name}</Text>
          <Text>From: {props.user.firstName} {props.user.lastName}</Text>
          <Text>Category: {props.category}</Text>
            <InputGroup >
              <Input
                placeholder='A SHORT DESCRIPTION OF THE WORK YOU NEED'
                multiline={true}
                autoCapitalize='none'
                style={{ height: 200, marginTop: 15 }}/>
            </InputGroup>
          <Button block style={styles.button} onPress={() => this.handleJobRequestPress(props.user, props.provider)}>Send Request For Work</Button>
        </Content>
      </Container>
    )
  }

  handleJobRequestPress(user, prov) {
    const API_ENDPOINT = `${endpointIP}/labr/api/newjob`
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

  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    backgroundColor: buttonBgColor,
    marginTop: 10,
  },
  textEdit: {
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
});
