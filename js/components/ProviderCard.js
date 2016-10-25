import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content,
  List, ListItem,
  Text, Icon,
  Badge, InputGroup,
  Input, Button,
  Card, CardItem,
  Thumbnail} from 'native-base';

import { buttonBgColor, bgColor, fontFamily, fontColorWhite } from '../css/variables'
export default class ProviderCard extends Component {
  render() {
    const { props } = this
    const { provider, handlePress } = props
    return (
      <Card style={styles.card} >
        <CardItem style={{backgroundColor: buttonBgColor}}>
          <Text style={styles.text}>{provider.name}</Text>
        </CardItem>
        <CardItem cardBody button onPress={handlePress} style={{alignItems: 'center', justifyContent:'center'}}>
          <Thumbnail source={{uri: 'https://c2.staticflickr.com/6/5509/12298744374_9441f9cbeb_b.jpg'}} size={100} square/>
        </CardItem>
        <CardItem button onPress={handlePress}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Icon name='md-star' style={{color: '#6103B3', marginLeft: 7, marginRight: 7}}/>
            <Badge info style={styles.spacing}>{provider.exp}</Badge>
            <Icon name='ios-cash' style={{color: '#6103B3', marginLeft: 7, marginRight: 7}}/>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text note style={styles.listInfo}>4/5</Text>
            <Text note style={styles.listInfo}>xp</Text>
            <Text note style={styles.listInfo}>{provider.rate}</Text>
          </View>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    marginTop: 60,
    padding: 10,
  },
  card: {
    margin: 5,
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
    color: '#000',
    fontSize: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  spacing: {
    marginLeft: 7,
    marginRight: 7,
  },
});
