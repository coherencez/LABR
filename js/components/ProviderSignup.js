import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button, Header, CheckBox, Picker } from 'native-base';

const Item = Picker.Item

import { buttonBgColor } from '../css/variables'
export default class ProviderSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
      this.setState({
          selected1 : value
      });
    }

  render() {
    return (
      <Container style={styles.alignmentFix}>
        <Content>
        <Text>Choose a category</Text>
        <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}>
            <Item label="Jack Of All Trades" value="key0" />
            <Item label="Car/Auto" value="key1" />
            <Item label="Home Improvement" value="key2" />
            <Item label="Lawn Care" value="key3" />
            <Item label="Electrical" value="key4" />
            <Item label="Plumbing" value="key5" />
        </Picker>
          <List style={{ width: 250 }}>
            <ListItem>
                <InputGroup iconLeft>
                    <Icon name='ios-cog' />
                    <Input inlineLabel label='SKILLS' placeholder='SKILLS' />
                </InputGroup>
            </ListItem>
            <ListItem>
                <InputGroup iconLeft>
                    <Icon name='ios-cog' />
                    <Input inlineLabel label='YEARS EXP' placeholder='YEARS EXP' />
                </InputGroup>
            </ListItem>
            <ListItem>
                <InputGroup iconLeft>
                    <Icon name='ios-cash' />
                    <Input inlineLabel label='HOURLY RATE' placeholder='HOURLY RATE' />
                </InputGroup>
            </ListItem>
            <ListItem>
                <InputGroup >
                    <Icon name='md-attach' />
                    <Input  inlineLabel label='BIO' placeholder='BIO' />
                </InputGroup>
            </ListItem>
          </List>
          <Button success style={styles.button}>Submit</Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 80,
    flex: 1,
    alignItems: 'center',
  },
  hidden: {
    opacity: 0,
  },
  button: {
    left: 100,
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
