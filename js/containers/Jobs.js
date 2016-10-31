import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, List, ListItem, Icon, Footer } from 'native-base';

import SideNav from '../components/SideNav'
import SideMenu from 'react-native-side-menu'
import Job from '../components/Job'

import {
  navColor,
  bgColor,
  fontColorWhite,
  buttonBgColor,
  fontFamily,
  endpointIP
} from '../css/variables'

export default class Jobs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      statusMessage: null,
      isProvider: null,
    }

  }

  componentWillMount() {
    AsyncStorage.getItem('user')
    .then(res => JSON.parse(res))
    .then(user => {
      const isProvider = user.isProvider
      let id = null
      if(user) {
        switch(user.isProvider) {
          case true:
            id = user.provider._id
            break
          case false:
            id = user.id
            break
        }
        const API_ENDPOINT = `${endpointIP}/labr/api/jobs`
        const requestObj = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id,
            isProvider
          })
        }
        this.setState({
          isProvider: user.isProvider
        })
        return fetch(API_ENDPOINT, requestObj)
      } else {
        this.setState({
          statusMessage: `Uh oh! We didn't find any jobs for you. Please login or signup to get started!`
        })
      }

    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        jobs: this.state.jobs.concat(data.jobs)
      })
    })
    .catch(console.error)
  }

  render() {
    const menu = <SideNav />
    return (
      <SideMenu menu={menu}>
      <Container style={styles.alignmentFix, styles.container}>
        <Content>
          {(this.state.statusMessage) ? this.renderMessage() : null}
          {(this.state.jobs.length >= 1) ? this.renderJobs() : null}
        </Content>
        {(this.state.isProvider) ? this.renderIsProviderJobsButton() : null}
      </Container>
      </SideMenu>
    );
  }

  renderJobs() {
    return this.state.jobs.map((job, i) =>
      <Job
        job={job}
        isProvider={this.state.isProvider}
        key={i}
        handleAcceptPress={this.handleAcceptPress.bind(this, job)}
        handleDeclinePress={this.handleDeclinePress.bind(this, job)}/>
    )
  }
  renderMessage() {
    return (
      <View>
        <Text style={styles.error}>{this.state.statusMessage}</Text>
      </View>
    )
  }
  renderIsProviderJobsButton() {
    return (
      <Footer>
        <Button block style={{backgroundColor: buttonBgColor}} >
            See My Providers
        </Button>
      </Footer>
    )
  }

  handleAcceptPress(job) {
    const API_ENDPOINT = `${endpointIP}/labr/api/acceptjob`
    const requestObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: job._id
      })
    }
    fetch(API_ENDPOINT, requestObj)
      .then(res => res.json())
      .then(data => {
        console.log('FRONT END', data)
        let index = this.state.jobs.indexOf(data.job._id)
        console.log(index)
        console.log(this.state)
        this.setState({
          jobs: this.state.jobs.splice(index,1).concat([data.job])
        })
        console.log(this.state)
      })
      .catch(console.error)
  }

  handleDeclinePress(job) {
    console.log('DECLINE PRESSED', job)
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
    backgroundColor: buttonBgColor,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamily,
    color: fontColorWhite,
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: '700',
    margin: 10,
  },
  button: {
    height: 35,
    width: 50,
  },
});
