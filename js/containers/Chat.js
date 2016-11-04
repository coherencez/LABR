import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { AppRegistry, StyleSheet, View, Image, AsyncStorage } from 'react-native'

import { endpointIP } from '../css/variables'
export default class Chat extends Component {
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
        id1: this.props.id1,
        id2: this.props.id2
      })
    }

    fetch(API_ENDPOINT, requestObj)
      .then(res => res.json())
      .then(({ messages }) => {
        console.log('messages', messages)
        this.setState({
          messages: this.state.messages.concat(messages),
        })
      })
      .catch(console.error)


  }
  onSend(messages = []) {
    const newMessageObj = Object.assign({}, messages[0], {_id: this.props.id2})
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
    // const API_ENDPOINT = `${endpointIP}/labr/api/message`
    // const requestObj = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newMessageObj)
    // }
    //
    // fetch(API_ENDPOINT, requestObj)
    //   .then(res => res.json())
    //   .then(messages => {
    //     console.log(messages)
    //   })
    //   .catch(console.error)
  }
  render() {
    console.log('IDS',this.props)
    console.log('STATE',this.state)
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: this.props.id1,
        }}
      />
    );
  }
}
