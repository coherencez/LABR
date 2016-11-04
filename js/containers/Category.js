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

export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        'Car/Auto', 'Home Improvement', 'Lawn/Landscaping', 'Electrical', 'Plumbing', 'All'
      ],
      icons: [
        'ios-car', 'ios-home', 'ios-analytics', 'ios-flash', 'ios-body', 'ios-more'
      ]
    }
  }
  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.container}>
        <Content >
          <List >
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
      <View style={styles.category}>
        <Icon name={this.state.icons[i]} style={{fontSize: 30, color: fontColorWhite, marginLeft: 5 }}/>
        <Text style={styles.font}>{category}</Text>
      </View>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
    flex: 1,
    flexDirection: 'column',
  },
  spacing: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  font: {
    fontFamily: fontFamily,
    fontSize: 20,
    fontWeight: '700',
    color: fontColorWhite,
    marginRight: 5,
  },
  category: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderRadius: 5,
    paddingLeft: 20,
    backgroundColor: navColor,
  },
});
