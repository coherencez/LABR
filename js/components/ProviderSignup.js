import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
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
          categories: [],
        },
        skills: '',
        experience: '',
        rate: '',
        bio: '',
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
              <Input
                inlineLabel
                label='SKILLS'
                placeholder='SKILLS'
                onChangeText={(txt) => this.onSkillsChange(txt)}
                autoCapitalize='none'/>
          </InputGroup>
          <InputGroup iconLeft>
              <Icon name='ios-cog' />
              <Input
                inlineLabel
                label='YEARS EXP'
                placeholder='YEARS EXP'
                onChangeText={(txt) => this.onExpChange(txt)}
                keyboardType='number-pad'
                autoCapitalize='none'/>
          </InputGroup>
          <InputGroup iconLeft>
              <Icon name='ios-cash' />
              <Input
                inlineLabel
                label='HOURLY RATE'
                placeholder='HOURLY RATE'
                onChangeText={(txt) => this.onRateChange(txt)}
                keyboardType='number-pad'
                autoCapitalize='none'/>
          </InputGroup>
          <InputGroup >
              <Icon name='md-attach' />
              <Input
                placeholder='BIO'
                multiline={true}
                style={{ height: 100, marginTop: 15 }}
                onChangeText={(txt) => this.onBioChange(txt)}
                autoCapitalize='none'/>
          </InputGroup>
          <View>
            <Text>Selected Categories:</Text>
            {this.state.results.categories.map((skill, i) =>
              <Button key={i} style={{ height: 35 }} onPress={() => this.removeCategory(i)}> {skill} X</Button>
            )}
          </View>
        </Content>
        <Footer>
          <Button block style={styles.button} onPress={() => this.handleProviderSignup()}>Submit</Button>
        </Footer>
      </Container>
    )
  }
  onValueChange (value: string) {
    console.log('VLAU CHANGE', value)
    this.setState({
        selected1 : value,
        results: {
          categories: this.state.results.categories.concat([value])
        }
    })
  }

  onSkillsChange(txt) {
    this.setState({
      skills: txt
    })
  }
  onExpChange(txt) {
    this.setState({
      experience: txt
    })
  }
  onRateChange(txt) {
    this.setState({
      rate: txt
    })
  }
  onBioChange(txt) {
    this.setState({
      bio: txt
    })
  }

  removeCategory(index) {
    const itemToDelete = this.state.results.categories[index]
    const newItemStateArray = this.state.results.categories.filter(el => el !== itemToDelete)
    this.setState({
      results: {
        categories: newItemStateArray
      }
    })
  }

  handleProviderSignup() {
    AsyncStorage.getItem('user')
    .then(res => JSON.parse(res))
    .then(({ id }) => {
      const API_ENDPOINT = 'http://192.168.1.69:3000/labr/api/newprovider'
      const requestObj = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          skills: this.state.skills.split(' '),
          experience: this.state.experience,
          rate: this.state.rate,
          bio: this.state.bio,
          categories: this.state.results.categories,
          userId: id
        })
      }
      fetch(API_ENDPOINT, requestObj)
        .then(res => res.json())
        .then(data => {
          if(data.status === 200) {
            Actions.businessprofile({type: 'push'})
          }
        })
        .catch(console.error)
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
