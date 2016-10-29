import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem, Icon } from 'native-base';

import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

import {
  navColor,
  bgColor,
  fontColorWhite,
  buttonBgColor,
  fontFamily,
  endpointIP
} from '../css/variables'

export default class Jobs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      statusMessage: null,
    }

  }

  componentWillMount() {
    AsyncStorage.getItem('user')
    .then(res => JSON.parse(res))
    .then(user => {
      const isProvider = user.isProvider
      let id = null
      if(user) {
        switch(user.isProvider) {
          case true:
            id = user.provider._id
            break
          case false:
            id = user.id
            break
        }
        const API_ENDPOINT = `${endpointIP}/labr/api/jobs`
        const requestObj = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id,
            isProvider
          })
        }
        return fetch(API_ENDPOINT, requestObj)
      } else {
        this.setState({
          statusMessage: `Uh oh! We didn't find any jobs for you. Please login or signup to get started!`
        })
      }

    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        jobs: this.state.jobs.concat(data.jobs)
      })
    })
    .catch(console.error)
  }

  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.alignmentFix, styles.container}>
        <Content>
          {(() => {
            if(this.state.statusMessage) {
              return (
                <View>
                  <Text style={styles.error}>{this.state.statusMessage}</Text>
                </View>
              )
            }
          })()}
          <Card style={styles.card}>
            <CardItem style={styles.cardTitle}>
              <Text style={styles.text}>Home Improvement</Text>
            </CardItem>
            <CardItem cardBody style={{ borderRadius: 5, flexDirection: 'row'}}>
              <View style={{ padding: 5 }}>
                <Thumbnail square source={{uri: 'https://c2.staticflickr.com/6/5509/12298744374_9441f9cbeb_b.jpg'}} size={75}/>
                <Text note style={{color: '#87838B', fontSize: 10}}>Date Created</Text>
                <Text note style={{color: '#87838B', fontSize: 10}}>Time Start</Text>
                <Text note style={{color: '#87838B', fontSize: 10}}>Time End</Text>
              </View>
              <View style={{flex: 1, flexDirection:'column'}}>
                <Text>Description:</Text>
                <Text note style={{color: '#87838B', fontSize: 13, padding: 10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Button transparent textStyle={{color: '#87838B'}} >
                    Send Message
                </Button>
              </View>
            </CardItem>
            <CardItem cardBody style={{ borderRadius: 5, flexDirection: 'row', flex: 1}}>
              <Button textStyle={{color: '#87838B'}} >
                  <Icon name='ios-contact'/>
              </Button>
              <Button textStyle={{color: '#87838B'}} >
                  <Icon name='md-close'/>
              </Button>
              <Button textStyle={{color: '#87838B'}} >
                  <Icon name='md-checkbox'/>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
  },
  card: {
    margin: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  cardTitle: {
    backgroundColor: buttonBgColor,
    borderRadius: 5,
  },
  text: {
    fontFamily: fontFamily,
    color: fontColorWhite,
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: '700',
    margin: 10,
  },
});
