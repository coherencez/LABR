import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button, Header, Footer, CheckBox, Picker } from 'native-base';

const Item = Picker.Item

import { buttonBgColor, button2BgColor } from '../css/variables'
export default class ProviderSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
            selectedItem: undefined,
            selected1: 'car',
            results: {
                items: []
            }
        }
    }

  render() {
    console.log(this.state)
    return (
      <Container style={styles.container}>
        <Content style={{ width: 300 }}>
          <Text>Category:</Text>
          <Text>Choose one or multiple</Text>
          <Picker
              style={{backgroundColor: button2BgColor, width: 300, flex:1, alignItems: 'center', justifyContent: 'center' }}
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="Car/Auto" value="car" />
              <Item label="Home Improvement" value="home" />
              <Item label="Lawn Care" value="lawn" />
              <Item label="Electrical" value="electrical" />
              <Item label="Plumbing" value="plumbing" />
          </Picker>
          <InputGroup iconLeft>
              <Icon name='ios-cog' />
              <Input inlineLabel label='SKILLS' placeholder='SKILLS' />
          </InputGroup>
          <InputGroup iconLeft>
              <Icon name='ios-cog' />
              <Input inlineLabel label='YEARS EXP' placeholder='YEARS EXP' />
          </InputGroup>
          <InputGroup iconLeft>
              <Icon name='ios-cash' />
              <Input inlineLabel label='HOURLY RATE' placeholder='HOURLY RATE' />
          </InputGroup>
          <InputGroup >
              <Icon name='md-attach' />
              <Input placeholder='BIO' multiline={true} style={{ height: 100, marginTop: 15 }}/>
          </InputGroup>
          <View>
            <Text>Selected Categories:</Text>
            {this.state.results.items.map((skill, i) =>
              <Button key={i} style={{ height: 35 }} onPress={() => this.removeCategory(i)}> {skill} X</Button>
            )}
          </View>
        </Content>
        <Footer>
          <Button block style={styles.button}>Submit</Button>
        </Footer>
      </Container>
    )
  }
  onValueChange (value: string) {
    console.log('VLAU CHANGE', value)
    this.setState({
        selected1 : value,
        results: {
          items: this.state.results.items.concat([value])
        }
    })
  }

  removeCategory(index) {
    const itemToDelete = this.state.results.items[index]
    const newItemStateArray = this.state.results.items.filter(el => el !== itemToDelete)
    this.setState({
      results: {
        items: newItemStateArray
      }
    })
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
