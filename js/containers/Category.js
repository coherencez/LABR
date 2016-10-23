import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem } from 'native-base';

import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

export default class Category extends Component {
  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.container}>
        <Content>
          <List>
            <ListItem  button onPress={this.handleNashville}>
                <Thumbnail square size={80} source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                <Text style={styles.font}>Home Maintenance</Text>
            </ListItem>
            <ListItem >
                <Thumbnail square size={80} source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                <Text style={styles.font}>Lawn Care</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
      </SideMenu>
    );
  }

  handleNashville() {
    console.log('HANDLE NASHVILLE')
    Actions.providers({type: 'push'})
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 60,
  },
  spacing: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  font: {
    fontFamily: 'nevis',
    fontSize: 20,
    fontWeight: '800',
    top: 25,
  },
});
