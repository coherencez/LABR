import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem } from 'native-base';

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
  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.alignmentFix, styles.container}>
        <Content>
          <List>
            <ListItem>
              <Card style={styles.card}>
                <CardItem style={{backgroundColor: buttonBgColor}}>
                  <Text style={styles.text}>Nashville</Text>
                </CardItem>
                <CardItem cardBody button onPress={this.handlePress}>
                  <Image source={{uri: 'https://c2.staticflickr.com/6/5509/12298744374_9441f9cbeb_b.jpg'}} />
                  <Button transparent textStyle={{color: '#87838B'}} >
                      389 Providers Online
                  </Button>
                </CardItem>
              </Card>
            </ListItem>
            <ListItem>
              <Card style={styles.card}>
                <CardItem style={{backgroundColor: buttonBgColor}}>
                  <Text style={styles.text}>Las Vegas</Text>
                </CardItem>
                <CardItem cardBody button onPress={this.handlePress}>
                  <Image source={{uri: 'https://www.firstoptiononline.com/wp-content/uploads/2014/10/las-vegas-skyline.jpg'}} />
                  <Button transparent textStyle={{color: '#87838B'}}>
                      452 Providers Online
                  </Button>
                </CardItem>
              </Card>
            </ListItem>
          </List>
        </Content>
      </Container>
      </SideMenu>
    );
  }

  handlePress() {
    console.log('HANDLE NASHVILLE')
    Actions.category({type: 'push'})
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  text: {
    fontFamily: fontFamily,
    color: fontColorWhite,
  },
});
