import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { AppRegistry, StyleSheet, View, Image, AsyncStorage } from 'react-native';

import { endpointIP } from '../css/variables'
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    const API_ENDPOINT = `${endpointIP}/labr/api/getmessages`
    const requestObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // id,
        // isProvider
      })
    }
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(messages => {
        console.log(messages)
        this.setState({
          messages: this.state.messages.concat(messages),
        })
      })
      .catch(console.error)


  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
