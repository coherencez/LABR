import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem, Badge, Icon } from 'native-base';

import ProviderCard from '../components/ProviderCard'

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


export default class Providers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      providers: []
    }
  }
  componentWillMount() {
    const API_ENDPOINT = `${endpointIP}/labr/api/getProviders`
    const requestObj = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        console.log('PROVIDERS', data)
      })
      .catch(console.error)
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

  handleProviderPress(data) {
    console.log('PROVIDER PRESS', data)
    Actions.businessprofile()
  }

  renderProviders() {
    // main array of card elements
    const componentArray = this.state.providers.map((prov, i) =>
      <ProviderCard provider={prov} key={i} handlePress={this.handleProviderPress.bind(this)}/>
    )

    // to render cards in 2 separate columns
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
    color: '#000',
    fontSize: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  spacing: {
    marginLeft: 7,
    marginRight: 7,
  },
});
