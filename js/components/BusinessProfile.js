import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, List, ListItem, Icon, Badge, InputGroup, Input, Button, Thumbnail, Footer, Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'

import { buttonBgColor, bgColor, fontColorWhite, fontFamily, button2BgColor, endpointIP } from '../css/variables'
import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'

export default class BusinessProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isProvider: false
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('user')
    .then(res => JSON.parse(res))
    .then((user) => {
      if(user) {
        this.setState({
          isProvider: user.isProvider
        })
      }
    })
    .catch(console.error)
  }

  render() {
    console.log(this.props)
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.alignmentFix}>
        <Content>
          <Grid>
              <Col style={{ width: 115, padding: 5, justifyContent: 'center' }}>
                <Thumbnail square size={80} source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
                <List>
                  <ListItem>
                      <Text style={{color: fontColorWhite}}>Roofing</Text>
                  </ListItem>
                  <ListItem>
                      <Text style={{color: fontColorWhite}}>Roofing</Text>
                  </ListItem>
                  <ListItem>
                      <Text style={{color: fontColorWhite}}>Roofing</Text>
                  </ListItem>
                </List>
                <Row >
                <View style={styles.infoBar}>
                  <View style={{width: 50, height: 60 }} >
                    <Icon name='ios-cash' style={styles.iconStyles}/>
                    <Text style={{color: fontColorWhite, fontSize: 10}}>25/hr</Text>
                  </View>
                  <View style={{width: 50, height: 60 }} >
                    <Icon name='md-git-network' style={styles.iconStyles}/>
                    <Text style={{color: fontColorWhite, fontSize: 10}}>35 yrs.</Text>
                  </View>
                  <View style={{width: 50, height: 60, right: 77, top: 10 }} >
                    <Text>{'\n'}</Text>
                    <Icon name='ios-star' style={styles.iconStyles}/>
                    <Text style={{color: fontColorWhite, fontSize: 10}}>4/5</Text>
                  </View>
                </View>
                </Row>
              </Col>
              <Col style={{ width: 200, padding: 5 }}>
                <Text style={styles.helperText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

              </Col>
          </Grid>
        </Content>

        <Footer style={{backgroundColor: bgColor}}>
          {(() => {
            if(this.state.isProvider) {
              return (
                <View style={{ flex:1, flexDirection: 'row' }}>
                  <Button block style={styles.button2}>New Jobs</Button>
                  <Button block style={styles.button2}>Current Jobs</Button>
                  <Button block style={styles.button2}>History</Button>
                </View>
              )
            } else {
              return (
                <Button block style={styles.button} onPress={Actions.startconvo}>
                  Start A Conversation
                </Button>
              )
            }
          })()}
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
    justifyContent: 'center',
    backgroundColor: bgColor,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    backgroundColor: buttonBgColor,
    margin: 5,
  },
  button2: {
    backgroundColor: button2BgColor,
    margin: 5,
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
    marginTop: 15,
    flex:1,
    flexDirection: 'row',
    padding: 20,
  },
  iconStyles: {
    color: '#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  }
});
