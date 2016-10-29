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

export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        'Car/Auto', 'Home Improvement', 'Lawn/Landscaping', 'Electrical', 'Plumbing', 'All'
      ]
    }
  }
  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.container}>
        <Content>
          <List>
            {this.renderCategories()}
          </List>
        </Content>
      </Container>
      </SideMenu>
    );
  }

  handleCatgoryPress(category) {
    Actions.providers({type: 'push', category})
  }

  renderCategories() {
    return this.state.categories.map((category, i) =>
      <ListItem button key={i} name={category} onPress={() => this.handleCatgoryPress(category)}>
          <Thumbnail square size={80} source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
          <Text style={styles.font}>{category}</Text>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
  },
  spacing: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  font: {
    fontFamily: fontFamily,
    fontSize: 20,
    fontWeight: '800',
    top: 25,
    color: fontColorWhite
  },
});
