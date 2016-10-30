import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text, Icon, Badge, InputGroup, Input, Button } from 'native-base';

import { buttonBgColor, endpointIP } from '../css/variables'
export default class StartConvo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobDescription: '',
      errorMessage: null,
      successMessage: null,
    }
  }
  render() {
    const { props } = this
    return (
      <Container style={styles.alignmentFix}>
        <Content>
          {(() => {
            if(this.state.errorMessage) {
              return (
                <View>
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                </View>
              )
            } else if (this.state.successMessage) {
              return (
                <View>
                    <Text style={styles.success}>{this.state.successMessage}</Text>
                </View>
              )
            }
          })()}
          <Text>To: {props.provider.name}</Text>
          <Text>From: {props.user.firstName} {props.user.lastName}</Text>
          <Text>Category: {props.category}</Text>
            <InputGroup >
              <Input
                placeholder='A SHORT DESCRIPTION OF THE WORK YOU NEED'
                multiline={true}
                autoCapitalize='none'
                style={{ height: 200, marginTop: 15 }}
                onChangeText={(txt) => this.handleDescriptionChange(txt)}/>
            </InputGroup>
          <Button block style={styles.button} onPress={() => this.handleJobRequestPress(props.user, props.provider, props.category)}>Send Request For Work</Button>
        </Content>
      </Container>
    )
  }

  handleDescriptionChange(txt) {
    this.setState({
      jobDescription: txt
    })
  }

  handleJobRequestPress(user, prov, category) {
    const API_ENDPOINT = `${endpointIP}/labr/api/newjob`
    const requestObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: user.id,
        providerId: prov._id,
        category: category,
        description: this.state.jobDescription,
        userContact: user,
        provider: prov,
        createdDate: new Date().toString(),
      })
    }

    fetch(API_ENDPOINT, requestObj)
      .then(res => res.json())
      .then(data => {
        if(data.status === 200) {
          this.setState({
            successMessage: 'Thank you, your job request has been submitted! You will be redirected shortly'
          })
          setTimeout(() => {
            Actions.app({type: 'reset'})
          }, 3000)
        } else {
          this.setState({
            errorMessage: data.msg
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
    justifyContent: 'center',
    padding: 15,
  },
  hidden: {
    opacity: 0,
  },
  button: {
    backgroundColor: buttonBgColor,
    marginTop: 10,
  },
  textEdit: {
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: '700',
    margin: 10,
  },
  success: {
    color: 'green',
    fontSize: 15,
    fontWeight: '700',
    margin: 10,
  },
});
