import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button, Header } from 'native-base';

import { buttonBgColor } from '../css/variables'
export default class SignUp extends Component {
  render() {
    return (
      <Container style={styles.alignmentFix}>
        <Content style={{width: 300}}>
            <Text note style={styles.helperText}>Basic Info</Text>
              <InputGroup iconLeft disabled>
                  <Icon name='ios-person' />
                  <Input inlineLabel label='NAME' placeholder='NAME' disabled={true} />
              </InputGroup>
              <InputGroup >
                  <Input placeholder='Jane' />
              </InputGroup>
              <InputGroup >
                  <Input placeholder='Doe' />
              </InputGroup>
              <InputGroup >
                  <Icon name='md-call' />
                  <Input inlineLabel label='PHONE' placeholder='CELL' />
              </InputGroup>
              <InputGroup>
                  <Icon name='ios-mail' />
                  <Input placeholder='EMAIL*' />
              </InputGroup>
              <InputGroup>
                  <Icon name='ios-unlock' />
                  <Input placeholder='PASSWORD*' secureTextEntry={true}/>
              </InputGroup>
            <Text note style={styles.helperText2}>*These will be used to login</Text>
          <Button block success style={styles.button}>Submit</Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    top: 20,
    backgroundColor: buttonBgColor,
  },
  helperText: {
    fontSize: 13,
    margin: 5,
  },
  helperText2: {
    fontSize: 10,
    margin: 5,
    opacity: .7,
    left: 55,
  },
});
