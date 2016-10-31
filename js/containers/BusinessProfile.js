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
      isProvider: false,
      errorMessage: null,
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
          {(() => {
            if(this.state.errorMessage) {
              return (
                <View>
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                </View>
              )
            }
          })()}
          <Grid style={{ marginTop: 10}}>
              <Col style={{ width: 115, padding: 5, justifyContent: 'center' }}>
                <Text style={{fontSize: 20, fontWeight: '700', fontFamily: 'nevis', color: '#fff'}}>
                  Info:
                </Text>
                <List
                  style={{ marginTop: 15, height: 100}}
                  dataArray={this.props.provider.skills}
                  renderRow={(skill) => (
                      <ListItem>
                          <Text style={{color: fontColorWhite}}>{skill}</Text>
                      </ListItem>
                  )}>

                </List>
                <Row >
                <View style={styles.infoBar}>
                  <View style={{width: 50, height: 60 }} >
                    <Icon name='ios-cash' style={styles.iconStyles}/>
                    <Text style={{color: fontColorWhite, fontSize: 10}}>${this.props.provider.rate}/hr</Text>
                  </View>
                  <View style={{width: 50, height: 60 }} >
                    <Icon name='md-git-network' style={styles.iconStyles}/>
                    <Text style={{color: fontColorWhite, fontSize: 10}}>{this.props.provider.experience} yrs.</Text>
                  </View>
                  <View style={{width: 50, height: 60, right: 77, top: 10 }} >
                    <Text>{'\n'}</Text>
                    <Icon name='ios-star' style={styles.iconStyles}/>
                    <Text style={{color: fontColorWhite, fontSize: 10}}>4/5</Text>
                  </View>
                </View>
                </Row>
              </Col>
              <Col style={{ width: 200, padding: 5, flex:1, justifyContent: 'center' }}>
                <Text style={{fontSize: 20, fontWeight: '700', fontFamily: 'nevis', color: '#fff'}}>{this.props.provider.name}</Text>
                <Text style={styles.helperText}>
                  {this.props.provider.bio}
                </Text>
                <Thumbnail square size={150} source={{uri: 'http://www.freeiconspng.com/uploads/work-icon-0.png'}} />
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
                <Button block style={styles.button} onPress={() => this.handleNewJobPress(this.props.provider, this.props.category)}>
                  Hire Me!
                </Button>
              )
            }
          })()}
        </Footer>

      </Container>
      </SideMenu>
    )
  }

  handleNewJobPress(provider, category) {
    AsyncStorage.getItem('user')
    .then(res => JSON.parse(res))
    .then((user) => {
      if(user) {
        Actions.startconvo({type: 'push', provider, user, category})
      } else {
        this.setState({
          errorMessage: 'Please sign up or login to access that feature!'
        })
      }
    })
    .catch(console.error)
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
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: '700',
    margin: 10,
  },
});
