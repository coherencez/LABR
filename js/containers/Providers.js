import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
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
  render() {
    const menu = <SideNav />
    return (
        <SideMenu menu={menu}>
        <Container style={styles.container}>
          <Content>
          <Grid>
            <Col>
              <List>
                <ListItem>
                  <Card style={styles.card}>
                    <CardItem style={{backgroundColor: buttonBgColor}}>
                      <Text style={styles.text}>John Doe</Text>
                    </CardItem>
                    <CardItem cardBody button onPress={this.handleProviderPress}>
                    <List>
                      <ListItem>
                        <Badge info>7</Badge>
                        <Text style={styles.listInfo}>Years Exp.</Text>
                      </ListItem>
                      <ListItem>
                          <Text style={styles.listInfo}>$25 per hour</Text>
                      </ListItem>
                    </List>
                    </CardItem>
                  </Card>
                </ListItem>
              </List>
            </Col>
            <Col>
              <List>
                <ListItem>
                  <Card style={styles.card}>
                    <CardItem style={{backgroundColor: buttonBgColor}}>
                      <Text style={styles.text}>John Doe</Text>
                    </CardItem>
                    <CardItem cardBody>
                    <List>
                      <ListItem>
                        <Badge info>7</Badge>
                        <Text style={styles.listInfo}>Years Exp.</Text>
                      </ListItem>
                      <ListItem>
                          <Text style={styles.listInfo}>$25 per hour</Text>
                      </ListItem>
                    </List>
                    </CardItem>
                  </Card>
                </ListItem>
              </List>
            </Col>
          </Grid>
          </Content>
        </Container>
        </SideMenu>
    );
  }

  handleProviderPress() {
    console.log('PROVIDER PRESS')
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
  listInfo: {
    fontFamily: fontFamily,
    color: '#000',
    fontSize: 10,
  },
});
