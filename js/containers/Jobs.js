import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem, Icon } from 'native-base';

import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

import {
  navColor,
  bgColor,
  fontColorWhite,
  buttonBgColor,
  fontFamily
} from '../css/variables'

export default class Locations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: ['Nashville', 'Las Vegas']
    }
  }
  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.alignmentFix, styles.container}>
        <Content>
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
});
