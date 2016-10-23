import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button } from 'native-base';


export default class SignUp extends Component {
  render() {
    return (
      <Container style={styles.alignmentFix}>
        <Content>
        <List style={{ width: 250}}>
            <ListItem>
                <InputGroup>
                    <Icon name='ios-person' />
                    <Input placeholder='EMAIL' />
                </InputGroup>
            </ListItem>

            <ListItem>
                <InputGroup>
                    <Icon name='ios-unlock' />
                    <Input placeholder='PASSWORD' secureTextEntry={true}/>
                </InputGroup>
            </ListItem>

            <ListItem>
                <InputGroup >
                    <Input stackedLabel label='NAME' placeholder='John Doe' />
                </InputGroup>
            </ListItem>
            <ListItem>
                <InputGroup >
                    <Icon name='md-call' />
                    <Input inlineLabel label='PHONE' placeholder='Phone' />
                </InputGroup>
            </ListItem>
            <Button success style={styles.button}>Submit</Button>
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
