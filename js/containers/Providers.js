import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem, Badge, Icon } from 'native-base';


import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

import {
  navColor,
  bgColor,
  fontColorWhite,
  buttonBgColor,
  fontFamily
} from '../css/variables'


export default class Providers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      providers: [
        {name: 'Jane Doe', exp: 7, rate: '$25/hr'},
        {name: 'Jane Doe', exp: 7, rate: '$25/hr'},
        {name: 'Jane Doe', exp: 7, rate: '$25/hr'},
        {name: 'Jane Doe', exp: 7, rate: '$25/hr'},
        {name: 'Jane Doe', exp: 7, rate: '$25/hr'},
        {name: 'Jane Doe', exp: 7, rate: '$25/hr'},
        {name: 'Jane Doe', exp: 7, rate: '$25/hr'},
      ]
    }
  }
  render() {
    const menu = <SideNav />
    return (
        <SideMenu menu={menu}>
        <Container style={styles.container}>
          <Content>
          <Grid>
            <Col>
              {this.renderProviders().arr1}
            </Col>
            <Col>
              {this.renderProviders().arr2}
            </Col>
          </Grid>
          </Content>
        </Container>
        </SideMenu>
    );
  }

  handleProviderPress() {
    console.log('PROVIDER PRESS')
    Actions.businessprofile()
  }

  renderProviders() {
    const componentArray = this.state.providers.map((prov, i) =>
      <Card style={styles.card} key={i}>
        <CardItem style={{backgroundColor: buttonBgColor}} button onPress={this.handleProviderPress}>
          <Text style={styles.text}>{prov.name}</Text>
        </CardItem>
        <CardItem cardBody>
            <Badge info>{prov.exp}</Badge>
            <Text style={styles.listInfo}>Years Exp.</Text>
              <Text style={styles.listInfo}>{prov.rate}</Text>
        </CardItem>
      </Card>
    )

    const arr1 = componentArray.filter((v,i) => {
      if(i % 2 === 0) {
        return v
      }
    })
    const arr2 = componentArray.filter((v,i) => {
      if(i % 2 !== 0) {
        return v
      }
    })
    return { arr1, arr2 }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
    padding: 10,
  },
  card: {
    margin: 5,
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
  listInfo: {
    fontFamily: fontFamily,
    color: '#000',
    fontSize: 10,
  },
});
