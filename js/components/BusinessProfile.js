import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button, Thumbnail, Footer} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'

import { buttonBgColor, bgColor, fontColorWhite, fontFamily } from '../css/variables'
import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

export default class BusinessProfile extends Component {

  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.alignmentFix}>
        <Content>
          <Grid>
              <Col style={{ width: 150, padding: 5 }}>
                <Thumbnail square size={80} source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                <List>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text style={{color: fontColorWhite}}>Roofing</Text>
                      <Text note>since 1997</Text>
                  </ListItem>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text style={{color: fontColorWhite}}>Roofing</Text>
                      <Text note>since 1997</Text>
                  </ListItem>
                  <ListItem>
                      <Thumbnail source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                      <Text style={{color: fontColorWhite}}>Roofing</Text>
                      <Text note>since 1997</Text>
                  </ListItem>
                </List>
              </Col>
              <Col style={{ width: 300, padding: 5 }}>
                <Text style={styles.helperText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Row style={styles.infoBar}>
                  <Col style={{width: 50, height: 40, backgroundColor: 'grey', justifyContent:'center', alignItems:'center'}} >
                    <Icon name='ios-cash' />
                  </Col>
                  <Col style={{width: 50, height: 40, backgroundColor: 'grey', justifyContent:'center', alignItems:'center'}} >
                    <Icon name='md-git-network' />
                  </Col>
                  <Col style={{width: 50, height: 40, backgroundColor: 'grey', justifyContent:'center', alignItems:'center'}} >
                    <Icon name='md-git-network' />
                  </Col>
                  <Col style={{width: 50, height: 40, backgroundColor: 'grey', justifyContent:'center', alignItems:'center'}} >
                    <Icon name='ios-star' />
                  </Col>

                </Row>
                <Row>
                  <Col style={{width: 200, marginLeft: 10}}>
                    <Button block style={styles.button2}>New Job</Button>
                    <Button block style={styles.button2}>Current Jobs</Button>
                    <Button block style={styles.button2}>History</Button>
                  </Col>
                </Row>
              </Col>
          </Grid>
        </Content>
        <Footer style={{backgroundColor: bgColor}}>
          <Button block style={styles.button}>
            Start A Conversation
          </Button>
        </Footer>
      </Container>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  alignmentFix: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    backgroundColor: buttonBgColor,
  },
  button2: {
    backgroundColor: '#FF681F',
    margin: 5,
    opacity: .5
  },
  helperText: {
    fontSize: 13,
    margin: 5,
    marginTop: 15,
    fontFamily: fontFamily,
    color: fontColorWhite,
    textAlign: 'justify'
  },
  helperText2: {
    fontSize: 10,
    margin: 5,
    opacity: .7,
    left: 55,
  },
  infoBar: {
    marginLeft: 10,
    marginTop: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  }
});
