import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem, Icon } from 'native-base';

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

export default class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: false
    }
  }

  render() {
    const { props : {
      job,
      isProvider,
      handleAcceptPress,
      handleDeclinePress,
      handleCompletePress, } } = this
  console.log('JOB',job)
    return (
      <Card style={styles.card}>
        <CardItem cardBody style={{ borderRadius: 5, flexDirection: 'row' }}>
          <View style={{ padding: 5,  width: 75 }}>
            <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
              <Text note style={{color: '#000', fontSize: 10}}>Created:</Text>
              <Text note style={{color: '#87838B', fontSize: 7}}>{job.createdDate.split(' ').splice(0,4).join(' ')}</Text>
              <Text note style={{color: '#000', fontSize: 10}}>Started:</Text>
              <Text note style={{color: '#87838B', fontSize: 7}}>{job.startDate}</Text>
              <Text note style={{color: '#000', fontSize: 10}}>Completed:</Text>
              <Text note style={{color: '#87838B', fontSize: 7}}>{job.endDate}</Text>
            </View>
            <Thumbnail
              square
              button
              source={{uri: 'http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Google-Maps-icon.png'}}
              size={50}
              style={{alignItems: 'flex-end'}}/>
          </View>
          {(() => {
            if(this.state.contact) {
              if(isProvider) {
                return (
                    <View style={{flex: 1, flexDirection:'column'}}>
                      <CardItem style={styles.cardTitle}>
                        <Text style={styles.text}>Contact Info:</Text>
                      </CardItem>
                      <Content style={{height: 75}}>
                        <Text note style={{color: '#000', fontSize: 13, padding: 5}}>{job.userContact.firstName} {job.userContact.lastName}</Text>
                        <Text note style={{color: '#000', fontSize: 13, padding: 5}}>{job.userContact.email}</Text>
                        <Text note style={{color: '#000', fontSize: 13, padding: 5}}>{job.userContact.cellPhone}</Text>
                      </Content>
                      <Button transparent textStyle={{color: 'blue', fontSize: 13}} >
                          Send Message
                      </Button>
                    </View>
                  )

              } else {
                return (
                    <View style={{flex: 1, flexDirection:'column'}}>
                      <Text style={{fontSize: 13, fontWeight: '700'}}>Contact Info:</Text>
                      <Content style={{height: 75}}>
                        <Text note style={{color: '#000', fontSize: 13, padding: 5}}>{job.providerContact.firstName} {job.providerContact.lastName}</Text>
                        <Text note style={{color: '#000', fontSize: 13, padding: 5}}>{job.providerContact.email}</Text>
                        <Text note style={{color: '#000', fontSize: 13, padding: 5}}>{job.providerContact.cellPhone}</Text>
                      </Content>
                      <Button transparent textStyle={{color: 'blue', fontSize: 13}} >
                          Send Message
                      </Button>
                    </View>
                  )
              }
            } else {
              return (
                <View style={{flex: 1, flexDirection:'column'}}>
                  <CardItem style={styles.cardTitle}>
                    <Text style={styles.text}>{job.category}</Text>
                  </CardItem>
                  <Text style={{fontSize: 10, fontWeight: '700'}}>Description:</Text>
                  <Content style={{height: 75}}>
                    <Text note style={{color: '#87838B', fontSize: 13, padding: 10}}>{job.description}</Text>
                  </Content>
                </View>
              )
            }
          })()}
        </CardItem>
        <CardItem cardBody style={{ borderRadius: 5, height: 50 }}>
          {
            (job.active)
              ? this.renderAcceptedButtons(isProvider, handleDeclinePress, handleCompletePress)
              : this.renderNotAcceptedButtons(isProvider, handleAcceptPress, handleDeclinePress)
          }
        </CardItem>
      </Card>
    );
  }

  renderNotAcceptedButtons(isProvider, handleAcceptPress, handleDeclinePress) {
    if(isProvider) {
      return (
        <View style={styles.flexRow}>
          <Button style={styles.decline} textStyle={{ fontSize: 13 }} onPress={() => handleDeclinePress()}>
            <Icon name='md-close' style={{ fontSize: 15}}/>
            <Text>Decline</Text>
          </Button>
          <Button style={styles.accept} textStyle={{ fontSize: 13 }} onPress={() => handleAcceptPress()}>
            <Icon name='ios-checkbox' style={{ fontSize: 15}}/>
            <Text>Accept</Text>
          </Button>
        </View>
      )
    } else {
      return (
        <View style={styles.flexRow}>
          <Text style={styles.error}>Not Accepted Yet</Text>
          <Button style={styles.decline} textStyle={{fontSize: 10}} onPress={() => handleDeclinePress()}>
            <Icon name='md-close' style={{ fontSize: 15}}/>
            <Text >Cancel</Text>
          </Button>
        </View>
      )
    }
  }

  renderAcceptedButtons(isProvider, handleDeclinePress, handleCompletePress) {
    return (
      <View style={styles.flexRow}>
        <Button style={styles.button} onPress={() => this.handleContactPress()}>
            <Icon name='ios-contact'/>
        </Button>
        <Button style={styles.button} onPress={() => handleDeclinePress()}>
            <Icon name='md-close'/>
        </Button>
        <Button style={styles.button} onPress={() => handleCompletePress()}>
            <Icon name='md-checkbox'/>
        </Button>
      </View>
    )
  }

  renderContactInfo(isProvider, job) {

  }

  handleContactPress() {
    this.setState({
      contact: !this.state.contact
    })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
  },
  card: {
    margin: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  cardTitle: {
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamily,
    color: '#333',
    marginRight: 5,
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: '700',
  },
  button: {
    height: 35,
    width: 50,
  },
  accept: {
    backgroundColor: 'green',
    height: 30,
  },
  decline: {
    backgroundColor: 'red',
    height: 30,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});
