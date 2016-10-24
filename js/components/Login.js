import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button } from 'native-base';

import { buttonBgColor, bgColor } from '../css/variables'
export default class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <List style={{ width: 250}}>
            <ListItem>
                <InputGroup>
                    <Icon name='ios-mail' />
                    <Input placeholder='EMAIL' />
                </InputGroup>
            </ListItem>
            <ListItem>
                <InputGroup>
                    <Icon name='ios-unlock' />
                    <Input placeholder='PASSWORD' secureTextEntry={true}/>
                </InputGroup>
            </ListItem>
            <Button block style={styles.button}>Login</Button>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 100,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    top: 20,
    backgroundColor: buttonBgColor,
  },
});
