import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button } from 'native-base';

import { buttonBgColor } from '../css/variables'
export default class StartConvo extends Component {
  render() {
    return (
      <Container style={styles.alignmentFix}>
        <Content>
          <Text>To</Text>
          <Text>From</Text>
            <InputGroup >
              <Input placeholder='MESSAGE' multiline={true} style={{ height: 200, marginTop: 15 }}/>
            </InputGroup>
          <Button block style={styles.button}>Send Message</Button>
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
