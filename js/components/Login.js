import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button } from 'native-base';


export default class Login extends Component {
  render() {
    return (
      <Container style={styles.alignmentFix}>
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
            <Button success style={styles.button}>Login</Button>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    left: 100,
    top: 20,
  },
});
