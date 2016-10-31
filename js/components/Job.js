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

  render() {
    const { props : { job, isProvider } } = this
    return (
      <Card style={styles.card}>
        <CardItem cardBody style={{ borderRadius: 5, flexDirection: 'row' }}>
          <View style={{ padding: 5,  width: 75 }}>
            <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
              <Text note style={{color: '#87838B', fontSize: 10}}>{job.createdDate.split(' ').splice(0,4).join(' ')}</Text>
              <Text note style={{color: '#87838B', fontSize: 10}}>{job.startDate}</Text>
              <Text note style={{color: '#87838B', fontSize: 10}}>{job.endDate}</Text>
            </View>
            <Thumbnail
              square
              button
              source={{uri: 'http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Google-Maps-icon.png'}}
              size={50}
              style={{alignItems: 'flex-end'}}/>
          </View>
          <View style={{flex: 1, flexDirection:'column'}}>
            <CardItem style={styles.cardTitle}>
              <Text style={styles.text}>{job.category}</Text>
            </CardItem>
            <Text style={{fontSize: 10, fontWeight: '700'}}>Description:</Text>
            <Content style={{height: 65}}>
              <Text note style={{color: '#87838B', fontSize: 13, padding: 10}}>{job.description}</Text>
            </Content>
            <Button transparent textStyle={{color: 'blue', fontSize: 13}} >
                Send Message
            </Button>
          </View>
        </CardItem>
        <CardItem cardBody style={{ borderRadius: 5, height: 50 }}>
          {(job.active) ? this.renderAcceptedButtons() : this.renderNotAcceptedButtons(isProvider)}
        </CardItem>
      </Card>
    );
  }

  renderNotAcceptedButtons(isProvider) {
    if(isProvider) {
      return (
        <View style={styles.flexRow}>
          <Button style={styles.decline} textStyle={{ fontSize: 13 }} onPress={() => this.handleDeclinePress()}>
            <Icon name='md-close' style={{ fontSize: 15}}/>
            <Text>Decline</Text>
          </Button>
          <Button style={styles.accept} textStyle={{ fontSize: 13 }} onPress={() => this.handleAcceptPress()}>
            <Icon name='ios-checkbox' style={{ fontSize: 15}}/>
            <Text>Accept</Text>
          </Button>
        </View>
      )
    } else {
      return (
        <View style={styles.flexRow}>
          <Text style={styles.error}>Not Accepted Yet</Text>
          <Button style={styles.decline} textStyle={{fontSize: 10}} onPress={() => this.handleCancelPress()}>
            <Icon name='md-close' style={{ fontSize: 15}}/>
            <Text >Cancel</Text>
          </Button>
        </View>
      )
    }
  }

  renderAcceptedButtons() {
    return (
      <View style={styles.flexRow}>
        <Button style={styles.button} >
            <Icon name='ios-contact'/>
        </Button>
        <Button style={styles.button} >
            <Icon name='md-close'/>
        </Button>
        <Button style={styles.button} >
            <Icon name='md-checkbox'/>
        </Button>
      </View>
    )
  }

  handleAcceptPress() {
    console.log('ACCEPT PRESSED')
  }
  handleDeclinePress() {
    console.log('DECLINE PRESSED')
  }
  handleCancelPress() {
    console.log('CANCEL PRESSED')
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
